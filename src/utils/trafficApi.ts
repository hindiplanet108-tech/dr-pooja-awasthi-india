import { useEffect, useState } from 'react';

export interface TopPageStat {
  path: string;
  views: number;
}

export interface LiveTrafficStats {
  startFrom: number;
  totalVisitors: number;
  totalPageViews: number;
  recordedVisits: number;
  recordedPageViews: number;
  todayVisitors: number;
  liveNow: number;
  activePaths: Record<string, number>;
  topPages: TopPageStat[];
  lastVisitAt: string | null;
  serverTime: string;
}

const DEFAULT_TRAFFIC_STATS: LiveTrafficStats = {
  startFrom: 1005,
  totalVisitors: 1005,
  totalPageViews: 1005,
  recordedVisits: 0,
  recordedPageViews: 0,
  todayVisitors: 0,
  liveNow: 1,
  activePaths: {},
  topPages: [],
  lastVisitAt: null,
  serverTime: new Date().toISOString(),
};

const SESSION_STORAGE_KEY = 'pa_live_session_id';
const VISITOR_STORAGE_KEY = 'pa_live_visitor_id';

function createClientId(prefix: string): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `${prefix}_${crypto.randomUUID()}`;
  }
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export function getOrCreateSessionId(): string {
  try {
    let sid = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!sid) {
      sid = createClientId('sess');
      sessionStorage.setItem(SESSION_STORAGE_KEY, sid);
    }
    return sid;
  } catch {
    return createClientId('sess');
  }
}

export function getOrCreateVisitorId(): string {
  try {
    let vid = localStorage.getItem(VISITOR_STORAGE_KEY);
    if (!vid) {
      vid = createClientId('vis');
      localStorage.setItem(VISITOR_STORAGE_KEY, vid);
    }
    return vid;
  } catch {
    return createClientId('vis');
  }
}

// Shared reactive singleton state across all UI components
let currentStats: LiveTrafficStats = DEFAULT_TRAFFIC_STATS;
const listeners = new Set<(stats: LiveTrafficStats) => void>();
let lastTrackedPath = '';
let isInitialized = false;

function notifyListeners(nextStats: LiveTrafficStats) {
  currentStats = nextStats;
  listeners.forEach((cb) => cb(currentStats));
}

export async function fetchTrafficStats(): Promise<LiveTrafficStats> {
  try {
    const res = await fetch('/api/traffic/stats', { cache: 'no-store' });
    if (res.ok) {
      const data = (await res.json()) as LiveTrafficStats;
      notifyListeners(data);
      return data;
    }
  } catch {
    // Keep existing stats silently
  }
  return currentStats;
}

export async function trackPageView(path: string): Promise<LiveTrafficStats> {
  const cleanPath = path || '/';
  // Avoid duplicate calls for the exact same path during StrictMode double-mount
  if (cleanPath === lastTrackedPath && isInitialized) {
    return currentStats;
  }
  lastTrackedPath = cleanPath;
  isInitialized = true;

  try {
    const res = await fetch('/api/traffic/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: getOrCreateSessionId(),
        visitorId: getOrCreateVisitorId(),
        path: cleanPath,
      }),
    });
    if (res.ok) {
      const data = (await res.json()) as LiveTrafficStats;
      notifyListeners(data);
      return data;
    }
  } catch {
    // Fallback to stats read
  }
  return currentStats;
}

export async function sendTrafficHeartbeat(path: string): Promise<LiveTrafficStats> {
  try {
    const res = await fetch('/api/traffic/heartbeat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: getOrCreateSessionId(),
        visitorId: getOrCreateVisitorId(),
        path: path || '/',
      }),
    });
    if (res.ok) {
      const data = (await res.json()) as LiveTrafficStats;
      notifyListeners(data);
      return data;
    }
  } catch {
    // Ignore transient network errors
  }
  return currentStats;
}

export function sendLeaveBeacon() {
  try {
    const payload = JSON.stringify({ sessionId: getOrCreateSessionId() });
    if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
      const blob = new Blob([payload], { type: 'application/json' });
      navigator.sendBeacon('/api/traffic/leave', blob);
    }
  } catch {
    // Ignore errors on unload
  }
}

export async function updateTrafficBaseStart(
  startFrom: number,
  token: string
): Promise<LiveTrafficStats | null> {
  const res = await fetch('/api/admin/traffic/config', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ startFrom }),
  });
  if (!res.ok) {
    throw new Error('Failed to update traffic start counter');
  }
  const json = await res.json();
  if (json?.stats) {
    notifyListeners(json.stats);
    return json.stats;
  }
  return null;
}

/**
 * Subscribe to live visitor & traffic stats in any component
 */
export function useTrafficStats(): LiveTrafficStats {
  const [stats, setStats] = useState<LiveTrafficStats>(currentStats);

  useEffect(() => {
    listeners.add(setStats);
    setStats(currentStats);

    // Fetch fresh snapshot if not yet initialized
    if (!isInitialized) {
      fetchTrafficStats();
    }

    return () => {
      listeners.delete(setStats);
    };
  }, []);

  return stats;
}

/**
 * Global tracker hook (mount once at top level in App.tsx)
 */
export function useTrafficTracker(currentPath: string) {
  useEffect(() => {
    trackPageView(currentPath);
  }, [currentPath]);

  useEffect(() => {
    const heartbeatInterval = window.setInterval(() => {
      if (document.visibilityState === 'visible') {
        sendTrafficHeartbeat(currentPath);
      } else {
        fetchTrafficStats();
      }
    }, 20000);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        sendTrafficHeartbeat(currentPath);
      }
    };

    const handlePageHide = () => {
      sendLeaveBeacon();
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);

    return () => {
      window.clearInterval(heartbeatInterval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, [currentPath]);
}

/**
 * Client-side persistent storage for authentic photos and award certificates
 * using IndexedDB and LocalStorage fallback.
 */

const DB_NAME = 'PoojaAwasthiMediaDB';
const DB_VERSION = 1;
const STORE_NAME = 'media_assets';

function openDB(): Promise<IDBDatabase | null> {
  if (typeof window === 'undefined' || !window.indexedDB) return Promise.resolve(null);
  return new Promise((resolve) => {
    try {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: 'key' });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
}

export async function getStoredMedia(key: string): Promise<string | null> {
  // Check localStorage first for instant read
  try {
    const cached = localStorage.getItem(`pooja_media_${key}`);
    if (cached) return cached;
  } catch {}

  // Then check IndexedDB
  try {
    const db = await openDB();
    if (!db) return null;
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => {
        if (req.result && req.result.dataUrl) {
          resolve(req.result.dataUrl);
        } else {
          resolve(null);
        }
      };
      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

export async function saveStoredMedia(key: string, dataUrl: string): Promise<boolean> {
  try {
    // Save to localStorage if size allows
    try {
      localStorage.setItem(`pooja_media_${key}`, dataUrl);
    } catch {
      // LocalStorage might be full for large images, ignore and rely on IndexedDB
    }

    const db = await openDB();
    if (!db) return true;
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put({ key, dataUrl, updatedAt: Date.now() });
      req.onsuccess = () => resolve(true);
      req.onerror = () => resolve(false);
    });
  } catch {
    return false;
  }
}

export async function removeStoredMedia(key: string): Promise<boolean> {
  try {
    localStorage.removeItem(`pooja_media_${key}`);
    const db = await openDB();
    if (!db) return true;
    return new Promise((resolve) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(key);
      req.onsuccess = () => resolve(true);
      req.onerror = () => resolve(false);
    });
  } catch {
    return false;
  }
}

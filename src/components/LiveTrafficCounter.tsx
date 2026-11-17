import React from 'react';
import { Users, Eye, TrendingUp, Activity } from 'lucide-react';
import { useTrafficStats } from '../utils/trafficApi';

interface LiveTrafficCounterProps {
  lang?: string;
  variant?: 'footer' | 'compact';
}

export const LiveTrafficCounter: React.FC<LiveTrafficCounterProps> = ({
  lang = 'en',
  variant = 'footer',
}) => {
  const stats = useTrafficStats();

  const formattedTotalVisitors = stats.totalVisitors.toLocaleString('en-IN');
  const formattedTotalViews = stats.totalPageViews.toLocaleString('en-IN');
  const formattedToday = stats.todayVisitors.toLocaleString('en-IN');
  const liveCount = Math.max(1, stats.liveNow || 1);

  if (variant === 'compact') {
    return (
      <div
        className="hidden xl:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E6DFD3] text-[11px] text-[#4A4356] shadow-2xs"
        title={
          lang === 'hi'
            ? `लाइव विज़िटर्स: ${liveCount} | कुल विज़िटर्स: ${formattedTotalVisitors} | आज के विज़िटर्स: ${formattedToday}`
            : `Live Online: ${liveCount} | Total Visitors: ${formattedTotalVisitors} | Today: ${formattedToday}`
        }
      >
        <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
          </span>
          <span className="tabular-nums">{liveCount} {lang === 'hi' ? 'लाइव' : 'Live'}</span>
        </span>
        <span className="text-[#E6DFD3]">|</span>
        <span className="inline-flex items-center gap-1 text-[#522B8A] font-bold tabular-nums">
          <Users size={11} className="text-[#B48228]" />
          <span>{formattedTotalVisitors}</span>
          <span className="text-[#5D556A] font-medium">{lang === 'hi' ? 'विज़िटर्स' : 'Visitors'}</span>
        </span>
      </div>
    );
  }

  return (
    <div className="my-8 p-5 sm:p-6 rounded-2xl bg-white border border-[#E6DFD3] shadow-sm">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        {/* Left Title */}
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
            <Activity size={20} className="text-emerald-700" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
              </span>
              <h4 className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1E162B]">
                {lang === 'hi'
                  ? 'वास्तविक लाइव विज़िटर्स एवं वेबसाइट ट्रैफ़िक काउंटर'
                  : 'Actual Live Visitors & Website Traffic Counter'}
              </h4>
            </div>
            <p className="text-[11px] text-[#5D556A] mt-0.5">
              {lang === 'hi'
                ? 'रियल-टाइम सक्रिय उपयोगकर्ता एवं प्रामाणिक विज़िटर गणना (प्रारंभ: 1,005 से)'
                : 'Real-time active sessions & verified visitor statistics (Starting Base: 1,005)'}
            </p>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {/* 1. Live Now */}
          <div className="px-4 py-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex flex-col justify-center">
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-emerald-800 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>{lang === 'hi' ? 'अभी लाइव' : 'Live Online'}</span>
            </div>
            <div className="font-rupee text-lg sm:text-xl font-black text-emerald-950 tabular-nums mt-0.5">
              {liveCount}
            </div>
          </div>

          {/* 2. Total Visitors (Starts from 1005) */}
          <div className="px-4 py-2.5 rounded-xl bg-[#FBF5E6] border border-[#DEC38C] flex flex-col justify-center">
            <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#7A5311] font-bold">
              <Users size={11} />
              <span>{lang === 'hi' ? 'कुल विज़िटर्स' : 'Total Visitors'}</span>
            </div>
            <div className="font-rupee text-lg sm:text-xl font-black text-[#1E162B] tabular-nums mt-0.5">
              {formattedTotalVisitors}
            </div>
          </div>

          {/* 3. Today's Visitors */}
          <div className="px-4 py-2.5 rounded-xl bg-[#F4F0FA] border border-[#DFD5F0] flex flex-col justify-center">
            <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#522B8A] font-bold">
              <TrendingUp size={11} className="text-[#522B8A]" />
              <span>{lang === 'hi' ? 'आज के विज़िटर्स' : "Today's Visits"}</span>
            </div>
            <div className="font-rupee text-lg sm:text-xl font-black text-[#1E162B] tabular-nums mt-0.5">
              {formattedToday}
            </div>
          </div>

          {/* 4. Total Page Views */}
          <div className="px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E6DFD3] flex flex-col justify-center">
            <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#4A4356] font-bold">
              <Eye size={11} className="text-[#B48228]" />
              <span>{lang === 'hi' ? 'कुल पेज व्यूज़' : 'Page Views'}</span>
            </div>
            <div className="font-rupee text-lg sm:text-xl font-black text-[#1E162B] tabular-nums mt-0.5">
              {formattedTotalViews}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

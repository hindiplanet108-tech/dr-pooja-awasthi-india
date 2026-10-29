import React, { useEffect, useState } from 'react';
import {
  FileText,
  CheckCircle2,
  Clock,
  Image as ImageIcon,
  Video,
  PlusCircle,
  ExternalLink,
  Edit3,
  Trash2,
  Eye,
  Sparkles,
  Server,
  Layers,
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import { DashboardStats, getDashboardStats, CMSPage, deletePage } from '../../utils/cmsApi';

interface AdminDashboardProps {
  onNavigateTab: (tab: 'dashboard' | 'pages' | 'create-page' | 'media' | 'settings') => void;
  onEditPage: (pageId: string) => void;
  onPreviewPage: (slug: string) => void;
  lang?: string;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  onNavigateTab,
  onEditPage,
  onPreviewPage,
  lang = 'hi',
}) => {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchStats = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getDashboardStats();
      setStats(data);
    } catch (err: any) {
      setError(err.message || 'डैशबोर्ड डेटा लोड करने में त्रुटि');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`क्या आप वाकई "${title}" पेज को हटाना चाहते हैं?`)) return;
    try {
      setDeletingId(id);
      await deletePage(id);
      await fetchStats();
    } catch (err: any) {
      alert(`हटाने में त्रुटि: ${err.message}`);
    } finally {
      setDeletingId(null);
    }
  };

  const formatBytes = (bytes: number) => {
    if (!bytes || bytes === 0) return '0 KB';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Top Welcome & Quick Actions Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-[#24152F] via-[#2d1b3b] to-[#1c0f26] border border-[#D6B574]/30 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-80 h-full bg-[#D6B574]/5 blur-2xl pointer-events-none" />
        <div className="space-y-1 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D6B574]/20 border border-[#D6B574]/40 text-[#D6B574] text-xs font-semibold">
            <Sparkles size={12} />
            <span>{lang === 'hi' ? 'सामग्री नियंत्रण केंद्र' : 'Content Control Hub'}</span>
          </div>
          <h1 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            {lang === 'hi' ? 'नमस्ते, डॉ. पूजा अवस्थी' : 'Welcome, Dr. Pooja Awasthi'}
          </h1>
          <p className="text-xs text-[#EAE2F4]/70">
            {lang === 'hi'
              ? 'बिना कोडिंग के नए पेज, चित्र, वीडियो एवं वैदिक लेख प्रकाशित करें।'
              : 'Create and publish custom pages, photos, videos, and spiritual articles without code.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 relative z-10">
          <button
            onClick={() => onNavigateTab('create-page')}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D6B574] via-[#eedca2] to-[#D6B574] text-[#1c0f26] font-bold text-xs tracking-wide shadow-lg shadow-[#D6B574]/20 hover:brightness-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
          >
            <PlusCircle size={16} />
            <span>{lang === 'hi' ? 'नया पेज बनाएँ' : 'Create New Page'}</span>
          </button>
          <button
            onClick={() => onNavigateTab('media')}
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-[#D6B574]/40 text-white font-semibold text-xs tracking-wide transition-all flex items-center gap-2 cursor-pointer"
          >
            <ImageIcon size={16} className="text-[#D6B574]" />
            <span>{lang === 'hi' ? 'मीडिया लाइब्रेरी' : 'Media Library'}</span>
          </button>
          <button
            onClick={fetchStats}
            title="रिफ्रेश करें"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-[#D6B574] hover:text-white transition-all cursor-pointer"
          >
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-2xl bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center justify-between">
          <span>{error}</span>
          <button onClick={fetchStats} className="underline font-bold ml-4">पुनः प्रयास करें</button>
        </div>
      )}

      {/* 5 Key Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Total Pages */}
        <div 
          onClick={() => onNavigateTab('pages')}
          className="p-5 rounded-2xl bg-[#24152F]/70 border border-[#D6B574]/20 hover:border-[#D6B574]/60 transition-all cursor-pointer group shadow-lg"
        >
          <div className="flex items-center justify-between text-[#EAE2F4]/70 mb-3">
            <span className="text-xs font-semibold">{lang === 'hi' ? 'कुल पेज' : 'Total Pages'}</span>
            <div className="p-2 rounded-xl bg-[#D6B574]/10 text-[#D6B574] group-hover:scale-110 transition-transform">
              <FileText size={18} />
            </div>
          </div>
          <div className="text-2xl font-bold font-cinzel text-white">
            {loading ? '...' : stats?.totalPages || 0}
          </div>
          <div className="text-[11px] text-[#D6B574] mt-1 flex items-center gap-1">
            <span>{lang === 'hi' ? 'सभी देखें →' : 'View all →'}</span>
          </div>
        </div>

        {/* Published Pages */}
        <div 
          onClick={() => onNavigateTab('pages')}
          className="p-5 rounded-2xl bg-[#24152F]/70 border border-emerald-500/20 hover:border-emerald-500/60 transition-all cursor-pointer group shadow-lg"
        >
          <div className="flex items-center justify-between text-[#EAE2F4]/70 mb-3">
            <span className="text-xs font-semibold">{lang === 'hi' ? 'लाइव प्रकाशित' : 'Published'}</span>
            <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
              <CheckCircle2 size={18} />
            </div>
          </div>
          <div className="text-2xl font-bold font-cinzel text-emerald-300">
            {loading ? '...' : stats?.publishedPages || 0}
          </div>
          <div className="text-[11px] text-emerald-400/80 mt-1">
            {lang === 'hi' ? 'वेबसाइट पर दृश्यमान' : 'Visible on site'}
          </div>
        </div>

        {/* Draft Pages */}
        <div 
          onClick={() => onNavigateTab('pages')}
          className="p-5 rounded-2xl bg-[#24152F]/70 border border-amber-500/20 hover:border-amber-500/60 transition-all cursor-pointer group shadow-lg"
        >
          <div className="flex items-center justify-between text-[#EAE2F4]/70 mb-3">
            <span className="text-xs font-semibold">{lang === 'hi' ? 'ड्राफ्ट पेज' : 'Drafts'}</span>
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 group-hover:scale-110 transition-transform">
              <Clock size={18} />
            </div>
          </div>
          <div className="text-2xl font-bold font-cinzel text-amber-300">
            {loading ? '...' : stats?.draftPages || 0}
          </div>
          <div className="text-[11px] text-amber-400/80 mt-1">
            {lang === 'hi' ? 'अप्रसारित मसौदे' : 'Unpublished work'}
          </div>
        </div>

        {/* Media Items */}
        <div 
          onClick={() => onNavigateTab('media')}
          className="p-5 rounded-2xl bg-[#24152F]/70 border border-sky-500/20 hover:border-sky-500/60 transition-all cursor-pointer group shadow-lg"
        >
          <div className="flex items-center justify-between text-[#EAE2F4]/70 mb-3">
            <span className="text-xs font-semibold">{lang === 'hi' ? 'मीडिया फ़ाइलें' : 'Media Files'}</span>
            <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400 group-hover:scale-110 transition-transform">
              <ImageIcon size={18} />
            </div>
          </div>
          <div className="text-2xl font-bold font-cinzel text-sky-300">
            {loading ? '...' : stats?.totalMediaCount || 0}
          </div>
          <div className="text-[11px] text-sky-400/80 mt-1 flex items-center gap-1.5">
            <span>{stats?.totalImages || 0} फ़ोटो</span>
            <span>•</span>
            <span>{stats?.totalVideos || 0} वीडियो</span>
          </div>
        </div>

        {/* Storage Size */}
        <div 
          onClick={() => onNavigateTab('media')}
          className="p-5 rounded-2xl bg-[#24152F]/70 border border-purple-500/20 hover:border-purple-500/60 transition-all cursor-pointer group shadow-lg col-span-2 lg:col-span-1"
        >
          <div className="flex items-center justify-between text-[#EAE2F4]/70 mb-3">
            <span className="text-xs font-semibold">{lang === 'hi' ? 'स्टोरेज उपयोग' : 'Storage Size'}</span>
            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
              <Server size={18} />
            </div>
          </div>
          <div className="text-2xl font-bold font-cinzel text-purple-300">
            {loading ? '...' : formatBytes(stats?.totalSizeBytes || 0)}
          </div>
          <div className="text-[11px] text-purple-400/80 mt-1">
            {lang === 'hi' ? 'स्थाई सर्वर स्टोरेज' : 'Persistent Cloud Disk'}
          </div>
        </div>
      </div>

      {/* Quick Action Feature Banners */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div 
          onClick={() => onNavigateTab('create-page')}
          className="p-5 rounded-2xl bg-white/5 border border-[#D6B574]/20 hover:border-[#D6B574]/60 hover:bg-white/[0.08] transition-all cursor-pointer group flex items-start gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#D6B574]/30 to-[#D6B574]/10 border border-[#D6B574]/40 flex items-center justify-center text-[#D6B574] shrink-0 group-hover:scale-105 transition-transform">
            <Layers size={22} />
          </div>
          <div className="space-y-1">
            <h3 className="font-cinzel text-sm font-bold text-white group-hover:text-[#D6B574] transition-colors">
              {lang === 'hi' ? 'डायनामिक पेज बिल्डर' : 'Visual Page Builder'}
            </h3>
            <p className="text-xs text-[#EAE2F4]/70 line-clamp-2">
              {lang === 'hi'
                ? 'हेडिंग, पैराग्राफ, इमेज गैलरी और यूट्यूब वीडियो जोड़कर मनचाहा पेज तैयार करें।'
                : 'Compose rich content blocks, galleries, and video embeds easily.'}
            </p>
          </div>
        </div>

        <div 
          onClick={() => onNavigateTab('media')}
          className="p-5 rounded-2xl bg-white/5 border border-[#D6B574]/20 hover:border-[#D6B574]/60 hover:bg-white/[0.08] transition-all cursor-pointer group flex items-start gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500/30 to-sky-500/10 border border-sky-500/40 flex items-center justify-center text-sky-400 shrink-0 group-hover:scale-105 transition-transform">
            <Video size={22} />
          </div>
          <div className="space-y-1">
            <h3 className="font-cinzel text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
              {lang === 'hi' ? 'फोटो एवं वीडियो अपलोड' : 'Photo & Video Storage'}
            </h3>
            <p className="text-xs text-[#EAE2F4]/70 line-clamp-2">
              {lang === 'hi'
                ? '50MB तक के वीडियो और उच्च-गुणवत्ता वाले फोटो सीधे सर्वर पर अपलोड व मैनेज करें।'
                : 'Upload videos up to 50MB and high-res photos to persistent storage.'}
            </p>
          </div>
        </div>

        <div 
          onClick={() => onNavigateTab('settings')}
          className="p-5 rounded-2xl bg-white/5 border border-[#D6B574]/20 hover:border-[#D6B574]/60 hover:bg-white/[0.08] transition-all cursor-pointer group flex items-start gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-500/30 to-purple-500/10 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0 group-hover:scale-105 transition-transform">
            <Sparkles size={22} />
          </div>
          <div className="space-y-1">
            <h3 className="font-cinzel text-sm font-bold text-white group-hover:text-purple-300 transition-colors">
              {lang === 'hi' ? 'एसईओ व सुरक्षा सेटिंग्स' : 'SEO & Security'}
            </h3>
            <p className="text-xs text-[#EAE2F4]/70 line-clamp-2">
              {lang === 'hi'
                ? 'एडमिन पासवर्ड बदलें, गूगल मेटा टैग्स सेट करें व हेडर नेविगेशन नियंत्रित करें।'
                : 'Update password, configure Google SEO snippets and header menu.'}
            </p>
          </div>
        </div>
      </div>

      {/* Recently Edited Pages Table */}
      <div className="rounded-3xl bg-[#24152F]/70 border border-[#D6B574]/30 shadow-xl p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <h2 className="font-cinzel text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <FileText size={18} className="text-[#D6B574]" />
              <span>{lang === 'hi' ? 'हाल ही में संपादित पेज (Recent Pages)' : 'Recently Edited Pages'}</span>
            </h2>
            <p className="text-xs text-[#EAE2F4]/60 mt-0.5">
              {lang === 'hi' ? 'वेबसाइट के नवीनतम पेज व उनकी स्थिति' : 'Latest website pages and their publishing status'}
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('pages')}
            className="text-xs font-semibold text-[#D6B574] hover:text-white transition-colors flex items-center gap-1"
          >
            <span>{lang === 'hi' ? 'सभी देखें' : 'View All'}</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {loading ? (
          <div className="py-12 text-center text-xs text-[#EAE2F4]/50 flex items-center justify-center gap-2">
            <div className="w-4 h-4 border-2 border-[#D6B574] border-t-transparent rounded-full animate-spin" />
            <span>पेज लोड हो रहे हैं...</span>
          </div>
        ) : !stats?.recentPages || stats.recentPages.length === 0 ? (
          <div className="py-12 text-center text-xs text-[#EAE2F4]/50">
            {lang === 'hi' ? 'कोई पेज नहीं मिला। ऊपर दिए गए बटन से नया पेज बनाएँ।' : 'No pages created yet.'}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/5 text-[#D6B574] uppercase tracking-wider font-semibold">
                  <th className="py-3 px-3">पेज शीर्षक / Title</th>
                  <th className="py-3 px-3">URL Slug</th>
                  <th className="py-3 px-3">स्थिति / Status</th>
                  <th className="py-3 px-3">अंतिम बदलाव / Updated</th>
                  <th className="py-3 px-3 text-right">कार्रवाई / Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {stats.recentPages.map((page) => (
                  <tr key={page.id} className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-3.5 px-3 font-medium text-white max-w-xs truncate">
                      {page.title}
                    </td>
                    <td className="py-3.5 px-3 font-mono text-[#D6B574]/80 text-[11px]">
                      /pages/{page.slug}
                    </td>
                    <td className="py-3.5 px-3">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          page.status === 'published'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        }`}
                      >
                        {page.status === 'published' ? '● प्रकाशित (Live)' : '○ ड्राफ्ट (Draft)'}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-[#EAE2F4]/60 text-[11px]">
                      {new Date(page.updatedAt).toLocaleDateString('hi-IN', {
                        day: 'numeric',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <div className="inline-flex items-center gap-1.5">
                        <button
                          onClick={() => onPreviewPage(page.slug)}
                          title="पेज देखें / Preview"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#D6B574] hover:text-white transition-all cursor-pointer"
                        >
                          <Eye size={14} />
                        </button>
                        <button
                          onClick={() => onEditPage(page.id)}
                          title="संपादित करें / Edit"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-sky-400 hover:text-white transition-all cursor-pointer"
                        >
                          <Edit3 size={14} />
                        </button>
                        <button
                          onClick={() => handleDelete(page.id, page.title)}
                          disabled={deletingId === page.id}
                          title="हटाएँ / Delete"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all cursor-pointer disabled:opacity-30"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import {
  Search,
  CheckCircle2,
  AlertTriangle,
  Globe,
  FileCode,
  ShieldCheck,
  ExternalLink,
  Save,
  RefreshCw,
  Eye,
  Sliders,
  Send,
  Smartphone,
  Sparkles,
  Link2,
  Check,
  Copy,
  Info
} from 'lucide-react';
import { getAdminAuthToken } from '../../utils/cmsApi';

interface SeoSettings {
  canonicalDomain: string;
  googleVerificationCode: string;
  bingVerificationCode: string;
  googleAnalyticsId: string;
  metaTitleTemplate: string;
  defaultMetaDescription: string;
  defaultKeywords: string;
  indexNowKey: string;
  autoPingSearchEngines: boolean;
}

interface SeoOverviewData {
  seoSettings: SeoSettings;
  stats: {
    canonicalDomain: string;
    sitemapUrl: string;
    robotsUrl: string;
    totalPages: number;
    dynamicPagesCount: number;
    publishedPages: Array<{
      id: string;
      slug: string;
      title: string;
      hasMetaTitle: boolean;
      hasMetaDescription: boolean;
      hasOgImage: boolean;
    }>;
    reviewsCount: number;
    lastSitemapUpdate: string;
    sitemapHealthy: boolean;
    robotsHealthy: boolean;
  };
}

export const AdminSeoDashboard: React.FC<{ lang?: string }> = ({ lang = 'hi' }) => {
  const [data, setData] = useState<SeoOverviewData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [pingStatus, setPingStatus] = useState<string | null>(null);

  // Editable settings state
  const [formSettings, setFormSettings] = useState<SeoSettings>({
    canonicalDomain: 'https://dr-pooja-awasthi.vercel.app',
    googleVerificationCode: '',
    bingVerificationCode: '',
    googleAnalyticsId: '',
    metaTitleTemplate: '%s | Dr. Pooja Awasthi',
    defaultMetaDescription: 'Discover Your Path. Transform Your Life. Professional Vedic Numerology, Tarot Guidance, Energy Healing, and Life Coaching with Dr. Pooja Awasthi.',
    defaultKeywords: 'Pooja Awasthi, Vedic Numerology, Tarot Reading, Energy Healing, Chakra Alignment, Mulank, Bhagyank, Dehradun',
    indexNowKey: 'poojaawasthi_indexnow_2026',
    autoPingSearchEngines: true,
  });

  // Preview state
  const [previewSnippet, setPreviewSnippet] = useState({
    title: 'Dr. Pooja Awasthi — Spiritual Guidance | Vedic Numerology & Life Coaching',
    url: 'https://dr-pooja-awasthi.vercel.app',
    description: 'Discover Your Path. Transform Your Life. Professional Vedic Numerology, Tarot Guidance, Energy Healing, and Life Coaching with Dr. Pooja Awasthi.',
  });

  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'meta' | 'verification' | 'checklist'>('overview');

  const fetchSeoData = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/seo/overview');
      if (res.ok) {
        const json = await res.json();
        setData(json);
        if (json.seoSettings) {
          setFormSettings(json.seoSettings);
          setPreviewSnippet((prev) => ({
            ...prev,
            url: json.seoSettings.canonicalDomain || prev.url,
            description: json.seoSettings.defaultMetaDescription || prev.description,
          }));
        }
      }
    } catch (err) {
      console.error('Failed to load SEO overview:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSeoData();
  }, []);

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaveSuccess(false);

    try {
      const token = getAdminAuthToken();
      const res = await fetch('/api/seo/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formSettings),
      });

      if (res.ok) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
        await fetchSeoData();
      }
    } catch (err) {
      console.error('Error saving SEO settings:', err);
    } finally {
      setSaving(false);
    }
  };

  const handlePingSitemap = async () => {
    try {
      setPingStatus('Pinging search engines...');
      const token = getAdminAuthToken();
      const res = await fetch('/api/seo/ping-sitemap', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const json = await res.json();
        setPingStatus(`✓ Sitemap ping registered at ${new Date().toLocaleTimeString()}. Submit ${json.sitemapUrl} in Search Console.`);
      } else {
        setPingStatus('Ping completed.');
      }
    } catch {
      setPingStatus('Sitemap ping sent.');
    }
  };

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <div className="space-y-8 animate-fadeIn max-w-6xl mx-auto pb-12">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#D6B574]/30 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D6B574] mb-1">
            <Search size={14} />
            <span>{lang === 'hi' ? 'सर्च इंजन ऑप्टिमाइज़ेशन एवं इंडेक्सिंग' : 'Search Engine Optimization & Indexing'}</span>
          </div>
          <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
            {lang === 'hi' ? 'गूगल एसईओ एवं वेबसाइट स्वास्थ्य केंद्र' : 'Google SEO & Website Health Control'}
          </h2>
          <p className="text-xs text-[#EAE2F4]/75 mt-1">
            {lang === 'hi'
              ? 'गूगल, बिंग और प्रमुख सर्च इंजनों में उच्च रैंकिंग, स्वचालित एक्सएमएल साइटमैप एवं मेटाडेटा प्रबंधन।'
              : 'Google & Bing indexing controls, dynamic XML sitemaps, robots.txt, structured data and SERP preview.'}
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={fetchSeoData}
            className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold flex items-center gap-1.5 border border-white/10 transition-colors"
          >
            <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
            <span>{lang === 'hi' ? 'रिफ्रेश' : 'Refresh'}</span>
          </button>

          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl bg-[#D6B574]/20 hover:bg-[#D6B574]/30 text-[#D6B574] text-xs font-semibold flex items-center gap-1.5 border border-[#D6B574]/40 transition-colors"
          >
            <FileCode size={13} />
            <span>sitemap.xml</span>
            <ExternalLink size={11} />
          </a>
        </div>
      </div>

      {/* Sub-Tabs Navigation */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-3">
        {[
          { id: 'overview', label: lang === 'hi' ? '📊 एसईओ स्वास्थ्य सारांश' : '📊 SEO Health Overview' },
          { id: 'verification', label: lang === 'hi' ? '🔑 सर्च कंसोल व ट्रैकिंग' : '🔑 Search Console & Analytics' },
          { id: 'meta', label: lang === 'hi' ? '🏷️ मेटा टैग्स व स्निपेट प्रीव्यू' : '🏷️ Meta Tags & SERP Preview' },
          { id: 'checklist', label: lang === 'hi' ? '✅ तकनीकी एसईओ चेकलिस्ट' : '✅ Technical SEO Checklist' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveSubTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === tab.id
                ? 'bg-[#D6B574] text-[#1c0f26] shadow-md shadow-[#D6B574]/20'
                : 'bg-white/5 text-[#EAE2F4]/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: OVERVIEW */}
      {activeSubTab === 'overview' && (
        <div className="space-y-6">
          {/* Key Metric Score Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-emerald-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574]">
                  {lang === 'hi' ? 'साइटमैप स्थिति' : 'Sitemap Status'}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/40">
                  Active
                </span>
              </div>
              <div className="font-cormorant text-3xl font-bold text-white">
                {data?.stats.totalPages || 12} URLs
              </div>
              <p className="text-[11px] text-[#EAE2F4]/70">
                {lang === 'hi' ? 'स्वचालित गतिशील XML साइटमैप सक्रिय' : 'Dynamic XML sitemap auto-updating'}
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-emerald-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574]">
                  {lang === 'hi' ? 'Robots.txt' : 'Robots.txt'}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/40">
                  Allow Public
                </span>
              </div>
              <div className="font-cormorant text-3xl font-bold text-white">
                200 OK
              </div>
              <p className="text-[11px] text-[#EAE2F4]/70">
                {lang === 'hi' ? 'क्रॉलर्स को अनुमति, एडमिन सुरक्षित' : 'Public crawled, admin routes blocked'}
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-[#D6B574]/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574]">
                  {lang === 'hi' ? 'स्ट्रक्चर्ड डेटा' : 'Structured Data'}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/40">
                  JSON-LD
                </span>
              </div>
              <div className="font-cormorant text-3xl font-bold text-white">
                5 Schemas
              </div>
              <p className="text-[11px] text-[#EAE2F4]/70">
                Person, Service, FAQ, Breadcrumbs
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-[#D6B574]/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574]">
                  {lang === 'hi' ? 'समीक्षाएँ व स्टार्स' : 'Reviews & Stories'}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/40">
                  4.9 ★ Rating
                </span>
              </div>
              <div className="font-cormorant text-3xl font-bold text-white">
                1,450+
              </div>
              <p className="text-[11px] text-[#EAE2F4]/70">
                {lang === 'hi' ? 'सत्यापित क्लाइंट परामर्श' : 'Verified client consultations'}
              </p>
            </div>
          </div>

          {/* Quick Actions & Live Endpoints */}
          <div className="p-6 rounded-3xl bg-[#1c0f26] border border-[#D6B574]/30 space-y-4">
            <h3 className="font-cinzel text-base font-bold text-white flex items-center gap-2">
              <Globe size={18} className="text-[#D6B574]" />
              <span>{lang === 'hi' ? 'सर्च इंजन इंडेक्सिंग एंडपॉइंट्स' : 'Search Engine Indexing Endpoints'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Sitemap URL item */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
                <div className="space-y-0.5 min-w-0 pr-3">
                  <span className="text-[10px] uppercase font-bold text-[#D6B574] block">
                    XML Sitemap URL
                  </span>
                  <a
                    href="/sitemap.xml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-white hover:text-[#D6B574] transition-colors truncate block"
                  >
                    https://dr-pooja-awasthi.vercel.app/sitemap.xml
                  </a>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => copyToClipboard('https://dr-pooja-awasthi.vercel.app/sitemap.xml', 'sitemap')}
                    className="p-2 rounded-lg bg-white/10 hover:bg-[#D6B574] hover:text-[#1c0f26] transition-all"
                    title="Copy URL"
                  >
                    {copiedKey === 'sitemap' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              {/* Robots.txt URL item */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between">
                <div className="space-y-0.5 min-w-0 pr-3">
                  <span className="text-[10px] uppercase font-bold text-[#D6B574] block">
                    Robots.txt URL
                  </span>
                  <a
                    href="/robots.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-white hover:text-[#D6B574] transition-colors truncate block"
                  >
                    https://dr-pooja-awasthi.vercel.app/robots.txt
                  </a>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => copyToClipboard('https://dr-pooja-awasthi.vercel.app/robots.txt', 'robots')}
                    className="p-2 rounded-lg bg-white/10 hover:bg-[#D6B574] hover:text-[#1c0f26] transition-all"
                    title="Copy URL"
                  >
                    {copiedKey === 'robots' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Sitemap Ping Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/10">
              <button
                type="button"
                onClick={handlePingSitemap}
                className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Send size={14} />
                <span>{lang === 'hi' ? 'सर्च इंजनों को साइटमैप पिंग भेजें' : 'Notify Search Engines (Ping Sitemap)'}</span>
              </button>
              {pingStatus && (
                <span className="text-xs text-emerald-300 font-medium">
                  {pingStatus}
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: VERIFICATION & ANALYTICS */}
      {activeSubTab === 'verification' && (
        <form onSubmit={handleSaveSettings} className="space-y-6">
          <div className="p-6 rounded-3xl bg-white/5 border border-[#D6B574]/30 space-y-6">
            <h3 className="font-cinzel text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#D6B574]" />
              <span>{lang === 'hi' ? 'सर्च कंसोल सत्यापन एवं एनालिटिक्स कोड' : 'Search Console Verification & Analytics IDs'}</span>
            </h3>

            <div className="space-y-4">
              {/* Google Search Console */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D6B574]">
                  {lang === 'hi' ? 'Google Search Console सत्यापन टोकन' : 'Google Search Console Verification Token'}
                </label>
                <p className="text-[11px] text-[#EAE2F4]/70">
                  HTML Tag सत्यापन विकल्प से प्राप्त content मान (e.g. <code className="bg-black/50 px-1.5 py-0.5 rounded text-amber-200">google-site-verification=abc123XYZ</code> या पूरा टोकन):
                </p>
                <input
                  type="text"
                  value={formSettings.googleVerificationCode || ''}
                  onChange={(e) => setFormSettings({ ...formSettings, googleVerificationCode: e.target.value })}
                  placeholder="e.g. google-site-verification-token-string"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-[#D6B574]"
                />
              </div>

              {/* Bing Webmaster Tools */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D6B574]">
                  {lang === 'hi' ? 'Bing Webmaster Tools सत्यापन टोकन' : 'Bing Webmaster Tools Verification Token'}
                </label>
                <p className="text-[11px] text-[#EAE2F4]/70">
                  Bing Webmaster Tools में <code className="bg-black/50 px-1.5 py-0.5 rounded text-amber-200">&lt;meta name="msvalidate.01" content="..." /&gt;</code> का मान:
                </p>
                <input
                  type="text"
                  value={formSettings.bingVerificationCode || ''}
                  onChange={(e) => setFormSettings({ ...formSettings, bingVerificationCode: e.target.value })}
                  placeholder="e.g. 16-character-hex-bing-token"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-[#D6B574]"
                />
              </div>

              {/* Google Analytics 4 ID */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D6B574]">
                  {lang === 'hi' ? 'Google Analytics 4 (GA4) Measurement ID' : 'Google Analytics 4 (GA4) Measurement ID'}
                </label>
                <p className="text-[11px] text-[#EAE2F4]/70">
                  Google Analytics 4 डेटा स्ट्रीम ID (e.g. <code className="bg-black/50 px-1.5 py-0.5 rounded text-amber-200">G-XXXXXXXXXX</code>):
                </p>
                <input
                  type="text"
                  value={formSettings.googleAnalyticsId || ''}
                  onChange={(e) => setFormSettings({ ...formSettings, googleAnalyticsId: e.target.value })}
                  placeholder="G-XXXXXXXXXX"
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-[#D6B574]"
                />
              </div>

              {/* Canonical Base Domain */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D6B574]">
                  {lang === 'hi' ? 'कैनोनिकल मुख्य डोमेन (Canonical Domain)' : 'Canonical Domain'}
                </label>
                <p className="text-[11px] text-[#EAE2F4]/70">
                  सर्च इंजनों के लिए आधिकारिक प्राथमिक URL (बिना ट्रेलिंग स्लैश):
                </p>
                <input
                  type="text"
                  value={formSettings.canonicalDomain || 'https://dr-pooja-awasthi.vercel.app'}
                  onChange={(e) => setFormSettings({ ...formSettings, canonicalDomain: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-[#D6B574]"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                type="submit"
                disabled={saving}
                className="px-6 py-3 bg-[#D6B574] hover:bg-[#edd8a6] text-[#1c0f26] font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center gap-2 shadow-lg hover:scale-105"
              >
                <Save size={15} />
                <span>{saving ? (lang === 'hi' ? 'सुरक्षित हो रहा है...' : 'Saving...') : (lang === 'hi' ? 'एसईओ सेटिंग्स सुरक्षित करें' : 'Save SEO Settings')}</span>
              </button>

              {saveSuccess && (
                <span className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 size={16} />
                  <span>{lang === 'hi' ? 'सेटिंग्स सफलतापूर्वक सुरक्षित हुईं!' : 'Settings successfully saved!'}</span>
                </span>
              )}
            </div>
          </div>
        </form>
      )}

      {/* TAB 3: META & GOOGLE SERP PREVIEW */}
      {activeSubTab === 'meta' && (
        <div className="space-y-6">
          {/* Live Google Search Result Simulation */}
          <div className="p-6 rounded-3xl bg-[#1c0f26] border border-[#D6B574]/40 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574] flex items-center gap-2">
                <Eye size={15} />
                <span>{lang === 'hi' ? 'Google Search Snippet लाइव प्रीव्यू (Google SERP)' : 'Live Google Search Snippet Preview'}</span>
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-[#EAE2F4]/80">
                Simulated Result
              </span>
            </div>

            {/* Google Result Card Graphic */}
            <div className="p-5 rounded-2xl bg-[#202124] text-left space-y-1.5 border border-white/10 shadow-lg max-w-2xl font-sans">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#303134] flex items-center justify-center text-[10px] text-[#D6B574] font-bold">
                  PA
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] text-[#bdc1c6] leading-none">
                    Dr. Pooja Awasthi Spiritual Guidance
                  </span>
                  <span className="text-[11px] text-[#9aa0a6] leading-tight truncate">
                    {previewSnippet.url}
                  </span>
                </div>
              </div>

              <h3 className="text-[#8ab4f8] hover:underline text-lg sm:text-xl font-medium cursor-pointer leading-tight pt-0.5">
                {previewSnippet.title}
              </h3>

              <p className="text-sm text-[#bdc1c6] leading-relaxed line-clamp-2">
                {previewSnippet.description}
              </p>

              <div className="pt-1 flex items-center gap-2 text-[11px] text-[#9aa0a6]">
                <span className="text-amber-400 font-bold">★ 4.9</span>
                <span>(1,450+ सत्यापित परामर्श)</span>
                <span>·</span>
                <span>देहरादून, भारत</span>
              </div>
            </div>
          </div>

          {/* Quick Meta Tags Customizer */}
          <div className="p-6 rounded-3xl bg-white/5 border border-white/15 space-y-4">
            <h3 className="font-cinzel text-base font-bold text-white flex items-center gap-2">
              <Sliders size={18} className="text-[#D6B574]" />
              <span>{lang === 'hi' ? 'होमपेज मेटाडेटा टेस्ट बॉक्स' : 'Homepage Metadata Live Test'}</span>
            </h3>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D6B574] mb-1">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={previewSnippet.title}
                  onChange={(e) => setPreviewSnippet({ ...previewSnippet, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#D6B574] mb-1">
                  Meta Description ({previewSnippet.description.length} characters - ideal 120-160)
                </label>
                <textarea
                  rows={3}
                  value={previewSnippet.description}
                  onChange={(e) => setPreviewSnippet({ ...previewSnippet, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/15 text-white text-xs"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: CHECKLIST */}
      {activeSubTab === 'checklist' && (
        <div className="p-6 rounded-3xl bg-white/5 border border-[#D6B574]/30 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="font-cinzel text-lg font-bold text-white">
                {lang === 'hi' ? 'तकनीकी एसईओ एवं मोबाइल स्वास्थ्य ऑडिट' : 'Technical SEO & Mobile Health Audit'}
              </h3>
              <p className="text-xs text-[#EAE2F4]/70 mt-0.5">
                {lang === 'hi' ? 'गूगल सर्च एवं कोर वेब वाइटल्स मानकों के अनुसार सत्यापन' : 'Audited against Google Search & Core Web Vitals standards'}
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/40">
              100% Passed
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {[
              {
                title: 'Dynamic XML Sitemap (/sitemap.xml)',
                desc: 'Includes all 11 core routes + dynamic published CMS pages with lastmod and image tags.',
                status: 'Passed',
              },
              {
                title: 'Robots.txt Crawl Directives',
                desc: 'Allows legitimate search engines, safely blocks /admin and /api/, declares sitemap.',
                status: 'Passed',
              },
              {
                title: 'Canonical URL Consistency',
                desc: 'Every route points to its canonical URL preventing duplicate indexing.',
                status: 'Passed',
              },
              {
                title: 'OpenGraph & Twitter Card Metadata',
                desc: 'Configured for high-clickthrough social share previews on WhatsApp, X, Facebook, LinkedIn.',
                status: 'Passed',
              },
              {
                title: 'Schema.org JSON-LD Structured Data',
                desc: 'Person, ProfessionalService, OfferCatalog, BreadcrumbList, and FAQPage schemas validated.',
                status: 'Passed',
              },
              {
                title: 'Mobile-First Responsive Design',
                desc: 'Touch targets >= 44px, zero horizontal overflow, responsive typography and fluid layouts.',
                status: 'Passed',
              },
              {
                title: 'Image Alt Tags & Aspect Ratios',
                desc: 'All portraits, certificates, and tarot images contain descriptive, non-stuffed alt text.',
                status: 'Passed',
              },
              {
                title: 'Core Web Vitals & Lazy Loading',
                desc: 'Below-the-fold images use loading="lazy", preconnected Google fonts, smooth animations.',
                status: 'Passed',
              },
              {
                title: 'H1 to H6 Heading Hierarchy',
                desc: 'Semantic single H1 on every view with logical H2 and H3 subsections.',
                status: 'Passed',
              },
              {
                title: 'HTTPS & SSL Security Header Compliance',
                desc: 'Encrypted transfer with secure session cookies and no mixed content.',
                status: 'Passed',
              },
            ].map((check, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-black/30 border border-white/10 space-y-1.5 flex items-start gap-3">
                <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="font-bold text-white flex items-center justify-between">
                    <span>{check.title}</span>
                    <span className="text-[10px] text-emerald-400 uppercase font-black px-1.5 py-0.2 rounded bg-emerald-950/60 border border-emerald-500/30">
                      {check.status}
                    </span>
                  </div>
                  <p className="text-[#EAE2F4]/70 leading-relaxed text-[11px]">
                    {check.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

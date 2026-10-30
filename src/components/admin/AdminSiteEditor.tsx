import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Save,
  Image as ImageIcon,
  Video,
  FileText,
  User,
  Heart,
  HelpCircle,
  Phone,
  CreditCard,
  Plus,
  Trash2,
  CheckCircle,
  Globe,
  Star,
  ExternalLink,
  Layers,
  ArrowRight
} from 'lucide-react';
import {
  SiteContent,
  getSiteContent,
  updateSiteContent,
  SiteServiceItem,
  SiteTestimonialItem,
  SiteFaqItem
} from '../../utils/cmsApi';
import { AdminMediaLibrary } from './AdminMediaLibrary';

interface AdminSiteEditorProps {
  lang?: string;
  onPreviewSite?: () => void;
}

export const AdminSiteEditor: React.FC<AdminSiteEditorProps> = ({
  lang = 'hi',
  onPreviewSite,
}) => {
  const [activeTab, setActiveTab] = useState<
    'hero' | 'about' | 'services' | 'video' | 'testimonials' | 'faqs' | 'contact'
  >('hero');
  const [content, setContent] = useState<SiteContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);
  const [mediaPickerTarget, setMediaPickerTarget] = useState<{
    section: 'hero' | 'about' | 'video' | 'bankUpi' | 'service';
    field: string;
    index?: number;
  } | null>(null);

  // Editing items state
  const [editingServiceIndex, setEditingServiceIndex] = useState<number | null>(null);
  const [editingFaqIndex, setEditingFaqIndex] = useState<number | null>(null);
  const [editingTestimonialIndex, setEditingTestimonialIndex] = useState<number | null>(null);

  const fetchContent = async () => {
    try {
      setLoading(true);
      const data = await getSiteContent();
      setContent(data);
    } catch (err: any) {
      console.error('Error fetching site content:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  const handleSave = async () => {
    if (!content) return;
    try {
      setSaving(true);
      setSaveSuccessMsg(null);
      const updated = await updateSiteContent(content);
      setContent(updated);
      setSaveSuccessMsg('🎉 वेबसाइट सामग्री सफलतापूर्वक अपडेट हो गई!');
      setTimeout(() => setSaveSuccessMsg(null), 3500);
    } catch (err: any) {
      alert(`सहेजने में त्रुटि: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleSelectMedia = (url: string) => {
    if (!mediaPickerTarget || !content) return;
    const { section, field } = mediaPickerTarget;

    if (section === 'hero') {
      setContent({ ...content, hero: { ...content.hero, portrait_photo: url } });
    } else if (section === 'about') {
      setContent({ ...content, about: { ...content.about, photo_url: url } });
    } else if (section === 'bankUpi') {
      setContent({ ...content, bankUpi: { ...content.bankUpi, qr_code_image: url } });
    } else if (section === 'video') {
      setContent({ ...content, videoSpotlight: { ...content.videoSpotlight, video_url: url } });
    }

    setMediaPickerTarget(null);
  };

  if (loading || !content) {
    return (
      <div className="py-24 text-center text-xs text-[#EAE2F4]/50 flex flex-col items-center justify-center gap-3">
        <div className="w-6 h-6 border-2 border-[#D6B574] border-t-transparent rounded-full animate-spin" />
        <span>वेबसाइट सामग्री लोड हो रही है...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in pb-16">
      {/* Top sticky header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-3xl bg-[#24152F]/90 backdrop-blur-xl border border-[#D6B574]/40 shadow-xl sticky top-4 z-30">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D6B574]/20 border border-[#D6B574]/40 text-[#D6B574] text-xs font-semibold mb-1">
            <Sparkles size={12} />
            <span>मुख्य वेबसाइट संपादक (Website Sections Editor)</span>
          </div>
          <h1 className="font-cinzel text-lg sm:text-xl font-bold text-white">
            वेबसाइट सामग्री, चित्र एवं टेक्स्ट बदलें
          </h1>
        </div>

        <div className="flex items-center gap-2.5">
          {saveSuccessMsg && (
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-3 py-1.5 rounded-xl animate-pulse">
              {saveSuccessMsg}
            </span>
          )}

          {onPreviewSite && (
            <button
              onClick={onPreviewSite}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Globe size={14} className="text-[#D6B574]" />
              <span>वेबसाइट देखें</span>
            </button>
          )}

          <button
            onClick={handleSave}
            disabled={saving}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D6B574] via-[#eedca2] to-[#D6B574] text-[#1c0f26] font-bold text-xs tracking-wide shadow-lg shadow-[#D6B574]/20 hover:brightness-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            <Save size={15} />
            <span>{saving ? 'सहेज रहे हैं...' : 'बदलाव लाइव सहेजें'}</span>
          </button>
        </div>
      </div>

      {/* Tabs Switcher for each Section of the Website */}
      <div className="flex items-center gap-1.5 p-1.5 bg-[#24152F]/70 border border-[#D6B574]/30 rounded-2xl overflow-x-auto">
        <button
          onClick={() => setActiveTab('hero')}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'hero' ? 'bg-[#D6B574] text-[#1c0f26] font-bold' : 'text-white/70 hover:text-white'
          }`}
        >
          <span>🌟 १. मुख्य बैनर (Hero)</span>
        </button>

        <button
          onClick={() => setActiveTab('about')}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'about' ? 'bg-[#D6B574] text-[#1c0f26] font-bold' : 'text-white/70 hover:text-white'
          }`}
        >
          <span>🪷 २. परिचय (About)</span>
        </button>

        <button
          onClick={() => setActiveTab('services')}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'services' ? 'bg-[#D6B574] text-[#1c0f26] font-bold' : 'text-white/70 hover:text-white'
          }`}
        >
          <span>🔮 ३. 11 सेवाएँ व शुल्क</span>
        </button>

        <button
          onClick={() => setActiveTab('video')}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'video' ? 'bg-[#D6B574] text-[#1c0f26] font-bold' : 'text-white/70 hover:text-white'
          }`}
        >
          <span>🎬 ४. वीडियो व्याख्यान</span>
        </button>

        <button
          onClick={() => setActiveTab('testimonials')}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'testimonials' ? 'bg-[#D6B574] text-[#1c0f26] font-bold' : 'text-white/70 hover:text-white'
          }`}
        >
          <span>💬 ५. साधक अनुभव</span>
        </button>

        <button
          onClick={() => setActiveTab('faqs')}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'faqs' ? 'bg-[#D6B574] text-[#1c0f26] font-bold' : 'text-white/70 hover:text-white'
          }`}
        >
          <span>❓ ६. FAQ प्रश्नोत्तर</span>
        </button>

        <button
          onClick={() => setActiveTab('contact')}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'contact' ? 'bg-[#D6B574] text-[#1c0f26] font-bold' : 'text-white/70 hover:text-white'
          }`}
        >
          <span>🏦 ७. संपर्क व बैंक खाता</span>
        </button>
      </div>

      {/* ========================================================= */}
      {/* 1. HERO BANNER & PORTRAIT SECTION */}
      {/* ========================================================= */}
      {activeTab === 'hero' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-[#24152F]/80 border border-[#D6B574]/30 shadow-xl space-y-6">
          <div className="space-y-1">
            <h2 className="font-cinzel text-lg font-bold text-white">
              मुख्य बैनर (Hero Section) पाठ व छायाचित्र
            </h2>
            <p className="text-xs text-[#EAE2F4]/70">
              वेबसाइट के शीर्ष पर दिखने वाला मुख्य शीर्षक, वैदिक ध्येय वाक्य ("अपनी राह पहचानें..."), विवरण एवं डॉ. पूजा अवस्थी जी का मुख्य चित्र।
            </p>
          </div>

          {/* Portrait Photo Selector */}
          <div className="p-5 rounded-2xl bg-[#1c0f26] border border-[#D6B574]/30 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-24 h-28 sm:w-28 sm:h-36 rounded-2xl overflow-hidden border-2 border-[#D6B574] shrink-0 bg-[#24152F] shadow-lg relative">
              <img
                src={content.hero.portrait_photo}
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-2 flex-1 text-center sm:text-left">
              <span className="text-[10px] uppercase font-bold text-[#D6B574] tracking-wider">
                मुख्य आधिकारिक पोर्ट्रेट चित्र (Founder Portrait Photo)
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={content.hero.portrait_photo}
                  onChange={(e) =>
                    setContent({ ...content, hero: { ...content.hero, portrait_photo: e.target.value } })
                  }
                  className="flex-1 px-3 py-2 rounded-xl bg-[#24152F] border border-white/10 text-xs text-white outline-hidden font-mono"
                />
                <button
                  type="button"
                  onClick={() => setMediaPickerTarget({ section: 'hero', field: 'portrait_photo' })}
                  className="px-4 py-2 rounded-xl bg-[#D6B574] text-[#1c0f26] text-xs font-bold shrink-0 cursor-pointer"
                >
                  मीडिया से चुनें
                </button>
              </div>
              <p className="text-[11px] text-[#EAE2F4]/60">
                आप मीडिया लाइब्रेरी से कोई भी उच्च-रिज़ॉल्यूशन छायाचित्र चुन सकते हैं या सीधा URL पेस्ट कर सकते हैं।
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                मुख्य शीर्षक (Hindi Headline)
              </label>
              <input
                type="text"
                value={content.hero.headline_hi}
                onChange={(e) =>
                  setContent({ ...content, hero: { ...content.hero, headline_hi: e.target.value } })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                अंग्रेज़ी शीर्षक (English Headline)
              </label>
              <input
                type="text"
                value={content.hero.headline_en}
                onChange={(e) =>
                  setContent({ ...content, hero: { ...content.hero, headline_en: e.target.value } })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                ध्येय वाक्य (Vedic Motto - Hindi)
              </label>
              <input
                type="text"
                value={content.hero.motto_hi}
                onChange={(e) =>
                  setContent({ ...content, hero: { ...content.hero, motto_hi: e.target.value } })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                ध्येय वाक्य (Vedic Motto - English)
              </label>
              <input
                type="text"
                value={content.hero.motto_en}
                onChange={(e) =>
                  setContent({ ...content, hero: { ...content.hero, motto_en: e.target.value } })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
              बैनर विवरण (Hero Paragraph Description)
            </label>
            <textarea
              rows={3}
              value={content.hero.desc_hi}
              onChange={(e) =>
                setContent({ ...content, hero: { ...content.hero, desc_hi: e.target.value } })
              }
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                बटन टेक्स्ट (CTA Button)
              </label>
              <input
                type="text"
                value={content.hero.cta_primary_hi}
                onChange={(e) =>
                  setContent({ ...content, hero: { ...content.hero, cta_primary_hi: e.target.value } })
                }
                className="w-full px-3.5 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                परामर्श शुल्क बैज
              </label>
              <input
                type="text"
                value={content.hero.fee_badge}
                onChange={(e) =>
                  setContent({ ...content, hero: { ...content.hero, fee_badge: e.target.value } })
                }
                className="w-full px-3.5 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                सम्मान बैज पाठ
              </label>
              <input
                type="text"
                value={content.hero.badge_text_hi}
                onChange={(e) =>
                  setContent({ ...content, hero: { ...content.hero, badge_text_hi: e.target.value } })
                }
                className="w-full px-3.5 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
              />
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. ABOUT DR. POOJA SECTION */}
      {/* ========================================================= */}
      {activeTab === 'about' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-[#24152F]/80 border border-[#D6B574]/30 shadow-xl space-y-6">
          <div className="space-y-1">
            <h2 className="font-cinzel text-lg font-bold text-white">
              डॉ. पूजा अवस्थी जी का परिचय, जीवनी एवं ३ स्तम्भ
            </h2>
            <p className="text-xs text-[#EAE2F4]/70">
              इस अनुभाग में डॉ. पूजा जी का संक्षिप्त जीवन परिचय, दृष्टि (Vision) एवं ३ स्तम्भ मार्गदर्शन को संपादित करें।
            </p>
          </div>

          {/* Ceremony Image */}
          <div className="p-4 rounded-2xl bg-[#1c0f26] border border-[#D6B574]/30 flex flex-col sm:flex-row items-center gap-4">
            <img
              src={content.about.photo_url}
              alt="About Ceremony"
              className="w-24 h-24 rounded-xl object-cover border border-[#D6B574]"
            />
            <div className="flex-1 space-y-1">
              <span className="text-[10px] text-[#D6B574] uppercase font-bold">
                परिचय अनुभाग का मुख्य छायाचित्र (About Section Photo)
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={content.about.photo_url}
                  onChange={(e) =>
                    setContent({ ...content, about: { ...content.about, photo_url: e.target.value } })
                  }
                  className="flex-1 px-3 py-2 rounded-xl bg-[#24152F] border border-white/10 text-xs text-white outline-hidden"
                />
                <button
                  type="button"
                  onClick={() => setMediaPickerTarget({ section: 'about', field: 'photo_url' })}
                  className="px-4 py-2 rounded-xl bg-[#D6B574] text-[#1c0f26] text-xs font-bold shrink-0 cursor-pointer"
                >
                  चुनें
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                शीर्षक (Title - Hindi)
              </label>
              <input
                type="text"
                value={content.about.title_hi}
                onChange={(e) =>
                  setContent({ ...content, about: { ...content.about, title_hi: e.target.value } })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                उप-शीर्षक (Subtitle)
              </label>
              <input
                type="text"
                value={content.about.subtitle_hi}
                onChange={(e) =>
                  setContent({ ...content, about: { ...content.about, subtitle_hi: e.target.value } })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
              जीवनी अनुच्छेद १ (Biography Paragraph 1)
            </label>
            <textarea
              rows={3}
              value={content.about.p1_hi}
              onChange={(e) =>
                setContent({ ...content, about: { ...content.about, p1_hi: e.target.value } })
              }
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
              जीवनी अनुच्छेद २ (Biography Paragraph 2)
            </label>
            <textarea
              rows={3}
              value={content.about.p2_hi}
              onChange={(e) =>
                setContent({ ...content, about: { ...content.about, p2_hi: e.target.value } })
              }
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
            />
          </div>

          {/* 3 Pillars */}
          <div className="space-y-3 pt-2 border-t border-white/5">
            <span className="text-xs uppercase font-bold text-[#D6B574] tracking-wider block">
              मार्गदर्शन के ३ पावन स्तम्भ (3 Sacred Pillars)
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-3.5 rounded-2xl bg-[#1c0f26] border border-white/5 space-y-2">
                <input
                  type="text"
                  value={content.about.pillar1_title}
                  onChange={(e) =>
                    setContent({ ...content, about: { ...content.about, pillar1_title: e.target.value } })
                  }
                  className="w-full px-2 py-1 rounded bg-[#24152F] text-xs font-bold text-[#D6B574] border border-white/10 outline-hidden"
                />
                <textarea
                  rows={2}
                  value={content.about.pillar1_desc}
                  onChange={(e) =>
                    setContent({ ...content, about: { ...content.about, pillar1_desc: e.target.value } })
                  }
                  className="w-full px-2 py-1 rounded bg-[#24152F] text-[11px] text-[#EAE2F4]/80 border border-white/10 outline-hidden"
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-[#1c0f26] border border-white/5 space-y-2">
                <input
                  type="text"
                  value={content.about.pillar2_title}
                  onChange={(e) =>
                    setContent({ ...content, about: { ...content.about, pillar2_title: e.target.value } })
                  }
                  className="w-full px-2 py-1 rounded bg-[#24152F] text-xs font-bold text-[#D6B574] border border-white/10 outline-hidden"
                />
                <textarea
                  rows={2}
                  value={content.about.pillar2_desc}
                  onChange={(e) =>
                    setContent({ ...content, about: { ...content.about, pillar2_desc: e.target.value } })
                  }
                  className="w-full px-2 py-1 rounded bg-[#24152F] text-[11px] text-[#EAE2F4]/80 border border-white/10 outline-hidden"
                />
              </div>

              <div className="p-3.5 rounded-2xl bg-[#1c0f26] border border-white/5 space-y-2">
                <input
                  type="text"
                  value={content.about.pillar3_title}
                  onChange={(e) =>
                    setContent({ ...content, about: { ...content.about, pillar3_title: e.target.value } })
                  }
                  className="w-full px-2 py-1 rounded bg-[#24152F] text-xs font-bold text-[#D6B574] border border-white/10 outline-hidden"
                />
                <textarea
                  rows={2}
                  value={content.about.pillar3_desc}
                  onChange={(e) =>
                    setContent({ ...content, about: { ...content.about, pillar3_desc: e.target.value } })
                  }
                  className="w-full px-2 py-1 rounded bg-[#24152F] text-[11px] text-[#EAE2F4]/80 border border-white/10 outline-hidden"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 3. 11 SACRED SERVICES & TARIFFS */}
      {/* ========================================================= */}
      {activeTab === 'services' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-[#24152F]/80 border border-[#D6B574]/30 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="font-cinzel text-lg font-bold text-white">
                ११ पावन हीलिंग सेवाएँ एवं शुल्क सूची (Services & Tariff)
              </h2>
              <p className="text-xs text-[#EAE2F4]/70">
                प्रत्येक सेवा का नाम, शुल्क (₹5,100), समय-अवधि एवं विवरण यहाँ से सीधे बदलें।
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                const newSrv: SiteServiceItem = {
                  id: `srv-${Date.now()}`,
                  number: (content.services?.length || 0) + 1,
                  title: 'New Healing Consultation',
                  title_hi: 'नई वैदिक सेवा',
                  fee: 5100,
                  feeFormatted: '₹5,100',
                  duration: '60 मिनट',
                  category: 'healing',
                  categoryLabel_hi: 'आध्यात्मिक हीलिंग',
                  badge: 'नई सेवा',
                  description: 'सेवा का विवरण यहाँ लिखें...',
                };
                setContent({ ...content, services: [...(content.services || []), newSrv] });
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#D6B574] via-[#eedca2] to-[#D6B574] text-[#1c0f26] font-bold text-xs flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <Plus size={14} />
              <span>नई सेवा जोड़ें</span>
            </button>
          </div>

          <div className="space-y-3">
            {content.services.map((srv, idx) => (
              <div
                key={srv.id}
                className="p-4 rounded-2xl bg-[#1c0f26] border border-[#D6B574]/20 hover:border-[#D6B574]/50 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-[#D6B574]/20 text-[#D6B574] font-bold text-xs flex items-center justify-center font-mono">
                      {idx + 1}
                    </span>
                    <input
                      type="text"
                      value={srv.title_hi || srv.title}
                      onChange={(e) => {
                        const updated = [...content.services];
                        updated[idx] = { ...updated[idx], title_hi: e.target.value };
                        setContent({ ...content, services: updated });
                      }}
                      className="px-2.5 py-1 rounded bg-[#24152F] text-xs font-bold text-white border border-white/10 outline-hidden w-64 sm:w-80"
                      placeholder="सेवा का नाम"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={srv.feeFormatted || '₹5,100'}
                      onChange={(e) => {
                        const updated = [...content.services];
                        updated[idx] = { ...updated[idx], feeFormatted: e.target.value };
                        setContent({ ...content, services: updated });
                      }}
                      className="w-20 px-2 py-1 rounded bg-[#24152F] text-xs font-bold text-[#D6B574] border border-white/10 outline-hidden text-center"
                      placeholder="₹5,100"
                    />

                    <input
                      type="text"
                      value={srv.duration || '60 मिनट'}
                      onChange={(e) => {
                        const updated = [...content.services];
                        updated[idx] = { ...updated[idx], duration: e.target.value };
                        setContent({ ...content, services: updated });
                      }}
                      className="w-24 px-2 py-1 rounded bg-[#24152F] text-[11px] text-white/70 border border-white/10 outline-hidden text-center"
                      placeholder="अवधि"
                    />

                    <button
                      type="button"
                      onClick={() => {
                        if (!window.confirm('क्या आप इस सेवा को हटाना चाहते हैं?')) return;
                        const filtered = content.services.filter((_, i) => i !== idx);
                        setContent({ ...content, services: filtered });
                      }}
                      className="p-1.5 rounded text-red-400 hover:text-red-300 hover:bg-red-500/10 cursor-pointer"
                      title="हटाएँ"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>

                <div>
                  <textarea
                    rows={2}
                    value={srv.description}
                    onChange={(e) => {
                      const updated = [...content.services];
                      updated[idx] = { ...updated[idx], description: e.target.value };
                      setContent({ ...content, services: updated });
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-[#24152F] border border-white/5 text-xs text-[#EAE2F4]/80 outline-hidden"
                    placeholder="सेवा का संक्षिप्त विवरण..."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 4. VIDEO SPOTLIGHT SECTION */}
      {/* ========================================================= */}
      {activeTab === 'video' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-[#24152F]/80 border border-[#D6B574]/30 shadow-xl space-y-6">
          <div className="space-y-1">
            <h2 className="font-cinzel text-lg font-bold text-white">
              वीडियो व्याख्यान एवं शोध संदेश (Featured Video)
            </h2>
            <p className="text-xs text-[#EAE2F4]/70">
              यूट्यूब एम्बेड लिंक या मीडिया लाइब्रेरी से अपलोड किया गया MP4 वीडियो बदलें।
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                वीडियो अनुभाग शीर्षक (Heading)
              </label>
              <input
                type="text"
                value={content.videoSpotlight.heading_hi}
                onChange={(e) =>
                  setContent({
                    ...content,
                    videoSpotlight: { ...content.videoSpotlight, heading_hi: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                वीडियो URL (YouTube Embed अथवा /uploads/video.mp4)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={content.videoSpotlight.video_url}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      videoSpotlight: { ...content.videoSpotlight, video_url: e.target.value },
                    })
                  }
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden font-mono"
                />
                <button
                  type="button"
                  onClick={() => setMediaPickerTarget({ section: 'video', field: 'video_url' })}
                  className="px-4 py-2.5 rounded-xl bg-[#D6B574] text-[#1c0f26] text-xs font-bold shrink-0 cursor-pointer"
                >
                  मीडिया लाइब्रेरी
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                वीडियो कैप्शन (Caption)
              </label>
              <input
                type="text"
                value={content.videoSpotlight.caption_hi}
                onChange={(e) =>
                  setContent({
                    ...content,
                    videoSpotlight: { ...content.videoSpotlight, caption_hi: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
              />
            </div>

            {/* Video Preview */}
            <div className="pt-2">
              <span className="text-[10px] uppercase font-bold text-[#D6B574] tracking-wider block mb-2">
                लाइव वीडियो पूर्वावलोकन
              </span>
              <div className="aspect-video max-w-lg rounded-2xl overflow-hidden border border-[#D6B574]/40 bg-black">
                {content.videoSpotlight.video_url.includes('youtube') ||
                content.videoSpotlight.video_url.includes('embed') ? (
                  <iframe
                    src={content.videoSpotlight.video_url}
                    className="w-full h-full"
                    allowFullScreen
                  />
                ) : (
                  <video src={content.videoSpotlight.video_url} controls className="w-full h-full" />
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 5. TESTIMONIALS MANAGER */}
      {/* ========================================================= */}
      {activeTab === 'testimonials' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-[#24152F]/80 border border-[#D6B574]/30 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="font-cinzel text-lg font-bold text-white">
                साधक अनुभव एवं समीक्षाएं (Client Reflections)
              </h2>
              <p className="text-xs text-[#EAE2F4]/70">
                यहाँ से साधकों की समीक्षाएं जोड़ें, बदलें अथवा हटाएँ।
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                const newTest: SiteTestimonialItem = {
                  id: `test-${Date.now()}`,
                  name: 'नया साधक',
                  location: 'नई दिल्ली, भारत',
                  service: 'वैदिक अंकशास्त्र एवं हीलिंग',
                  quote: 'डॉ. पूजा जी के मार्गदर्शन से मेरे जीवन में गहरी शांति और स्पष्टता आई।',
                  rating: 5,
                  date: 'आज',
                };
                setContent({ ...content, testimonials: [newTest, ...(content.testimonials || [])] });
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#D6B574] via-[#eedca2] to-[#D6B574] text-[#1c0f26] font-bold text-xs flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <Plus size={14} />
              <span>समीक्षा जोड़ें</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.testimonials.map((test, idx) => (
              <div
                key={test.id}
                className="p-4 rounded-2xl bg-[#1c0f26] border border-[#D6B574]/20 hover:border-[#D6B574]/50 transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <input
                    type="text"
                    value={test.name}
                    onChange={(e) => {
                      const updated = [...content.testimonials];
                      updated[idx] = { ...updated[idx], name: e.target.value };
                      setContent({ ...content, testimonials: updated });
                    }}
                    className="px-2 py-1 rounded bg-[#24152F] text-xs font-bold text-[#D6B574] border border-white/10 outline-hidden"
                    placeholder="साधक का नाम"
                  />
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      value={test.location}
                      onChange={(e) => {
                        const updated = [...content.testimonials];
                        updated[idx] = { ...updated[idx], location: e.target.value };
                        setContent({ ...content, testimonials: updated });
                      }}
                      className="px-2 py-1 rounded bg-[#24152F] text-[11px] text-white/70 border border-white/10 outline-hidden w-28 text-right"
                      placeholder="स्थान"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const filtered = content.testimonials.filter((_, i) => i !== idx);
                        setContent({ ...content, testimonials: filtered });
                      }}
                      className="p-1 rounded text-red-400 hover:text-red-300"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                </div>

                <input
                  type="text"
                  value={test.service}
                  onChange={(e) => {
                    const updated = [...content.testimonials];
                    updated[idx] = { ...updated[idx], service: e.target.value };
                    setContent({ ...content, testimonials: updated });
                  }}
                  className="w-full px-2 py-1 rounded bg-[#24152F] text-[11px] text-[#EAE2F4]/70 border border-white/5 outline-hidden"
                  placeholder="परामर्श सेवा"
                />

                <textarea
                  rows={3}
                  value={test.quote}
                  onChange={(e) => {
                    const updated = [...content.testimonials];
                    updated[idx] = { ...updated[idx], quote: e.target.value };
                    setContent({ ...content, testimonials: updated });
                  }}
                  className="w-full px-2.5 py-1.5 rounded-xl bg-[#24152F] border border-white/5 text-xs text-white outline-hidden"
                  placeholder="समीक्षा संदेश..."
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 6. FAQ MANAGER */}
      {/* ========================================================= */}
      {activeTab === 'faqs' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-[#24152F]/80 border border-[#D6B574]/30 shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="font-cinzel text-lg font-bold text-white">
                जिज्ञासा एवं समाधान (Frequently Asked Questions - FAQ)
              </h2>
              <p className="text-xs text-[#EAE2F4]/70">
                वेबसाइट पर अक्सर पूछे जाने वाले प्रश्न व उनके उत्तर यहाँ से प्रबंधित करें।
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                const newFaq: SiteFaqItem = {
                  id: `faq-${Date.now()}`,
                  q: 'नया प्रश्न यहाँ लिखें?',
                  a: 'प्रश्न का प्रामाणिक व स्पष्ट उत्तर यहाँ लिखें।',
                };
                setContent({ ...content, faqs: [...(content.faqs || []), newFaq] });
              }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#D6B574] via-[#eedca2] to-[#D6B574] text-[#1c0f26] font-bold text-xs flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <Plus size={14} />
              <span>नया FAQ जोड़ें</span>
            </button>
          </div>

          <div className="space-y-3">
            {content.faqs.map((faq, idx) => (
              <div
                key={faq.id}
                className="p-4 rounded-2xl bg-[#1c0f26] border border-[#D6B574]/20 hover:border-[#D6B574]/50 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 flex-1">
                    <span className="w-6 h-6 rounded-lg bg-[#D6B574]/20 text-[#D6B574] font-bold text-xs flex items-center justify-center font-mono shrink-0">
                      Q{idx + 1}
                    </span>
                    <input
                      type="text"
                      value={faq.q}
                      onChange={(e) => {
                        const updated = [...content.faqs];
                        updated[idx] = { ...updated[idx], q: e.target.value };
                        setContent({ ...content, faqs: updated });
                      }}
                      className="w-full px-3 py-1.5 rounded-xl bg-[#24152F] text-xs font-bold text-white border border-white/10 outline-hidden"
                      placeholder="प्रश्न लिखें"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (!window.confirm('क्या आप इस प्रश्न को हटाना चाहते हैं?')) return;
                      const filtered = content.faqs.filter((_, i) => i !== idx);
                      setContent({ ...content, faqs: filtered });
                    }}
                    className="p-1.5 text-red-400 hover:text-red-300"
                    title="हटाएँ"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>

                <div className="pl-8">
                  <textarea
                    rows={2}
                    value={faq.a}
                    onChange={(e) => {
                      const updated = [...content.faqs];
                      updated[idx] = { ...updated[idx], a: e.target.value };
                      setContent({ ...content, faqs: updated });
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-[#24152F] border border-white/5 text-xs text-[#EAE2F4]/80 outline-hidden"
                    placeholder="उत्तर लिखें..."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 7. CONTACT & BANK UPI PAYMENT SECTION */}
      {/* ========================================================= */}
      {activeTab === 'contact' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-[#24152F]/80 border border-[#D6B574]/30 shadow-xl space-y-6">
          <div className="space-y-1">
            <h2 className="font-cinzel text-lg font-bold text-white">
              सीधा संपर्क, परामर्श समय एवं बैंक UPI खाता विवरण
            </h2>
            <p className="text-xs text-[#EAE2F4]/70">
              आगंतुकों को दिखने वाला व्हाट्सएप नंबर, ईमेल, परामर्श शुल्क एवं बैंक भुगतान मोडल की जानकारी।
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                फ़ोन नंबर (Phone)
              </label>
              <input
                type="text"
                value={content.contact.phone}
                onChange={(e) =>
                  setContent({
                    ...content,
                    contact: { ...content.contact, phone: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                व्हाट्सएप नंबर (कंट्री कोड सहित)
              </label>
              <input
                type="text"
                value={content.contact.whatsapp}
                onChange={(e) =>
                  setContent({
                    ...content,
                    contact: { ...content.contact, whatsapp: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                ईमेल (Email)
              </label>
              <input
                type="email"
                value={content.contact.email}
                onChange={(e) =>
                  setContent({
                    ...content,
                    contact: { ...content.contact, email: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                परामर्श समय (Consultation Hours)
              </label>
              <input
                type="text"
                value={content.contact.hours}
                onChange={(e) =>
                  setContent({
                    ...content,
                    contact: { ...content.contact, hours: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                पता / स्थान (Location)
              </label>
              <input
                type="text"
                value={content.contact.address}
                onChange={(e) =>
                  setContent({
                    ...content,
                    contact: { ...content.contact, address: e.target.value },
                  })
                }
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
              />
            </div>
          </div>

          {/* Bank UPI details */}
          <div className="pt-4 border-t border-white/5 space-y-4">
            <span className="text-xs uppercase font-bold text-[#D6B574] tracking-wider block">
              बैंक एवं UPI भुगतान विवरण (Bank & UPI Modal Information)
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                  बैंक का नाम (Bank Name)
                </label>
                <input
                  type="text"
                  value={content.bankUpi.bank_name}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      bankUpi: { ...content.bankUpi, bank_name: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                  खाताधारक का नाम (Account Name)
                </label>
                <input
                  type="text"
                  value={content.bankUpi.account_name}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      bankUpi: { ...content.bankUpi, account_name: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                  खाता संख्या (Account Number)
                </label>
                <input
                  type="text"
                  value={content.bankUpi.account_number}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      bankUpi: { ...content.bankUpi, account_number: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                  IFSC कोड
                </label>
                <input
                  type="text"
                  value={content.bankUpi.ifsc_code}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      bankUpi: { ...content.bankUpi, ifsc_code: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                  UPI ID (VPA)
                </label>
                <input
                  type="text"
                  value={content.bankUpi.upi_id}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      bankUpi: { ...content.bankUpi, upi_id: e.target.value },
                    })
                  }
                  className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden font-mono"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Media Picker Overlay Modal */}
      {mediaPickerTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-4xl max-h-[90vh] rounded-3xl bg-[#1c0f26] border border-[#D6B574]/50 shadow-2xl overflow-y-auto">
            <AdminMediaLibrary
              isPicker={true}
              onSelectMedia={handleSelectMedia}
              onClosePicker={() => setMediaPickerTarget(null)}
              lang={lang}
            />
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Save,
  Globe,
  Eye,
  Plus,
  Trash2,
  Copy,
  ChevronUp,
  ChevronDown,
  Image as ImageIcon,
  Video,
  FileText,
  Sparkles,
  Layers,
  Link as LinkIcon,
  CheckCircle,
  HelpCircle,
  Smartphone,
  Tablet,
  Monitor,
  Calendar,
  Settings,
  Share2,
  FolderPlus,
  RefreshCw
} from 'lucide-react';
import {
  CMSPage,
  ContentBlock,
  HeroBlock,
  RichTextBlock,
  SingleImageBlock,
  GalleryBlock,
  VideoBlock,
  VedicQuoteBlock,
  FeatureGridBlock,
  CtaButtonBlock,
  BookingCardBlock,
  DividerBlock,
  getPageBySlug,
  createPage,
  updatePage
} from '../../utils/cmsApi';
import { AdminMediaLibrary } from './AdminMediaLibrary';

interface AdminPageBuilderProps {
  pageId?: string | null;
  onBack: () => void;
  onPageSaved: (savedPage: CMSPage) => void;
  onPreviewPublic: (slug: string) => void;
  lang?: string;
}

export const AdminPageBuilder: React.FC<AdminPageBuilderProps> = ({
  pageId,
  onBack,
  onPageSaved,
  onPreviewPublic,
  lang = 'hi',
}) => {
  const [activeTab, setActiveTab] = useState<'blocks' | 'details' | 'seo' | 'preview'>('blocks');
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);
  const [mediaPickerTarget, setMediaPickerTarget] = useState<{
    blockId: string;
    field: string;
    index?: number;
  } | null>(null);

  // Page state
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState('');
  const [titleEn, setTitleEn] = useState('');
  const [slug, setSlug] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [category, setCategory] = useState('Vedic Guidance');
  const [showInNav, setShowInNav] = useState(false);
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [focusKeywords, setFocusKeywords] = useState('');
  const [ogImage, setOgImage] = useState('');
  const [blocks, setBlocks] = useState<ContentBlock[]>([]);

  // Load existing page if pageId provided
  useEffect(() => {
    if (!pageId) {
      // New page default template
      const defaultHero: HeroBlock = {
        id: `b-hero-${Date.now()}`,
        type: 'hero',
        title: 'शीर्षक यहाँ लिखें',
        subtitle: 'यहाँ उप-शीर्षक लिखें...',
        ctaText: 'परामर्श बुक करें',
        ctaLink: '#contact',
      };
      const defaultText: RichTextBlock = {
        id: `b-text-${Date.now() + 1}`,
        type: 'richtext',
        heading: 'मुख्य विषय परिचय',
        content: '<p>यहाँ अपने पेज की विस्तृत सामग्री, शास्त्र सम्मत प्रमाण एवं लाभ लिखें...</p>',
      };
      setBlocks([defaultHero, defaultText]);
      return;
    }

    const loadPage = async () => {
      try {
        setLoading(true);
        const data = await getPageBySlug(pageId);
        setId(data.id);
        setTitle(data.title || '');
        setTitleEn(data.title_en || '');
        setSlug(data.slug || '');
        setSubtitle(data.subtitle || '');
        setExcerpt(data.excerpt || '');
        setStatus(data.status || 'draft');
        setCategory(data.category || 'Vedic Guidance');
        setShowInNav(Boolean(data.showInNav));
        setMetaTitle(data.seo?.metaTitle || data.title || '');
        setMetaDescription(data.seo?.metaDescription || data.excerpt || '');
        setFocusKeywords((data.seo?.focusKeywords || []).join(', '));
        setOgImage(data.seo?.ogImage || '');
        setBlocks(data.blocks || []);
      } catch (err: any) {
        alert(`पेज लोड करने में त्रुटि: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    loadPage();
  }, [pageId]);

  // Auto-generate slug from title if empty
  const handleGenerateSlug = () => {
    const raw = titleEn || title;
    const generated = raw
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-');
    setSlug(generated || `page-${Date.now()}`);
  };

  // Block manipulation helpers
  const handleAddBlock = (type: ContentBlock['type']) => {
    const uniqueId = `b-${type}-${Date.now()}`;
    let newBlock: ContentBlock;

    switch (type) {
      case 'hero':
        newBlock = {
          id: uniqueId,
          type: 'hero',
          title: title || 'नया मुख्य बैनर',
          subtitle: 'यहाँ उप-शीर्षक लिखें...',
          ctaText: 'परामर्श बुक करें (₹5,100)',
          ctaLink: '#contact',
        } as HeroBlock;
        break;
      case 'richtext':
        newBlock = {
          id: uniqueId,
          type: 'richtext',
          heading: 'अनुभाग शीर्षक',
          content: '<p>यहाँ अपनी सामग्री का विस्तृत विवरण लिखें...</p>',
        } as RichTextBlock;
        break;
      case 'image':
        newBlock = {
          id: uniqueId,
          type: 'image',
          url: '/assets/awards/IMMT.jpeg',
          altText: 'चित्र विवरण',
          caption: 'चित्र कैप्शन',
          alignment: 'center',
        } as SingleImageBlock;
        break;
      case 'gallery':
        newBlock = {
          id: uniqueId,
          type: 'gallery',
          heading: 'चित्र दीर्घा (Photo Gallery)',
          columns: 3,
          images: [
            { url: '/assets/awards/IMMT.jpeg', caption: 'सम्मान समारोह' },
            { url: '/assets/awards/iimt_lifetime_certificate.jpeg', caption: 'प्रशस्ति पत्र' },
            { url: '/assets/awards/ashok_thakur_nafeed_award_2025.jpeg', caption: 'राष्ट्रीय अलंकरण' },
          ],
        } as GalleryBlock;
        break;
      case 'video':
        newBlock = {
          id: uniqueId,
          type: 'video',
          heading: 'वीडियो व्याख्यान',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          caption: 'डॉ. पूजा अवस्थी द्वारा विशेष मार्गदर्शन व्याख्यान',
        } as VideoBlock;
        break;
      case 'vedic-quote':
        newBlock = {
          id: uniqueId,
          type: 'vedic-quote',
          mantra: 'ॐ नमः शिवाय | ॐ गं गणपतये नमः',
          quote: 'यहाँ अपना प्रेरणादायी विचार या शास्त्रीय उद्धरण लिखें...',
          author: 'डॉ. पूजा अवस्थी',
        } as VedicQuoteBlock;
        break;
      case 'feature-grid':
        newBlock = {
          id: uniqueId,
          type: 'feature-grid',
          heading: 'प्रमुख लाभ एवं विशेषताएं',
          features: [
            { title: 'सटीक गणना', desc: 'प्रामाणिक वैदिक ज्योतिषीय सूत्रों का अनुपालन', badge: 'शास्त्रीय' },
            { title: 'व्यक्तिगत मार्गदर्शन', desc: 'एक-से-एक गोपनीय ऑडियो/वीडियो परामर्श', badge: 'गोपनीय' },
            { title: 'सरल अचूक उपाय', desc: 'बिना किसी भय के सकारात्मक ऊर्जा विस्तार', badge: 'सुलभ' },
          ],
        } as FeatureGridBlock;
        break;
      case 'cta-button':
        newBlock = {
          id: uniqueId,
          type: 'cta-button',
          label: 'व्हाट्सएप पर संपर्क करें (₹5,100)',
          url: 'https://wa.me/919105731969',
          variant: 'gold',
          alignment: 'center',
          subtext: 'तुरंत पुष्टि एवं समय निर्धारण',
        } as CtaButtonBlock;
        break;
      case 'booking-card':
        newBlock = {
          id: uniqueId,
          type: 'booking-card',
          serviceName: `${title || 'Vedic Consultation'} (₹5,100)`,
          price: '₹5,100',
          duration: '60–90 मिनट गहन परामर्श',
          description: 'अपनी जन्मतिथि, जन्म समय और प्रश्न के साथ आज ही स्लॉट सुरक्षित करें।',
        } as BookingCardBlock;
        break;
      case 'divider':
      default:
        newBlock = {
          id: uniqueId,
          type: 'divider',
          style: 'gold-line',
        } as DividerBlock;
        break;
    }

    setBlocks((prev) => [...prev, newBlock]);
  };

  const handleMoveBlock = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) ||
      (direction === 'down' && index === blocks.length - 1)
    ) {
      return;
    }
    const newBlocks = [...blocks];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    const temp = newBlocks[index];
    newBlocks[index] = newBlocks[targetIndex];
    newBlocks[targetIndex] = temp;
    setBlocks(newBlocks);
  };

  const handleDuplicateBlock = (index: number) => {
    const blockToClone = blocks[index];
    const cloned = {
      ...blockToClone,
      id: `b-${blockToClone.type}-${Date.now()}`,
    };
    const newBlocks = [...blocks];
    newBlocks.splice(index + 1, 0, cloned);
    setBlocks(newBlocks);
  };

  const handleDeleteBlock = (index: number) => {
    if (!window.confirm('क्या आप इस ब्लॉक को हटाना चाहते हैं?')) return;
    setBlocks((prev) => prev.filter((_, i) => i !== index));
  };

  const handleUpdateBlockField = (index: number, field: string, value: any) => {
    setBlocks((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [field]: value,
      };
      return updated;
    });
  };

  // Media Library Selection Handler
  const handleSelectMediaFromPicker = (mediaUrl: string) => {
    if (!mediaPickerTarget) return;
    const { blockId, field, index } = mediaPickerTarget;

    if (field === 'ogImage') {
      setOgImage(mediaUrl);
      setMediaPickerTarget(null);
      return;
    }

    setBlocks((prev) =>
      prev.map((block) => {
        if (block.id !== blockId) return block;

        if (field === 'galleryImage' && block.type === 'gallery' && typeof index === 'number') {
          const gallery = block as GalleryBlock;
          const updatedImages = [...gallery.images];
          updatedImages[index] = { ...updatedImages[index], url: mediaUrl };
          return { ...gallery, images: updatedImages };
        }

        return { ...block, [field]: mediaUrl };
      })
    );

    setMediaPickerTarget(null);
  };

  // Save Page
  const handleSave = async (publishImmediate?: boolean) => {
    if (!title.trim()) {
      alert('कृपया पेज का शीर्षक (Title) दर्ज करें।');
      return;
    }

    const finalStatus = publishImmediate ? 'published' : status;

    let targetSlug = slug.trim();
    if (!targetSlug) {
      targetSlug = (titleEn || title)
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-');
    }

    const pagePayload: Partial<CMSPage> = {
      title: title.trim(),
      title_en: titleEn.trim() || undefined,
      slug: targetSlug,
      subtitle: subtitle.trim(),
      excerpt: excerpt.trim(),
      status: finalStatus,
      category,
      showInNav,
      blocks,
      seo: {
        metaTitle: metaTitle.trim() || title.trim(),
        metaDescription: metaDescription.trim() || excerpt.trim(),
        focusKeywords: focusKeywords
          .split(',')
          .map((k) => k.trim())
          .filter(Boolean),
        ogImage: ogImage.trim(),
      },
    };

    try {
      setSaving(true);
      setSaveSuccessMsg(null);
      let result: CMSPage;

      if (id) {
        result = await updatePage(id, pagePayload);
      } else {
        result = await createPage(pagePayload);
        setId(result.id);
      }

      setStatus(result.status);
      setSlug(result.slug);
      setSaveSuccessMsg(
        result.status === 'published'
          ? '🎉 पेज सफलतापूर्वक लाइव प्रकाशित हो गया!'
          : 'पेज ड्राफ्ट के रूप में सुरक्षित सहेज लिया गया!'
      );
      setTimeout(() => setSaveSuccessMsg(null), 4000);
      onPageSaved(result);
    } catch (err: any) {
      alert(`सहेजने में त्रुटि: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="py-24 text-center text-xs text-[#EAE2F4]/50 flex flex-col items-center justify-center gap-3">
        <div className="w-6 h-6 border-2 border-[#D6B574] border-t-transparent rounded-full animate-spin" />
        <span>पेज डेटा लोड हो रहा है...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in pb-16">
      {/* Top sticky header bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-5 rounded-3xl bg-[#24152F]/90 backdrop-blur-xl border border-[#D6B574]/40 shadow-xl sticky top-4 z-30">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onBack}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all cursor-pointer shrink-0"
            title="वापस सूची पर लौटें"
          >
            <ArrowLeft size={18} />
          </button>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold text-[#D6B574] tracking-wider">
                {id ? 'पेज संपादन (Edit Page)' : 'नया पेज निर्माण (New Page Builder)'}
              </span>
              <span
                className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${
                  status === 'published'
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                }`}
              >
                {status === 'published' ? '● प्रकाशित (Live)' : '○ ड्राफ्ट (Draft)'}
              </span>
            </div>
            <h1 className="font-cinzel text-lg sm:text-xl font-bold text-white truncate max-w-md">
              {title || 'बिना शीर्षक का पेज'}
            </h1>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5 justify-end">
          {saveSuccessMsg && (
            <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-3 py-1.5 rounded-xl animate-pulse">
              {saveSuccessMsg}
            </span>
          )}

          {slug && (
            <button
              onClick={() => onPreviewPublic(slug)}
              className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              title="सीधे वेबसाइट पर देखें"
            >
              <Globe size={14} className="text-[#D6B574]" />
              <span>वेबसाइट पर देखें</span>
            </button>
          )}

          <button
            onClick={() => handleSave(false)}
            disabled={saving}
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-[#D6B574]/40 text-white font-semibold text-xs flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
          >
            <Save size={14} />
            <span>{saving ? 'सहेज रहे हैं...' : 'ड्राफ्ट सहेजें'}</span>
          </button>

          <button
            onClick={() => handleSave(true)}
            disabled={saving}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D6B574] via-[#eedca2] to-[#D6B574] text-[#1c0f26] font-bold text-xs tracking-wide shadow-lg shadow-[#D6B574]/20 hover:brightness-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
          >
            <CheckCircle size={15} />
            <span>{status === 'published' ? 'अपडेट प्रकाशित करें' : 'लाइव प्रकाशित करें'}</span>
          </button>
        </div>
      </div>

      {/* Tabs Switcher */}
      <div className="flex items-center gap-2 p-1.5 bg-[#24152F]/70 border border-[#D6B574]/30 rounded-2xl overflow-x-auto">
        <button
          onClick={() => setActiveTab('blocks')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'blocks'
              ? 'bg-[#D6B574] text-[#1c0f26] shadow-md shadow-[#D6B574]/20'
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
        >
          <Layers size={14} />
          <span>१. सामग्री ब्लॉक्स ({blocks.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('details')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'details'
              ? 'bg-[#D6B574] text-[#1c0f26] shadow-md shadow-[#D6B574]/20'
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
        >
          <Settings size={14} />
          <span>२. पेज शीर्षक व URL Slug</span>
        </button>

        <button
          onClick={() => setActiveTab('seo')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'seo'
              ? 'bg-[#D6B574] text-[#1c0f26] shadow-md shadow-[#D6B574]/20'
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
        >
          <Share2 size={14} />
          <span>३. Google SEO & Social Share</span>
        </button>

        <button
          onClick={() => setActiveTab('preview')}
          className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'preview'
              ? 'bg-[#D6B574] text-[#1c0f26] shadow-md shadow-[#D6B574]/20'
              : 'text-white/70 hover:text-white hover:bg-white/5'
          }`}
        >
          <Eye size={14} />
          <span>४. लाइव पूर्वावलोकन (Preview)</span>
        </button>
      </div>

      {/* ========================================================= */}
      {/* TAB 1: CONTENT BLOCKS BUILDER */}
      {/* ========================================================= */}
      {activeTab === 'blocks' && (
        <div className="space-y-6">
          {/* Quick Page Title Reminder Input */}
          <div className="p-4 rounded-2xl bg-[#24152F]/70 border border-[#D6B574]/20 flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full sm:w-1/2">
              <label className="block text-[11px] font-semibold text-[#D6B574] uppercase tracking-wider mb-1">
                पेज शीर्षक (Page Title)
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="उदा. वैदिक जन्मपत्रिका एवं कालसर्प दोष निवारण"
                className="w-full px-3.5 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-sm text-white outline-hidden focus:border-[#D6B574]"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block text-[11px] font-semibold text-[#D6B574] uppercase tracking-wider mb-1">
                URL Slug: <span className="text-white/50 font-mono text-[10px]">/pages/{slug || 'my-page'}</span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="kundali-analysis"
                  className="flex-1 px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 font-mono text-xs text-white outline-hidden focus:border-[#D6B574]"
                />
                <button
                  type="button"
                  onClick={handleGenerateSlug}
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#D6B574] text-xs font-semibold cursor-pointer shrink-0 border border-[#D6B574]/20"
                >
                  ऑटो-Slug
                </button>
              </div>
            </div>
          </div>

          {/* Blocks List */}
          <div className="space-y-4">
            {blocks.map((block, index) => (
              <div
                key={block.id}
                className="rounded-3xl bg-[#24152F]/80 border border-[#D6B574]/30 shadow-xl overflow-hidden transition-all hover:border-[#D6B574]/70"
              >
                {/* Block Header Strip */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-[#1c0f26]/80 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    <span className="w-6 h-6 rounded-lg bg-[#D6B574]/15 border border-[#D6B574]/40 text-[#D6B574] text-xs font-bold flex items-center justify-center font-mono">
                      {index + 1}
                    </span>
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      {block.type === 'hero' && '🌟 मुख्य बैनर (Hero Banner)'}
                      {block.type === 'richtext' && '📝 लेख एवं हेडिंग (Rich Text)'}
                      {block.type === 'image' && '🖼️ एकल चित्र (Single Photo)'}
                      {block.type === 'gallery' && '🗂️ फोटो गैलरी (Image Grid)'}
                      {block.type === 'video' && '🎬 वीडियो प्लेयर (Video Embed)'}
                      {block.type === 'vedic-quote' && '🕉️ वैदिक मंत्र व विचार (Sacred Quote)'}
                      {block.type === 'feature-grid' && '📋 3 स्तम्भ विशेषताएँ (Feature Grid)'}
                      {block.type === 'cta-button' && '🔘 एक्शन बटन (CTA Button)'}
                      {block.type === 'booking-card' && '💳 परामर्श बुकिंग कार्ड (Consultation Card)'}
                      {block.type === 'divider' && '⚜️ वैदिक विभाजक (Divider)'}
                    </span>
                  </div>

                  {/* Move, Clone & Delete Buttons */}
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => handleMoveBlock(index, 'up')}
                      disabled={index === 0}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white disabled:opacity-20 cursor-pointer"
                      title="ऊपर ले जाएँ (Move Up)"
                    >
                      <ChevronUp size={15} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleMoveBlock(index, 'down')}
                      disabled={index === blocks.length - 1}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white disabled:opacity-20 cursor-pointer"
                      title="नीचे ले जाएँ (Move Down)"
                    >
                      <ChevronDown size={15} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDuplicateBlock(index)}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-white cursor-pointer"
                      title="इस ब्लॉक की प्रतिलिपि बनाएँ (Clone)"
                    >
                      <Copy size={15} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteBlock(index)}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-red-400 hover:text-red-300 cursor-pointer"
                      title="ब्लॉक हटाएँ (Delete)"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>

                {/* Block Content Inputs */}
                <div className="p-5 space-y-4">
                  {/* 1. HERO BLOCK */}
                  {block.type === 'hero' && (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                          बैनर मुख्य शीर्षक (Banner Headline)
                        </label>
                        <input
                          type="text"
                          value={(block as HeroBlock).title || ''}
                          onChange={(e) => handleUpdateBlockField(index, 'title', e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-sm text-white outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                          उप-शीर्षक (Subtitle)
                        </label>
                        <input
                          type="text"
                          value={(block as HeroBlock).subtitle || ''}
                          onChange={(e) => handleUpdateBlockField(index, 'subtitle', e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                            पृष्ठभूमि चित्र URL (Background Image)
                          </label>
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={(block as HeroBlock).bgImage || ''}
                              onChange={(e) => handleUpdateBlockField(index, 'bgImage', e.target.value)}
                              placeholder="/assets/awards/IMMT.jpeg"
                              className="flex-1 px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                            />
                            <button
                              type="button"
                              onClick={() => setMediaPickerTarget({ blockId: block.id, field: 'bgImage' })}
                              className="px-3 py-2 rounded-xl bg-[#D6B574] text-[#1c0f26] text-xs font-bold shrink-0 cursor-pointer"
                            >
                              लाइब्रेरी से चुनें
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                            बटन टेक्स्ट व लिंक (CTA Button)
                          </label>
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={(block as HeroBlock).ctaText || ''}
                              onChange={(e) => handleUpdateBlockField(index, 'ctaText', e.target.value)}
                              placeholder="बटन टेक्स्ट (उदा. परामर्श बुक करें)"
                              className="w-1/2 px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                            />
                            <input
                              type="text"
                              value={(block as HeroBlock).ctaLink || ''}
                              onChange={(e) => handleUpdateBlockField(index, 'ctaLink', e.target.value)}
                              placeholder="लिंक (उदा. #contact)"
                              className="w-1/2 px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 2. RICH TEXT BLOCK */}
                  {block.type === 'richtext' && (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                          अनुभाग हेडिंग (Heading)
                        </label>
                        <input
                          type="text"
                          value={(block as RichTextBlock).heading || ''}
                          onChange={(e) => handleUpdateBlockField(index, 'heading', e.target.value)}
                          placeholder="उदा. वैदिक कुण्डली विश्लेषण के प्रमुख लाभ"
                          className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-sm text-white outline-hidden"
                        />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="text-xs font-semibold text-[#D6B574]">
                            विस्तृत सामग्री (HTML / Text Content)
                          </label>
                          <span className="text-[10px] text-[#EAE2F4]/50">
                            &lt;p&gt;, &lt;ul&gt;, &lt;li&gt;, &lt;strong&gt; टैग समर्थित
                          </span>
                        </div>
                        <textarea
                          rows={6}
                          value={(block as RichTextBlock).content || ''}
                          onChange={(e) => handleUpdateBlockField(index, 'content', e.target.value)}
                          placeholder="यहाँ अपनी सामग्री का पैराग्राफ या बुलेट पॉइंट्स लिखें..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 font-mono text-xs text-white outline-hidden focus:border-[#D6B574]"
                        />
                      </div>
                    </div>
                  )}

                  {/* 3. SINGLE IMAGE BLOCK */}
                  {block.type === 'image' && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                            चित्र URL (Image URL)
                          </label>
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={(block as SingleImageBlock).url || ''}
                              onChange={(e) => handleUpdateBlockField(index, 'url', e.target.value)}
                              placeholder="/assets/awards/IMMT.jpeg"
                              className="flex-1 px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                            />
                            <button
                              type="button"
                              onClick={() => setMediaPickerTarget({ blockId: block.id, field: 'url' })}
                              className="px-3 py-2 rounded-xl bg-[#D6B574] text-[#1c0f26] text-xs font-bold shrink-0 cursor-pointer"
                            >
                              लाइब्रेरी
                            </button>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                            संरेखण (Alignment)
                          </label>
                          <select
                            value={(block as SingleImageBlock).alignment || 'center'}
                            onChange={(e) => handleUpdateBlockField(index, 'alignment', e.target.value)}
                            className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden cursor-pointer"
                          >
                            <option value="center">मध्य (Center)</option>
                            <option value="left">बायाँ (Left)</option>
                            <option value="right">दायाँ (Right)</option>
                            <option value="full">पूर्ण चौड़ाई (Full Width)</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                            कैप्शन (Caption)
                          </label>
                          <input
                            type="text"
                            value={(block as SingleImageBlock).caption || ''}
                            onChange={(e) => handleUpdateBlockField(index, 'caption', e.target.value)}
                            placeholder="चित्र का दृश्यमान शीर्षक"
                            className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                            ऑल्ट टेक्स्ट (Alt Text - SEO)
                          </label>
                          <input
                            type="text"
                            value={(block as SingleImageBlock).altText || ''}
                            onChange={(e) => handleUpdateBlockField(index, 'altText', e.target.value)}
                            placeholder="सर्च इंजन हेतु विवरण"
                            className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 4. GALLERY BLOCK */}
                  {block.type === 'gallery' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-1">
                          <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                            दीर्घा शीर्षक (Gallery Heading)
                          </label>
                          <input
                            type="text"
                            value={(block as GalleryBlock).heading || ''}
                            onChange={(e) => handleUpdateBlockField(index, 'heading', e.target.value)}
                            placeholder="उदा. राष्ट्रीय मंचों पर सम्मान एवं प्रशस्ति"
                            className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                          />
                        </div>
                        <div className="w-32">
                          <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                            कॉलम संख्या
                          </label>
                          <select
                            value={(block as GalleryBlock).columns || 3}
                            onChange={(e) => handleUpdateBlockField(index, 'columns', parseInt(e.target.value, 10))}
                            className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden cursor-pointer"
                          >
                            <option value={2}>2 कॉलम</option>
                            <option value={3}>3 कॉलम</option>
                            <option value={4}>4 कॉलम</option>
                          </select>
                        </div>
                      </div>

                      {/* Images list */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-[#D6B574]">
                          गैलरी में चित्र ({(block as GalleryBlock).images?.length || 0})
                        </label>
                        {((block as GalleryBlock).images || []).map((img, imgIdx) => (
                          <div
                            key={imgIdx}
                            className="flex items-center gap-2 p-2 rounded-xl bg-[#1c0f26] border border-white/5"
                          >
                            <img
                              src={img.url}
                              alt={img.caption || ''}
                              className="w-10 h-10 rounded-lg object-cover bg-black/40 shrink-0"
                            />
                            <input
                              type="text"
                              value={img.url}
                              onChange={(e) => {
                                const newImages = [...(block as GalleryBlock).images];
                                newImages[imgIdx] = { ...newImages[imgIdx], url: e.target.value };
                                handleUpdateBlockField(index, 'images', newImages);
                              }}
                              placeholder="चित्र URL"
                              className="flex-1 px-2.5 py-1.5 rounded-lg bg-[#24152F] border border-white/10 text-xs text-white outline-hidden"
                            />
                            <button
                              type="button"
                              onClick={() =>
                                setMediaPickerTarget({
                                  blockId: block.id,
                                  field: 'galleryImage',
                                  index: imgIdx,
                                })
                              }
                              className="px-2.5 py-1.5 rounded-lg bg-[#D6B574] text-[#1c0f26] text-[11px] font-bold shrink-0 cursor-pointer"
                            >
                              चुनें
                            </button>
                            <input
                              type="text"
                              value={img.caption || ''}
                              onChange={(e) => {
                                const newImages = [...(block as GalleryBlock).images];
                                newImages[imgIdx] = { ...newImages[imgIdx], caption: e.target.value };
                                handleUpdateBlockField(index, 'images', newImages);
                              }}
                              placeholder="कैप्शन"
                              className="w-1/3 px-2.5 py-1.5 rounded-lg bg-[#24152F] border border-white/10 text-xs text-white outline-hidden"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const newImages = (block as GalleryBlock).images.filter((_, i) => i !== imgIdx);
                                handleUpdateBlockField(index, 'images', newImages);
                              }}
                              className="p-1.5 text-red-400 hover:text-red-300"
                              title="हटाएँ"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        ))}

                        <button
                          type="button"
                          onClick={() => {
                            const newImages = [
                              ...((block as GalleryBlock).images || []),
                              { url: '/assets/awards/IMMT.jpeg', caption: 'नया चित्र' },
                            ];
                            handleUpdateBlockField(index, 'images', newImages);
                          }}
                          className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#D6B574] text-xs font-semibold inline-flex items-center gap-1 cursor-pointer"
                        >
                          <Plus size={13} />
                          <span>चित्र जोड़ें (+ Image)</span>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* 5. VIDEO BLOCK */}
                  {block.type === 'video' && (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                          वीडियो शीर्षक (Video Heading)
                        </label>
                        <input
                          type="text"
                          value={(block as VideoBlock).heading || ''}
                          onChange={(e) => handleUpdateBlockField(index, 'heading', e.target.value)}
                          placeholder="उदा. वैदिक मंत्रोच्चार एवं चक्र ध्यान"
                          className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                          वीडियो URL (YouTube / Vimeo Embed या अपलोड किया गया MP4)
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={(block as VideoBlock).videoUrl || ''}
                            onChange={(e) => handleUpdateBlockField(index, 'videoUrl', e.target.value)}
                            placeholder="https://www.youtube.com/embed/... या /uploads/my_video.mp4"
                            className="flex-1 px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                          />
                          <button
                            type="button"
                            onClick={() => setMediaPickerTarget({ blockId: block.id, field: 'videoUrl' })}
                            className="px-3 py-2 rounded-xl bg-[#D6B574] text-[#1c0f26] text-xs font-bold shrink-0 cursor-pointer"
                          >
                            मीडिया से चुनें
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                          कैप्शन (Caption)
                        </label>
                        <input
                          type="text"
                          value={(block as VideoBlock).caption || ''}
                          onChange={(e) => handleUpdateBlockField(index, 'caption', e.target.value)}
                          placeholder="वीडियो का संक्षिप्त विवरण"
                          className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                        />
                      </div>
                    </div>
                  )}

                  {/* 6. VEDIC QUOTE BLOCK */}
                  {block.type === 'vedic-quote' && (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                          पावन वैदिक मंत्र / श्लोक (Sacred Mantra)
                        </label>
                        <input
                          type="text"
                          value={(block as VedicQuoteBlock).mantra || ''}
                          onChange={(e) => handleUpdateBlockField(index, 'mantra', e.target.value)}
                          placeholder="ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं..."
                          className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-[#D6B574] font-semibold outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                          विचार / उद्धरण (Quote Text)
                        </label>
                        <textarea
                          rows={3}
                          value={(block as VedicQuoteBlock).quote || ''}
                          onChange={(e) => handleUpdateBlockField(index, 'quote', e.target.value)}
                          placeholder="आध्यात्मिक विचार..."
                          className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                          लेखक / वक्ता (Author)
                        </label>
                        <input
                          type="text"
                          value={(block as VedicQuoteBlock).author || ''}
                          onChange={(e) => handleUpdateBlockField(index, 'author', e.target.value)}
                          placeholder="डॉ. पूजा अवस्थी"
                          className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                        />
                      </div>
                    </div>
                  )}

                  {/* 7. FEATURE GRID BLOCK */}
                  {block.type === 'feature-grid' && (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                          अनुभाग हेडिंग (Section Title)
                        </label>
                        <input
                          type="text"
                          value={(block as FeatureGridBlock).heading || ''}
                          onChange={(e) => handleUpdateBlockField(index, 'heading', e.target.value)}
                          placeholder="उदा. प्रमुख लाभ एवं विशेषताएं"
                          className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                        />
                      </div>

                      {/* Features list */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {((block as FeatureGridBlock).features || []).map((feat, fIdx) => (
                          <div key={fIdx} className="p-3 rounded-2xl bg-[#1c0f26] border border-white/5 space-y-2">
                            <input
                              type="text"
                              value={feat.badge || ''}
                              onChange={(e) => {
                                const newFeats = [...(block as FeatureGridBlock).features];
                                newFeats[fIdx] = { ...newFeats[fIdx], badge: e.target.value };
                                handleUpdateBlockField(index, 'features', newFeats);
                              }}
                              placeholder="बैज (उदा. शास्त्रीय)"
                              className="w-full px-2 py-1 rounded bg-[#24152F] text-[11px] text-[#D6B574] font-bold border border-white/10 outline-hidden"
                            />
                            <input
                              type="text"
                              value={feat.title || ''}
                              onChange={(e) => {
                                const newFeats = [...(block as FeatureGridBlock).features];
                                newFeats[fIdx] = { ...newFeats[fIdx], title: e.target.value };
                                handleUpdateBlockField(index, 'features', newFeats);
                              }}
                              placeholder="कार्ड शीर्षक"
                              className="w-full px-2 py-1 rounded bg-[#24152F] text-xs text-white font-semibold border border-white/10 outline-hidden"
                            />
                            <textarea
                              rows={2}
                              value={feat.desc || ''}
                              onChange={(e) => {
                                const newFeats = [...(block as FeatureGridBlock).features];
                                newFeats[fIdx] = { ...newFeats[fIdx], desc: e.target.value };
                                handleUpdateBlockField(index, 'features', newFeats);
                              }}
                              placeholder="विवरण..."
                              className="w-full px-2 py-1 rounded bg-[#24152F] text-[11px] text-[#EAE2F4]/70 border border-white/10 outline-hidden"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 8. CTA BUTTON BLOCK */}
                  {block.type === 'cta-button' && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                          बटन लेबल (Button Label)
                        </label>
                        <input
                          type="text"
                          value={(block as CtaButtonBlock).label || ''}
                          onChange={(e) => handleUpdateBlockField(index, 'label', e.target.value)}
                          placeholder="उदा. स्लॉट बुक करें"
                          className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                          लिंक URL (Action Link)
                        </label>
                        <input
                          type="text"
                          value={(block as CtaButtonBlock).url || ''}
                          onChange={(e) => handleUpdateBlockField(index, 'url', e.target.value)}
                          placeholder="#contact या https://wa.me/..."
                          className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                          उप-पाठ (Subtext)
                        </label>
                        <input
                          type="text"
                          value={(block as CtaButtonBlock).subtext || ''}
                          onChange={(e) => handleUpdateBlockField(index, 'subtext', e.target.value)}
                          placeholder="उदा. 100% गोपनीय व प्रामाणिक"
                          className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                        />
                      </div>
                    </div>
                  )}

                  {/* 9. BOOKING CARD BLOCK */}
                  {block.type === 'booking-card' && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                          सेवा का नाम (Service Name)
                        </label>
                        <input
                          type="text"
                          value={(block as BookingCardBlock).serviceName || ''}
                          onChange={(e) => handleUpdateBlockField(index, 'serviceName', e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                          शुल्क (Price)
                        </label>
                        <input
                          type="text"
                          value={(block as BookingCardBlock).price || '₹5,100'}
                          onChange={(e) => handleUpdateBlockField(index, 'price', e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                          अवधि (Duration)
                        </label>
                        <input
                          type="text"
                          value={(block as BookingCardBlock).duration || '60–90 मिनट'}
                          onChange={(e) => handleUpdateBlockField(index, 'duration', e.target.value)}
                          className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                        />
                      </div>
                    </div>
                  )}

                  {/* 10. DIVIDER BLOCK */}
                  {block.type === 'divider' && (
                    <div className="py-2 text-center text-xs text-[#D6B574]/60 flex items-center justify-center gap-3">
                      <div className="h-px bg-[#D6B574]/30 flex-1" />
                      <span>⚜️ दिव्य स्वर्णिम विभाजक रेखा ⚜️</span>
                      <div className="h-px bg-[#D6B574]/30 flex-1" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Add New Block Dropdown / Buttons */}
          <div className="p-6 rounded-3xl bg-[#24152F]/70 border border-[#D6B574]/30 text-center space-y-4">
            <h3 className="font-cinzel text-sm font-bold text-white flex items-center justify-center gap-2">
              <Plus size={16} className="text-[#D6B574]" />
              <span>नया सामग्री ब्लॉक जोड़ें (Add Content Block)</span>
            </h3>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => handleAddBlock('hero')}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#D6B574]/20 border border-[#D6B574]/30 text-white hover:text-[#D6B574] text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>🌟 मुख्य बैनर (Hero)</span>
              </button>

              <button
                type="button"
                onClick={() => handleAddBlock('richtext')}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#D6B574]/20 border border-[#D6B574]/30 text-white hover:text-[#D6B574] text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>📝 लेख व हेडिंग (Rich Text)</span>
              </button>

              <button
                type="button"
                onClick={() => handleAddBlock('image')}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#D6B574]/20 border border-[#D6B574]/30 text-white hover:text-[#D6B574] text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>🖼️ एकल चित्र (Photo)</span>
              </button>

              <button
                type="button"
                onClick={() => handleAddBlock('gallery')}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#D6B574]/20 border border-[#D6B574]/30 text-white hover:text-[#D6B574] text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>🗂️ फोटो गैलरी (Gallery)</span>
              </button>

              <button
                type="button"
                onClick={() => handleAddBlock('video')}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#D6B574]/20 border border-[#D6B574]/30 text-white hover:text-[#D6B574] text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>🎬 वीडियो प्लेयर (Video)</span>
              </button>

              <button
                type="button"
                onClick={() => handleAddBlock('vedic-quote')}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#D6B574]/20 border border-[#D6B574]/30 text-white hover:text-[#D6B574] text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>🕉️ वैदिक मंत्र / विचार</span>
              </button>

              <button
                type="button"
                onClick={() => handleAddBlock('feature-grid')}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#D6B574]/20 border border-[#D6B574]/30 text-white hover:text-[#D6B574] text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>📋 3 स्तम्भ विशेषताएँ</span>
              </button>

              <button
                type="button"
                onClick={() => handleAddBlock('cta-button')}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#D6B574]/20 border border-[#D6B574]/30 text-white hover:text-[#D6B574] text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>🔘 एक्शन बटन (Button)</span>
              </button>

              <button
                type="button"
                onClick={() => handleAddBlock('booking-card')}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#D6B574]/20 border border-[#D6B574]/30 text-white hover:text-[#D6B574] text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>💳 परामर्श कार्ड (Booking)</span>
              </button>

              <button
                type="button"
                onClick={() => handleAddBlock('divider')}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#D6B574]/20 border border-[#D6B574]/30 text-white hover:text-[#D6B574] text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>⚜️ विभाजक (Divider)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 2: PAGE DETAILS & NAVIGATION SETTINGS */}
      {/* ========================================================= */}
      {activeTab === 'details' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-[#24152F]/80 border border-[#D6B574]/30 shadow-xl space-y-6">
          <div className="space-y-1">
            <h2 className="font-cinzel text-lg font-bold text-white">
              पेज विवरण एवं नेविगेशन कॉन्फ़िगरेशन
            </h2>
            <p className="text-xs text-[#EAE2F4]/70">
              पेज का मुख्य शीर्षक, अंग्रेज़ी अनुवाद, श्रेणी और हेडर मेन्यू दृश्यता सेट करें।
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                मुख्य शीर्षक (Hindi / Primary Title) *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="उदा. वैदिक जन्मपत्रिका एवं कुण्डली दोष निवारण"
                className="w-full px-4 py-3 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-sm text-white outline-hidden focus:border-[#D6B574]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                अंग्रेज़ी शीर्षक (English Title)
              </label>
              <input
                type="text"
                value={titleEn}
                onChange={(e) => setTitleEn(e.target.value)}
                placeholder="e.g. Vedic Kundali Analysis & Dosha Remedies"
                className="w-full px-4 py-3 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-sm text-white outline-hidden focus:border-[#D6B574]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                स्थाई URL Slug *
              </label>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#D6B574]/70 bg-[#1c0f26] px-3 py-3 rounded-xl border border-white/5 shrink-0">
                  /pages/
                </span>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  placeholder="kundali-analysis"
                  className="flex-1 px-4 py-3 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 font-mono text-sm text-white outline-hidden focus:border-[#D6B574]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                श्रेणी (Category)
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-sm text-white outline-hidden cursor-pointer"
              >
                <option value="Vedic Guidance">वैदिक मार्गदर्शन (Vedic Guidance)</option>
                <option value="Remedies">शास्त्र सम्मत उपाय (Remedies)</option>
                <option value="Healing">ऊर्जा एवं चक्र हीलिंग (Healing)</option>
                <option value="Awards & Events">सम्मान एवं महासम्मेलन (Awards & Events)</option>
                <option value="Articles">आध्यात्मिक लेख (Spiritual Articles)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
              उप-शीर्षक (Page Subtitle)
            </label>
            <input
              type="text"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="उदा. ग्रह-नक्षत्रों की चाल, कालसर्प, मांगलिक व पितृ दोष का अचूक शास्त्रीय समाधान"
              className="w-full px-4 py-3 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden focus:border-[#D6B574]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
              संक्षिप्त सार (Page Excerpt)
            </label>
            <textarea
              rows={3}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="इस पेज का 2-3 पंक्तियों में सार लिखें..."
              className="w-full px-4 py-3 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden focus:border-[#D6B574]"
            />
          </div>

          {/* Show in Nav Toggle */}
          <div className="p-4 rounded-2xl bg-[#1c0f26] border border-[#D6B574]/30 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-semibold text-white">
                वेबसाइट के मुख्य नेविगेशन मेन्यू में प्रदर्शित करें
              </h4>
              <p className="text-xs text-[#EAE2F4]/60 mt-0.5">
                सक्रिय करने पर यह पेज वेबसाइट के हेडर में "विशेष पृष्ठ / Pages" ड्रॉपडाउन में दिखाई देगा।
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showInNav}
                onChange={(e) => setShowInNav(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/10 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#D6B574]"></div>
            </label>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 3: SEO & SOCIAL SHARING CARD SETTINGS */}
      {/* ========================================================= */}
      {activeTab === 'seo' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-[#24152F]/80 border border-[#D6B574]/30 shadow-xl space-y-6">
          <div className="space-y-1">
            <h2 className="font-cinzel text-lg font-bold text-white">
              Google SEO & Social Share (OpenGraph) सेटिंग्स
            </h2>
            <p className="text-xs text-[#EAE2F4]/70">
              गूगल सर्च और व्हाट्सएप / फेसबुक / ट्विटर पर शेयर करते समय पेज का शीर्षक, विवरण व चित्र।
            </p>
          </div>

          {/* Google Search Live Preview Snippet */}
          <div className="p-5 rounded-2xl bg-[#1c0f26] border border-white/10 space-y-2">
            <span className="text-[10px] uppercase font-bold text-[#D6B574] tracking-wider">
              Google Search Result पूर्वावलोकन
            </span>
            <div className="text-xs text-[#8ab4f8] truncate">
              https://poojaawasthi.com/pages/{slug || 'kundali-analysis'}
            </div>
            <div className="text-base text-[#99c3ff] font-medium hover:underline cursor-pointer truncate">
              {metaTitle || title || 'पेज का शीर्षक'}
            </div>
            <div className="text-xs text-[#bdc1c6] line-clamp-2">
              {metaDescription || excerpt || 'पेज का विवरण यहाँ दिखाई देगा...'}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-[#D6B574] uppercase tracking-wider">
                  Meta Title (सर्च इंजन शीर्षक)
                </label>
                <span className="text-[11px] text-[#EAE2F4]/50">
                  {metaTitle.length}/60 अक्षर
                </span>
              </div>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                placeholder="उदा. वैदिक कुण्डली विश्लेषण एवं दोष निवारण | डॉ. पूजा अवस्थी"
                className="w-full px-4 py-3 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-sm text-white outline-hidden focus:border-[#D6B574]"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-semibold text-[#D6B574] uppercase tracking-wider">
                  Meta Description (सर्च इंजन विवरण)
                </label>
                <span className="text-[11px] text-[#EAE2F4]/50">
                  {metaDescription.length}/160 अक्षर
                </span>
              </div>
              <textarea
                rows={3}
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                placeholder="सर्च इंजन में दिखने वाला 1-2 पंक्तियों का संक्षिप्त व आकर्षक विवरण..."
                className="w-full px-4 py-3 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden focus:border-[#D6B574]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                Focus Keywords (अल्पविराम से अलग करें)
              </label>
              <input
                type="text"
                value={focusKeywords}
                onChange={(e) => setFocusKeywords(e.target.value)}
                placeholder="kundali analysis, vedic astrology, dr pooja awasthi, dosha remedies"
                className="w-full px-4 py-3 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden focus:border-[#D6B574]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
                Social Share (OG Image URL)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={ogImage}
                  onChange={(e) => setOgImage(e.target.value)}
                  placeholder="/assets/awards/IMMT.jpeg"
                  className="flex-1 px-4 py-3 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden focus:border-[#D6B574]"
                />
                <button
                  type="button"
                  onClick={() => setMediaPickerTarget({ blockId: 'seo', field: 'ogImage' })}
                  className="px-4 py-3 rounded-xl bg-[#D6B574] text-[#1c0f26] text-xs font-bold shrink-0 cursor-pointer"
                >
                  मीडिया लाइब्रेरी से चुनें
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 4: LIVE PREVIEW INSIDE BUILDER */}
      {/* ========================================================= */}
      {activeTab === 'preview' && (
        <div className="space-y-4">
          {/* Device viewport switcher */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-[#24152F]/70 border border-[#D6B574]/20">
            <span className="text-xs font-semibold text-[#D6B574]">
              लाइव पूर्वावलोकन (Preview Mode)
            </span>
            <div className="flex items-center gap-1 bg-[#1c0f26] p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setPreviewDevice('desktop')}
                className={`p-1.5 rounded-lg transition-all ${
                  previewDevice === 'desktop' ? 'bg-[#D6B574] text-[#1c0f26]' : 'text-white/60 hover:text-white'
                }`}
                title="Desktop"
              >
                <Monitor size={16} />
              </button>
              <button
                type="button"
                onClick={() => setPreviewDevice('tablet')}
                className={`p-1.5 rounded-lg transition-all ${
                  previewDevice === 'tablet' ? 'bg-[#D6B574] text-[#1c0f26]' : 'text-white/60 hover:text-white'
                }`}
                title="Tablet"
              >
                <Tablet size={16} />
              </button>
              <button
                type="button"
                onClick={() => setPreviewDevice('mobile')}
                className={`p-1.5 rounded-lg transition-all ${
                  previewDevice === 'mobile' ? 'bg-[#D6B574] text-[#1c0f26]' : 'text-white/60 hover:text-white'
                }`}
                title="Mobile"
              >
                <Smartphone size={16} />
              </button>
            </div>
          </div>

          {/* Render Frame */}
          <div className="flex justify-center p-4 bg-[#160b20] rounded-3xl border border-white/5 overflow-hidden">
            <div
              className={`transition-all duration-300 bg-[#FBF8F2] text-[#29242E] rounded-2xl overflow-hidden shadow-2xl border border-[#D6B574]/30 min-h-[500px] ${
                previewDevice === 'desktop'
                  ? 'w-full'
                  : previewDevice === 'tablet'
                  ? 'w-[768px]'
                  : 'w-[375px]'
              }`}
            >
              {/* Fake browser bar */}
              <div className="bg-[#24152F] text-white px-4 py-2 text-xs flex items-center justify-between border-b border-[#D6B574]/20">
                <span className="font-mono text-[11px] text-[#D6B574]">
                  poojaawasthi.com/pages/{slug || 'preview'}
                </span>
                <span className="text-[10px] text-white/50">Dr. Pooja Awasthi Website</span>
              </div>

              {/* Page Content Rendering */}
              <div className="p-6 sm:p-10 space-y-8">
                {blocks.map((block) => {
                  if (block.type === 'hero') {
                    const hero = block as HeroBlock;
                    return (
                      <div
                        key={hero.id}
                        className="rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden bg-cover bg-center shadow-xl"
                        style={{
                          backgroundImage: hero.bgImage
                            ? `linear-gradient(rgba(28, 15, 38, 0.85), rgba(28, 15, 38, 0.85)), url(${hero.bgImage})`
                            : 'linear-gradient(135deg, #24152F, #1c0f26)',
                        }}
                      >
                        <h1 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#F3E5AB]">
                          {hero.title}
                        </h1>
                        {hero.subtitle && (
                          <p className="text-sm text-[#EAE2F4]/80 mt-2 max-w-xl mx-auto">
                            {hero.subtitle}
                          </p>
                        )}
                        {hero.ctaText && (
                          <div className="mt-5">
                            <span className="px-6 py-2.5 rounded-full bg-[#D6B574] text-[#1c0f26] font-bold text-xs inline-block shadow-md">
                              {hero.ctaText}
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  }

                  if (block.type === 'richtext') {
                    const rt = block as RichTextBlock;
                    return (
                      <div key={rt.id} className="space-y-3">
                        {rt.heading && (
                          <h2 className="font-cinzel text-xl font-bold text-[#24152F]">
                            {rt.heading}
                          </h2>
                        )}
                        <div
                          className="prose prose-sm max-w-none text-[#29242E]/90 leading-relaxed space-y-2"
                          dangerouslySetInnerHTML={{ __html: rt.content }}
                        />
                      </div>
                    );
                  }

                  if (block.type === 'vedic-quote') {
                    const vq = block as VedicQuoteBlock;
                    return (
                      <div
                        key={vq.id}
                        className="p-6 rounded-2xl bg-[#24152F] text-white border-2 border-[#D6B574] text-center space-y-2 shadow-lg"
                      >
                        {vq.mantra && (
                          <div className="text-xs font-bold text-[#D6B574] tracking-wider uppercase font-mono">
                            {vq.mantra}
                          </div>
                        )}
                        <blockquote className="text-sm font-serif italic text-[#F3E5AB]">
                          "{vq.quote}"
                        </blockquote>
                        {vq.author && (
                          <div className="text-xs text-[#EAE2F4]/70 font-cinzel">
                            — {vq.author}
                          </div>
                        )}
                      </div>
                    );
                  }

                  if (block.type === 'image') {
                    const img = block as SingleImageBlock;
                    return (
                      <div key={img.id} className="text-center space-y-2">
                        <img
                          src={img.url}
                          alt={img.altText || ''}
                          className="rounded-2xl mx-auto max-h-80 object-cover shadow-lg border border-[#D6B574]/30"
                        />
                        {img.caption && (
                          <p className="text-xs text-[#29242E]/60 italic">{img.caption}</p>
                        )}
                      </div>
                    );
                  }

                  if (block.type === 'gallery') {
                    const gal = block as GalleryBlock;
                    return (
                      <div key={gal.id} className="space-y-4">
                        {gal.heading && (
                          <h3 className="font-cinzel text-lg font-bold text-[#24152F] text-center">
                            {gal.heading}
                          </h3>
                        )}
                        <div
                          className={`grid gap-4 ${
                            gal.columns === 2
                              ? 'grid-cols-2'
                              : gal.columns === 4
                              ? 'grid-cols-2 sm:grid-cols-4'
                              : 'grid-cols-1 sm:grid-cols-3'
                          }`}
                        >
                          {gal.images?.map((img, i) => (
                            <div key={i} className="rounded-xl overflow-hidden shadow-md bg-[#1c0f26]">
                              <img
                                src={img.url}
                                alt={img.caption || ''}
                                className="w-full h-36 object-cover"
                              />
                              {img.caption && (
                                <p className="p-2 text-[11px] text-white/80 bg-[#24152F] text-center truncate">
                                  {img.caption}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  if (block.type === 'video') {
                    const vid = block as VideoBlock;
                    return (
                      <div key={vid.id} className="space-y-2 text-center">
                        {vid.heading && (
                          <h3 className="font-cinzel text-lg font-bold text-[#24152F]">
                            {vid.heading}
                          </h3>
                        )}
                        <div className="aspect-video max-w-xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-[#D6B574]/30 bg-black">
                          {vid.videoUrl.includes('youtube') || vid.videoUrl.includes('embed') ? (
                            <iframe
                              src={vid.videoUrl}
                              className="w-full h-full"
                              allowFullScreen
                            />
                          ) : (
                            <video src={vid.videoUrl} controls className="w-full h-full" />
                          )}
                        </div>
                        {vid.caption && (
                          <p className="text-xs text-[#29242E]/60">{vid.caption}</p>
                        )}
                      </div>
                    );
                  }

                  if (block.type === 'feature-grid') {
                    const fg = block as FeatureGridBlock;
                    return (
                      <div key={fg.id} className="space-y-4">
                        {fg.heading && (
                          <h3 className="font-cinzel text-lg font-bold text-[#24152F] text-center">
                            {fg.heading}
                          </h3>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {fg.features?.map((f, i) => (
                            <div
                              key={i}
                              className="p-4 rounded-2xl bg-white border border-[#D6B574]/40 shadow-md space-y-1"
                            >
                              {f.badge && (
                                <span className="text-[10px] font-bold text-[#D6B574] bg-[#24152F] px-2 py-0.5 rounded">
                                  {f.badge}
                                </span>
                              )}
                              <h4 className="font-cinzel font-bold text-sm text-[#24152F] pt-1">
                                {f.title}
                              </h4>
                              <p className="text-xs text-[#29242E]/70">{f.desc}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }

                  if (block.type === 'booking-card') {
                    const bc = block as BookingCardBlock;
                    return (
                      <div
                        key={bc.id}
                        className="p-6 rounded-3xl bg-gradient-to-r from-[#24152F] to-[#1c0f26] text-white border-2 border-[#D6B574] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl"
                      >
                        <div className="space-y-1 text-center sm:text-left">
                          <span className="text-[10px] text-[#D6B574] font-bold uppercase tracking-wider">
                            परामर्श स्लॉट (Consultation)
                          </span>
                          <h4 className="font-cinzel text-lg font-bold">{bc.serviceName}</h4>
                          <p className="text-xs text-[#EAE2F4]/70">{bc.description}</p>
                        </div>
                        <div className="text-center sm:text-right shrink-0">
                          <div className="font-cinzel text-xl font-bold text-[#D6B574]">
                            {bc.price || '₹5,100'}
                          </div>
                          <span className="mt-2 inline-block px-5 py-2 rounded-full bg-[#D6B574] text-[#1c0f26] font-bold text-xs shadow-md">
                            अभी बुक करें
                          </span>
                        </div>
                      </div>
                    );
                  }

                  if (block.type === 'divider') {
                    return (
                      <div key={block.id} className="py-4 text-center">
                        <div className="h-px bg-[#D6B574]/40 w-32 mx-auto" />
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Media Picker Modal Overlay */}
      {mediaPickerTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-4xl max-h-[90vh] rounded-3xl bg-[#1c0f26] border border-[#D6B574]/50 shadow-2xl overflow-y-auto">
            <AdminMediaLibrary
              isPicker={true}
              onSelectMedia={handleSelectMediaFromPicker}
              onClosePicker={() => setMediaPickerTarget(null)}
              lang={lang}
            />
          </div>
        </div>
      )}
    </div>
  );
};

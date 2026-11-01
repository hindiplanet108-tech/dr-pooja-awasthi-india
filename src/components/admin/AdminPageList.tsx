import React, { useEffect, useState } from 'react';
import {
  FileText,
  Search,
  Filter,
  PlusCircle,
  Edit3,
  Trash2,
  Copy,
  ExternalLink,
  Eye,
  CheckCircle,
  Clock,
  Compass,
  Layers,
  Sparkles,
  AlertCircle,
  Home,
  User,
  Heart,
  Video,
  HelpCircle,
  Phone,
  CreditCard,
  Star,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { CMSPage, getPages, deletePage, duplicatePage, updatePage } from '../../utils/cmsApi';

export interface CoreSectionItem {
  id: string;
  sectionKey: 'hero' | 'about' | 'services' | 'video' | 'testimonials' | 'faqs' | 'contact';
  title_hi: string;
  title_en: string;
  subtitle_hi: string;
  subtitle_en: string;
  slug: string;
  icon: any;
  category_hi: string;
  category_en: string;
  editableItems_hi: string[];
  editableItems_en: string[];
}

export const CORE_WEBSITE_SECTIONS: CoreSectionItem[] = [
  {
    id: 'core-hero',
    sectionKey: 'hero',
    title_hi: '१. मुख्य बैनर एवं पावन पीठ (Hero Sanctuary)',
    title_en: '1. Home Hero Banner & Sanctuary',
    subtitle_hi: 'वेबसाइट का मुख्य प्रथम दृश्य, पावन स्लोगन, डॉ. पूजा अवस्थी का परिचय कोट एवं मुख्य एक्शन बटन।',
    subtitle_en: 'Main homepage welcome banner, spiritual motto, portrait photograph, and booking CTA buttons.',
    slug: '/',
    icon: Home,
    category_hi: 'मुख्य पृष्ठ',
    category_en: 'Homepage',
    editableItems_hi: ['मुख्य शीर्षक (Headline)', 'उपशीर्षक (Sub-headline)', 'डॉ. पूजा अवस्थी कोट', 'पोर्ट्रेट फोटो (Hero Photo)', 'CTA बटन टेक्स्ट व लिंक'],
    editableItems_en: ['Hero Headline', 'Sub-headline', 'Spiritual Quote', 'Portrait Photo', 'CTA Buttons']
  },
  {
    id: 'core-about',
    sectionKey: 'about',
    title_hi: '२. डॉ. पूजा अवस्थी परिचय एवं ३ मुख्य स्तंभ (About)',
    title_en: '2. About Dr. Pooja Awasthi & 3 Sacred Pillars',
    subtitle_hi: 'आध्यात्मिक यात्रा, १८+ वर्ष का अनुभव, राष्ट्रीय उपाधियाँ, मुख्य फोटो एवं ३ स्तंभ (वैदिक ज्योतिष, टैरो, चक्र हीलिंग)।',
    subtitle_en: 'Spiritual biography, 18+ years experience, national awards, profile photo, and 3 pillars of divine mastery.',
    slug: '#about',
    icon: User,
    category_hi: 'परिचय',
    category_en: 'About Bio',
    editableItems_hi: ['आध्यात्मिक जीवनी (Bio)', '१८+ वर्ष अनुभव व उपाधियाँ', 'प्रोफाइल फोटो (Profile Photo)', '३ स्तंभ शीर्षक व विवरण'],
    editableItems_en: ['Bio Narrative', '18+ Years Credentials', 'Profile Photo', '3 Sacred Pillars Text']
  },
  {
    id: 'core-services',
    sectionKey: 'services',
    title_hi: '३. ११ वैदिक एवं हीलिंग सेवाएँ व शुल्क सूची (Services & Tariff)',
    title_en: '3. 11 Sacred Vedic Services & Rate Card',
    subtitle_hi: 'सनातन वैदिक ज्योतिष, टैरो, चक्र हीलिंग, वास्तु, नाम सुधार, विवाह मिलान आदि ११ सेवाएँ, प्रत्येक का शुल्क (₹५,१००) व विवरण।',
    subtitle_en: 'All 11 healing and astrological services, descriptions, duration, and standardized consultation fee (₹5,100).',
    slug: '#services',
    icon: Heart,
    category_hi: 'सेवाएँ व शुल्क',
    category_en: 'Services',
    editableItems_hi: ['११ सेवाओं के नाम (Titles)', 'सेवाओं का विस्तृत विवरण', 'परामर्श शुल्क (₹5,100 Tariff)', 'अवधि (45-60 min)', 'श्रेणी व क्रम'],
    editableItems_en: ['11 Service Names', 'Service Descriptions', 'Tariff Fee (₹5,100)', 'Duration (45-60 min)', 'Categories']
  },
  {
    id: 'core-video',
    sectionKey: 'video',
    title_hi: '४. राष्ट्रीय सम्मान, मीडिया एवं वीडियो दीर्घा (Awards & Video)',
    title_en: '4. National Awards & Video Spotlight',
    subtitle_hi: 'राष्ट्रपति/राज्यपाल द्वारा राष्ट्रीय ज्योतिष रत्न सम्मान, वीडियो व्याख्यान URL (YouTube Embed / MP4) एवं मीडिया कवरेज।',
    subtitle_en: 'National Jyotish Ratna award highlights, video consultation spotlight URL, and media interview embeds.',
    slug: '#video-spotlight',
    icon: Video,
    category_hi: 'मीडिया व वीडियो',
    category_en: 'Media',
    editableItems_hi: ['वीडियो शीर्षक व उपशीर्षक', 'वीडियो URL (YouTube Embed / MP4)', 'वीडियो अवधि व विवरण', 'राष्ट्रीय सम्मान बैज व विवरण'],
    editableItems_en: ['Video Title & Subtitle', 'Video Embed URL', 'Video Duration Note', 'National Awards Badges']
  },
  {
    id: 'core-testimonials',
    sectionKey: 'testimonials',
    title_hi: '५. साधक अनुभव एवं क्लाइंट समीक्षाएँ (Testimonials)',
    title_en: '5. Client Testimonials & Healing Reviews',
    subtitle_hi: 'सत्यापित क्लाइंट समीक्षाएँ, ५-स्टार रेटिंग्स, क्लाइंट नाम, स्थान एवं हीलिंग से प्राप्त जीवन परिवर्तन। नई समीक्षाएँ जोड़ें।',
    subtitle_en: 'Verified seeker testimonials, 5-star ratings, client names, locations, and transformation journeys.',
    slug: '#testimonials',
    icon: Star,
    category_hi: 'प्रशंसापत्र',
    category_en: 'Reviews',
    editableItems_hi: ['क्लाइंट नाम व शहर/देश', '५-स्टार रेटिंग', 'विस्तृत समीक्षा टेक्स्ट', 'नई समीक्षा जोड़ना व हटाना'],
    editableItems_en: ['Client Name & City', '5-Star Rating', 'Review Narrative', 'Add/Remove Testimonials']
  },
  {
    id: 'core-faqs',
    sectionKey: 'faqs',
    title_hi: '६. प्रायः पूछे जाने वाले प्रश्नोत्तर (FAQ)',
    title_en: '6. Frequently Asked Questions (FAQ)',
    subtitle_hi: 'परामर्श प्रक्रिया, शुल्क भुगतान, वीडियो कॉल माध्यम, पूर्ण गोपनीयता व वैदिक उपायों से संबंधित प्रश्नोत्तर। नए प्रश्न जोड़ें।',
    subtitle_en: 'Frequently asked questions regarding consultation procedure, fees, video calls, privacy, and Vedic remedies.',
    slug: '#faq',
    icon: HelpCircle,
    category_hi: 'सहायता व FAQ',
    category_en: 'FAQ',
    editableItems_hi: ['प्रश्न (Questions)', 'विस्तृत उत्तर (Answers)', 'नए प्रश्नोत्तर जोड़ना', 'क्रम बदलना व हटाना'],
    editableItems_en: ['Questions', 'Answers', 'Add New FAQ Items', 'Reorder & Delete']
  },
  {
    id: 'core-contact',
    sectionKey: 'contact',
    title_hi: '७. संपर्क सूत्र एवं बैंक खाता / UPI QR विवरण (Contact & Payment)',
    title_en: '7. Contact Info & Bank Account / UPI QR',
    subtitle_hi: 'आधिकारिक फोन नंबर, व्हाट्सएप डायरेक्ट लिंक, ईमेल, क्लिनिक पता, बैंक खाता संख्या, IFSC कोड एवं UPI QR कोड फोटो।',
    subtitle_en: 'Official phone numbers, WhatsApp direct link, email, clinic address, bank account details, IFSC, and UPI QR image.',
    slug: '#contact',
    icon: CreditCard,
    category_hi: 'संपर्क व भुगतान',
    category_en: 'Contact & Bank',
    editableItems_hi: ['फोन नंबर (+91 9105731969)', 'व्हाट्सएप परामर्श लिंक', 'ईमेल व क्लिनिक का पता', 'बैंक खाता, IFSC, बैंक नाम', 'UPI ID व QR कोड फोटो'],
    editableItems_en: ['Phone Number', 'WhatsApp Link', 'Clinic Address & Email', 'Bank Account & IFSC', 'UPI ID & QR Code Image']
  }
];

interface AdminPageListProps {
  onEditPage: (pageId: string) => void;
  onCreatePage: () => void;
  onPreviewPage: (slug: string) => void;
  onEditCoreSection?: (sectionKey: 'hero' | 'about' | 'services' | 'video' | 'testimonials' | 'faqs' | 'contact') => void;
  onPreviewSection?: (sectionSlug: string) => void;
  lang?: string;
}

export const AdminPageList: React.FC<AdminPageListProps> = ({
  onEditPage,
  onCreatePage,
  onPreviewPage,
  onEditCoreSection,
  onPreviewSection,
  lang = 'hi',
}) => {
  const [pages, setPages] = useState<CMSPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [pageTypeFilter, setPageTypeFilter] = useState<'all' | 'core' | 'custom'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const fetchPages = async () => {
    try {
      setLoading(true);
      const data = await getPages(true); // include drafts
      setPages(data);
    } catch (err: any) {
      console.error('Error fetching pages:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handleTogglePublish = async (page: CMSPage) => {
    const nextStatus = page.status === 'published' ? 'draft' : 'published';
    try {
      setActionLoadingId(page.id);
      await updatePage(page.id, { status: nextStatus });
      await fetchPages();
    } catch (err: any) {
      alert(`स्थिति बदलने में त्रुटि: ${err.message}`);
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleToggleNav = async (page: CMSPage) => {
    try {
      setActionLoadingId(page.id);
      await updatePage(page.id, { showInNav: !page.showInNav });
      await fetchPages();
    } catch (err: any) {
      alert(`नेविगेशन अपडेट में त्रुटि: ${err.message}`);
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleDuplicate = async (id: string) => {
    try {
      setActionLoadingId(id);
      const cloned = await duplicatePage(id);
      await fetchPages();
      onEditPage(cloned.id);
    } catch (err: any) {
      alert(`प्रतिलिपि बनाने में त्रुटि: ${err.message}`);
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setActionLoadingId(id);
      await deletePage(id);
      setDeleteConfirmId(null);
      await fetchPages();
    } catch (err: any) {
      alert(`पेज हटाने में त्रुटि: ${err.message}`);
    } finally {
      setActionLoadingId(null);
    }
  };

  // Filter core sections
  const filteredCoreSections = CORE_WEBSITE_SECTIONS.filter((sec) => {
    if (pageTypeFilter === 'custom') return false;
    const matchesSearch =
      sec.title_hi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sec.title_en.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sec.subtitle_hi.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sec.slug.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // Filter custom pages
  const filteredCustomPages = pages.filter((page) => {
    if (pageTypeFilter === 'core') return false;
    const matchesSearch =
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (page.subtitle && page.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus =
      statusFilter === 'all' ? true : page.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalPagesCount = CORE_WEBSITE_SECTIONS.length + pages.length;

  return (
    <div className="space-y-6 animate-fade-in pb-16">
      {/* Top Banner & Stats Overview */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-[#24152F] via-[#321c42] to-[#24152F] border border-[#D6B574]/40 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#D6B574]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 relative z-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D6B574]/20 border border-[#D6B574]/40 text-[#D6B574] text-xs font-semibold mb-2">
              <Layers size={13} />
              <span>{lang === 'hi' ? 'वेबसाइट संपूर्ण पेज नियंत्रण' : 'All Website Pages & CMS'}</span>
            </div>
            <h1 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide">
              {lang === 'hi' ? 'सभी पृष्ठ: टेक्स्ट एवं फोटो संपादन मोड' : 'All Pages: Edit Text & Photos Mode'}
            </h1>
            <p className="text-xs text-[#EAE2F4]/75 mt-1 max-w-2xl leading-relaxed font-light">
              {lang === 'hi'
                ? 'वेबसाइट के सभी मुख्य पृष्ठों (Hero, About, 11 Services, Awards/Video, FAQ, Testimonials, Bank UPI) एवं आपके द्वारा बनाए गए सभी नए कस्टम पेजों को यहाँ से सीधे एडिट करें, फोटो बदलें और नया पेज प्रकाशित करें।'
                : 'Directly edit text and photos of all core website sections (Hero, About, 11 Services, Awards, FAQ, Testimonials, Contact) as well as unlimited custom dynamic pages.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onCreatePage}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-[#D6B574] via-[#eedca2] to-[#D6B574] text-[#1c0f26] font-bold text-xs tracking-wide shadow-xl shadow-[#D6B574]/25 hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PlusCircle size={17} />
              <span>{lang === 'hi' ? '+ नया पेज बनाएँ' : '+ Create New Page'}</span>
            </button>
          </div>
        </div>

        {/* Quick Statistics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-white/10 text-xs relative z-10">
          <div className="p-3 rounded-xl bg-black/40 border border-white/10">
            <span className="text-[#EAE2F4]/60 text-[11px] block">{lang === 'hi' ? 'कुल वेबसाइट पृष्ठ' : 'Total Pages'}</span>
            <span className="text-xl font-cinzel font-bold text-[#D6B574]">{totalPagesCount}</span>
            <span className="text-[10px] text-white/50 block mt-0.5">Core + Custom</span>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-white/10">
            <span className="text-[#EAE2F4]/60 text-[11px] block">{lang === 'hi' ? 'मुख्य लाइव अनुभाग' : 'Core Sections'}</span>
            <span className="text-xl font-cinzel font-bold text-emerald-400">{CORE_WEBSITE_SECTIONS.length}</span>
            <span className="text-[10px] text-emerald-300/80 block mt-0.5">१००% सक्रिय व लाइव</span>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-white/10">
            <span className="text-[#EAE2F4]/60 text-[11px] block">{lang === 'hi' ? 'कस्टम CMS पेज' : 'Custom Pages'}</span>
            <span className="text-xl font-cinzel font-bold text-amber-300">{pages.length}</span>
            <span className="text-[10px] text-amber-200/80 block mt-0.5">{pages.filter(p => p.status === 'published').length} लाइव / {pages.filter(p => p.status === 'draft').length} ड्राफ्ट</span>
          </div>

          <div className="p-3 rounded-xl bg-black/40 border border-white/10">
            <span className="text-[#EAE2F4]/60 text-[11px] block">{lang === 'hi' ? 'फोटो व मीडिया सपोर्ट' : 'Media Supported'}</span>
            <span className="text-xl font-cinzel font-bold text-purple-300">Active</span>
            <span className="text-[10px] text-purple-200/80 block mt-0.5">Cloud Storage Ready</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-[#24152F]/70 border border-[#D6B574]/30 flex flex-col md:flex-row items-center gap-3 shadow-lg">
        {/* Search Input */}
        <div className="relative flex-1 w-full">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D6B574]/70" />
          <input
            type="text"
            placeholder={lang === 'hi' ? 'पेज शीर्षक, अनुभाग नाम या URL slug से खोजें...' : 'Search pages or sections by title, URL or keywords...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 focus:border-[#D6B574] text-white text-xs placeholder-white/40 outline-hidden"
          />
        </div>

        {/* Page Type Filter (All / Core / Custom) */}
        <div className="flex items-center gap-1 bg-[#1c0f26] p-1 rounded-xl border border-[#D6B574]/30 shrink-0 w-full md:w-auto justify-center">
          <button
            onClick={() => setPageTypeFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              pageTypeFilter === 'all' ? 'bg-[#D6B574] text-[#1c0f26] font-bold' : 'text-white/70 hover:text-white'
            }`}
          >
            {lang === 'hi' ? `सभी पृष्ठ (${totalPagesCount})` : `All (${totalPagesCount})`}
          </button>
          <button
            onClick={() => setPageTypeFilter('core')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              pageTypeFilter === 'core' ? 'bg-[#D6B574] text-[#1c0f26] font-bold' : 'text-white/70 hover:text-white'
            }`}
          >
            {lang === 'hi' ? `मुख्य वेबसाइट (${CORE_WEBSITE_SECTIONS.length})` : `Core (${CORE_WEBSITE_SECTIONS.length})`}
          </button>
          <button
            onClick={() => setPageTypeFilter('custom')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              pageTypeFilter === 'custom' ? 'bg-[#D6B574] text-[#1c0f26] font-bold' : 'text-white/70 hover:text-white'
            }`}
          >
            {lang === 'hi' ? `कस्टम पेज (${pages.length})` : `Custom (${pages.length})`}
          </button>
        </div>

        {/* Status Filter when custom is active */}
        {pageTypeFilter !== 'core' && (
          <div className="flex items-center gap-1 bg-[#1c0f26] p-1 rounded-xl border border-[#D6B574]/20 shrink-0">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                statusFilter === 'all' ? 'bg-white/20 text-white' : 'text-white/60 hover:text-white'
              }`}
            >
              सभी स्थिति
            </button>
            <button
              onClick={() => setStatusFilter('published')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                statusFilter === 'published' ? 'bg-emerald-500/30 text-emerald-300' : 'text-white/60 hover:text-white'
              }`}
            >
              प्रकाशित
            </button>
            <button
              onClick={() => setStatusFilter('draft')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                statusFilter === 'draft' ? 'bg-amber-500/30 text-amber-300' : 'text-white/60 hover:text-white'
              }`}
            >
              ड्राफ्ट
            </button>
          </div>
        )}
      </div>

      {/* ==================================================================== */}
      {/* SECTION 1: CORE WEBSITE PAGES & SECTIONS (EDIT TEXT & PHOTOS) */}
      {/* ==================================================================== */}
      {(pageTypeFilter === 'all' || pageTypeFilter === 'core') && filteredCoreSections.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#D6B574]" />
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-white tracking-wide">
                {lang === 'hi' ? 'मुख्य वेबसाइट के पृष्ठ (Core Website Sections - 100% Live)' : 'Core Website Sections (Live)'}
              </h3>
            </div>
            <span className="text-[11px] text-[#D6B574] font-semibold">
              {filteredCoreSections.length} {lang === 'hi' ? 'अनुभाग संपादन योग्य' : 'sections editable'}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {filteredCoreSections.map((sec) => {
              const IconComponent = sec.icon;
              return (
                <div
                  key={sec.id}
                  className="p-5 rounded-2xl bg-[#24152F]/80 border border-[#D6B574]/30 hover:border-[#D6B574] transition-all shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:shadow-2xl hover:shadow-[#D6B574]/10"
                >
                  {/* Left: Icon & Description */}
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#D6B574]/20 via-[#6941A5]/30 to-black/60 border border-[#D6B574]/40 flex items-center justify-center text-[#D6B574] shrink-0 group-hover:scale-105 transition-transform">
                      <IconComponent size={22} />
                    </div>

                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-semibold flex items-center gap-1">
                          <CheckCircle2 size={11} />
                          <span>लाइव वेबसाइट पृष्ठ</span>
                        </span>

                        <span className="px-2.5 py-0.5 rounded-full bg-[#D6B574]/20 text-[#D6B574] text-[10px] font-semibold">
                          {lang === 'hi' ? sec.category_hi : sec.category_en}
                        </span>

                        <span className="text-[11px] font-mono text-[#EAE2F4]/60">
                          URL Anchor: {sec.slug}
                        </span>
                      </div>

                      <h4 className="font-cinzel text-base font-bold text-white group-hover:text-[#D6B574] transition-colors">
                        {lang === 'hi' ? sec.title_hi : sec.title_en}
                      </h4>

                      <p className="text-xs text-[#EAE2F4]/75 font-light leading-relaxed">
                        {lang === 'hi' ? sec.subtitle_hi : sec.subtitle_en}
                      </p>

                      {/* Editable Items Badges */}
                      <div className="pt-2 flex flex-wrap items-center gap-1.5">
                        <span className="text-[10px] text-[#D6B574] font-semibold mr-1">
                          {lang === 'hi' ? 'एडिट करने योग्य सामग्री:' : 'Editable items:'}
                        </span>
                        {(lang === 'hi' ? sec.editableItems_hi : sec.editableItems_en).map((item, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-black/40 border border-white/10 text-[10px] text-[#EAE2F4]/80"
                          >
                            ✓ {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Action Buttons */}
                  <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 pt-3 md:pt-0 border-t md:border-t-0 border-white/10 shrink-0">
                    {/* View Live Anchor */}
                    <button
                      type="button"
                      onClick={() => {
                        if (onPreviewSection) {
                          onPreviewSection(sec.slug);
                        } else {
                          window.location.hash = sec.slug.replace('/', '');
                        }
                      }}
                      className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                      title="लाइव वेबसाइट पर देखें"
                    >
                      <Eye size={14} className="text-[#D6B574]" />
                      <span>{lang === 'hi' ? 'लाइव देखें' : 'View Live'}</span>
                    </button>

                    {/* Direct Edit Button */}
                    <button
                      type="button"
                      onClick={() => {
                        if (onEditCoreSection) {
                          onEditCoreSection(sec.sectionKey);
                        }
                      }}
                      className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D6B574] via-[#eedca2] to-[#D6B574] text-[#1c0f26] font-bold text-xs tracking-wide shadow-lg shadow-[#D6B574]/20 hover:brightness-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Edit3 size={14} />
                      <span>{lang === 'hi' ? 'सामग्री व फोटो एडिट करें' : 'Edit Text & Photos'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* SECTION 2: CUSTOM DYNAMIC PAGES (PAGE BUILDER) */}
      {/* ==================================================================== */}
      {(pageTypeFilter === 'all' || pageTypeFilter === 'custom') && (
        <div className="space-y-3 pt-6 border-t border-white/10">
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <FileText size={16} className="text-[#D6B574]" />
              <h3 className="font-cinzel text-sm sm:text-base font-bold text-white tracking-wide">
                {lang === 'hi' ? 'कस्टम डायनामिक पेज (Custom Dynamic CMS Pages)' : 'Custom Dynamic CMS Pages'}
              </h3>
            </div>
            <button
              onClick={onCreatePage}
              className="text-xs text-[#D6B574] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
            >
              <PlusCircle size={13} />
              <span>{lang === 'hi' ? '+ नया कस्टम पेज जोड़ें' : '+ Create New Page'}</span>
            </button>
          </div>

          {loading ? (
            <div className="py-16 text-center text-xs text-[#EAE2F4]/50 flex flex-col items-center justify-center gap-3">
              <div className="w-6 h-6 border-2 border-[#D6B574] border-t-transparent rounded-full animate-spin" />
              <span>कस्टम पेज लोड हो रहे हैं...</span>
            </div>
          ) : filteredCustomPages.length === 0 ? (
            <div className="py-12 text-center rounded-2xl bg-[#24152F]/40 border border-white/10 p-8 space-y-3">
              <FileText size={30} className="mx-auto text-[#D6B574]/40" />
              <h4 className="font-cinzel text-sm font-bold text-white">
                {searchQuery ? 'कोई कस्टम पेज नहीं मिला' : 'अभी तक कोई कस्टम पेज नहीं बनाया गया'}
              </h4>
              <p className="text-xs text-[#EAE2F4]/60 max-w-sm mx-auto">
                बिना कोडिंग के नई इमेज, वीडियो, टेक्स्ट और गैलरी जोड़कर असीमित नए पेज बनाने के लिए नीचे दिया गया बटन दबाएँ।
              </p>
              <button
                onClick={onCreatePage}
                className="px-4 py-2 rounded-xl bg-[#D6B574] text-[#1c0f26] font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer shadow-lg"
              >
                <PlusCircle size={14} />
                <span>पहला नया पेज बनाएँ</span>
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredCustomPages.map((page) => {
                const isActionLoading = actionLoadingId === page.id;
                return (
                  <div
                    key={page.id}
                    className="p-5 rounded-2xl bg-[#24152F]/70 border border-[#D6B574]/20 hover:border-[#D6B574]/60 transition-all shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                  >
                    {/* Left: Page Title, Slug, & Badges */}
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Status Badge */}
                        <button
                          onClick={() => handleTogglePublish(page)}
                          disabled={isActionLoading}
                          title="स्थिति बदलने के लिए क्लिक करें"
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all flex items-center gap-1 cursor-pointer ${
                            page.status === 'published'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
                              : 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              page.status === 'published' ? 'bg-emerald-400' : 'bg-amber-400'
                            }`}
                          />
                          <span>{page.status === 'published' ? 'प्रकाशित (Live)' : 'ड्राफ्ट (Draft)'}</span>
                        </button>

                        {/* Category */}
                        {page.category && (
                          <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/70 text-[10px]">
                            {page.category}
                          </span>
                        )}

                        {/* Nav Indicator */}
                        <button
                          onClick={() => handleToggleNav(page)}
                          disabled={isActionLoading}
                          title="नेविगेशन मेनू में स्थिति बदलें"
                          className={`px-2 py-0.5 rounded-full text-[10px] transition-all cursor-pointer ${
                            page.showInNav
                              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                              : 'bg-white/5 text-white/40 hover:text-white'
                          }`}
                        >
                          {page.showInNav ? '✓ मेनू में दिखेगा' : 'मेनू में नहीं'}
                        </button>
                      </div>

                      {/* Title & Subtitle */}
                      <h4 className="font-cinzel text-base font-bold text-white group-hover:text-[#D6B574] transition-colors truncate">
                        {page.title}
                      </h4>

                      {page.subtitle && (
                        <p className="text-xs text-[#EAE2F4]/70 font-light truncate">
                          {page.subtitle}
                        </p>
                      )}

                      {/* Slug and meta */}
                      <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#EAE2F4]/50 font-mono pt-1">
                        <span className="text-[#D6B574]/80">/pages/{page.slug}</span>
                        <span>•</span>
                        <span>{page.blocks?.length || 0} ब्लॉक सामग्री</span>
                        {page.updatedAt && (
                          <>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock size={11} />
                              {new Date(page.updatedAt).toLocaleDateString()}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Right: Actions Buttons */}
                    <div className="flex flex-wrap items-center gap-2 pt-3 md:pt-0 border-t md:border-t-0 border-white/10 shrink-0">
                      {/* View / Preview */}
                      <button
                        onClick={() => onPreviewPage(page.slug)}
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
                        title="पेज प्रीव्यू देखें"
                      >
                        <Eye size={15} />
                      </button>

                      {/* Duplicate */}
                      <button
                        onClick={() => handleDuplicate(page.id)}
                        disabled={isActionLoading}
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer disabled:opacity-50"
                        title="पेज की प्रतिलिपि बनाएँ (Duplicate)"
                      >
                        <Copy size={15} />
                      </button>

                      {/* Edit Button */}
                      <button
                        onClick={() => onEditPage(page.id)}
                        className="px-3.5 py-2 rounded-xl bg-[#D6B574] hover:bg-[#eedca2] text-[#1c0f26] font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
                      >
                        <Edit3 size={13} />
                        <span>संपादित करें</span>
                      </button>

                      {/* Delete Confirmation */}
                      {deleteConfirmId === page.id ? (
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleDelete(page.id)}
                            disabled={isActionLoading}
                            className="px-2.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-[10px] cursor-pointer"
                          >
                            हाँ, हटाएँ
                          </button>
                          <button
                            onClick={() => setDeleteConfirmId(null)}
                            className="px-2 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[10px] cursor-pointer"
                          >
                            रद्द
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setDeleteConfirmId(page.id)}
                          className="p-2.5 rounded-xl bg-white/5 hover:bg-rose-500/20 text-white/50 hover:text-rose-400 transition-colors cursor-pointer"
                          title="पेज हटाएँ"
                        >
                          <Trash2 size={15} />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

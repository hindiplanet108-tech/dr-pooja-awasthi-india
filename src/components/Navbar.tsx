import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Globe,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Sparkles,
  ChevronDown,
  Calendar,
  CreditCard,
  FileText,
  HeartHandshake,
  Compass,
  Trophy
} from 'lucide-react';
import { ALL_LANGUAGES } from '../data/translations';

interface NavbarProps {
  lang: string;
  onOpenLangModal: () => void;
  onBookClick: () => void;
  onOpenTariff?: () => void;
  onOpenBankUpi?: () => void;
  onNavigate?: (id: string) => void;
  onOpenAdmin?: () => void;
  onOpenDynamicPage?: (slug: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onOpenLangModal,
  onBookClick,
  onOpenTariff,
  onOpenBankUpi,
  onNavigate,
  onOpenAdmin,
  onOpenDynamicPage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [sacredServicesOpen, setSacredServicesOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [mobileServicesSubOpen, setMobileServicesSubOpen] = useState(false);

  const quickLinksRef = useRef<HTMLDivElement>(null);
  const sacredServicesRef = useRef<HTMLDivElement>(null);
  const pagesDropdownRef = useRef<HTMLDivElement>(null);

  const currentLangObj = ALL_LANGUAGES.find((l) => l.code === lang) || ALL_LANGUAGES[0];

  // Detect scroll for backdrop intensification
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (quickLinksRef.current && !quickLinksRef.current.contains(target)) {
        setQuickLinksOpen(false);
      }
      if (sacredServicesRef.current && !sacredServicesRef.current.contains(target)) {
        setSacredServicesOpen(false);
      }
      if (pagesDropdownRef.current && !pagesDropdownRef.current.contains(target)) {
        setPagesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Safe navigation helper
  const handleNav = (id: string) => {
    setMobileMenuOpen(false);
    setQuickLinksOpen(false);
    setSacredServicesOpen(false);
    setPagesDropdownOpen(false);

    if (onNavigate) {
      onNavigate(id);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* ─────────────────────────────────────────────────────────────
          1. TOP UTILITY STRIP: Direct Connection & Language Display
          ───────────────────────────────────────────────────────────── */}
      <div className="bg-[#170c1e] text-[#EAE2F4] text-[11px] sm:text-xs border-b border-[#D6B574]/20 py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Direct Connection contact endpoints */}
          <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1">
            <span className="flex items-center gap-1.5 text-[#D6B574] font-medium tracking-wide">
              <MapPin size={12} className="text-[#D6B574] shrink-0" />
              <span>{lang === 'hi' ? 'देहरादून • विश्वभर में ऑनलाइन परामर्श' : 'Dehradun • Virtual Consultations Worldwide'}</span>
            </span>

            <span className="hidden md:inline-block text-[#D6B574]/30">|</span>

            <a
              href="https://wa.me/919105731969"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-[#D6B574] transition-colors"
              title="Chat directly on WhatsApp: +919105731969"
            >
              <Phone size={11} className="text-[#25D366] shrink-0" />
              <span>WhatsApp: <strong className="font-semibold text-white hover:text-[#D6B574]">+919105731969</strong></span>
            </a>

            <span className="hidden lg:inline-block text-[#D6B574]/30">|</span>

            <a
              href="mailto:astro.poojaofficial@gmail.com"
              className="hidden lg:flex items-center gap-1 hover:text-[#D6B574] transition-colors text-[#EAE2F4]/90"
              title="Email: astro.poojaofficial@gmail.com"
            >
              <Mail size={11} className="text-[#D6B574] shrink-0" />
              <span>astro.poojaofficial@gmail.com</span>
            </a>

            <span className="hidden xl:inline-block text-[#D6B574]/30">|</span>

            <a
              href="https://dr-pooja-awasthi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-1 hover:text-[#D6B574] transition-colors text-[#EAE2F4]/80 text-[11px]"
              title="Official Portal: dr-pooja-awasthi.vercel.app/"
            >
              <ExternalLink size={10} className="text-[#D6B574]" />
              <span>dr-pooja-awasthi.vercel.app/</span>
            </a>
          </div>

          {/* Right: Language Indicator & Selector Trigger */}
          <div className="flex items-center gap-2 ml-auto">
            <button
              onClick={onOpenLangModal}
              type="button"
              className="group flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-[#D6B574]/15 border border-[#D6B574]/30 hover:border-[#D6B574] transition-all text-[#EAE2F4] hover:text-white"
              title="Choose from 11 National & 11 International Languages"
            >
              <Globe size={11} className="text-[#D6B574] group-hover:rotate-12 transition-transform" />
              <span className="text-[#D6B574] font-medium">{lang === 'hi' ? 'भाषा:' : 'Language:'}</span>
              <span className="font-semibold text-white">
                {currentLangObj.code === 'en' ? 'English (English)' : `${currentLangObj.name} (${currentLangObj.nativeName})`}
              </span>
              <span className="text-[10px] ml-0.5">{currentLangObj.flag}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. MAIN HEADER BAR: Brand, Tagline, Navigation Menus, and CTAs
          ───────────────────────────────────────────────────────────── */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#24152F]/95 backdrop-blur-md shadow-lg border-b border-[#D6B574]/25 py-2.5'
            : 'bg-[#24152F] border-b border-[#D6B574]/20 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Zone 1: Brand & Tagline */}
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('root');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2.5 group"
              >
                <div className="w-9 h-9 rounded-full border border-[#D6B574]/60 flex items-center justify-center bg-gradient-to-br from-[#6941A5]/40 to-[#24152F] group-hover:border-[#D6B574] transition-all shadow-[0_0_15px_rgba(214,181,116,0.3)] shrink-0">
                  <span className="font-cinzel text-xs text-[#D6B574] font-bold">PA</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-cinzel text-base sm:text-lg lg:text-xl font-bold tracking-wider text-white group-hover:text-[#D6B574] transition-colors leading-tight">
                    Dr. Pooja Awasthi
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#D6B574] italic font-cormorant tracking-wide leading-tight mt-0.5">
                    {lang === 'hi' ? '“अपनी राह पहचानें। अपना जीवन रूपांतरित करें।”' : '“Discover Your Path. Transform Your Life.”'}
                  </span>
                </div>
              </a>
            </div>

            {/* Zone 2: Desktop Navigation Menus */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-3 text-xs xl:text-sm font-medium text-[#EAE2F4]">
              {/* Home / मुख्य पृष्ठ Link */}
              <button
                type="button"
                onClick={() => {
                  handleNav('root');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#D6B574] transition-colors px-2 py-1 font-medium"
              >
                {lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
              </button>

              {/* Dropdown 1: अन्य सेवाएँ / More Offerings */}
              <div className="relative" ref={quickLinksRef}>
                <button
                  type="button"
                  onClick={() => {
                    setQuickLinksOpen(!quickLinksOpen);
                    setSacredServicesOpen(false);
                  }}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-md hover:text-[#D6B574] hover:bg-white/5 transition-colors ${
                    quickLinksOpen ? 'text-[#D6B574] bg-white/5' : ''
                  }`}
                  aria-expanded={quickLinksOpen}
                >
                  <span>{lang === 'hi' ? 'अन्य सेवाएँ' : 'More Services'}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${quickLinksOpen ? 'rotate-180 text-[#D6B574]' : 'opacity-70'}`}
                  />
                </button>

                {quickLinksOpen && (
                  <div className="absolute left-0 mt-2 w-64 rounded-lg bg-[#24152F] border border-[#D6B574]/30 shadow-2xl py-2 z-50 backdrop-blur-md animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-[#D6B574]/80 font-semibold border-b border-[#D6B574]/15">
                      {lang === 'hi' ? 'अन्य सेवाएँ व जानकारी' : 'Quick Access'}
                    </div>
                    {onOpenTariff && (
                      <button
                        type="button"
                        onClick={() => {
                          setQuickLinksOpen(false);
                          onOpenTariff();
                        }}
                        className="w-full text-left px-3.5 py-2 text-xs text-[#EAE2F4] hover:text-[#D6B574] hover:bg-white/5 transition-colors flex items-center justify-between"
                      >
                        <span className="font-semibold text-[#D6B574]">
                          {lang === 'hi' ? '★ संपूर्ण 11 सेवा शुल्क' : '★ Consultancy Tariff'}
                        </span>
                        <span className="text-[10px] bg-[#D6B574]/20 text-[#D6B574] px-1.5 py-0.5 rounded">
                          {lang === 'hi' ? '11 सेवाएँ' : '11 Services'}
                        </span>
                      </button>
                    )}
                    {onOpenBankUpi && (
                      <button
                        type="button"
                        onClick={() => {
                          setQuickLinksOpen(false);
                          onOpenBankUpi();
                        }}
                        className="w-full text-left px-3.5 py-2 text-xs text-[#EAE2F4] hover:text-white hover:bg-white/5 transition-colors flex items-center gap-2"
                      >
                        <CreditCard size={13} className="text-[#D6B574]" />
                        <span>{lang === 'hi' ? 'बैंक एवं UPI विवरण' : 'Bank & UPI Details'}</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleNav('honors')}
                      className="w-full text-left px-3.5 py-2 text-xs text-[#D6B574] hover:bg-white/5 transition-colors flex items-center gap-2 font-semibold"
                    >
                      <Trophy size={13} className="text-[#D6B574]" />
                      <span>{lang === 'hi' ? '★ 40+ राष्ट्रीय सम्मान व दीर्घा' : '★ 40+ Honors & Photo Gallery'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNav('about')}
                      className="w-full text-left px-3.5 py-2 text-xs text-[#EAE2F4] hover:text-[#D6B574] hover:bg-white/5 transition-colors"
                    >
                      {lang === 'hi' ? 'डॉ. पूजा जी के बारे में' : 'About Dr. Pooja Ji'}
                    </button>
                    <div className="px-3 pt-2 pb-1 text-[10px] uppercase tracking-wider text-[#D6B574]/80 font-semibold border-t border-[#D6B574]/15">
                      {lang === 'hi' ? 'सेवाएँ' : 'Services'}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleNav('calculator')}
                      className="w-full text-left px-4 py-1.5 text-xs text-[#EAE2F4]/90 hover:text-[#D6B574] hover:bg-white/5 transition-colors pl-6"
                    >
                      {lang === 'hi' ? '• वैदिक अंकशास्त्र' : '• Vedic Numerology'}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNav('tarot')}
                      className="w-full text-left px-4 py-1.5 text-xs text-[#EAE2F4]/90 hover:text-[#D6B574] hover:bg-white/5 transition-colors pl-6"
                    >
                      {lang === 'hi' ? '• टैरो मार्गदर्शन' : '• Tarot Guidance'}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNav('services')}
                      className="w-full text-left px-4 py-1.5 text-xs text-[#EAE2F4]/90 hover:text-[#D6B574] hover:bg-white/5 transition-colors pl-6"
                    >
                      {lang === 'hi' ? '• चक्र एवं ऊर्जा हीलिंग' : '• Energy Chakras'}
                    </button>
                    <div className="border-t border-[#D6B574]/15 mt-1 pt-1">
                      <button
                        type="button"
                        onClick={() => handleNav('testimonials')}
                        className="w-full text-left px-3.5 py-2 text-xs text-[#EAE2F4] hover:text-[#D6B574] hover:bg-white/5 transition-colors"
                      >
                        {lang === 'hi' ? 'अनुभव एवं समीक्षाएं' : 'Testimonials'}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Dropdown 2: Sacred Services */}
              <div className="relative" ref={sacredServicesRef}>
                <button
                  type="button"
                  onClick={() => {
                    setSacredServicesOpen(!sacredServicesOpen);
                    setQuickLinksOpen(false);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:text-[#D6B574] hover:bg-white/5 transition-colors ${
                    sacredServicesOpen ? 'text-[#D6B574] bg-white/5' : ''
                  }`}
                  aria-expanded={sacredServicesOpen}
                >
                  <Sparkles size={13} className="text-[#D6B574]" />
                  <span>{lang === 'hi' ? 'पावन सेवाएँ' : 'Sacred Services'}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${sacredServicesOpen ? 'rotate-180 text-[#D6B574]' : 'opacity-70'}`}
                  />
                </button>

                {sacredServicesOpen && (
                  <div className="absolute left-0 mt-2 w-80 rounded-lg bg-[#24152F] border border-[#D6B574]/30 shadow-2xl py-2.5 z-50 backdrop-blur-md animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-3.5 py-1 text-[10px] uppercase tracking-wider text-[#D6B574] font-semibold border-b border-[#D6B574]/15 flex items-center justify-between">
                      <span>{lang === 'hi' ? 'आध्यात्मिक हीलिंग पोर्टफोलियो' : 'Sacred Healing Portfolio'}</span>
                      <span className="text-[10px] text-[#EAE2F4]/70">{lang === 'hi' ? '6 प्रमुख सेवाएँ' : '6 Offerings'}</span>
                    </div>

                    {/* 1. 11 Healing Services Tariff */}
                    {onOpenTariff && (
                      <button
                        type="button"
                        onClick={() => {
                          setSacredServicesOpen(false);
                          onOpenTariff();
                        }}
                        className="w-full text-left px-3.5 py-2 text-xs hover:bg-[#D6B574]/10 transition-colors flex items-center gap-2 group border-b border-[#D6B574]/10"
                      >
                        <FileText size={14} className="text-[#D6B574] shrink-0" />
                        <div>
                          <div className="font-semibold text-[#D6B574] group-hover:text-white transition-colors">
                            {lang === 'hi' ? '11 हीलिंग सेवा शुल्क सूची' : '11 Healing Services Tariff'}
                          </div>
                          <div className="text-[10px] text-[#EAE2F4]/70">
                            {lang === 'hi' ? 'पारदर्शी दक्षिणा एवं आधिकारिक दर सूची' : 'Transparent pricing & official rate card'}
                          </div>
                        </div>
                      </button>
                    )}

                    {/* 2. Vedic Numerology Reading */}
                    <button
                      type="button"
                      onClick={() => handleNav('calculator')}
                      className="w-full text-left px-3.5 py-2 text-xs text-[#EAE2F4] hover:text-[#D6B574] hover:bg-white/5 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D6B574]" />
                      <span>{lang === 'hi' ? 'वैदिक अंकशास्त्र विश्लेषण' : 'Vedic Numerology Reading'}</span>
                    </button>

                    {/* 3. Intuitive Tarot Consultation */}
                    <button
                      type="button"
                      onClick={() => handleNav('tarot')}
                      className="w-full text-left px-3.5 py-2 text-xs text-[#EAE2F4] hover:text-[#D6B574] hover:bg-white/5 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D6B574]" />
                      <span>{lang === 'hi' ? 'सहज बोध टैरो परामर्श' : 'Intuitive Tarot Consultation'}</span>
                    </button>

                    {/* 4. Distance Energy & Chakra Healing */}
                    <button
                      type="button"
                      onClick={() => handleNav('services')}
                      className="w-full text-left px-3.5 py-2 text-xs text-[#EAE2F4] hover:text-[#D6B574] hover:bg-white/5 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D6B574]" />
                      <span>{lang === 'hi' ? 'दूरस्थ ऊर्जा एवं चक्र हीलिंग' : 'Distance Energy & Chakra Healing'}</span>
                    </button>

                    {/* 5. Conscious Life Coaching */}
                    <button
                      type="button"
                      onClick={() => handleNav('services')}
                      className="w-full text-left px-3.5 py-2 text-xs text-[#EAE2F4] hover:text-[#D6B574] hover:bg-white/5 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D6B574]" />
                      <span>{lang === 'hi' ? 'सचेत जीवन कोचिंग' : 'Conscious Life Coaching'}</span>
                    </button>

                    {/* 6. Relationship Compatibility & Milestones */}
                    <button
                      type="button"
                      onClick={() => handleNav('services')}
                      className="w-full text-left px-3.5 py-2 text-xs text-[#EAE2F4] hover:text-[#D6B574] hover:bg-white/5 transition-colors flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D6B574]" />
                      <span>{lang === 'hi' ? 'संबंध अनुकूलता एवं जीवन निर्णय' : 'Relationship Compatibility & Milestones'}</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Direct Quick Action: Consultancy Tariff */}
              {onOpenTariff && (
                <button
                  type="button"
                  onClick={onOpenTariff}
                  className="px-2.5 py-1.5 rounded text-xs font-semibold text-[#D6B574] hover:bg-[#D6B574]/15 border border-[#D6B574]/40 transition-colors flex items-center gap-1.5"
                  title="View 11 Healing Services Tariff & Rate Card"
                >
                  <FileText size={12} className="text-[#D6B574]" />
                  <span>{lang === 'hi' ? 'सेवा शुल्क' : 'Consultancy Tariff'}</span>
                </button>
              )}

              {/* Direct Quick Action: Bank & UPI Details */}
              {onOpenBankUpi && (
                <button
                  type="button"
                  onClick={onOpenBankUpi}
                  className="px-2.5 py-1.5 rounded text-xs font-medium text-[#EAE2F4] hover:text-white hover:bg-white/10 border border-white/20 transition-colors flex items-center gap-1.5"
                  title="Bank & UPI Payment Details"
                >
                  <CreditCard size={12} className="text-[#D6B574]" />
                  <span>{lang === 'hi' ? 'बैंक एवं UPI' : 'Bank & UPI Details'}</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => handleNav('honors')}
                className="hover:text-[#D6B574] transition-colors px-2.5 py-1 flex items-center gap-1.5 text-[#D6B574] font-semibold bg-white/5 rounded-md border border-[#D6B574]/30"
              >
                <Trophy size={13} className="text-[#D6B574]" />
                <span>{lang === 'hi' ? 'प्रमाण-पत्र एवं सम्मान' : 'Honors & Gallery'}</span>
              </button>

              <button
                type="button"
                onClick={() => handleNav('about')}
                className="hover:text-[#D6B574] transition-colors px-2 py-1"
              >
                {lang === 'hi' ? 'डॉ. पूजा जी' : 'About Dr. Pooja Ji'}
              </button>

              {/* Dropdown 3: विशेष पृष्ठ / Custom CMS Pages */}
              <div className="relative" ref={pagesDropdownRef}>
                <button
                  type="button"
                  onClick={() => {
                    setPagesDropdownOpen(!pagesDropdownOpen);
                    setQuickLinksOpen(false);
                    setSacredServicesOpen(false);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:text-[#D6B574] hover:bg-white/5 transition-colors ${
                    pagesDropdownOpen ? 'text-[#D6B574] bg-white/5' : ''
                  }`}
                  aria-expanded={pagesDropdownOpen}
                >
                  <FileText size={13} className="text-[#D6B574]" />
                  <span>{lang === 'hi' ? 'विशेष पृष्ठ' : 'Pages'}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${pagesDropdownOpen ? 'rotate-180 text-[#D6B574]' : 'opacity-70'}`}
                  />
                </button>

                {pagesDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-72 rounded-xl bg-[#24152F] border border-[#D6B574]/40 shadow-2xl py-2 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-3 py-1 text-[10px] uppercase tracking-wider text-[#D6B574] font-semibold border-b border-[#D6B574]/15 flex items-center justify-between">
                      <span>{lang === 'hi' ? 'वैदिक लेख एवं मार्गदर्शन पृष्ठ' : 'Articles & Special Pages'}</span>
                      <span className="text-[9px] bg-[#D6B574]/20 text-[#D6B574] px-1.5 py-0.5 rounded font-bold">CMS</span>
                    </div>

                    {onOpenDynamicPage && (
                      <div className="py-1">
                        <button
                          type="button"
                          onClick={() => {
                            setPagesDropdownOpen(false);
                            onOpenDynamicPage('kundali-analysis');
                          }}
                          className="w-full text-left px-3.5 py-2 text-xs text-[#EAE2F4] hover:text-[#D6B574] hover:bg-white/5 transition-colors flex items-center gap-2"
                        >
                          <span className="text-[#D6B574]">✦</span>
                          <span className="truncate">{lang === 'hi' ? 'कुण्डली विश्लेषण एवं दोष निवारण' : 'Vedic Kundali Analysis'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setPagesDropdownOpen(false);
                            onOpenDynamicPage('rudraksha-ratna-therapy');
                          }}
                          className="w-full text-left px-3.5 py-2 text-xs text-[#EAE2F4] hover:text-[#D6B574] hover:bg-white/5 transition-colors flex items-center gap-2"
                        >
                          <span className="text-[#D6B574]">✦</span>
                          <span className="truncate">{lang === 'hi' ? 'रुद्राक्ष एवं सिद्ध रत्न चिकित्सा' : 'Rudraksha & Gemstone Therapy'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setPagesDropdownOpen(false);
                            onOpenDynamicPage('vastu-aura-cleansing');
                          }}
                          className="w-full text-left px-3.5 py-2 text-xs text-[#EAE2F4] hover:text-[#D6B574] hover:bg-white/5 transition-colors flex items-center gap-2"
                        >
                          <span className="text-[#D6B574]">✦</span>
                          <span className="truncate">{lang === 'hi' ? 'वास्तु दोष निवारण व औरा शुद्धि' : 'Vastu & Aura Cleansing'}</span>
                        </button>
                      </div>
                    )}

                    {onOpenAdmin && (
                      <div className="border-t border-[#D6B574]/20 pt-1 mt-1">
                        <button
                          type="button"
                          onClick={() => {
                            setPagesDropdownOpen(false);
                            onOpenAdmin();
                          }}
                          className="w-full text-left px-3.5 py-2 text-xs text-[#D6B574] hover:bg-white/10 transition-colors flex items-center justify-between font-semibold"
                        >
                          <span>🔐 {lang === 'hi' ? 'Admin Panel व पेज जोड़ें' : 'Admin CMS Portal'}</span>
                          <span className="text-[10px] bg-[#D6B574] text-[#1c0f26] px-1.5 py-0.5 rounded font-bold">Admin</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </nav>

            {/* Zone 3: Direct Action CTA Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onBookClick}
                type="button"
                className="px-3.5 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#24152F] bg-gradient-to-r from-[#D6B574] via-[#ecd6a4] to-[#D6B574] hover:from-[#ecd6a4] hover:to-[#D6B574] rounded-md transition-all shadow-[0_2px_10px_rgba(214,181,116,0.3)] hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                {lang === 'hi' ? 'परामर्श बुक करें' : 'Book Consultation'}
              </button>

              {/* Mobile menu hamburger button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="lg:hidden p-2 text-[#EAE2F4] hover:text-[#D6B574] hover:bg-white/5 rounded-md focus:outline-none transition-colors"
                aria-label="Toggle navigation drawer"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. COMPREHENSIVE MOBILE DRAWER (Matches exact User Matter)
          ───────────────────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#24152F] border-b border-[#D6B574]/30 shadow-2xl max-h-[85vh] overflow-y-auto px-4 pt-4 pb-8 space-y-5 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Header Matter Summary Card */}
          <div className="bg-[#1c1024] p-3.5 rounded-lg border border-[#D6B574]/25 space-y-2">
            <div className="font-cinzel text-base font-bold text-white flex items-center justify-between">
              <span>Dr. Pooja Awasthi</span>
              <span className="text-[10px] font-sans text-[#D6B574] border border-[#D6B574]/40 px-2 py-0.5 rounded-full">
                {lang === 'hi' ? 'आध्यात्मिक मार्गदर्शन' : 'Spiritual Guidance'}
              </span>
            </div>
            <p className="text-xs italic text-[#D6B574] font-cormorant font-normal">
              {lang === 'hi' ? '“अपनी राह पहचानें। अपना जीवन रूपांतरित करें।”' : '“Discover Your Path. Transform Your Life.”'}
            </p>
            <p className="text-[11px] text-[#EAE2F4]/85 leading-relaxed pt-1">
              {lang === 'hi'
                ? 'वैदिक अंकशास्त्र, टैरो मार्गदर्शन, ऊर्जा चक्र हीलिंग और जीवन मार्गदर्शन का पावन संगम। जीवन को सकारात्मक दृष्टि और आत्मविश्वास के साथ समझने हेतु समर्पित।'
                : 'Spiritual guidance combining Vedic Numerology, Tarot Reading, Energy Healing and Life Coaching. Dedicated to helping seekers understand life patterns and move forward with conscious confidence.'}
            </p>
          </div>

          {/* Language display & trigger */}
          <div className="bg-white/5 rounded-lg p-3 border border-white/10 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[#D6B574] font-semibold">
                {lang === 'hi' ? 'भाषा:' : 'Language:'}
              </div>
              <div className="text-xs font-medium text-white flex items-center gap-1.5 mt-0.5">
                <Globe size={13} className="text-[#D6B574]" />
                <span>
                  {currentLangObj.code === 'en' ? 'English (English)' : `${currentLangObj.name} (${currentLangObj.nativeName})`}
                </span>
                <span>{currentLangObj.flag}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLangModal();
              }}
              type="button"
              className="text-xs font-semibold px-2.5 py-1 rounded bg-[#D6B574]/20 hover:bg-[#D6B574]/30 text-[#D6B574] border border-[#D6B574]/40"
            >
              {lang === 'hi' ? 'भाषा बदलें' : 'Change Language'}
            </button>
          </div>

          {/* Section: Other Services / अन्य सेवाएँ */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#D6B574] border-b border-[#D6B574]/20 pb-1 flex items-center gap-1.5">
              <Compass size={13} />
              <span>{lang === 'hi' ? 'अन्य सेवाएँ' : 'Quick Links'}</span>
            </div>
            <div className="grid grid-cols-1 gap-1.5 pl-1">
              {/* Home */}
              <button
                type="button"
                onClick={() => {
                  handleNav('root');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full text-left py-1.5 px-3 text-xs text-[#EAE2F4] hover:text-[#D6B574] hover:bg-white/5 rounded"
              >
                {lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
              </button>

              {onOpenTariff && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTariff();
                  }}
                  className="w-full text-left py-2 px-3 text-xs font-semibold text-[#D6B574] bg-[#D6B574]/10 hover:bg-[#D6B574]/20 rounded border border-[#D6B574]/30 flex items-center justify-between"
                >
                  <span>{lang === 'hi' ? 'संपूर्ण 11 सेवा शुल्क' : 'Consultancy Tariff'}</span>
                  <span className="text-[10px] bg-[#D6B574] text-[#24152F] font-bold px-1.5 py-0.2 rounded">
                    {lang === 'hi' ? '11 सेवाएँ' : '11 Services'}
                  </span>
                </button>
              )}

              {onOpenBankUpi && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBankUpi();
                  }}
                  className="w-full text-left py-2 px-3 text-xs font-medium text-[#EAE2F4] bg-white/5 hover:bg-white/10 rounded border border-white/10 flex items-center gap-2"
                >
                  <CreditCard size={13} className="text-[#D6B574]" />
                  <span>{lang === 'hi' ? 'बैंक एवं UPI विवरण' : 'Bank & UPI Details'}</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => handleNav('honors')}
                className="w-full text-left py-2 px-3 text-xs text-[#D6B574] font-semibold bg-[#D6B574]/15 rounded border border-[#D6B574]/30 flex items-center gap-2"
              >
                <Trophy size={14} className="text-[#D6B574]" />
                <span>{lang === 'hi' ? '★ प्रमाण-पत्र एवं सम्मान (40+)' : '★ 40+ Honors & Photo Gallery'}</span>
              </button>

              <button
                type="button"
                onClick={() => handleNav('about')}
                className="w-full text-left py-1.5 px-3 text-xs text-[#EAE2F4] hover:text-[#D6B574] hover:bg-white/5 rounded"
              >
                {lang === 'hi' ? 'डॉ. पूजा जी के बारे में' : 'About Dr. Pooja Ji'}
              </button>

              {/* Services accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesSubOpen(!mobileServicesSubOpen)}
                  className="w-full text-left py-1.5 px-3 text-xs text-[#EAE2F4] hover:text-[#D6B574] flex items-center justify-between rounded hover:bg-white/5"
                >
                  <span>{lang === 'hi' ? 'सेवाएँ' : 'Services'}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${mobileServicesSubOpen ? 'rotate-180 text-[#D6B574]' : 'opacity-70'}`}
                  />
                </button>
                {mobileServicesSubOpen && (
                  <div className="pl-6 space-y-1 py-1 border-l-2 border-[#D6B574]/30 ml-3 mt-1">
                    <button
                      type="button"
                      onClick={() => handleNav('calculator')}
                      className="block w-full text-left text-xs py-1 text-[#EAE2F4]/90 hover:text-[#D6B574]"
                    >
                      {lang === 'hi' ? '• वैदिक अंकशास्त्र' : '• Vedic Numerology'}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNav('tarot')}
                      className="block w-full text-left text-xs py-1 text-[#EAE2F4]/90 hover:text-[#D6B574]"
                    >
                      {lang === 'hi' ? '• टैरो मार्गदर्शन' : '• Tarot Guidance'}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNav('services')}
                      className="block w-full text-left text-xs py-1 text-[#EAE2F4]/90 hover:text-[#D6B574]"
                    >
                      {lang === 'hi' ? '• चक्र एवं ऊर्जा हीलिंग' : '• Energy Chakras'}
                    </button>
                  </div>
                )}
              </div>

              <button
                type="button"
                onClick={() => handleNav('testimonials')}
                className="w-full text-left py-1.5 px-3 text-xs text-[#EAE2F4] hover:text-[#D6B574] hover:bg-white/5 rounded"
              >
                {lang === 'hi' ? 'अनुभव एवं समीक्षाएं' : 'Testimonials'}
              </button>
            </div>
          </div>

          {/* Section: Sacred Services */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#D6B574] border-b border-[#D6B574]/20 pb-1 flex items-center gap-1.5">
              <Sparkles size={13} />
              <span>{lang === 'hi' ? 'पावन सेवाएँ' : 'Sacred Services'}</span>
            </div>
            <div className="grid grid-cols-1 gap-1.5 pl-1">
              {onOpenTariff && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTariff();
                  }}
                  className="w-full text-left py-2 px-3 text-xs text-[#D6B574] font-semibold bg-[#D6B574]/10 rounded border border-[#D6B574]/20"
                >
                  {lang === 'hi' ? '1. 11 हीलिंग सेवा शुल्क सूची' : '1. 11 Healing Services Tariff'}
                </button>
              )}
              <button
                type="button"
                onClick={() => handleNav('calculator')}
                className="w-full text-left py-1.5 px-3 text-xs text-[#EAE2F4] hover:text-[#D6B574]"
              >
                {lang === 'hi' ? '2. वैदिक अंकशास्त्र विश्लेषण' : '2. Vedic Numerology Reading'}
              </button>
              <button
                type="button"
                onClick={() => handleNav('tarot')}
                className="w-full text-left py-1.5 px-3 text-xs text-[#EAE2F4] hover:text-[#D6B574]"
              >
                {lang === 'hi' ? '3. सहज बोध टैरो परामर्श' : '3. Intuitive Tarot Consultation'}
              </button>
              <button
                type="button"
                onClick={() => handleNav('services')}
                className="w-full text-left py-1.5 px-3 text-xs text-[#EAE2F4] hover:text-[#D6B574]"
              >
                {lang === 'hi' ? '4. दूरस्थ ऊर्जा एवं चक्र हीलिंग' : '4. Distance Energy & Chakra Healing'}
              </button>
              <button
                type="button"
                onClick={() => handleNav('services')}
                className="w-full text-left py-1.5 px-3 text-xs text-[#EAE2F4] hover:text-[#D6B574]"
              >
                {lang === 'hi' ? '5. सचेत जीवन कोचिंग' : '5. Conscious Life Coaching'}
              </button>
              <button
                type="button"
                onClick={() => handleNav('services')}
                className="w-full text-left py-1.5 px-3 text-xs text-[#EAE2F4] hover:text-[#D6B574]"
              >
                {lang === 'hi' ? '6. संबंध अनुकूलता एवं जीवन निर्णय' : '6. Relationship Compatibility & Milestones'}
              </button>
            </div>
          </div>

          {/* Section: Direct Connection */}
          <div className="space-y-2 bg-[#1a0e22] p-3.5 rounded-lg border border-[#D6B574]/20">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#D6B574] flex items-center gap-1.5">
              <Phone size={13} />
              <span>{lang === 'hi' ? 'सीधा संपर्क' : 'Direct Connection'}</span>
            </div>
            <p className="text-[11px] text-[#EAE2F4]/80">
              {lang === 'hi' ? 'परामर्श समय व किसी भी प्रश्न हेतु सीधे संपर्क करें:' : 'Connect directly for consultation scheduling and queries:'}
            </p>
            <div className="space-y-2 pt-1 text-xs">
              <a
                href="https://wa.me/919105731969"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#D6B574] p-1.5 rounded bg-white/5"
              >
                <Phone size={13} className="text-[#25D366] shrink-0" />
                <span>WhatsApp: <strong>+919105731969</strong></span>
              </a>

              <a
                href="mailto:astro.poojaofficial@gmail.com"
                className="flex items-center gap-2 text-white hover:text-[#D6B574] p-1.5 rounded bg-white/5"
              >
                <Mail size={13} className="text-[#D6B574] shrink-0" />
                <span>astro.poojaofficial@gmail.com</span>
              </a>

              <a
                href="https://dr-pooja-awasthi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white hover:text-[#D6B574] p-1.5 rounded bg-white/5"
              >
                <ExternalLink size={13} className="text-[#D6B574] shrink-0" />
                <span>dr-pooja-awasthi.vercel.app/</span>
              </a>

              <div className="flex items-center gap-2 text-[#D6B574] p-1.5">
                <MapPin size={13} className="shrink-0" />
                <span className="text-[11px]">{lang === 'hi' ? 'देहरादून • विश्वभर में ऑनलाइन परामर्श' : 'Dehradun • Virtual Consultations Worldwide'}</span>
              </div>
            </div>
          </div>

          {/* Mobile Pages Section */}
          <div className="space-y-2">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#D6B574] border-b border-[#D6B574]/20 pb-1 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <FileText size={13} />
                <span>{lang === 'hi' ? 'विशेष मार्गदर्शन पृष्ठ (Pages)' : 'Special Pages & Articles'}</span>
              </span>
              <span className="text-[9px] bg-[#D6B574]/20 text-[#D6B574] px-1.5 py-0.5 rounded font-bold">CMS</span>
            </div>
            <div className="grid grid-cols-1 gap-1.5 pl-1">
              {onOpenDynamicPage && (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenDynamicPage('kundali-analysis');
                    }}
                    className="w-full text-left py-1.5 px-3 text-xs text-[#EAE2F4] hover:text-[#D6B574] hover:bg-white/5 rounded"
                  >
                    ✦ {lang === 'hi' ? 'कुण्डली विश्लेषण एवं दोष निवारण' : 'Vedic Kundali Analysis'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenDynamicPage('rudraksha-ratna-therapy');
                    }}
                    className="w-full text-left py-1.5 px-3 text-xs text-[#EAE2F4] hover:text-[#D6B574] hover:bg-white/5 rounded"
                  >
                    ✦ {lang === 'hi' ? 'रुद्राक्ष एवं सिद्ध रत्न चिकित्सा' : 'Rudraksha & Gemstone Therapy'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenDynamicPage('vastu-aura-cleansing');
                    }}
                    className="w-full text-left py-1.5 px-3 text-xs text-[#EAE2F4] hover:text-[#D6B574] hover:bg-white/5 rounded"
                  >
                    ✦ {lang === 'hi' ? 'वास्तु दोष निवारण व औरा शुद्धि' : 'Vastu & Aura Cleansing'}
                  </button>
                </>
              )}

              {onOpenAdmin && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmin();
                  }}
                  className="w-full text-left py-2 px-3 text-xs text-[#D6B574] font-bold bg-[#D6B574]/15 hover:bg-[#D6B574]/25 rounded border border-[#D6B574]/30 flex items-center justify-between"
                >
                  <span>🔐 {lang === 'hi' ? 'व्यवस्थापक Admin CMS पोर्टल' : 'Admin CMS Portal'}</span>
                  <span className="text-[9px] bg-[#D6B574] text-[#1c0f26] px-1.5 py-0.5 rounded font-bold">Admin</span>
                </button>
              )}
            </div>
          </div>

          {/* Primary Action Button */}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              type="button"
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-[#24152F] bg-gradient-to-r from-[#D6B574] via-[#ecd6a4] to-[#D6B574] hover:from-[#ecd6a4] hover:to-[#D6B574] rounded-md transition-all shadow-md"
            >
              {lang === 'hi' ? 'परामर्श प्राप्त करें' : 'Book Consultation'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

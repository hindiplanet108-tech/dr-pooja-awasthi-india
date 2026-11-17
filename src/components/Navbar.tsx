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
  CreditCard,
  FileText,
  Compass,
  Trophy,
  Star,
  QrCode
} from 'lucide-react';
import { ALL_LANGUAGES } from '../data/translations';
import { LiveTrafficCounter } from './LiveTrafficCounter';

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      {/* 1. TOP UTILITY STRIP: Refined Light Champagne Bar */}
      <div className="bg-[#F4F1EA] text-[#4A4356] text-[11px] sm:text-xs border-b border-[#E5DFD5] py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Direct Connection & Highlighted Quick Portals */}
          <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-3.5 gap-y-1">
            <span className="flex items-center gap-1.5 text-[#1E162B] font-medium tracking-wide">
              <MapPin size={12} className="text-[#B48228] shrink-0" />
              <span>{lang === 'hi' ? 'देहरादून • विश्वभर में ऑनलाइन परामर्श' : 'Dehradun • Virtual Consultations Worldwide'}</span>
            </span>

            <span className="hidden md:inline-block text-[#D8CFC0]">|</span>

            <a
              href="https://wa.me/919105731969"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#522B8A] transition-colors"
              title="Chat directly on WhatsApp: +919105731969"
            >
              <Phone size={11} className="text-emerald-600 shrink-0" />
              <span>WhatsApp: <strong className="font-semibold text-[#1E162B]">+919105731969</strong></span>
            </a>

            <span className="hidden lg:inline-block text-[#D8CFC0]">|</span>

            <a
              href="mailto:astro.poojaofficial@gmail.com"
              className="hidden lg:flex items-center gap-1.5 hover:text-[#522B8A] transition-colors text-[#4A4356]"
              title="Email: astro.poojaofficial@gmail.com"
            >
              <Mail size={11} className="text-[#B48228] shrink-0" />
              <span>astro.poojaofficial@gmail.com</span>
            </a>

            <span className="hidden xl:inline-block text-[#D8CFC0]">|</span>

            {/* Highlighted Shortcut: 11 Specialized Healing & Correction Services + All 16 Divine Services */}
            {onOpenTariff && (
              <button
                type="button"
                onClick={onOpenTariff}
                className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#FBF5E6] hover:bg-[#F5E8C8] text-[#7A5311] font-bold border border-[#DEC38C] text-[11px] transition-all cursor-pointer shadow-2xs"
                title="11 Specialized Healing & Correction Services (Consultancy & Healing Services Fees - All 16 Divine Services)"
              >
                <Sparkles size={11} className="text-[#B48228]" />
                <span>
                  {lang === 'hi'
                    ? '11 विशिष्ट हीलिंग सेवाएं (16 दिव्य सेवाएं फीस)'
                    : '11 Specialized Healing Services (All 16 Services)'}
                </span>
              </button>
            )}

            {/* Highlighted Shortcut: Bank & UPI Payment Details */}
            {onOpenBankUpi && (
              <button
                type="button"
                onClick={onOpenBankUpi}
                className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold border border-emerald-300 text-[11px] transition-all cursor-pointer shadow-2xs"
                title="Bank Account & UPI Payment Details (QR Code)"
              >
                <QrCode size={11} className="text-emerald-700" />
                <span>Bank & UPI: 9105731969@upi</span>
              </button>
            )}
          </div>

          {/* Right: Live Visitors Indicator & Language Selector Trigger */}
          <div className="flex items-center gap-2 ml-auto">
            <LiveTrafficCounter lang={lang} variant="compact" />
            <button
              onClick={onOpenLangModal}
              type="button"
              className="group flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white hover:bg-[#F4F0FA] border border-[#E5DFD5] hover:border-[#522B8A]/40 transition-all text-[#4A4356] hover:text-[#1E162B] shadow-2xs cursor-pointer"
              title="Choose from 11 National & 11 International Languages"
            >
              <Globe size={11} className="text-[#522B8A] group-hover:rotate-12 transition-transform" />
              <span className="text-[#7A5311] font-medium">{lang === 'hi' ? 'भाषा:' : 'Lang:'}</span>
              <span className="font-semibold text-[#1E162B]">
                {currentLangObj.code === 'en' ? 'English' : `${currentLangObj.nativeName}`}
              </span>
              <span className="text-[11px]">{currentLangObj.flag}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER BAR: Crisp Frosted Ivory/White Editorial Header */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-[#E5DFD5] py-2.5'
            : 'bg-white/92 backdrop-blur-sm border-b border-[#E5DFD5] py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
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
                <div className="w-9 h-9 rounded-full border-2 border-[#DEC38C] flex items-center justify-center bg-gradient-to-br from-[#FBF5E6] to-[#F4F0FA] group-hover:border-[#522B8A] transition-all shadow-xs shrink-0">
                  <span className="font-cinzel text-xs text-[#522B8A] font-extrabold">PA</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-cinzel text-base sm:text-lg lg:text-xl font-bold tracking-wide text-[#1E162B] group-hover:text-[#522B8A] transition-colors leading-tight">
                    Dr. Pooja Awasthi
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#8F651D] italic font-cormorant font-semibold tracking-wide leading-tight mt-0.5">
                    {lang === 'hi' ? '“अपनी राह पहचानें। अपना जीवन रूपांतरित करें।”' : '“Discover Your Path. Transform Your Life.”'}
                  </span>
                </div>
              </a>
            </div>

            {/* Zone 2: Desktop Navigation Menus */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 text-xs font-semibold text-[#3C3547]">
              <button
                type="button"
                onClick={() => {
                  handleNav('root');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#522B8A] hover:bg-[#F4F0FA] transition-colors px-2.5 py-2 rounded-lg cursor-pointer"
              >
                {lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
              </button>

              {/* Dropdown 1: More Services */}
              <div className="relative" ref={quickLinksRef}>
                <button
                  type="button"
                  onClick={() => {
                    setQuickLinksOpen(!quickLinksOpen);
                    setSacredServicesOpen(false);
                    setPagesDropdownOpen(false);
                  }}
                  className={`flex items-center gap-1 px-2.5 py-2 rounded-lg hover:text-[#522B8A] hover:bg-[#F4F0FA] transition-colors cursor-pointer ${
                    quickLinksOpen ? 'text-[#522B8A] bg-[#F4F0FA]' : ''
                  }`}
                  aria-expanded={quickLinksOpen}
                >
                  <span>{lang === 'hi' ? 'अन्य सेवाएँ' : 'Explore'}</span>
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${quickLinksOpen ? 'rotate-180 text-[#522B8A]' : 'opacity-65'}`}
                  />
                </button>

                {quickLinksOpen && (
                  <div className="absolute left-0 mt-2 w-72 rounded-xl bg-white border border-[#E5DFD5] shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-3.5 py-1.5 text-[10px] uppercase tracking-wider text-[#522B8A] font-bold border-b border-[#EFECE6]">
                      {lang === 'hi' ? 'त्वरित सेवा व जानकारी' : 'Quick Access'}
                    </div>
                    {onOpenTariff && (
                      <button
                        type="button"
                        onClick={() => {
                          setQuickLinksOpen(false);
                          onOpenTariff();
                        }}
                        className="w-full text-left px-3.5 py-2.5 text-xs text-[#1E162B] hover:bg-[#FBF5E6] transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span className="font-bold text-[#7A5311]">
                          {lang === 'hi' ? '★ 11 विशिष्ट हीलिंग सेवाएं' : '★ 11 Specialized Services'}
                        </span>
                        <span className="text-[10px] bg-[#FBF5E6] text-[#7A5311] border border-[#DEC38C] px-2 py-0.5 rounded font-bold">
                          {lang === 'hi' ? '16 दिव्य सेवाएं' : '16 Services'}
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
                        className="w-full text-left px-3.5 py-2.5 text-xs text-emerald-800 hover:bg-emerald-50 transition-colors flex items-center gap-2 font-semibold cursor-pointer"
                      >
                        <CreditCard size={13} className="text-emerald-700" />
                        <span>{lang === 'hi' ? 'बैंक एवं UPI भुगतान विवरण' : 'Bank & UPI Payment Details'}</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleNav('honors')}
                      className="w-full text-left px-3.5 py-2.5 text-xs text-[#522B8A] hover:bg-[#F4F0FA] transition-colors flex items-center gap-2 font-semibold cursor-pointer"
                    >
                      <Trophy size={13} className="text-[#B48228]" />
                      <span>{lang === 'hi' ? '★ 40+ राष्ट्रीय सम्मान व दीर्घा' : '★ 40+ Honors & Photo Gallery'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNav('about')}
                      className="w-full text-left px-3.5 py-2 text-xs text-[#3C3547] hover:text-[#522B8A] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                    >
                      {lang === 'hi' ? 'डॉ. पूजा जी के बारे में' : 'About Dr. Pooja Ji'}
                    </button>
                    <div className="px-3.5 pt-2 pb-1 text-[10px] uppercase tracking-wider text-[#5D556A] font-bold border-t border-[#EFECE6]">
                      {lang === 'hi' ? 'मुख्य विषय' : 'Core Tools'}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleNav('calculator')}
                      className="w-full text-left px-4 py-1.5 text-xs text-[#4A4356] hover:text-[#522B8A] hover:bg-[#FAF8F5] transition-colors pl-6 cursor-pointer"
                    >
                      {lang === 'hi' ? '• वैदिक अंकशास्त्र कैलकुलेटर' : '• Vedic Numerology Calculator'}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNav('tarot')}
                      className="w-full text-left px-4 py-1.5 text-xs text-[#4A4356] hover:text-[#522B8A] hover:bg-[#FAF8F5] transition-colors pl-6 cursor-pointer"
                    >
                      {lang === 'hi' ? '• टैरो कार्ड मार्गदर्शन' : '• Tarot Guidance'}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNav('services')}
                      className="w-full text-left px-4 py-1.5 text-xs text-[#4A4356] hover:text-[#522B8A] hover:bg-[#FAF8F5] transition-colors pl-6 cursor-pointer"
                    >
                      {lang === 'hi' ? '• सप्त चक्र एवं ऊर्जा हीलिंग' : '• Energy Chakras'}
                    </button>
                    <div className="border-t border-[#EFECE6] mt-1 pt-1">
                      <button
                        type="button"
                        onClick={() => handleNav('client-reviews-stories')}
                        className="w-full text-left px-3.5 py-2 text-xs text-[#522B8A] hover:bg-[#F4F0FA] transition-colors flex items-center justify-between font-semibold cursor-pointer"
                      >
                        <span className="flex items-center gap-1.5">
                          <Star size={12} fill="#B48228" className="text-[#B48228]" />
                          <span>{lang === 'hi' ? 'ग्राहकों के अनुभव व समीक्षाएं' : 'Client Reviews & Stories'}</span>
                        </span>
                        <span className="text-[10px] bg-[#F4F0FA] text-[#522B8A] px-1.5 py-0.5 rounded font-bold">
                          {lang === 'hi' ? 'समीक्षा' : 'Reviews'}
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Direct Quick Action: 11 Specialized Healing & Correction Services + All 16 Divine Services */}
              {onOpenTariff && (
                <button
                  type="button"
                  onClick={onOpenTariff}
                  className="px-3 py-2 rounded-lg text-xs font-bold text-[#7A5311] bg-[#FBF5E6] hover:bg-[#F5E8C8] border border-[#DEC38C] transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
                  title="11 Specialized Healing & Correction Services — Consultancy Fees & All 16 Divine Services"
                >
                  <Sparkles size={13} className="text-[#B48228] shrink-0" />
                  <span className="whitespace-nowrap">
                    {lang === 'hi' ? '11 विशिष्ट सेवाएं व फीस' : '11 Specialized Services'}
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-[#B48228] text-white font-bold font-rupee text-[10px] tracking-tight">
                    16
                  </span>
                </button>
              )}

              {/* Direct Quick Action: Highlighted Bank & UPI Details */}
              {onOpenBankUpi && (
                <button
                  type="button"
                  onClick={onOpenBankUpi}
                  className="px-3 py-2 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
                  title="Bank Account & UPI Payment Details (QR Code)"
                >
                  <QrCode size={13} className="text-emerald-700 shrink-0" />
                  <span className="whitespace-nowrap">{lang === 'hi' ? 'Bank & UPI विवरण' : 'Bank & UPI'}</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => handleNav('honors')}
                className="hover:text-[#522B8A] hover:bg-[#F4F0FA] transition-colors px-2.5 py-2 flex items-center gap-1.5 text-[#3C3547] rounded-lg cursor-pointer"
              >
                <Trophy size={13} className="text-[#B48228]" />
                <span>{lang === 'hi' ? 'सम्मान दीर्घा' : 'Honors (40+)'}</span>
              </button>

              {/* Dropdown 3: Custom CMS Pages */}
              <div className="relative" ref={pagesDropdownRef}>
                <button
                  type="button"
                  onClick={() => {
                    setPagesDropdownOpen(!pagesDropdownOpen);
                    setQuickLinksOpen(false);
                    setSacredServicesOpen(false);
                  }}
                  className={`flex items-center gap-1 px-2.5 py-2 rounded-lg hover:text-[#522B8A] hover:bg-[#F4F0FA] transition-colors cursor-pointer ${
                    pagesDropdownOpen ? 'text-[#522B8A] bg-[#F4F0FA]' : ''
                  }`}
                  aria-expanded={pagesDropdownOpen}
                >
                  <FileText size={13} className="text-[#522B8A]" />
                  <span>{lang === 'hi' ? 'लेख / पृष्ठ' : 'Guides'}</span>
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${pagesDropdownOpen ? 'rotate-180 text-[#522B8A]' : 'opacity-65'}`}
                  />
                </button>

                {pagesDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-72 rounded-xl bg-white border border-[#E5DFD5] shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="px-3.5 py-1.5 text-[10px] uppercase tracking-wider text-[#522B8A] font-bold border-b border-[#EFECE6] flex items-center justify-between">
                      <span>{lang === 'hi' ? 'वैदिक लेख एवं मार्गदर्शन' : 'Articles & Special Guides'}</span>
                      <span className="text-[9px] bg-[#F4F0FA] text-[#522B8A] px-1.5 py-0.5 rounded font-bold">CMS</span>
                    </div>

                    {onOpenDynamicPage && (
                      <div className="py-1">
                        <button
                          type="button"
                          onClick={() => {
                            setPagesDropdownOpen(false);
                            onOpenDynamicPage('kundali-analysis');
                          }}
                          className="w-full text-left px-3.5 py-2 text-xs text-[#3C3547] hover:text-[#522B8A] hover:bg-[#FAF8F5] transition-colors flex items-center gap-2 cursor-pointer"
                        >
                          <span className="text-[#B48228]">✦</span>
                          <span className="truncate">{lang === 'hi' ? 'कुण्डली विश्लेषण एवं दोष निवारण' : 'Vedic Kundali Analysis'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setPagesDropdownOpen(false);
                            onOpenDynamicPage('rudraksha-ratna-therapy');
                          }}
                          className="w-full text-left px-3.5 py-2 text-xs text-[#3C3547] hover:text-[#522B8A] hover:bg-[#FAF8F5] transition-colors flex items-center gap-2 cursor-pointer"
                        >
                          <span className="text-[#B48228]">✦</span>
                          <span className="truncate">{lang === 'hi' ? 'रुद्राक्ष एवं सिद्ध रत्न चिकित्सा' : 'Rudraksha & Gemstone Therapy'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setPagesDropdownOpen(false);
                            onOpenDynamicPage('vastu-aura-cleansing');
                          }}
                          className="w-full text-left px-3.5 py-2 text-xs text-[#3C3547] hover:text-[#522B8A] hover:bg-[#FAF8F5] transition-colors flex items-center gap-2 cursor-pointer"
                        >
                          <span className="text-[#B48228]">✦</span>
                          <span className="truncate">{lang === 'hi' ? 'वास्तु दोष निवारण व औरा शुद्धि' : 'Vastu & Aura Cleansing'}</span>
                        </button>
                      </div>
                    )}

                    {onOpenAdmin && (
                      <div className="border-t border-[#EFECE6] pt-1 mt-1">
                        <button
                          type="button"
                          onClick={() => {
                            setPagesDropdownOpen(false);
                            onOpenAdmin();
                          }}
                          className="w-full text-left px-3.5 py-2 text-xs text-[#522B8A] hover:bg-[#F4F0FA] transition-colors flex items-center justify-between font-bold cursor-pointer"
                        >
                          <span>{lang === 'hi' ? 'Admin Panel व पेज जोड़ें' : 'Admin CMS Portal'}</span>
                          <span className="text-[10px] bg-[#522B8A] text-white px-2 py-0.5 rounded font-bold">Admin</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </nav>

            {/* Zone 3: Primary CTA Button + Hamburger */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onBookClick}
                type="button"
                className="px-4 sm:px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#522B8A] hover:bg-[#412070] rounded-lg transition-all shadow-sm hover:shadow-md active:scale-[0.98] whitespace-nowrap cursor-pointer"
              >
                {lang === 'hi' ? 'परामर्श बुक करें' : 'Book Consultation'}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="lg:hidden p-2 text-[#1E162B] hover:text-[#522B8A] hover:bg-[#F4F0FA] rounded-lg focus:outline-none transition-colors"
                aria-label="Toggle navigation drawer"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MOBILE DRAWER (Cohesive Light Theme) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E5DFD5] shadow-2xl max-h-[85vh] overflow-y-auto px-4 pt-4 pb-8 space-y-5 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Header Summary Card */}
          <div className="bg-white p-4 rounded-xl border border-[#E5DFD5] shadow-2xs space-y-2">
            <div className="font-cinzel text-base font-bold text-[#1E162B] flex items-center justify-between">
              <span>Dr. Pooja Awasthi</span>
              <span className="text-[10px] font-sans text-[#522B8A] bg-[#F4F0FA] border border-[#DFD5F0] px-2.5 py-0.5 rounded-full font-semibold">
                {lang === 'hi' ? 'आध्यात्मिक मार्गदर्शन' : 'Spiritual Guidance'}
              </span>
            </div>
            <p className="text-xs italic text-[#8F651D] font-cormorant font-semibold">
              {lang === 'hi' ? '“अपनी राह पहचानें। अपने जीवन को बेहतर बनाएं।”' : '“Discover Your Path. Transform Your Life.”'}
            </p>
            <p className="text-[11px] text-[#5D556A] leading-relaxed">
              {lang === 'hi'
                ? 'वैदिक अंकशास्त्र, टैरो मार्गदर्शन, ऑरा एवं चक्र हीलिंग तथा जीवन मार्गदर्शन का संगम।'
                : 'Spiritual guidance combining Vedic Numerology, Tarot Reading, Energy Healing and Life Coaching.'}
            </p>
          </div>

          {/* Language Switcher Card */}
          <div className="bg-white rounded-xl p-3.5 border border-[#E5DFD5] flex items-center justify-between shadow-2xs">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[#7A5311] font-bold">
                {lang === 'hi' ? 'भाषा:' : 'Language:'}
              </div>
              <div className="text-xs font-semibold text-[#1E162B] flex items-center gap-1.5 mt-0.5">
                <Globe size={13} className="text-[#522B8A]" />
                <span>{currentLangObj.nativeName}</span>
                <span>{currentLangObj.flag}</span>
              </div>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLangModal();
              }}
              type="button"
              className="text-xs font-bold px-3 py-1.5 rounded-lg bg-[#F4F0FA] hover:bg-[#EAE2F4] text-[#522B8A] border border-[#DFD5F0]"
            >
              {lang === 'hi' ? 'भाषा बदलें' : 'Change'}
            </button>
          </div>

          {/* Quick Links & Highlighted Portals */}
          <div className="space-y-2.5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#522B8A] border-b border-[#E5DFD5] pb-1 flex items-center gap-1.5">
              <Compass size={13} />
              <span>{lang === 'hi' ? 'प्रमुख सेवाएं व पोर्टल' : 'Portals & Navigation'}</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {onOpenTariff && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTariff();
                  }}
                  className="w-full text-left py-3 px-3.5 text-xs font-bold text-[#7A5311] bg-[#FBF5E6] hover:bg-[#F5E8C8] rounded-xl border border-[#DEC38C] shadow-2xs flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <Sparkles size={16} className="text-[#B48228] shrink-0" />
                    <div>
                      <div className="leading-tight text-[#1E162B] font-bold">
                        {lang === 'hi' ? '11 विशिष्ट हीलिंग एवं सुधार सेवाएं' : '11 Specialized Healing Services'}
                      </div>
                      <div className="text-[10px] font-medium text-[#7A5311] mt-0.5">
                        {lang === 'hi' ? 'परामर्श शुल्क सूची (सभी 16 दिव्य सेवाएं)' : 'Consultancy Fees (All 16 Divine Services)'}
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-[#B48228] text-white font-bold font-rupee px-2 py-1 rounded-md shrink-0">
                    16 सेवाएं
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
                  className="w-full text-left py-3 px-3.5 text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-300 shadow-2xs flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <QrCode size={16} className="text-emerald-700 shrink-0" />
                    <div>
                      <div className="text-emerald-950 leading-tight font-bold">
                        {lang === 'hi' ? 'बैंक एवं UPI भुगतान विवरण' : 'Bank & UPI Payment Details'}
                      </div>
                      <div className="text-[10px] font-mono text-emerald-800 mt-0.5">
                        9105731969@upi (Pooja Awasthi)
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] bg-emerald-700 text-white font-bold px-2 py-1 rounded-md uppercase tracking-wider shrink-0">
                    QR कोड
                  </span>
                </button>
              )}

              <button
                type="button"
                onClick={() => handleNav('honors')}
                className="w-full text-left py-2.5 px-3 text-xs text-[#1E162B] font-semibold bg-white rounded-lg border border-[#E5DFD5] flex items-center gap-2"
              >
                <Trophy size={14} className="text-[#B48228]" />
                <span>{lang === 'hi' ? '★ 40+ प्रमाण-पत्र एवं सम्मान दीर्घा' : '★ 40+ Honors & Photo Gallery'}</span>
              </button>

              <button
                type="button"
                onClick={() => handleNav('about')}
                className="w-full text-left py-2 px-3 text-xs text-[#3C3547] hover:bg-white rounded-lg"
              >
                {lang === 'hi' ? 'डॉ. पूजा जी के बारे में' : 'About Dr. Pooja Ji'}
              </button>

              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesSubOpen(!mobileServicesSubOpen)}
                  className="w-full text-left py-2 px-3 text-xs text-[#3C3547] flex items-center justify-between rounded-lg hover:bg-white"
                >
                  <span>{lang === 'hi' ? 'अन्य आध्यात्मिक सेवाएँ' : 'Explore Tools & Services'}</span>
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${mobileServicesSubOpen ? 'rotate-180 text-[#522B8A]' : 'opacity-65'}`}
                  />
                </button>
                {mobileServicesSubOpen && (
                  <div className="pl-5 space-y-1 py-1 border-l-2 border-[#DEC38C] ml-3 mt-1">
                    <button type="button" onClick={() => handleNav('calculator')} className="block w-full text-left text-xs py-1 text-[#4A4356] hover:text-[#522B8A]">
                      {lang === 'hi' ? '• वैदिक अंकशास्त्र कैलकुलेटर' : '• Vedic Numerology'}
                    </button>
                    <button type="button" onClick={() => handleNav('tarot')} className="block w-full text-left text-xs py-1 text-[#4A4356] hover:text-[#522B8A]">
                      {lang === 'hi' ? '• टैरो कार्ड मार्गदर्शन' : '• Tarot Guidance'}
                    </button>
                    <button type="button" onClick={() => handleNav('services')} className="block w-full text-left text-xs py-1 text-[#4A4356] hover:text-[#522B8A]">
                      {lang === 'hi' ? '• सप्त चक्र एवं ऊर्जा हीलिंग' : '• Energy Chakras'}
                    </button>
                    <button type="button" onClick={() => handleNav('client-reviews-stories')} className="block w-full text-left text-xs py-1 text-[#522B8A] font-semibold">
                      {lang === 'hi' ? '• ग्राहकों के अनुभव व समीक्षाएं' : '• Client Reviews & Stories'}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Direct Contact Card */}
          <div className="space-y-2 bg-white p-3.5 rounded-xl border border-[#E5DFD5]">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#522B8A] flex items-center gap-1.5">
              <Phone size={13} />
              <span>{lang === 'hi' ? 'सीधा संपर्क' : 'Direct Connection'}</span>
            </div>
            <div className="space-y-1.5 text-xs">
              <a
                href="https://wa.me/919105731969"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#1E162B] hover:text-[#522B8A] p-1.5 rounded bg-[#FAF8F5]"
              >
                <Phone size={13} className="text-emerald-600 shrink-0" />
                <span>WhatsApp: <strong>+919105731969</strong></span>
              </a>
              <a
                href="mailto:astro.poojaofficial@gmail.com"
                className="flex items-center gap-2 text-[#1E162B] hover:text-[#522B8A] p-1.5 rounded bg-[#FAF8F5]"
              >
                <Mail size={13} className="text-[#B48228] shrink-0" />
                <span>astro.poojaofficial@gmail.com</span>
              </a>
              <a
                href="https://dr-pooja-awasthi-india.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#522B8A] p-1.5 rounded bg-[#FAF8F5]"
              >
                <ExternalLink size={13} className="shrink-0" />
                <span>dr-pooja-awasthi-india.netlify.app</span>
              </a>
            </div>
          </div>

          {/* CMS Pages & Admin */}
          <div className="space-y-2">
            {onOpenDynamicPage && (
              <div className="grid grid-cols-1 gap-1">
                <button type="button" onClick={() => { setMobileMenuOpen(false); onOpenDynamicPage('kundali-analysis'); }} className="w-full text-left py-1.5 px-3 text-xs text-[#4A4356] hover:bg-white rounded">
                  ✦ {lang === 'hi' ? 'कुण्डली विश्लेषण एवं दोष निवारण' : 'Vedic Kundali Analysis'}
                </button>
                <button type="button" onClick={() => { setMobileMenuOpen(false); onOpenDynamicPage('rudraksha-ratna-therapy'); }} className="w-full text-left py-1.5 px-3 text-xs text-[#4A4356] hover:bg-white rounded">
                  ✦ {lang === 'hi' ? 'रुद्राक्ष एवं सिद्ध रत्न चिकित्सा' : 'Rudraksha & Gemstone Therapy'}
                </button>
              </div>
            )}

            {onOpenAdmin && (
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full text-left py-2 px-3 text-xs text-[#522B8A] font-bold bg-[#F4F0FA] hover:bg-[#EAE2F4] rounded-lg border border-[#DFD5F0] flex items-center justify-between"
              >
                <span>{lang === 'hi' ? 'व्यवस्थापक Admin CMS पोर्टल' : 'Admin CMS Portal'}</span>
                <span className="text-[9px] bg-[#522B8A] text-white px-2 py-0.5 rounded font-bold">Admin</span>
              </button>
            )}
          </div>

          {/* Mobile Primary CTA */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookClick();
            }}
            type="button"
            className="w-full py-3.5 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#522B8A] hover:bg-[#412070] rounded-xl transition-all shadow-md"
          >
            {lang === 'hi' ? 'परामर्श बुक करें' : 'Book Consultation'}
          </button>
        </div>
      )}
    </header>
  );
};

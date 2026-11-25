import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { VedicCalculatorSection } from './components/VedicCalculatorSection';
import { TarotOracleSection } from './components/TarotOracleSection';
import { AwardsSection } from './components/AwardsSection';
import { PricingConsultationSection } from './components/PricingConsultationSection';
import { FaqSection } from './components/FaqSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactBookingSection } from './components/ContactBookingSection';
import { Footer } from './components/Footer';
import { LanguageSelectorModal } from './components/LanguageSelectorModal';
import { TariffView } from './components/TariffView';
import { BankUpiModal } from './components/BankUpiModal';
import { DynamicPageView } from './components/DynamicPageView';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AdminPageList } from './components/admin/AdminPageList';
import { AdminPageBuilder } from './components/admin/AdminPageBuilder';
import { AdminMediaLibrary } from './components/admin/AdminMediaLibrary';
import { AdminSettings } from './components/admin/AdminSettings';
import { AdminSiteEditor } from './components/admin/AdminSiteEditor';
import { AdminSeoDashboard } from './components/admin/AdminSeoDashboard';
import { SEOHead } from './components/SEOHead';
import { SocialShare } from './components/SocialShare';
import { SiteContentProvider } from './utils/siteContentContext';
import { isUserAuthenticated, CMSPage } from './utils/cmsApi';
import { MessageSquare, ArrowUp, QrCode, Sparkles } from 'lucide-react';
import { getTranslation } from './data/translations';
import { useTrafficTracker } from './utils/trafficApi';

type ViewMode = 'home' | 'tariff' | 'admin' | 'dynamic-page';
type AdminTab = 'dashboard' | 'site-editor' | 'pages' | 'create-page' | 'media' | 'settings' | 'seo';

function MainApp() {
  const [lang, setLang] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang) return urlLang;
      const saved = window.localStorage.getItem('pooja_lang');
      if (saved) return saved;
    }
    return 'en';
  });

  const handleSelectLang = (newLang: string) => {
    setLang(newLang);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem('pooja_lang', newLang);
      } catch {
        // ignore storage restrictions
      }
    }
    document.documentElement.lang = newLang || 'en';
  };

  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [currentSlug, setCurrentSlug] = useState<string>('kundali-analysis');

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [adminTab, setAdminTab] = useState<AdminTab>('dashboard');
  const [editingPageId, setEditingPageId] = useState<string | null>(null);
  const [siteEditorInitialSection, setSiteEditorInitialSection] = useState<
    'hero' | 'about' | 'services' | 'video' | 'testimonials' | 'faqs' | 'contact'
  >('hero');

  // Modals & Booking State
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [isBankUpiModalOpen, setIsBankUpiModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Vedic Numerology (₹5,100)');
  const t = getTranslation(lang);

  // Track real live visitors & page views starting from 1005
  const activeTrackedPath =
    currentView === 'tariff'
      ? '/tariff'
      : currentView === 'dynamic-page'
      ? `/pages/${currentSlug}`
      : currentView === 'admin'
      ? '/admin'
      : '/';
  useTrafficTracker(activeTrackedPath);

  // Check auth state on mount
  useEffect(() => {
    setIsAdminLoggedIn(isUserAuthenticated());
  }, []);

  // Browser URL and Hash Routing
  useEffect(() => {
    const handleUrlRoute = () => {
      const pathname = window.location.pathname;
      const hash = window.location.hash;

      if (pathname === '/admin' || pathname.startsWith('/admin/') || hash === '#admin') {
        setCurrentView('admin');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      if (
        pathname === '/pages/client-reviews-stories' ||
        pathname === '/reviews' ||
        hash === '#client-reviews-stories' ||
        hash === '#reviews'
      ) {
        if (currentView !== 'home') setCurrentView('home');
        setTimeout(() => {
          const el =
            document.getElementById('client-reviews-stories') ||
            document.getElementById('reviews') ||
            document.getElementById('testimonials');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return;
      }

      if (pathname.startsWith('/pages/')) {
        const extracted = pathname.replace('/pages/', '').split('/')[0];
        if (extracted) {
          setCurrentSlug(extracted);
          setCurrentView('dynamic-page');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      if (hash.startsWith('#pages/')) {
        const extracted = hash.replace('#pages/', '').split('/')[0];
        if (extracted) {
          setCurrentSlug(extracted);
          setCurrentView('dynamic-page');
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      if (
        pathname === '/tariff' ||
        pathname === '/services-tariff' ||
        pathname === '/specialized-healing-services' ||
        pathname === '/11-specialized-services' ||
        pathname === '/all-16-divine-services' ||
        hash === '#tariff' ||
        hash === '#services-tariff' ||
        hash === '#specialized-healing-services' ||
        hash === '#all-16-divine-services'
      ) {
        setCurrentView('tariff');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      // Default home
      if (pathname === '/' && !hash.startsWith('#pages/')) {
        if (currentView !== 'home') setCurrentView('home');
      }
    };

    handleUrlRoute();

    window.addEventListener('popstate', handleUrlRoute);
    window.addEventListener('hashchange', handleUrlRoute);
    return () => {
      window.removeEventListener('popstate', handleUrlRoute);
      window.removeEventListener('hashchange', handleUrlRoute);
    };
  }, []);

  // Keyboard shortcut: Ctrl + Shift + A to open Admin Panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        navigateToAdmin();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Sync HTML lang & Admin title
  useEffect(() => {
    document.documentElement.lang = lang || 'en';
    if (currentView === 'admin') {
      document.title = 'Admin CMS Portal | Dr. Pooja Awasthi';
    }
  }, [lang, currentView]);

  // Navigation helpers
  const navigateToView = (view: ViewMode, path: string = '') => {
    setCurrentView(view);
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', path || (view === 'home' ? '/' : `/${view}`));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToDynamicPage = (slug: string) => {
    setCurrentSlug(slug);
    setCurrentView('dynamic-page');
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', `/pages/${slug}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAdmin = () => {
    setIsAdminLoggedIn(isUserAuthenticated());
    setCurrentView('admin');
    if (window.history && window.history.pushState) {
      window.history.pushState(null, '', '/admin');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const targetId = id === 'client-reviews-stories' || id === 'reviews' ? 'reviews' : id;
    if (currentView !== 'home') {
      setCurrentView('home');
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', '/');
      }
      setTimeout(() => {
        const el = document.getElementById(targetId) || document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const el = document.getElementById(targetId) || document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToSection('contact');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ==========================================
  // RENDER: ADMIN CMS PANEL
  // ==========================================
  if (currentView === 'admin') {
    if (!isAdminLoggedIn) {
      return (
        <AdminLogin
          lang={lang}
          onLoginSuccess={() => {
            setIsAdminLoggedIn(true);
            setAdminTab('dashboard');
          }}
          onBackToSite={() => navigateToView('home', '/')}
        />
      );
    }

    return (
      <AdminLayout
        currentTab={adminTab}
        onSelectTab={(tab) => {
          setAdminTab(tab);
          if (tab === 'create-page') setEditingPageId(null);
        }}
        onLogout={() => {
          setIsAdminLoggedIn(false);
          navigateToView('home', '/');
        }}
        onViewLiveSite={() => navigateToView('home', '/')}
        lang={lang}
      >
        {adminTab === 'dashboard' && (
          <AdminDashboard
            onNavigateTab={(tab) => {
              setAdminTab(tab);
              if (tab === 'create-page') setEditingPageId(null);
            }}
            onEditPage={(id) => {
              setEditingPageId(id);
              setAdminTab('create-page');
            }}
            onPreviewPage={(slug) => navigateToDynamicPage(slug)}
            lang={lang}
          />
        )}

        {adminTab === 'site-editor' && (
          <AdminSiteEditor
            initialSection={siteEditorInitialSection}
            lang={lang}
            onPreviewSite={() => navigateToView('home', '/')}
          />
        )}

        {adminTab === 'pages' && (
          <AdminPageList
            onCreatePage={() => {
              setEditingPageId(null);
              setAdminTab('create-page');
            }}
            onEditPage={(id) => {
              setEditingPageId(id);
              setAdminTab('create-page');
            }}
            onEditCoreSection={(sectionKey) => {
              setSiteEditorInitialSection(sectionKey);
              setAdminTab('site-editor');
            }}
            onPreviewPage={(slug) => navigateToDynamicPage(slug)}
            onPreviewSection={(sectionSlug) => {
              navigateToView('home', '/');
              setTimeout(() => {
                if (sectionSlug.startsWith('#')) {
                  scrollToSection(sectionSlug.replace('#', ''));
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }, 120);
            }}
            lang={lang}
          />
        )}

        {adminTab === 'create-page' && (
          <AdminPageBuilder
            pageId={editingPageId}
            onBack={() => setAdminTab('pages')}
            onPageSaved={(_saved) => {
              // Stay in builder or allow user to view
            }}
            onPreviewPublic={(slug) => navigateToDynamicPage(slug)}
            lang={lang}
          />
        )}

        {adminTab === 'media' && <AdminMediaLibrary lang={lang} />}

        {adminTab === 'settings' && <AdminSettings lang={lang} />}

        {adminTab === 'seo' && <AdminSeoDashboard lang={lang} />}
      </AdminLayout>
    );
  }

  const liveOrigin = typeof window !== 'undefined' ? window.location.origin : '';
  const homeCanonical = liveOrigin ? `${liveOrigin}/` : '/';

  const homeTitle = lang === 'hi'
    ? 'डॉ. पूजा अवस्थी – वैदिक अंकशास्त्र, टैरो व हीलिंग'
    : 'Dr. Pooja Awasthi – Vedic Numerology, Tarot & Healing';
  const homeDesc = lang === 'hi'
    ? 'डॉ. पूजा अवस्थी से वैदिक अंकशास्त्र, टैरो कार्ड रीडिंग, चक्र हीलिंग, वास्तु व पास्ट लाइफ रिग्रेशन का व्यक्तिगत परामर्श प्राप्त करें।'
    : 'Get certified Vedic Numerology, Intuitive Tarot, Chakra Healing & Vastu guidance with Dr. Pooja Awasthi. Book your 1-on-1 session today.';
  const homeKeywords = lang === 'hi'
    ? 'डॉ पूजा अवस्थी, वैदिक अंकशास्त्र, टैरो कार्ड रीडिंग, चक्र हीलिंग, पास्ट लाइफ रिग्रेशन, वास्तु, देहरादून'
    : 'Dr Pooja Awasthi, Vedic Numerology, Tarot Card Reading, Chakra Healing, Vastu, Past Life Regression, Dehradun';

  const homeSchemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${homeCanonical}#website`,
        name: 'Dr. Pooja Awasthi Spiritual Guidance',
        url: homeCanonical,
        inLanguage: ['en-IN', 'hi-IN'],
      },
      {
        '@type': 'Person',
        '@id': `${homeCanonical}#person`,
        name: 'Dr. Pooja Awasthi',
        jobTitle: 'Spiritual Guide, Vedic Numerologist & Life Coach',
        image: `${liveOrigin}/assets/aistudio/28_91acc32c.jpeg`,
        url: homeCanonical,
        email: 'astro.poojaofficial@gmail.com',
        telephone: '+919105731969',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dehradun',
          addressRegion: 'Uttarakhand',
          addressCountry: 'IN',
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${homeCanonical}#service`,
        name: 'Dr. Pooja Awasthi Spiritual Guidance',
        url: homeCanonical,
        image: `${liveOrigin}/assets/aistudio/28_91acc32c.jpeg`,
        priceRange: '₹5,100 - ₹31,000',
        telephone: '+919105731969',
        email: 'astro.poojaofficial@gmail.com',
        founder: { '@id': `${homeCanonical}#person` },
        areaServed: 'Worldwide',
      },
      {
        '@type': 'FAQPage',
        '@id': `${homeCanonical}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do online consultations with Dr. Pooja Awasthi work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sessions take place comfortably via Google Meet, Zoom, or WhatsApp video/audio call with a dedicated 1-on-1 confirmation.',
            },
          },
          {
            '@type': 'Question',
            name: 'What details are needed for a Vedic Numerology reading?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You only need your date of birth and usual full name spelling to analyze Mulank, Bhagyank, and Kua alignment.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Distance Energy Healing really work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Focused pranic alignment and positive meditative intention transcend physical distance for calm relief worldwide.',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E162B] flex flex-col font-sans selection:bg-[#EAE2F4] selection:text-[#522B8A] relative overflow-x-clip">
      {/* Dynamic SEO Meta, OpenGraph, Canonical & JSON-LD Structured Data */}
      {currentView === 'home' && (
        <SEOHead
          title={homeTitle}
          description={homeDesc}
          canonical={homeCanonical}
          ogImage="/assets/aistudio/28_91acc32c.jpeg"
          keywords={homeKeywords}
          type="website"
          schemaData={homeSchemaData}
          lang={lang}
        />
      )}

      {/* 1. Sticky Navigation with Language, Tariff, Pages & Bank details */}
      <Navbar
        lang={lang}
        onOpenLangModal={() => setIsLangModalOpen(true)}
        onToggleLang={() => handleSelectLang(lang === 'hi' ? 'en' : 'hi')}
        onBookClick={() => scrollToSection('contact')}
        onOpenTariff={() => navigateToView('tariff', '/tariff')}
        onOpenBankUpi={() => setIsBankUpiModalOpen(true)}
        onNavigate={(id) => scrollToSection(id)}
        onOpenAdmin={navigateToAdmin}
        onOpenDynamicPage={navigateToDynamicPage}
      />

      <main className="flex-grow">
        {/* VIEW 1: DYNAMIC CMS PAGE (/pages/:slug) */}
        {currentView === 'dynamic-page' ? (
          <DynamicPageView
            slug={currentSlug}
            onBackToHome={() => navigateToView('home', '/')}
            onSelectServiceForBooking={(srv) => {
              navigateToView('home', '/');
              handleSelectServiceForBooking(srv);
            }}
            onOpenTariff={() => navigateToView('tariff', '/tariff')}
            onOpenBankUpi={() => setIsBankUpiModalOpen(true)}
            lang={lang}
          />
        ) : currentView === 'tariff' ? (
          /* VIEW 2: 11 HEALING SERVICES TARIFF & RATE CARD */
          <TariffView
            lang={lang}
            onBackToHome={() => navigateToView('home', '/')}
            onBookService={(srv) => {
              navigateToView('home', '/');
              handleSelectServiceForBooking(srv);
            }}
            onOpenBrandSettings={() => setIsBankUpiModalOpen(true)}
          />
        ) : (
          /* VIEW 3: MAIN FULL HOME SANCTUARY */
          <>
            {/* 2. Hero Section */}
            <Hero
              lang={lang}
              onBookClick={() => scrollToSection('contact')}
              onExploreClick={() => scrollToSection('services')}
              onOpenTariff={() => navigateToView('tariff', '/tariff')}
              onCalculateVedic={() => scrollToSection('calculator')}
            />

            {/* 3. About Section */}
            <AboutSection
              lang={lang}
              onBookClick={() => scrollToSection('contact')}
            />

            {/* 4. Services Section with 7 Chakras Visualizer */}
            <ServicesSection
              lang={lang}
              onSelectServiceForBooking={handleSelectServiceForBooking}
              onOpenTariff={() => navigateToView('tariff', '/tariff')}
              onOpenBankUpi={() => setIsBankUpiModalOpen(true)}
            />

            {/* 5. Interactive Vedic Numerology Calculator */}
            <VedicCalculatorSection
              lang={lang}
              onBookWithNumbers={(notes) => {
                setSelectedService(`Vedic Numerology Analysis (${notes})`);
                scrollToSection('contact');
              }}
            />

            {/* 6. Daily Intuitive Tarot Oracle Card Spread */}
            <TarotOracleSection
              lang={lang}
              onBookTarot={(notes) => {
                setSelectedService(`Tarot Intuitive Consultation (${notes})`);
                scrollToSection('contact');
              }}
            />

            {/* 7. 40+ National Awards, Conclaves & Honors */}
            <AwardsSection lang={lang} />

            {/* 8. Consultation Charges & 4-Step Process */}
            <PricingConsultationSection
              lang={lang}
              onBookClick={() => scrollToSection('contact')}
              onOpenTariff={() => navigateToView('tariff', '/tariff')}
              onOpenBankUpi={() => setIsBankUpiModalOpen(true)}
            />

            {/* 9. Frequently Asked Questions (FAQ) */}
            <FaqSection lang={lang} />

            {/* 10. Authentic Client Reflections & Stories */}
            <TestimonialsSection
              lang={lang}
              onOpenBooking={(serviceName) => {
                if (serviceName) setSelectedService(serviceName);
                scrollToSection('contact');
              }}
            />

            {/* Social Share & Promotion Widget */}
            <div className="max-w-4xl mx-auto px-4 pb-8 pt-0">
              <SocialShare
                title={lang === 'hi' ? 'डॉ. पूजा अवस्थी — वैदिक अंकशास्त्र, टैरो व हीलिंग' : 'Dr. Pooja Awasthi — Spiritual Guidance & Vedic Numerology'}
                text={lang === 'hi' ? 'जीवन में सही दिशा, मन की शांति और सकारात्मक बदलाव के लिए डॉ. पूजा अवस्थी से जुड़ें।' : 'Empowering clarity, peace of mind & positive transformation with Dr. Pooja Awasthi.'}
                lang={lang}
              />
            </div>

            {/* 11. Contact & Direct WhatsApp Booking Form */}
            <ContactBookingSection
              lang={lang}
              preSelectedService={selectedService}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenTariff={() => navigateToView('tariff', '/tariff')}
        onOpenBankUpi={() => setIsBankUpiModalOpen(true)}
        onOpenAdmin={navigateToAdmin}
        onOpenDynamicPage={navigateToDynamicPage}
      />

      {/* Multi-Language Selector Modal */}
      <LanguageSelectorModal
        isOpen={isLangModalOpen}
        onClose={() => setIsLangModalOpen(false)}
        currentLang={lang}
        onSelectLang={handleSelectLang}
      />

      {/* Bank & UPI Payment Details Modal */}
      <BankUpiModal
        isOpen={isBankUpiModalOpen}
        onClose={() => setIsBankUpiModalOpen(false)}
        lang={lang}
      />

      {/* Floating Action Quick Buttons (Responsive for 320px Mobile -> Desktop) */}
      <div className="fixed bottom-3 right-3 left-3 sm:left-auto sm:bottom-5 sm:right-5 z-40 flex flex-wrap sm:flex-nowrap items-center justify-end gap-1.5 sm:gap-2 pointer-events-none [&>*]:pointer-events-auto print:hidden">
        {/* Quick Tariff & Fee Details Card Button: 11 Specialized Services + All 16 Divine Services */}
        {currentView !== 'tariff' && (
          <button
            type="button"
            onClick={() => navigateToView('tariff', '/tariff')}
            className="h-9 sm:h-10 px-2.5 sm:px-3.5 rounded-full bg-white/95 hover:bg-[#FBF5E6] text-[#7A5311] font-bold text-[11px] sm:text-xs flex items-center gap-1 sm:gap-1.5 shadow-lg border border-[#DEC38C] backdrop-blur-md transition-all cursor-pointer max-w-[60vw] sm:max-w-none truncate"
            title={
              lang === 'hi'
                ? '11 विशेष हीलिंग सेवाएं व फीस (सभी 16 दिव्य सेवाएं)'
                : '11 Specialized Healing & Correction Services (Consultancy Fees - All 16 Divine Services)'
            }
          >
            <Sparkles size={12} className="text-[#B48228] shrink-0" />
            <span className="truncate">
              {lang === 'hi' ? (
                <>
                  <span className="sm:hidden">★ 11 सेवाएं (<span className="font-rupee font-black text-[#522B8A]">16</span>)</span>
                  <span className="hidden sm:inline">★ 11 विशेष सेवाएं (<span className="font-rupee font-black text-[#522B8A]">16 सेवाएं</span>)</span>
                </>
              ) : (
                <>
                  <span className="sm:hidden">★ 11 Services (<span className="font-rupee font-black text-[#522B8A]">16</span>)</span>
                  <span className="hidden sm:inline">★ 11 Specialized (<span className="font-rupee font-black text-[#522B8A]">All 16</span>)</span>
                </>
              )}
            </span>
          </button>
        )}

        {/* UPI & QR Pay Button */}
        <button
          type="button"
          onClick={() => setIsBankUpiModalOpen(true)}
          className="h-9 sm:h-10 px-2.5 sm:px-3.5 rounded-full bg-emerald-50/95 hover:bg-emerald-100 text-emerald-800 shadow-lg border border-emerald-400 font-bold text-[11px] sm:text-xs flex items-center gap-1.5 backdrop-blur-md transition-all cursor-pointer shrink-0"
          title={lang === 'hi' ? 'UPI और QR कोड भुगतान विवरण' : 'UPI & QR Code Payment Details Only'}
          aria-label={lang === 'hi' ? 'UPI और QR भुगतान देखें' : 'Open UPI & QR Code Payment Details'}
        >
          <QrCode size={14} className="text-emerald-700 shrink-0" />
          <span className="hidden sm:inline">{lang === 'hi' ? 'UPI व QR भुगतान' : 'UPI & QR Pay'}</span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/919105731969?text=Hello%20Dr.%20Pooja%20Awasthi,%20I%20would%20like%20to%20book%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          title={lang === 'hi' ? 'व्हाट्सएप पर सीधा संपर्क' : 'Direct WhatsApp Consultation'}
          aria-label="Chat on WhatsApp"
          className="h-9 sm:h-10 px-3 sm:px-4 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs flex items-center gap-1.5 sm:gap-2 shadow-lg transition-all shrink-0"
        >
          <MessageSquare size={14} className="shrink-0" />
          <span className="hidden sm:inline">{lang === 'hi' ? 'व्हाट्सएप' : 'WhatsApp'} (<span className="font-rupee font-black">₹5,100</span>)</span>
        </a>

        {/* Back to Top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center rounded-full bg-white/95 hover:bg-[#F4F0FA] text-[#1E162B] hover:text-[#522B8A] shadow-lg border border-[#E6DFD3] backdrop-blur-md transition-all cursor-pointer shrink-0"
          title={lang === 'hi' ? 'ऊपर जाएं' : 'Scroll to Top'}
          aria-label="Scroll to top"
        >
          <ArrowUp size={15} />
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <SiteContentProvider>
      <MainApp />
    </SiteContentProvider>
  );
}

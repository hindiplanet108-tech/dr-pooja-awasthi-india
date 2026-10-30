import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { VedicCalculatorSection } from './components/VedicCalculatorSection';
import { TarotOracleSection } from './components/TarotOracleSection';
import { AwardsSection } from './components/AwardsSection';
import { VideoSpotlightSection } from './components/VideoSpotlightSection';
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
import { SiteContentProvider } from './utils/siteContentContext';
import { isUserAuthenticated, CMSPage } from './utils/cmsApi';
import { MessageSquare, ArrowUp, QrCode } from 'lucide-react';
import { getTranslation } from './data/translations';

type ViewMode = 'home' | 'tariff' | 'admin' | 'dynamic-page';
type AdminTab = 'dashboard' | 'site-editor' | 'pages' | 'create-page' | 'media' | 'settings';

function MainApp() {
  const [lang, setLang] = useState<string>('en');
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [currentSlug, setCurrentSlug] = useState<string>('kundali-analysis');

  // Admin Panel states
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);
  const [adminTab, setAdminTab] = useState<AdminTab>('dashboard');
  const [editingPageId, setEditingPageId] = useState<string | null>(null);

  // Modals & Booking State
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [isBankUpiModalOpen, setIsBankUpiModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Vedic Numerology (₹5,100)');
  const t = getTranslation(lang);

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

      if (pathname === '/tariff' || hash === '#tariff') {
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

  // SEO & Localization: Dynamically update HTML lang attribute and page title
  useEffect(() => {
    document.documentElement.lang = lang;
    if (currentView === 'home') {
      if (lang === 'hi') {
        document.title = 'डॉ. पूजा अवस्थी — आध्यात्मिक मार्गदर्शन | वैदिक अंकशास्त्र, टैरो एवं चक्र हीलिंग';
      } else {
        document.title = 'Dr. Pooja Awasthi — Spiritual Guidance | Vedic Numerology & Life Coaching';
      }
    } else if (currentView === 'admin') {
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
    if (currentView !== 'home') {
      setCurrentView('home');
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', '/');
      }
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const el = document.getElementById(id);
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
            onPreviewPage={(slug) => navigateToDynamicPage(slug)}
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
      </AdminLayout>
    );
  }

  // ==========================================
  // RENDER: PUBLIC WEBSITE (Home, Tariff, Dynamic Pages)
  // ==========================================
  return (
    <div className="min-h-screen bg-[#FBF8F2] text-[#29242E] flex flex-col font-sans selection:bg-[#EAE2F4] selection:text-[#24152F] relative">
      {/* 1. Sticky Navigation with Language, Tariff, Pages & Bank details */}
      <Navbar
        lang={lang}
        onOpenLangModal={() => setIsLangModalOpen(true)}
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

            {/* 7b. Video Spotlight (Editable via Admin Panel) */}
            <VideoSpotlightSection lang={lang} />

            {/* 8. Consultation Charges & 4-Step Process */}
            <PricingConsultationSection
              lang={lang}
              onBookClick={() => scrollToSection('contact')}
              onOpenTariff={() => navigateToView('tariff', '/tariff')}
              onOpenBankUpi={() => setIsBankUpiModalOpen(true)}
            />

            {/* 9. Frequently Asked Questions (FAQ) */}
            <FaqSection lang={lang} />

            {/* 10. Authentic Client Reflections */}
            <TestimonialsSection lang={lang} />

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
        onSelectLang={(newLang) => setLang(newLang)}
      />

      {/* Bank & UPI Payment Details Modal */}
      <BankUpiModal
        isOpen={isBankUpiModalOpen}
        onClose={() => setIsBankUpiModalOpen(false)}
        lang={lang}
      />

      {/* Floating Action Quick Buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        {/* Quick Tariff Card Button */}
        {currentView !== 'tariff' && (
          <button
            type="button"
            onClick={() => navigateToView('tariff', '/tariff')}
            className="px-3.5 py-2.5 rounded-full bg-[#24152F] hover:bg-[#341e44] text-[#D6B574] font-semibold text-xs flex items-center gap-1.5 shadow-2xl border border-[#D6B574]/40 hover:scale-105 active:scale-95 transition-all"
            title="View 11 Services Tariff & Rate Card"
          >
            <span>★ Tariff</span>
          </button>
        )}

        {/* Bank & UPI QR Button */}
        <button
          type="button"
          onClick={() => setIsBankUpiModalOpen(true)}
          className="p-2.5 rounded-full bg-[#24152F] hover:bg-[#341e44] text-[#D6B574] hover:text-white shadow-2xl border border-[#D6B574]/40 hover:scale-105 active:scale-95 transition-all"
          title="Bank & UPI Payment Details"
        >
          <QrCode size={18} />
        </button>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/919105731969?text=Hello%20Dr.%20Pooja%20Awasthi,%20I%20would%20like%20to%20book%20a%20consultation."
          target="_blank"
          rel="noopener noreferrer"
          title="Direct WhatsApp Consultation"
          className="px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs flex items-center gap-2 shadow-2xl border border-white/20 hover:scale-105 active:scale-95 transition-all"
        >
          <MessageSquare size={16} />
          <span className="hidden sm:inline">WhatsApp (₹5,100)</span>
        </a>

        {/* Back to Top */}
        <button
          type="button"
          onClick={scrollToTop}
          className="p-2.5 rounded-full bg-[#24152F]/90 hover:bg-[#24152F] text-white/80 hover:text-[#D6B574] shadow-xl border border-white/10 hover:scale-105 active:scale-95 transition-all"
          title="Scroll to Top"
        >
          <ArrowUp size={16} />
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

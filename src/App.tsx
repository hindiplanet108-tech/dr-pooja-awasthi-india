import React, { useState } from 'react';
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
import { MessageSquare, ArrowUp, QrCode } from 'lucide-react';
import { getTranslation } from './data/translations';

export default function App() {
  const [lang, setLang] = useState<string>('en');
  const [currentView, setCurrentView] = useState<'home' | 'tariff'>('home');
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [isBankUpiModalOpen, setIsBankUpiModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Vedic Numerology (₹5,100)');
  const t = getTranslation(lang);

  // SEO & Localization: Dynamically update HTML lang attribute and page title
  React.useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === 'hi') {
      document.title = 'डॉ. पूजा अवस्थी — आध्यात्मिक मार्गदर्शन | वैदिक अंकशास्त्र, टैरो एवं चक्र हीलिंग';
    } else {
      document.title = 'Dr. Pooja Awasthi — Spiritual Guidance | Vedic Numerology & Life Coaching';
    }
  }, [lang]);

  const scrollToSection = (id: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToSection('contact');
  };

  const handleOpenTariff = () => {
    setCurrentView('tariff');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FBF8F2] text-[#29242E] flex flex-col font-sans selection:bg-[#EAE2F4] selection:text-[#24152F] relative">
      {/* 1. Sticky Navigation with 22 Languages Modal Trigger, Tariff, & Bank details */}
      <Navbar
        lang={lang}
        onOpenLangModal={() => setIsLangModalOpen(true)}
        onBookClick={() => scrollToSection('contact')}
        onOpenTariff={handleOpenTariff}
        onOpenBankUpi={() => setIsBankUpiModalOpen(true)}
        onNavigate={(id) => scrollToSection(id)}
      />

      <main className="flex-grow">
        {currentView === 'tariff' ? (
          /* Dedicated Interactive 11 Healing Services Tariff & Rate Card View */
          <TariffView
            lang={lang}
            onBackToHome={handleBackToHome}
            onBookService={(srv) => {
              handleBackToHome();
              handleSelectServiceForBooking(srv);
            }}
            onOpenBrandSettings={() => setIsBankUpiModalOpen(true)}
          />
        ) : (
          <>
            {/* 2. Hero Section with Animated Celestial Starfield & High-Res Portrait */}
            <Hero
              lang={lang}
              onBookClick={() => scrollToSection('contact')}
              onExploreClick={() => scrollToSection('services')}
              onOpenTariff={handleOpenTariff}
              onCalculateVedic={() => scrollToSection('calculator')}
            />

            {/* 3. About Section: Founder Vision, Biography & 3 Pillars */}
            <AboutSection
              lang={lang}
              onBookClick={() => scrollToSection('contact')}
            />

            {/* 4. Services Section with Animated 7 Chakras Visualizer & 11-Service Catalog */}
            <ServicesSection
              lang={lang}
              onSelectServiceForBooking={handleSelectServiceForBooking}
            />

            {/* 5. Interactive Vedic Numerology Calculator (Mulank & Bhagyank) */}
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

            {/* 7. 26 National Awards, Conclaves & Honors */}
            <AwardsSection lang={lang} />

            {/* 8. Consultation Charges (₹5,100) & 4-Step Process */}
            <PricingConsultationSection
              lang={lang}
              onBookClick={() => scrollToSection('contact')}
              onOpenTariff={handleOpenTariff}
              onOpenBankUpi={() => setIsBankUpiModalOpen(true)}
            />

            {/* 9. Frequently Asked Questions (FAQ) Accordion */}
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
        onOpenTariff={handleOpenTariff}
        onOpenBankUpi={() => setIsBankUpiModalOpen(true)}
      />

      {/* Multi-Language Selector Modal (11 National & 11 International) */}
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

      {/* Floating Action Quick Sanctuary Affordance */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        {/* Quick Tariff Card Button */}
        {currentView !== 'tariff' && (
          <button
            type="button"
            onClick={handleOpenTariff}
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

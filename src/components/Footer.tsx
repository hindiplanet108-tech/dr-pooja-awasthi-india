import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, ShieldCheck, Heart, X } from 'lucide-react';
import { getTranslation } from '../data/translations';

interface FooterProps {
  lang: string;
  onOpenTariff?: () => void;
  onOpenBankUpi?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenTariff, onOpenBankUpi }) => {
  const [showLegalModal, setShowLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const t = getTranslation(lang);

  return (
    <footer className="bg-[#180c1f] text-[#EAE2F4] pt-16 pb-12 border-t border-[#D6B574]/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full border border-[#D6B574]/50 flex items-center justify-center bg-[#6941A5]/30">
                <span className="font-cinzel text-xs text-[#D6B574] font-bold">PA</span>
              </div>
              <span className="font-cinzel text-xl font-semibold tracking-wider text-white">
                {t.brandTitle}
              </span>
            </div>

            <p className="font-cormorant text-lg text-[#D6B574] italic">
              {t.tagline}
            </p>

            <p className="text-xs text-[#EAE2F4]/70 leading-relaxed max-w-sm font-light">
              {t.taglineSub}
            </p>
          </div>

          {/* Explore Services / प्रमुख सेवाएँ */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#D6B574]">
              {lang === 'hi' ? 'प्रमुख सेवाएँ' : 'Explore Services'}
            </h4>
            <ul className="space-y-2 text-xs text-[#EAE2F4]/80">
              <li>
                <a href="#about" className="hover:text-[#D6B574] transition-colors">
                  {t.aboutNav}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D6B574] transition-colors">
                  {lang === 'hi' ? '११ पावन हीलिंग सेवाएँ' : t.servicesNav}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#D6B574] transition-colors">
                  {lang === 'hi' ? 'जन्मतिथि डिकोडर (मूलांक, भाग्यांक व कुआ)' : 'Vedic Numbers Calculator'}
                </a>
              </li>
              <li>
                <a href="#tarot" className="hover:text-[#D6B574] transition-colors">
                  {lang === 'hi' ? 'दैनिक टैरो कार्ड मार्गदर्शन' : 'Daily Tarot Oracle'}
                </a>
              </li>
              {onOpenTariff && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenTariff}
                    className="hover:text-[#D6B574] transition-colors text-left font-medium text-[#D6B574]"
                  >
                    ★ {lang === 'hi' ? '११ विशेष हीलिंग दक्षिणा सूची' : '11 Healing Services Tariff'}
                  </button>
                </li>
              )}
              {onOpenBankUpi && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenBankUpi}
                    className="hover:text-[#D6B574] transition-colors text-left"
                  >
                    {lang === 'hi' ? 'बैंक खाता एवं UPI विवरण' : 'Bank & UPI Details'}
                  </button>
                </li>
              )}
              <li>
                <a href="#honors" className="hover:text-[#D6B574] transition-colors">
                  {lang === 'hi' ? 'प्रमाण-पत्र एवं सम्मान (40+)' : 'Honors & Gallery (40+)'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D6B574] transition-colors">
                  {lang === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Connection / सीधा संपर्क */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#D6B574]">
              {lang === 'hi' ? 'सीधा संपर्क' : 'Direct Connection'}
            </h4>
            <div className="space-y-2.5 text-xs text-[#EAE2F4]/80">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#D6B574] block">
                  {lang === 'hi' ? 'व्हाट्सएप / कॉल व UPI:' : 'WhatsApp / Call & UPI:'}
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <MessageSquare size={14} className="text-[#25D366]" />
                  <a
                    href="https://wa.me/919105731969"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D6B574] transition-colors font-mono font-bold text-white text-sm"
                  >
                    +91 91057 31969
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Mail size={14} className="text-[#D6B574]" />
                <a
                  href="mailto:astro.poojaofficial@gmail.com"
                  className="hover:text-[#D6B574] transition-colors"
                >
                  astro.poojaofficial@gmail.com
                </a>
              </div>

              <p className="text-[11px] text-[#EAE2F4]/70 pt-1">
                {lang === 'hi'
                  ? 'परामर्श समय: प्रातः 10:00 से सायं 7:00 बजे (सोम - शनि) • ऑनलाइन परामर्श'
                  : 'Consultation Hours: 10:00 AM – 7:00 PM IST (Mon - Sat) • Online Consultations'}
              </p>

              <div className="pt-2">
                <a
                  href="https://wa.me/919105731969?text=Namaste%20Dr.%20Pooja%20Awasthi,%20I%20would%20like%20to%20book%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D6B574] text-[#24152F] font-bold text-xs uppercase tracking-wider hover:bg-[#edd8a6] transition-colors shadow-md"
                >
                  <span>{lang === 'hi' ? 'परामर्श बुक करें' : 'Book Consultation'}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Ethical Disclaimer */}
        <div className="pt-8 pb-6 border-b border-white/5 text-[11px] text-[#EAE2F4]/60 leading-relaxed font-light">
          <p>
            <span className="font-semibold text-[#D6B574]">
              {lang === 'hi' ? 'नैतिक एवं विधिक सूचना: ' : 'Ethical & Legal Notice: '}
            </span>
            {t.disclaimer}
          </p>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EAE2F4]/60">
          <p>{lang === 'hi' ? `© ${new Date().getFullYear()} ${t.brandTitle}। सर्वाधिकार सुरक्षित।` : `© ${new Date().getFullYear()} ${t.brandTitle}. All rights reserved.`}</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setShowLegalModal('privacy')}
              className="hover:text-[#D6B574] transition-colors underline-offset-4 hover:underline"
            >
              {t.privacyPolicy}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setShowLegalModal('terms')}
              className="hover:text-[#D6B574] transition-colors underline-offset-4 hover:underline"
            >
              {t.terms}
            </button>
          </div>
        </div>

      </div>

      {/* Privacy / Terms Modal */}
      {showLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#24152F] text-white rounded-2xl border border-[#D6B574]/40 p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-cinzel text-lg font-bold text-[#D6B574]">
                {showLegalModal === 'privacy' ? t.privacyPolicy : t.terms}
              </h3>
              <button
                type="button"
                onClick={() => setShowLegalModal(null)}
                className="p-1 rounded hover:bg-white/10 text-[#EAE2F4]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#EAE2F4]/80 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {showLegalModal === 'privacy' ? (
                <>
                  <p className="font-semibold text-white">
                    1. Complete Session Discretion:
                  </p>
                  <p>
                    All personal birth details, conversations, questions, and circumstances shared during consultations with Dr. Pooja Awasthi are kept in strict confidentiality and never shared with third parties.
                  </p>
                  <p className="font-semibold text-white">
                    2. Data Retention:
                  </p>
                  <p>
                    Coordinates submitted through this website are utilized solely to contact you to schedule your requested appointment.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-white">
                    1. Appointment Protocol:
                  </p>
                  <p>
                    Consultations are conducted online via private video or voice call at pre-scheduled slots. Rescheduling requests must be conveyed at least 24 hours in advance via WhatsApp.
                  </p>
                  <p className="font-semibold text-white">
                    2. Consultation Fees:
                  </p>
                  <p>
                    Standard consultation charges (₹5,100) cover the dedicated 60-minute time and individualized Vedic analysis of Dr. Pooja Awasthi.
                  </p>
                </>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setShowLegalModal(null)}
                className="px-4 py-2 bg-[#D6B574] hover:bg-[#e4ca8c] text-[#24152F] text-xs font-bold rounded transition-colors"
              >
                Acknowledge
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

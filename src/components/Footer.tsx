import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, ShieldCheck, Heart, X, Star, CreditCard, FileText, Sparkles, QrCode } from 'lucide-react';
import { getTranslation } from '../data/translations';
import { LiveTrafficCounter } from './LiveTrafficCounter';

interface FooterProps {
  lang: string;
  onOpenTariff?: () => void;
  onOpenBankUpi?: () => void;
  onOpenAdmin?: () => void;
  onOpenDynamicPage?: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenTariff,
  onOpenBankUpi,
  onOpenAdmin,
  onOpenDynamicPage,
}) => {
  const [showLegalModal, setShowLegalModal] = useState<'privacy' | 'terms' | null>(null);
  const t = getTranslation(lang);

  return (
    <footer className="bg-[#F4F1EA] text-[#1E162B] pt-10 pb-8 border-t border-[#DEC38C] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🌟 PROMINENT HIGHLIGHTED SECTION: Fee Details & Bank/UPI Payment Portal */}
        <div className="mb-8 p-5 sm:p-6 rounded-3xl bg-white border-2 border-[#DEC38C] shadow-lg relative overflow-hidden">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B48228] animate-ping" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#7A5311]">
              {lang === 'hi' ? 'महत्वपूर्ण आधिकारिक जानकारी एवं त्वरित सेवा केंद्र' : 'Important Official Portals & Quick Actions'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
            {/* Box 1: 11 Specialized Healing & Correction Services + All 16 Divine Services */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#FBF5E6] border-2 border-[#DEC38C] hover:border-[#B48228] shadow-sm transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#7A5311] text-xs font-bold uppercase tracking-wider border border-[#DEC38C]">
                    <Sparkles size={12} className="text-[#B48228]" />
                    <span>{lang === 'hi' ? '11 विशिष्ट हीलिंग एवं सुधार सेवाएं' : '11 Specialized Healing & Correction Services'}</span>
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#522B8A] text-white font-bold font-rupee text-xs shadow-xs tracking-tight">
                    {lang === 'hi' ? 'सभी 16 दिव्य सेवाएं फीस' : 'All 16 Divine Services Fees'}
                  </span>
                </div>

                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#1E162B] group-hover:text-[#522B8A] transition-colors flex items-center gap-2">
                  <FileText size={20} className="text-[#B48228] shrink-0" />
                  <span>
                    {lang === 'hi'
                      ? '11 विशिष्ट हीलिंग एवं सुधार सेवाएं — परामर्श एवं हीलिंग सेवाएं फीस'
                      : '11 Specialized Healing & Correction Services — Consultancy Fees'}
                  </span>
                </h3>

                <p className="text-xs text-[#4A4356] leading-relaxed">
                  {lang === 'hi'
                    ? '11 विशिष्ट हीलिंग एवं सुधार सेवाओं तथा मुख्य वैदिक परामर्शों की एकीकृत, पारदर्शी व आधिकारिक शुल्क दर सूची (सभी 16 दिव्य सेवाएं)। पूर्ण गोपनीयता व प्रामाणिक वैदिक मार्गदर्शन।'
                    : 'Complete official rate card and transparent fee breakdown merging 11 Specialized Healing & Correction Services with Core Consultations — presenting all 16 Divine Services.'}
                </p>
              </div>

              {onOpenTariff && (
                <div className="pt-5 mt-3 border-t border-[#DEC38C]/50">
                  <button
                    type="button"
                    onClick={onOpenTariff}
                    className="w-full sm:w-auto h-11 inline-flex items-center justify-center gap-2 px-6 rounded-xl bg-[#522B8A] hover:bg-[#412070] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    <span>
                      {lang === 'hi'
                        ? '★ 11 विशिष्ट हीलिंग सेवाएं व फीस कार्ड खोलें (सभी 16 दिव्य सेवाएं)'
                        : '★ 11 Specialized Healing Services & Fees (All 16 Divine Services)'}
                    </span>
                  </button>
                </div>
              )}
            </div>

            {/* Box 2: Bank Account & UPI Payment Details */}
            <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-300 hover:border-emerald-500 shadow-sm transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-300">
                    <ShieldCheck size={12} className="text-emerald-700" />
                    <span>{lang === 'hi' ? 'सत्यापित आधिकारिक भुगतान' : 'Verified Payment'}</span>
                  </span>
                  <span className="px-3 py-1 rounded-md bg-emerald-700 text-white font-bold text-xs shadow-xs uppercase tracking-wider">
                    UPI QR Code
                  </span>
                </div>

                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#1E162B] group-hover:text-emerald-900 transition-colors flex items-center gap-2">
                  <CreditCard size={20} className="text-emerald-700 shrink-0" />
                  <span>{lang === 'hi' ? 'बैंक खाता एवं सीधे UPI भुगतान विवरण' : 'Bank & UPI Payment Details'}</span>
                </h3>

                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs space-y-1.5 shadow-2xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-emerald-800 text-[11px] font-medium">UPI ID (GooglePay / PhonePe / Paytm):</span>
                    <strong className="text-[#522B8A] font-mono font-bold select-all text-sm">9105731969@upi</strong>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[#5D556A] text-[11px]">खाताधारक (Beneficiary):</span>
                    <strong className="text-[#1E162B] font-semibold">Pooja Awasthi • SBI Dehradun</strong>
                  </div>
                </div>
              </div>

              {onOpenBankUpi && (
                <div className="pt-5 mt-3 border-t border-emerald-200 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={onOpenBankUpi}
                    className="w-full sm:w-auto h-11 inline-flex items-center justify-center gap-2 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    <QrCode size={14} className="text-white" />
                    <span>{lang === 'hi' ? '📷 बैंक विवरण व QR कोड देखें' : '📷 View Bank & UPI QR'}</span>
                  </button>
                  <a
                    href="https://wa.me/919105731969?text=Namaste%20Dr.%20Pooja%20Awasthi,%20I%20have%20transferred%20the%20fee."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-800 hover:text-emerald-950 underline font-semibold transition-colors"
                  >
                    {lang === 'hi' ? 'रसीद व्हाट्सएप पर भेजें →' : 'Send Payment Receipt →'}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-[#DEC38C]/50">
          
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full border border-[#DEC38C] flex items-center justify-center bg-white shadow-2xs">
                <span className="font-cinzel text-xs text-[#522B8A] font-bold">PA</span>
              </div>
              <span className="font-cinzel text-xl font-bold tracking-wider text-[#1E162B]">
                {t.brandTitle}
              </span>
            </div>

            <p className="font-cormorant text-lg text-[#7A5311] italic font-medium">
              {t.tagline}
            </p>

            <p className="text-xs text-[#4A4356] leading-relaxed max-w-sm">
              {t.taglineSub}
            </p>
          </div>

          {/* Explore Services / प्रमुख सेवाएँ */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#7A5311]">
              {lang === 'hi' ? 'प्रमुख सेवाएँ' : 'Explore Services'}
            </h4>
            <ul className="space-y-2 text-xs text-[#4A4356]">
              <li>
                <a href="#about" className="hover:text-[#522B8A] transition-colors">
                  {t.aboutNav}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#522B8A] transition-colors">
                  {lang === 'hi' ? '11 मुख्य हीलिंग व परामर्श सेवाएँ' : t.servicesNav}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#522B8A] transition-colors">
                  {lang === 'hi' ? 'जन्मतिथि डिकोडर (मूलांक, भाग्यांक व कुआ अंक)' : 'Vedic Numbers Calculator'}
                </a>
              </li>
              <li>
                <a href="#tarot" className="hover:text-[#522B8A] transition-colors">
                  {lang === 'hi' ? 'दैनिक टैरो कार्ड मार्गदर्शन' : 'Daily Tarot Oracle'}
                </a>
              </li>
              {onOpenTariff && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenTariff}
                    className="w-full text-left py-2 px-3 rounded-xl bg-[#FBF5E6] hover:bg-[#F5E8C8] text-[#7A5311] font-bold border border-[#DEC38C] flex items-center justify-between text-xs transition-all shadow-2xs cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <Sparkles size={13} className="text-[#B48228] shrink-0" />
                      <span>{lang === 'hi' ? '★ 11 विशिष्ट हीलिंग सेवाएं (16 दिव्य सेवाएं फीस)' : '11 Specialized Services (16 Divine Services Fees)'}</span>
                    </span>
                    <span className="text-[10px] bg-[#522B8A] text-white font-bold font-rupee px-1.5 py-0.5 rounded shadow-2xs tracking-tight shrink-0">
                      16 सेवाएं
                    </span>
                  </button>
                </li>
              )}
              {onOpenBankUpi && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenBankUpi}
                    className="w-full text-left py-1.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold border border-emerald-300 flex items-center justify-between text-xs transition-all shadow-2xs cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      <QrCode size={13} className="text-emerald-700 shrink-0" />
                      <span>{lang === 'hi' ? '💳 बैंक खाता एवं UPI विवरण' : 'Bank & UPI Details'}</span>
                    </span>
                    <span className="text-[10px] bg-emerald-700 text-white font-bold px-1.5 py-0.5 rounded shadow-2xs uppercase shrink-0">
                      QR कोड
                    </span>
                  </button>
                </li>
              )}
              <li>
                <a href="#honors" className="hover:text-[#522B8A] transition-colors">
                  {lang === 'hi' ? 'प्रमाण-पत्र एवं सम्मान (40+)' : 'Honors & Gallery (40+)'}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#522B8A] transition-colors">
                  {lang === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
                </a>
              </li>
              <li>
                <a
                  href="#client-reviews-stories"
                  className="hover:text-[#522B8A] transition-colors flex items-center gap-1.5 font-semibold text-[#7A5311]"
                  title="Client Reviews & Stories"
                >
                  <Star size={12} fill="#B48228" className="text-[#B48228] shrink-0" />
                  <span>★ {lang === 'hi' ? 'ग्राहकों के अनुभव व समीक्षाएं (Reviews)' : 'Client Reviews & Stories'}</span>
                </a>
              </li>
              {onOpenDynamicPage && (
                <>
                  <li>
                    <button
                      type="button"
                      onClick={() => onOpenDynamicPage('kundali-analysis')}
                      className="hover:text-[#522B8A] transition-colors text-left cursor-pointer"
                    >
                      {lang === 'hi' ? 'कुण्डली विश्लेषण एवं दोष निवारण' : 'Vedic Kundali Analysis'}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onOpenDynamicPage('rudraksha-ratna-therapy')}
                      className="hover:text-[#522B8A] transition-colors text-left cursor-pointer"
                    >
                      {lang === 'hi' ? 'रुद्राक्ष एवं सिद्ध रत्न चिकित्सा' : 'Rudraksha & Gemstone Therapy'}
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Direct Connection / सीधा संपर्क */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-cinzel text-xs font-bold uppercase tracking-wider text-[#7A5311]">
              {lang === 'hi' ? 'सीधा संपर्क' : 'Direct Connection'}
            </h4>
            <div className="space-y-2.5 text-xs text-[#4A4356]">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#7A5311] block">
                  {lang === 'hi' ? 'व्हाट्सएप / कॉल व UPI:' : 'WhatsApp / Call & UPI:'}
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <MessageSquare size={14} className="text-emerald-700" />
                  <a
                    href="https://wa.me/919105731969"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#522B8A] transition-colors font-mono font-bold text-[#1E162B] text-sm"
                  >
                    +91 91057 31969
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Mail size={14} className="text-[#B48228]" />
                <a
                  href="mailto:astro.poojaofficial@gmail.com"
                  className="hover:text-[#522B8A] transition-colors"
                >
                  astro.poojaofficial@gmail.com
                </a>
              </div>

              <p className="text-[11px] text-[#5D556A] pt-1">
                {lang === 'hi'
                  ? 'परामर्श समय: प्रातः 10:00 से सायं 7:00 बजे (सोम - शनि) • ऑनलाइन परामर्श'
                  : 'Consultation Hours: 10:00 AM – 7:00 PM IST (Mon - Sat) • Online Consultations'}
              </p>

              <div className="pt-2">
                <a
                  href="https://wa.me/919105731969?text=Namaste%20Dr.%20Pooja%20Awasthi,%20I%20would%20like%20to%20book%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-10 px-5 rounded-xl bg-[#522B8A] hover:bg-[#412070] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>{lang === 'hi' ? 'परामर्श बुक करें' : 'Book Consultation'}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Actual Live Visitors & Traffic Counter (Starts from 1,005) */}
        <LiveTrafficCounter lang={lang} variant="footer" />

        {/* Ethical Disclaimer */}
        <div className="pt-8 pb-6 border-b border-[#DEC38C]/40 text-[11px] text-[#5D556A] leading-relaxed">
          <p>
            <span className="font-semibold text-[#7A5311]">
              {lang === 'hi' ? 'नैतिक एवं विधिक सूचना: ' : 'Ethical & Legal Notice: '}
            </span>
            {t.disclaimer}
          </p>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5D556A]">
          <p>{lang === 'hi' ? `© ${new Date().getFullYear()} ${t.brandTitle}। सर्वाधिकार सुरक्षित।` : `© ${new Date().getFullYear()} ${t.brandTitle}. All rights reserved.`}</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setShowLegalModal('privacy')}
              className="hover:text-[#522B8A] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              {t.privacyPolicy}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => setShowLegalModal('terms')}
              className="hover:text-[#522B8A] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              {t.terms}
            </button>
            {onOpenAdmin && (
              <>
                <span aria-hidden="true">·</span>
                <button
                  type="button"
                  onClick={onOpenAdmin}
                  className="text-[#522B8A] hover:text-[#412070] transition-colors flex items-center gap-1 font-semibold cursor-pointer"
                  title="व्यवस्थापक CMS पैनल (Admin Panel)"
                >
                  <span>🔐 Admin CMS</span>
                </button>
              </>
            )}
          </div>
        </div>

      </div>

      {/* Privacy / Terms Modal */}
      {showLegalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E162B]/65 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white text-[#1E162B] rounded-2xl border border-[#E6DFD3] shadow-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-[#EFECE6] pb-3">
              <h3 className="font-cinzel text-lg font-bold text-[#1E162B]">
                {showLegalModal === 'privacy' ? t.privacyPolicy : t.terms}
              </h3>
              <button
                type="button"
                onClick={() => setShowLegalModal(null)}
                className="p-1.5 rounded-lg hover:bg-[#FAF8F5] text-[#5D556A] cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3 text-xs text-[#4A4356] leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {showLegalModal === 'privacy' ? (
                <>
                  <p className="font-semibold text-[#1E162B]">
                    1. Complete Session Discretion:
                  </p>
                  <p>
                    All personal birth details, conversations, questions, and circumstances shared during consultations with Dr. Pooja Awasthi are kept in strict confidentiality and never shared with third parties.
                  </p>
                  <p className="font-semibold text-[#1E162B]">
                    2. Data Retention:
                  </p>
                  <p>
                    Coordinates submitted through this website are utilized solely to contact you to schedule your requested appointment.
                  </p>
                </>
              ) : (
                <>
                  <p className="font-semibold text-[#1E162B]">
                    1. Appointment Protocol:
                  </p>
                  <p>
                    Consultations are conducted online via private video or voice call at pre-scheduled slots. Rescheduling requests must be conveyed at least 24 hours in advance via WhatsApp.
                  </p>
                  <p className="font-semibold text-[#1E162B]">
                    2. Consultation Fees:
                  </p>
                  <p>
                    Standard consultation charges (<span className="font-rupee font-bold">₹5,100</span>) cover the dedicated 60-minute time and individualized Vedic analysis of Dr. Pooja Awasthi.
                  </p>
                </>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setShowLegalModal(null)}
                className="h-9 px-5 bg-[#522B8A] hover:bg-[#412070] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
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

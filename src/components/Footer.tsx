import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, ShieldCheck, Heart, X, Star, CreditCard, FileText, Sparkles, QrCode } from 'lucide-react';
import { getTranslation } from '../data/translations';

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
    <footer className="bg-[#180c1f] text-[#EAE2F4] pt-14 pb-12 border-t border-[#D6B574]/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🌟 PROMINENT HIGHLIGHTED SECTION: Fee Details & Bank/UPI Payment Portal */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#24152F] via-[#2d183d] to-[#1c0f26] border-2 border-[#D6B574]/60 shadow-[0_4px_25px_rgba(214,181,116,0.15)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6B574]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#D6B574] animate-ping" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D6B574]">
              {lang === 'hi' ? 'महत्वपूर्ण आधिकारिक जानकारी एवं त्वरित सेवा केंद्र' : 'Important Official Portals & Quick Actions'}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
            {/* Box 1: 11 Specialized Healing & Correction Services + All 16 Divine Services */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.06] border-2 border-[#D6B574]/70 hover:border-[#D6B574] shadow-lg transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D6B574]/20 text-[#F5C242] text-xs font-bold uppercase tracking-wider border border-[#D6B574]/40">
                    <Sparkles size={12} className="text-[#F5C242]" />
                    <span>{lang === 'hi' ? '11 विशिष्ट हीलिंग एवं सुधार सेवाएं' : '11 Specialized Healing & Correction Services'}</span>
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#D6B574] text-[#1c0f26] font-black font-rupee text-xs shadow-md tracking-tight">
                    {lang === 'hi' ? 'सभी 16 दिव्य सेवाएं फीस' : 'All 16 Divine Services Fees'}
                  </span>
                </div>

                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white group-hover:text-[#F5C242] transition-colors flex items-center gap-2">
                  <FileText size={20} className="text-[#D6B574] shrink-0" />
                  <span>
                    {lang === 'hi'
                      ? '11 विशिष्ट हीलिंग एवं सुधार सेवाएं — परामर्श एवं हीलिंग सेवाएं फीस'
                      : '11 Specialized Healing & Correction Services — Consultancy Fees'}
                  </span>
                </h3>

                <p className="text-xs text-[#EAE2F4]/85 leading-relaxed font-light">
                  {lang === 'hi'
                    ? '11 विशिष्ट हीलिंग एवं सुधार सेवाओं तथा मुख्य वैदिक परामर्शों की एकीकृत, पारदर्शी व आधिकारिक शुल्क दर सूची (सभी 16 दिव्य सेवाएं)। पूर्ण गोपनीयता व प्रामाणिक वैदिक मार्गदर्शन।'
                    : 'Complete official rate card and transparent fee breakdown merging 11 Specialized Healing & Correction Services with Core Consultations — presenting all 16 Divine Services.'}
                </p>
              </div>

              {onOpenTariff && (
                <div className="pt-5 mt-3 border-t border-white/10">
                  <button
                    type="button"
                    onClick={onOpenTariff}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#D6B574] via-[#F5C242] to-[#D6B574] text-[#1c0f26] font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-xl cursor-pointer"
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
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-950/60 via-teal-950/40 to-[#24152F] border-2 border-emerald-400/80 hover:border-emerald-300 shadow-lg transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider border border-emerald-500/40">
                    <ShieldCheck size={12} className="text-emerald-400" />
                    <span>{lang === 'hi' ? 'सत्यापित आधिकारिक भुगतान' : 'Verified Payment'}</span>
                  </span>
                  <span className="px-3 py-1 rounded-md bg-emerald-500 text-[#12281a] font-black text-xs shadow-md uppercase tracking-wider">
                    UPI QR Code
                  </span>
                </div>

                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-2">
                  <CreditCard size={20} className="text-emerald-400 shrink-0" />
                  <span>{lang === 'hi' ? 'बैंक खाता एवं सीधे UPI भुगतान विवरण' : 'Bank & UPI Payment Details'}</span>
                </h3>

                <div className="p-3 rounded-xl bg-black/50 border border-emerald-500/30 text-xs space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-300 text-[11px]">UPI ID (GooglePay / PhonePe / Paytm):</span>
                    <strong className="text-[#F5C242] font-mono font-bold select-all text-sm">9105731969@upi</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 text-[11px]">खाताधारक (Beneficiary):</span>
                    <strong className="text-white font-medium">Pooja Awasthi • SBI Dehradun</strong>
                  </div>
                </div>
              </div>

              {onOpenBankUpi && (
                <div className="pt-5 mt-3 border-t border-emerald-500/20 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={onOpenBankUpi}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider active:scale-95 transition-all shadow-xl cursor-pointer"
                  >
                    <QrCode size={14} className="text-white" />
                    <span>{lang === 'hi' ? '📷 बैंक विवरण व QR कोड देखें' : '📷 View Bank & UPI QR'}</span>
                  </button>
                  <a
                    href="https://wa.me/919105731969?text=Namaste%20Dr.%20Pooja%20Awasthi,%20I%20have%20transferred%20the%20fee."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-300 hover:text-white underline font-semibold transition-colors"
                  >
                    {lang === 'hi' ? 'रसीद व्हाट्सएप पर भेजें →' : 'Send Payment Receipt →'}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

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
                  {lang === 'hi' ? '11 मुख्य हीलिंग व परामर्श सेवाएँ' : t.servicesNav}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#D6B574] transition-colors">
                  {lang === 'hi' ? 'जन्मतिथि डिकोडर (मूलांक, भाग्यांक व कुआ अंक)' : 'Vedic Numbers Calculator'}
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
                    className="w-full text-left py-2 px-3 rounded-lg bg-[#D6B574]/15 hover:bg-[#D6B574]/25 text-[#F5C242] font-bold border border-[#D6B574]/60 flex items-center justify-between text-xs transition-all shadow-xs"
                  >
                    <span className="flex items-center gap-1.5">
                      <Sparkles size={13} className="text-[#F5C242] shrink-0" />
                      <span>{lang === 'hi' ? '★ 11 विशिष्ट हीलिंग सेवाएं (16 दिव्य सेवाएं फीस)' : '11 Specialized Services (16 Divine Services Fees)'}</span>
                    </span>
                    <span className="text-[10px] bg-[#D6B574] text-[#1c0f26] font-black font-rupee px-1.5 py-0.5 rounded shadow-xs tracking-tight">
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
                    className="w-full text-left py-1.5 px-3 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-400/60 flex items-center justify-between text-xs transition-all shadow-xs"
                  >
                    <span className="flex items-center gap-1.5">
                      <QrCode size={13} className="text-emerald-400 shrink-0" />
                      <span>{lang === 'hi' ? '💳 बैंक खाता एवं UPI विवरण' : 'Bank & UPI Details'}</span>
                    </span>
                    <span className="text-[10px] bg-emerald-500 text-[#12281a] font-black px-1.5 py-0.5 rounded shadow-xs uppercase">
                      QR कोड
                    </span>
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
              <li>
                <a
                  href="#client-reviews-stories"
                  className="hover:text-[#D6B574] transition-colors flex items-center gap-1.5 font-semibold text-[#D6B574]"
                  title="Client Reviews & Stories"
                >
                  <Star size={12} fill="#D6B574" className="text-[#D6B574] shrink-0" />
                  <span>★ {lang === 'hi' ? 'ग्राहकों के अनुभव व समीक्षाएं (Reviews)' : 'Client Reviews & Stories'}</span>
                </a>
              </li>
              {onOpenDynamicPage && (
                <>
                  <li>
                    <button
                      type="button"
                      onClick={() => onOpenDynamicPage('kundali-analysis')}
                      className="hover:text-[#D6B574] transition-colors text-left"
                    >
                      {lang === 'hi' ? 'कुण्डली विश्लेषण एवं दोष निवारण' : 'Vedic Kundali Analysis'}
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => onOpenDynamicPage('rudraksha-ratna-therapy')}
                      className="hover:text-[#D6B574] transition-colors text-left"
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
            {onOpenAdmin && (
              <>
                <span aria-hidden="true">·</span>
                <button
                  type="button"
                  onClick={onOpenAdmin}
                  className="text-[#D6B574]/80 hover:text-[#D6B574] transition-colors flex items-center gap-1 font-semibold"
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

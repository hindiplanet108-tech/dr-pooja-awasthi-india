import React, { useState, useRef } from 'react';
import { ALL_16_DIVINE_SERVICES, DivineServiceItem } from '../data/servicesData';
import { useSiteContent } from '../utils/siteContentContext';
import {
  ArrowLeft,
  Share2,
  Printer,
  MessageSquare,
  ShieldCheck,
  Check,
  Copy,
  QrCode,
  Building2,
  Smartphone,
  Upload,
  Lock,
  Clock,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import poojaAuthenticPhoto from '../assets/images/pooja_awasthi_portrait.jpeg';
import { SEOHead } from './SEOHead';
import { Breadcrumb } from './Breadcrumb';
import { SocialShare } from './SocialShare';

interface TariffViewProps {
  onBackToHome: () => void;
  onBookService: (serviceName: string) => void;
  onOpenBrandSettings: () => void;
  lang?: string;
}

export const TariffView: React.FC<TariffViewProps> = ({
  onBackToHome,
  onBookService,
  onOpenBrandSettings,
  lang = 'en'
}) => {
  const { siteContent } = useSiteContent();
  const bankInfo = siteContent?.bankUpi;
  const [tariffLang, setTariffLang] = useState<'en' | 'hi'>(lang === 'hi' ? 'hi' : 'en');
  const [filter, setFilter] = useState<'all' | 'specialized11' | 'core' | 'healing' | 'numerology' | 'therapy' | 'regression'>('all');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [customQrImage, setCustomQrImage] = useState<string | null>(null);
  const qrInputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setTariffLang(lang === 'hi' ? 'hi' : 'en');
  }, [lang]);

  const bankDetails = {
    holder: bankInfo?.account_name || 'Pooja Awasthi',
    bank: bankInfo?.bank_name || 'State Bank of India',
    accNumber: bankInfo?.account_number || '39876543210',
    ifsc: bankInfo?.ifsc_code || 'SBIN0001234',
    type: 'Savings Account',
    branch: bankInfo?.branch || 'Dehradun Main Branch, Uttarakhand',
    upiId: bankInfo?.upi_id || '9105731969@upi',
    phone: siteContent?.contact?.phone || '+91 91057 31969',
    qrImage: bankInfo?.qr_code_image || 'https://api.qrserver.com/v1/create-qr-code/?size=350x350&data=upi%3A%2F%2Fpay%3Fpa%3D9105731969%40upi%26pn%3DPooja%20Awasthi%26cu%3DINR'
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  const [shareSuccess, setShareSuccess] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Dr. Pooja Awasthi — Spiritual Guidance Tariff',
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setShareSuccess(true);
      setTimeout(() => setShareSuccess(false), 3000);
    }
  };

  const handleQrUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomQrImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const currentDivineServices: DivineServiceItem[] = ALL_16_DIVINE_SERVICES;

  const filteredServices = currentDivineServices.filter((item) => {
    if (filter === 'specialized11') return item.isSpecialized11;
    if (filter === 'core') return item.category === 'core';
    if (filter === 'healing') return item.category === 'healing';
    if (filter === 'numerology') return item.category === 'numerology';
    if (filter === 'therapy') return item.category === 'therapy';
    if (filter === 'regression') return item.category === 'regression';
    return true; // 'all'
  });

  const tariffTitle = tariffLang === 'hi'
    ? '11 विशिष्ट हीलिंग एवं सुधार सेवाएं + परामर्श शुल्क (सभी 16 दिव्य सेवाएं) | डॉ. पूजा अवस्थी'
    : '11 Specialized Healing & Correction Services + Consultancy Fees (All 16 Divine Services) | Dr. Pooja Awasthi';
  const tariffDesc = tariffLang === 'hi'
    ? '11 विशिष्ट हीलिंग एवं सुधार सेवाओं तथा सभी 16 दिव्य परामर्शों की आधिकारिक शुल्क सूची (Tariff Card)। निश्चित परामर्श ₹5,100, पारदर्शी दरें, बैंक व UPI विवरण।'
    : 'Official Tariff Card for 11 Specialized Healing & Correction Services + Consultancy Fees merging All 16 Divine Services by Dr. Pooja Awasthi.';

  return (
    <div className="min-h-screen bg-[#FBF8F2] text-[#29242E] pt-28 md:pt-32 pb-20">
      {/* Comprehensive SEO Head for Tariff & Rate Card */}
      <SEOHead
        title={tariffTitle}
        description={tariffDesc}
        canonical="https://dr-pooja-awasthi-india.netlify.app/tariff"
        keywords="डॉ पूजा अवस्थी शुल्क, वैदिक ज्योतिष टैरिफ, टैरो कार्ड फीस, चक्र हीलिंग चार्ज, Spiritual consultation charges"
        type="service"
        lang={tariffLang}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Control Bar with Breadcrumb and Language Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#EAE2F4]">
          <Breadcrumb
            items={[
              { label: tariffLang === 'hi' ? '11 विशिष्ट हीलिंग एवं सुधार सेवाएं + सभी 16 दिव्य सेवाएं फीस' : '11 Specialized Healing & Correction Services (All 16 Divine Services)' }
            ]}
            onNavigateHome={onBackToHome}
            lang={tariffLang}
          />

          <div className="flex flex-wrap items-center gap-2">
            {/* Bilingual View Toggle */}
            <div className="inline-flex rounded-lg border border-[#D6B574]/40 p-0.5 bg-white text-xs shadow-2xs">
              <button
                type="button"
                onClick={() => setTariffLang('en')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  tariffLang === 'en'
                    ? 'bg-[#24152F] text-[#D6B574]'
                    : 'text-[#29242E]/70 hover:text-[#24152F]'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setTariffLang('hi')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  tariffLang === 'hi'
                    ? 'bg-[#24152F] text-[#D6B574]'
                    : 'text-[#29242E]/70 hover:text-[#24152F]'
                }`}
              >
                हिन्दी
              </button>
            </div>

            <button
              type="button"
              onClick={handleShare}
              className="px-3.5 py-1.5 rounded-lg bg-white border border-[#EAE2F4] text-xs font-medium text-[#29242E]/80 hover:text-[#24152F] hover:border-[#D6B574] transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <Share2 size={13} />
              <span>{shareSuccess ? (tariffLang === 'hi' ? 'कॉपी हुआ!' : 'Copied!') : (tariffLang === 'hi' ? 'साझा करें' : 'Share')}</span>
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-lg bg-white border border-[#EAE2F4] text-xs font-medium text-[#29242E]/80 hover:text-[#24152F] hover:border-[#D6B574] transition-all flex items-center gap-1.5 shadow-2xs"
            >
              <Printer size={13} />
              <span>{tariffLang === 'hi' ? 'दर सूची प्रिंट करें' : 'Print Rate Card'}</span>
            </button>
            <a
              href="https://wa.me/919105731969?text=Hello%20Dr.%20Pooja%20Awasthi,%20I%20have%20an%20inquiry%20regarding%20the%20Consultancy%20Tariff."
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              <MessageSquare size={13} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Page Title & Subtitle - Merged 11 Specialized Services + Fees + All 16 Divine Services */}
        <div className="max-w-4xl mb-12 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#6941A5]/10 text-[#6941A5] border border-[#6941A5]/25">
              {tariffLang === 'hi' ? '11 विशिष्ट हीलिंग एवं सुधार सेवाएं' : '11 Specialized Healing & Correction Services'}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#D6B574]/20 text-[#855e14] border border-[#D6B574]/40 font-semibold">
              {tariffLang === 'hi' ? 'सभी 16 दिव्य सेवाएं' : 'All 16 Divine Services'}
            </span>
          </div>
          <h1 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-[#24152F] leading-tight">
            {tariffLang === 'hi'
              ? '11 विशिष्ट हीलिंग एवं सुधार सेवाएं — परामर्श एवं हीलिंग सेवाएं फीस (सभी 16 दिव्य सेवाएं)'
              : '11 Specialized Healing & Correction Services — Consultancy & Healing Services Fees (All 16 Divine Services)'}
          </h1>
          <p className="text-sm text-[#29242E]/75 leading-relaxed font-light">
            {tariffLang === 'hi'
              ? 'डॉ. पूजा अवस्थी की 11 विशिष्ट हीलिंग एवं सुधार सेवाओं तथा मुख्य वैदिक परामर्शों की एकीकृत, पारदर्शी व आधिकारिक शुल्क दर सूची (16 दिव्य सेवाएं)। पूर्ण गोपनीयता, पवित्र चेतना और गहन आध्यात्मिक ऊर्जा संतुलन के साथ व्यक्तिगत सत्र।'
              : 'Official integrated rate card and directory merging 11 Specialized Healing & Correction Services with Core Consultations — presenting all 16 Divine Services with clear fee transparency, duration, and direct booking.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#29242E]/70 font-medium">
            <span className="flex items-center gap-1">
              <Check size={14} className="text-[#6941A5]" />
              <span>{tariffLang === 'hi' ? '11 विशिष्ट हीलिंग व सुधार' : '11 Specialized Corrections'}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Check size={14} className="text-[#6941A5]" />
              <span>{tariffLang === 'hi' ? 'सभी 16 दिव्य सेवाएं शामिल' : 'All 16 Divine Services Merged'}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Check size={14} className="text-[#6941A5]" />
              <span>{tariffLang === 'hi' ? 'निश्चित फीस ₹5,100 से पारदर्शी दरें' : 'Fixed Fee ₹5,100 & Transparent Rates'}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Check size={14} className="text-[#6941A5]" />
              <span>{tariffLang === 'hi' ? 'UPI, QR व डायरेक्ट बैंक ट्रांसफर' : 'UPI, QR & Direct Bank Transfer'}</span>
            </span>
          </div>
        </div>

        {/* Most Popular Feature Card */}
        <div className="mb-16 rounded-3xl bg-gradient-to-r from-[#24152F] via-[#2a1738] to-[#1c0f26] text-white p-8 sm:p-10 border border-[#D6B574]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#6941A5]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 max-w-2xl">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#D6B574] shrink-0 shadow-xl aspect-square bg-[#24152F]">
                <img
                  src={poojaAuthenticPhoto}
                  alt="Dr. Pooja Awasthi"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/28.jpeg') target.src = '/28.jpeg';
                  }}
                />
              </div>

              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#D6B574] text-[#24152F] inline-block shadow-sm">
                  {tariffLang === 'hi' ? 'सर्वाधिक लोकप्रिय · व्यक्तिगत मार्गदर्शन' : 'Most Popular · 1-on-1 Guidance'}
                </span>
                <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-white">
                  {tariffLang === 'hi' ? 'व्यक्तिगत आध्यात्मिक व अंकशास्त्रीय परामर्श' : 'Personalized Spiritual Consultation'}
                </h2>
                <p className="text-sm text-[#EAE2F4]/85 leading-relaxed font-light">
                  {tariffLang === 'hi'
                    ? 'डॉ. पूजा अवस्थी के साथ 45-60 मिनट का गहन व्यक्तिगत सत्र, जिसमें आपके जीवन की उलझनों, मूलांक, भाग्यांक और ग्रह चक्रों का संपूर्ण विश्लेषण किया जाता है।'
                    : 'A personalized 1-on-1 consultation session dedicated to understanding your queries, life circumstances, and life path through Vedic wisdom with Dr. Pooja Awasthi.'}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-[#D6B574]">
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    <span>{tariffLang === 'hi' ? 'अवधि: 45-60 मिनट' : 'Duration: 45-60 mins'}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{tariffLang === 'hi' ? 'व्यक्तिगत विस्तृत विश्लेषण' : 'Personalized In-depth Analysis'}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 shrink-0 text-center lg:text-right space-y-3">
              <div>
                <span className="text-[11px] text-[#EAE2F4]/80 uppercase block font-semibold tracking-wider">
                  {tariffLang === 'hi' ? 'परामर्श शुल्क' : 'Consultancy Fee'}
                </span>
                <div className="font-rupee text-5xl font-black text-white tabular-nums drop-shadow-md flex items-baseline justify-center lg:justify-end gap-1 my-1">
                  <span className="font-black text-[#F5C242] text-4xl rupee-symbol select-none">
                    ₹
                  </span>
                  <span className="font-black text-[#F3E5AB] tracking-tight">5,100</span>
                </div>
                <span className="text-[11px] text-[#EAE2F4]/80 block font-medium">
                  {tariffLang === 'hi' ? 'प्रति सत्र (वीडियो / ऑडियो कॉल)' : 'Per session (Virtual / Telephonic)'}
                </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row lg:flex-col gap-2">
                <button
                  type="button"
                  onClick={() => onBookService('Personalized Spiritual Consultation (₹5,100)')}
                  className="px-6 py-3 bg-[#D6B574] hover:bg-[#e4ca8c] text-[#24152F] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
                >
                  {tariffLang === 'hi' ? 'परामर्श सत्र प्राप्त करें' : 'Book Consultation'}
                </button>
                <a
                  href="#payment-gateway"
                  className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold text-center transition-colors border border-white/10"
                >
                  {tariffLang === 'hi' ? 'भुगतान विवरण' : 'Payment Info'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Merged Directory: 11 Specialized Healing & Correction Services + All 16 Divine Services */}
        <div className="mb-20 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6941A5] flex items-center gap-1.5">
                <Sparkles size={13} />
                <span>
                  {tariffLang === 'hi'
                    ? '11 विशिष्ट हीलिंग एवं सुधार सेवाएं + मुख्य परामर्श'
                    : '11 Specialized Healing & Correction Services + Core Guidance'}
                </span>
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#24152F] mt-1">
                {tariffLang === 'hi'
                  ? '11 विशिष्ट हीलिंग एवं सुधार सेवाएं — परामर्श एवं हीलिंग सेवाएं फीस (सभी 16 दिव्य सेवाएं)'
                  : '11 Specialized Healing & Correction Services — Consultancy & Healing Services Fees (All 16 Divine Services)'}
              </h2>
              <p className="text-xs text-[#29242E]/70 mt-1">
                {tariffLang === 'hi'
                  ? 'नीचे दिए गए फ़िल्टर द्वारा 11 विशिष्ट हीलिंग सेवाओं अथवा सभी 16 दिव्य सेवाओं का विवरण व फीस देखें:'
                  : 'Explore the complete directory of 11 Specialized Services and all 16 Divine Offerings with fixed rates:'}
              </p>
            </div>

            <div className="text-xs px-3.5 py-1.5 rounded-xl bg-white border border-[#D6B574]/60 text-[#24152F] font-bold shadow-2xs shrink-0 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>
                {tariffLang === 'hi' ? `${filteredServices.length} सेवाएं प्रदर्शित` : `${filteredServices.length} Services Displayed`}
              </span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label_en: 'All 16 Divine Services (16)', label_hi: 'सभी 16 दिव्य सेवाएं (16)' },
              { id: 'specialized11', label_en: '★ 11 Specialized Services (11)', label_hi: '★ 11 विशिष्ट सेवाएं (11)' },
              { id: 'core', label_en: 'Core Consultations (5)', label_hi: 'मुख्य वैदिक परामर्श (5)' },
              { id: 'healing', label_en: 'Energy & Chakras (4)', label_hi: 'ऊर्जा एवं चक्र हीलिंग (4)' },
              { id: 'numerology', label_en: 'Numerology & Names (3)', label_hi: 'अंकशास्त्र व नाम शुद्धि (3)' },
              { id: 'therapy', label_en: 'Therapies & Vastu (3)', label_hi: 'थेरेपी व वास्तु (3)' },
              { id: 'regression', label_en: 'Past Life PLR (1)', label_hi: 'पूर्व जन्म सत्र - PLR (1)' },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setFilter(btn.id as any)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
                  filter === btn.id
                    ? 'bg-[#24152F] text-[#D6B574] shadow-md border border-[#D6B574]/40 font-bold'
                    : 'bg-white text-[#29242E]/70 hover:bg-[#EAE2F4]/50 border border-[#EAE2F4]'
                }`}
              >
                {tariffLang === 'hi' ? btn.label_hi : btn.label_en}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((srv) => (
              <div
                key={srv.id}
                className="p-6 rounded-3xl bg-white border border-[#EAE2F4] hover:border-[#D6B574]/80 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-5 group relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-[#24152F] text-[#D6B574] font-cinzel text-xs font-bold flex items-center justify-center shadow-xs">
                      #{srv.number}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      srv.isSpecialized11
                        ? 'bg-[#6941A5]/10 text-[#6941A5] border border-[#6941A5]/20'
                        : 'bg-[#D6B574]/20 text-[#855e14] border border-[#D6B574]/30'
                    }`}>
                      {tariffLang === 'hi' ? srv.categoryLabel_hi : srv.categoryLabel_en}
                    </span>
                  </div>

                  {(tariffLang === 'hi' ? (srv.badge || srv.badge_en) : srv.badge_en) && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#24152F] text-[#F5C242] inline-block shadow-2xs">
                      {tariffLang === 'hi' ? (srv.badge || srv.badge_en) : srv.badge_en}
                    </span>
                  )}

                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#24152F] group-hover:text-[#6941A5] transition-colors leading-snug">
                    {tariffLang === 'hi' ? srv.title : srv.title_en}
                  </h3>

                  <div className="flex items-baseline gap-2 pt-1 border-t border-[#EAE2F4]/60">
                    <span className="font-rupee text-2xl sm:text-3xl font-black text-[#24152F] tabular-nums tracking-tight">
                      {srv.feeFormatted}
                    </span>
                    {(tariffLang === 'hi' ? srv.duration : srv.duration_en) && (
                      <span className="text-xs text-[#29242E]/70 font-medium">
                        {tariffLang === 'hi' ? `अवधि: ${srv.duration}` : `Duration: ${srv.duration_en}`}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#29242E]/75 leading-relaxed font-light">
                    {tariffLang === 'hi' ? srv.description : srv.description_en}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAE2F4] flex items-center justify-between gap-4">
                  <span className="text-[11px] text-emerald-700 flex items-center gap-1 font-medium">
                    <Lock size={12} />
                    <span>{tariffLang === 'hi' ? '100% गोपनीय' : '100% Confidential'}</span>
                  </span>

                  <button
                    type="button"
                    onClick={() => onBookService(`${tariffLang === 'hi' ? srv.title : srv.title_en} (${srv.feeFormatted})`)}
                    className="px-4 py-2 bg-[#24152F] hover:bg-[#341e44] text-[#D6B574] text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-xs hover:scale-[1.02]"
                  >
                    {tariffLang === 'hi' ? 'सत्र बुक करें' : 'Book Session'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Payment Gateway Section */}
        <div id="payment-gateway" className="pt-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6941A5]">
                {tariffLang === 'hi' ? 'आधिकारिक भुगतान व्यवस्था' : 'Official Payment Gateway'}
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#24152F] mt-1">
                {tariffLang === 'hi' ? 'बैंक खाता, UPI एवं QR स्कैनर विवरण' : 'Bank Account, UPI & QR Scanner Details'}
              </h2>
              <p className="text-xs text-[#29242E]/70 mt-1">
                {tariffLang === 'hi'
                  ? 'परामर्श व हीलिंग फीस का सुरक्षित भुगतान सीधे UPI, PhonePe/GPay QR, अथवा नेट बैंकिंग द्वारा करें।'
                  : 'Remit consultation & healing fees securely via direct UPI, PhonePe/GPay QR, or Net Banking transfer.'}
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenBrandSettings}
              className="px-4 py-2 bg-white border border-[#D6B574] text-[#24152F] hover:bg-[#24152F] hover:text-[#D6B574] rounded-xl text-xs font-semibold transition-all shadow-xs self-start sm:self-end"
            >
              {tariffLang === 'hi' ? 'बैंक / UPI विवरण बदलें' : 'Update Bank / UPI Details'}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: UPI QR Scanner Card */}
            <div className="lg:col-span-5 rounded-3xl bg-[#24152F] text-white p-8 border border-[#D6B574]/40 shadow-xl flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574]">
                    {tariffLang === 'hi' ? 'UPI QR कोड स्कैनर' : 'UPI QR Code Scanner'}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                    GPay • PhonePe • Paytm
                  </span>
                </div>

                {/* QR Display Frame */}
                <div className="p-6 rounded-2xl bg-white text-center flex flex-col items-center justify-center space-y-3 shadow-inner">
                  <div className="relative p-2 rounded-xl border-2 border-[#24152F] bg-white shadow-md">
                    <img
                      src={customQrImage || bankDetails.qrImage}
                      alt={`UPI Payment QR Code - ${bankDetails.holder} (${bankDetails.upiId})`}
                      className="w-48 h-48 object-contain rounded-lg"
                      loading="eager"
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 rounded bg-[#24152F] text-[#F5C242] text-[10px] font-bold">
                      ✓ {bankDetails.holder}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#24152F] block select-all">
                      {bankDetails.upiId}
                    </span>
                    <span className="text-[11px] text-[#24152F]/80 font-medium block">
                      {tariffLang === 'hi' ? 'गूगल पे, फोनपे, पेटीएम या किसी भी UPI ऐप से स्कैन करें' : 'Scan with Google Pay, PhonePe, Paytm or BHIM'}
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#D6B574] text-xs font-medium border border-[#D6B574]/30 transition-colors">
                    <Upload size={13} />
                    <span>{tariffLang === 'hi' ? 'क्यूआर स्कैनर छवि अपलोड करें' : 'Upload Scanner QR Image'}</span>
                    <input
                      type="file"
                      ref={qrInputRef}
                      accept="image/*"
                      onChange={handleQrUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* UPI ID Copy Bar */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-[#EAE2F4]/70 uppercase">
                    {tariffLang === 'hi' ? 'आधिकारिक UPI ID' : 'Official UPI ID'}
                  </span>
                  <span className="text-[10px] text-[#D6B574] font-medium">
                    {tariffLang === 'hi' ? 'त्वरित कॉपी' : '1-Click Copy'}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-bold text-white select-all">
                    {bankDetails.upiId}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(bankDetails.upiId, 'upi')}
                    className="px-3 py-1.5 rounded-lg bg-[#D6B574] hover:bg-[#e4ca8c] text-[#24152F] text-xs font-bold flex items-center gap-1 transition-all"
                  >
                    {copiedKey === 'upi' ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copiedKey === 'upi' ? (tariffLang === 'hi' ? 'कॉपी हुआ' : 'Copied') : (tariffLang === 'hi' ? 'कॉपी' : 'Copy')}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Direct Bank Account Transfer Card */}
            <div className="lg:col-span-7 rounded-3xl bg-white p-8 sm:p-10 border border-[#EAE2F4] shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#EAE2F4] pb-4">
                  <div className="flex items-center gap-2">
                    <Building2 size={18} className="text-[#6941A5]" />
                    <h3 className="font-cinzel text-lg font-bold text-[#24152F]">
                      {tariffLang === 'hi' ? 'सीधा बैंक खाता अंतरण (NEFT / IMPS / RTGS)' : 'Direct Bank Transfer (NEFT / IMPS / RTGS)'}
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {tariffLang === 'hi' ? 'प्रमाणित' : 'Verified'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#FBF8F2] border border-[#EAE2F4] space-y-1">
                    <span className="text-[10px] text-[#29242E]/60 uppercase block">
                      {tariffLang === 'hi' ? 'खाताधारक का नाम' : 'Account Holder Name'}
                    </span>
                    <span className="font-semibold text-sm text-[#24152F] block">{bankDetails.holder}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FBF8F2] border border-[#EAE2F4] space-y-1">
                    <span className="text-[10px] text-[#29242E]/60 uppercase block">
                      {tariffLang === 'hi' ? 'बैंक का नाम' : 'Bank Name'}
                    </span>
                    <span className="font-semibold text-sm text-[#24152F] block">{bankDetails.bank}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FBF8F2] border border-[#EAE2F4] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#29242E]/60 uppercase block">
                        {tariffLang === 'hi' ? 'खाता संख्या' : 'Account Number'}
                      </span>
                      <span className="font-mono text-sm font-bold text-[#24152F] select-all">
                        {bankDetails.accNumber}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(bankDetails.accNumber, 'acc')}
                      className="px-2.5 py-1 text-[11px] rounded bg-white hover:bg-[#EAE2F4] text-[#24152F] font-medium border border-[#EAE2F4] transition-colors"
                    >
                      {copiedKey === 'acc' ? (tariffLang === 'hi' ? 'कॉपी हुआ' : 'Copied') : (tariffLang === 'hi' ? 'नंबर कॉपी करें' : 'Copy Number')}
                    </button>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FBF8F2] border border-[#EAE2F4] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#29242E]/60 uppercase block">IFSC कोड</span>
                      <span className="font-mono text-sm font-bold text-[#24152F] select-all">
                        {bankDetails.ifsc}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(bankDetails.ifsc, 'ifsc')}
                      className="px-2.5 py-1 text-[11px] rounded bg-white hover:bg-[#EAE2F4] text-[#24152F] font-medium border border-[#EAE2F4] transition-colors"
                    >
                      {copiedKey === 'ifsc' ? (tariffLang === 'hi' ? 'कॉपी हुआ' : 'Copied') : (tariffLang === 'hi' ? 'IFSC कॉपी करें' : 'Copy IFSC')}
                    </button>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FBF8F2] border border-[#EAE2F4] space-y-1">
                    <span className="text-[10px] text-[#29242E]/60 uppercase block">
                      {tariffLang === 'hi' ? 'खाता प्रकार' : 'Account Type'}
                    </span>
                    <span className="font-semibold text-sm text-[#24152F] block">
                      {tariffLang === 'hi' ? 'बचत खाता' : bankDetails.type}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FBF8F2] border border-[#EAE2F4] space-y-1">
                    <span className="text-[10px] text-[#29242E]/60 uppercase block">
                      {tariffLang === 'hi' ? 'शाखा एवं स्थान' : 'Branch & Location'}
                    </span>
                    <span className="font-semibold text-xs text-[#24152F] block">{bankDetails.branch}</span>
                  </div>
                </div>
              </div>

              {/* Next Step Action Box */}
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-emerald-900 uppercase tracking-wide block">
                    {tariffLang === 'hi' ? 'भुगतान के बाद अगला कदम' : 'Next Step After Payment'}
                  </span>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    {tariffLang === 'hi'
                      ? 'भुगतान रसीद का स्क्रीनशॉट आधिकारिक व्हाट्सएप (+91 91057 31969) पर भेजें ताकि समय तुरंत निश्चित हो सके।'
                      : 'Send transaction screenshot to WhatsApp (+91 91057 31969) for instant appointment confirmation.'}
                  </p>
                </div>

                <a
                  href="https://wa.me/919105731969?text=Hello%20Dr.%20Pooja%20Awasthi,%20I%20have%20transferred%20the%20consultation%20fee.%20Attached%20is%20the%20screenshot."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-sm"
                >
                  {tariffLang === 'hi' ? 'स्क्रीनशॉट भेजें' : 'Send Screenshot'}
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Social Share & Promotion Widget */}
        <div className="pt-12 max-w-3xl mx-auto">
          <SocialShare
            title="Dr. Pooja Awasthi — 11 Spiritual Services Tariff & Fee Card"
            text="Transparent consultation fees and verified payment details for Vedic Numerology, Tarot Reading, Chakra Healing & PLR."
            url="https://dr-pooja-awasthi-india.netlify.app/tariff"
            lang={tariffLang}
          />
        </div>

        {/* Bottom Back Home Button */}
        <div className="pt-8 text-center">
          <button
            type="button"
            onClick={onBackToHome}
            className="px-8 py-3 bg-[#24152F] hover:bg-[#341e44] text-[#D6B574] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
          >
            {tariffLang === 'hi' ? '← मुख्य पृष्ठ पर लौटें' : '← Back to Home'}
          </button>
        </div>

      </div>
    </div>
  );
};

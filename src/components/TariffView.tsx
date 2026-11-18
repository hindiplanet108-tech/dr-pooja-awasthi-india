import React, { useState, useRef } from 'react';
import { ALL_16_DIVINE_SERVICES, DivineServiceItem } from '../data/servicesData';
import { useSiteContent } from '../utils/siteContentContext';
import {
  Share2,
  Printer,
  MessageSquare,
  Check,
  Copy,
  QrCode,
  Smartphone,
  Upload,
  Lock,
  Clock,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import poojaAuthenticPhoto from '../assets/images/pooja_awasthi_portrait.jpeg';
import { SEOHead } from './SEOHead';
import { Breadcrumb } from './Breadcrumb';
import { SocialShare } from './SocialShare';
import { UpiQrCode } from './UpiQrCode';

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
    upiId: bankInfo?.upi_id || '9105731969@upi',
    phone: siteContent?.contact?.phone || '+91 91057 31969',
    qrImage: bankInfo?.qr_code_image || '/assets/aistudio/Screenshot_2026-11-17_120046_1b5aa9a9.png'
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
    ? '11 विशिष्ट हीलिंग एवं सुधार सेवाओं तथा दिव्य परामर्शों की आधिकारिक शुल्क सूची (Tariff Card)। निश्चित परामर्श ₹5,100, पारदर्शी दरें, केवल UPI एवं QR कोड भुगतान।'
    : 'Official Tariff Card for Specialized Healing & Correction Services + Consultancy Fees by Dr. Pooja Awasthi. UPI & QR Code Payment Only.';

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E162B] pt-24 md:pt-28 pb-12">
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
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E6DFD3]">
          <Breadcrumb
            items={[
              { label: tariffLang === 'hi' ? '11 विशिष्ट हीलिंग एवं सुधार सेवाएं + सभी 16 दिव्य सेवाएं फीस' : '11 Specialized Healing & Correction Services (All 16 Divine Services)' }
            ]}
            onNavigateHome={onBackToHome}
            lang={tariffLang}
          />

          <div className="flex flex-wrap items-center gap-2">
            {/* Bilingual View Toggle */}
            <div className="inline-flex rounded-lg border border-[#DEC38C] p-0.5 bg-white text-xs shadow-2xs">
              <button
                type="button"
                onClick={() => setTariffLang('en')}
                className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                  tariffLang === 'en'
                    ? 'bg-[#522B8A] text-white'
                    : 'text-[#4A4356] hover:text-[#1E162B]'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setTariffLang('hi')}
                className={`px-2.5 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                  tariffLang === 'hi'
                    ? 'bg-[#522B8A] text-white'
                    : 'text-[#4A4356] hover:text-[#1E162B]'
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
        <div className="max-w-4xl mb-8 space-y-2.5">
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
              <span>{tariffLang === 'hi' ? 'केवल UPI एवं QR कोड भुगतान' : 'UPI & QR Code Payment Only'}</span>
            </span>
          </div>
        </div>

        {/* Most Popular Feature Card */}
        <div className="mb-10 rounded-3xl bg-white text-[#1E162B] p-6 sm:p-8 border-2 border-[#DEC38C] shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#F4F0FA]/80 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center gap-5">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-[#E6DFD3] bg-[#FAF8F5] p-1.5 shrink-0 shadow-md aspect-square">
                <img
                  src={poojaAuthenticPhoto}
                  alt="Dr. Pooja Awasthi"
                  className="w-full h-full object-cover object-top rounded-xl"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/28.jpeg') target.src = '/28.jpeg';
                  }}
                />
              </div>

              <div className="space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#FBF5E6] border border-[#DEC38C] text-[#7A5311] inline-block">
                  {tariffLang === 'hi' ? 'सर्वाधिक लोकप्रिय · व्यक्तिगत मार्गदर्शन' : 'Most Popular · 1-on-1 Guidance'}
                </span>
                <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1E162B]">
                  {tariffLang === 'hi' ? 'व्यक्तिगत आध्यात्मिक व अंकशास्त्रीय परामर्श' : 'Personalized Spiritual Consultation'}
                </h2>
                <p className="text-sm text-[#4A4356] leading-relaxed">
                  {tariffLang === 'hi'
                    ? 'डॉ. पूजा अवस्थी के साथ 45-60 मिनट का गहन व्यक्तिगत सत्र, जिसमें आपके जीवन की उलझनों, मूलांक, भाग्यांक और ग्रह चक्रों का संपूर्ण विश्लेषण किया जाता है।'
                    : 'A personalized 1-on-1 consultation session dedicated to understanding your queries, life circumstances, and life path through Vedic wisdom with Dr. Pooja Awasthi.'}
                </p>

                <div className="flex flex-wrap items-center gap-3 text-xs text-[#7A5311] font-semibold">
                  <span className="flex items-center gap-1">
                    <Clock size={13} className="text-[#B48228]" />
                    <span>{tariffLang === 'hi' ? 'अवधि: 45-60 मिनट' : 'Duration: 45-60 mins'}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{tariffLang === 'hi' ? 'व्यक्तिगत विस्तृत विश्लेषण' : 'Personalized In-depth Analysis'}</span>
                </div>
              </div>
            </div>

            {/* Verified UPI QR Scanner Box */}
            <div className="lg:col-span-3 p-4 rounded-2xl bg-[#FAF8F5] border border-[#DEC38C] text-center flex flex-col items-center justify-center space-y-2 shadow-2xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5311]">
                {tariffLang === 'hi' ? 'सत्यापित UPI स्कैनर' : 'Verified UPI Scanner'}
              </span>
              <div className="p-2 rounded-xl bg-white border border-[#E6DFD3] shadow-2xs">
                <img
                  src="/assets/aistudio/Screenshot_2026-11-17_120046_1b5aa9a9.png"
                  alt={`UPI QR Code - ${bankDetails.holder} (${bankDetails.upiId})`}
                  className="w-28 h-28 object-contain rounded-lg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('upi-qr-9105731969.svg')) {
                      target.src = '/upi-qr-9105731969.svg';
                    }
                  }}
                />
              </div>
              <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold">
                ✓ {bankDetails.holder}
              </span>
              <span className="font-mono text-[11px] font-bold text-[#1E162B] block select-all">
                {bankDetails.upiId}
              </span>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-[#FBF5E6] border-2 border-[#DEC38C] shrink-0 text-center lg:text-right space-y-3 shadow-xs">
              <div>
                <span className="text-[11px] text-[#7A5311] uppercase block font-bold tracking-wider">
                  {tariffLang === 'hi' ? 'परामर्श शुल्क' : 'Consultancy Fee'}
                </span>
                <div className="font-rupee text-5xl font-black text-[#1E162B] tabular-nums flex items-baseline justify-center lg:justify-end gap-1 my-1">
                  <span className="font-black text-[#B48228] text-4xl rupee-symbol select-none">
                    ₹
                  </span>
                  <span className="font-black text-[#1E162B] tracking-tight">5,100</span>
                </div>
                <span className="text-[11px] text-[#5D556A] block font-medium">
                  {tariffLang === 'hi' ? 'प्रति सत्र (वीडियो / ऑडियो कॉल)' : 'Per session (Virtual / Telephonic)'}
                </span>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => onBookService('Personalized Spiritual Consultation (₹5,100)')}
                  className="h-11 px-6 bg-[#522B8A] hover:bg-[#412070] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
                >
                  {tariffLang === 'hi' ? 'परामर्श सत्र प्राप्त करें' : 'Book Consultation'}
                </button>
                <a
                  href="#payment-gateway"
                  className="h-9 px-5 flex items-center justify-center rounded-xl bg-white hover:bg-[#FAF8F5] text-[#1E162B] text-xs font-semibold text-center transition-colors border border-[#E6DFD3]"
                >
                  {tariffLang === 'hi' ? 'भुगतान विवरण' : 'Payment Info'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Merged Directory: 11 Specialized Healing & Correction Services + All 16 Divine Services */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#522B8A] flex items-center gap-1.5">
                <Sparkles size={13} className="text-[#B48228]" />
                <span>
                  {tariffLang === 'hi'
                    ? '11 विशिष्ट हीलिंग एवं सुधार सेवाएं + मुख्य परामर्श'
                    : '11 Specialized Healing & Correction Services + Core Guidance'}
                </span>
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1E162B] mt-1">
                {tariffLang === 'hi'
                  ? '11 विशिष्ट हीलिंग एवं सुधार सेवाएं — परामर्श एवं हीलिंग सेवाएं फीस (सभी 16 दिव्य सेवाएं)'
                  : '11 Specialized Healing & Correction Services — Consultancy & Healing Services Fees (All 16 Divine Services)'}
              </h2>
              <p className="text-xs text-[#4A4356] mt-1">
                {tariffLang === 'hi'
                  ? 'नीचे दिए गए फ़िल्टर द्वारा 11 विशिष्ट हीलिंग सेवाओं अथवा सभी 16 दिव्य सेवाओं का विवरण व फीस देखें:'
                  : 'Explore the complete directory of 11 Specialized Services and all 16 Divine Offerings with fixed rates:'}
              </p>
            </div>

            <div className="text-xs px-3.5 py-1.5 rounded-xl bg-white border border-[#DEC38C] text-[#1E162B] font-bold shadow-2xs shrink-0 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>
                {tariffLang === 'hi' ? `${filteredServices.length} सेवाएं प्रदर्शित` : `${filteredServices.length} Services Displayed`}
              </span>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label_en: `All Divine Services (${currentDivineServices.length})`, label_hi: `सभी दिव्य सेवाएं (${currentDivineServices.length})` },
              { id: 'specialized11', label_en: `★ Specialized Services (${currentDivineServices.filter(s => s.isSpecialized11).length})`, label_hi: `★ विशिष्ट सेवाएं (${currentDivineServices.filter(s => s.isSpecialized11).length})` },
              { id: 'core', label_en: `Core Consultations (${currentDivineServices.filter(s => s.category === 'core').length})`, label_hi: `मुख्य वैदिक परामर्श (${currentDivineServices.filter(s => s.category === 'core').length})` },
              { id: 'healing', label_en: `Energy & Chakras (${currentDivineServices.filter(s => s.category === 'healing').length})`, label_hi: `ऊर्जा एवं चक्र हीलिंग (${currentDivineServices.filter(s => s.category === 'healing').length})` },
              { id: 'numerology', label_en: `Numerology & Names (${currentDivineServices.filter(s => s.category === 'numerology').length})`, label_hi: `अंकशास्त्र व नाम शुद्धि (${currentDivineServices.filter(s => s.category === 'numerology').length})` },
              { id: 'therapy', label_en: `Therapies & Vastu (${currentDivineServices.filter(s => s.category === 'therapy').length})`, label_hi: `थेरेपी व वास्तु (${currentDivineServices.filter(s => s.category === 'therapy').length})` },
              { id: 'regression', label_en: `Past Life PLR (${currentDivineServices.filter(s => s.category === 'regression').length})`, label_hi: `पूर्व जन्म सत्र - PLR (${currentDivineServices.filter(s => s.category === 'regression').length})` },
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setFilter(btn.id as any)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  filter === btn.id
                    ? 'bg-[#522B8A] text-white shadow-sm font-bold'
                    : 'bg-white text-[#4A4356] hover:bg-[#F4F0FA] hover:text-[#1E162B] border border-[#E6DFD3]'
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
                className="p-6 rounded-3xl bg-white border border-[#E6DFD3] hover:border-[#DEC38C] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between space-y-5 group relative"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-full bg-[#F4F0FA] border border-[#DFD5F0] text-[#522B8A] font-cinzel text-xs font-bold flex items-center justify-center">
                      #{srv.number}
                    </span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      srv.isSpecialized11
                        ? 'bg-[#F4F0FA] text-[#522B8A] border border-[#DFD5F0]'
                        : 'bg-[#FBF5E6] text-[#7A5311] border border-[#DEC38C]'
                    }`}>
                      {tariffLang === 'hi' ? srv.categoryLabel_hi : srv.categoryLabel_en}
                    </span>
                  </div>

                  {(tariffLang === 'hi' ? (srv.badge || srv.badge_en) : srv.badge_en) && (
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-[#FBF5E6] text-[#7A5311] border border-[#DEC38C] inline-block">
                      {tariffLang === 'hi' ? (srv.badge || srv.badge_en) : srv.badge_en}
                    </span>
                  )}

                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#1E162B] group-hover:text-[#522B8A] transition-colors leading-snug">
                    {tariffLang === 'hi' ? srv.title : srv.title_en}
                  </h3>

                  <div className="flex items-baseline gap-2 pt-2 border-t border-[#EFECE6]">
                    <span className="font-rupee text-2xl sm:text-3xl font-black text-[#1E162B] tabular-nums tracking-tight">
                      {srv.feeFormatted}
                    </span>
                    {(tariffLang === 'hi' ? srv.duration : srv.duration_en) && (
                      <span className="text-xs text-[#5D556A] font-medium">
                        {tariffLang === 'hi' ? `अवधि: ${srv.duration}` : `Duration: ${srv.duration_en}`}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#4A4356] leading-relaxed">
                    {tariffLang === 'hi' ? srv.description : srv.description_en}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EFECE6] flex items-center justify-between gap-4">
                  <span className="text-[11px] text-emerald-700 flex items-center gap-1 font-medium">
                    <Lock size={12} />
                    <span>{tariffLang === 'hi' ? '100% गोपनीय' : '100% Confidential'}</span>
                  </span>

                  <button
                    type="button"
                    onClick={() => onBookService(`${tariffLang === 'hi' ? srv.title : srv.title_en} (${srv.feeFormatted})`)}
                    className="h-9 px-4 bg-[#522B8A] hover:bg-[#412070] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-xs cursor-pointer"
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
              <span className="text-xs font-bold uppercase tracking-widest text-[#522B8A]">
                {tariffLang === 'hi' ? 'आधिकारिक भुगतान व्यवस्था' : 'Official Payment Gateway'}
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#1E162B] mt-1">
                {tariffLang === 'hi' ? 'केवल UPI एवं QR स्कैनर भुगतान विवरण' : 'UPI & QR Code Payment Details Only'}
              </h2>
              <p className="text-xs text-[#4A4356] mt-1">
                {tariffLang === 'hi'
                  ? 'परामर्श व हीलिंग फीस का सुरक्षित भुगतान केवल नीचे दिए गए सत्यापित UPI ID एवं QR कोड द्वारा करें।'
                  : 'We strictly accept consultation & healing fees only via our verified UPI ID & QR Code Scanner below.'}
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenBrandSettings}
              className="h-10 px-4 bg-white border border-[#DEC38C] text-[#7A5311] hover:bg-[#FBF5E6] rounded-xl text-xs font-semibold transition-all shadow-2xs self-start sm:self-end cursor-pointer"
            >
              {tariffLang === 'hi' ? 'UPI / QR विवरण देखें' : 'Open UPI / QR Modal'}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: UPI QR Scanner Card */}
            <div className="lg:col-span-5 rounded-3xl bg-white text-[#1E162B] p-8 border-2 border-[#DEC38C] shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7A5311]">
                    {tariffLang === 'hi' ? 'UPI QR कोड स्कैनर' : 'UPI QR Code Scanner'}
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200">
                    GPay • PhonePe • Paytm
                  </span>
                </div>

                {/* QR Display Frame */}
                <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] text-center flex flex-col items-center justify-center space-y-3 shadow-inner">
                  <div className="relative p-2.5 rounded-xl border border-[#E6DFD3] bg-white shadow-sm">
                    <img
                      src={customQrImage || bankDetails.qrImage}
                      alt={`UPI Payment QR Code - ${bankDetails.holder} (${bankDetails.upiId})`}
                      className="w-48 h-48 object-contain rounded-lg"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('upi-qr-9105731969.svg')) {
                          target.src = '/upi-qr-9105731969.svg';
                        }
                      }}
                    />
                  </div>

                  <div className="space-y-1">
                    <span className="inline-block px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold">
                      ✓ {bankDetails.holder}
                    </span>
                    <span className="font-mono text-xs font-bold text-[#1E162B] block select-all">
                      {bankDetails.upiId}
                    </span>
                    <span className="text-[11px] text-[#5D556A] font-medium block">
                      {tariffLang === 'hi' ? 'गूगल पे, फोनपे, पेटीएम या किसी भी UPI ऐप से स्कैन करें' : 'Scan with Google Pay, PhonePe, Paytm or BHIM'}
                    </span>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <label className="cursor-pointer inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#F4F0FA] hover:bg-[#EAE2F4] text-[#522B8A] text-xs font-semibold border border-[#DFD5F0] transition-colors">
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
              <div className="p-4 rounded-2xl bg-[#FBF5E6] border border-[#DEC38C] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-[#7A5311] font-bold uppercase">
                    {tariffLang === 'hi' ? 'आधिकारिक UPI ID' : 'Official UPI ID'}
                  </span>
                  <span className="text-[10px] text-[#522B8A] font-semibold">
                    {tariffLang === 'hi' ? 'त्वरित कॉपी' : '1-Click Copy'}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-sm font-bold text-[#1E162B] select-all">
                    {bankDetails.upiId}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(bankDetails.upiId, 'upi')}
                    className="h-8 px-3 rounded-lg bg-[#522B8A] hover:bg-[#412070] text-white text-xs font-bold flex items-center gap-1 transition-all cursor-pointer"
                  >
                    {copiedKey === 'upi' ? <Check size={13} /> : <Copy size={13} />}
                    <span>{copiedKey === 'upi' ? (tariffLang === 'hi' ? 'कॉपी हुआ' : 'Copied') : (tariffLang === 'hi' ? 'कॉपी' : 'Copy')}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: UPI & QR Code Payment Instructions Card */}
            <div className="lg:col-span-7 rounded-3xl bg-white p-8 sm:p-10 border border-[#E6DFD3] shadow-sm flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#EFECE6] pb-4">
                  <div className="flex items-center gap-2">
                    <Smartphone size={18} className="text-[#522B8A]" />
                    <h3 className="font-cinzel text-lg font-bold text-[#1E162B]">
                      {tariffLang === 'hi' ? 'केवल UPI एवं QR कोड द्वारा भुगतान' : 'UPI & QR Code Payment Only'}
                    </h3>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {tariffLang === 'hi' ? 'प्रमाणित UPI' : 'Verified UPI'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-1">
                    <span className="text-[10px] text-[#5D556A] uppercase block">
                      {tariffLang === 'hi' ? 'प्राप्तकर्ता का नाम (Beneficiary)' : 'Verified Recipient Name'}
                    </span>
                    <span className="font-semibold text-sm text-[#1E162B] block">{bankDetails.holder}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E6DFD3] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#5D556A] uppercase block">
                        {tariffLang === 'hi' ? 'आधिकारिक UPI ID' : 'Official UPI ID'}
                      </span>
                      <span className="font-mono text-sm font-bold text-[#1E162B] select-all">
                        {bankDetails.upiId}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(bankDetails.upiId, 'upi2')}
                      className="px-2.5 py-1 text-[11px] rounded-lg bg-white hover:bg-[#F4F0FA] text-[#1E162B] font-medium border border-[#E6DFD3] transition-colors cursor-pointer"
                    >
                      {copiedKey === 'upi2' ? (tariffLang === 'hi' ? 'कॉपी हुआ' : 'Copied') : (tariffLang === 'hi' ? 'UPI कॉपी करें' : 'Copy UPI')}
                    </button>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E6DFD3] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#5D556A] uppercase block">
                        {tariffLang === 'hi' ? 'UPI मोबाइल नंबर' : 'UPI Linked Mobile'}
                      </span>
                      <span className="font-mono text-sm font-bold text-[#1E162B] select-all">
                        {bankDetails.phone}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy('9105731969', 'phone')}
                      className="px-2.5 py-1 text-[11px] rounded-lg bg-white hover:bg-[#F4F0FA] text-[#1E162B] font-medium border border-[#E6DFD3] transition-colors cursor-pointer"
                    >
                      {copiedKey === 'phone' ? (tariffLang === 'hi' ? 'कॉपी हुआ' : 'Copied') : (tariffLang === 'hi' ? 'नंबर कॉपी करें' : 'Copy Phone')}
                    </button>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-1">
                    <span className="text-[10px] text-[#5D556A] uppercase block">
                      {tariffLang === 'hi' ? 'समर्थित ऐप्स' : 'Accepted Payment Apps'}
                    </span>
                    <span className="font-semibold text-xs text-[#1E162B] block">
                      Google Pay · PhonePe · Paytm · BHIM
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#FBF5E6] border border-[#DEC38C] text-xs text-[#7A5311] leading-relaxed flex items-start gap-2.5">
                  <ShieldCheck size={16} className="text-[#B48228] shrink-0 mt-0.5" />
                  <span>
                    {tariffLang === 'hi'
                      ? 'महत्वपूर्ण सूचना: सभी परामर्श व हीलिंग सेवा शुल्क केवल सत्यापित UPI ID (9105731969@upi) या बाईं ओर दिए गए QR कोड स्कैनर के माध्यम से ही स्वीकार किए जाते हैं।'
                      : 'Important: We accept consultation & healing fee payments strictly through the verified QR Code scanner or Official UPI ID (9105731969@upi) only.'}
                  </span>
                </div>
              </div>

              {/* Next Step Action Box */}
              <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
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
                  href="https://wa.me/919105731969?text=Hello%20Dr.%20Pooja%20Awasthi,%20I%20have%20paid%20the%20consultation%20fee%20via%20UPI.%20Attached%20is%20the%20screenshot."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 px-5 flex items-center rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-sm"
                >
                  {tariffLang === 'hi' ? 'स्क्रीनशॉट भेजें' : 'Send Screenshot'}
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Social Share & Promotion Widget */}
        <div className="pt-8 max-w-3xl mx-auto">
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
            className="h-11 px-8 bg-[#522B8A] hover:bg-[#412070] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer"
          >
            {tariffLang === 'hi' ? '← मुख्य पृष्ठ पर लौटें' : '← Back to Home'}
          </button>
        </div>

      </div>
    </div>
  );
};

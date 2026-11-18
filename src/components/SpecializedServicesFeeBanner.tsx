import React, { useState } from 'react';
import { Check, Clock, Copy, QrCode, Sparkles, ArrowRight } from 'lucide-react';
import poojaAuthenticPhoto from '../assets/images/pooja_awasthi_portrait.jpeg';
import { useSiteContent } from '../utils/siteContentContext';

interface SpecializedServicesFeeBannerProps {
  lang?: string;
  onBookService: (serviceName: string) => void;
  onOpenTariff?: () => void;
  onOpenBankUpi?: () => void;
  compact?: boolean;
}

export const SpecializedServicesFeeBanner: React.FC<SpecializedServicesFeeBannerProps> = ({
  lang = 'en',
  onBookService,
  onOpenTariff,
  onOpenBankUpi,
  compact = false,
}) => {
  const { siteContent } = useSiteContent();
  const [copiedUpi, setCopiedUpi] = useState(false);

  const bankInfo = siteContent?.bankUpi;
  const upiId = bankInfo?.upi_id || '9105731969@upi';
  const accountHolder = bankInfo?.account_name || 'Pooja Awasthi';

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2200);
  };

  return (
    <div className="space-y-6">
      {/* Header matching official Tariff Banner */}
      <div className={compact ? 'space-y-2.5' : 'max-w-4xl space-y-2.5'}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#6941A5]/10 text-[#6941A5] border border-[#6941A5]/25">
            {lang === 'hi' ? '11 विशिष्ट हीलिंग एवं सुधार सेवाएं' : '11 Specialized Healing & Correction Services'}
          </span>
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#D6B574]/20 text-[#855e14] border border-[#D6B574]/40">
            {lang === 'hi' ? 'सभी 16 दिव्य सेवाएं' : 'All 16 Divine Services'}
          </span>
        </div>

        <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl font-medium text-[#24152F] leading-tight">
          {lang === 'hi'
            ? '11 विशिष्ट हीलिंग एवं सुधार सेवाएं — परामर्श एवं हीलिंग सेवाएं फीस (सभी 16 दिव्य सेवाएं)'
            : '11 Specialized Healing & Correction Services — Consultancy & Healing Services Fees (All 16 Divine Services)'}
        </h2>

        <p className="text-xs sm:text-sm text-[#4A4356] leading-relaxed">
          {lang === 'hi'
            ? 'डॉ. पूजा अवस्थी की 11 विशिष्ट हीलिंग एवं सुधार सेवाओं तथा मुख्य वैदिक परामर्शों की एकीकृत, पारदर्शी व आधिकारिक शुल्क दर सूची (सभी 16 दिव्य सेवाएं)।'
            : 'Official integrated directory merging 11 Specialized Healing & Correction Services with Core Consultations — presenting all 16 Divine Services with fixed fee transparency and verified UPI scanner.'}
        </p>

        <div className="pt-1 flex flex-wrap items-center gap-3 text-xs text-[#4A4356] font-medium">
          <span className="flex items-center gap-1">
            <Check size={14} className="text-[#522B8A]" />
            <span>{lang === 'hi' ? '11 विशिष्ट हीलिंग व सुधार' : '11 Specialized Corrections'}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Check size={14} className="text-[#522B8A]" />
            <span>{lang === 'hi' ? 'सभी 16 दिव्य सेवाएं शामिल' : 'All 16 Divine Services Merged'}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Check size={14} className="text-[#522B8A]" />
            <span>{lang === 'hi' ? 'निश्चित फीस ₹5,100 से पारदर्शी दरें' : 'Fixed Fee ₹5,100 & Transparent Rates'}</span>
          </span>
          <span aria-hidden="true">·</span>
          <span className="flex items-center gap-1">
            <Check size={14} className="text-[#522B8A]" />
            <span>{lang === 'hi' ? 'केवल UPI व QR कोड भुगतान' : 'UPI & QR Code Payment Only'}</span>
          </span>
        </div>
      </div>

      {/* Main Signature Card: Consultation Fee ₹5,100 + Direct Verified QR Scanner */}
      <div className="rounded-3xl bg-white text-[#1E162B] p-6 sm:p-8 border-2 border-[#DEC38C] shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#F4F0FA]/80 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: Portrait + Personalized Consultation Summary */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center gap-5">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-[#E6DFD3] bg-[#FAF8F5] p-1 shrink-0 shadow-md aspect-square">
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

            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#FBF5E6] border border-[#DEC38C] text-[#7A5311] inline-block">
                {lang === 'hi' ? 'सर्वाधिक लोकप्रिय · व्यक्तिगत मार्गदर्शन' : 'Most Popular · 1-on-1 Guidance'}
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1E162B]">
                {lang === 'hi' ? 'व्यक्तिगत आध्यात्मिक व अंकशास्त्रीय परामर्श' : 'Personalized Spiritual Consultation'}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4356] leading-relaxed">
                {lang === 'hi'
                  ? 'डॉ. पूजा अवस्थी के साथ 45-60 मिनट का गहन व्यक्तिगत सत्र, जिसमें आपके जीवन की उलझनों, मूलांक, भाग्यांक और ग्रह चक्रों का संपूर्ण विश्लेषण किया जाता है।'
                  : 'A personalized 1-on-1 consultation session dedicated to understanding your queries, life circumstances, and life path through Vedic wisdom with Dr. Pooja Awasthi.'}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#7A5311] font-semibold">
                <span className="flex items-center gap-1">
                  <Clock size={13} className="text-[#B48228]" />
                  <span>{lang === 'hi' ? 'अवधि: 45-60 मिनट' : 'Duration: 45-60 mins'}</span>
                </span>
                <span aria-hidden="true">·</span>
                <span>{lang === 'hi' ? 'व्यक्तिगत विस्तृत विश्लेषण' : 'Personalized In-depth Analysis'}</span>
              </div>
            </div>
          </div>

          {/* Center: Verified UPI QR Scanner Card */}
          <div className="lg:col-span-3 p-4 rounded-2xl bg-[#FAF8F5] border border-[#DEC38C] text-center flex flex-col items-center justify-center space-y-2 shadow-2xs">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5311]">
              {lang === 'hi' ? 'सत्यापित UPI स्कैनर' : 'Verified UPI Scanner'}
            </span>
            <div className="p-2 rounded-xl bg-white border border-[#E6DFD3] shadow-2xs">
              <img
                src="/assets/aistudio/Screenshot_2026-11-17_120046_1b5aa9a9.png"
                alt={`UPI QR Code - ${accountHolder} (${upiId})`}
                className="w-28 h-28 object-contain rounded-lg"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('upi-qr-9105731969.svg')) {
                    target.src = '/upi-qr-9105731969.svg';
                  }
                }}
              />
            </div>
            <div className="space-y-1 w-full">
              <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold">
                ✓ {accountHolder}
              </span>
              <div className="flex items-center justify-center gap-1.5">
                <span className="font-mono text-[11px] font-bold text-[#1E162B] select-all">
                  {upiId}
                </span>
                <button
                  type="button"
                  onClick={handleCopyUpi}
                  className="p-1 rounded-md bg-white hover:bg-[#522B8A] text-[#522B8A] hover:text-white border border-[#E6DFD3] transition-colors cursor-pointer"
                  title="Copy UPI ID"
                >
                  {copiedUpi ? <Check size={11} className="text-emerald-600" /> : <Copy size={11} />}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Consultancy Fee ₹5,100 Per Session Box */}
          <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-[#FBF5E6] border-2 border-[#DEC38C] text-center lg:text-right space-y-3 shadow-xs">
            <div>
              <span className="text-[11px] text-[#7A5311] uppercase block font-bold tracking-wider">
                {lang === 'hi' ? 'परामर्श शुल्क' : 'Consultancy Fee'}
              </span>
              <div className="font-rupee text-5xl font-black text-[#1E162B] tabular-nums flex items-baseline justify-center lg:justify-end gap-1 my-1">
                <span className="font-black text-[#B48228] text-4xl rupee-symbol select-none">
                  ₹
                </span>
                <span className="font-black text-[#1E162B] tracking-tight">5,100</span>
              </div>
              <span className="text-[11px] text-[#5D556A] block font-medium">
                {lang === 'hi' ? 'प्रति सत्र (वीडियो / ऑडियो कॉल)' : 'Per session (Virtual / Telephonic)'}
              </span>
            </div>

            <div className="pt-1 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => onBookService('Personalized Spiritual Consultation (₹5,100)')}
                className="h-11 px-5 bg-[#522B8A] hover:bg-[#412070] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{lang === 'hi' ? 'परामर्श सत्र प्राप्त करें' : 'Book Consultation'}</span>
                <ArrowRight size={14} />
              </button>

              <div className="grid grid-cols-2 gap-2">
                {onOpenTariff && (
                  <button
                    type="button"
                    onClick={onOpenTariff}
                    className="h-9 px-3 flex items-center justify-center gap-1 rounded-xl bg-white hover:bg-[#FAF8F5] text-[#522B8A] text-[11px] font-bold transition-colors border border-[#DEC38C] cursor-pointer"
                  >
                    <Sparkles size={12} className="text-[#B48228]" />
                    <span>{lang === 'hi' ? '16 सेवाएं व फीस' : 'All 16 Fees'}</span>
                  </button>
                )}
                {onOpenBankUpi && (
                  <button
                    type="button"
                    onClick={onOpenBankUpi}
                    className={`h-9 px-3 flex items-center justify-center gap-1 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 text-[11px] font-bold transition-colors border border-emerald-200 cursor-pointer ${
                      !onOpenTariff ? 'col-span-2' : ''
                    }`}
                  >
                    <QrCode size={12} className="text-emerald-700" />
                    <span>{lang === 'hi' ? 'UPI QR कोड' : 'UPI & QR Pay'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

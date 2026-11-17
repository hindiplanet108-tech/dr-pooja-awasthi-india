import React, { useState } from 'react';
import { CORE_SERVICES, CoreService, CATALOG_SERVICES, CatalogServiceItem } from '../data/servicesData';
import { ArrowRight, Check, Clock, Sparkles, X } from 'lucide-react';
import { getTranslation } from '../data/translations';
import { ChakraAuraVisualizer } from './ChakraAuraVisualizer';
import { useSiteContent } from '../utils/siteContentContext';
import { SpecializedServicesFeeBanner } from './SpecializedServicesFeeBanner';

interface ServicesSectionProps {
  lang: string;
  onSelectServiceForBooking: (serviceName: string) => void;
  onOpenTariff?: () => void;
  onOpenBankUpi?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectServiceForBooking,
  onOpenTariff,
  onOpenBankUpi,
}) => {
  const [activeTab, setActiveTab] = useState<'core' | 'catalog' | 'chakras'>('core');
  const [selectedServiceModal, setSelectedServiceModal] = useState<CoreService | null>(null);
  const [catalogFilter, setCatalogFilter] = useState<'all' | 'healing' | 'numerology' | 'therapy' | 'regression'>('all');
  const t = getTranslation(lang);
  const { siteContent } = useSiteContent();

  const currentCatalog: CatalogServiceItem[] = siteContent?.services && siteContent.services.length > 0
    ? siteContent.services.map((s, idx) => ({
        id: s.id || `srv-${idx + 1}`,
        number: s.number || (idx + 1),
        title: s.title_hi || s.title,
        title_en: s.title,
        category: (s.category || 'numerology') as 'healing' | 'numerology' | 'therapy' | 'regression',
        categoryLabel_hi: s.categoryLabel_hi || 'वैदिक सेवा',
        categoryLabel_en: s.category || 'Vedic Service',
        badge: s.badge,
        badge_en: s.badge,
        description: s.description || '',
        description_en: s.description || '',
        fee: s.fee ?? 5100,
        feeFormatted: s.feeFormatted || `₹${(s.fee ?? 5100).toLocaleString()}`,
        duration: s.duration || '60 मिनट',
        duration_en: s.duration || '60 mins',
        image: s.image || CATALOG_SERVICES[idx]?.image || '/assets/images/vedic_numerology_sacred_cosmos_1792557572243.jpg'
      }))
    : CATALOG_SERVICES;

  const filteredCatalog = catalogFilter === 'all'
    ? currentCatalog
    : currentCatalog.filter(item => item.category === catalogFilter);

  return (
    <section id="services" className="py-12 md:py-16 bg-[#FAF8F5] text-[#1E162B] relative border-b border-[#E5DFD5] overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#F4F0FA] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-2xl space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#522B8A]">
              <span>{t.servicesNav}</span>
              <span aria-hidden="true" className="text-[#B48228]">·</span>
              <span className="text-[#7A5311]">1-on-1 Guidance</span>
            </div>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1E162B] leading-tight">
              {t.servicesTitle} — <br />
              <span className="italic font-semibold text-[#522B8A]">{t.servicesSubtitle}</span>
            </h2>
          </div>

          {/* Crisp Elevated Segmented Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-white rounded-xl self-start md:self-end border border-[#E6DFD3] shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('core')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'core'
                  ? 'bg-[#522B8A] text-white shadow-xs'
                  : 'text-[#4A4356] hover:text-[#1E162B] hover:bg-[#FAF8F5]'
              }`}
            >
              {lang === 'hi' ? 'प्रमुख साधना क्षेत्र' : 'Core Disciplines'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('catalog')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'catalog'
                  ? 'bg-[#522B8A] text-white shadow-xs'
                  : 'text-[#4A4356] hover:text-[#1E162B] hover:bg-[#FAF8F5]'
              }`}
            >
              {lang === 'hi' ? 'संपूर्ण सेवा सूची (11)' : 'Complete Catalog (11)'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('chakras')}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'chakras'
                  ? 'bg-[#522B8A] text-white shadow-xs'
                  : 'text-[#4A4356] hover:text-[#1E162B] hover:bg-[#FAF8F5]'
              }`}
            >
              <Sparkles size={13} className={activeTab === 'chakras' ? 'text-[#F3D899]' : 'text-[#B48228]'} />
              <span>{lang === 'hi' ? 'सप्त चक्र एवं आभा मंडल' : 'Animated 7 Chakras'}</span>
            </button>
          </div>
        </div>

        {/* TAB 1: Core 4 Services */}
        {activeTab === 'core' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {CORE_SERVICES.map((srv) => (
              <div
                key={srv.id}
                className="group rounded-2xl bg-white border border-[#E6DFD3] hover:border-[#DEC38C] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden flex flex-col"
              >
                {/* Matted Visual Header */}
                <div className="p-2.5 pb-0">
                  <div className="relative h-60 sm:h-64 rounded-xl overflow-hidden bg-[#F4F0FA]">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/images/hero_celestial_sacred_geometry_1792557572251.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/35 to-transparent" />
                    
                    <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-lg bg-white/95 backdrop-blur-xs border border-[#DEC38C] text-[#1E162B] text-xs font-black font-rupee tabular-nums shadow-md tracking-tight">
                      {srv.baseFee}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#F3D899]">
                        {lang === 'hi' ? srv.title_hi : srv.title}
                      </span>
                      <h3 className="font-cinzel text-xl sm:text-2xl text-white font-semibold leading-snug drop-shadow-xs">
                        {lang === 'hi' ? srv.title_hi : srv.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3.5">
                    <p className="text-xs font-bold text-[#522B8A] uppercase tracking-wider">
                      {lang === 'hi' ? srv.tagline_hi : srv.tagline}
                    </p>
                    <p className="text-sm text-[#4A4356] leading-relaxed font-normal">
                      {lang === 'hi' ? srv.summary_hi : srv.summary}
                    </p>

                    <div className="pt-2 space-y-2">
                      <span className="text-xs font-bold text-[#1E162B] uppercase tracking-wider block">
                        {lang === 'hi' ? 'सत्र में क्या शामिल है:' : 'Session Highlights:'}
                      </span>
                      {(lang === 'hi' ? srv.benefits_hi : srv.benefits).slice(0, 3).map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#4A4356]">
                          <Check size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Standardized Action Footer */}
                  <div className="pt-4 border-t border-[#EFECE6] flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-[#5D556A] font-medium">
                      <Clock size={13} className="text-[#B48228]" />
                      <span>{lang === 'hi' ? srv.sessionDuration_hi : srv.sessionDuration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedServiceModal(srv)}
                        className="h-9 px-3.5 rounded-lg bg-[#FAF8F5] hover:bg-[#F4F0FA] border border-[#E6DFD3] text-xs font-semibold text-[#1E162B] hover:text-[#522B8A] transition-colors cursor-pointer"
                      >
                        {lang === 'hi' ? 'विस्तार से जानें' : 'Learn More'}
                      </button>
                      <button
                        type="button"
                        onClick={() => onSelectServiceForBooking(srv.title)}
                        className="h-9 px-4 bg-[#522B8A] hover:bg-[#412070] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                      >
                        <span>{lang === 'hi' ? 'सत्र बुक करें' : 'Book Session'}</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: Complete 11-Service Catalog */}
        {activeTab === 'catalog' && (
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: lang === 'hi' ? 'सभी 11 सेवाएँ' : 'All 11 Offerings' },
                { id: 'healing', label: lang === 'hi' ? 'ऊर्जा एवं हीलिंग (5)' : 'Energy & Healing (5)' },
                { id: 'numerology', label: lang === 'hi' ? 'अंकशास्त्र शुद्धि (2)' : 'Numerology Corrections (2)' },
                { id: 'therapy', label: lang === 'hi' ? 'मानसिक संतुलन व विश्राम (3)' : 'Mind Balance & Therapy (3)' },
                { id: 'regression', label: lang === 'hi' ? 'पूर्व जन्म स्मृति सत्र (1)' : 'Past Life Regression (1)' },
              ].map((btn) => (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => setCatalogFilter(btn.id as any)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                    catalogFilter === btn.id
                      ? 'bg-[#522B8A] text-white shadow-xs'
                      : 'bg-white text-[#4A4356] hover:bg-[#F4F0FA] border border-[#E6DFD3]'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCatalog.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white border border-[#E6DFD3] hover:border-[#DEC38C] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div className="p-2 pb-0">
                    <div className="relative h-48 sm:h-52 rounded-xl overflow-hidden bg-[#F4F0FA]">
                      <img
                        src={item.image || '/assets/images/vedic_numerology_sacred_cosmos_1792557572243.jpg'}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/assets/images/hero_celestial_sacred_geometry_1792557572251.jpg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/35 to-transparent" />

                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs border border-[#DEC38C] text-[#1E162B] text-xs font-black font-rupee tabular-nums shadow-md tracking-tight">
                        {item.feeFormatted}
                      </div>

                      {item.badge && (
                        <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-[#522B8A] text-white text-[10px] font-bold shadow-xs">
                          {item.badge_en || item.badge}
                        </div>
                      )}

                      <div className="absolute bottom-3 left-3.5 right-3.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#F3D899] block mb-0.5">
                          {lang === 'hi' ? item.categoryLabel_hi : item.categoryLabel_en}
                        </span>
                        <h3 className="font-cinzel text-base sm:text-lg font-bold text-white truncate drop-shadow-xs">
                          {lang === 'hi' ? item.title : item.title_en}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <p className="text-xs text-[#4A4356] leading-relaxed font-normal">
                        {lang === 'hi' ? item.description : item.description_en}
                      </p>

                      {item.duration && (
                        <div className="flex items-center gap-1.5 text-xs text-[#5D556A] pt-1">
                          <Clock size={13} className="text-[#522B8A]" />
                          <span>{lang === 'hi' ? item.duration : item.duration_en}</span>
                        </div>
                      )}

                      {item.importantDisclaimer && (
                        <p className="text-[11px] text-amber-900 bg-amber-50 p-2.5 rounded-lg border border-amber-200 leading-relaxed">
                          {item.importantDisclaimer_en}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[#EFECE6] flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] uppercase text-[#5D556A] font-semibold block">परामर्श शुल्क</span>
                        <span className="font-rupee text-base font-black text-[#1E162B] tabular-nums">
                          {item.feeFormatted}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectServiceForBooking(lang === 'hi' ? item.title : item.title_en)}
                        className="h-9 px-4 bg-[#522B8A] hover:bg-[#412070] text-white text-xs font-bold rounded-lg transition-colors shadow-xs flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>{lang === 'hi' ? 'सत्र बुक करें' : 'Book Session'}</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Animated 7 Chakras Visualizer */}
        {activeTab === 'chakras' && (
          <ChakraAuraVisualizer
            onSelectChakraForConsultation={(name) => onSelectServiceForBooking(name)}
          />
        )}

        {/* Unified 11 Specialized Healing & Correction Services + Consultancy Fee ₹5,100 Screen */}
        <div className="mt-10 pt-8 border-t border-[#E6DFD3]">
          <SpecializedServicesFeeBanner
            lang={lang}
            onBookService={onSelectServiceForBooking}
            onOpenTariff={onOpenTariff}
            onOpenBankUpi={onOpenBankUpi}
          />
        </div>

      </div>

      {/* Modal for Core Service details */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E6DFD3] overflow-hidden max-h-[90vh] flex flex-col">
            <div className="relative h-44 sm:h-52 overflow-hidden bg-[#F4F0FA] shrink-0">
              <img
                src={selectedServiceModal.image || '/assets/images/vedic_numerology_sacred_cosmos_1792557572243.jpg'}
                alt={selectedServiceModal.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/images/hero_celestial_sacred_geometry_1792557572251.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent" />
              
              <button
                type="button"
                onClick={() => setSelectedServiceModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white text-[#1E162B] z-10 transition-all cursor-pointer shadow-lg"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[11px] font-bold text-[#F3D899] uppercase tracking-wider block mb-1">
                  {lang === 'hi' ? selectedServiceModal.title_hi : selectedServiceModal.title}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl text-white font-semibold drop-shadow-md">
                  {lang === 'hi' ? selectedServiceModal.title_hi : selectedServiceModal.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#4A4356]">
              <div>
                <h4 className="font-bold text-xs text-[#522B8A] uppercase tracking-wider mb-2">
                  {lang === 'hi' ? 'विस्तृत विवरण एवं प्रभाव' : 'Comprehensive Scope'}
                </h4>
                <p className="leading-relaxed">
                  {lang === 'hi' && selectedServiceModal.fullDescription_hi
                    ? selectedServiceModal.fullDescription_hi
                    : selectedServiceModal.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xs text-[#522B8A] uppercase tracking-wider mb-2">
                  {lang === 'hi' ? 'यह परामर्श किसके लिए आवश्यक है?' : 'Who Is This For?'}
                </h4>
                <p className="text-xs leading-relaxed text-[#4A4356] bg-[#FAF8F5] p-3.5 rounded-xl border border-[#E6DFD3]">
                  {lang === 'hi' && selectedServiceModal.whoIsThisFor_hi
                    ? selectedServiceModal.whoIsThisFor_hi
                    : selectedServiceModal.whoIsThisFor}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-xs text-[#522B8A] uppercase tracking-wider mb-2">
                  {lang === 'hi' ? 'सत्र में आपको क्या प्राप्त होगा:' : 'What You Receive:'}
                </h4>
                <div className="space-y-2">
                  {((lang === 'hi' && selectedServiceModal.deliverables_hi)
                    ? selectedServiceModal.deliverables_hi
                    : selectedServiceModal.deliverables
                  ).map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#1E162B]">
                      <Check size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Standardized Fee + Direct Verified UPI QR Preview */}
              <div className="p-4 rounded-2xl bg-[#FBF5E6] border border-[#DEC38C] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white text-[#522B8A] border border-[#DFD5F0]">
                      11 Specialized Services
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white text-[#7A5311] border border-[#DEC38C]">
                      All 16 Divine Services
                    </span>
                  </div>
                  <div className="font-rupee text-2xl font-black text-[#1E162B] tracking-tight pt-1">
                    {selectedServiceModal.baseFee || '₹5,100'}
                  </div>
                  <p className="text-[11px] text-[#5D556A] font-medium">
                    {lang === 'hi' ? 'प्रति सत्र (वीडियो / ऑडियो कॉल)' : 'Per session (Virtual / Telephonic)'} · 9105731969@upi
                  </p>
                </div>
                <div className="p-1.5 rounded-xl bg-white border border-[#E6DFD3] shrink-0 shadow-2xs">
                  <img
                    src="/assets/aistudio/Screenshot_2026-11-17_120046_1b5aa9a9.png"
                    alt="UPI QR Code - Pooja Awasthi (9105731969@upi)"
                    className="w-20 h-20 object-contain rounded-lg"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('upi-qr-9105731969.svg')) {
                        target.src = '/upi-qr-9105731969.svg';
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-[#FAF8F5] border-t border-[#E6DFD3] flex items-center justify-between">
              <div className="text-xs text-[#4A4356]">
                <span className="font-semibold">{lang === 'hi' ? 'परामर्श शुल्क: ' : 'Consultancy Fee: '}</span>
                <span className="font-rupee text-lg font-black text-[#1E162B]">{selectedServiceModal.baseFee}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  const title = lang === 'hi' ? selectedServiceModal.title_hi : selectedServiceModal.title;
                  setSelectedServiceModal(null);
                  onSelectServiceForBooking(title);
                }}
                className="h-10 px-5 bg-[#522B8A] hover:bg-[#412070] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                {lang === 'hi' ? 'परामर्श सत्र प्राप्त करें' : 'Proceed to Book'}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

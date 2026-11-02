import React, { useState } from 'react';
import { CORE_SERVICES, CoreService, CATALOG_SERVICES, CatalogServiceItem } from '../data/servicesData';
import { CHAKRAS_DATA, ChakraItem } from '../data/chakrasData';
import { ArrowRight, Check, Clock, Sparkles, X, ChevronRight, Shield, Layers, Sun } from 'lucide-react';
import { getTranslation } from '../data/translations';
import { ChakraAuraVisualizer } from './ChakraAuraVisualizer';
import { useSiteContent } from '../utils/siteContentContext';

interface ServicesSectionProps {
  lang: string;
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onSelectServiceForBooking }) => {
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
    <section id="services" className="py-20 md:py-28 bg-[#FBF8F2] text-[#29242E] relative border-t border-[#EAE2F4] overflow-hidden">
      {/* Background ambient color glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#6941A5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#6941A5]">
              <span>{t.servicesNav}</span>
              <span aria-hidden="true">·</span>
              <span>1-on-1 Guidance</span>
            </div>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-[#24152F] leading-tight">
              {t.servicesTitle} — <br />
              <span className="italic font-normal text-[#6941A5]">{t.servicesSubtitle}</span>
            </h2>
          </div>

          {/* Interactive Mode Tabs - Compact Spacing */}
          <div className="flex items-center gap-1 p-0.5 bg-[#EAE2F4]/80 rounded-xl self-start md:self-end border border-[#EAE2F4] shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('core')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'core'
                  ? 'bg-[#24152F] text-white shadow-sm'
                  : 'text-[#29242E]/70 hover:text-[#24152F]'
              }`}
            >
              {lang === 'hi' ? 'प्रमुख साधना क्षेत्र' : 'Core Disciplines'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('catalog')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'catalog'
                  ? 'bg-[#24152F] text-white shadow-sm'
                  : 'text-[#29242E]/70 hover:text-[#24152F]'
              }`}
            >
              {lang === 'hi' ? 'संपूर्ण सेवा सूची (11)' : 'Complete Catalog (11)'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('chakras')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'chakras'
                  ? 'bg-[#24152F] text-[#D6B574] shadow-sm'
                  : 'text-[#29242E]/70 hover:text-[#24152F]'
              }`}
            >
              <Sparkles size={12} className="text-[#D6B574]" />
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
                className="group rounded-2xl bg-white border border-[#EAE2F4] hover:border-[#D6B574]/80 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden flex flex-col"
              >
                {/* Visual Header */}
                <div className="relative h-60 sm:h-64 overflow-hidden bg-[#24152F]">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/assets/images/hero_celestial_sacred_geometry_1792557572251.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#24152F] via-[#24152F]/40 to-transparent" />
                  
                  <div className="absolute top-4 right-4 px-3 py-1 rounded bg-[#24152F]/90 backdrop-blur-xs border border-[#D6B574]/50 text-[#D6B574] text-xs font-bold tabular-nums shadow-sm">
                    {srv.baseFee}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D6B574]">
                      {lang === 'hi' ? srv.title_hi : srv.title}
                    </span>
                    <h3 className="font-cinzel text-xl sm:text-2xl text-white font-medium leading-snug">
                      {lang === 'hi' ? srv.title_hi : srv.title}
                    </h3>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <p className="text-xs font-semibold text-[#6941A5] uppercase tracking-wider">
                      {lang === 'hi' ? srv.tagline_hi : srv.tagline}
                    </p>
                    <p className="text-sm text-[#29242E]/80 leading-relaxed font-normal">
                      {lang === 'hi' ? srv.summary_hi : srv.summary}
                    </p>

                    {/* Key benefits list */}
                    <div className="pt-2 space-y-2">
                      <span className="text-xs font-bold text-[#24152F] uppercase tracking-wider block">
                        {lang === 'hi' ? 'सत्र में क्या शामिल है:' : 'Session Highlights:'}
                      </span>
                      {(lang === 'hi' ? srv.benefits_hi : srv.benefits).slice(0, 3).map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#29242E]/75">
                          <Check size={14} className="text-[#6941A5] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#EAE2F4] flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-[#29242E]/60">
                      <Clock size={13} />
                      <span>{lang === 'hi' ? srv.sessionDuration_hi : srv.sessionDuration}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedServiceModal(srv)}
                        className="px-3.5 py-2 text-xs font-medium text-[#24152F] hover:text-[#6941A5] transition-colors"
                      >
                        {lang === 'hi' ? 'विस्तार से जानें' : 'Learn More'}
                      </button>
                      <button
                        type="button"
                        onClick={() => onSelectServiceForBooking(srv.title)}
                        className="px-4 py-2 bg-[#24152F] hover:bg-[#341e44] text-[#D6B574] text-xs font-bold rounded-md transition-colors flex items-center gap-1 shadow-sm"
                      >
                        <span>{lang === 'hi' ? 'सत्र निर्धारित करें' : 'Book Session'}</span>
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
            {/* Filter buttons */}
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
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    catalogFilter === btn.id
                      ? 'bg-[#24152F] text-white shadow-xs'
                      : 'bg-white text-[#29242E]/70 hover:bg-[#EAE2F4]/60 border border-[#EAE2F4]'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Catalog Grid with Photo Banners */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCatalog.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl bg-white border border-[#EAE2F4] hover:border-[#D6B574]/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Photo Banner Header */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-[#24152F]">
                    <img
                      src={item.image || '/assets/images/vedic_numerology_sacred_cosmos_1792557572243.jpg'}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/assets/images/hero_celestial_sacred_geometry_1792557572251.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#24152F] via-[#24152F]/40 to-transparent" />

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#24152F]/90 backdrop-blur-xs border border-[#D6B574]/50 text-[#D6B574] text-xs font-bold tabular-nums shadow-sm">
                      {item.feeFormatted}
                    </div>

                    {item.badge && (
                      <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-[#6941A5]/90 backdrop-blur-xs text-white text-[10px] font-semibold border border-white/10">
                        {item.badge_en || item.badge}
                      </div>
                    )}

                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D6B574] block mb-0.5">
                        {lang === 'hi' ? item.categoryLabel_hi : item.categoryLabel_en}
                      </span>
                      <h3 className="font-cinzel text-base sm:text-lg font-bold text-white truncate drop-shadow-xs">
                        {lang === 'hi' ? item.title : item.title_en}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <p className="text-xs text-[#29242E]/75 leading-relaxed font-normal">
                        {lang === 'hi' ? item.description : item.description_en}
                      </p>

                      {item.duration && (
                        <div className="flex items-center gap-1.5 text-xs text-[#29242E]/60 pt-1">
                          <Clock size={13} className="text-[#6941A5]" />
                          <span>{lang === 'hi' ? item.duration : item.duration_en}</span>
                        </div>
                      )}

                      {item.importantDisclaimer && (
                        <p className="text-[11px] text-amber-800 bg-amber-50 p-2.5 rounded-lg border border-amber-200/50 leading-relaxed">
                          {item.importantDisclaimer_en}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[#EAE2F4] flex items-center justify-between gap-4">
                      <div className="text-xs text-[#29242E]/60">
                        <span className="text-[10px] uppercase text-[#29242E]/50 block">परामर्श शुल्क</span>
                        <span className="font-cinzel text-base font-bold text-[#24152F] tabular-nums">
                          {item.feeFormatted}
                        </span>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectServiceForBooking(lang === 'hi' ? item.title : item.title_en)}
                        className="px-4 py-2 bg-[#24152F] hover:bg-[#341e44] text-[#D6B574] text-xs font-bold rounded-md transition-colors shadow-sm flex items-center gap-1 cursor-pointer"
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

      </div>

      {/* Full Modal for Core Service details */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#D6B574]/40 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Image Header Banner */}
            <div className="relative h-44 sm:h-52 overflow-hidden bg-[#24152F] shrink-0">
              <img
                src={selectedServiceModal.image || '/assets/images/vedic_numerology_sacred_cosmos_1792557572243.jpg'}
                alt={selectedServiceModal.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/images/hero_celestial_sacred_geometry_1792557572251.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#24152F] via-[#24152F]/50 to-transparent" />
              
              <button
                type="button"
                onClick={() => setSelectedServiceModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white z-10 transition-all cursor-pointer shadow-lg"
              >
                <X size={18} />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[11px] font-bold text-[#D6B574] uppercase tracking-wider block mb-1 drop-shadow-xs">
                  {lang === 'hi' ? selectedServiceModal.title_hi : selectedServiceModal.title}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl text-white font-medium drop-shadow-md">
                  {lang === 'hi' ? selectedServiceModal.title_hi : selectedServiceModal.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#29242E]/85">
              <div>
                <h4 className="font-semibold text-xs text-[#6941A5] uppercase tracking-wider mb-2">
                  {lang === 'hi' ? 'विस्तृत विवरण एवं प्रभाव' : 'Comprehensive Scope'}
                </h4>
                <p className="leading-relaxed">
                  {lang === 'hi' && selectedServiceModal.fullDescription_hi
                    ? selectedServiceModal.fullDescription_hi
                    : selectedServiceModal.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-xs text-[#6941A5] uppercase tracking-wider mb-2">
                  {lang === 'hi' ? 'यह परामर्श किसके लिए आवश्यक है?' : 'Who Is This For?'}
                </h4>
                <p className="text-xs leading-relaxed text-[#29242E]/75 bg-[#FBF8F2] p-3 rounded-lg border border-[#EAE2F4]">
                  {lang === 'hi' && selectedServiceModal.whoIsThisFor_hi
                    ? selectedServiceModal.whoIsThisFor_hi
                    : selectedServiceModal.whoIsThisFor}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-xs text-[#6941A5] uppercase tracking-wider mb-2">
                  {lang === 'hi' ? 'सत्र में आपको क्या प्राप्त होगा:' : 'What You Receive:'}
                </h4>
                <div className="space-y-2">
                  {((lang === 'hi' && selectedServiceModal.deliverables_hi)
                    ? selectedServiceModal.deliverables_hi
                    : selectedServiceModal.deliverables
                  ).map((d, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <Check size={14} className="text-[#6941A5] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-6 bg-[#FBF8F2] border-t border-[#EAE2F4] flex items-center justify-between">
              <div className="text-xs text-[#29242E]/70">
                <span className="font-semibold">{lang === 'hi' ? 'मानक परामर्श दक्षिणा: ' : 'Standard Fee: '}</span>
                <span className="font-cinzel text-base font-bold text-[#24152F]">{selectedServiceModal.baseFee}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  const title = lang === 'hi' ? selectedServiceModal.title_hi : selectedServiceModal.title;
                  setSelectedServiceModal(null);
                  onSelectServiceForBooking(title);
                }}
                className="px-5 py-2.5 bg-[#24152F] hover:bg-[#341e44] text-[#D6B574] font-semibold text-xs uppercase tracking-wider rounded-md transition-colors"
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

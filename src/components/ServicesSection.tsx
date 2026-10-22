import React, { useState } from 'react';
import { CORE_SERVICES, CoreService, CATALOG_SERVICES, CatalogServiceItem } from '../data/servicesData';
import { CHAKRAS_DATA, ChakraItem } from '../data/chakrasData';
import { ArrowRight, Check, Clock, Sparkles, X, ChevronRight, Shield, Layers, Sun } from 'lucide-react';
import { getTranslation } from '../data/translations';
import { ChakraAuraVisualizer } from './ChakraAuraVisualizer';

interface ServicesSectionProps {
  lang: string;
  onSelectServiceForBooking: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onSelectServiceForBooking }) => {
  const [activeTab, setActiveTab] = useState<'core' | 'catalog' | 'chakras'>('core');
  const [selectedServiceModal, setSelectedServiceModal] = useState<CoreService | null>(null);
  const [catalogFilter, setCatalogFilter] = useState<'all' | 'healing' | 'numerology' | 'therapy' | 'regression'>('all');
  const t = getTranslation(lang);

  const filteredCatalog = catalogFilter === 'all'
    ? CATALOG_SERVICES
    : CATALOG_SERVICES.filter(item => item.category === catalogFilter);

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FBF8F2] text-[#29242E] relative border-t border-[#EAE2F4] overflow-hidden">
      {/* Background ambient color glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#6941A5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
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

          {/* Interactive Mode Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EAE2F4]/80 rounded-xl self-start md:self-end border border-[#EAE2F4] shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('core')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'core'
                  ? 'bg-[#24152F] text-white shadow-sm'
                  : 'text-[#29242E]/70 hover:text-[#24152F]'
              }`}
            >
              Core Disciplines
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('catalog')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'catalog'
                  ? 'bg-[#24152F] text-white shadow-sm'
                  : 'text-[#29242E]/70 hover:text-[#24152F]'
              }`}
            >
              Complete Catalog (11)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('chakras')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'chakras'
                  ? 'bg-[#24152F] text-[#D6B574] shadow-sm'
                  : 'text-[#29242E]/70 hover:text-[#24152F]'
              }`}
            >
              <Sparkles size={12} className="text-[#D6B574]" />
              <span>Animated 7 Chakras</span>
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
                        Learn More
                      </button>
                      <button
                        type="button"
                        onClick={() => onSelectServiceForBooking(srv.title)}
                        className="px-4 py-2 bg-[#24152F] hover:bg-[#341e44] text-[#D6B574] text-xs font-bold rounded-md transition-colors flex items-center gap-1 shadow-sm"
                      >
                        <span>Book Session</span>
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
                { id: 'all', label: 'All 11 Offerings' },
                { id: 'healing', label: 'Energy & Healing (5)' },
                { id: 'numerology', label: 'Numerology Corrections (2)' },
                { id: 'therapy', label: 'Mind Balance & Therapy (3)' },
                { id: 'regression', label: 'Past Life Regression (1)' },
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

            {/* Catalog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCatalog.map((item) => (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-white border border-[#EAE2F4] hover:border-[#D6B574]/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-[#6941A5] uppercase tracking-wider">
                        {item.categoryLabel_en}
                      </span>
                      {item.badge && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#6941A5]/10 text-[#6941A5]">
                          {item.badge_en || item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-cinzel text-lg font-bold text-[#24152F] group-hover:text-[#6941A5] transition-colors">
                      {lang === 'hi' ? item.title : item.title_en}
                    </h3>

                    <p className="text-xs text-[#29242E]/75 leading-relaxed font-normal">
                      {lang === 'hi' ? item.description : item.description_en}
                    </p>

                    {item.importantDisclaimer && (
                      <p className="text-[11px] text-amber-800 bg-amber-50 p-2.5 rounded-lg border border-amber-200/50 leading-relaxed">
                        {item.importantDisclaimer_en}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#EAE2F4] flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase text-[#29242E]/50 block">
                        Session Fee
                      </span>
                      <span className="font-cinzel text-lg font-bold text-[#24152F] tabular-nums">
                        {item.feeFormatted}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectServiceForBooking(lang === 'hi' ? item.title : item.title_en)}
                      className="px-4 py-1.5 bg-[#D6B574] hover:bg-[#e4ca8c] text-[#24152F] text-xs font-bold rounded transition-colors shadow-xs"
                    >
                      Book
                    </button>
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
            <div className="p-6 bg-[#24152F] text-white flex items-center justify-between border-b border-[#D6B574]/30">
              <div>
                <span className="text-[11px] font-bold text-[#D6B574] uppercase tracking-wider">
                  {lang === 'hi' ? selectedServiceModal.title_hi : selectedServiceModal.title}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl text-white font-medium">
                  {lang === 'hi' ? selectedServiceModal.title_hi : selectedServiceModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedServiceModal(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-[#EAE2F4]"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#29242E]/85">
              <div>
                <h4 className="font-semibold text-xs text-[#6941A5] uppercase tracking-wider mb-2">
                  Comprehensive Scope
                </h4>
                <p className="leading-relaxed">
                  {selectedServiceModal.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-xs text-[#6941A5] uppercase tracking-wider mb-2">
                  Who Is This For?
                </h4>
                <p className="text-xs leading-relaxed text-[#29242E]/75 bg-[#FBF8F2] p-3 rounded-lg border border-[#EAE2F4]">
                  {selectedServiceModal.whoIsThisFor}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-xs text-[#6941A5] uppercase tracking-wider mb-2">
                  What You Receive:
                </h4>
                <div className="space-y-2">
                  {selectedServiceModal.deliverables.map((d, i) => (
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
                <span className="font-semibold">Standard Fee: </span>
                <span className="font-cinzel text-base font-bold text-[#24152F]">{selectedServiceModal.baseFee}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  const title = selectedServiceModal.title;
                  setSelectedServiceModal(null);
                  onSelectServiceForBooking(title);
                }}
                className="px-5 py-2.5 bg-[#24152F] hover:bg-[#341e44] text-[#D6B574] font-semibold text-xs uppercase tracking-wider rounded-md transition-colors"
              >
                Proceed to Book
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

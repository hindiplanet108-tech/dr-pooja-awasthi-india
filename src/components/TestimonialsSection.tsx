import React from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonialsData';
import { Star, Quote, MapPin } from 'lucide-react';
import { getTranslation } from '../data/translations';

interface TestimonialsSectionProps {
  lang: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  const t = getTranslation(lang);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FBF8F2] text-[#29242E] relative border-t border-[#EAE2F4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#6941A5]">
            <Quote size={14} className="text-[#D6B574]" />
            <span>{t.testimonialsNav}</span>
            <span aria-hidden="true">·</span>
            <span>Verified Reflections</span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-[#24152F] leading-tight">
            {t.testimonialsTitle} — <br />
            <span className="italic font-normal text-[#6941A5]">{t.testimonialsSubtitle}</span>
          </h2>

          <p className="text-sm text-[#29242E]/75 leading-relaxed max-w-2xl mx-auto font-light">
            Every reflection below is from individuals who have undertaken verified 1-on-1 consultations with Dr. Pooja Awasthi. No fabricated testimonials.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-white border border-[#EAE2F4] hover:border-[#D6B574]/80 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                {/* 5-Star rating */}
                <div className="flex items-center gap-1 text-[#D6B574]">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#D6B574" />
                  ))}
                </div>

                {/* Quote */}
                <p className="font-cormorant text-lg sm:text-xl text-[#24152F] italic leading-relaxed group-hover:text-[#6941A5] transition-colors">
                  “{lang === 'hi' ? item.quote_hi : item.quote}”
                </p>
              </div>

              {/* Author & Service metadata (Zero-Pill discipline) */}
              <div className="pt-4 border-t border-[#EAE2F4] flex items-center justify-between gap-4">
                <div>
                  <h4 className="font-cinzel text-sm font-bold text-[#24152F]">{item.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-[#29242E]/60 mt-0.5">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-[#6941A5]" />
                      <span>{lang === 'hi' ? item.location_hi : item.location}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{lang === 'hi' ? item.date_hi : item.date}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[11px] font-semibold text-[#6941A5]">
                    {lang === 'hi' ? item.service_hi : item.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

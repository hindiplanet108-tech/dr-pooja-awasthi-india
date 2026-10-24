import React, { useState, useEffect } from 'react';
import { AWARDS_DATA, AwardItem } from '../data/awardsData';
import { Award, Trophy, BookmarkCheck, ExternalLink, X, Upload, Camera, Sparkles, CheckCircle2 } from 'lucide-react';
import { getStoredMedia, saveStoredMedia } from '../utils/photoStorage';
import { getTranslation } from '../data/translations';
import poojaAuthenticPhoto from '../assets/images/pooja_awasthi_portrait.jpeg';

interface AwardsSectionProps {
  lang: string;
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'conclave' | 'felicitation' | 'memento_press'>('all');
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>({});
  const t = getTranslation(lang);

  useEffect(() => {
    // Load custom uploaded award photos from IndexedDB / storage if any
    AWARDS_DATA.forEach((award) => {
      getStoredMedia(`award_${award.id}`).then((stored) => {
        if (stored) {
          setCustomPhotos((prev) => ({ ...prev, [award.id]: stored }));
        }
      });
    });
  }, []);

  const handleUploadAwardPhoto = (awardId: string, file: File) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        await saveStoredMedia(`award_${awardId}`, dataUrl);
        setCustomPhotos((prev) => ({ ...prev, [awardId]: dataUrl }));
      }
    };
    reader.readAsDataURL(file);
  };

  const filteredAwards = AWARDS_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'memento_press') return item.category === 'memento' || item.category === 'press';
    return item.category === activeCategory;
  });

  return (
    <section id="honors" className="py-20 md:py-28 bg-[#24152F] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#6941A5]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D6B574]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D6B574]">
            <Trophy size={14} />
            <span>{t.awardsNav}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">26 Verified Felicitations</span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
            {t.awardsTitle} — <br />
            <span className="italic font-normal text-[#D6B574]">{t.awardsSubtitle}</span>
          </h2>

          <p className="text-sm text-[#EAE2F4]/80 leading-relaxed font-light">
            {lang === 'hi'
              ? 'उत्तराखंड के माननीय राज्यपाल ले. ज. गुरमीत सिंह, काशी हिन्दू विश्वविद्यालय (BHU) के ज्योतिष विभागाध्यक्ष आचार्य चंद्रमौली उपाध्याय जी, एवं महाकाल उज्जैन के पावन सानिध्य में प्राप्त राष्ट्रीय सम्मान।'
              : 'Honored by distinguished dignitaries including Hon. Governor of Uttarakhand Lt. Gen. Gurmeet Singh, BHU Astrology Department Head Acharya Chandramouli Upadhyay, and revered spiritual authorities across national conclaves.'}
          </p>
        </div>

        {/* Honoree Spotlight Feature with Original Photo: Dynamic Excellence Awards 2025 */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-white/5 border border-[#D6B574]/40 backdrop-blur-md flex flex-col md:flex-row items-center gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute -right-8 -bottom-8 w-44 h-44 bg-[#D6B574]/15 rounded-full blur-2xl pointer-events-none" />
          
          <div className="w-28 h-36 sm:w-36 sm:h-44 rounded-xl overflow-hidden border-2 border-[#D6B574] shrink-0 shadow-lg relative bg-[#1c0f26]">
            <img
              src="/assets/aistudio/__________________National_director_of_Nafeed-2_f0142bbc.jpeg"
              alt="माननीय अशोक ठाकुर National Director of Nafeed द्वारा सम्मानित - डायनामिक एक्सीलेंस अवार्ड्स 2025"
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                const target = e.currentTarget;
                if (target.src !== '/ashok_thakur_nafeed_award_2025.jpeg') target.src = '/ashok_thakur_nafeed_award_2025.jpeg';
              }}
            />
          </div>

          <div className="space-y-2 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#D6B574]/20 border border-[#D6B574]/40 text-[#D6B574] text-[11px] font-semibold">
              <Sparkles size={11} />
              <span>{lang === 'hi' ? 'विशेष राष्ट्रीय सम्मान' : 'Featured National Honor'}</span>
            </div>
            <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
              {lang === 'hi' ? 'डायनामिक एक्सीलेंस अवार्ड्स 2025' : 'Dynamic Excellence Awards 2025'}
            </h3>
            <p className="text-sm font-semibold text-[#D6B574]">
              {lang === 'hi'
                ? 'माननीय अशोक ठाकुर (National Director of Nafeed) द्वारा सम्मानित'
                : 'Honored by Shri Ashok Thakur, National Director of NAFED'}
            </p>
            <p className="text-xs text-[#EAE2F4]/80 leading-relaxed max-w-3xl">
              {lang === 'hi'
                ? 'वैदिक अंकशास्त्र, टैरो एवं लोक कल्याण के क्षेत्र में विशिष्ट योगदान हेतु डायनामिक एक्सीलेंस अवार्ड्स 2025 के गरिमामय मंच पर डॉ. पूजा अवस्थी को नाफेड (Nafeed) के नेशनल डायरेक्टर माननीय अशोक ठाकुर जी द्वारा सम्मानित किया गया।'
                : 'Dr. Pooja Awasthi was honored by Shri Ashok Thakur, National Director of NAFED on stage at the prestigious Dynamic Excellence Awards 2025 in recognition of her dedication to Vedic wisdom and conscious guidance.'}
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {[
            { id: 'all', label_en: 'All 26 Honors', label_hi: 'सभी 26 सम्मान' },
            { id: 'conclave', label_en: 'Conclaves & Summits (11)', label_hi: 'राष्ट्रीय महासम्मेलन (11)' },
            { id: 'felicitation', label_en: 'National Felicitations (13)', label_hi: 'मंच सम्मान व पदक (13)' },
            { id: 'memento_press', label_en: 'Trophies & Press (2)', label_hi: 'स्मृति चिन्ह व समाचार (2)' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#D6B574] via-[#eedbb3] to-[#D6B574] text-[#24152F] shadow-md font-bold'
                  : 'bg-white/5 hover:bg-white/10 text-[#EAE2F4]/80 border border-[#D6B574]/20'
              }`}
            >
              {lang === 'hi' ? cat.label_hi : cat.label_en}
            </button>
          ))}
        </div>

        {/* 26 Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAwards.map((award, index) => {
            const hasCustomPhoto = !!customPhotos[award.id];

            return (
              <div
                key={award.id}
                className="group rounded-2xl bg-white/5 border border-[#D6B574]/20 hover:border-[#D6B574]/70 p-5 flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.08] shadow-sm hover:shadow-lg"
              >
                <div className="space-y-4">
                  {/* Photo or Ceremonial Badge */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#1c0f26] border border-[#D6B574]/30 flex items-center justify-center text-center">
                    {hasCustomPhoto ? (
                      <img
                        src={customPhotos[award.id]}
                        alt={award.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      /* Authentic Photo Presentation with Gold Seal Overlay */
                      <div className="relative w-full h-full overflow-hidden group/thumb cursor-pointer" onClick={() => setSelectedAward(award)}>
                        <img
                          src={award.imageUrl || poojaAuthenticPhoto}
                          alt={`${award.event} - Dr. Pooja Awasthi`}
                          className="w-full h-full object-cover object-top opacity-95 transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (target.src !== '/28.jpeg') target.src = '/28.jpeg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1c0f26] via-[#1c0f26]/40 to-transparent" />
                        <div className="absolute bottom-2 inset-x-2 flex items-center justify-between px-2">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#24152F]/90 border border-[#D6B574]/50 text-[10px] text-[#D6B574] font-bold">
                            <Award size={11} />
                            <span>Honor #{index + 1}</span>
                          </span>
                          <span className="text-[10px] text-[#D6B574]/80 font-mono">{award.filename}</span>
                        </div>
                      </div>
                    )}

                    {/* Category tag */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#24152F]/90 backdrop-blur-xs text-[10px] font-semibold text-[#D6B574] border border-[#D6B574]/30 uppercase tracking-wider">
                      {award.category === 'conclave'
                        ? 'Conclave'
                        : award.category === 'felicitation'
                        ? 'Felicitation'
                        : 'Memento'}
                    </div>

                    {/* Upload / replace affordance */}
                    <label
                      title="Upload photo/certificate"
                      className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-[#24152F]/80 text-[#D6B574] hover:bg-[#24152F] hover:text-white border border-[#D6B574]/30 cursor-pointer transition-colors shadow-xs"
                    >
                      <Camera size={13} />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleUploadAwardPhoto(award.id, file);
                        }}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Text details */}
                  <div className="space-y-1.5">
                    <h3 className="font-cinzel text-base font-semibold text-white leading-snug group-hover:text-[#D6B574] transition-colors">
                      {lang === 'hi' ? award.event_hi : award.event}
                    </h3>

                    {award.caption && (
                      <p className="text-xs text-[#EAE2F4]/75 leading-relaxed font-light line-clamp-3">
                        {award.caption}
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer action */}
                <div className="pt-4 mt-4 border-t border-[#D6B574]/15 flex items-center justify-between">
                  <span className="text-[11px] text-[#D6B574]/70 font-mono">
                    {award.filename}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedAward(award)}
                    className="text-xs font-medium text-[#D6B574] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>View Citation</span>
                    <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox / Citation Modal */}
      {selectedAward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-[#24152F] text-white rounded-2xl border border-[#D6B574]/50 shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574]">
                  {selectedAward.category.toUpperCase()} · VERIFIED RECORD
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                  {lang === 'hi' ? selectedAward.event_hi : selectedAward.event}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAward(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-[#EAE2F4]"
              >
                <X size={20} />
              </button>
            </div>

            {/* Custom Photo preview or Authentic Honoree Portrait with Citation */}
            <div className="rounded-xl overflow-hidden bg-black/40 border border-[#D6B574]/30 aspect-video relative flex items-center justify-center">
              <img
                src={customPhotos[selectedAward.id] || selectedAward.imageUrl || poojaAuthenticPhoto}
                alt={selectedAward.alt}
                className="w-full h-full object-contain bg-[#1c0f26]"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/28.jpeg') target.src = '/28.jpeg';
                }}
              />
              <div className="absolute bottom-3 right-3">
                <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#24152F]/90 hover:bg-[#24152F] text-[#D6B574] border border-[#D6B574]/50 text-xs font-semibold backdrop-blur-sm transition-all shadow-md">
                  <Camera size={13} />
                  <span>Update Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleUploadAwardPhoto(selectedAward.id, file);
                    }}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Citation & Dignitaries Details */}
            <div className="space-y-2 text-xs sm:text-sm text-[#EAE2F4]/85 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
              <span className="font-bold text-[#D6B574] uppercase text-xs block">
                Citation & Dignitaries:
              </span>
              <p>{selectedAward.caption || selectedAward.event}</p>
              <p className="text-[11px] text-[#EAE2F4]/60 pt-1">
                Asset Reference: {selectedAward.filename}
              </p>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedAward(null)}
                className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

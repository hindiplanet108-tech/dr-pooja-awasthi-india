import React, { useState } from 'react';
import { TAROT_DECK, TarotCard } from '../data/tarotData';
import { Sparkles, RefreshCw, Compass } from 'lucide-react';

interface TarotOracleSectionProps {
  onBookTarot: (notes: string) => void;
  lang?: string;
}

export const TarotOracleSection: React.FC<TarotOracleSectionProps> = ({ onBookTarot, lang = 'en' }) => {
  const [spreadMode, setSpreadMode] = useState<'single' | 'three'>('single');
  const [currentSingleCard, setCurrentSingleCard] = useState<TarotCard>(TAROT_DECK[0]);
  const [threeSpread, setThreeSpread] = useState<{ past: TarotCard; present: TarotCard; future: TarotCard }>({
    past: TAROT_DECK[4],
    present: TAROT_DECK[0],
    future: TAROT_DECK[1]
  });
  const [isFlipping, setIsFlipping] = useState(false);

  const drawRandomCard = () => {
    setIsFlipping(true);
    setTimeout(() => {
      const shuffled = [...TAROT_DECK].sort(() => Math.random() - 0.5);
      if (spreadMode === 'single') {
        setCurrentSingleCard(shuffled[0]);
      } else {
        setThreeSpread({
          past: shuffled[0],
          present: shuffled[1],
          future: shuffled[2]
        });
      }
      setIsFlipping(false);
    }, 350);
  };

  return (
    <section id="tarot" className="py-12 md:py-16 bg-[#FAF8F5] text-[#1E162B] relative overflow-hidden border-t border-[#E5DFD5]">
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#F4F0FA] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FBF5E6] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2.5">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#522B8A]">
            <Sparkles size={14} className="text-[#B48228]" />
            <span>{lang === 'hi' ? 'सहज बोध टैरो मार्गदर्शन' : 'Intuitive Oracle'}</span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1E162B] leading-tight">
            {lang === 'hi' ? 'दैनिक टैरो कार्ड मार्गदर्शन —' : 'Daily Tarot Card Guidance —'} <br />
            <span className="italic font-semibold text-[#522B8A]">
              {lang === 'hi'
                ? 'अपने मन को शांत करें, एक संकल्प लें और अपना मार्गदर्शन कार्ड चुनें'
                : 'Quiet your thoughts, set an intention, and draw your guidance card'}
            </span>
          </h2>

          <p className="text-sm text-[#4A4356] max-w-2xl mx-auto leading-relaxed">
            {lang === 'hi'
              ? 'टैरो कार्ड्स आपके अवचेतन मन, वर्तमान ऊर्जाओं और भविष्य की संभावनाओं को दर्शाने वाला एक पवित्र अंतर्ज्ञानी दर्पण हैं।'
              : 'The cards act as an intuitive sacred mirror reflecting your subconscious landscape, emotional currents, and emerging possibilities.'}
          </p>

          {/* Segmented Mode Switch */}
          <div className="pt-4 inline-flex items-center justify-center gap-1 p-1 rounded-xl bg-white border border-[#E6DFD3] shadow-2xs">
            <button
              type="button"
              onClick={() => setSpreadMode('single')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                spreadMode === 'single'
                  ? 'bg-[#522B8A] text-white shadow-xs'
                  : 'text-[#4A4356] hover:text-[#1E162B] hover:bg-[#FAF8F5]'
              }`}
            >
              {lang === 'hi' ? 'एकल कार्ड दर्शन' : 'Single Card Draw'}
            </button>
            <button
              type="button"
              onClick={() => setSpreadMode('three')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                spreadMode === 'three'
                  ? 'bg-[#522B8A] text-white shadow-xs'
                  : 'text-[#4A4356] hover:text-[#1E162B] hover:bg-[#FAF8F5]'
              }`}
            >
              {lang === 'hi' ? 'अतीत • वर्तमान • भविष्य त्रि-काल दर्शन' : 'Past • Present • Future Spread'}
            </button>
          </div>
        </div>

        {/* Spread Display */}
        {spreadMode === 'single' ? (
          <div className="max-w-4xl mx-auto">
            <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl bg-white border border-[#E6DFD3] shadow-xl transition-all duration-500 ${isFlipping ? 'opacity-40 scale-95' : 'opacity-100 scale-100'}`}>
              
              {/* Card Visual Collectible Graphic */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="relative w-64 aspect-[3/5] rounded-2xl p-4 bg-gradient-to-b from-[#FBF6EA] via-white to-[#F4F0FA] border-2 border-[#DEC38C] shadow-lg flex flex-col justify-between text-center overflow-hidden">
                  <div className="flex items-center justify-between text-[10px] uppercase font-bold text-[#7A5311] tracking-widest border-b border-[#DEC38C]/50 pb-2">
                    <span>{currentSingleCard.arcana}</span>
                    <span>{currentSingleCard.element}</span>
                  </div>

                  {/* Sacred Card Center */}
                  <div className="py-6 space-y-2">
                    <div className="w-16 h-16 rounded-full border border-[#DEC38C] flex items-center justify-center mx-auto text-[#522B8A] bg-[#FBF5E6] shadow-inner">
                      <Sparkles size={28} className="text-[#B48228]" />
                    </div>
                    <h3 className="font-cinzel text-xl font-bold text-[#1E162B] tracking-wide">
                      {lang === 'hi' ? currentSingleCard.name_hi : currentSingleCard.name}
                    </h3>
                    <p className="text-xs text-[#522B8A] font-semibold">
                      {lang === 'hi' ? currentSingleCard.name : currentSingleCard.name_hi}
                    </p>
                  </div>

                  {/* Keywords footer on card */}
                  <div className="pt-2 border-t border-[#DEC38C]/50 flex flex-wrap items-center justify-center gap-1.5 text-[10px] text-[#4A4356] font-semibold">
                    {(lang === 'hi' ? (currentSingleCard.keywords_hi || currentSingleCard.keywords) : currentSingleCard.keywords).map((kw, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white border border-[#E6DFD3]">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={drawRandomCard}
                  className="mt-5 h-10 px-5 rounded-xl bg-[#FAF8F5] hover:bg-[#F4F0FA] text-[#522B8A] text-xs font-bold flex items-center gap-2 border border-[#DFD5F0] transition-all shadow-2xs cursor-pointer"
                >
                  <RefreshCw size={13} className={isFlipping ? 'animate-spin' : ''} />
                  <span>{lang === 'hi' ? 'दूसरा कार्ड निकालें' : 'Draw Another Card'}</span>
                </button>
              </div>

              {/* Card Interpretation Prose */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#7A5311]">
                    {currentSingleCard.arcana} • {lang === 'hi' ? 'आध्यात्मिक सार' : 'Upright Essence'}
                  </span>
                  <h3 className="font-cinzel text-2xl font-bold text-[#1E162B] mt-1">
                    {lang === 'hi' ? currentSingleCard.name_hi : currentSingleCard.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A4356] leading-relaxed mt-2">
                    {lang === 'hi' ? currentSingleCard.essence_hi : currentSingleCard.essence}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-1.5">
                  <div className="text-xs font-bold text-[#522B8A] uppercase tracking-wider flex items-center gap-1.5">
                    <Compass size={14} className="text-[#B48228]" />
                    <span>{lang === 'hi' ? 'आपके लिए अंतर्ज्ञानी मार्गदर्शन' : 'Intuitive Guidance for You'}</span>
                  </div>
                  <p className="text-xs text-[#4A4356] leading-relaxed">
                    {lang === 'hi' ? currentSingleCard.guidance_hi : currentSingleCard.guidance}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F4F0FA] border border-[#DFD5F0] space-y-1.5">
                  <span className="text-[10px] font-bold text-[#522B8A] uppercase tracking-wider block">
                    {lang === 'hi' ? 'दैनिक पावन संकल्प एवं सकारात्मक भाव' : 'Daily Sacred Affirmation'}
                  </span>
                  <p className="font-cormorant text-base sm:text-lg italic font-semibold text-[#1E162B]">
                    {lang === 'hi' ? currentSingleCard.affirmation_hi : currentSingleCard.affirmation}
                  </p>
                </div>

                <p className="text-[11px] text-[#5D556A]">
                  <span className="text-[#7A5311] font-semibold">{lang === 'hi' ? 'प्रतीकात्मक अर्थ:' : 'Cosmic Symbolism:'}</span> {currentSingleCard.symbolism}
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onBookTarot(`Tarot Session — Inquiring after drawing "${currentSingleCard.name}"`)}
                    className="w-full sm:w-auto h-11 px-6 bg-[#522B8A] hover:bg-[#412070] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md cursor-pointer"
                  >
                    {lang === 'hi' ? (
                      <>व्यक्तिगत टैरो सत्र प्राप्त करें (<strong className="font-rupee font-black">₹5,100</strong>)</>
                    ) : (
                      <>Book Personal Tarot Session (<strong className="font-rupee font-black">₹5,100</strong>)</>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* 3-Card Spread */
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label_en: 'Past Origins', label_hi: 'अतीत का आधार', card: threeSpread.past },
                { label_en: 'Present Energy', label_hi: 'वर्तमान ऊर्जा', card: threeSpread.present },
                { label_en: 'Emerging Future', label_hi: 'भविष्य का संकेत', card: threeSpread.future },
              ].map((pos, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-[#E6DFD3] shadow-sm flex flex-col justify-between space-y-4 hover:border-[#DEC38C] transition-all"
                >
                  <div className="space-y-3">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-[#FBF5E6] text-[#7A5311] border border-[#DEC38C] text-[11px] font-bold uppercase tracking-wider">
                      {lang === 'hi' ? pos.label_hi : pos.label_en}
                    </span>
                    <h3 className="font-cinzel text-xl font-bold text-[#1E162B]">
                      {lang === 'hi' ? pos.card.name_hi : pos.card.name}
                    </h3>
                    <p className="text-xs text-[#4A4356] leading-relaxed">
                      {lang === 'hi' ? pos.card.essence_hi : pos.card.essence}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#EFECE6] text-xs text-[#522B8A] font-semibold">
                    {(lang === 'hi' ? (pos.card.keywords_hi || pos.card.keywords) : pos.card.keywords).join(' · ')}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={drawRandomCard}
                className="h-11 px-6 rounded-xl bg-white hover:bg-[#F4F0FA] text-[#522B8A] text-xs font-bold inline-flex items-center gap-2 border border-[#DFD5F0] transition-all shadow-xs cursor-pointer"
              >
                <RefreshCw size={14} className={isFlipping ? 'animate-spin' : ''} />
                <span>{lang === 'hi' ? 'नया त्रि-काल कार्ड दर्शन प्राप्त करें' : 'Draw New 3-Card Spread'}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { TAROT_DECK, TarotCard } from '../data/tarotData';
import { Sparkles, RefreshCw, Compass, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface TarotOracleSectionProps {
  onBookTarot: (notes: string) => void;
  lang?: string;
}

export const TarotOracleSection: React.FC<TarotOracleSectionProps> = ({ onBookTarot, lang = 'en' }) => {
  const [spreadMode, setSpreadMode] = useState<'single' | 'three'>('single');
  const [currentSingleCard, setCurrentSingleCard] = useState<TarotCard>(TAROT_DECK[0]); // The Star by default
  const [threeSpread, setThreeSpread] = useState<{ past: TarotCard; present: TarotCard; future: TarotCard }>({
    past: TAROT_DECK[4],    // High Priestess
    present: TAROT_DECK[0],  // The Star
    future: TAROT_DECK[1]   // The Sun
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
    }, 400);
  };

  return (
    <section id="tarot" className="py-20 md:py-28 bg-[#1c0f26] text-white relative overflow-hidden border-t border-[#D6B574]/20">
      {/* Dynamic ambient color glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#6941A5]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#D6B574]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D6B574]">
            <Sparkles size={14} />
            <span>{lang === 'hi' ? 'अंतर्ज्ञानी टैरो ओरेकल' : 'Intuitive Oracle'}</span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
            {lang === 'hi' ? 'दैनिक टैरो कार्ड मार्गदर्शन —' : 'Daily Tarot Card Guidance —'} <br />
            <span className="italic font-normal text-[#D6B574]">
              {lang === 'hi'
                ? 'अपने मन को शांत करें, एक संकल्प लें और अपना मार्गदर्शन कार्ड चुनें'
                : 'Quiet your thoughts, set an intention, and draw your guidance card'}
            </span>
          </h2>

          <p className="text-sm text-[#EAE2F4]/75 max-w-2xl mx-auto font-light leading-relaxed">
            {lang === 'hi'
              ? 'टैरो कार्ड्स आपके अवचेतन मन, वर्तमान ऊर्जाओं और भविष्य की संभावनाओं को दर्शाने वाला एक पवित्र अंतर्ज्ञानी दर्पण हैं।'
              : 'The cards act as an intuitive sacred mirror reflecting your subconscious landscape, emotional currents, and emerging possibilities.'}
          </p>

          {/* Mode switch */}
          <div className="pt-4 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setSpreadMode('single')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                spreadMode === 'single'
                  ? 'bg-[#D6B574] text-[#24152F] shadow-md font-bold'
                  : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'
              }`}
            >
              {lang === 'hi' ? 'एकल कार्ड ड्रॉ' : 'Single Card Draw'}
            </button>
            <button
              type="button"
              onClick={() => setSpreadMode('three')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                spreadMode === 'three'
                  ? 'bg-[#D6B574] text-[#24152F] shadow-md font-bold'
                  : 'bg-white/10 text-white hover:bg-white/15 border border-white/10'
              }`}
            >
              {lang === 'hi' ? 'अतीत • वर्तमान • भविष्य स्प्रेड' : 'Past • Present • Future Spread'}
            </button>
          </div>
        </div>

        {/* Spread Display */}
        {spreadMode === 'single' ? (
          <div className="max-w-4xl mx-auto">
            <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-6 sm:p-10 rounded-3xl bg-white/5 border border-[#D6B574]/30 backdrop-blur-md shadow-2xl transition-all duration-500 ${isFlipping ? 'opacity-40 scale-95' : 'opacity-100 scale-100'}`}>
              
              {/* Card Visual Graphic */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div className="relative w-64 aspect-[3/5] rounded-2xl p-4 bg-gradient-to-b from-[#2a1738] via-[#1a0f24] to-[#120819] border-2 border-[#D6B574]/60 shadow-[0_0_35px_rgba(214,181,116,0.25)] flex flex-col justify-between text-center overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#D6B574]/5 to-transparent pointer-events-none" />
                  
                  <div className="flex items-center justify-between text-[10px] uppercase font-bold text-[#D6B574] tracking-widest border-b border-[#D6B574]/20 pb-2">
                    <span>{currentSingleCard.arcana}</span>
                    <span>{currentSingleCard.element}</span>
                  </div>

                  {/* Sacred Card Center */}
                  <div className="py-6 space-y-2">
                    <div className="w-16 h-16 rounded-full border border-[#D6B574]/40 flex items-center justify-center mx-auto text-[#D6B574] bg-[#D6B574]/10 shadow-inner">
                      <Sparkles size={28} />
                    </div>
                    <h3 className="font-cinzel text-xl font-bold text-white tracking-wide">
                      {lang === 'hi' ? currentSingleCard.name_hi : currentSingleCard.name}
                    </h3>
                    <p className="text-xs text-[#D6B574]">
                      {lang === 'hi' ? currentSingleCard.name : currentSingleCard.name_hi}
                    </p>
                  </div>

                  {/* Keywords footer on card */}
                  <div className="pt-2 border-t border-[#D6B574]/20 flex items-center justify-center gap-1.5 text-[10px] text-[#EAE2F4]/80 font-medium">
                    {(lang === 'hi' ? (currentSingleCard.keywords_hi || currentSingleCard.keywords) : currentSingleCard.keywords).map((kw, i) => (
                      <span key={i} className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={drawRandomCard}
                  className="mt-6 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#D6B574] text-xs font-semibold flex items-center gap-2 border border-[#D6B574]/40 transition-all shadow-sm"
                >
                  <RefreshCw size={13} className={isFlipping ? 'animate-spin' : ''} />
                  <span>{lang === 'hi' ? 'दूसरा कार्ड निकालें' : 'Draw Another Card'}</span>
                </button>
              </div>

              {/* Card Interpretation Prose */}
              <div className="md:col-span-7 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#D6B574]">
                    {currentSingleCard.arcana} • {lang === 'hi' ? 'आध्यात्मिक सार' : 'Upright Essence'}
                  </span>
                  <h3 className="font-cinzel text-2xl font-bold text-white mt-1">
                    {lang === 'hi' ? currentSingleCard.name_hi : currentSingleCard.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#EAE2F4]/85 leading-relaxed font-light mt-2">
                    {lang === 'hi' ? currentSingleCard.essence_hi : currentSingleCard.essence}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                  <div className="text-xs font-bold text-[#D6B574] uppercase tracking-wider flex items-center gap-1.5">
                    <Compass size={14} />
                    <span>{lang === 'hi' ? 'आपके लिए अंतर्ज्ञानी मार्गदर्शन' : 'Intuitive Guidance for You'}</span>
                  </div>
                  <p className="text-xs text-[#EAE2F4]/90 leading-relaxed font-light">
                    {lang === 'hi' ? currentSingleCard.guidance_hi : currentSingleCard.guidance}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#6941A5]/20 border border-[#6941A5]/40 space-y-1.5">
                  <span className="text-[10px] font-bold text-[#D6B574] uppercase tracking-wider block">
                    {lang === 'hi' ? 'दैनिक पावन संकल्प (Affirmation)' : 'Daily Sacred Affirmation'}
                  </span>
                  <p className="font-cormorant text-base sm:text-lg italic text-white">
                    {lang === 'hi' ? currentSingleCard.affirmation_hi : currentSingleCard.affirmation}
                  </p>
                </div>

                <p className="text-[11px] text-[#EAE2F4]/60">
                  <span className="text-[#D6B574]">{lang === 'hi' ? 'प्रतीकात्मक अर्थ:' : 'Cosmic Symbolism:'}</span> {currentSingleCard.symbolism}
                </p>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onBookTarot(`Tarot Session — Inquiring after drawing "${currentSingleCard.name}"`)}
                    className="w-full sm:w-auto px-6 py-3 bg-[#D6B574] hover:bg-[#e4ca8c] text-[#24152F] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:scale-[1.02]"
                  >
                    {lang === 'hi' ? 'व्यक्तिगत टैरो सत्र बुक करें (₹5,100)' : 'Book Personal Tarot Session (₹5,100)'}
                  </button>
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* 3-Card Spread (Past • Present • Future) */
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label_en: 'Past Origins', label_hi: 'अतीत का आधार', card: threeSpread.past },
                { label_en: 'Present Energy', label_hi: 'वर्तमान ऊर्जा', card: threeSpread.present },
                { label_en: 'Emerging Future', label_hi: 'भविष्य का संकेत', card: threeSpread.future },
              ].map((pos, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white/5 border border-[#D6B574]/30 backdrop-blur-md shadow-xl flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574]">
                      {lang === 'hi' ? pos.label_hi : pos.label_en}
                    </span>
                    <h3 className="font-cinzel text-xl font-bold text-white">
                      {lang === 'hi' ? pos.card.name_hi : pos.card.name}
                    </h3>
                    <p className="text-xs text-[#EAE2F4]/80 leading-relaxed font-light">
                      {lang === 'hi' ? pos.card.essence_hi : pos.card.essence}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-xs text-[#D6B574] font-medium">
                    {(lang === 'hi' ? (pos.card.keywords_hi || pos.card.keywords) : pos.card.keywords).join(' · ')}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-4">
              <button
                type="button"
                onClick={drawRandomCard}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-[#D6B574] text-xs font-semibold inline-flex items-center gap-2 border border-[#D6B574]/40 transition-all shadow-md"
              >
                <RefreshCw size={14} className={isFlipping ? 'animate-spin' : ''} />
                <span>{lang === 'hi' ? 'नया 3-कार्ड स्प्रेड निकालें' : 'Draw New 3-Card Spread'}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

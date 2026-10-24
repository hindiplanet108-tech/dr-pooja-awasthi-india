import React, { useState } from 'react';
import { calculateVedicProfile } from '../data/vedicCalculator';
import { Sparkles, Calendar, User, Compass, ArrowRight, ShieldCheck, Sun, Star } from 'lucide-react';

interface VedicCalculatorSectionProps {
  onBookWithNumbers: (notes: string) => void;
  lang?: string;
}

export const VedicCalculatorSection: React.FC<VedicCalculatorSectionProps> = ({ onBookWithNumbers, lang = 'en' }) => {
  const [dob, setDob] = useState('1992-06-15');
  const [name, setName] = useState('Dr. Pooja Awasthi');
  const [result, setResult] = useState(calculateVedicProfile('1992-06-15', 'Dr. Pooja Awasthi'));

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const calculated = calculateVedicProfile(dob, name);
    setResult(calculated);
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-[#24152F] text-white relative overflow-hidden border-t border-[#D6B574]/20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#6941A5]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D6B574]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D6B574]">
            <Sparkles size={14} />
            <span>{lang === 'hi' ? 'वैदिक अंकशास्त्र इंजन' : 'Interactive Vedic Engine'}</span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
            {lang === 'hi' ? 'वैदिक अंकशास्त्र कैलकुलेटर —' : 'Vedic Numerology Calculator —'} <br />
            <span className="italic font-normal text-[#D6B574]">
              {lang === 'hi' ? 'अपने मूलांक (ड्राइवर) एवं भाग्यांक (कंडक्टर) का रहस्य जानें' : 'Calculate your Mulank (Driver) & Bhagyank (Conductor) Numbers'}
            </span>
          </h2>

          <p className="text-sm text-[#EAE2F4]/75 max-w-2xl mx-auto font-light leading-relaxed">
            {lang === 'hi'
              ? 'सनातन वैदिक अंकशास्त्र पर आधारित त्वरित गणना। अपनी जन्मतिथि से अपने स्वामी ग्रह, आत्मा के उद्देश्य और भाग्य चक्र को समझें।'
              : 'Instant calculation based on ancient Vedic cosmic numerology principles. Uncover the ruling planetary frequencies governing your soul\'s purpose and destiny path.'}
          </p>
        </div>

        {/* Input Form Card */}
        <div className="max-w-3xl mx-auto mb-12 p-6 sm:p-8 rounded-3xl bg-white/5 border border-[#D6B574]/30 backdrop-blur-md shadow-2xl">
          <form onSubmit={handleCalculate} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D6B574] mb-2 flex items-center gap-1.5">
                  <Calendar size={13} />
                  <span>{lang === 'hi' ? 'जन्मतिथि (Date of Birth)' : 'Date of Birth'}</span>
                </label>
                <input
                  type="date"
                  required
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-[#D6B574] transition-colors"
                />
                <p className="text-[11px] text-[#EAE2F4]/60 mt-1">
                  {lang === 'hi'
                    ? 'आपके मूलांक (जन्म अंक) और भाग्यांक (कुल योग) की गणना करता है।'
                    : 'Determines your Mulank (Driver) & Bhagyank (Destiny) numbers.'}
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D6B574] mb-2 flex items-center gap-1.5">
                  <User size={13} />
                  <span>{lang === 'hi' ? 'पूरा नाम (ध्वनि कंपन हेतु)' : 'Full Name (Optional for Name Vibration)'}</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Pooja Awasthi"
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-[#D6B574] transition-colors"
                />
                <p className="text-[11px] text-[#EAE2F4]/60 mt-1">
                  {lang === 'hi'
                    ? 'कील्डियन अंक प्रणाली द्वारा नाम के संयुक्त अक्षरों का कंपन मापता है।'
                    : 'Calculates Chaldean compound vibrational frequency.'}
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#D6B574] via-[#eedbb3] to-[#D6B574] text-[#24152F] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-[#D6B574]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                {lang === 'hi' ? 'वैदिक अंकों की गणना करें' : 'Calculate Vedic Numbers'}
              </button>
              <span className="text-[11px] text-[#EAE2F4]/60 text-center sm:text-right">
                {lang === 'hi'
                  ? 'सभी गणनाएँ सुरक्षित हैं। आपका डेटा 100% गोपनीय रहता है।'
                  : 'Calculations run client-side. Your details remain 100% private.'}
              </span>
            </div>
          </form>
        </div>

        {/* Results Matrix */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Mulank (Birth / Driver) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-[#D6B574]/40 shadow-xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574] block">
                  {lang === 'hi' ? 'मूलांक (जन्म अंक / ड्राइवर)' : 'Mulank (Birth / Driver)'}
                </span>
                <span className="text-xs text-[#EAE2F4]/70 block">
                  {lang === 'hi' ? 'मूल स्वभाव एवं आंतरिक चेतना' : 'Core Nature & Self'}
                </span>
                <div className="font-cormorant text-6xl font-light text-white my-2 tabular-nums">
                  {result.mulank}
                </div>
                <h3 className="font-cinzel text-lg font-bold text-white">
                  {lang === 'hi' ? result.mulankProfile.title_hi : result.mulankProfile.archetype}
                </h3>
                <div className="text-xs font-semibold text-[#D6B574]">
                  {lang === 'hi' ? `स्वामी ग्रह: ${result.mulankProfile.ruler_hi}` : `Ruling Planet: ${result.mulankProfile.ruler}`}
                </div>
              </div>

              <p className="text-xs text-[#EAE2F4]/80 leading-relaxed font-light pt-2 border-t border-white/10">
                {lang === 'hi' ? result.mulankProfile.description_hi : result.mulankProfile.description}
              </p>
            </div>

            {/* Bhagyank (Destiny / Conductor) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-[#D6B574]/40 shadow-xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574] block">
                  {lang === 'hi' ? 'भाग्यांक (भाग्य अंक / कंडक्टर)' : 'Bhagyank (Destiny / Conductor)'}
                </span>
                <span className="text-xs text-[#EAE2F4]/70 block">
                  {lang === 'hi' ? 'कर्म पथ एवं जीवन की दिशा' : 'Life Path & Karma'}
                </span>
                <div className="font-cormorant text-6xl font-light text-white my-2 tabular-nums">
                  {result.bhagyank}
                </div>
                <h3 className="font-cinzel text-lg font-bold text-white">
                  {lang === 'hi' ? result.bhagyankProfile.title_hi : result.bhagyankProfile.archetype}
                </h3>
                <div className="text-xs font-semibold text-[#D6B574]">
                  {lang === 'hi' ? `स्वामी ग्रह: ${result.bhagyankProfile.ruler_hi}` : `Ruling Planet: ${result.bhagyankProfile.ruler}`}
                </div>
              </div>

              <p className="text-xs text-[#EAE2F4]/80 leading-relaxed font-light pt-2 border-t border-white/10">
                {lang === 'hi' ? result.bhagyankProfile.description_hi : result.bhagyankProfile.description}
              </p>
            </div>

            {/* Name Vibration Number */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-[#D6B574]/40 shadow-xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574] block">
                  {lang === 'hi' ? 'नाम कंपन अंक (कील्डियन)' : 'Name Vibration Number'}
                </span>
                <span className="text-xs text-[#EAE2F4]/70 block">
                  {lang === 'hi' ? 'कील्डियन अंक प्रणाली' : 'Chaldean System'}
                </span>
                <div className="font-cormorant text-6xl font-light text-white my-2 tabular-nums">
                  {result.nameSingle}
                </div>
                <h3 className="font-cinzel text-lg font-bold text-white">
                  {result.nameSingle === 6 ? (lang === 'hi' ? 'सामंजस्य एवं सौंदर्य' : 'The Harmonizer') : `${lang === 'hi' ? 'कंपन अंक' : 'Vibrational Single'} ${result.nameSingle}`}
                </h3>
                <div className="text-xs text-[#D6B574]">
                  {lang === 'hi'
                    ? `कील्डियन विभाजन: संयुक्त ${result.nameCompound} → एकल ${result.nameSingle}`
                    : `Chaldean Breakdown: Compound ${result.nameCompound} → Single ${result.nameSingle}`}
                </div>
              </div>

              <p className="text-xs text-[#EAE2F4]/80 leading-relaxed font-light pt-2 border-t border-white/10">
                {lang === 'hi'
                  ? 'अपने नाम के कंपन को मूलांक के साथ संतुलित करने से समृद्धि, यश और करियर में अप्रत्याशित सफलता मिलती है।'
                  : 'Synchronizing your name frequency with your Mulank activates ease, prosperity, and career recognition.'}
              </p>
            </div>

          </div>

          {/* Planetary Synergy & Auspicious Guidance Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#1c0f26] border border-[#D6B574]/40 shadow-2xl space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D6B574] block">
                {lang === 'hi' ? 'ग्रह सामंजस्य एवं शुभ मार्गदर्शन' : 'Planetary Synergy & Auspicious Guidance'}
              </span>
              <p className="font-cormorant text-xl text-white mt-1">
                {result.synergy}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#D6B574] block">
                  {lang === 'hi' ? 'शुभ रंग' : 'Lucky Colors'}
                </span>
                <span className="text-white font-medium">{result.mulankProfile.luckyColors}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#D6B574] block">
                  {lang === 'hi' ? 'शुभ दिन' : 'Lucky Days'}
                </span>
                <span className="text-white font-medium">{result.mulankProfile.luckyDays}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#D6B574] block">
                  {lang === 'hi' ? 'पंचतत्व' : 'Cosmic Element'}
                </span>
                <span className="text-white font-medium">
                  {lang === 'hi' ? result.mulankProfile.element_hi : result.mulankProfile.element}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-[10px] uppercase font-bold text-[#D6B574] block">
                  {lang === 'hi' ? 'बीज मंत्र' : 'Harmonic Mantra'}
                </span>
                <span className="text-white font-medium">{result.mulankProfile.harmonicMantra}</span>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <p className="text-xs text-[#EAE2F4]/80">
                {lang === 'hi'
                  ? 'क्या आप व्यक्तिगत वैदिक उपाय, नाम स्पेलिंग संशोधन या वार्षिक ग्रह दशा विश्लेषण चाहते हैं?'
                  : 'Looking for personalized Vedic remedies, name-spelling optimization, or annual forecast?'}
              </p>
              <button
                type="button"
                onClick={() =>
                  onBookWithNumbers(
                    `Vedic Numerology Analysis for DOB: ${dob}, Name: ${name} (Mulank: ${result.mulank}, Bhagyank: ${result.bhagyank})`
                  )
                }
                className="w-full sm:w-auto px-6 py-3 bg-[#D6B574] hover:bg-[#e4ca8c] text-[#24152F] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:scale-[1.02] whitespace-nowrap"
              >
                {lang === 'hi' ? 'पूजा जी से संपूर्ण विश्लेषण सत्र बुक करें' : 'Book Complete Reading with Pooja Ji'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

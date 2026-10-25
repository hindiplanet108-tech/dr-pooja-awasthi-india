import React, { useState } from 'react';
import {
  calculateFullNumerologyProfile,
  FullProfileResult,
  DestinyPlane,
  MissingNumberRemedy
} from '../data/vedicCalculator';
import {
  Sparkles,
  Calendar,
  User,
  Compass,
  ArrowRight,
  ShieldCheck,
  Sun,
  Star,
  Grid,
  Layers,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  Gem,
  Flame,
  Info,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';

interface VedicCalculatorSectionProps {
  onBookWithNumbers: (notes: string) => void;
  lang?: string;
}

export const VedicCalculatorSection: React.FC<VedicCalculatorSectionProps> = ({ onBookWithNumbers, lang = 'en' }) => {
  const [dob, setDob] = useState('1992-06-15');
  const [name, setName] = useState('Dr. Pooja Awasthi');
  const [gender, setGender] = useState<'female' | 'male'>('female');
  const [activeTab, setActiveTab] = useState<'loshu' | 'vedic' | 'planes' | 'remedies' | 'kuaGuide'>('loshu');
  const [selectedMissingNum, setSelectedMissingNum] = useState<number | null>(null);

  const [result, setResult] = useState<FullProfileResult>(() =>
    calculateFullNumerologyProfile('1992-06-15', 'Dr. Pooja Awasthi', 'female')
  );

  const handleCalculate = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const calculated = calculateFullNumerologyProfile(dob, name, gender);
    setResult(calculated);
    if (calculated.missingNumbers.length > 0) {
      setSelectedMissingNum(calculated.missingNumbers[0]);
    } else {
      setSelectedMissingNum(null);
    }
  };

  const handlePresetSelect = (presetDob: string, presetGender: 'male' | 'female', presetName: string) => {
    setDob(presetDob);
    setGender(presetGender);
    setName(presetName);
    const calculated = calculateFullNumerologyProfile(presetDob, presetName, presetGender);
    setResult(calculated);
    if (calculated.missingNumbers.length > 0) {
      setSelectedMissingNum(calculated.missingNumbers[0]);
    } else {
      setSelectedMissingNum(null);
    }
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-[#1e1028] text-white relative overflow-hidden border-t border-[#D6B574]/20">
      {/* Sacred subtle cosmic radial lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#6941A5]/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#D6B574]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Exact Requested Title & Subtitles */}
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#D6B574]/15 border border-[#D6B574]/30 text-xs font-semibold uppercase tracking-widest text-[#D6B574]">
            <Sparkles size={14} className="animate-pulse" />
            <span>{lang === 'hi' ? 'प्रामाणिक वैदिक एवं लो-शू अंकशास्त्र' : 'Authentic Vedic & Lo Shu Numerology Engine'}</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-wide leading-tight">
            DECODE YOUR DATE OF BIRTH
          </h2>

          <h3 className="font-cormorant text-2xl sm:text-3xl text-[#D6B574] italic font-normal tracking-wide">
            CHANGE YOUR LIFE AND DESTINY.
          </h3>

          <p className="text-sm sm:text-base text-[#EAE2F4]/85 max-w-3xl mx-auto font-light leading-relaxed pt-1">
            {lang === 'hi'
              ? 'अपनी सटीक जन्मतिथि दर्ज करें और जानें अपना मूलांक (Driver), भाग्यांक (Conductor), प्रामाणिक कुआ अंक (Kua Number), लो-शू चक्र, वैदिक अंक कुण्डली, भाग्य के 8 योग (8 Planes of Destiny) तथा अनुपस्थित अंकों के दिव्य उपाय।'
              : 'Enter your exact date of birth to reveal your Driver (Mulank), Conductor (Bhagyank), Kua Number, 8 Planes of Destiny, and Missing Number remedies.'}
          </p>
        </div>

        {/* Interactive Input Form */}
        <div className="max-w-4xl mx-auto mb-12 p-6 sm:p-8 rounded-3xl bg-white/5 border border-[#D6B574]/35 backdrop-blur-md shadow-2xl">
          <form onSubmit={handleCalculate} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              
              {/* Date of Birth Input */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D6B574] mb-2 flex items-center gap-1.5">
                  <Calendar size={14} />
                  <span>{lang === 'hi' ? 'जन्मतिथि (Date of Birth)' : 'Date of Birth'}</span>
                </label>
                <input
                  type="date"
                  required
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-sm focus:outline-none focus:border-[#D6B574] transition-colors"
                />
                <p className="text-[11px] text-[#EAE2F4]/60 mt-1">
                  {lang === 'hi' ? 'दिन, माह व वर्ष की सही प्रविष्टि करें।' : 'DD/MM/YYYY for astrological alignment.'}
                </p>
              </div>

              {/* Gender Selector (Crucial for Kua Number) */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D6B574] mb-2 flex items-center gap-1.5">
                  <Compass size={14} />
                  <span>{lang === 'hi' ? 'लिंग (कुआ अंक हेतु अनिवार्य)' : 'Gender (Crucial for Kua Number)'}</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                      gender === 'female'
                        ? 'bg-[#D6B574] text-[#24152F] border-[#D6B574] shadow-md'
                        : 'bg-black/40 text-white/80 border-white/15 hover:border-white/30'
                    }`}
                  >
                    {lang === 'hi' ? 'महिला (Female)' : 'Female'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                      gender === 'male'
                        ? 'bg-[#D6B574] text-[#24152F] border-[#D6B574] shadow-md'
                        : 'bg-black/40 text-white/80 border-white/15 hover:border-white/30'
                    }`}
                  >
                    {lang === 'hi' ? 'पुरुष (Male)' : 'Male'}
                  </button>
                </div>
                <p className="text-[11px] text-[#EAE2F4]/60 mt-1">
                  {lang === 'hi' ? 'फेंगशुई/लो-शू में पुरुष व महिला का कुआ सूत्र अलग होता है।' : 'Male and female use distinct classical Kua formulas.'}
                </p>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#D6B574] mb-2 flex items-center gap-1.5">
                  <User size={14} />
                  <span>{lang === 'hi' ? 'पूरा नाम (कील्डियन अंक हेतु)' : 'Full Name (For Name Vibration)'}</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Pooja Awasthi"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white text-sm focus:outline-none focus:border-[#D6B574] transition-colors"
                />
                <p className="text-[11px] text-[#EAE2F4]/60 mt-1">
                  {lang === 'hi' ? 'नाम की ध्वनि ऊर्जा एवं संयुक्त अंक' : 'Evaluates Chaldean sound vibration.'}
                </p>
              </div>

            </div>

            {/* Quick Preset Buttons to verify authentic examples */}
            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[#EAE2F4]/70 font-medium">
                {lang === 'hi' ? 'प्रामाणिक उदाहरण जांचें:' : 'Quick Benchmark Examples:'}
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handlePresetSelect('1967-07-20', 'male', 'Ramesh Sharma')}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[#D6B574] border border-white/10 transition-colors"
                  title="1967 Male: 10-4=6"
                >
                  1967 (Male → Kua 6)
                </button>
                <button
                  type="button"
                  onClick={() => handlePresetSelect('1967-07-20', 'female', 'Sita Devi')}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[#D6B574] border border-white/10 transition-colors"
                  title="1967 Female: 4+5=9"
                >
                  1967 (Female → Kua 9)
                </button>
                <button
                  type="button"
                  onClick={() => handlePresetSelect('1967-01-15', 'male', 'Vikram Singh')}
                  className="px-2.5 py-1 rounded-lg bg-[#6941A5]/40 hover:bg-[#6941A5]/60 text-amber-200 border border-[#D6B574]/40 transition-colors"
                  title="15 Jan 1967 (Li Chun test: uses 1966 -> Male Kua 7)"
                >
                  15 Jan 1967 (Li Chun Spring Test)
                </button>
                <button
                  type="button"
                  onClick={() => handlePresetSelect('2005-08-18', 'male', 'Aarav Gupta')}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-[#D6B574] border border-white/10 transition-colors"
                  title="21st Century Male: 9-5=4"
                >
                  2005 (21st Century)
                </button>
              </div>
            </div>

            {/* Submit & Calculate Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#D6B574] via-[#eedbb3] to-[#D6B574] text-[#24152F] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg hover:shadow-[#D6B574]/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Sparkles size={16} />
                <span>{lang === 'hi' ? 'संपूर्ण जन्मतिथि विश्लेषण डिकोड करें' : 'Decode Complete Numerology & Grids'}</span>
              </button>
              <span className="text-[11px] text-[#EAE2F4]/60 text-center sm:text-right">
                {lang === 'hi'
                  ? 'वैदिक व शास्त्रीय फेंगशुई गणितीय सूत्रों द्वारा 100% सटीक गणना।'
                  : '100% mathematically authentic Vedic & Classical Lo Shu algorithms.'}
              </span>
            </div>
          </form>
        </div>

        {/* 4 Core Pillars of Destiny Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          
          {/* 1. Driver (Mulank) */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-[#D6B574]/40 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D6B574]/10 rounded-bl-full pointer-events-none" />
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574]">
                  {lang === 'hi' ? 'मूलांक (Driver)' : 'Driver (Mulank)'}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-[#EAE2F4]/80">
                  Day {result.day}
                </span>
              </div>
              <div className="text-xs text-[#EAE2F4]/70">
                {lang === 'hi' ? 'आंतरिक चेतना व स्वभाव' : 'Core Nature & Self'}
              </div>
              <div className="font-cormorant text-6xl font-light text-white my-1 tabular-nums">
                {result.mulank}
              </div>
              <div className="font-cinzel text-base font-bold text-white">
                {lang === 'hi' ? result.mulankProfile.title_hi : result.mulankProfile.archetype}
              </div>
              <div className="text-xs font-semibold text-[#D6B574]">
                {lang === 'hi' ? `स्वामी: ${result.mulankProfile.ruler_hi}` : `Ruler: ${result.mulankProfile.ruler}`}
              </div>
            </div>
            <p className="text-[11px] text-[#EAE2F4]/75 leading-relaxed font-light pt-3 mt-3 border-t border-white/10">
              {lang === 'hi' ? result.mulankProfile.description_hi : result.mulankProfile.description}
            </p>
          </div>

          {/* 2. Conductor (Bhagyank) */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-[#D6B574]/40 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#6941A5]/20 rounded-bl-full pointer-events-none" />
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574]">
                  {lang === 'hi' ? 'भाग्यांक (Conductor)' : 'Conductor (Bhagyank)'}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-[#EAE2F4]/80">
                  Sum of Full DOB
                </span>
              </div>
              <div className="text-xs text-[#EAE2F4]/70">
                {lang === 'hi' ? 'कर्म पथ एवं जीवन लक्ष्य' : 'Destiny & Life Path'}
              </div>
              <div className="font-cormorant text-6xl font-light text-white my-1 tabular-nums">
                {result.bhagyank}
              </div>
              <div className="font-cinzel text-base font-bold text-white">
                {lang === 'hi' ? result.bhagyankProfile.title_hi : result.bhagyankProfile.archetype}
              </div>
              <div className="text-xs font-semibold text-[#D6B574]">
                {lang === 'hi' ? `स्वामी: ${result.bhagyankProfile.ruler_hi}` : `Ruler: ${result.bhagyankProfile.ruler}`}
              </div>
            </div>
            <p className="text-[11px] text-[#EAE2F4]/75 leading-relaxed font-light pt-3 mt-3 border-t border-white/10">
              {lang === 'hi' ? result.bhagyankProfile.description_hi : result.bhagyankProfile.description}
            </p>
          </div>

          {/* 3. Kua Number (Classical Feng Shui & Directional Mastery) */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#6941A5]/30 to-white/5 border border-[#D6B574]/50 shadow-xl flex flex-col justify-between relative overflow-hidden ring-1 ring-[#D6B574]/30">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D6B574]/15 rounded-bl-full pointer-events-none" />
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574] flex items-center gap-1">
                  <Compass size={13} />
                  <span>{lang === 'hi' ? 'कुआ अंक (Kua)' : 'Kua Number'}</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#D6B574]/20 text-[#D6B574] font-semibold">
                  {lang === 'hi' ? result.kuaProfile.group_hi : result.kuaProfile.group}
                </span>
              </div>

              {/* Li Chun Solar Year Alert Badge */}
              {result.kuaProfile.isLiChunApplied && (
                <div className="p-1.5 px-2 rounded-lg bg-amber-500/20 border border-amber-400/30 text-[10px] text-amber-200 flex items-center gap-1">
                  <Info size={11} className="shrink-0" />
                  <span>
                    {lang === 'hi'
                      ? `सौर वर्ष नियम: जन्म ४ फरवरी से पूर्व होने से सौर वर्ष ${result.kuaProfile.solarYear} प्रयुक्त।`
                      : `Li Chun rule: Born before Feb 4, calculated using solar year ${result.kuaProfile.solarYear}.`}
                  </span>
                </div>
              )}

              {/* Rule of 5 Alert Badge */}
              {result.kuaProfile.ruleOf5Applied && (
                <div className="p-1.5 px-2 rounded-lg bg-purple-500/20 border border-purple-400/30 text-[10px] text-purple-200 flex items-center gap-1">
                  <ShieldCheck size={11} className="shrink-0" />
                  <span>
                    {lang === 'hi'
                      ? `विशेष नियम: अंक ५ बदलकर ${result.kuaProfile.kua} (${result.kuaProfile.trigram_hi}) बना।`
                      : `Rule of 5: Digit 5 converted to ${result.kuaProfile.kua} (${result.kuaProfile.trigram}).`}
                  </span>
                </div>
              )}

              <div className="font-cormorant text-6xl font-light text-[#D6B574] my-1 tabular-nums">
                {result.kuaProfile.kua}
              </div>
              <div className="font-cinzel text-base font-bold text-white">
                {lang === 'hi' ? result.kuaProfile.trigram_hi : result.kuaProfile.trigram} — {lang === 'hi' ? result.kuaProfile.element_hi : result.kuaProfile.element}
              </div>
              <div className="text-xs text-[#EAE2F4]/80">
                {lang === 'hi' ? `मुख्य दिशा: ${result.kuaProfile.direction_hi}` : `Base Direction: ${result.kuaProfile.direction}`}
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-white/10 text-[11px] text-[#EAE2F4]/75 space-y-1">
              <span className="block text-[#D6B574] font-semibold text-[10px] uppercase">
                {lang === 'hi' ? 'गणना सूत्र प्रमाण (Proof):' : 'Formula Proof:'}
              </span>
              <p className="font-mono text-[10px] text-[#EAE2F4]/90 break-words">
                {lang === 'hi' ? result.kuaProfile.formulaProof_hi : result.kuaProfile.formulaProof}
              </p>
            </div>
          </div>

          {/* 4. Name Vibration (Chaldean) */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-[#D6B574]/40 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full pointer-events-none" />
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574]">
                  {lang === 'hi' ? 'नाम कंपन (Name Vibration)' : 'Name Vibration'}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-[#EAE2F4]/80">
                  Chaldean
                </span>
              </div>
              <div className="text-xs text-[#EAE2F4]/70">
                {lang === 'hi' ? 'ध्वनि एवं नाम वर्तनी कंपन' : 'Sound & Spelling Energy'}
              </div>
              <div className="font-cormorant text-6xl font-light text-white my-1 tabular-nums">
                {result.nameSingle}
              </div>
              <div className="font-cinzel text-base font-bold text-white">
                {lang === 'hi' ? `एकल कंपन ${result.nameSingle}` : `Vibration ${result.nameSingle}`}
              </div>
              <div className="text-xs font-semibold text-[#D6B574]">
                {lang === 'hi'
                  ? `संयुक्त योग: ${result.nameCompound} → एकल ${result.nameSingle}`
                  : `Compound: ${result.nameCompound} → Single ${result.nameSingle}`}
              </div>
            </div>
            <p className="text-[11px] text-[#EAE2F4]/75 leading-relaxed font-light pt-3 mt-3 border-t border-white/10">
              {lang === 'hi'
                ? 'नाम के अक्षरों के कंपन को मूलांक व भाग्यांक से संतुलित करने से जीवन में अवरोध समाप्त होते हैं।'
                : 'Harmonizing your name spelling with your Driver number unlocks effortless social and career luck.'}
            </p>
          </div>

        </div>

        {/* Tab Navigation for Interactive Grids & Analysis */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 border-b border-white/10 pb-4">
          <button
            type="button"
            onClick={() => setActiveTab('loshu')}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'loshu'
                ? 'bg-[#D6B574] text-[#24152F] shadow-lg shadow-[#D6B574]/20 scale-[1.02]'
                : 'bg-white/5 text-[#EAE2F4]/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Grid size={15} />
            <span>{lang === 'hi' ? 'लो-शू चक्र (Lo Shu Grid 4-9-2)' : 'Lo Shu Grid (4-9-2 / 3-5-7)'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('vedic')}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'vedic'
                ? 'bg-[#D6B574] text-[#24152F] shadow-lg shadow-[#D6B574]/20 scale-[1.02]'
                : 'bg-white/5 text-[#EAE2F4]/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Star size={15} />
            <span>{lang === 'hi' ? 'वैदिक अंक कुण्डली (Vedic Grid 3-1-9)' : 'Vedic Grid (3-1-9 / 6-7-5)'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('planes')}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'planes'
                ? 'bg-[#D6B574] text-[#24152F] shadow-lg shadow-[#D6B574]/20 scale-[1.02]'
                : 'bg-white/5 text-[#EAE2F4]/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Layers size={15} />
            <span>{lang === 'hi' ? '8 राजयोग एवं तल (8 Planes of Destiny)' : '8 Planes of Destiny (Yogas)'}</span>
            <span className="px-1.5 py-0.2 rounded-full bg-white/20 text-[10px]">
              {result.destinyPlanes.filter((p) => p.status === 'Complete').length} Active
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('remedies')}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'remedies'
                ? 'bg-[#D6B574] text-[#24152F] shadow-lg shadow-[#D6B574]/20 scale-[1.02]'
                : 'bg-white/5 text-[#EAE2F4]/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Gem size={15} />
            <span>{lang === 'hi' ? 'अनुपस्थित अंक उपाय (Missing Remedies)' : 'Missing Number Remedies'}</span>
            <span className="px-1.5 py-0.2 rounded-full bg-rose-500/30 text-rose-300 text-[10px]">
              {result.missingNumbers.length} Missing
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('kuaGuide')}
            className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
              activeTab === 'kuaGuide'
                ? 'bg-[#D6B574] text-[#24152F] shadow-lg shadow-[#D6B574]/20 scale-[1.02]'
                : 'bg-white/5 text-[#EAE2F4]/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            <BookOpen size={15} />
            <span>{lang === 'hi' ? 'कुआ अंक गणना विधि एवं १९६७ उदाहरण' : 'Kua Formula & 1967 Proof Guide'}</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: LO SHU GRID (4-9-2 / 3-5-7 / 8-1-6) */}
        {/* ========================================================================= */}
        {activeTab === 'loshu' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-[#D6B574]/30 shadow-2xl backdrop-blur-md">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <Grid className="text-[#D6B574]" size={22} />
                    <span>{lang === 'hi' ? 'प्रामाणिक लो-शू चक्र (Lo Shu Magic Square)' : 'Classical Lo Shu Magic Square (3×3)'}</span>
                  </h3>
                  <p className="text-xs text-[#EAE2F4]/75 mt-1 font-light">
                    {lang === 'hi'
                      ? 'लो-शू चक्र में जन्मतिथि के सभी अंक + मूलांक + भाग्यांक + कुआ अंक प्रविष्ट किए जाते हैं (4-9-2 / 3-5-7 / 8-1-6)।'
                      : 'Fixed classical Lo Shu matrix populated with DOB digits + Driver + Conductor + Kua Number.'}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1.5">
                    <CheckCircle2 size={12} />
                    {lang === 'hi' ? `उपस्थित अंक: ${result.presentNumbers.join(', ')}` : `Present: ${result.presentNumbers.join(', ')}`}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 flex items-center gap-1.5">
                    <AlertCircle size={12} />
                    {lang === 'hi' ? `अनुपस्थित अंक: ${result.missingNumbers.join(', ')}` : `Missing: ${result.missingNumbers.join(', ')}`}
                  </span>
                </div>
              </div>

              {/* Lo Shu 3x3 Grid Graphic */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex justify-center">
                  <div className="w-full max-w-md aspect-square bg-[#120a1a] p-3 sm:p-4 rounded-3xl border-2 border-[#D6B574]/50 shadow-2xl grid grid-cols-3 gap-2.5 sm:gap-3">
                    
                    {/* Row 0: 4, 9, 2 */}
                    {result.loShuGrid.row0.map((cell) => {
                      const isPresent = cell.count > 0;
                      return (
                        <div
                          key={cell.num}
                          className={`rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-between transition-all border ${
                            isPresent
                              ? 'bg-gradient-to-b from-[#D6B574]/20 via-[#6941A5]/30 to-black/60 border-[#D6B574] shadow-lg shadow-[#D6B574]/15'
                              : 'bg-black/30 border-white/10 opacity-50'
                          }`}
                        >
                          <span className="text-[10px] font-semibold text-[#D6B574]/90 text-center leading-tight">
                            {cell.name}
                          </span>
                          <div className="text-3xl sm:text-4xl font-cormorant font-bold text-white my-1">
                            {cell.num}
                          </div>
                          <div className="text-[10px]">
                            {isPresent ? (
                              <span className="px-2 py-0.5 rounded-full bg-[#D6B574] text-[#24152F] font-bold">
                                {cell.count}x {cell.count > 1 ? 'Repeated' : 'Active'}
                              </span>
                            ) : (
                              <span className="text-white/40 italic">
                                {lang === 'hi' ? 'अनुपस्थित' : 'Missing'}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}

                    {/* Row 1: 3, 5, 7 */}
                    {result.loShuGrid.row1.map((cell) => {
                      const isPresent = cell.count > 0;
                      return (
                        <div
                          key={cell.num}
                          className={`rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-between transition-all border ${
                            cell.num === 5 && isPresent
                              ? 'bg-gradient-to-b from-amber-500/30 via-[#D6B574]/30 to-black/60 border-[#D6B574] ring-2 ring-[#D6B574]/40 shadow-xl'
                              : isPresent
                              ? 'bg-gradient-to-b from-[#D6B574]/20 via-[#6941A5]/30 to-black/60 border-[#D6B574] shadow-lg'
                              : 'bg-black/30 border-white/10 opacity-50'
                          }`}
                        >
                          <span className="text-[10px] font-semibold text-[#D6B574]/90 text-center leading-tight">
                            {cell.name}
                          </span>
                          <div className="text-3xl sm:text-4xl font-cormorant font-bold text-white my-1">
                            {cell.num}
                          </div>
                          <div className="text-[10px]">
                            {isPresent ? (
                              <span className="px-2 py-0.5 rounded-full bg-[#D6B574] text-[#24152F] font-bold">
                                {cell.count}x {cell.count > 1 ? 'Repeated' : 'Active'}
                              </span>
                            ) : (
                              <span className="text-white/40 italic">
                                {lang === 'hi' ? 'अनुपस्थित' : 'Missing'}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}

                    {/* Row 2: 8, 1, 6 */}
                    {result.loShuGrid.row2.map((cell) => {
                      const isPresent = cell.count > 0;
                      return (
                        <div
                          key={cell.num}
                          className={`rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-between transition-all border ${
                            isPresent
                              ? 'bg-gradient-to-b from-[#D6B574]/20 via-[#6941A5]/30 to-black/60 border-[#D6B574] shadow-lg shadow-[#D6B574]/15'
                              : 'bg-black/30 border-white/10 opacity-50'
                          }`}
                        >
                          <span className="text-[10px] font-semibold text-[#D6B574]/90 text-center leading-tight">
                            {cell.name}
                          </span>
                          <div className="text-3xl sm:text-4xl font-cormorant font-bold text-white my-1">
                            {cell.num}
                          </div>
                          <div className="text-[10px]">
                            {isPresent ? (
                              <span className="px-2 py-0.5 rounded-full bg-[#D6B574] text-[#24152F] font-bold">
                                {cell.count}x {cell.count > 1 ? 'Repeated' : 'Active'}
                              </span>
                            ) : (
                              <span className="text-white/40 italic">
                                {lang === 'hi' ? 'अनुपस्थित' : 'Missing'}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}

                  </div>
                </div>

                {/* Lo Shu Grid Analysis Sidebar */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574] block">
                      {lang === 'hi' ? 'चक्र में समाविष्ट अंक (Input Breakdown)' : 'Input Breakdown'}
                    </span>
                    <p className="text-xs text-[#EAE2F4]/80 leading-relaxed font-mono">
                      DOB: {dob} | Mulank: {result.mulank} | Bhagyank: {result.bhagyank} | Kua: {result.kuaProfile.kua}
                    </p>
                    <p className="text-[11px] text-[#EAE2F4]/60">
                      {lang === 'hi'
                        ? `कुल प्रविष्ट अंक: [${result.allExtractedDigits.join(', ')}] (शून्य को छोड़कर)`
                        : `Extracted Digits: [${result.allExtractedDigits.join(', ')}] (Excluding 0)`}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#6941A5]/20 border border-[#D6B574]/30 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574] block">
                      {lang === 'hi' ? 'लो-शू दिशात्मक संतुलन' : 'Directional Energy Balance'}
                    </span>
                    <p className="text-xs text-[#EAE2F4]/85 leading-relaxed">
                      {lang === 'hi'
                        ? `आपका कुआ अंक ${result.kuaProfile.kua} है, जो ${result.kuaProfile.group_hi} (${result.kuaProfile.element_hi}) से संबंधित है। आपके लिए सर्वश्रेष्ठ दिशा ${result.kuaProfile.direction_hi} है।`
                        : `Your Kua Number ${result.kuaProfile.kua} belongs to ${result.kuaProfile.group} (${result.kuaProfile.element}). Your cardinal primary direction is ${result.kuaProfile.direction}.`}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-white block">
                        {lang === 'hi' ? 'अनुपस्थित अंकों के उपाय देखें' : 'View Missing Number Remedies'}
                      </span>
                      <span className="text-[11px] text-[#EAE2F4]/60">
                        {result.missingNumbers.length} {lang === 'hi' ? 'अंकों के उपाय उपलब्ध' : 'remedies available'}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab('remedies')}
                      className="px-3.5 py-1.5 bg-[#D6B574] hover:bg-[#ebd49f] text-[#24152F] text-xs font-bold rounded-lg transition-colors flex items-center gap-1"
                    >
                      <span>{lang === 'hi' ? 'उपाय खोलें' : 'View Remedies'}</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: VEDIC GRID (3-1-9 / 6-7-5 / 2-8-4) */}
        {/* ========================================================================= */}
        {activeTab === 'vedic' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-[#D6B574]/30 shadow-2xl backdrop-blur-md">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <Star className="text-[#D6B574]" size={22} />
                    <span>{lang === 'hi' ? 'शास्त्रीय वैदिक अंक कुण्डली (Vedic Ank Kundali 3×3)' : 'Classical Vedic Ank Kundali (3×3 Grid)'}</span>
                  </h3>
                  <p className="text-xs text-[#EAE2F4]/75 mt-1 font-light">
                    {lang === 'hi'
                      ? 'वैदिक अंक शास्त्र के अनुसार नवग्रहों का चक्र: 3 (बृहस्पति), 1 (सूर्य), 9 (मंगल) / 6 (शुक्र), 7 (केतु), 5 (बुध) / 2 (चन्द्र), 8 (शनि), 4 (राहु)।'
                      : 'Classical Vedic planetary matrix: Row 1 (Guru-Surya-Mangal), Row 2 (Shukra-Ketu-Budh), Row 3 (Chandra-Shani-Rahu).'}
                  </p>
                </div>
                <div className="text-xs px-3 py-1.5 rounded-full bg-[#D6B574]/20 border border-[#D6B574]/40 text-[#D6B574] font-semibold">
                  {lang === 'hi' ? 'सनातन नवग्रह संरेखण' : 'Sanatan Navagraha Grid'}
                </div>
              </div>

              {/* Vedic Grid 3x3 Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex justify-center">
                  <div className="w-full max-w-md aspect-square bg-[#100719] p-3 sm:p-4 rounded-3xl border-2 border-amber-400/60 shadow-2xl grid grid-cols-3 gap-2.5 sm:gap-3">
                    
                    {/* Row 0: 3 (Guru), 1 (Surya), 9 (Mangal) */}
                    {result.vedicGrid.row0.map((cell) => {
                      const isPresent = cell.count > 0;
                      return (
                        <div
                          key={cell.num}
                          className={`rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-between transition-all border ${
                            isPresent
                              ? 'bg-gradient-to-b from-amber-500/25 via-[#6941A5]/30 to-black/70 border-amber-400 shadow-lg shadow-amber-500/10'
                              : 'bg-black/40 border-white/10 opacity-50'
                          }`}
                        >
                          <span className="text-[10px] font-semibold text-[#D6B574] text-center leading-tight">
                            {lang === 'hi' ? cell.planet_hi : cell.planet}
                          </span>
                          <div className="text-3xl sm:text-4xl font-cormorant font-bold text-white my-1">
                            {cell.num}
                          </div>
                          <div className="text-[10px]">
                            {isPresent ? (
                              <span className="px-2 py-0.5 rounded-full bg-amber-400 text-[#24152F] font-bold">
                                {cell.count}x
                              </span>
                            ) : (
                              <span className="text-white/40 italic">
                                {lang === 'hi' ? 'रिक्त कक्ष' : 'Empty'}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}

                    {/* Row 1: 6 (Shukra), 7 (Ketu), 5 (Budh) */}
                    {result.vedicGrid.row1.map((cell) => {
                      const isPresent = cell.count > 0;
                      return (
                        <div
                          key={cell.num}
                          className={`rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-between transition-all border ${
                            isPresent
                              ? 'bg-gradient-to-b from-amber-500/25 via-[#6941A5]/30 to-black/70 border-amber-400 shadow-lg shadow-amber-500/10'
                              : 'bg-black/40 border-white/10 opacity-50'
                          }`}
                        >
                          <span className="text-[10px] font-semibold text-[#D6B574] text-center leading-tight">
                            {lang === 'hi' ? cell.planet_hi : cell.planet}
                          </span>
                          <div className="text-3xl sm:text-4xl font-cormorant font-bold text-white my-1">
                            {cell.num}
                          </div>
                          <div className="text-[10px]">
                            {isPresent ? (
                              <span className="px-2 py-0.5 rounded-full bg-amber-400 text-[#24152F] font-bold">
                                {cell.count}x
                              </span>
                            ) : (
                              <span className="text-white/40 italic">
                                {lang === 'hi' ? 'रिक्त कक्ष' : 'Empty'}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}

                    {/* Row 2: 2 (Chandra), 8 (Shani), 4 (Rahu) */}
                    {result.vedicGrid.row2.map((cell) => {
                      const isPresent = cell.count > 0;
                      return (
                        <div
                          key={cell.num}
                          className={`rounded-2xl p-2.5 sm:p-3 flex flex-col items-center justify-between transition-all border ${
                            isPresent
                              ? 'bg-gradient-to-b from-amber-500/25 via-[#6941A5]/30 to-black/70 border-amber-400 shadow-lg shadow-amber-500/10'
                              : 'bg-black/40 border-white/10 opacity-50'
                          }`}
                        >
                          <span className="text-[10px] font-semibold text-[#D6B574] text-center leading-tight">
                            {lang === 'hi' ? cell.planet_hi : cell.planet}
                          </span>
                          <div className="text-3xl sm:text-4xl font-cormorant font-bold text-white my-1">
                            {cell.num}
                          </div>
                          <div className="text-[10px]">
                            {isPresent ? (
                              <span className="px-2 py-0.5 rounded-full bg-amber-400 text-[#24152F] font-bold">
                                {cell.count}x
                              </span>
                            ) : (
                              <span className="text-white/40 italic">
                                {lang === 'hi' ? 'रिक्त कक्ष' : 'Empty'}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}

                  </div>
                </div>

                {/* Vedic Kundali Meaning and Comparative Guide */}
                <div className="lg:col-span-5 space-y-4 text-xs">
                  <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574] block">
                      {lang === 'hi' ? 'वैदिक अंक कुण्डली व लो-शू में मुख्य अंतर' : 'Vedic Grid vs. Lo Shu Architecture'}
                    </span>
                    <p className="text-[#EAE2F4]/80 leading-relaxed">
                      {lang === 'hi'
                        ? 'लो-शू चक्र दिशात्मक फेंगशुई तत्वों (4-9-2) पर आधारित होता है, जबकि वैदिक अंक कुण्डली सनातन नवग्रहों (3-1-9 / 6-7-5 / 2-8-4) के आध्यात्मिक व कार्मिक प्रभाव को दर्शाती है।'
                        : 'While Lo Shu maps directional elemental Bagua sectors (4-9-2), the Vedic Grid mirrors the classical 9 Navagraha chambers (3-1-9 / 6-7-5 / 2-8-4) revealing spiritual karma and planetary deities.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574] block">
                      {lang === 'hi' ? 'कुंडली के मुख्य ग्रह स्वामी' : 'Key Planetary Activations'}
                    </span>
                    <ul className="space-y-1.5 text-[#EAE2F4]/85">
                      <li className="flex items-center justify-between">
                        <span>{lang === 'hi' ? 'मूलांक स्वामी:' : 'Driver Lord:'}</span>
                        <span className="font-semibold text-white">{lang === 'hi' ? result.mulankProfile.ruler_hi : result.mulankProfile.ruler} ({result.mulank})</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>{lang === 'hi' ? 'भाग्यांक स्वामी:' : 'Destiny Lord:'}</span>
                        <span className="font-semibold text-white">{lang === 'hi' ? result.bhagyankProfile.ruler_hi : result.bhagyankProfile.ruler} ({result.bhagyank})</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>{lang === 'hi' ? 'कुआ तत्व:' : 'Kua Element:'}</span>
                        <span className="font-semibold text-[#D6B574]">{lang === 'hi' ? result.kuaProfile.element_hi : result.kuaProfile.element} ({result.kuaProfile.kua})</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-[#EAE2F4]/90 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                      {lang === 'hi' ? 'वैदिक बीज मंत्र:' : 'Vedic Planetary Mantra:'}
                    </span>
                    <p className="font-mono text-xs text-white">
                      {result.mulankProfile.harmonicMantra}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: 8 PLANES OF DESTINY (YOGAS) */}
        {/* ========================================================================= */}
        {activeTab === 'planes' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-[#D6B574]/30 shadow-2xl backdrop-blur-md">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <Layers className="text-[#D6B574]" size={22} />
                    <span>{lang === 'hi' ? 'लो-शू के 8 राजयोग एवं भाग्य तल' : '8 Planes of Destiny (Classical Yogas)'}</span>
                  </h3>
                  <p className="text-xs text-[#EAE2F4]/75 mt-1 font-light">
                    {lang === 'hi'
                      ? '3 क्षैतिज तल (मानसिक, भावनात्मक, व्यावहारिक), 3 ऊर्ध्वाधर तल (विचार, इच्छाशक्ति, कर्म) और 2 कर्ण राजयोग (स्वर्ण व रजत राजयोग)।'
                      : '3 Horizontal Planes (Mental, Emotional, Practical), 3 Vertical Planes (Thought, Will, Action), and 2 Diagonal Raja Yogas (Golden & Silver).'}
                  </p>
                </div>
                <div className="text-xs text-[#D6B574] font-semibold">
                  {lang === 'hi'
                    ? `सक्रिय योग: ${result.destinyPlanes.filter((p) => p.status === 'Complete').length} पूर्ण, ${result.destinyPlanes.filter((p) => p.status === 'Semi-Active').length} मध्यम`
                    : `Active: ${result.destinyPlanes.filter((p) => p.status === 'Complete').length} Complete, ${result.destinyPlanes.filter((p) => p.status === 'Semi-Active').length} Semi-Active`}
                </div>
              </div>

              {/* Cards Grid for all 8 planes */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {result.destinyPlanes.map((plane) => {
                  const isComplete = plane.status === 'Complete';
                  const isSemi = plane.status === 'Semi-Active';
                  return (
                    <div
                      key={plane.id}
                      className={`p-5 rounded-2xl border transition-all ${
                        isComplete
                          ? 'bg-gradient-to-r from-emerald-950/40 via-white/5 to-[#D6B574]/15 border-emerald-400/60 shadow-lg'
                          : isSemi
                          ? 'bg-gradient-to-r from-amber-950/30 via-white/5 to-white/5 border-amber-400/40'
                          : 'bg-black/30 border-white/10 opacity-75'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#D6B574]">
                              [{plane.numbers.join('-')}]
                            </span>
                            <h4 className="text-sm font-cinzel font-bold text-white">
                              {lang === 'hi' ? plane.name_hi : plane.name}
                            </h4>
                          </div>
                          <span className="text-[11px] text-[#EAE2F4]/70 block font-light">
                            {plane.englishTitle}
                          </span>
                        </div>

                        {/* Status Badge */}
                        <span
                          className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shrink-0 ${
                            isComplete
                              ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20'
                              : isSemi
                              ? 'bg-amber-500/30 text-amber-200 border border-amber-400/40'
                              : 'bg-white/10 text-white/50'
                          }`}
                        >
                          {lang === 'hi'
                            ? `${plane.percentage}% पूर्णता (${plane.presentNumbers.length}/३ अंक उपस्थित)`
                            : `${plane.status} (${plane.percentage}%)`}
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden my-3">
                        <div
                          className={`h-full transition-all duration-500 ${
                            isComplete
                              ? 'bg-gradient-to-r from-emerald-400 to-[#D6B574]'
                              : isSemi
                              ? 'bg-amber-400'
                              : 'bg-white/20'
                          }`}
                          style={{ width: `${plane.percentage}%` }}
                        />
                      </div>

                      {/* Explanation */}
                      <p className="text-xs text-[#EAE2F4]/80 leading-relaxed font-light mb-3">
                        {lang === 'hi' ? plane.meaning_hi : plane.meaning}
                      </p>

                      {/* Numbers presence breakdown */}
                      <div className="flex items-center justify-between text-[11px] pt-2 border-t border-white/10">
                        <span className="text-emerald-400">
                          {lang === 'hi' ? 'उपस्थित:' : 'Present:'}{' '}
                          {plane.presentNumbers.length > 0 ? plane.presentNumbers.join(', ') : 'None'}
                        </span>
                        <span className="text-rose-400">
                          {lang === 'hi' ? 'अनुपस्थित:' : 'Missing:'}{' '}
                          {plane.missingNumbers.length > 0 ? plane.missingNumbers.join(', ') : 'None (100% Active)'}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: MISSING NUMBERS REMEDIES (1-9) */}
        {/* ========================================================================= */}
        {activeTab === 'remedies' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-[#D6B574]/30 shadow-2xl backdrop-blur-md">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <Gem className="text-[#D6B574]" size={22} />
                    <span>{lang === 'hi' ? 'अनुपस्थित अंकों के प्रभावी वैदिक एवं वास्तु उपाय' : 'Targeted Remedies for Missing Numbers'}</span>
                  </h3>
                  <p className="text-xs text-[#EAE2F4]/75 mt-1 font-light">
                    {lang === 'hi'
                      ? 'जो अंक आपकी जन्मतिथि में नहीं हैं, उनके नकारात्मक प्रभावों को वैदिक यंत्र, रुद्राक्ष, रत्न, रंग व वास्तु उपायों से संतुलित करें।'
                      : 'Balance missing planetary frequencies in your chart using authentic Yantras, Rudraksha, crystals, colors, and Vastu directional remedies.'}
                  </p>
                </div>
                <div className="text-xs px-3 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 font-semibold">
                  {result.missingNumbers.length} {lang === 'hi' ? 'अनुपस्थित अंक' : 'Missing Numbers in Chart'}
                </div>
              </div>

              {/* Interactive Number Selector Chips */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs text-[#D6B574] font-semibold mr-2">
                  {lang === 'hi' ? 'अंक चुनें:' : 'Select Missing Number:'}
                </span>
                {result.missingNumbers.map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setSelectedMissingNum(num)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border ${
                      selectedMissingNum === num
                        ? 'bg-[#D6B574] text-[#24152F] border-[#D6B574] shadow-md scale-105'
                        : 'bg-black/40 text-white/80 border-white/15 hover:border-white/30'
                    }`}
                  >
                    <AlertCircle size={12} className="text-rose-400" />
                    <span>{lang === 'hi' ? `अंक ${num}` : `Number ${num}`}</span>
                  </button>
                ))}
              </div>

              {/* Detailed Remedy Card for Selected Number */}
              {selectedMissingNum && (
                <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#6941A5]/25 via-black/40 to-black/60 border border-[#D6B574]/40 shadow-2xl space-y-6">
                  {(() => {
                    const remedy = result.missingRemedies.find((r) => r.number === selectedMissingNum);
                    if (!remedy) return null;
                    return (
                      <>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574] block">
                              {lang === 'hi' ? `अनुपस्थित अंक ${remedy.number} का संपूर्ण निदान` : `Missing Number ${remedy.number} Diagnosis`}
                            </span>
                            <h4 className="font-cinzel text-2xl font-bold text-white mt-1">
                              {lang === 'hi' ? remedy.planet_hi : remedy.planet} ({lang === 'hi' ? remedy.element_hi : remedy.element})
                            </h4>
                            <span className="text-xs text-[#EAE2F4]/70">
                              {lang === 'hi' ? `प्रभावित दिशा: ${remedy.direction_hi}` : `Afflicted Direction: ${remedy.direction}`}
                            </span>
                          </div>
                          <div className="font-cormorant text-6xl text-[#D6B574] font-light">
                            #{remedy.number}
                          </div>
                        </div>

                        {/* Effects */}
                        <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 space-y-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-rose-300 flex items-center gap-1.5">
                            <AlertCircle size={14} />
                            <span>{lang === 'hi' ? 'अंक न होने पर जीवन पर प्रभाव (Challenges):' : 'Challenges & Life Symptoms:'}</span>
                          </span>
                          <p className="text-xs text-[#EAE2F4]/90 leading-relaxed">
                            {lang === 'hi' ? remedy.effects_hi : remedy.effects}
                          </p>
                        </div>

                        {/* Remedies Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                          
                          {/* Yantra */}
                          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D6B574] block">
                              {lang === 'hi' ? '१. वैदिक यंत्र एवं मूर्ति' : '1. Sacred Yantra / Idol'}
                            </span>
                            <p className="text-white font-medium">{remedy.remedies.yantra}</p>
                          </div>

                          {/* Rudraksha */}
                          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D6B574] block">
                              {lang === 'hi' ? '२. सिद्ध रुद्राक्ष' : '2. Rudraksha Bead'}
                            </span>
                            <p className="text-white font-medium">{remedy.remedies.rudraksha}</p>
                          </div>

                          {/* Gemstone */}
                          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D6B574] block">
                              {lang === 'hi' ? '३. रत्न व क्रिस्टल' : '3. Crystal / Gemstone'}
                            </span>
                            <p className="text-white font-medium">{remedy.remedies.gemstone}</p>
                          </div>

                          {/* Color Therapy */}
                          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D6B574] block">
                              {lang === 'hi' ? '४. रंग चिकित्सा (Color Therapy)' : '4. Auspicious Colors'}
                            </span>
                            <p className="text-white font-medium">{remedy.remedies.colorTherapy}</p>
                          </div>

                          {/* Vastu Action */}
                          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5 md:col-span-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D6B574] block">
                              {lang === 'hi' ? '५. वास्तु दिशात्मक संरेखण' : '5. Vastu Energy Alignment'}
                            </span>
                            <p className="text-white font-medium leading-relaxed">{remedy.remedies.vastuAction}</p>
                          </div>

                        </div>

                        {/* Sacred Mantra */}
                        <div className="p-4 rounded-2xl bg-[#D6B574]/15 border border-[#D6B574]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D6B574] block">
                              {lang === 'hi' ? 'दिव्य मंत्र साधना:' : 'Sacred Harmonic Mantra:'}
                            </span>
                            <span className="font-mono text-sm text-white font-semibold">
                              {remedy.remedies.mantra}
                            </span>
                          </div>
                          <span className="text-[11px] text-[#EAE2F4]/70 whitespace-nowrap">
                            {lang === 'hi' ? 'प्रतिदिन १०८ बार जपें' : 'Chant 108 times daily'}
                          </span>
                        </div>
                      </>
                    );
                  })()}
                </div>
              )}

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: KUA NUMBER MASTER GUIDE & 1967 PROOF */}
        {/* ========================================================================= */}
        {activeTab === 'kuaGuide' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-[#D6B574]/30 shadow-2xl backdrop-blur-md space-y-6">
              <div className="pb-4 border-b border-white/10">
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <BookOpen className="text-[#D6B574]" size={22} />
                  <span>{lang === 'hi' ? 'कुआ अंक की प्रामाणिक वैदिक एवं फेंगशुई गणना विधि' : 'Authentic Kua Calculation Methodology & Benchmark Guide'}</span>
                </h3>
                <p className="text-xs text-[#EAE2F4]/75 mt-1 font-light">
                  {lang === 'hi'
                    ? '20वीं व 21वीं सदी के सूत्र, सौर नववर्ष (Li Chun) नियम, एवं अंक ५ का परिवर्तन नियम।'
                    : '20th & 21st Century Formulas, Li Chun Spring Solar Rule, and the Rule of 5 conversion.'}
                </p>
              </div>

              {/* 1967 Benchmark Table */}
              <div className="p-5 rounded-2xl bg-black/40 border border-[#D6B574]/30 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574] block">
                  {lang === 'hi' ? 'वर्ष १९६७ का प्रामाणिक उदाहरण (Benchmark 1967):' : 'Authentic Benchmark: Year 1967'}
                </span>
                <p className="text-xs text-[#EAE2F4]/80 leading-relaxed">
                  {lang === 'hi'
                    ? 'वर्ष 1967 के अंतिम दो अंकों का योग: 6 + 7 = 13 → 1 + 3 = 4.'
                    : 'Sum of last two digits of 1967: 6 + 7 = 13 → 1 + 3 = 4.'}
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-white/10 text-[#D6B574]">
                      <tr>
                        <th className="p-3 rounded-l-xl">{lang === 'hi' ? 'जन्म वर्ष' : 'Birth Year'}</th>
                        <th className="p-3">{lang === 'hi' ? 'अंतिम २ अंकों का योग' : 'Last 2 Digits Sum'}</th>
                        <th className="p-3">{lang === 'hi' ? 'पुरुष (Male): 10 - Sum' : 'Male (10 - Sum)'}</th>
                        <th className="p-3 rounded-r-xl">{lang === 'hi' ? 'महिला (Female): Sum + 5' : 'Female (Sum + 5)'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10 text-[#EAE2F4]/90">
                      <tr>
                        <td className="p-3 font-semibold text-white">1967 (सामान्य)</td>
                        <td className="p-3">6 + 7 = 13 → 4</td>
                        <td className="p-3 font-bold text-[#D6B574]">6 (Qian Metal / NW)</td>
                        <td className="p-3 font-bold text-emerald-300">9 (Li Fire / South)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-amber-300">15 Jan 1967 (Li Chun पूर्व)</td>
                        <td className="p-3">सौर वर्ष 1966 → 6+6=12 → 3</td>
                        <td className="p-3 font-bold text-[#D6B574]">10 - 3 = 7 (Dui Metal / West)</td>
                        <td className="p-3 font-bold text-emerald-300">3 + 5 = 8 (Gen Earth / NE)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3 Core Rules Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
                
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574] block">
                    {lang === 'hi' ? '१. बीसवीं सदी (1900-1999)' : '1. 20th Century (1900-1999)'}
                  </span>
                  <p className="text-[#EAE2F4]/80 leading-relaxed">
                    <strong>पुरुष (Male):</strong> 10 - एकल योग<br />
                    <strong>महिला (Female):</strong> एकल योग + 5 (यदि &gt; 9 तो पुनः जोड़ें)
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574] block">
                    {lang === 'hi' ? '२. इक्कीसवीं सदी (2000+)' : '2. 21st Century (2000+)'}
                  </span>
                  <p className="text-[#EAE2F4]/80 leading-relaxed">
                    <strong>पुरुष (Male):</strong> 9 - एकल योग (यदि परिणाम 0 हो तो 9)<br />
                    <strong>महिला (Female):</strong> एकल योग + 6
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574] block">
                    {lang === 'hi' ? '३. अंक ५ का विशेष नियम (Rule of 5)' : '3. Special Rule of 5'}
                  </span>
                  <p className="text-[#EAE2F4]/80 leading-relaxed">
                    बागुआ के 8 कोणों में अंक 5 का कोई कोण नहीं होता।<br />
                    <strong>पुरुष के लिए:</strong> 5 बदलकर <strong>2 (कुन / दक्षिण-पश्चिम)</strong> बनता है।<br />
                    <strong>महिला के लिए:</strong> 5 बदलकर <strong>8 (गेन / उत्तर-पूर्व)</strong> बनता है।
                  </p>
                </div>

              </div>

              {/* Solar Year Rule Explanation */}
              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-400/30 text-xs space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block">
                  {lang === 'hi' ? 'सौर नववर्ष (Li Chun / वसंत ऋतु) का नियम:' : 'Li Chun Solar Spring Calendar Rule:'}
                </span>
                <p className="text-[#EAE2F4]/90 leading-relaxed">
                  {lang === 'hi'
                    ? 'यदि जातक का जन्म १ जनवरी से ३ फरवरी के बीच हुआ है, तो चीनी सौर कैलेंडर (Li Chun) ४ फरवरी से शुरू होने के कारण कुआ अंक की गणना पिछले सौर वर्ष (Year - 1) के आधार पर स्वतः की जाती है। जैसे: १५ जनवरी १९६७ को जन्मे जातक का सौर वर्ष १९६६ मानकर पुरुष का कुआ अंक ७ तथा महिला का कुआ अंक ८ निकाला जाता है।'
                    : 'If born between January 1 and February 3, the Chinese Solar Year begins on Li Chun (February 4). The calculation automatically uses the preceding solar year (Year - 1). For example, Jan 15, 1967 is evaluated using solar year 1966.'}
                </p>
              </div>

            </div>
          </div>
        )}

        {/* Auspicious Guidance & Planetary Synergy Card */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#170c20] border border-[#D6B574]/40 shadow-2xl space-y-6">
          <div className="border-b border-white/10 pb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#D6B574] block">
                {lang === 'hi' ? 'ग्रह सामंजस्य एवं शुभ मार्गदर्शन' : 'Planetary Synergy & Auspicious Guidance'}
              </span>
              <p className="font-cormorant text-xl text-white mt-1 leading-relaxed">
                {lang === 'hi' ? result.synergy_hi : result.synergy}
              </p>
            </div>
            <div className="text-xs font-semibold text-[#D6B574] px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 shrink-0">
              {result.kuaProfile.group} ({result.kuaProfile.element})
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] uppercase font-bold text-[#D6B574] block">
                {lang === 'hi' ? 'शुभ रंग' : 'Lucky Colors'}
              </span>
              <span className="text-white font-medium">
                {lang === 'hi' ? result.mulankProfile.luckyColors_hi : result.mulankProfile.luckyColors}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] uppercase font-bold text-[#D6B574] block">
                {lang === 'hi' ? 'शुभ दिन' : 'Lucky Days'}
              </span>
              <span className="text-white font-medium">
                {lang === 'hi' ? result.mulankProfile.luckyDays_hi : result.mulankProfile.luckyDays}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] uppercase font-bold text-[#D6B574] block">
                {lang === 'hi' ? 'शुभ रत्न / रुद्राक्ष' : 'Lucky Gem & Rudraksha'}
              </span>
              <span className="text-white font-medium">
                {lang === 'hi' ? `${result.mulankProfile.gemstone_hi} / ${result.mulankProfile.rudraksha_hi}` : `${result.mulankProfile.gemstone} / ${result.mulankProfile.rudraksha}`}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-[10px] uppercase font-bold text-[#D6B574] block">
                {lang === 'hi' ? 'कुआ दिशाएं' : 'Favorable Directions'}
              </span>
              <span className="text-white font-medium">
                {result.kuaProfile.direction} ({result.kuaProfile.favorableDirections[0]?.name.split(' ')[0]})
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
            <p className="text-xs text-[#EAE2F4]/80">
              {lang === 'hi'
                ? 'क्या आप व्यक्तिगत वैदिक कुंडली मिलान, नाम वर्तनी संतुलन या वास्तु उपाय परामर्श चाहते हैं?'
                : 'Looking for 1-on-1 personalized Kundli alignment, name-spelling correction, or Vastu direction remedies?'}
            </p>
            <button
              type="button"
              onClick={() =>
                onBookWithNumbers(
                  `DOB: ${dob}, Gender: ${gender}, Name: ${name} (Mulank: ${result.mulank}, Bhagyank: ${result.bhagyank}, Kua: ${result.kuaProfile.kua})`
                )
              }
              className="w-full sm:w-auto px-6 py-3.5 bg-[#D6B574] hover:bg-[#ebd49f] text-[#24152F] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:scale-[1.02] whitespace-nowrap flex items-center justify-center gap-2"
            >
              <span>{lang === 'hi' ? 'डॉ. पूजा जी से संपूर्ण परामर्श प्राप्त करें' : 'Book Complete Reading with Dr. Pooja Ji'}</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

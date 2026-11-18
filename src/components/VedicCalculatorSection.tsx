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
    <section id="calculator" className="py-12 md:py-16 bg-[#F4F0FA] text-[#1E162B] relative overflow-hidden border-t border-[#DFD5F0]">
      {/* Subtle luminous ambient washes */}
      <div className="absolute top-1/4 left-1/4 w-[560px] h-[560px] bg-white/70 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[460px] h-[460px] bg-[#FBF5E6]/90 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 space-y-2.5">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#DEC38C] text-xs font-semibold uppercase tracking-widest text-[#7A5311] shadow-2xs">
            <Sparkles size={14} className="text-[#B48228]" />
            <span>{lang === 'hi' ? 'अंक चक्र जांच • वैदिक अंकशास्त्र कैलकुलेटर' : 'Divine Geometric Matrix • Vedic Numerology Engine'}</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E162B] tracking-wide leading-tight">
            {lang === 'hi' ? 'अपनी जन्मतिथि के अंकों को समझें' : 'DECODE YOUR DATE OF BIRTH'}
          </h2>

          <h3 className="font-cormorant text-2xl sm:text-3xl text-[#522B8A] italic font-normal tracking-wide">
            {lang === 'hi' ? 'अपने जीवन और भाग्य को बेहतर बनाएं।' : 'CHANGE YOUR LIFE AND DESTINY.'}
          </h3>

          <p className="text-sm sm:text-base text-[#4A4356] max-w-3xl mx-auto font-normal leading-relaxed pt-1">
            {lang === 'hi'
              ? 'अपनी जन्मतिथि डालें और जानें अपना मूलांक (Driver), भाग्यांक (Conductor), कुआ अंक (Kua), 8 भाग्य योग और मिसिंग नंबर के आसान उपाय।'
              : 'Enter your exact date of birth to reveal your Driver (Mulank), Conductor (Bhagyank), Kua Number, 8 Planes of Destiny, and Missing Number remedies. Divine Geometric Matrix'}
          </p>
        </div>

        {/* Interactive Input Form */}
        <div className="max-w-4xl mx-auto mb-8 p-4 sm:p-7 rounded-3xl bg-white border border-[#DFD5F0] shadow-xl">
          <form onSubmit={handleCalculate} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              
              {/* Date of Birth Input */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#522B8A] mb-2 flex items-center gap-1.5">
                  <Calendar size={14} className="text-[#B48228]" />
                  <span>{lang === 'hi' ? 'जन्मतिथि (Date of Birth)' : 'Date of Birth'}</span>
                </label>
                <input
                  type="date"
                  required
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6DFD3] text-[#1E162B] text-sm focus:outline-none focus:border-[#522B8A] focus:ring-2 focus:ring-[#522B8A]/15 transition-colors"
                />
                <p className="text-[11px] text-[#5D556A] mt-1">
                  {lang === 'hi' ? 'दिन, महीना और साल सही दर्ज करें।' : 'DD/MM/YYYY for astrological alignment.'}
                </p>
              </div>

              {/* Gender Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#522B8A] mb-2 flex items-center gap-1.5">
                  <Compass size={14} className="text-[#B48228]" />
                  <span>{lang === 'hi' ? 'लिंग (कुआ अंक जानने के लिए जरूरी)' : 'Gender (Crucial for Kua Number)'}</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`h-11 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                      gender === 'female'
                        ? 'bg-[#522B8A] text-white border-[#522B8A] shadow-sm'
                        : 'bg-[#FAF8F5] text-[#4A4356] border-[#E6DFD3] hover:bg-[#F4F0FA] hover:text-[#1E162B]'
                    }`}
                  >
                    {lang === 'hi' ? 'महिला (Female)' : 'Female'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`h-11 px-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                      gender === 'male'
                        ? 'bg-[#522B8A] text-white border-[#522B8A] shadow-sm'
                        : 'bg-[#FAF8F5] text-[#4A4356] border-[#E6DFD3] hover:bg-[#F4F0FA] hover:text-[#1E162B]'
                    }`}
                  >
                    {lang === 'hi' ? 'पुरुष (Male)' : 'Male'}
                  </button>
                </div>
                <p className="text-[11px] text-[#5D556A] mt-1">
                  {lang === 'hi' ? 'कुआ अंक की गणना पुरुष व महिला के लिए अलग-अलग नियम से होती है।' : 'Male and female use distinct classical Kua formulas.'}
                </p>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#522B8A] mb-2 flex items-center gap-1.5">
                  <User size={14} className="text-[#B48228]" />
                  <span>{lang === 'hi' ? 'पूरा नाम (नाम का शुभ अंक जानने के लिए)' : 'Full Name (For Name Vibration)'}</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Pooja Awasthi"
                  className="w-full px-4 py-3 rounded-xl bg-[#FAF8F5] border border-[#E6DFD3] text-[#1E162B] text-sm focus:outline-none focus:border-[#522B8A] focus:ring-2 focus:ring-[#522B8A]/15 transition-colors"
                />
                <p className="text-[11px] text-[#5D556A] mt-1">
                  {lang === 'hi' ? 'नाम की स्पेलिंग व शुभ अंक का मिलान' : 'Evaluates Chaldean sound vibration.'}
                </p>
              </div>

            </div>

            {/* Quick Preset Buttons */}
            <div className="pt-3 border-t border-[#EFECE6] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[#4A4356] font-medium">
                {lang === 'hi' ? 'सीधे उदाहरण चुनकर देखें:' : 'Quick Benchmark Examples:'}
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => handlePresetSelect('1967-07-20', 'male', 'Ramesh Sharma')}
                  className="px-3 py-1.5 rounded-lg bg-[#FBF5E6] hover:bg-[#F5E8C8] text-[#7A5311] border border-[#DEC38C] font-semibold transition-colors cursor-pointer"
                  title="1967 Male: 10-4=6"
                >
                  {lang === 'hi' ? '1967 (पुरुष → कुआ 6)' : '1967 (Male → Kua 6)'}
                </button>
                <button
                  type="button"
                  onClick={() => handlePresetSelect('1967-07-20', 'female', 'Sita Devi')}
                  className="px-3 py-1.5 rounded-lg bg-[#FBF5E6] hover:bg-[#F5E8C8] text-[#7A5311] border border-[#DEC38C] font-semibold transition-colors cursor-pointer"
                  title="1967 Female: 4+5=9"
                >
                  {lang === 'hi' ? '1967 (महिला → कुआ 9)' : '1967 (Female → Kua 9)'}
                </button>
                <button
                  type="button"
                  onClick={() => handlePresetSelect('1967-01-15', 'male', 'Vikram Singh')}
                  className="px-3 py-1.5 rounded-lg bg-[#F4F0FA] hover:bg-[#EAE2F4] text-[#522B8A] border border-[#DFD5F0] font-semibold transition-colors cursor-pointer"
                  title="15 Jan 1967 (Li Chun test: uses 1966 -> Male Kua 7)"
                >
                  {lang === 'hi' ? '15 जन 1967 (सौर वर्ष टेस्ट)' : '15 Jan 1967 (Li Chun Spring Test)'}
                </button>
                <button
                  type="button"
                  onClick={() => handlePresetSelect('2005-08-18', 'male', 'Aarav Gupta')}
                  className="px-3 py-1.5 rounded-lg bg-[#FBF5E6] hover:bg-[#F5E8C8] text-[#7A5311] border border-[#DEC38C] font-semibold transition-colors cursor-pointer"
                  title="21st Century Male: 9-5=4"
                >
                  {lang === 'hi' ? '2005 (नई सदी)' : '2005 (21st Century)'}
                </button>
              </div>
            </div>

            {/* Submit & Calculate Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
              <button
                type="submit"
                className="w-full sm:w-auto h-12 px-8 bg-[#522B8A] hover:bg-[#412070] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles size={16} className="text-[#F5E8C8]" />
                <span>{lang === 'hi' ? 'अंक चक्र विश्लेषण देखें (Decode)' : 'Decode Complete Numerology & Grids'}</span>
              </button>
              <span className="text-[11px] text-[#5D556A] text-center sm:text-right">
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
          <div className="p-6 rounded-3xl bg-white border border-[#E6DFD3] shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#FBF5E6] rounded-bl-full pointer-events-none" />
            <div className="space-y-2 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A5311]">
                  {lang === 'hi' ? 'मूलांक (Driver Number)' : 'Driver (Mulank)'}
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#F4F0FA] text-[#522B8A] font-semibold">
                  {lang === 'hi' ? `तिथि ${result.day}` : `Day ${result.day}`}
                </span>
              </div>
              <div className="text-xs text-[#5D556A]">
                {lang === 'hi' ? 'आपका मूल स्वभाव व व्यक्तित्व' : 'Core Nature & Self'}
              </div>
              <div className="font-cormorant text-6xl font-semibold text-[#522B8A] my-1 tabular-nums">
                {result.mulank}
              </div>
              <div className="font-cinzel text-base font-bold text-[#1E162B]">
                {lang === 'hi' ? result.mulankProfile.title_hi : result.mulankProfile.archetype}
              </div>
              <div className="text-xs font-semibold text-[#7A5311]">
                {lang === 'hi' ? `स्वामी: ${result.mulankProfile.ruler_hi}` : `Ruler: ${result.mulankProfile.ruler}`}
              </div>
            </div>
            <p className="text-[11px] text-[#4A4356] leading-relaxed pt-3 mt-3 border-t border-[#EFECE6]">
              {lang === 'hi' ? result.mulankProfile.description_hi : result.mulankProfile.description}
            </p>
          </div>

          {/* 2. Conductor (Bhagyank) */}
          <div className="p-6 rounded-3xl bg-white border border-[#E6DFD3] shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#F4F0FA] rounded-bl-full pointer-events-none" />
            <div className="space-y-2 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A5311]">
                  {lang === 'hi' ? 'भाग्यांक (Conductor Number)' : 'Conductor (Bhagyank)'}
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#F4F0FA] text-[#522B8A] font-semibold">
                  {lang === 'hi' ? 'जन्मतिथि का पूरा जोड़' : 'Sum of Full DOB'}
                </span>
              </div>
              <div className="text-xs text-[#5D556A]">
                {lang === 'hi' ? 'जीवन का मुख्य लक्ष्य व कर्म पथ' : 'Destiny & Life Path'}
              </div>
              <div className="font-cormorant text-6xl font-semibold text-[#522B8A] my-1 tabular-nums">
                {result.bhagyank}
              </div>
              <div className="font-cinzel text-base font-bold text-[#1E162B]">
                {lang === 'hi' ? result.bhagyankProfile.title_hi : result.bhagyankProfile.archetype}
              </div>
              <div className="text-xs font-semibold text-[#7A5311]">
                {lang === 'hi' ? `स्वामी: ${result.bhagyankProfile.ruler_hi}` : `Ruler: ${result.bhagyankProfile.ruler}`}
              </div>
            </div>
            <p className="text-[11px] text-[#4A4356] leading-relaxed pt-3 mt-3 border-t border-[#EFECE6]">
              {lang === 'hi' ? result.bhagyankProfile.description_hi : result.bhagyankProfile.description}
            </p>
          </div>

          {/* 3. Kua Number (Classical Feng Shui & Directional Mastery) */}
          <div className="p-6 rounded-3xl bg-gradient-to-b from-[#FBF5E6] to-white border-2 border-[#DEC38C] shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-2 relative z-10">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A5311] flex items-center gap-1">
                  <Compass size={13} className="text-[#B48228]" />
                  <span>{lang === 'hi' ? 'कुआ अंक (Kua Number)' : 'Kua Number'}</span>
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white border border-[#DEC38C] text-[#7A5311] font-semibold">
                  {lang === 'hi' ? result.kuaProfile.group_hi : result.kuaProfile.group}
                </span>
              </div>

              {result.kuaProfile.isLiChunApplied && (
                <div className="p-1.5 px-2 rounded-lg bg-amber-50 border border-amber-300 text-[10px] text-amber-900 flex items-center gap-1">
                  <Info size={11} className="shrink-0 text-amber-700" />
                  <span>
                    {lang === 'hi'
                      ? `सौर वर्ष नियम: जन्म 4 फरवरी से पहले होने के कारण सौर वर्ष ${result.kuaProfile.solarYear} से गणना की गई।`
                      : `Li Chun rule: Born before Feb 4, calculated using solar year ${result.kuaProfile.solarYear}.`}
                  </span>
                </div>
              )}

              {result.kuaProfile.ruleOf5Applied && (
                <div className="p-1.5 px-2 rounded-lg bg-[#F4F0FA] border border-[#DFD5F0] text-[10px] text-[#522B8A] flex items-center gap-1">
                  <ShieldCheck size={11} className="shrink-0" />
                  <span>
                    {lang === 'hi'
                      ? `विशेष नियम: अंक 5 को बदलकर ${result.kuaProfile.kua} (${result.kuaProfile.trigram_hi}) किया गया।`
                      : `Rule of 5: Digit 5 converted to ${result.kuaProfile.kua} (${result.kuaProfile.trigram}).`}
                  </span>
                </div>
              )}

              <div className="font-cormorant text-6xl font-semibold text-[#7A5311] my-1 tabular-nums">
                {result.kuaProfile.kua}
              </div>
              <div className="font-cinzel text-base font-bold text-[#1E162B]">
                {lang === 'hi' ? result.kuaProfile.trigram_hi : result.kuaProfile.trigram} — {lang === 'hi' ? result.kuaProfile.element_hi : result.kuaProfile.element}
              </div>
              <div className="text-xs text-[#4A4356]">
                {lang === 'hi' ? `मुख्य दिशा: ${result.kuaProfile.direction_hi}` : `Base Direction: ${result.kuaProfile.direction}`}
              </div>
            </div>

            <div className="pt-3 mt-3 border-t border-[#DEC38C]/50 text-[11px] text-[#4A4356] space-y-1">
              <span className="block text-[#7A5311] font-semibold text-[10px] uppercase">
                {lang === 'hi' ? 'गणना का तरीका (Formula):' : 'Formula Proof:'}
              </span>
              <p className="font-mono text-[10px] text-[#1E162B] break-words bg-white/80 p-1.5 rounded-lg border border-[#E6DFD3]">
                {lang === 'hi' ? result.kuaProfile.formulaProof_hi : result.kuaProfile.formulaProof}
              </p>
            </div>
          </div>

          {/* 4. Name Vibration (Chaldean) */}
          <div className="p-6 rounded-3xl bg-white border border-[#E6DFD3] shadow-md flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#F4F0FA] rounded-bl-full pointer-events-none" />
            <div className="space-y-2 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A5311]">
                  {lang === 'hi' ? 'नाम का शुभ अंक (Name Number)' : 'Name Vibration'}
                </span>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#F4F0FA] text-[#522B8A] font-semibold">
                  {lang === 'hi' ? 'कैल्डियन (Chaldean)' : 'Chaldean'}
                </span>
              </div>
              <div className="text-xs text-[#5D556A]">
                {lang === 'hi' ? 'नाम की स्पेलिंग व अंक प्रभाव' : 'Sound & Spelling Energy'}
              </div>
              <div className="font-cormorant text-6xl font-semibold text-[#522B8A] my-1 tabular-nums">
                {result.nameSingle}
              </div>
              <div className="font-cinzel text-base font-bold text-[#1E162B]">
                {lang === 'hi' ? `एकल अंक ${result.nameSingle}` : `Vibration ${result.nameSingle}`}
              </div>
              <div className="text-xs font-semibold text-[#7A5311]">
                {lang === 'hi'
                  ? `कुल जोड़: ${result.nameCompound} → एकल अंक ${result.nameSingle}`
                  : `Compound: ${result.nameCompound} → Single ${result.nameSingle}`}
              </div>
            </div>
            <p className="text-[11px] text-[#4A4356] leading-relaxed pt-3 mt-3 border-t border-[#EFECE6]">
              {lang === 'hi'
                ? 'नाम की स्पेलिंग को मूलांक और भाग्यांक से मिलाने पर करियर और जीवन में आ रही रुकावटें दूर होती हैं।'
                : 'Harmonizing your name spelling with your Driver number unlocks effortless social and career luck.'}
            </p>
          </div>

        </div>

        {/* Tab Navigation for Interactive Grids & Analysis */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-5 border-b border-[#DFD5F0] pb-4">
          <button
            type="button"
            onClick={() => setActiveTab('loshu')}
            className={`px-3 sm:px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'loshu'
                ? 'bg-[#522B8A] text-white shadow-md'
                : 'bg-white text-[#4A4356] border border-[#E6DFD3] hover:bg-[#FAF8F5] hover:text-[#1E162B]'
            }`}
          >
            <Grid size={14} />
            <span>{lang === 'hi' ? '3×3 लो-शू व वैदिक चक्र' : '3×3 Lo Shu & Vedic Grids'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('vedic')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'vedic'
                ? 'bg-[#522B8A] text-white shadow-md'
                : 'bg-white text-[#4A4356] border border-[#E6DFD3] hover:bg-[#FAF8F5] hover:text-[#1E162B]'
            }`}
          >
            <Star size={14} />
            <span>{lang === 'hi' ? 'वैदिक अंक ग्रिड (3-1-9)' : 'Vedic Grid (3-1-9)'}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('planes')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'planes'
                ? 'bg-[#522B8A] text-white shadow-md'
                : 'bg-white text-[#4A4356] border border-[#E6DFD3] hover:bg-[#FAF8F5] hover:text-[#1E162B]'
            }`}
          >
            <Layers size={14} />
            <span>{lang === 'hi' ? '8 भाग्य योग (Planes)' : '8 Planes of Destiny'}</span>
            <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
              activeTab === 'planes' ? 'bg-white/20 text-white' : 'bg-[#F4F0FA] text-[#522B8A]'
            }`}>
              {result.destinyPlanes.filter((p) => p.status === 'Complete').length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('remedies')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'remedies'
                ? 'bg-[#522B8A] text-white shadow-md'
                : 'bg-white text-[#4A4356] border border-[#E6DFD3] hover:bg-[#FAF8F5] hover:text-[#1E162B]'
            }`}
          >
            <Gem size={14} />
            <span>{lang === 'hi' ? 'मिसिंग नंबर उपाय' : 'Missing Remedies'}</span>
            <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
              activeTab === 'remedies' ? 'bg-rose-500 text-white' : 'bg-rose-100 text-rose-700'
            }`}>
              {result.missingNumbers.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('kuaGuide')}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'kuaGuide'
                ? 'bg-[#522B8A] text-white shadow-md'
                : 'bg-white text-[#4A4356] border border-[#E6DFD3] hover:bg-[#FAF8F5] hover:text-[#1E162B]'
            }`}
          >
            <BookOpen size={14} />
            <span>{lang === 'hi' ? 'कुआ अंक की जानकारी' : 'Kua Formula'}</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: LO SHU GRID (4-9-2 / 3-5-7 / 8-1-6) */}
        {/* ========================================================================= */}
        {activeTab === 'loshu' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-4 sm:p-8 rounded-3xl bg-white border border-[#E6DFD3] shadow-lg">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#EFECE6]">
                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1E162B] flex items-center gap-2">
                    <Grid className="text-[#B48228]" size={22} />
                    <span>{lang === 'hi' ? 'प्रामाणिक लो-शू चक्र (Lo Shu Magic Square)' : 'Classical Lo Shu Magic Square (3×3)'}</span>
                  </h3>
                  <p className="text-xs text-[#4A4356] mt-1">
                    {lang === 'hi'
                      ? 'लो-शू चक्र में जन्मतिथि के सभी अंक + मूलांक + भाग्यांक + कुआ अंक प्रविष्ट किए जाते हैं (4-9-2 / 3-5-7 / 8-1-6)।'
                      : 'Fixed classical Lo Shu matrix populated with DOB digits + Driver + Conductor + Kua Number.'}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 size={12} />
                    {lang === 'hi' ? `उपस्थित अंक: ${result.presentNumbers.join(', ')}` : `Present: ${result.presentNumbers.join(', ')}`}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200 font-semibold flex items-center gap-1.5">
                    <AlertCircle size={12} />
                    {lang === 'hi' ? `अनुपस्थित अंक: ${result.missingNumbers.join(', ')}` : `Missing: ${result.missingNumbers.join(', ')}`}
                  </span>
                </div>
              </div>

              {/* Lo Shu 3x3 Grid Graphic */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                <div className="lg:col-span-7 flex justify-center">
                  <div className="w-full max-w-md aspect-square bg-[#FAF8F5] p-2 sm:p-4 rounded-2xl sm:rounded-3xl border-2 border-[#DEC38C] shadow-inner grid grid-cols-3 gap-1.5 sm:gap-3">
                    
                    {/* Row 0: 4, 9, 2 */}
                    {result.loShuGrid.row0.map((cell) => {
                      const isPresent = cell.count > 0;
                      return (
                        <div
                          key={cell.num}
                          className={`rounded-xl sm:rounded-2xl p-1.5 sm:p-3 flex flex-col items-center justify-between transition-all border ${
                            isPresent
                              ? 'bg-gradient-to-b from-[#FBF5E6] to-white border-[#DEC38C] shadow-sm'
                              : 'bg-[#F4F1EA]/60 border-[#E6DFD3] opacity-75'
                          }`}
                        >
                          <span className={`text-[9px] sm:text-[10px] font-semibold text-center leading-tight ${isPresent ? 'text-[#7A5311]' : 'text-[#5D556A]'}`}>
                            {lang === 'hi' ? cell.name_hi : cell.name}
                          </span>
                          <div className={`text-2xl sm:text-4xl font-cormorant font-bold my-0.5 sm:my-1 tabular-nums ${isPresent ? 'text-[#1E162B]' : 'text-[#8C849A]'}`}>
                            {cell.num}
                          </div>
                          <div className="text-[9px] sm:text-[10px]">
                            {isPresent ? (
                              <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#522B8A] text-white font-bold text-[8px] sm:text-[10px]">
                                {lang === 'hi' ? `${cell.count} बार` : `${cell.count}x ${cell.count > 1 ? 'Rep' : 'Active'}`}
                              </span>
                            ) : (
                              <span className="text-[#8C849A] italic text-[8px] sm:text-[10px]">
                                {lang === 'hi' ? 'खाली' : 'Missing'}
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
                          className={`rounded-xl sm:rounded-2xl p-1.5 sm:p-3 flex flex-col items-center justify-between transition-all border ${
                            cell.num === 5 && isPresent
                              ? 'bg-gradient-to-b from-[#FBF5E6] via-[#FFF9EB] to-white border-[#B48228] ring-2 ring-[#DEC38C]/60 shadow-md'
                              : isPresent
                              ? 'bg-gradient-to-b from-[#FBF5E6] to-white border-[#DEC38C] shadow-sm'
                              : 'bg-[#F4F1EA]/60 border-[#E6DFD3] opacity-75'
                          }`}
                        >
                          <span className={`text-[9px] sm:text-[10px] font-semibold text-center leading-tight ${isPresent ? 'text-[#7A5311]' : 'text-[#5D556A]'}`}>
                            {lang === 'hi' ? cell.name_hi : cell.name}
                          </span>
                          <div className={`text-2xl sm:text-4xl font-cormorant font-bold my-0.5 sm:my-1 tabular-nums ${isPresent ? 'text-[#1E162B]' : 'text-[#8C849A]'}`}>
                            {cell.num}
                          </div>
                          <div className="text-[9px] sm:text-[10px]">
                            {isPresent ? (
                              <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#522B8A] text-white font-bold text-[8px] sm:text-[10px]">
                                {lang === 'hi' ? `${cell.count} बार` : `${cell.count}x ${cell.count > 1 ? 'Rep' : 'Active'}`}
                              </span>
                            ) : (
                              <span className="text-[#8C849A] italic text-[8px] sm:text-[10px]">
                                {lang === 'hi' ? 'खाली' : 'Missing'}
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
                          className={`rounded-xl sm:rounded-2xl p-1.5 sm:p-3 flex flex-col items-center justify-between transition-all border ${
                            isPresent
                              ? 'bg-gradient-to-b from-[#FBF5E6] to-white border-[#DEC38C] shadow-sm'
                              : 'bg-[#F4F1EA]/60 border-[#E6DFD3] opacity-75'
                          }`}
                        >
                          <span className={`text-[9px] sm:text-[10px] font-semibold text-center leading-tight ${isPresent ? 'text-[#7A5311]' : 'text-[#5D556A]'}`}>
                            {lang === 'hi' ? cell.name_hi : cell.name}
                          </span>
                          <div className={`text-2xl sm:text-4xl font-cormorant font-bold my-0.5 sm:my-1 tabular-nums ${isPresent ? 'text-[#1E162B]' : 'text-[#8C849A]'}`}>
                            {cell.num}
                          </div>
                          <div className="text-[9px] sm:text-[10px]">
                            {isPresent ? (
                              <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#522B8A] text-white font-bold text-[8px] sm:text-[10px]">
                                {lang === 'hi' ? `${cell.count} बार` : `${cell.count}x ${cell.count > 1 ? 'Rep' : 'Active'}`}
                              </span>
                            ) : (
                              <span className="text-[#8C849A] italic text-[8px] sm:text-[10px]">
                                {lang === 'hi' ? 'खाली' : 'Missing'}
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
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7A5311] block">
                      {lang === 'hi' ? 'चक्र में शामिल अंक' : 'Input Breakdown'}
                    </span>
                    <p className="text-xs text-[#1E162B] leading-relaxed font-mono font-medium">
                      {lang === 'hi'
                        ? `जन्मतिथि: ${dob} | मूलांक: ${result.mulank} | भाग्यांक: ${result.bhagyank} | कुआ: ${result.kuaProfile.kua}`
                        : `DOB: ${dob} | Mulank: ${result.mulank} | Bhagyank: ${result.bhagyank} | Kua: ${result.kuaProfile.kua}`}
                    </p>
                    <p className="text-[11px] text-[#5D556A]">
                      {lang === 'hi'
                        ? `कुंडली में आए अंक: [${result.allExtractedDigits.join(', ')}] (0 को छोड़कर)`
                        : `Extracted Digits: [${result.allExtractedDigits.join(', ')}] (Excluding 0)`}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F4F0FA] border border-[#DFD5F0] space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#522B8A] block">
                      {lang === 'hi' ? 'लो-शू दिशात्मक संतुलन' : 'Directional Energy Balance'}
                    </span>
                    <p className="text-xs text-[#4A4356] leading-relaxed">
                      {lang === 'hi'
                        ? `आपका कुआ अंक ${result.kuaProfile.kua} है, जो ${result.kuaProfile.group_hi} (${result.kuaProfile.element_hi}) से संबंधित है। आपके लिए सर्वश्रेष्ठ दिशा ${result.kuaProfile.direction_hi} है।`
                        : `Your Kua Number ${result.kuaProfile.kua} belongs to ${result.kuaProfile.group} (${result.kuaProfile.element}). Your cardinal primary direction is ${result.kuaProfile.direction}.`}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FBF5E6] border border-[#DEC38C] flex items-center justify-between gap-3">
                    <div>
                      <span className="text-xs font-bold text-[#1E162B] block">
                        {lang === 'hi' ? 'अनुपस्थित अंकों के उपाय देखें' : 'View Missing Number Remedies'}
                      </span>
                      <span className="text-[11px] text-[#7A5311]">
                        {result.missingNumbers.length} {lang === 'hi' ? 'अंकों के उपाय उपलब्ध' : 'remedies available'}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab('remedies')}
                      className="h-9 px-4 bg-[#522B8A] hover:bg-[#412070] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                    >
                      <span>{lang === 'hi' ? 'उपाय खोलें' : 'View Remedies'}</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* ========================================================================= */}
            {/* DIRECTLY BELOW LO-SHU GRID: YOUR 3×3 VEDIC GRID (SANATAN NAVAGRAHA KUNDALI) */}
            {/* ========================================================================= */}
            <div className="p-4 sm:p-8 rounded-3xl bg-white border-2 border-[#DEC38C] shadow-lg relative overflow-hidden">
              {/* Header */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#EFECE6] relative z-10">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FBF5E6] border border-[#DEC38C] text-[#7A5311] text-xs font-semibold mb-2">
                    <Star size={13} className="text-[#B48228]" />
                    <span>{lang === 'hi' ? 'सनातन वैदिक अंक चक्र' : 'Sanatan Navagraha Vedic Grid'}</span>
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1E162B] flex items-center gap-2">
                    <Star className="text-[#B48228]" size={24} />
                    <span>{lang === 'hi' ? 'आपका 3×3 वैदिक चक्र (Vedic Grid)' : 'Your 3×3 Vedic Grid (Sanatan Ank Kundali)'}</span>
                  </h3>
                  <p className="text-xs text-[#4A4356] mt-1 max-w-2xl leading-relaxed">
                    {lang === 'hi'
                      ? 'लो-शू के ठीक नीचे वैदिक अंक चक्र: पहली लाइन (गुरु 3 - सूर्य 1 - मंगल 9), दूसरी लाइन (शुक्र 6 - केतु 7 - बुध 5), तीसरी लाइन (चन्द्र 2 - शनि 8 - राहु 4)। इसमें आपकी जन्मतिथि के सभी अंक, मूलांक और भाग्यांक शामिल हैं।'
                      : 'Positioned directly below the Lo Shu Grid: Row 1 (Guru 3 - Surya 1 - Mangal 9), Row 2 (Shukra 6 - Ketu 7 - Budh 5), Row 3 (Chandra 2 - Shani 8 - Rahu 4). Populated with full DOB digits + Driver + Conductor.'}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1.5 rounded-full bg-[#FBF5E6] text-[#7A5311] border border-[#DEC38C] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 size={13} className="text-emerald-700" />
                    {lang === 'hi' ? `सक्रिय ग्रह: ${result.presentNumbers.length}/9` : `Active Planets: ${result.presentNumbers.length}/9`}
                  </span>
                </div>
              </div>

              {/* Vedic Grid Graphic & Planetary Distribution */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center mb-8 relative z-10">
                <div className="lg:col-span-7 flex justify-center">
                  <div className="w-full max-w-md aspect-square bg-[#F4F0FA] p-2 sm:p-4 rounded-2xl sm:rounded-3xl border-2 border-[#DEC38C] shadow-inner grid grid-cols-3 gap-1.5 sm:gap-3">
                    
                    {/* Row 0: 3 (Guru), 1 (Surya), 9 (Mangal) */}
                    {result.vedicGrid.row0.map((cell) => {
                      const isPresent = cell.count > 0;
                      return (
                        <div
                          key={cell.num}
                          className={`rounded-xl sm:rounded-2xl p-1.5 sm:p-3 flex flex-col items-center justify-between transition-all border ${
                            isPresent
                              ? 'bg-gradient-to-b from-[#FBF5E6] to-white border-[#DEC38C] shadow-sm'
                              : 'bg-white/70 border-[#E6DFD3] opacity-70'
                          }`}
                        >
                          <span className={`text-[9px] sm:text-[10px] font-bold text-center leading-tight ${isPresent ? 'text-[#7A5311]' : 'text-[#5D556A]'}`}>
                            {lang === 'hi' ? cell.planet_hi : cell.planet}
                          </span>
                          <div className={`text-2xl sm:text-4xl font-cormorant font-bold my-0.5 sm:my-1 tabular-nums ${isPresent ? 'text-[#1E162B]' : 'text-[#8C849A]'}`}>
                            {cell.num}
                          </div>
                          <div className="text-[9px] sm:text-[10px]">
                            {isPresent ? (
                              <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#522B8A] text-white font-bold text-[8px] sm:text-[9px]">
                                {lang === 'hi' ? `${cell.count} बार` : `${cell.count}x ${cell.count > 1 ? 'Rep' : 'Active'}`}
                              </span>
                            ) : (
                              <span className="text-[#8C849A] italic text-[8px] sm:text-[9px]">
                                {lang === 'hi' ? 'खाली' : 'Empty'}
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
                          className={`rounded-xl sm:rounded-2xl p-1.5 sm:p-3 flex flex-col items-center justify-between transition-all border ${
                            isPresent
                              ? 'bg-gradient-to-b from-[#FBF5E6] to-white border-[#DEC38C] shadow-sm'
                              : 'bg-white/70 border-[#E6DFD3] opacity-70'
                          }`}
                        >
                          <span className={`text-[9px] sm:text-[10px] font-bold text-center leading-tight ${isPresent ? 'text-[#7A5311]' : 'text-[#5D556A]'}`}>
                            {lang === 'hi' ? cell.planet_hi : cell.planet}
                          </span>
                          <div className={`text-2xl sm:text-4xl font-cormorant font-bold my-0.5 sm:my-1 tabular-nums ${isPresent ? 'text-[#1E162B]' : 'text-[#8C849A]'}`}>
                            {cell.num}
                          </div>
                          <div className="text-[9px] sm:text-[10px]">
                            {isPresent ? (
                              <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#522B8A] text-white font-bold text-[8px] sm:text-[9px]">
                                {lang === 'hi' ? `${cell.count} बार` : `${cell.count}x ${cell.count > 1 ? 'Rep' : 'Active'}`}
                              </span>
                            ) : (
                              <span className="text-[#8C849A] italic text-[8px] sm:text-[9px]">
                                {lang === 'hi' ? 'खाली' : 'Empty'}
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
                          className={`rounded-xl sm:rounded-2xl p-1.5 sm:p-3 flex flex-col items-center justify-between transition-all border ${
                            isPresent
                              ? 'bg-gradient-to-b from-[#FBF5E6] to-white border-[#DEC38C] shadow-sm'
                              : 'bg-white/70 border-[#E6DFD3] opacity-70'
                          }`}
                        >
                          <span className={`text-[9px] sm:text-[10px] font-bold text-center leading-tight ${isPresent ? 'text-[#7A5311]' : 'text-[#5D556A]'}`}>
                            {lang === 'hi' ? cell.planet_hi : cell.planet}
                          </span>
                          <div className={`text-2xl sm:text-4xl font-cormorant font-bold my-0.5 sm:my-1 tabular-nums ${isPresent ? 'text-[#1E162B]' : 'text-[#8C849A]'}`}>
                            {cell.num}
                          </div>
                          <div className="text-[9px] sm:text-[10px]">
                            {isPresent ? (
                              <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#522B8A] text-white font-bold text-[8px] sm:text-[9px]">
                                {lang === 'hi' ? `${cell.count} बार` : `${cell.count}x ${cell.count > 1 ? 'Rep' : 'Active'}`}
                              </span>
                            ) : (
                              <span className="text-[#8C849A] italic text-[8px] sm:text-[9px]">
                                {lang === 'hi' ? 'खाली' : 'Empty'}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}

                  </div>
                </div>

                {/* Vedic Calculation Proof & Formula Breakdown */}
                <div className="lg:col-span-5 space-y-3.5 text-xs">
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7A5311] flex items-center gap-1.5">
                      <Sparkles size={13} className="text-[#B48228]" />
                      <span>{lang === 'hi' ? 'अंक गणना की पूरी जानकारी (Vedic Proof)' : 'Vedic Calculation Proof'}</span>
                    </span>
                    <div className="space-y-1.5 text-[#4A4356] font-mono text-[11px]">
                      <div className="flex items-center justify-between border-b border-[#EFECE6] pb-1">
                        <span className="text-[#7A5311]">{lang === 'hi' ? 'जन्मतिथि के अंक (DOB Digits):' : 'DOB Digits:'}</span>
                        <span className="text-[#1E162B] font-bold">{dob}</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-[#EFECE6] pb-1">
                        <span className="text-[#7A5311]">{lang === 'hi' ? 'मूलांक (Driver):' : 'Driver (Mulank):'}</span>
                        <span className="text-[#1E162B] font-bold">{result.mulank} ({lang === 'hi' ? result.mulankProfile.ruler_hi : result.mulankProfile.ruler})</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-[#EFECE6] pb-1">
                        <span className="text-[#7A5311]">{lang === 'hi' ? 'भाग्यांक (Conductor):' : 'Conductor (Bhagyank):'}</span>
                        <span className="text-[#1E162B] font-bold">{result.bhagyank} ({lang === 'hi' ? result.bhagyankProfile.ruler_hi : result.bhagyankProfile.ruler})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#7A5311]">{lang === 'hi' ? 'वैदिक चक्र में शामिल अंक:' : 'Extracted Vedic Digits:'}</span>
                        <span className="text-[#522B8A] font-bold">[{result.allExtractedDigits.join(', ')}]</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F4F0FA] border border-[#DFD5F0] space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#522B8A] block">
                      {lang === 'hi' ? 'वैदिक नवग्रह संरेखण रहस्य' : 'Sanatan Navagraha Mystery'}
                    </span>
                    <p className="text-[#4A4356] leading-relaxed text-[11px]">
                      {lang === 'hi'
                        ? `वैदिक अंक शास्त्र में 3-1-9 ज्ञान व धर्म, 6-7-5 सुख-समृद्धि व व्यापार तथा 2-8-4 कर्म व सुरक्षा को दिखाते हैं। आपकी कुंडली में ${result.presentNumbers.length} ग्रह मजबूत हैं।`
                        : `In Sanatan Vedic Numerology, 3-1-9 governs Wisdom & Dharma, 6-7-5 governs Prosperity & Trade, and 2-8-4 governs Karma & Security. ${result.presentNumbers.length} planetary energies are active.`}
                    </p>
                  </div>
                </div>
              </div>

              {/* 8 VEDIC YOGAS / PLANES OF DESTINY */}
              <div className="mt-8 pt-6 border-t border-[#EFECE6] space-y-4 relative z-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#1E162B] flex items-center gap-2">
                      <Layers className="text-[#B48228]" size={18} />
                      <span>{lang === 'hi' ? '8 वैदिक राजयोग और त्रिकोण' : '8 Vedic Planes of Destiny (Yogas)'}</span>
                    </h4>
                    <p className="text-[11px] text-[#5D556A]">
                      {lang === 'hi'
                        ? '3 वैदिक त्रिकोण (धर्म, अर्थ, कर्म) और 5 खास राजयोगों की पूरी जांच'
                        : 'Comprehensive analysis of 3 Vedic Trines (Dharma, Artha, Karma) and 5 Sacred Planetary Yogas'}
                    </p>
                  </div>
                  <span className="text-xs text-[#522B8A] font-semibold">
                    {lang === 'hi'
                      ? `${result.vedicAnalysis.vedicPlanes.filter((p) => p.status === 'Complete').length} पूर्ण / ${result.vedicAnalysis.vedicPlanes.filter((p) => p.status === 'Semi-Active').length} मध्यम`
                      : `${result.vedicAnalysis.vedicPlanes.filter((p) => p.status === 'Complete').length} Complete / ${result.vedicAnalysis.vedicPlanes.filter((p) => p.status === 'Semi-Active').length} Semi-Active`}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {result.vedicAnalysis.vedicPlanes.map((plane) => {
                    const isComplete = plane.status === 'Complete';
                    const isSemi = plane.status === 'Semi-Active';
                    return (
                      <div
                        key={plane.id}
                        className={`p-4 rounded-2xl border transition-all ${
                          isComplete
                            ? 'bg-emerald-50/70 border-emerald-300 shadow-sm'
                            : isSemi
                            ? 'bg-[#FBF5E6] border-[#DEC38C]'
                            : 'bg-[#FAF8F5] border-[#E6DFD3] opacity-85'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2 mb-1.5">
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold text-[#7A5311]">
                                [{plane.numbers.join('-')}]
                              </span>
                              <h5 className="text-xs font-cinzel font-bold text-[#1E162B]">
                                {lang === 'hi' ? plane.name_hi : plane.name}
                              </h5>
                            </div>
                            <span className="text-[10px] text-[#522B8A] block font-medium">
                              {lang === 'hi' ? plane.planets_hi : plane.planets}
                            </span>
                          </div>
                          <span
                            className={`text-[9px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider shrink-0 ${
                              isComplete
                                ? 'bg-emerald-700 text-white'
                                : isSemi
                                ? 'bg-[#F5E8C8] text-[#7A5311] border border-[#DEC38C]'
                                : 'bg-[#EFECE6] text-[#5D556A]'
                            }`}
                          >
                            {lang === 'hi' ? plane.status_hi : plane.status} ({plane.percentage}%)
                          </span>
                        </div>
                        <p className="text-[11px] text-[#4A4356] leading-relaxed">
                          {lang === 'hi' ? plane.prediction_hi : plane.prediction}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* VEDIC PREDICTIONS */}
              <div className="mt-8 pt-6 border-t border-[#EFECE6] space-y-4 relative z-10">
                <div className="flex items-center gap-2">
                  <Flame className="text-[#B48228]" size={20} />
                  <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#1E162B]">
                    {lang === 'hi' ? 'वैदिक चक्र विस्तृत जीवन भविष्यफल (Vedic Life Predictions)' : 'Vedic Grid Life Predictions'}
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-1.5">
                    <span className="text-xs font-bold text-[#7A5311] flex items-center gap-1.5">
                      <span>💼</span>
                      <span>{lang === 'hi' ? 'आजीविका, करियर एवं कर्म पथ' : 'Career & Calling'}</span>
                    </span>
                    <p className="text-xs text-[#4A4356] leading-relaxed">
                      {lang === 'hi' ? result.vedicAnalysis.careerGuidance_hi : result.vedicAnalysis.careerGuidance}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-1.5">
                    <span className="text-xs font-bold text-[#7A5311] flex items-center gap-1.5">
                      <span>💰</span>
                      <span>{lang === 'hi' ? 'धन, ऐश्वर्य एवं आर्थिक समृद्धि' : 'Wealth & Material Prosperity'}</span>
                    </span>
                    <p className="text-xs text-[#4A4356] leading-relaxed">
                      {lang === 'hi' ? result.vedicAnalysis.wealthGuidance_hi : result.vedicAnalysis.wealthGuidance}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-1.5">
                    <span className="text-xs font-bold text-[#7A5311] flex items-center gap-1.5">
                      <span>🤝</span>
                      <span>{lang === 'hi' ? 'संबंध, परिवार एवं दांपत्य जीवन' : 'Relationships & Family Bliss'}</span>
                    </span>
                    <p className="text-xs text-[#4A4356] leading-relaxed">
                      {lang === 'hi' ? result.vedicAnalysis.relationshipGuidance_hi : result.vedicAnalysis.relationshipGuidance}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-1.5">
                    <span className="text-xs font-bold text-[#7A5311] flex items-center gap-1.5">
                      <span>🧘</span>
                      <span>{lang === 'hi' ? 'आध्यात्मिक उत्थान एवं जीवन लक्ष्य' : 'Spiritual Evolution & Higher Calling'}</span>
                    </span>
                    <p className="text-xs text-[#4A4356] leading-relaxed">
                      {lang === 'hi' ? result.vedicAnalysis.spiritualGuidance_hi : result.vedicAnalysis.spiritualGuidance}
                    </p>
                  </div>
                </div>

                {/* Dominant Planets */}
                {result.vedicAnalysis.dominantPlanets.length > 0 && (
                  <div className="p-4 rounded-2xl bg-[#F4F0FA] border border-[#DFD5F0] mt-3 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#522B8A] block">
                      {lang === 'hi' ? 'कुंडली के सर्वाधिक प्रभावी ग्रह' : 'Most Dominant Planets'}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {result.vedicAnalysis.dominantPlanets.map((dp) => (
                        <span
                          key={dp.num}
                          className="px-3 py-1.5 rounded-xl bg-white border border-[#DEC38C] text-xs text-[#1E162B] flex items-center gap-1.5 shadow-2xs"
                        >
                          <span className="text-[#7A5311] font-bold">अंक {dp.num}</span>
                          <span>({lang === 'hi' ? dp.planet_hi : dp.planet} - {dp.count}x)</span>
                          <span className="text-[10px] text-[#5D556A]">— {lang === 'hi' ? dp.effect_hi : dp.effect}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: VEDIC GRID (3-1-9 / 6-7-5 / 2-8-4) */}
        {/* ========================================================================= */}
        {activeTab === 'vedic' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-4 sm:p-8 rounded-3xl bg-white border border-[#E6DFD3] shadow-lg">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#EFECE6]">
                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1E162B] flex items-center gap-2">
                    <Star className="text-[#B48228]" size={22} />
                    <span>{lang === 'hi' ? 'शास्त्रीय वैदिक अंक कुण्डली (Vedic Ank Kundali 3×3)' : 'Classical Vedic Ank Kundali (3×3 Grid)'}</span>
                  </h3>
                  <p className="text-xs text-[#4A4356] mt-1">
                    {lang === 'hi'
                      ? 'वैदिक अंक शास्त्र के अनुसार नवग्रहों का चक्र: 3 (बृहस्पति), 1 (सूर्य), 9 (मंगल) / 6 (शुक्र), 7 (केतु), 5 (बुध) / 2 (चन्द्र), 8 (शनि), 4 (राहु)।'
                      : 'Classical Vedic planetary matrix: Row 1 (Guru-Surya-Mangal), Row 2 (Shukra-Ketu-Budh), Row 3 (Chandra-Shani-Rahu).'}
                  </p>
                </div>
                <div className="text-xs px-3 py-1.5 rounded-full bg-[#FBF5E6] border border-[#DEC38C] text-[#7A5311] font-semibold">
                  {lang === 'hi' ? 'सनातन नवग्रह संरेखण' : 'Sanatan Navagraha Grid'}
                </div>
              </div>

              {/* Vedic Grid 3x3 Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                <div className="lg:col-span-7 flex justify-center">
                  <div className="w-full max-w-md aspect-square bg-[#F4F0FA] p-2 sm:p-4 rounded-2xl sm:rounded-3xl border-2 border-[#DEC38C] shadow-inner grid grid-cols-3 gap-1.5 sm:gap-3">
                    
                    {/* Row 0 */}
                    {result.vedicGrid.row0.map((cell) => {
                      const isPresent = cell.count > 0;
                      return (
                        <div
                          key={cell.num}
                          className={`rounded-xl sm:rounded-2xl p-1.5 sm:p-3 flex flex-col items-center justify-between transition-all border ${
                            isPresent
                              ? 'bg-gradient-to-b from-[#FBF5E6] to-white border-[#DEC38C] shadow-sm'
                              : 'bg-white/70 border-[#E6DFD3] opacity-70'
                          }`}
                        >
                          <span className={`text-[9px] sm:text-[10px] font-semibold text-center leading-tight ${isPresent ? 'text-[#7A5311]' : 'text-[#5D556A]'}`}>
                            {lang === 'hi' ? cell.planet_hi : cell.planet}
                          </span>
                          <div className={`text-2xl sm:text-4xl font-cormorant font-bold my-0.5 sm:my-1 tabular-nums ${isPresent ? 'text-[#1E162B]' : 'text-[#8C849A]'}`}>
                            {cell.num}
                          </div>
                          <div className="text-[9px] sm:text-[10px]">
                            {isPresent ? (
                              <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#522B8A] text-white font-bold text-[8px] sm:text-[10px]">
                                {cell.count}x
                              </span>
                            ) : (
                              <span className="text-[#8C849A] italic text-[8px] sm:text-[10px]">
                                {lang === 'hi' ? 'रिक्त' : 'Empty'}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}

                    {/* Row 1 */}
                    {result.vedicGrid.row1.map((cell) => {
                      const isPresent = cell.count > 0;
                      return (
                        <div
                          key={cell.num}
                          className={`rounded-xl sm:rounded-2xl p-1.5 sm:p-3 flex flex-col items-center justify-between transition-all border ${
                            isPresent
                              ? 'bg-gradient-to-b from-[#FBF5E6] to-white border-[#DEC38C] shadow-sm'
                              : 'bg-white/70 border-[#E6DFD3] opacity-70'
                          }`}
                        >
                          <span className={`text-[9px] sm:text-[10px] font-semibold text-center leading-tight ${isPresent ? 'text-[#7A5311]' : 'text-[#5D556A]'}`}>
                            {lang === 'hi' ? cell.planet_hi : cell.planet}
                          </span>
                          <div className={`text-2xl sm:text-4xl font-cormorant font-bold my-0.5 sm:my-1 tabular-nums ${isPresent ? 'text-[#1E162B]' : 'text-[#8C849A]'}`}>
                            {cell.num}
                          </div>
                          <div className="text-[9px] sm:text-[10px]">
                            {isPresent ? (
                              <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#522B8A] text-white font-bold text-[8px] sm:text-[10px]">
                                {cell.count}x
                              </span>
                            ) : (
                              <span className="text-[#8C849A] italic text-[8px] sm:text-[10px]">
                                {lang === 'hi' ? 'रिक्त' : 'Empty'}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}

                    {/* Row 2 */}
                    {result.vedicGrid.row2.map((cell) => {
                      const isPresent = cell.count > 0;
                      return (
                        <div
                          key={cell.num}
                          className={`rounded-xl sm:rounded-2xl p-1.5 sm:p-3 flex flex-col items-center justify-between transition-all border ${
                            isPresent
                              ? 'bg-gradient-to-b from-[#FBF5E6] to-white border-[#DEC38C] shadow-sm'
                              : 'bg-white/70 border-[#E6DFD3] opacity-70'
                          }`}
                        >
                          <span className={`text-[9px] sm:text-[10px] font-semibold text-center leading-tight ${isPresent ? 'text-[#7A5311]' : 'text-[#5D556A]'}`}>
                            {lang === 'hi' ? cell.planet_hi : cell.planet}
                          </span>
                          <div className={`text-2xl sm:text-4xl font-cormorant font-bold my-0.5 sm:my-1 tabular-nums ${isPresent ? 'text-[#1E162B]' : 'text-[#8C849A]'}`}>
                            {cell.num}
                          </div>
                          <div className="text-[9px] sm:text-[10px]">
                            {isPresent ? (
                              <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#522B8A] text-white font-bold text-[8px] sm:text-[10px]">
                                {cell.count}x
                              </span>
                            ) : (
                              <span className="text-[#8C849A] italic text-[8px] sm:text-[10px]">
                                {lang === 'hi' ? 'रिक्त' : 'Empty'}
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
                  <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#7A5311] block">
                      {lang === 'hi' ? 'वैदिक अंक कुण्डली व लो-शू में मुख्य अंतर' : 'Vedic Grid vs. Lo Shu Architecture'}
                    </span>
                    <p className="text-[#4A4356] leading-relaxed">
                      {lang === 'hi'
                        ? 'लो-शू चक्र दिशात्मक फेंगशुई तत्वों (4-9-2) पर आधारित होता है, जबकि वैदिक अंक कुण्डली सनातन नवग्रहों (3-1-9 / 6-7-5 / 2-8-4) के आध्यात्मिक व कार्मिक प्रभाव को दर्शाती है।'
                        : 'While Lo Shu maps directional elemental Bagua sectors (4-9-2), the Vedic Grid mirrors the classical 9 Navagraha chambers (3-1-9 / 6-7-5 / 2-8-4) revealing spiritual karma and planetary deities.'}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F4F0FA] border border-[#DFD5F0] space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#522B8A] block">
                      {lang === 'hi' ? 'कुंडली के मुख्य ग्रह स्वामी' : 'Key Planetary Activations'}
                    </span>
                    <ul className="space-y-1.5 text-[#4A4356]">
                      <li className="flex items-center justify-between">
                        <span>{lang === 'hi' ? 'मूलांक स्वामी:' : 'Driver Lord:'}</span>
                        <span className="font-semibold text-[#1E162B]">{lang === 'hi' ? result.mulankProfile.ruler_hi : result.mulankProfile.ruler} ({result.mulank})</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>{lang === 'hi' ? 'भाग्यांक स्वामी:' : 'Destiny Lord:'}</span>
                        <span className="font-semibold text-[#1E162B]">{lang === 'hi' ? result.bhagyankProfile.ruler_hi : result.bhagyankProfile.ruler} ({result.bhagyank})</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>{lang === 'hi' ? 'कुआ तत्व:' : 'Kua Element:'}</span>
                        <span className="font-semibold text-[#7A5311]">{lang === 'hi' ? result.kuaProfile.element_hi : result.kuaProfile.element} ({result.kuaProfile.kua})</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FBF5E6] border border-[#DEC38C] space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5311] block">
                      {lang === 'hi' ? 'वैदिक बीज मंत्र:' : 'Vedic Planetary Mantra:'}
                    </span>
                    <p className="font-mono text-xs text-[#1E162B] font-semibold">
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
            <div className="p-4 sm:p-8 rounded-3xl bg-white border border-[#E6DFD3] shadow-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#EFECE6]">
                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1E162B] flex items-center gap-2">
                    <Layers className="text-[#B48228]" size={22} />
                    <span>{lang === 'hi' ? 'लो-शू के 8 राजयोग एवं भाग्य तल' : '8 Planes of Destiny (Classical Yogas)'}</span>
                  </h3>
                  <p className="text-xs text-[#4A4356] mt-1">
                    {lang === 'hi'
                      ? '3 क्षैतिज तल (मानसिक, भावनात्मक, व्यावहारिक), 3 ऊर्ध्वाधर तल (विचार, इच्छाशक्ति, कर्म) और 2 कर्ण राजयोग (स्वर्ण व रजत राजयोग)।'
                      : '3 Horizontal Planes (Mental, Emotional, Practical), 3 Vertical Planes (Thought, Will, Action), and 2 Diagonal Raja Yogas (Golden & Silver).'}
                  </p>
                </div>
                <div className="text-xs text-[#522B8A] font-semibold">
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
                          ? 'bg-emerald-50/70 border-emerald-300 shadow-sm'
                          : isSemi
                          ? 'bg-[#FBF5E6] border-[#DEC38C]'
                          : 'bg-[#FAF8F5] border-[#E6DFD3] opacity-85'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#7A5311]">
                              [{plane.numbers.join('-')}]
                            </span>
                            <h4 className="text-sm font-cinzel font-bold text-[#1E162B]">
                              {lang === 'hi' ? plane.name_hi : plane.name}
                            </h4>
                          </div>
                          <span className="text-[11px] text-[#5D556A] block">
                            {plane.englishTitle}
                          </span>
                        </div>

                        <span
                          className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider shrink-0 ${
                            isComplete
                              ? 'bg-emerald-700 text-white shadow-xs'
                              : isSemi
                              ? 'bg-[#F5E8C8] text-[#7A5311] border border-[#DEC38C]'
                              : 'bg-[#EFECE6] text-[#5D556A]'
                          }`}
                        >
                          {lang === 'hi'
                            ? `${plane.percentage}% (${plane.presentNumbers.length}/3 अंक मौजूद)`
                            : `${plane.status} (${plane.percentage}%)`}
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full h-1.5 bg-[#E6DFD3] rounded-full overflow-hidden my-3">
                        <div
                          className={`h-full transition-all duration-500 ${
                            isComplete
                              ? 'bg-emerald-600'
                              : isSemi
                              ? 'bg-[#B48228]'
                              : 'bg-[#C4BBD4]'
                          }`}
                          style={{ width: `${plane.percentage}%` }}
                        />
                      </div>

                      <p className="text-xs text-[#4A4356] leading-relaxed mb-3">
                        {lang === 'hi' ? plane.meaning_hi : plane.meaning}
                      </p>

                      <div className="flex items-center justify-between text-[11px] pt-2 border-t border-[#EFECE6]">
                        <span className="text-emerald-700 font-semibold">
                          {lang === 'hi' ? 'मौजूद:' : 'Present:'}{' '}
                          {plane.presentNumbers.length > 0 ? plane.presentNumbers.join(', ') : (lang === 'hi' ? 'कोई नहीं' : 'None')}
                        </span>
                        <span className="text-rose-700 font-semibold">
                          {lang === 'hi' ? 'कम/खाली:' : 'Missing:'}{' '}
                          {plane.missingNumbers.length > 0 ? plane.missingNumbers.join(', ') : (lang === 'hi' ? 'कोई नहीं (100% पूरा)' : 'None (100% Active)')}
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
            <div className="p-4 sm:p-8 rounded-3xl bg-white border border-[#E6DFD3] shadow-lg">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#EFECE6]">
                <div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1E162B] flex items-center gap-2">
                    <Gem className="text-[#B48228]" size={22} />
                    <span>{lang === 'hi' ? 'अनुपस्थित अंकों के प्रभावी वैदिक एवं वास्तु उपाय' : 'Targeted Remedies for Missing Numbers'}</span>
                  </h3>
                  <p className="text-xs text-[#4A4356] mt-1">
                    {lang === 'hi'
                      ? 'जो अंक आपकी जन्मतिथि में नहीं हैं, उनके नकारात्मक प्रभावों को वैदिक यंत्र, रुद्राक्ष, रत्न, रंग व वास्तु उपायों से संतुलित करें।'
                      : 'Balance missing planetary frequencies in your chart using authentic Yantras, Rudraksha, crystals, colors, and Vastu directional remedies.'}
                  </p>
                </div>
                <div className="text-xs px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-800 font-semibold">
                  {result.missingNumbers.length} {lang === 'hi' ? 'अनुपस्थित अंक' : 'Missing Numbers in Chart'}
                </div>
              </div>

              {/* Interactive Number Selector Chips */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-xs text-[#7A5311] font-semibold mr-2">
                  {lang === 'hi' ? 'अंक चुनें:' : 'Select Missing Number:'}
                </span>
                {result.missingNumbers.map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setSelectedMissingNum(num)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 border cursor-pointer ${
                      selectedMissingNum === num
                        ? 'bg-[#522B8A] text-white border-[#522B8A] shadow-sm'
                        : 'bg-[#FAF8F5] text-[#4A4356] border-[#E6DFD3] hover:bg-[#F4F0FA] hover:text-[#1E162B]'
                    }`}
                  >
                    <AlertCircle size={12} className={selectedMissingNum === num ? 'text-amber-300' : 'text-rose-600'} />
                    <span>{lang === 'hi' ? `अंक ${num}` : `Number ${num}`}</span>
                  </button>
                ))}
              </div>

              {/* Detailed Remedy Card */}
              {selectedMissingNum && (
                <div className="p-4 sm:p-8 rounded-3xl bg-[#FAF8F5] border border-[#DEC38C] shadow-sm space-y-6">
                  {(() => {
                    const remedy = result.missingRemedies.find((r) => r.number === selectedMissingNum);
                    if (!remedy) return null;
                    return (
                      <>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#E6DFD3]">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[#7A5311] block">
                              {lang === 'hi' ? `अनुपस्थित अंक ${remedy.number} का संपूर्ण निदान` : `Missing Number ${remedy.number} Diagnosis`}
                            </span>
                            <h4 className="font-cinzel text-2xl font-bold text-[#1E162B] mt-1">
                              {lang === 'hi' ? remedy.planet_hi : remedy.planet} ({lang === 'hi' ? remedy.element_hi : remedy.element})
                            </h4>
                            <span className="text-xs text-[#5D556A]">
                              {lang === 'hi' ? `प्रभावित दिशा: ${remedy.direction_hi}` : `Afflicted Direction: ${remedy.direction}`}
                            </span>
                          </div>
                          <div className="font-cormorant text-6xl text-[#522B8A] font-semibold">
                            #{remedy.number}
                          </div>
                        </div>

                        {/* Effects */}
                        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-rose-800 flex items-center gap-1.5">
                            <AlertCircle size={14} />
                            <span>{lang === 'hi' ? 'अंक न होने पर जीवन पर प्रभाव (Challenges):' : 'Challenges & Life Symptoms:'}</span>
                          </span>
                          <p className="text-xs text-rose-950 leading-relaxed">
                            {lang === 'hi' ? remedy.effects_hi : remedy.effects}
                          </p>
                        </div>

                        {/* Remedies Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                          <div className="p-4 rounded-2xl bg-white border border-[#E6DFD3] space-y-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5311] block">
                              {lang === 'hi' ? '1. यंत्र व मूर्ति' : '1. Sacred Yantra / Idol'}
                            </span>
                            <p className="text-[#1E162B] font-medium">
                              {lang === 'hi' ? (remedy.remedies_hi?.yantra || remedy.remedies.yantra) : remedy.remedies.yantra}
                            </p>
                          </div>

                          <div className="p-4 rounded-2xl bg-white border border-[#E6DFD3] space-y-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5311] block">
                              {lang === 'hi' ? '2. रुद्राक्ष' : '2. Rudraksha Bead'}
                            </span>
                            <p className="text-[#1E162B] font-medium">
                              {lang === 'hi' ? (remedy.remedies_hi?.rudraksha || remedy.remedies.rudraksha) : remedy.remedies.rudraksha}
                            </p>
                          </div>

                          <div className="p-4 rounded-2xl bg-white border border-[#E6DFD3] space-y-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5311] block">
                              {lang === 'hi' ? '3. रत्न व क्रिस्टल' : '3. Crystal / Gemstone'}
                            </span>
                            <p className="text-[#1E162B] font-medium">
                              {lang === 'hi' ? (remedy.remedies_hi?.gemstone || remedy.remedies.gemstone) : remedy.remedies.gemstone}
                            </p>
                          </div>

                          <div className="p-4 rounded-2xl bg-white border border-[#E6DFD3] space-y-1.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5311] block">
                              {lang === 'hi' ? '4. शुभ रंग (Color Therapy)' : '4. Auspicious Colors'}
                            </span>
                            <p className="text-[#1E162B] font-medium">
                              {lang === 'hi' ? (remedy.remedies_hi?.colorTherapy || remedy.remedies.colorTherapy) : remedy.remedies.colorTherapy}
                            </p>
                          </div>

                          <div className="p-4 rounded-2xl bg-white border border-[#E6DFD3] space-y-1.5 md:col-span-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5311] block">
                              {lang === 'hi' ? '5. आसान वास्तु उपाय' : '5. Vastu Energy Alignment'}
                            </span>
                            <p className="text-[#1E162B] font-medium leading-relaxed">
                              {lang === 'hi' ? (remedy.remedies_hi?.vastuAction || remedy.remedies.vastuAction) : remedy.remedies.vastuAction}
                            </p>
                          </div>
                        </div>

                        {/* Sacred Mantra */}
                        <div className="p-4 rounded-2xl bg-[#FBF5E6] border border-[#DEC38C] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5311] block">
                              {lang === 'hi' ? 'लाभकारी मंत्र:' : 'Sacred Harmonic Mantra:'}
                            </span>
                            <span className="font-mono text-sm text-[#1E162B] font-semibold">
                              {lang === 'hi' ? (remedy.remedies_hi?.mantra || remedy.remedies.mantra) : remedy.remedies.mantra}
                            </span>
                          </div>
                          <span className="text-[11px] text-[#522B8A] font-semibold whitespace-nowrap">
                            {lang === 'hi' ? 'रोजाना 108 बार जपें' : 'Chant 108 times daily'}
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
            <div className="p-4 sm:p-8 rounded-3xl bg-white border border-[#E6DFD3] shadow-lg space-y-6">
              <div className="pb-4 border-b border-[#EFECE6]">
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1E162B] flex items-center gap-2">
                  <BookOpen className="text-[#B48228]" size={22} />
                  <span>{lang === 'hi' ? 'कुआ अंक (Kua Number) निकालने का आसान तरीका' : 'Authentic Kua Calculation Methodology & Benchmark Guide'}</span>
                </h3>
                <p className="text-xs text-[#4A4356] mt-1">
                  {lang === 'hi'
                    ? '20वीं व 21वीं सदी के नियम, सौर नववर्ष (Li Chun) नियम और अंक 5 का नियम।'
                    : '20th & 21st Century Formulas, Li Chun Spring Solar Rule, and the Rule of 5 conversion.'}
                </p>
              </div>

              {/* 1967 Benchmark Table */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#DEC38C] space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A5311] block">
                  {lang === 'hi' ? 'साल 1967 का आसान उदाहरण:' : 'Authentic Benchmark: Year 1967'}
                </span>
                <p className="text-xs text-[#4A4356] leading-relaxed">
                  {lang === 'hi'
                    ? 'साल 1967 के आखिरी दो अंकों का जोड़: 6 + 7 = 13 → 1 + 3 = 4.'
                    : 'Sum of last two digits of 1967: 6 + 7 = 13 → 1 + 3 = 4.'}
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#F4F0FA] text-[#522B8A]">
                      <tr>
                        <th className="p-3 rounded-l-xl">{lang === 'hi' ? 'जन्म का साल' : 'Birth Year'}</th>
                        <th className="p-3">{lang === 'hi' ? 'आखिरी 2 अंकों का जोड़' : 'Last 2 Digits Sum'}</th>
                        <th className="p-3">{lang === 'hi' ? 'पुरुष (Male): 10 - Sum' : 'Male (10 - Sum)'}</th>
                        <th className="p-3 rounded-r-xl">{lang === 'hi' ? 'महिला (Female): Sum + 5' : 'Female (Sum + 5)'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EFECE6] text-[#4A4356]">
                      <tr>
                        <td className="p-3 font-semibold text-[#1E162B]">1967 ({lang === 'hi' ? 'सामान्य' : 'Standard'})</td>
                        <td className="p-3">6 + 7 = 13 → 4</td>
                        <td className="p-3 font-bold text-[#7A5311]">6 (Qian Metal / NW)</td>
                        <td className="p-3 font-bold text-emerald-700">9 (Li Fire / South)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold text-[#522B8A]">15 Jan 1967 (Li Chun {lang === 'hi' ? 'से पहले' : 'Before'})</td>
                        <td className="p-3">{lang === 'hi' ? 'सौर वर्ष 1966 → 6+6=12 → 3' : 'Solar Year 1966 → 6+6=12 → 3'}</td>
                        <td className="p-3 font-bold text-[#7A5311]">10 - 3 = 7 (Dui Metal / West)</td>
                        <td className="p-3 font-bold text-emerald-700">3 + 5 = 8 (Gen Earth / NE)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 3 Core Rules Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs">
                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7A5311] block">
                    {lang === 'hi' ? '1. बीसवीं सदी (1900-1999)' : '1. 20th Century (1900-1999)'}
                  </span>
                  <p className="text-[#4A4356] leading-relaxed">
                    <strong>{lang === 'hi' ? 'पुरुष (Male):' : 'Male:'}</strong> {lang === 'hi' ? '10 - एकल जोड़' : '10 - Single Sum'}<br />
                    <strong>{lang === 'hi' ? 'महिला (Female):' : 'Female:'}</strong> {lang === 'hi' ? 'एकल जोड़ + 5 (9 से ज्यादा हो तो फिर जोड़ें)' : 'Single Sum + 5 (reduce if > 9)'}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7A5311] block">
                    {lang === 'hi' ? '2. इक्कीसवीं सदी (2000+)' : '2. 21st Century (2000+)'}
                  </span>
                  <p className="text-[#4A4356] leading-relaxed">
                    <strong>{lang === 'hi' ? 'पुरुष (Male):' : 'Male:'}</strong> {lang === 'hi' ? '9 - एकल जोड़ (0 आने पर 9 लें)' : '9 - Single Sum (9 if 0)'}<br />
                    <strong>{lang === 'hi' ? 'महिला (Female):' : 'Female:'}</strong> {lang === 'hi' ? 'एकल जोड़ + 6' : 'Single Sum + 6'}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7A5311] block">
                    {lang === 'hi' ? '3. अंक 5 का खास नियम (Rule of 5)' : '3. Special Rule of 5'}
                  </span>
                  <p className="text-[#4A4356] leading-relaxed">
                    {lang === 'hi' ? (
                      <>
                        8 दिशाओं में अंक 5 का कोई स्थान नहीं होता।<br />
                        <strong>पुरुष के लिए:</strong> 5 बदलकर <strong>2 (कुन / दक्षिण-पश्चिम)</strong> बनता है।<br />
                        <strong>महिला के लिए:</strong> 5 बदलकर <strong>8 (गेन / उत्तर-पूर्व)</strong> बनता है।
                      </>
                    ) : (
                      <>
                        Digit 5 has no Bagua sector.<br />
                        <strong>For Male:</strong> 5 converts to <strong>2 (Kun / SW)</strong>.<br />
                        <strong>For Female:</strong> 5 converts to <strong>8 (Gen / NE)</strong>.
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Solar Year Rule Explanation */}
              <div className="p-5 rounded-2xl bg-[#FBF5E6] border border-[#DEC38C] text-xs space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A5311] block">
                  {lang === 'hi' ? 'सौर नववर्ष (Li Chun) का नियम:' : 'Li Chun Solar Spring Calendar Rule:'}
                </span>
                <p className="text-[#4A4356] leading-relaxed">
                  {lang === 'hi'
                    ? 'अगर किसी का जन्म 1 जनवरी से 3 फरवरी के बीच हुआ है, तो सौर वर्ष 4 फरवरी से शुरू होने के कारण कुआ अंक पिछले साल (Year - 1) से निकाला जाता है। जैसे: 15 जनवरी 1967 को जन्मे व्यक्ति के लिए साल 1966 मानकर पुरुष का कुआ अंक 7 और महिला का कुआ अंक 8 निकाला जाता है।'
                    : 'If born between January 1 and February 3, the Chinese Solar Year begins on Li Chun (February 4). The calculation automatically uses the preceding solar year (Year - 1). For example, Jan 15, 1967 is evaluated using solar year 1966.'}
                </p>
              </div>

            </div>
          </div>
        )}

        {/* Auspicious Guidance & Planetary Synergy Card */}
        <div className="mt-10 p-4 sm:p-8 rounded-3xl bg-white border-2 border-[#DEC38C] shadow-lg space-y-6">
          <div className="border-b border-[#EFECE6] pb-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#7A5311] block">
                {lang === 'hi' ? 'ग्रह सामंजस्य एवं शुभ मार्गदर्शन' : 'Planetary Synergy & Auspicious Guidance'}
              </span>
              <p className="font-cormorant text-xl sm:text-2xl text-[#1E162B] mt-1 leading-relaxed">
                {lang === 'hi' ? result.synergy_hi : result.synergy}
              </p>
            </div>
            <div className="text-xs font-semibold text-[#522B8A] px-3.5 py-1.5 rounded-full bg-[#F4F0FA] border border-[#DFD5F0] shrink-0">
              {lang === 'hi'
                ? `${result.kuaProfile.group_hi} (${result.kuaProfile.element_hi})`
                : `${result.kuaProfile.group} (${result.kuaProfile.element})`}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-1">
              <span className="text-[10px] uppercase font-bold text-[#7A5311] block">
                {lang === 'hi' ? 'शुभ रंग' : 'Lucky Colors'}
              </span>
              <span className="text-[#1E162B] font-medium">
                {lang === 'hi' ? result.mulankProfile.luckyColors_hi : result.mulankProfile.luckyColors}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-1">
              <span className="text-[10px] uppercase font-bold text-[#7A5311] block">
                {lang === 'hi' ? 'शुभ दिन' : 'Lucky Days'}
              </span>
              <span className="text-[#1E162B] font-medium">
                {lang === 'hi' ? result.mulankProfile.luckyDays_hi : result.mulankProfile.luckyDays}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-1">
              <span className="text-[10px] uppercase font-bold text-[#7A5311] block">
                {lang === 'hi' ? 'शुभ रत्न / रुद्राक्ष' : 'Lucky Gem & Rudraksha'}
              </span>
              <span className="text-[#1E162B] font-medium">
                {lang === 'hi' ? `${result.mulankProfile.gemstone_hi} / ${result.mulankProfile.rudraksha_hi}` : `${result.mulankProfile.gemstone} / ${result.mulankProfile.rudraksha}`}
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-1">
              <span className="text-[10px] uppercase font-bold text-[#7A5311] block">
                {lang === 'hi' ? 'शुभ कुआ दिशाएं' : 'Favorable Directions'}
              </span>
              <span className="text-[#1E162B] font-medium">
                {lang === 'hi'
                  ? `${result.kuaProfile.direction_hi} (${result.kuaProfile.favorableDirections[0]?.name_hi || ''})`
                  : `${result.kuaProfile.direction} (${result.kuaProfile.favorableDirections[0]?.name.split(' ')[0]})`}
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#EFECE6]">
            <p className="text-xs text-[#4A4356]">
              {lang === 'hi'
                ? 'क्या आप अपनी पूरी जन्मकुंडली, नाम की स्पेलिंग सुधार या वास्तु के लिए सलाह लेना चाहते हैं?'
                : 'Looking for 1-on-1 personalized Kundli alignment, name-spelling correction, or Vastu direction remedies?'}
            </p>
            <button
              type="button"
              onClick={() =>
                onBookWithNumbers(
                  `DOB: ${dob}, Gender: ${gender}, Name: ${name} (Mulank: ${result.mulank}, Bhagyank: ${result.bhagyank}, Kua: ${result.kuaProfile.kua})`
                )
              }
              className="w-full sm:w-auto min-h-[44px] px-5 sm:px-6 py-2.5 bg-[#522B8A] hover:bg-[#412070] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md sm:whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <span>{lang === 'hi' ? 'डॉ. पूजा जी से संपूर्ण परामर्श प्राप्त करें' : 'Book Complete Reading with Dr. Pooja Ji'}</span>
              <ArrowRight size={14} className="shrink-0" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

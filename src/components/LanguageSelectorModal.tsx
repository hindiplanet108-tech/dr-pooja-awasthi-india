import React from 'react';
import { NATIONAL_LANGUAGES, INTERNATIONAL_LANGUAGES, ALL_LANGUAGES, LanguageOption } from '../data/translations';
import { Globe, X, Check, Sparkles } from 'lucide-react';

interface LanguageSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: string;
  onSelectLang: (code: string) => void;
}

export const LanguageSelectorModal: React.FC<LanguageSelectorModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onSelectLang
}) => {
  if (!isOpen) return null;

  const renderLangBtn = (lang: LanguageOption) => {
    const isSelected = currentLang === lang.code;
    return (
      <button
        key={lang.code}
        type="button"
        onClick={() => {
          onSelectLang(lang.code);
          onClose();
        }}
        className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between group cursor-pointer ${
          isSelected
            ? 'bg-[#522B8A] text-white border-[#522B8A] shadow-sm font-semibold'
            : 'bg-[#FAF8F5] hover:bg-[#F4F0FA] text-[#1E162B] border-[#E6DFD3] hover:border-[#DEC38C]'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className="text-xl" role="img" aria-label={lang.name}>
            {lang.flag}
          </span>
          <div>
            <div className="text-xs sm:text-sm font-bold tracking-wide">
              {lang.nativeName}
            </div>
            <div className={`text-[11px] ${isSelected ? 'text-white/80' : 'text-[#5D556A]'}`}>
              {lang.name}
            </div>
          </div>
        </div>

        {isSelected && (
          <div className="w-5 h-5 rounded-full bg-white text-[#522B8A] flex items-center justify-center shrink-0">
            <Check size={12} strokeWidth={3} />
          </div>
        )}
      </button>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E162B]/65 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl bg-white text-[#1E162B] rounded-2xl border border-[#E6DFD3] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#FAF8F5] border-b border-[#EFECE6] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#FBF5E6] border border-[#DEC38C] flex items-center justify-center text-[#7A5311]">
              <Globe size={18} />
            </div>
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#1E162B]">
                {currentLang === 'hi' ? 'अपनी भाषा चुनें / Choose Language' : 'Choose Language / भाषा चुनें'}
              </h3>
              <p className="text-xs text-[#7A5311]">
                {currentLang === 'hi'
                  ? '11 भारतीय भाषाएं और 11 अंतर्राष्ट्रीय भाषाएं'
                  : '11 National Languages (Indian) & 11 International Languages'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#EFECE6] text-[#5D556A] transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Language Grid Container */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Section 1: 11 National (Indian) Languages */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#EFECE6] pb-2">
              <span className="text-base">🇮🇳</span>
              <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#522B8A] uppercase tracking-wider">
                {currentLang === 'hi' ? '11 भारतीय भाषाएं (National Languages)' : '11 National Languages (भारतीय भाषाएँ)'}
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {NATIONAL_LANGUAGES.map(renderLangBtn)}
            </div>
          </div>

          {/* Section 2: 11 International Languages */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#EFECE6] pb-2">
              <span className="text-base">🌐</span>
              <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#522B8A] uppercase tracking-wider">
                {currentLang === 'hi' ? '11 विश्व भाषाएं (International Languages)' : '11 International Languages (वैश्विक भाषाएँ)'}
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {INTERNATIONAL_LANGUAGES.map(renderLangBtn)}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#FAF8F5] border-t border-[#EFECE6] flex items-center justify-between text-xs text-[#5D556A]">
          <span>
            {currentLang === 'hi' ? 'चुनी गई भाषा:' : 'Active:'}{' '}
            {ALL_LANGUAGES.find(l => l.code === currentLang)?.nativeName} ({currentLang.toUpperCase()})
          </span>
          <button
            type="button"
            onClick={onClose}
            className="h-9 px-5 bg-[#522B8A] hover:bg-[#412070] text-white rounded-lg transition-colors font-semibold cursor-pointer"
          >
            {currentLang === 'hi' ? 'ठीक है' : 'Done'}
          </button>
        </div>
      </div>
    </div>
  );
};

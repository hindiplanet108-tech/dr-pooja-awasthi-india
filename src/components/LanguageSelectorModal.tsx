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
        className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between group ${
          isSelected
            ? 'bg-[#D6B574] text-[#24152F] border-[#D6B574] shadow-md font-semibold'
            : 'bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-[#D6B574]/40'
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
            <div className={`text-[11px] ${isSelected ? 'text-[#24152F]/80' : 'text-[#EAE2F4]/60'}`}>
              {lang.name}
            </div>
          </div>
        </div>

        {isSelected && (
          <div className="w-5 h-5 rounded-full bg-[#24152F] text-[#D6B574] flex items-center justify-center shrink-0">
            <Check size={12} strokeWidth={3} />
          </div>
        )}
      </button>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-4xl bg-[#24152F] text-white rounded-2xl border border-[#D6B574]/50 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-[#1b0d24] border-b border-[#D6B574]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#D6B574]/20 border border-[#D6B574]/40 flex items-center justify-center text-[#D6B574]">
              <Globe size={18} />
            </div>
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
                Choose Language / भाषा चुनें
              </h3>
              <p className="text-xs text-[#D6B574]">
                11 National Languages (Indian) & 11 International Languages
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#EAE2F4] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Language Grid Container */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Section 1: 11 National (Indian) Languages */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#D6B574]/20 pb-2">
              <span className="text-base">🇮🇳</span>
              <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#D6B574] uppercase tracking-wider">
                11 National Languages (भारतीय भाषाएँ)
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {NATIONAL_LANGUAGES.map(renderLangBtn)}
            </div>
          </div>

          {/* Section 2: 11 International Languages */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-[#D6B574]/20 pb-2">
              <span className="text-base">🌐</span>
              <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#D6B574] uppercase tracking-wider">
                11 International Languages (वैश्विक भाषाएँ)
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {INTERNATIONAL_LANGUAGES.map(renderLangBtn)}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#1b0d24] border-t border-white/10 flex items-center justify-between text-xs text-[#EAE2F4]/70">
          <span>Active: {ALL_LANGUAGES.find(l => l.code === currentLang)?.nativeName} ({currentLang.toUpperCase()})</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors font-medium"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

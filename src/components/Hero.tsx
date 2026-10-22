import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Award, ShieldCheck, ArrowRight, Camera, Upload, CheckCircle2, Maximize2, X } from 'lucide-react';
import { getStoredMedia, saveStoredMedia } from '../utils/photoStorage';
import { getTranslation } from '../data/translations';
import { CelestialStarfield } from './CelestialStarfield';
import poojaAuthenticPhoto from '../assets/images/pooja_awasthi_portrait.jpeg';

interface HeroProps {
  lang: string;
  onBookClick: () => void;
  onExploreClick: () => void;
  onOpenTariff?: () => void;
  onCalculateVedic?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  onBookClick,
  onExploreClick,
  onOpenTariff,
  onCalculateVedic
}) => {
  const [photoUrl, setPhotoUrl] = useState<string>(poojaAuthenticPhoto);
  const [showLightbox, setShowLightbox] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = getTranslation(lang);

  useEffect(() => {
    // Only use custom uploaded photo if user explicitly uploaded one during this session or as data URL
    getStoredMedia('founder_custom_upload').then((stored) => {
      if (stored && stored.startsWith('data:image/')) {
        setPhotoUrl(stored);
      }
    });
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const reader = new FileReader();
    reader.onload = async (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        await saveStoredMedia('founder_custom_upload', dataUrl);
        setPhotoUrl(dataUrl);
        setIsUploading(false);
        setUploadSuccess(lang === 'hi' ? 'चित्र सफलतापूर्वक सुरक्षित हुआ' : 'Portrait updated successfully');
        setTimeout(() => setUploadSuccess(null), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleImageError = () => {
    // Fallback cascade to ensure original photo is always visible
    if (photoUrl === poojaAuthenticPhoto) {
      setPhotoUrl('/28.jpeg');
    } else if (photoUrl === '/28.jpeg') {
      setPhotoUrl('/assets/aistudio/28_91acc32c.jpeg');
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-38 md:pb-24 overflow-hidden bg-[#24152F] text-white">
      {/* Background celestial sacred geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-screen">
        <img
          src="/src/assets/images/hero_celestial_sacred_geometry_1792557572251.jpg"
          alt="Celestial Sacred Geometry Mandala"
          className="w-full h-full object-cover object-center animate-[spin_180s_linear_infinite]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#24152F]/85 via-transparent to-[#24152F]" />
      </div>

      {/* Floating Animated Celestial Starfield Canvas */}
      <CelestialStarfield />

      {/* Colorful, radiant ambient glow orbs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#6941A5]/30 to-[#D6B574]/20 rounded-full blur-3xl pointer-events-none animate-pulse duration-1000" />
      <div className="absolute -top-10 right-10 w-80 h-80 bg-[#D6B574]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Value proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Clean unboxed kicker */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs md:text-sm font-medium text-[#D6B574] tracking-widest uppercase">
              <span>{t.taglineSub}</span>
              <span aria-hidden="true">·</span>
              <span>26 National Honors</span>
              <span aria-hidden="true">·</span>
              <span>1-on-1 Sanctuary</span>
            </div>

            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight text-balance">
              {t.heroHeadline1} <br />
              <span className="italic font-normal bg-gradient-to-r from-[#D6B574] via-[#eedbb3] to-[#D6B574] bg-clip-text text-transparent">
                {t.heroHeadline2}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#EAE2F4]/85 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              {t.heroDesc}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onBookClick}
                type="button"
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#D6B574] via-[#e2c78a] to-[#D6B574] hover:brightness-105 text-[#24152F] font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-lg hover:shadow-[#D6B574]/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <span>{t.bookBtn}</span>
                <ArrowRight size={15} />
              </button>

              {onCalculateVedic && (
                <button
                  onClick={onCalculateVedic}
                  type="button"
                  className="w-full sm:w-auto px-5 py-3.5 bg-[#6941A5]/30 hover:bg-[#6941A5]/50 text-[#D6B574] hover:text-white border border-[#D6B574]/40 rounded-md font-semibold text-xs tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles size={14} className="text-[#D6B574]" />
                  <span>{lang === 'hi' ? 'मूलांक-भाग्यांक कैलकुलेट करें' : 'Calculate Vedic Numbers'}</span>
                </button>
              )}

              {onOpenTariff && (
                <button
                  onClick={onOpenTariff}
                  type="button"
                  className="w-full sm:w-auto px-5 py-3.5 bg-white/5 hover:bg-white/10 text-[#EAE2F4] hover:text-white border border-white/20 rounded-md font-medium text-xs tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>★ {lang === 'hi' ? 'शुल्क विवरण (₹5,100)' : 'Tariff (₹5,100)'}</span>
                </button>
              )}
            </div>

            {/* Micro assurance metadata */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#EAE2F4]/75">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-[#D6B574]" />
                <span>{t.confidentialBadge}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award size={15} className="text-[#D6B574]" />
                <span>{t.governorBadge}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles size={15} className="text-[#D6B574]" />
                <span>{t.feeBadge}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic Portrait Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group/frame max-w-sm sm:max-w-md w-full">
              {/* Outer decorative gold hairline frame with radiant glow */}
              <div className="absolute -inset-3 rounded-2xl border border-[#D6B574]/40 pointer-events-none transition-transform duration-500 group-hover/frame:scale-[1.02] shadow-[0_0_30px_rgba(214,181,116,0.2)]" />
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-[#6941A5]/50 via-transparent to-[#D6B574]/40 blur-md pointer-events-none" />

              {/* Main portrait container */}
              <div className="relative rounded-xl overflow-hidden bg-[#24152F] border border-[#D6B574]/60 shadow-2xl aspect-[3/4]">
                <img
                  src={photoUrl}
                  alt="Dr. Pooja Awasthi - Spiritual Guide & Vedic Numerologist"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/frame:scale-105 cursor-pointer"
                  onClick={() => setShowLightbox(true)}
                  onError={handleImageError}
                />

                {/* Scrim overlay with caption */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#24152F] via-[#24152F]/85 to-transparent p-4 pt-10 text-center pointer-events-none">
                  <p className="font-cinzel text-base font-semibold text-white tracking-wide">
                    {t.brandTitle}
                  </p>
                  <p className="text-xs text-[#D6B574] font-medium tracking-wider uppercase mt-0.5">
                    {t.taglineSub}
                  </p>
                </div>

                {/* Top action buttons: View Full Size & Upload */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20">
                  <button
                    type="button"
                    onClick={() => setShowLightbox(true)}
                    title="View Full Size Photo"
                    className="p-2 rounded-full bg-[#24152F]/80 text-[#D6B574] hover:bg-[#24152F] hover:text-white border border-[#D6B574]/40 backdrop-blur-sm transition-colors shadow-md"
                  >
                    <Maximize2 size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    title="Upload / Update Photo"
                    className="p-2 rounded-full bg-[#24152F]/80 text-[#D6B574] hover:bg-[#24152F] hover:text-white border border-[#D6B574]/40 backdrop-blur-sm transition-colors shadow-md"
                  >
                    <Camera size={14} />
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>
              </div>

              {/* Upload success notification */}
              {uploadSuccess && (
                <div className="mt-2 flex items-center justify-center gap-1.5 text-xs text-[#D6B574] font-medium">
                  <CheckCircle2 size={14} />
                  <span>{uploadSuccess}</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Verified credentials 4-point strip */}
      <div className="mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-white/5 border border-[#D6B574]/25 backdrop-blur-md shadow-lg">
          <div className="text-center p-3 border-r border-[#D6B574]/15 last:border-0">
            <div className="font-cinzel text-xl md:text-2xl font-bold text-[#D6B574] tabular-nums">26</div>
            <div className="text-xs text-[#EAE2F4]/80 mt-1">
              {t.awardsNav}
            </div>
          </div>
          <div className="text-center p-3 border-r border-[#D6B574]/15 last:border-0">
            <div className="font-cinzel text-xl md:text-2xl font-bold text-[#D6B574]">Vedic</div>
            <div className="text-xs text-[#EAE2F4]/80 mt-1">
              Numerology & Chakras
            </div>
          </div>
          <div className="text-center p-3 border-r border-[#D6B574]/15 last:border-0">
            <div className="font-cinzel text-xl md:text-2xl font-bold text-[#D6B574] tabular-nums">₹5,100</div>
            <div className="text-xs text-[#EAE2F4]/80 mt-1">
              {t.feeBadge}
            </div>
          </div>
          <div className="text-center p-3">
            <div className="font-cinzel text-xl md:text-2xl font-bold text-[#D6B574]">100%</div>
          </div>
        </div>
      </div>

      {/* Full-resolution Lightbox for authentic portrait */}
      {showLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setShowLightbox(false)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] bg-[#24152F] rounded-2xl p-3 border border-[#D6B574]/60 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowLightbox(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#24152F]/90 text-white hover:text-[#D6B574] border border-[#D6B574]/40 transition-colors shadow-lg"
            >
              <X size={20} />
            </button>
            <div className="w-full overflow-hidden rounded-xl">
              <img
                src={photoUrl}
                alt="Dr. Pooja Awasthi - Original Portrait (28.jpeg)"
                className="w-full max-h-[75vh] object-contain rounded-xl mx-auto"
                onError={handleImageError}
              />
            </div>
            <div className="w-full pt-3 px-2 text-center">
              <h3 className="font-cinzel text-lg font-bold text-[#D6B574]">
                Dr. Pooja Awasthi
              </h3>
              <p className="text-xs text-[#EAE2F4]/80 mt-0.5">
                Spiritual Guide & Vedic Numerologist • Authentic Consecrated Portrait (28.jpeg)
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

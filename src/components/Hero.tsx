import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Award, Trophy, ShieldCheck, ArrowRight, Camera, CheckCircle2, Maximize2, X } from 'lucide-react';
import { getStoredMedia, saveStoredMedia } from '../utils/photoStorage';
import { getTranslation } from '../data/translations';
import { CelestialStarfield } from './CelestialStarfield';
import poojaAuthenticPhoto from '../assets/images/pooja_awasthi_portrait.jpeg';
import { useSiteContent } from '../utils/siteContentContext';

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
  onOpenTariff,
  onCalculateVedic
}) => {
  const { siteContent } = useSiteContent();
  const heroContent = siteContent?.hero;
  const [photoUrl, setPhotoUrl] = useState<string>(poojaAuthenticPhoto);
  const [showLightbox, setShowLightbox] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = getTranslation(lang);

  useEffect(() => {
    getStoredMedia('founder_custom_upload').then((stored) => {
      if (stored && stored.startsWith('data:image/')) {
        setPhotoUrl(stored);
      }
    });
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        await saveStoredMedia('founder_custom_upload', dataUrl);
        setPhotoUrl(dataUrl);
        setUploadSuccess(lang === 'hi' ? 'चित्र सफलतापूर्वक सुरक्षित हुआ' : 'Portrait updated successfully');
        setTimeout(() => setUploadSuccess(null), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleImageError = () => {
    if (photoUrl === poojaAuthenticPhoto) {
      setPhotoUrl('/28.jpeg');
    } else if (photoUrl === '/28.jpeg') {
      setPhotoUrl('/assets/aistudio/28_91acc32c.jpeg');
    }
  };

  const displayPhoto = heroContent?.portrait_photo || photoUrl;
  const displayHeadline1 = lang === 'hi' ? (heroContent?.headline_hi || t.heroHeadline1) : (heroContent?.headline_en || t.heroHeadline1);
  const displayHeadline2 = lang === 'hi' ? (heroContent?.motto_hi || t.heroHeadline2) : (heroContent?.motto_en || t.heroHeadline2);
  const displayDesc = lang === 'hi' ? (heroContent?.desc_hi || t.heroDesc) : (heroContent?.desc_en || t.heroDesc);
  const displayFee = heroContent?.fee_badge || '₹5,100';
  const displayCta = lang === 'hi' ? (heroContent?.cta_primary_hi || t.bookBtn) : (heroContent?.cta_primary_en || t.bookBtn);
  const displayBadge = lang === 'hi' ? (heroContent?.badge_text_hi || '40+ राष्ट्रीय सम्मान व पावन दीर्घा') : (heroContent?.badge_text_en || '40+ National Honors & Archive');

  return (
    <section className="relative pt-28 pb-10 md:pt-32 md:pb-12 overflow-hidden bg-gradient-to-br from-[#FAF8F5] via-white to-[#F3EFFA] text-[#1E162B] border-b border-[#E5DFD5]">
      {/* Subtle Sacred Geometry Watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.045]">
        <img
          src="/src/assets/images/hero_celestial_sacred_geometry_1792557572251.jpg"
          alt=""
          className="w-full h-full object-cover object-center animate-[spin_200s_linear_infinite]"
        />
      </div>

      {/* Subtle Ambient Gold & Amethyst Silk Orbs */}
      <CelestialStarfield />
      <div className="absolute top-12 left-1/4 w-[420px] h-[420px] bg-[#E8DCF8]/55 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-8 right-12 w-80 h-80 bg-[#F4E6C8]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Headline & Value proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Editorial Kicker */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs font-bold text-[#7A5311] tracking-widest uppercase">
              <span className="text-[#522B8A]">{t.taglineSub}</span>
              <span aria-hidden="true" className="text-[#B48228]">·</span>
              <a href="#honors" className="hover:underline inline-flex items-center gap-1 text-[#7A5311]">
                <Trophy size={13} className="text-[#B48228]" />
                <span>{displayBadge}</span>
              </a>
              <span aria-hidden="true" className="text-[#B48228]">·</span>
              <span className="text-[#5D556A]">{lang === 'hi' ? 'गोपनीय व्यक्तिगत परामर्श' : '1-on-1 Sanctuary'}</span>
            </div>

            <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-medium text-[#1E162B] leading-[1.12] tracking-tight text-balance">
              {displayHeadline1} <br />
              <span className="italic font-semibold text-[#522B8A]">
                {displayHeadline2}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#4A4356] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {displayDesc}
            </p>

            {/* Standardized Balanced Button Layout */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onBookClick}
                type="button"
                className="w-full sm:w-auto h-12 px-7 bg-[#522B8A] hover:bg-[#412070] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{displayCta}</span>
                <ArrowRight size={15} />
              </button>

              {onOpenTariff && (
                <button
                  onClick={onOpenTariff}
                  type="button"
                  className="w-full sm:w-auto h-12 px-5 bg-[#FBF5E6] hover:bg-[#F5E8C8] text-[#7A5311] border border-[#DEC38C] rounded-xl font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Sparkles size={14} className="text-[#B48228]" />
                  <span>{lang === 'hi' ? '11 विशिष्ट सेवाएं व फीस (16)' : '11 Specialized Services & Fees'}</span>
                </button>
              )}

              <a
                href="#honors"
                className="w-full sm:w-auto h-12 px-5 bg-white hover:bg-[#F4F0FA] text-[#522B8A] border border-[#DFD5F0] rounded-xl font-semibold text-xs tracking-wide transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <Trophy size={14} className="text-[#B48228]" />
                <span>{lang === 'hi' ? '40+ सम्मान दीर्घा' : '40+ Honors Gallery'}</span>
              </a>

              {onCalculateVedic && (
                <button
                  onClick={onCalculateVedic}
                  type="button"
                  className="w-full sm:w-auto h-12 px-5 bg-white hover:bg-[#FAF8F5] text-[#1E162B] border border-[#E5DFD5] rounded-xl font-semibold text-xs tracking-wide transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                >
                  <Sparkles size={14} className="text-[#522B8A]" />
                  <span>{lang === 'hi' ? 'मूलांक-भाग्यांक निकालें' : 'Numerology Calculator'}</span>
                </button>
              )}
            </div>

            {/* Clean Trust Metadata Strip */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-[#4A4356] font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-emerald-700" />
                <span>{t.confidentialBadge}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award size={15} className="text-[#B48228]" />
                <span>{t.governorBadge}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles size={15} className="text-[#522B8A]" />
                <span className="font-rupee font-bold text-[#1E162B]">{t.feeBadge}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Museum Gallery Matted Portrait Frame */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group/frame max-w-sm sm:max-w-md w-full bg-white p-3 rounded-2xl border border-[#E6DFD3] shadow-2xl">
              {/* Subtle Gold Corner Accent Border */}
              <div className="relative rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#DEC38C]/50 aspect-[3/4]">
                <img
                  src={displayPhoto}
                  alt="Dr. Pooja Awasthi - Spiritual Guide & Vedic Numerologist"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/frame:scale-[1.03] cursor-pointer"
                  onClick={() => setShowLightbox(true)}
                  onError={handleImageError}
                />

                {/* Clean bottom contrast scrim strictly for caption readability */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 via-slate-900/45 to-transparent p-4 pt-12 text-center pointer-events-none">
                  <p className="font-cinzel text-base font-bold text-white tracking-wide drop-shadow-xs">
                    {t.brandTitle}
                  </p>
                  <p className="text-[11px] text-[#F3D899] font-semibold tracking-wider uppercase mt-0.5">
                    {t.taglineSub}
                  </p>
                </div>

                {/* Top action buttons on crisp light surface */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 z-20">
                  <button
                    type="button"
                    onClick={() => setShowLightbox(true)}
                    title="View Full Size Photo"
                    className="p-2 rounded-full bg-white/90 hover:bg-white text-[#1E162B] hover:text-[#522B8A] border border-[#E5DFD5] shadow-md transition-colors cursor-pointer"
                  >
                    <Maximize2 size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    title="Upload / Update Photo"
                    className="p-2 rounded-full bg-white/90 hover:bg-white text-[#1E162B] hover:text-[#522B8A] border border-[#E5DFD5] shadow-md transition-colors cursor-pointer"
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
                <div className="mt-2.5 flex items-center justify-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 size={14} />
                  <span>{uploadSuccess}</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Clean Elevated 4-Point Credentials Strip */}
      <div className="mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#EFECE6] p-4 rounded-2xl bg-white border border-[#E6DFD3] shadow-sm">
          <div className="text-center p-3">
            <div className="font-cinzel text-2xl md:text-3xl font-bold text-[#522B8A] tabular-nums">40+</div>
            <div className="text-xs text-[#4A4356] font-medium mt-1">
              {t.awardsNav}
            </div>
          </div>
          <div className="text-center p-3">
            <div className="font-cinzel text-2xl md:text-3xl font-bold text-[#7A5311]">
              {lang === 'hi' ? 'वैदिक' : 'Vedic'}
            </div>
            <div className="text-xs text-[#4A4356] font-medium mt-1">
              {lang === 'hi' ? 'अंकशास्त्र एवं चक्र हीलिंग' : 'Numerology & Chakras'}
            </div>
          </div>
          <div className="text-center p-3">
            <div className="font-rupee text-2xl md:text-3xl font-black text-[#1E162B] tabular-nums">{displayFee}</div>
            <div className="text-xs text-[#4A4356] font-medium mt-1">
              {t.feeBadge}
            </div>
          </div>
          <div className="text-center p-3">
            <div className="font-cinzel text-2xl md:text-3xl font-bold text-emerald-700">100%</div>
            <div className="text-xs text-[#4A4356] font-medium mt-1">
              {lang === 'hi' ? 'गोपनीय व सुरक्षित' : 'Confidential Sanctuary'}
            </div>
          </div>
        </div>
      </div>

      {/* Clean Gallery Lightbox */}
      {showLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setShowLightbox(false)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] bg-white rounded-2xl p-4 border border-[#E6DFD3] shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowLightbox(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white hover:bg-[#FAF8F5] text-[#1E162B] border border-[#E6DFD3] transition-colors shadow-md cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="w-full overflow-hidden rounded-xl bg-[#FAF8F5]">
              <img
                src={photoUrl}
                alt="Dr. Pooja Awasthi - Original Portrait"
                className="w-full max-h-[75vh] object-contain rounded-xl mx-auto"
                onError={handleImageError}
              />
            </div>
            <div className="w-full pt-3 px-2 text-center">
              <h3 className="font-cinzel text-lg font-bold text-[#1E162B]">
                Dr. Pooja Awasthi
              </h3>
              <p className="text-xs text-[#5D556A] mt-0.5">
                {lang === 'hi'
                  ? 'आध्यात्मिक मार्गदर्शिका एवं वैदिक अंकशास्त्री • प्रामाणिक स्वरूप'
                  : 'Spiritual Guide & Vedic Numerologist • Authentic Portrait'}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

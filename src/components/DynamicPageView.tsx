import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Calendar,
  Share2,
  CheckCircle,
  MessageSquare,
  Eye,
  Trophy,
  ExternalLink,
  Play,
  X,
  Compass
} from 'lucide-react';
import {
  CMSPage,
  ContentBlock,
  HeroBlock,
  RichTextBlock,
  SingleImageBlock,
  GalleryBlock,
  VideoBlock,
  VedicQuoteBlock,
  FeatureGridBlock,
  CtaButtonBlock,
  BookingCardBlock,
  DividerBlock,
  getPageBySlug
} from '../utils/cmsApi';

interface DynamicPageViewProps {
  slug: string;
  onBackToHome: () => void;
  onSelectServiceForBooking: (serviceName: string) => void;
  lang?: string;
}

export const DynamicPageView: React.FC<DynamicPageViewProps> = ({
  slug,
  onBackToHome,
  onSelectServiceForBooking,
  lang = 'hi',
}) => {
  const [page, setPage] = useState<CMSPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeLightboxImg, setActiveLightboxImg] = useState<{ url: string; caption?: string } | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    const fetchPage = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getPageBySlug(slug);
        setPage(data);

        // Dynamic SEO Tags
        if (data.seo?.metaTitle || data.title) {
          document.title = `${data.seo?.metaTitle || data.title} | डॉ. पूजा अवस्थी`;
        }

        // Meta description update
        const descMeta = document.querySelector('meta[name="description"]');
        if (descMeta && (data.seo?.metaDescription || data.excerpt)) {
          descMeta.setAttribute('content', data.seo?.metaDescription || data.excerpt || '');
        }
      } catch (err: any) {
        setError(err.message || 'पेज नहीं मिला अथवा अभी अप्रकाशित है।');
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: page?.title || 'डॉ. पूजा अवस्थी',
        text: page?.excerpt || page?.subtitle || '',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 rounded-full border-4 border-[#D6B574] border-t-transparent animate-spin mb-4" />
        <h2 className="font-cinzel text-lg font-bold text-[#24152F]">
          {lang === 'hi' ? 'वैदिक सामग्री लोड हो रही है...' : 'Loading Spiritual Content...'}
        </h2>
        <p className="text-xs text-[#29242E]/60 mt-1">
          {lang === 'hi' ? 'कृपया प्रतीक्षा करें...' : 'Please wait a moment...'}
        </p>
      </div>
    );
  }

  if (error || !page) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center max-w-lg mx-auto">
        <div className="w-16 h-16 rounded-3xl bg-[#24152F]/10 border border-[#D6B574]/40 flex items-center justify-center text-[#D6B574] mb-4">
          <Compass size={32} />
        </div>
        <h2 className="font-cinzel text-2xl font-bold text-[#24152F]">
          {lang === 'hi' ? 'पेज उपलब्ध नहीं है (Page Not Found)' : 'Page Not Found'}
        </h2>
        <p className="text-xs text-[#29242E]/70 mt-2 leading-relaxed">
          {error || 'यह पेज या तो हटा दिया गया है या अभी तक सार्वजनिक रूप से प्रकाशित नहीं हुआ है।'}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onBackToHome}
            className="px-5 py-2.5 rounded-full bg-[#24152F] hover:bg-[#341e44] text-[#D6B574] text-xs font-semibold shadow-lg transition-all"
          >
            ← मुख्य पृष्ठ पर लौटें (Home)
          </button>
          <a
            href="https://wa.me/919105731969"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-lg transition-all"
          >
            व्हाट्सएप पर संपर्क करें
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBF8F2] text-[#29242E] selection:bg-[#EAE2F4] selection:text-[#24152F] pb-20">
      {/* Top Breadcrumb & Share Navigation Strip */}
      <div className="bg-[#24152F] text-white border-b border-[#D6B574]/30 py-3 px-4 sm:px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 truncate">
            <button
              onClick={onBackToHome}
              className="text-[#D6B574] hover:underline flex items-center gap-1 font-semibold shrink-0 cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>{lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}</span>
            </button>
            <span className="text-white/40">/</span>
            <span className="text-[#EAE2F4]/70 hidden sm:inline">
              {lang === 'hi' ? 'विशेष मार्गदर्शन पृष्ठ' : 'Pages'}
            </span>
            <span className="text-white/40 hidden sm:inline">/</span>
            <span className="text-[#F3E5AB] font-medium truncate">
              {page.title}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {page.status === 'draft' && (
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold border border-amber-500/40">
                ड्राफ्ट पूर्वावलोकन (Draft Mode)
              </span>
            )}
            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#D6B574] text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
              title="पेज शेयर करें"
            >
              <Share2 size={13} />
              <span>{copiedLink ? 'लिंक कॉपी हुआ!' : 'शेयर करें'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Dynamic Blocks Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 space-y-12">
        {page.blocks.map((block) => {
          // 1. HERO BLOCK
          if (block.type === 'hero') {
            const hero = block as HeroBlock;
            return (
              <section
                key={hero.id}
                className="rounded-3xl p-8 sm:p-14 text-center text-white relative overflow-hidden bg-cover bg-center shadow-2xl border-2 border-[#D6B574]/40"
                style={{
                  backgroundImage: hero.bgImage
                    ? `linear-gradient(rgba(24, 12, 33, 0.88), rgba(24, 12, 33, 0.88)), url(${hero.bgImage})`
                    : 'linear-gradient(135deg, #24152F, #1c0f26)',
                }}
              >
                {/* Subtle celestial particle glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#D6B574]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D6B574]/20 border border-[#D6B574]/40 text-[#D6B574] text-xs font-semibold">
                    <Sparkles size={12} />
                    <span>{page.category || 'Vedic Guidance'}</span>
                  </div>

                  <h1 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold text-[#F3E5AB] leading-tight">
                    {hero.title}
                  </h1>

                  {hero.subtitle && (
                    <p className="text-sm sm:text-base text-[#EAE2F4]/90 font-light leading-relaxed">
                      {hero.subtitle}
                    </p>
                  )}

                  {hero.ctaText && (
                    <div className="pt-3">
                      <button
                        onClick={() => {
                          if (hero.ctaLink === '#contact') {
                            onBackToHome();
                            setTimeout(() => {
                              const el = document.getElementById('contact');
                              el?.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          } else if (hero.ctaLink?.startsWith('http')) {
                            window.open(hero.ctaLink, '_blank');
                          } else {
                            onSelectServiceForBooking(hero.title);
                          }
                        }}
                        className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D6B574] via-[#eedca2] to-[#D6B574] text-[#1c0f26] font-bold text-sm tracking-wide shadow-xl shadow-[#D6B574]/20 hover:brightness-105 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span>{hero.ctaText}</span>
                        <span>→</span>
                      </button>
                    </div>
                  )}
                </div>
              </section>
            );
          }

          // 2. RICH TEXT / HEADING BLOCK
          if (block.type === 'richtext') {
            const rt = block as RichTextBlock;
            return (
              <section key={rt.id} className="space-y-4 max-w-3xl mx-auto">
                {rt.heading && (
                  <div className="space-y-2">
                    <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#24152F] tracking-wide">
                      {rt.heading}
                    </h2>
                    <div className="h-0.5 w-16 bg-[#D6B574]" />
                  </div>
                )}
                <div
                  className="prose prose-base sm:prose-lg max-w-none text-[#29242E]/90 leading-relaxed font-sans space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-sm sm:[&_li]:text-base [&_strong]:text-[#24152F] [&_strong]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: rt.content }}
                />
              </section>
            );
          }

          // 3. VEDIC QUOTE BLOCK
          if (block.type === 'vedic-quote') {
            const vq = block as VedicQuoteBlock;
            return (
              <section
                key={vq.id}
                className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#24152F] via-[#2d1b3b] to-[#1c0f26] text-white border-2 border-[#D6B574]/50 shadow-xl text-center space-y-4 max-w-3xl mx-auto relative overflow-hidden"
              >
                <div className="absolute top-2 left-4 text-4xl text-[#D6B574]/20 font-serif select-none pointer-events-none">
                  “
                </div>
                {vq.mantra && (
                  <div className="inline-block px-4 py-1 rounded-full bg-[#D6B574]/15 border border-[#D6B574]/30 text-xs font-bold text-[#D6B574] tracking-widest uppercase font-mono">
                    {vq.mantra}
                  </div>
                )}
                <blockquote className="font-serif italic text-base sm:text-lg text-[#F3E5AB] leading-relaxed max-w-2xl mx-auto">
                  "{vq.quote}"
                </blockquote>
                {vq.author && (
                  <div className="text-xs text-[#EAE2F4]/80 font-cinzel font-semibold tracking-wider">
                    — {vq.author}
                  </div>
                )}
              </section>
            );
          }

          // 4. SINGLE IMAGE BLOCK
          if (block.type === 'image') {
            const img = block as SingleImageBlock;
            return (
              <section key={img.id} className="text-center space-y-2.5 max-w-4xl mx-auto">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D6B574]/40 bg-[#1c0f26] inline-block">
                  <img
                    src={img.url}
                    alt={img.altText || img.caption || 'Spiritual Image'}
                    className="max-h-[500px] w-auto mx-auto object-cover hover:scale-[1.01] transition-transform duration-300 cursor-pointer"
                    onClick={() => setActiveLightboxImg({ url: img.url, caption: img.caption })}
                    loading="lazy"
                  />
                </div>
                {img.caption && (
                  <p className="text-xs text-[#29242E]/70 font-medium italic">
                    {img.caption}
                  </p>
                )}
              </section>
            );
          }

          // 5. IMAGE GALLERY BLOCK
          if (block.type === 'gallery') {
            const gal = block as GalleryBlock;
            return (
              <section key={gal.id} className="space-y-6">
                {gal.heading && (
                  <div className="text-center space-y-2">
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#24152F]">
                      {gal.heading}
                    </h3>
                    <div className="h-0.5 w-16 bg-[#D6B574] mx-auto" />
                  </div>
                )}

                <div
                  className={`grid gap-4 sm:gap-6 ${
                    gal.columns === 2
                      ? 'grid-cols-1 sm:grid-cols-2'
                      : gal.columns === 4
                      ? 'grid-cols-2 sm:grid-cols-4'
                      : 'grid-cols-1 sm:grid-cols-3'
                  }`}
                >
                  {gal.images?.map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveLightboxImg({ url: img.url, caption: img.caption })}
                      className="group rounded-2xl overflow-hidden bg-[#24152F] border border-[#D6B574]/30 shadow-lg hover:border-[#D6B574] transition-all cursor-pointer flex flex-col justify-between"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-[#160b20]">
                        <img
                          src={img.url}
                          alt={img.caption || 'Gallery Image'}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      {img.caption && (
                        <div className="p-3 bg-[#24152F] text-center border-t border-white/5">
                          <p className="text-xs text-[#EAE2F4]/90 font-medium truncate">
                            {img.caption}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          // 6. VIDEO BLOCK
          if (block.type === 'video') {
            const vid = block as VideoBlock;
            return (
              <section key={vid.id} className="space-y-4 max-w-3xl mx-auto text-center">
                {vid.heading && (
                  <div className="space-y-2">
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#24152F]">
                      {vid.heading}
                    </h3>
                    <div className="h-0.5 w-16 bg-[#D6B574] mx-auto" />
                  </div>
                )}

                <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D6B574]/40 bg-black">
                  {vid.videoUrl.includes('youtube') || vid.videoUrl.includes('embed') ? (
                    <iframe
                      src={vid.videoUrl}
                      title={vid.heading || 'Video'}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={vid.videoUrl}
                      controls
                      poster={vid.posterImage}
                      className="w-full h-full"
                    />
                  )}
                </div>

                {vid.caption && (
                  <p className="text-xs text-[#29242E]/70 font-medium italic">
                    {vid.caption}
                  </p>
                )}
              </section>
            );
          }

          // 7. FEATURE GRID BLOCK
          if (block.type === 'feature-grid') {
            const fg = block as FeatureGridBlock;
            return (
              <section key={fg.id} className="space-y-6">
                {fg.heading && (
                  <div className="text-center space-y-2">
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#24152F]">
                      {fg.heading}
                    </h3>
                    <div className="h-0.5 w-16 bg-[#D6B574] mx-auto" />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {fg.features?.map((f, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-3xl bg-white border border-[#D6B574]/40 shadow-xl space-y-2.5 relative group hover:border-[#D6B574] transition-all"
                    >
                      {f.badge && (
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#24152F] text-[#D6B574] text-[10px] font-bold uppercase tracking-wider">
                          {f.badge}
                        </span>
                      )}
                      <h4 className="font-cinzel text-base font-bold text-[#24152F] group-hover:text-[#D6B574] transition-colors">
                        {f.title}
                      </h4>
                      <p className="text-xs text-[#29242E]/80 leading-relaxed font-sans">
                        {f.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          // 8. CTA BUTTON BLOCK
          if (block.type === 'cta-button') {
            const cta = block as CtaButtonBlock;
            return (
              <section key={cta.id} className="text-center py-4 space-y-2">
                <button
                  onClick={() => {
                    if (cta.url === '#contact') {
                      onBackToHome();
                      setTimeout(() => {
                        const el = document.getElementById('contact');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    } else if (cta.url.startsWith('http')) {
                      window.open(cta.url, '_blank');
                    } else {
                      onSelectServiceForBooking(cta.label);
                    }
                  }}
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D6B574] via-[#eedca2] to-[#D6B574] text-[#1c0f26] font-bold text-sm tracking-wide shadow-xl shadow-[#D6B574]/20 hover:brightness-105 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare size={16} />
                  <span>{cta.label}</span>
                </button>
                {cta.subtext && (
                  <p className="text-xs text-[#29242E]/60 italic">{cta.subtext}</p>
                )}
              </section>
            );
          }

          // 9. BOOKING CARD BLOCK
          if (block.type === 'booking-card') {
            const bc = block as BookingCardBlock;
            return (
              <section
                key={bc.id}
                className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#24152F] to-[#1c0f26] text-white border-2 border-[#D6B574] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 w-64 h-full bg-[#D6B574]/10 rounded-full blur-2xl pointer-events-none" />

                <div className="space-y-2 text-center md:text-left relative z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#D6B574]/20 border border-[#D6B574]/40 text-[#D6B574] text-xs font-semibold">
                    <Sparkles size={11} />
                    <span>व्यक्तिगत परामर्श स्लॉट</span>
                  </span>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                    {bc.serviceName}
                  </h3>
                  <p className="text-xs text-[#EAE2F4]/80 max-w-xl leading-relaxed">
                    {bc.description || 'डॉ. पूजा अवस्थी से सीधा संवाद, संपूर्ण वैदिक परीक्षण व समाधान।'}
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-[#D6B574] pt-1 font-medium">
                    <span>⏱ {bc.duration || '60–90 मिनट'}</span>
                    <span>•</span>
                    <span>🔒 100% गोपनीय व व्यक्तिगत</span>
                  </div>
                </div>

                <div className="text-center md:text-right shrink-0 relative z-10 space-y-3">
                  <div className="font-cinzel text-3xl font-bold text-[#D6B574]">
                    {bc.price || '₹5,100'}
                  </div>
                  <button
                    onClick={() => {
                      onBackToHome();
                      onSelectServiceForBooking(bc.serviceName);
                    }}
                    className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D6B574] via-[#eedca2] to-[#D6B574] text-[#1c0f26] font-bold text-xs tracking-wide shadow-xl shadow-[#D6B574]/30 hover:brightness-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>परामर्श बुक करें</span>
                    <span>→</span>
                  </button>
                </div>
              </section>
            );
          }

          // 10. DIVIDER BLOCK
          if (block.type === 'divider') {
            return (
              <div key={block.id} className="py-6 flex items-center justify-center gap-4">
                <div className="h-px bg-gradient-to-r from-transparent via-[#D6B574]/40 to-transparent flex-1" />
                <span className="text-[#D6B574] text-sm">⚜️ ॐ ⚜️</span>
                <div className="h-px bg-gradient-to-r from-transparent via-[#D6B574]/40 to-transparent flex-1" />
              </div>
            );
          }

          return null;
        })}

        {/* Bottom Back Button & Consultation Affordance */}
        <div className="pt-8 border-t border-[#D6B574]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#24152F] hover:bg-[#341e44] text-[#D6B574] font-semibold text-xs shadow-lg transition-all cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>← मुख्य वेबसाइट पर लौटें</span>
          </button>

          <a
            href="https://wa.me/919105731969?text=Hello%20Dr.%20Pooja%20Awasthi,%20I%20am%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold text-xs shadow-lg hover:brightness-105 transition-all"
          >
            <MessageSquare size={16} />
            <span>व्हाट्सएप पर सीधा परामर्श (Direct Booking)</span>
          </a>
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {activeLightboxImg && (
        <div
          onClick={() => setActiveLightboxImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setActiveLightboxImg(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-[#D6B574] transition-colors"
            >
              <X size={24} />
            </button>
            <img
              src={activeLightboxImg.url}
              alt={activeLightboxImg.caption || 'Enlarged View'}
              className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-2xl border border-[#D6B574]/40"
            />
            {activeLightboxImg.caption && (
              <p className="mt-3 text-xs text-white/90 text-center bg-[#24152F]/80 px-4 py-1.5 rounded-full border border-white/10">
                {activeLightboxImg.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

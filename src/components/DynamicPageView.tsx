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
  getPageBySlug,
  formatEmbedUrl
} from '../utils/cmsApi';
import { SEOHead } from './SEOHead';
import { Breadcrumb } from './Breadcrumb';
import { SocialShare } from './SocialShare';

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
        <div className="w-16 h-16 rounded-3xl bg-[#F4F0FA] border border-[#DFD5F0] flex items-center justify-center text-[#522B8A] mb-4">
          <Compass size={32} />
        </div>
        <h2 className="font-cinzel text-2xl font-bold text-[#1E162B]">
          {lang === 'hi' ? 'पेज उपलब्ध नहीं है (Page Not Found)' : 'Page Not Found'}
        </h2>
        <p className="text-xs text-[#4A4356] mt-2 leading-relaxed">
          {error || 'यह पेज या तो हटा दिया गया है या अभी तक सार्वजनिक रूप से प्रकाशित नहीं हुआ है।'}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onBackToHome}
            className="h-10 px-5 rounded-xl bg-[#522B8A] hover:bg-[#412070] text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
          >
            ← मुख्य पृष्ठ पर लौटें (Home)
          </button>
          <a
            href="https://wa.me/919105731969"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-5 flex items-center rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold shadow-md transition-all"
          >
            व्हाट्सएप पर संपर्क करें
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1E162B] selection:bg-[#EAE2F4] selection:text-[#522B8A] pb-12">
      {/* Comprehensive Dynamic SEO Head & Article Schema */}
      <SEOHead
        title={page.seo?.metaTitle || `${page.title} | डॉ. पूजा अवस्थी — आध्यात्मिक मार्गदर्शन`}
        description={page.seo?.metaDescription || page.excerpt || page.subtitle || `${page.title} - डॉ. पूजा अवस्थी द्वारा विशेष वैदिक अंतर्दृष्टि एवं आध्यात्मिक मार्गदर्शन।`}
        canonical={`https://dr-pooja-awasthi-india.netlify.app/pages/${page.slug}`}
        ogImage={page.seo?.ogImage}
        keywords={page.seo?.focusKeywords || `${page.title}, डॉ पूजा अवस्थी, वैदिक मार्गदर्शन`}
        type="article"
        publishDate={page.publishedAt || page.createdAt}
        modifiedDate={page.updatedAt}
        author="Dr. Pooja Awasthi"
        lang={lang}
      />

      {/* Top Breadcrumb & Share Navigation Strip */}
      <div className="bg-[#F4F1EA] text-[#1E162B] border-b border-[#DEC38C]/60 py-3 px-4 sm:px-8 pt-24">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <Breadcrumb
            items={[
              { label: lang === 'hi' ? 'विशेष मार्गदर्शन पृष्ठ' : 'Special Guides', path: '/' },
              { label: page.title }
            ]}
            onNavigateHome={onBackToHome}
            lang={lang}
          />

          <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
            {page.status === 'draft' && (
              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px] font-bold border border-amber-300">
                ड्राफ्ट पूर्वावलोकन (Draft Mode)
              </span>
            )}
            <button
              onClick={handleShare}
              className="h-8 px-3 rounded-lg bg-white hover:bg-[#FBF5E6] text-[#7A5311] border border-[#DEC38C] text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
              title="पेज शेयर करें"
            >
              <Share2 size={13} />
              <span>{copiedLink ? 'लिंक कॉपी हुआ!' : 'शेयर करें'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Dynamic Blocks Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 pt-6 space-y-8">
        {page.blocks.map((block) => {
          // 1. HERO BLOCK
          if (block.type === 'hero') {
            const hero = block as HeroBlock;
            return (
              <section
                key={hero.id}
                className="rounded-3xl p-8 sm:p-14 text-center text-[#1E162B] relative overflow-hidden bg-cover bg-center shadow-lg border-2 border-[#DEC38C]"
                style={{
                  backgroundImage: hero.bgImage
                    ? `linear-gradient(rgba(255, 255, 255, 0.90), rgba(250, 248, 245, 0.92)), url(${hero.bgImage})`
                    : 'linear-gradient(135deg, #FBF5E6, #FFFFFF 55%, #F4F0FA)',
                }}
              >
                <div className="relative z-10 space-y-4 max-w-3xl mx-auto">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white border border-[#DEC38C] text-[#7A5311] text-xs font-semibold shadow-2xs">
                    <Sparkles size={12} className="text-[#B48228]" />
                    <span>{page.category || 'Vedic Guidance'}</span>
                  </div>

                  <h1 className="font-cinzel text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E162B] leading-tight">
                    {hero.title}
                  </h1>

                  {hero.subtitle && (
                    <p className="text-sm sm:text-base text-[#4A4356] leading-relaxed">
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
                        className="h-12 px-8 rounded-xl bg-[#522B8A] hover:bg-[#412070] text-white font-bold text-sm tracking-wide shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
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
                    <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1E162B] tracking-wide">
                      {rt.heading}
                    </h2>
                    <div className="h-0.5 w-16 bg-[#B48228]" />
                  </div>
                )}
                <div
                  className="prose prose-base sm:prose-lg max-w-none text-[#4A4356] leading-relaxed font-sans space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_li]:text-sm sm:[&_li]:text-base [&_strong]:text-[#1E162B] [&_strong]:font-semibold"
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
                className="p-8 sm:p-10 rounded-3xl bg-[#F4F0FA] text-[#1E162B] border-2 border-[#DEC38C] shadow-sm text-center space-y-4 max-w-3xl mx-auto relative overflow-hidden"
              >
                <div className="absolute top-2 left-4 text-4xl text-[#B48228]/25 font-serif select-none pointer-events-none">
                  “
                </div>
                {vq.mantra && (
                  <div className="inline-block px-4 py-1 rounded-full bg-white border border-[#DEC38C] text-xs font-bold text-[#7A5311] tracking-widest uppercase font-mono">
                    {vq.mantra}
                  </div>
                )}
                <blockquote className="font-serif italic text-base sm:text-lg text-[#522B8A] leading-relaxed max-w-2xl mx-auto">
                  "{vq.quote}"
                </blockquote>
                {vq.author && (
                  <div className="text-xs text-[#7A5311] font-cinzel font-semibold tracking-wider">
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
                <div className="p-2 rounded-3xl overflow-hidden shadow-lg border border-[#E6DFD3] bg-white inline-block">
                  <img
                    src={img.url}
                    alt={img.altText || img.caption || 'Spiritual Image'}
                    className="max-h-[500px] w-auto mx-auto rounded-2xl object-cover hover:scale-[1.01] transition-transform duration-300 cursor-pointer"
                    onClick={() => setActiveLightboxImg({ url: img.url, caption: img.caption })}
                    loading="lazy"
                  />
                </div>
                {img.caption && (
                  <p className="text-xs text-[#5D556A] font-medium italic">
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
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1E162B]">
                      {gal.heading}
                    </h3>
                    <div className="h-0.5 w-16 bg-[#B48228] mx-auto" />
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
                      className="group rounded-2xl overflow-hidden bg-white border border-[#E6DFD3] shadow-sm hover:border-[#DEC38C] hover:shadow-md transition-all cursor-pointer flex flex-col justify-between p-2"
                    >
                      <div className="aspect-[4/3] overflow-hidden rounded-xl bg-[#FAF8F5]">
                        <img
                          src={img.url}
                          alt={img.caption || 'Gallery Image'}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      {img.caption && (
                        <div className="p-2.5 text-center">
                          <p className="text-xs text-[#4A4356] font-medium truncate">
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
            const { embedUrl, isIframe } = formatEmbedUrl(vid.videoUrl);
            return (
              <section key={vid.id} className="space-y-4 max-w-3xl mx-auto text-center">
                {vid.heading && (
                  <div className="space-y-2">
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1E162B]">
                      {vid.heading}
                    </h3>
                    <div className="h-0.5 w-16 bg-[#B48228] mx-auto" />
                  </div>
                )}

                <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-lg border-2 border-[#DEC38C] bg-white p-1.5">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-950">
                    {isIframe ? (
                      <iframe
                        src={embedUrl}
                        title={vid.heading || 'Video'}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        src={embedUrl || vid.videoUrl}
                        controls
                        poster={vid.posterImage}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                {vid.caption && (
                  <p className="text-xs text-[#5D556A] font-medium italic">
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
                    <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1E162B]">
                      {fg.heading}
                    </h3>
                    <div className="h-0.5 w-16 bg-[#B48228] mx-auto" />
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {fg.features?.map((f, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-3xl bg-white border border-[#E6DFD3] shadow-sm space-y-2.5 relative group hover:border-[#DEC38C] transition-all"
                    >
                      {f.badge && (
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FBF5E6] border border-[#DEC38C] text-[#7A5311] text-[10px] font-bold uppercase tracking-wider">
                          {f.badge}
                        </span>
                      )}
                      <h4 className="font-cinzel text-base font-bold text-[#1E162B] group-hover:text-[#522B8A] transition-colors">
                        {f.title}
                      </h4>
                      <p className="text-xs text-[#4A4356] leading-relaxed font-sans">
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
                  className="h-12 px-8 rounded-xl bg-[#522B8A] hover:bg-[#412070] text-white font-bold text-sm tracking-wide shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquare size={16} />
                  <span>{cta.label}</span>
                </button>
                {cta.subtext && (
                  <p className="text-xs text-[#5D556A] italic">{cta.subtext}</p>
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
                className="p-8 sm:p-10 rounded-3xl bg-white text-[#1E162B] border-2 border-[#DEC38C] shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
              >
                <div className="space-y-2 text-center md:text-left relative z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FBF5E6] border border-[#DEC38C] text-[#7A5311] text-xs font-semibold">
                    <Sparkles size={11} className="text-[#B48228]" />
                    <span>व्यक्तिगत परामर्श स्लॉट</span>
                  </span>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1E162B]">
                    {bc.serviceName}
                  </h3>
                  <p className="text-xs text-[#4A4356] max-w-xl leading-relaxed">
                    {bc.description || 'डॉ. पूजा अवस्थी से सीधा संवाद, संपूर्ण वैदिक परीक्षण व समाधान।'}
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-[#7A5311] pt-1 font-semibold">
                    <span>⏱ {bc.duration || '60–90 मिनट'}</span>
                    <span>•</span>
                    <span>🔒 100% गोपनीय व व्यक्तिगत</span>
                  </div>
                </div>

                <div className="text-center md:text-right shrink-0 relative z-10 space-y-3">
                  <div className="font-rupee text-3xl font-black text-[#1E162B]">
                    {bc.price || '₹5,100'}
                  </div>
                  <button
                    onClick={() => {
                      onBackToHome();
                      onSelectServiceForBooking(bc.serviceName);
                    }}
                    className="h-11 px-8 rounded-xl bg-[#522B8A] hover:bg-[#412070] text-white font-bold text-xs tracking-wide shadow-md transition-all flex items-center gap-2 cursor-pointer"
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
                <div className="h-px bg-gradient-to-r from-transparent via-[#DEC38C] to-transparent flex-1" />
                <span className="text-[#B48228] text-sm">⚜️ ॐ ⚜️</span>
                <div className="h-px bg-gradient-to-r from-transparent via-[#DEC38C] to-transparent flex-1" />
              </div>
            );
          }

          return null;
        })}

        {/* Social Sharing & Promotion Block */}
        <div className="pt-6">
          <SocialShare
            title={`${page.title} — डॉ. पूजा अवस्थी`}
            text={page.excerpt || page.subtitle || ''}
            url={`https://dr-pooja-awasthi-india.netlify.app/pages/${page.slug}`}
            lang={lang}
          />
        </div>

        {/* Bottom Back Button & Consultation Affordance */}
        <div className="pt-8 border-t border-[#E6DFD3] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToHome}
            className="h-11 inline-flex items-center gap-2 px-6 rounded-xl bg-[#522B8A] hover:bg-[#412070] text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>← मुख्य वेबसाइट पर लौटें</span>
          </button>

          <a
            href="https://wa.me/919105731969?text=Hello%20Dr.%20Pooja%20Awasthi,%20I%20am%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="h-11 inline-flex items-center gap-2 px-6 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs shadow-md transition-all"
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E162B]/75 backdrop-blur-md animate-fade-in cursor-pointer"
        >
          <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center bg-white p-3 rounded-3xl border border-[#E6DFD3] shadow-2xl">
            <button
              onClick={() => setActiveLightboxImg(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white text-[#1E162B] hover:text-[#522B8A] transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>
            <img
              src={activeLightboxImg.url}
              alt={activeLightboxImg.caption || 'Enlarged View'}
              className="max-h-[80vh] w-auto rounded-2xl object-contain"
            />
            {activeLightboxImg.caption && (
              <p className="mt-3 text-xs text-[#1E162B] text-center bg-[#FAF8F5] px-4 py-1.5 rounded-full border border-[#E6DFD3] font-medium">
                {activeLightboxImg.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from 'react';
import { Video, Play, ExternalLink, Sparkles, Award } from 'lucide-react';
import { useSiteContent } from '../utils/siteContentContext';

interface VideoSpotlightSectionProps {
  lang?: string;
}

export const VideoSpotlightSection: React.FC<VideoSpotlightSectionProps> = ({ lang = 'hi' }) => {
  const { siteContent } = useSiteContent();
  const spotlight = siteContent?.videoSpotlight;
  const [isPlaying, setIsPlaying] = useState(false);

  if (!spotlight || !spotlight.video_url) return null;

  const heading = lang === 'hi'
    ? (spotlight.heading_hi || 'आईआईएमटी विश्वविद्यालय महासमागम - शोध व्याख्यान')
    : (spotlight.heading_en || 'Keynote Address & Sacred Conclave');

  const caption = lang === 'hi'
    ? (spotlight.caption_hi || 'आईआईएमटी विश्वविद्यालय परिसर मेरठ में देश-विदेश के 90+ विद्वानों के समक्ष डॉ. पूजा अवस्थी का विशेष संबोधन।')
    : (spotlight.caption_en || 'Keynote address by Dr. Pooja Awasthi before 90+ eminent Vedic scholars at IIMT University.');

  // Format video url for iframe if youtube
  let embedUrl = spotlight.video_url;
  if (embedUrl.includes('youtube.com/watch?v=')) {
    embedUrl = embedUrl.replace('watch?v=', 'embed/');
  } else if (embedUrl.includes('youtu.be/')) {
    embedUrl = embedUrl.replace('youtu.be/', 'www.youtube.com/embed/');
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[#24152F] via-[#1c0f26] to-[#24152F] text-white relative overflow-hidden border-t border-[#D6B574]/20">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D6B574]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D6B574]/15 border border-[#D6B574]/30 text-[#D6B574] text-xs font-semibold uppercase tracking-wider">
            <Video size={14} />
            <span>{lang === 'hi' ? 'विशेष वीडियो व्याख्यान' : 'Featured Video Keynote'}</span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
            {heading}
          </h2>

          <p className="text-xs sm:text-sm text-[#EAE2F4]/75 max-w-2xl mx-auto font-light leading-relaxed">
            {caption}
          </p>
        </div>

        {/* Video Player Box */}
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-[#D6B574]/40 shadow-2xl bg-black relative group aspect-video">
          {embedUrl.endsWith('.mp4') ? (
            <video
              src={embedUrl}
              controls
              className="w-full h-full object-cover"
              poster="/assets/awards/IMMT.jpeg"
            />
          ) : (
            <iframe
              src={embedUrl}
              title={heading}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          )}
        </div>

        {/* Bottom micro citation */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#EAE2F4]/60">
          <span className="flex items-center gap-1.5 text-[#D6B574]">
            <Award size={14} />
            <span>{lang === 'hi' ? 'आईआईएमटी विश्वविद्यालय मेरठ महासमागम' : 'IIMT University Meerut Conclave'}</span>
          </span>
          <span>•</span>
          <span>{lang === 'hi' ? 'भारतीय ज्ञान परंपरा (IKS) शोध' : 'Indian Knowledge Systems (IKS)'}</span>
          <span>•</span>
          <span>{lang === 'hi' ? 'एडमिन पैनल से सीधे संपादन योग्य' : 'Editable directly via Admin Panel'}</span>
        </div>
      </div>
    </section>
  );
};

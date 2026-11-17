import React from 'react';
import { Video, Award } from 'lucide-react';
import { useSiteContent } from '../utils/siteContentContext';
import { formatEmbedUrl } from '../utils/cmsApi';

interface VideoSpotlightSectionProps {
  lang?: string;
}

export const VideoSpotlightSection: React.FC<VideoSpotlightSectionProps> = ({ lang = 'hi' }) => {
  const { siteContent } = useSiteContent();
  const spotlight = siteContent?.videoSpotlight;

  if (!spotlight || !spotlight.video_url) return null;

  const heading = lang === 'hi'
    ? (spotlight.heading_hi || 'आईआईएमटी विश्वविद्यालय महासमागम - शोध व्याख्यान')
    : (spotlight.heading_en || 'Keynote Address & Sacred Conclave');

  const caption = lang === 'hi'
    ? (spotlight.caption_hi || 'आईआईएमटी विश्वविद्यालय परिसर मेरठ में देश-विदेश के 90+ विद्वानों के समक्ष डॉ. पूजा अवस्थी का विशेष संबोधन।')
    : (spotlight.caption_en || 'Keynote address by Dr. Pooja Awasthi before 90+ eminent Vedic scholars at IIMT University.');

  const { embedUrl, isIframe } = formatEmbedUrl(spotlight.video_url);

  return (
    <section className="py-20 bg-[#F4F1EA] text-[#1E162B] relative overflow-hidden border-t border-[#E5DFD5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DEC38C] text-[#7A5311] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Video size={14} className="text-[#B48228]" />
            <span>{lang === 'hi' ? 'विशेष वीडियो व्याख्यान' : 'Featured Video Keynote'}</span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1E162B] leading-tight">
            {heading}
          </h2>

          <p className="text-xs sm:text-sm text-[#4A4356] max-w-2xl mx-auto leading-relaxed">
            {caption}
          </p>
        </div>

        {/* Matted Video Frame */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white p-2.5 sm:p-3 border border-[#E6DFD3] shadow-xl">
          <div className="rounded-2xl overflow-hidden bg-slate-950 relative aspect-video">
            {isIframe ? (
              <iframe
                src={embedUrl}
                title={heading}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <video
                src={embedUrl}
                controls
                className="w-full h-full object-cover"
                poster="/assets/awards/IMMT.jpeg"
              />
            )}
          </div>
        </div>

        {/* Bottom Citation */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#5D556A] font-medium">
          <span className="flex items-center gap-1.5 text-[#522B8A] font-bold">
            <Award size={14} className="text-[#B48228]" />
            <span>{lang === 'hi' ? 'आईआईएमटी विश्वविद्यालय मेरठ महासमागम' : 'IIMT University Meerut Conclave'}</span>
          </span>
          <span className="text-[#B48228]">•</span>
          <span>{lang === 'hi' ? 'भारतीय ज्ञान परंपरा (IKS) शोध' : 'Indian Knowledge Systems (IKS)'}</span>
          <span className="text-[#B48228]">•</span>
          <span>{lang === 'hi' ? 'एडमिन पैनल से सीधे संपादन योग्य' : 'Editable via Admin CMS'}</span>
        </div>
      </div>
    </section>
  );
};

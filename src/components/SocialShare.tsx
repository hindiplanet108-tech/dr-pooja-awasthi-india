import React, { useState } from 'react';
import { Share2, Check, Copy, MessageCircle, Send } from 'lucide-react';

interface SocialShareProps {
  title?: string;
  text?: string;
  url?: string;
  lang?: string;
  className?: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({
  title = 'Dr. Pooja Awasthi — Spiritual Guidance & Vedic Numerology',
  text = 'Explore Vedic Numerology, Tarot Guidance, and Energy Healing with Dr. Pooja Awasthi.',
  url,
  lang = 'en',
  className = '',
}) => {
  const [copied, setCopied] = useState(false);
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://dr-pooja-awasthi.vercel.app');

  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(`${title}\n${text}`);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: currentUrl,
        });
      } catch {
        // User cancelled or unsupported
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className={`p-4 sm:p-5 rounded-2xl bg-white/5 border border-[#D6B574]/30 backdrop-blur-md space-y-3 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Share2 size={15} className="text-[#D6B574]" />
          <span className="text-xs font-bold uppercase tracking-wider text-white">
            {lang === 'hi' ? 'मार्गदर्शन साझा करें' : 'Share Guidance'}
          </span>
        </div>
        <span className="text-[10px] text-[#D6B574]/80 font-medium">
          {lang === 'hi' ? 'सोशल मीडिया व व्हाट्सएप' : 'WhatsApp & Social'}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {/* WhatsApp */}
        <a
          href={`https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs hover:scale-105"
          title="Share via WhatsApp"
        >
          <MessageCircle size={14} />
          <span>WhatsApp</span>
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-xl bg-[#1877F2]/90 hover:bg-[#1877F2] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs hover:scale-105"
          title="Share on Facebook"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span>Facebook</span>
        </a>

        {/* X / Twitter */}
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-xl bg-black hover:bg-neutral-800 text-white text-xs font-bold flex items-center gap-1.5 border border-white/20 transition-all shadow-xs hover:scale-105"
          title="Share on X (Twitter)"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <span>X / Twitter</span>
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-xl bg-[#0A66C2]/90 hover:bg-[#0A66C2] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs hover:scale-105"
          title="Share on LinkedIn"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
          <span>LinkedIn</span>
        </a>

        {/* Pinterest */}
        <a
          href={`https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedText}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-xl bg-[#E60023]/90 hover:bg-[#E60023] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs hover:scale-105"
          title="Pin on Pinterest"
        >
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.332 1.357-.053.211-.174.256-.402.155-1.498-.696-2.435-2.883-2.435-4.639 0-3.774 2.743-7.243 7.906-7.243 4.15 0 7.375 2.957 7.375 6.909 0 4.124-2.599 7.442-6.207 7.442-1.212 0-2.351-.63-2.742-1.378l-.746 2.846c-.27 1.035-1.002 2.333-1.493 3.125 1.121.345 2.308.533 3.538.533 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
          </svg>
          <span>Pinterest</span>
        </a>

        {/* Copy Link */}
        <button
          type="button"
          onClick={handleCopy}
          className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#D6B574] hover:text-[#24152F] text-white text-xs font-bold flex items-center gap-1.5 border border-white/15 transition-all shadow-xs"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          <span>{copied ? (lang === 'hi' ? 'लिंक कॉपी हुआ!' : 'Copied!') : (lang === 'hi' ? 'लिंक कॉपी करें' : 'Copy Link')}</span>
        </button>

        {/* Native Web Share button */}
        {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
          <button
            type="button"
            onClick={handleNativeShare}
            className="px-3.5 py-2 rounded-xl bg-[#D6B574] hover:bg-[#edd8a6] text-[#24152F] text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs ml-auto"
          >
            <Send size={13} />
            <span>{lang === 'hi' ? 'शेयर मेनू' : 'More...'}</span>
          </button>
        )}
      </div>
    </div>
  );
};

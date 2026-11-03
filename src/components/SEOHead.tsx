import React, { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonical?: string;
  canonicalUrl?: string;
  ogImage?: string;
  type?: string;
  ogType?: 'website' | 'article' | 'profile' | 'service' | string;
  noIndex?: boolean;
  publishedTime?: string;
  publishDate?: string;
  modifiedTime?: string;
  modifiedDate?: string;
  author?: string;
  schemaData?: object | object[];
  lang?: string;
}

const DEFAULT_TITLE = 'Dr. Pooja Awasthi — Spiritual Guidance | Vedic Numerology & Life Coaching';
const DEFAULT_DESC =
  'Discover Your Path. Transform Your Life. Professional Vedic Numerology, Intuitive Tarot Guidance, Chakra & Energy Healing, and Conscious Life Coaching with Dr. Pooja Awasthi.';
const DEFAULT_KEYWORDS =
  'Pooja Awasthi, Dr Pooja Awasthi, Vedic Numerology, Tarot Reading, Energy Healing, Chakra Cleansing, Life Coaching, Mulank, Bhagyank, Dehradun, Spiritual Guidance';
const DEFAULT_CANONICAL = 'https://dr-pooja-awasthi-india.netlify.app';
const DEFAULT_IMAGE = 'https://dr-pooja-awasthi-india.netlify.app/28.jpeg';

export const SEOHead: React.FC<SEOProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  canonicalUrl,
  ogImage = DEFAULT_IMAGE,
  type,
  ogType = 'website',
  noIndex = false,
  publishedTime,
  publishDate,
  modifiedTime,
  modifiedDate,
  author = 'Dr. Pooja Awasthi',
  schemaData,
  lang = 'en',
}) => {
  const activeCanonical = canonical || canonicalUrl;
  const activeType = type || ogType;
  const activePublishedTime = publishedTime || publishDate;
  const activeModifiedTime = modifiedTime || modifiedDate;
  const activeKeywords = Array.isArray(keywords) ? keywords.join(', ') : keywords;
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to safely set or create meta tag
    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', activeKeywords);
    setMetaTag('name', 'author', author);
    setMetaTag('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'googlebot', noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large');

    // 3. Canonical URL
    const finalCanonical = activeCanonical || (window.location.origin + window.location.pathname);
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.href = finalCanonical;

    // 4. OpenGraph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', finalCanonical);
    setMetaTag('property', 'og:type', activeType);
    setMetaTag('property', 'og:site_name', 'Dr. Pooja Awasthi — Spiritual Guidance');
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:image:alt', title);
    setMetaTag('property', 'og:locale', lang === 'hi' ? 'hi_IN' : 'en_IN');

    // 5. Twitter / X Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 6. Article specific metadata
    if (activeType === 'article') {
      if (activePublishedTime) setMetaTag('property', 'article:published_time', activePublishedTime);
      if (activeModifiedTime) setMetaTag('property', 'article:modified_time', activeModifiedTime);
      if (author) setMetaTag('property', 'article:author', author);
    }

    // 7. Schema.org JSON-LD
    const scriptId = 'dynamic-seo-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (schemaData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schemaData);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    ogType,
    noIndex,
    publishedTime,
    modifiedTime,
    author,
    schemaData,
    lang,
  ]);

  return null;
};

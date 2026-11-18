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

const DEFAULT_TITLE = 'Dr. Pooja Awasthi – Vedic Numerology, Tarot & Healing';
const DEFAULT_DESC =
  'Get certified Vedic Numerology, Intuitive Tarot, Chakra Healing & Vastu guidance with Dr. Pooja Awasthi. Book your 1-on-1 session today.';
const DEFAULT_KEYWORDS =
  'Pooja Awasthi, Dr Pooja Awasthi, Vedic Numerology, Tarot Reading, Energy Healing, Chakra Cleansing, Vastu, Past Life Regression, Mulank, Bhagyank, Dehradun';
const DEFAULT_IMAGE = '/assets/aistudio/28_91acc32c.jpeg';

function toAbsoluteUrl(value: string, origin: string): string {
  if (!value) return origin || '/';
  if (/^https?:\/\//i.test(value)) return value;
  const normalized = value.startsWith('/') ? value : `/${value}`;
  return origin ? `${origin}${normalized}` : normalized;
}

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
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const currentHref =
      typeof window !== 'undefined'
        ? `${window.location.origin}${window.location.pathname}`
        : '/';

    // 1. Update HTML lang attribute & Document Title
    document.documentElement.lang = lang || 'en';
    document.title = title;

    const setMetaTag = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let meta = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrValue);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const setLinkTag = (rel: string, href: string, extraAttrs?: Record<string, string>) => {
      const attrSelector = extraAttrs?.hreflang
        ? `link[rel="${rel}"][hreflang="${extraAttrs.hreflang}"]`
        : `link[rel="${rel}"]`;
      let link = document.querySelector(attrSelector) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        if (extraAttrs) {
          Object.entries(extraAttrs).forEach(([k, v]) => link!.setAttribute(k, v));
        }
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', activeKeywords);
    setMetaTag('name', 'author', author);
    setMetaTag(
      'name',
      'robots',
      noIndex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );
    setMetaTag(
      'name',
      'googlebot',
      noIndex
        ? 'noindex, nofollow'
        : 'index, follow, max-snippet:-1, max-image-preview:large'
    );

    // 3. Canonical URL & Hreflang Alternates (dynamic origin per applet-seo spec)
    const finalCanonical = activeCanonical ? toAbsoluteUrl(activeCanonical, origin) : currentHref;
    const finalOgImage = toAbsoluteUrl(ogImage || DEFAULT_IMAGE, origin);

    setLinkTag('canonical', finalCanonical);
    setLinkTag('alternate', finalCanonical, { hreflang: 'en' });
    setLinkTag('alternate', finalCanonical, { hreflang: 'hi' });
    setLinkTag('alternate', finalCanonical, { hreflang: 'x-default' });

    // 4. OpenGraph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', finalCanonical);
    setMetaTag('property', 'og:type', activeType);
    setMetaTag('property', 'og:site_name', 'Dr. Pooja Awasthi Spiritual Guidance');
    setMetaTag('property', 'og:image', finalOgImage);
    setMetaTag('property', 'og:image:alt', title);
    setMetaTag('property', 'og:locale', lang === 'hi' ? 'hi_IN' : 'en_IN');
    setMetaTag('property', 'og:locale:alternate', lang === 'hi' ? 'en_IN' : 'hi_IN');

    // 5. Twitter / X Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:url', finalCanonical);
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', finalOgImage);

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
    activeKeywords,
    activeCanonical,
    ogImage,
    activeType,
    noIndex,
    activePublishedTime,
    activeModifiedTime,
    author,
    schemaData,
    lang,
  ]);

  // Apply CMS search-console verification meta tags once if configured
  useEffect(() => {
    let active = true;
    fetch('/api/seo/settings')
      .then((r) => (r.ok ? r.json() : null))
      .then((settings) => {
        if (!active || !settings) return;
        if (settings.googleVerificationCode) {
          const val = String(settings.googleVerificationCode).replace(/^google-site-verification=/i, '').trim();
          if (val) {
            let m = document.querySelector('meta[name="google-site-verification"]') as HTMLMetaElement | null;
            if (!m) {
              m = document.createElement('meta');
              m.name = 'google-site-verification';
              document.head.appendChild(m);
            }
            m.content = val;
          }
        }
        if (settings.bingVerificationCode) {
          const val = String(settings.bingVerificationCode).trim();
          if (val) {
            let m = document.querySelector('meta[name="msvalidate.01"]') as HTMLMetaElement | null;
            if (!m) {
              m = document.createElement('meta');
              m.name = 'msvalidate.01';
              document.head.appendChild(m);
            }
            m.content = val;
          }
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return null;
};

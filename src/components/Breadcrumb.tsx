import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name?: string;
  label?: string;
  url?: string;
  path?: string;
  onClick?: () => void;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  lang?: string;
  onNavigateHome?: () => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  lang = 'en',
  onNavigateHome,
}) => {
  const getItemName = (item: BreadcrumbItem) => item.label || item.name || '';
  const getItemUrl = (item: BreadcrumbItem) => item.path || item.url;
  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: lang === 'hi' ? 'होम' : 'Home',
        item: `${origin}/`,
      },
      ...items.map((item, idx) => {
        const itemUrl = getItemUrl(item);
        return {
          '@type': 'ListItem',
          position: idx + 2,
          name: getItemName(item),
          item: itemUrl
            ? `${origin}${itemUrl.startsWith('/') ? '' : '/'}${itemUrl}`
            : `${origin}${typeof window !== 'undefined' ? window.location.pathname : '/'}`,
        };
      }),
    ],
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="py-2.5 px-3.5 sm:px-4 rounded-xl bg-white border border-[#E6DFD3] shadow-2xs text-xs text-[#5D556A] flex items-center flex-wrap gap-1.5 sm:gap-2 max-w-full"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <button
        type="button"
        onClick={onNavigateHome || (() => { window.location.href = '/'; })}
        className="flex items-center gap-1.5 text-[#522B8A] hover:text-[#B48228] transition-colors font-semibold cursor-pointer"
      >
        <Home size={13} />
        <span>{lang === 'hi' ? 'होम' : 'Home'}</span>
      </button>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const itemName = getItemName(item);
        const itemUrl = getItemUrl(item);

        return (
          <React.Fragment key={index}>
            <ChevronRight size={12} className="text-[#B48228]/70 shrink-0" />
            {isLast ? (
              <span className="font-semibold text-[#1E162B] truncate max-w-xs sm:max-w-md" aria-current="page">
                {itemName}
              </span>
            ) : item.onClick ? (
              <button
                type="button"
                onClick={item.onClick}
                className="text-[#4A4356] hover:text-[#522B8A] transition-colors font-medium cursor-pointer"
              >
                {itemName}
              </button>
            ) : itemUrl ? (
              <a
                href={itemUrl}
                className="text-[#4A4356] hover:text-[#522B8A] transition-colors font-medium"
              >
                {itemName}
              </a>
            ) : (
              <span className="text-[#5D556A]">{itemName}</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

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

  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home',
        item: 'https://dr-pooja-awasthi-india.netlify.app/',
      },
      ...items.map((item, idx) => {
        const itemUrl = getItemUrl(item);
        return {
          '@type': 'ListItem',
          position: idx + 2,
          name: getItemName(item),
          item: itemUrl
            ? `https://dr-pooja-awasthi-india.netlify.app${itemUrl.startsWith('/') ? '' : '/'}${itemUrl}`
            : undefined,
        };
      }),
    ],
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-xs text-[#EAE2F4]/80 flex items-center flex-wrap gap-2"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <button
        type="button"
        onClick={onNavigateHome || (() => { window.location.href = '/'; })}
        className="flex items-center gap-1 text-[#D6B574] hover:text-white transition-colors font-medium"
      >
        <Home size={13} />
        <span>{lang === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}</span>
      </button>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const itemName = getItemName(item);
        const itemUrl = getItemUrl(item);

        return (
          <React.Fragment key={index}>
            <ChevronRight size={12} className="text-[#D6B574]/50 shrink-0" />
            {isLast ? (
              <span className="font-semibold text-white truncate max-w-xs sm:max-w-md" aria-current="page">
                {itemName}
              </span>
            ) : item.onClick ? (
              <button
                type="button"
                onClick={item.onClick}
                className="text-[#EAE2F4] hover:text-[#D6B574] transition-colors font-medium cursor-pointer"
              >
                {itemName}
              </button>
            ) : itemUrl ? (
              <a
                href={itemUrl}
                className="text-[#EAE2F4] hover:text-[#D6B574] transition-colors font-medium"
              >
                {itemName}
              </a>
            ) : (
              <span className="text-[#EAE2F4]/80">{itemName}</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

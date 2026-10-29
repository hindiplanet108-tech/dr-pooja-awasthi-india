import React, { useEffect, useState } from 'react';
import {
  FileText,
  Search,
  Filter,
  PlusCircle,
  Edit3,
  Trash2,
  Copy,
  ExternalLink,
  Eye,
  CheckCircle,
  Clock,
  Compass,
  Layers,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { CMSPage, getPages, deletePage, duplicatePage, updatePage } from '../../utils/cmsApi';

interface AdminPageListProps {
  onEditPage: (pageId: string) => void;
  onCreatePage: () => void;
  onPreviewPage: (slug: string) => void;
  lang?: string;
}

export const AdminPageList: React.FC<AdminPageListProps> = ({
  onEditPage,
  onCreatePage,
  onPreviewPage,
  lang = 'hi',
}) => {
  const [pages, setPages] = useState<CMSPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const fetchPages = async () => {
    try {
      setLoading(true);
      const data = await getPages(true); // include drafts
      setPages(data);
    } catch (err: any) {
      console.error('Error fetching pages:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handleTogglePublish = async (page: CMSPage) => {
    const nextStatus = page.status === 'published' ? 'draft' : 'published';
    try {
      setActionLoadingId(page.id);
      await updatePage(page.id, { status: nextStatus });
      await fetchPages();
    } catch (err: any) {
      alert(`स्थिति बदलने में त्रुटि: ${err.message}`);
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleToggleNav = async (page: CMSPage) => {
    try {
      setActionLoadingId(page.id);
      await updatePage(page.id, { showInNav: !page.showInNav });
      await fetchPages();
    } catch (err: any) {
      alert(`नेविगेशन अपडेट में त्रुटि: ${err.message}`);
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleDuplicate = async (id: string) => {
    try {
      setActionLoadingId(id);
      const cloned = await duplicatePage(id);
      await fetchPages();
      onEditPage(cloned.id);
    } catch (err: any) {
      alert(`प्रतिलिपि बनाने में त्रुटि: ${err.message}`);
    } finally {
      setActionLoadingId(null);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setActionLoadingId(id);
      await deletePage(id);
      setDeleteConfirmId(null);
      await fetchPages();
    } catch (err: any) {
      alert(`पेज हटाने में त्रुटि: ${err.message}`);
    } finally {
      setActionLoadingId(null);
    }
  };

  const categories = Array.from(new Set(pages.map((p) => p.category).filter(Boolean)));

  const filteredPages = pages.filter((page) => {
    const matchesSearch =
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (page.subtitle && page.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus =
      statusFilter === 'all' ? true : page.status === statusFilter;

    const matchesCategory =
      categoryFilter === 'all' ? true : page.category === categoryFilter;

    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-[#24152F]/80 border border-[#D6B574]/30 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D6B574]/20 border border-[#D6B574]/40 text-[#D6B574] text-xs font-semibold mb-1">
            <Layers size={12} />
            <span>{lang === 'hi' ? 'पेज प्रबंधन' : 'Pages Manager'}</span>
          </div>
          <h1 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            {lang === 'hi' ? 'वेबसाइट के सभी पेज' : 'All Website Pages'}
          </h1>
          <p className="text-xs text-[#EAE2F4]/70">
            {lang === 'hi'
              ? 'यहाँ से किसी भी पेज को संपादित करें, स्थिति बदलें या नया पेज जोड़ें।'
              : 'Create, edit, duplicate, and toggle publishing status of your website pages.'}
          </p>
        </div>

        <button
          onClick={onCreatePage}
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#D6B574] via-[#eedca2] to-[#D6B574] text-[#1c0f26] font-bold text-xs tracking-wide shadow-lg shadow-[#D6B574]/20 hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer self-start sm:self-auto"
        >
          <PlusCircle size={16} />
          <span>{lang === 'hi' ? 'नया पेज बनाएँ (New Page)' : 'Create New Page'}</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-[#24152F]/60 border border-[#D6B574]/20 flex flex-col sm:flex-row items-center gap-3">
        {/* Search Input */}
        <div className="relative flex-1 w-full">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D6B574]/60" />
          <input
            type="text"
            placeholder={lang === 'hi' ? 'पेज शीर्षक या URL slug से खोजें...' : 'Search pages by title or slug...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1c0f26]/80 border border-[#D6B574]/30 focus:border-[#D6B574] text-white text-xs placeholder-white/30 outline-hidden"
          />
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1 bg-[#1c0f26] p-1 rounded-xl border border-[#D6B574]/20 shrink-0 w-full sm:w-auto justify-center">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              statusFilter === 'all' ? 'bg-[#D6B574] text-[#1c0f26]' : 'text-white/70 hover:text-white'
            }`}
          >
            सभी ({pages.length})
          </button>
          <button
            onClick={() => setStatusFilter('published')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              statusFilter === 'published' ? 'bg-emerald-500 text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            लाइव ({pages.filter((p) => p.status === 'published').length})
          </button>
          <button
            onClick={() => setStatusFilter('draft')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              statusFilter === 'draft' ? 'bg-amber-500 text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            ड्राफ्ट ({pages.filter((p) => p.status === 'draft').length})
          </button>
        </div>

        {/* Category Dropdown */}
        {categories.length > 0 && (
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="px-3 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-white text-xs outline-hidden shrink-0 cursor-pointer w-full sm:w-auto"
          >
            <option value="all">सभी श्रेणियाँ (All Categories)</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Pages Cards Grid / List */}
      {loading ? (
        <div className="py-20 text-center text-xs text-[#EAE2F4]/50 flex flex-col items-center justify-center gap-3">
          <div className="w-6 h-6 border-2 border-[#D6B574] border-t-transparent rounded-full animate-spin" />
          <span>पेज सूची लोड हो रही है...</span>
        </div>
      ) : filteredPages.length === 0 ? (
        <div className="py-16 text-center rounded-3xl bg-[#24152F]/40 border border-white/5 p-8 space-y-3">
          <FileText size={32} className="mx-auto text-[#D6B574]/40" />
          <h3 className="font-cinzel text-base font-bold text-white">कोई पेज नहीं मिला</h3>
          <p className="text-xs text-[#EAE2F4]/60 max-w-sm mx-auto">
            खोज मापदंड के अनुसार कोई पेज मौजूद नहीं है। नया पेज बनाने के लिए ऊपर बटन दबाएँ।
          </p>
          <button
            onClick={onCreatePage}
            className="px-4 py-2 rounded-xl bg-[#D6B574] text-[#1c0f26] font-bold text-xs inline-flex items-center gap-1.5 cursor-pointer"
          >
            <PlusCircle size={14} />
            <span>नया पेज बनाएँ</span>
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredPages.map((page) => {
            const isActionLoading = actionLoadingId === page.id;
            return (
              <div
                key={page.id}
                className="p-5 rounded-2xl bg-[#24152F]/70 border border-[#D6B574]/20 hover:border-[#D6B574]/60 transition-all shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                {/* Left: Page Title, Slug, & Badges */}
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Status Badge */}
                    <button
                      onClick={() => handleTogglePublish(page)}
                      disabled={isActionLoading}
                      title="स्थिति बदलने के लिए क्लिक करें"
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-transform active:scale-95 cursor-pointer ${
                        page.status === 'published'
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
                          : 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30'
                      }`}
                    >
                      {page.status === 'published' ? <CheckCircle size={10} /> : <Clock size={10} />}
                      <span>{page.status === 'published' ? 'लाइव प्रकाशित' : 'ड्राफ्ट (Draft)'}</span>
                    </button>

                    {/* Category */}
                    <span className="px-2 py-0.5 rounded-md bg-white/5 text-[#D6B574] text-[10px] font-semibold border border-[#D6B574]/20">
                      {page.category || 'General'}
                    </span>

                    {/* Show in Nav Badge */}
                    <button
                      onClick={() => handleToggleNav(page)}
                      disabled={isActionLoading}
                      title="नेविगेशन मेन्यू में दिखाने / छिपाने के लिए क्लिक करें"
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-semibold transition-all cursor-pointer ${
                        page.showInNav
                          ? 'bg-[#D6B574]/20 text-[#D6B574] border border-[#D6B574]/40'
                          : 'bg-white/5 text-white/40 border border-white/5 hover:text-white/70'
                      }`}
                    >
                      <Compass size={10} />
                      <span>{page.showInNav ? 'मेन्यू में शामिल' : 'मेन्यू में नहीं'}</span>
                    </button>

                    {/* Blocks count */}
                    <span className="text-[10px] text-[#EAE2F4]/50">
                      {(page.blocks || []).length} ब्लॉक्स
                    </span>
                  </div>

                  <h3 className="font-cinzel text-base font-bold text-white group-hover:text-[#D6B574] transition-colors truncate">
                    {page.title}
                  </h3>

                  {page.subtitle && (
                    <p className="text-xs text-[#EAE2F4]/70 line-clamp-1">
                      {page.subtitle}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#EAE2F4]/60 pt-0.5">
                    <span className="font-mono text-[#D6B574]/90 bg-[#1c0f26] px-2 py-0.5 rounded border border-[#D6B574]/20">
                      /pages/{page.slug}
                    </span>
                    <span>
                      संपादित:{' '}
                      {new Date(page.updatedAt).toLocaleDateString('hi-IN', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 self-end md:self-center shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-white/5 w-full md:w-auto justify-end">
                  <button
                    onClick={() => onPreviewPage(page.slug)}
                    className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#D6B574] text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                    title="पेज देखें / Live Preview"
                  >
                    <Eye size={14} />
                    <span>देखें</span>
                  </button>

                  <button
                    onClick={() => onEditPage(page.id)}
                    className="px-3.5 py-2 rounded-xl bg-[#D6B574] hover:brightness-110 text-[#1c0f26] text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-[#D6B574]/20"
                    title="पेज संपादित करें / Edit"
                  >
                    <Edit3 size={14} />
                    <span>एडिट करें</span>
                  </button>

                  <button
                    onClick={() => handleDuplicate(page.id)}
                    disabled={isActionLoading}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
                    title="प्रतिलिपि बनाएँ / Duplicate Page"
                  >
                    <Copy size={15} />
                  </button>

                  <button
                    onClick={() => setDeleteConfirmId(page.id)}
                    disabled={isActionLoading}
                    className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all cursor-pointer"
                    title="हटाएँ / Delete Page"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fade-in">
          <div className="w-full max-w-sm rounded-3xl bg-[#24152F] border border-red-500/40 p-6 shadow-2xl text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
              <AlertCircle size={24} />
            </div>
            <div>
              <h3 className="font-cinzel text-lg font-bold text-white">पेज हटाएँ?</h3>
              <p className="text-xs text-[#EAE2F4]/70 mt-1">
                क्या आप वाकई इस पेज को हमेशा के लिए हटाना चाहते हैं? यह क्रिया वापस नहीं ली जा सकती।
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setDeleteConfirmId(null)}
                className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-semibold text-xs cursor-pointer"
              >
                रद्द करें
              </button>
              <button
                onClick={() => handleDelete(deleteConfirmId)}
                className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs cursor-pointer shadow-lg shadow-red-600/30"
              >
                हाँ, हटाएँ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

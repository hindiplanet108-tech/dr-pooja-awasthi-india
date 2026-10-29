import React, { useEffect, useState, useRef } from 'react';
import {
  Image as ImageIcon,
  Video,
  Upload,
  Search,
  Trash2,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
  Filter,
  X,
  Play,
  FileCheck,
  AlertCircle
} from 'lucide-react';
import { MediaItem, getMediaList, uploadMediaFile, deleteMediaItem, updateMediaMetadata } from '../../utils/cmsApi';

interface AdminMediaLibraryProps {
  isPicker?: boolean;
  onSelectMedia?: (url: string) => void;
  onClosePicker?: () => void;
  lang?: string;
}

export const AdminMediaLibrary: React.FC<AdminMediaLibraryProps> = ({
  isPicker = false,
  onSelectMedia,
  onClosePicker,
  lang = 'hi',
}) => {
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'image' | 'video'>('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [editAltText, setEditAltText] = useState('');
  const [editCaption, setEditCaption] = useState('');
  const [savingMetadata, setSavingMetadata] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchMedia = async () => {
    try {
      setLoading(true);
      const data = await getMediaList();
      setMediaList(data);
    } catch (err: any) {
      console.error('Error fetching media list:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const handleFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        await uploadMediaFile(file, file.name);
      }
      await fetchMedia();
    } catch (err: any) {
      alert(`अपलोड में त्रुटि: ${err.message}`);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('क्या आप इस मीडिया फाइल को हटाना चाहते हैं?')) return;
    try {
      await deleteMediaItem(id);
      setSelectedMedia(null);
      await fetchMedia();
    } catch (err: any) {
      alert(`हटाने में त्रुटि: ${err.message}`);
    }
  };

  const handleCopy = (url: string) => {
    const fullUrl = url.startsWith('http') ? url : `${window.location.origin}${url}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2500);
  };

  const handleOpenDetail = (item: MediaItem) => {
    setSelectedMedia(item);
    setEditAltText(item.altText || '');
    setEditCaption(item.caption || '');
  };

  const handleSaveMetadata = async () => {
    if (!selectedMedia) return;
    try {
      setSavingMetadata(true);
      const updated = await updateMediaMetadata(selectedMedia.id, {
        altText: editAltText,
        caption: editCaption,
      });
      setSelectedMedia(updated);
      await fetchMedia();
    } catch (err: any) {
      alert(`सहेजने में त्रुटि: ${err.message}`);
    } finally {
      setSavingMetadata(false);
    }
  };

  const formatBytes = (bytes: number) => {
    if (!bytes || bytes === 0) return '0 KB';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const filteredList = mediaList.filter((item) => {
    const matchesSearch =
      item.filename.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.altText && item.altText.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.caption && item.caption.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType = typeFilter === 'all' ? true : item.type === typeFilter;

    return matchesSearch && matchesType;
  });

  return (
    <div className={`space-y-6 ${isPicker ? 'p-6 bg-[#1c0f26]' : 'animate-fade-in'}`}>
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-[#24152F]/80 border border-[#D6B574]/30 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D6B574]/20 border border-[#D6B574]/40 text-[#D6B574] text-xs font-semibold mb-1">
            <Sparkles size={12} />
            <span>{lang === 'hi' ? 'स्थाई क्लाउड स्टोरेज' : 'Persistent Storage'}</span>
          </div>
          <h1 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            {lang === 'hi' ? 'मीडिया लाइब्रेरी (फ़ोटो एवं वीडियो)' : 'Media Library (Photos & Videos)'}
          </h1>
          <p className="text-xs text-[#EAE2F4]/70">
            {lang === 'hi'
              ? 'यहाँ अपने सभी चित्र, प्रशस्ति पत्र व वीडियो अपलोड और सुरक्षित प्रबंधित करें।'
              : 'Upload and manage images and videos stored persistently on the server.'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {isPicker && onClosePicker && (
            <button
              onClick={onClosePicker}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
            >
              <X size={18} />
            </button>
          )}

          <label className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#D6B574] via-[#eedca2] to-[#D6B574] text-[#1c0f26] font-bold text-xs tracking-wide shadow-lg shadow-[#D6B574]/20 hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer">
            <Upload size={16} />
            <span>{uploading ? 'अपलोड हो रहा है...' : lang === 'hi' ? 'नई फाइल अपलोड करें' : 'Upload Files'}</span>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,video/mp4,video/webm"
              onChange={(e) => handleFileUpload(e.target.files)}
              className="hidden"
              disabled={uploading}
            />
          </label>
        </div>
      </div>

      {/* Drag & Drop Upload Zone */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`p-6 sm:p-8 rounded-3xl border-2 border-dashed transition-all text-center space-y-2 cursor-pointer ${
          dragActive
            ? 'border-[#D6B574] bg-[#D6B574]/15 scale-[1.01]'
            : 'border-[#D6B574]/30 hover:border-[#D6B574]/60 bg-[#24152F]/40'
        }`}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="w-12 h-12 mx-auto rounded-2xl bg-[#D6B574]/15 border border-[#D6B574]/30 flex items-center justify-center text-[#D6B574]">
          <Upload size={22} className={uploading ? 'animate-bounce' : ''} />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">
            {uploading
              ? 'फाइलें सर्वर पर सुरक्षित सहेजी जा रही हैं...'
              : lang === 'hi'
              ? 'यहाँ फाइलें ड्रैग & ड्रॉप करें अथवा ब्राउज करने के लिए क्लिक करें'
              : 'Drag & drop photos/videos here or click to browse'}
          </p>
          <p className="text-xs text-[#EAE2F4]/60 mt-1">
            समर्थित प्रारूप: JPG, PNG, WEBP, SVG, MP4, WEBM (अधिकतम 50MB)
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-[#24152F]/60 border border-[#D6B574]/20 flex flex-col sm:flex-row items-center gap-3">
        {/* Search Input */}
        <div className="relative flex-1 w-full">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D6B574]/60" />
          <input
            type="text"
            placeholder={lang === 'hi' ? 'फाइल नाम, शीर्षक या ऑल्ट टेक्स्ट से खोजें...' : 'Search media by filename, alt text...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1c0f26]/80 border border-[#D6B574]/30 focus:border-[#D6B574] text-white text-xs placeholder-white/30 outline-hidden"
          />
        </div>

        {/* Type Filter Tabs */}
        <div className="flex items-center gap-1 bg-[#1c0f26] p-1 rounded-xl border border-[#D6B574]/20 shrink-0 w-full sm:w-auto justify-center">
          <button
            onClick={() => setTypeFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              typeFilter === 'all' ? 'bg-[#D6B574] text-[#1c0f26]' : 'text-white/70 hover:text-white'
            }`}
          >
            सभी ({mediaList.length})
          </button>
          <button
            onClick={() => setTypeFilter('image')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
              typeFilter === 'image' ? 'bg-sky-500 text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            <ImageIcon size={12} />
            <span>फ़ोटो ({mediaList.filter((m) => m.type === 'image').length})</span>
          </button>
          <button
            onClick={() => setTypeFilter('video')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
              typeFilter === 'video' ? 'bg-purple-500 text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            <Video size={12} />
            <span>वीडियो ({mediaList.filter((m) => m.type === 'video').length})</span>
          </button>
        </div>
      </div>

      {/* Media Thumbnails Grid */}
      {loading ? (
        <div className="py-20 text-center text-xs text-[#EAE2F4]/50 flex flex-col items-center justify-center gap-3">
          <div className="w-6 h-6 border-2 border-[#D6B574] border-t-transparent rounded-full animate-spin" />
          <span>मीडिया लोड हो रहा है...</span>
        </div>
      ) : filteredList.length === 0 ? (
        <div className="py-16 text-center rounded-3xl bg-[#24152F]/40 border border-white/5 p-8 space-y-3">
          <ImageIcon size={32} className="mx-auto text-[#D6B574]/40" />
          <h3 className="font-cinzel text-base font-bold text-white">कोई मीडिया फाइल नहीं मिली</h3>
          <p className="text-xs text-[#EAE2F4]/60 max-w-sm mx-auto">
            खोज मापदंड के अनुसार कोई फाइल नहीं मिली। ऊपर दिए गए बटन से नई फोटो या वीडियो अपलोड करें।
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredList.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (isPicker && onSelectMedia) {
                  onSelectMedia(item.url);
                } else {
                  handleOpenDetail(item);
                }
              }}
              className="group rounded-2xl bg-[#24152F]/70 border border-[#D6B574]/20 hover:border-[#D6B574] overflow-hidden flex flex-col justify-between transition-all cursor-pointer shadow-md hover:shadow-2xl relative"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-square bg-[#160b20] flex items-center justify-center overflow-hidden">
                {item.type === 'video' ? (
                  <div className="w-full h-full flex flex-col items-center justify-center p-2 relative">
                    <div className="w-10 h-10 rounded-full bg-purple-600/30 border border-purple-500/50 flex items-center justify-center text-purple-300">
                      <Play size={18} />
                    </div>
                    <span className="text-[10px] text-white/60 font-mono mt-1 max-w-[90%] truncate">
                      {item.filename}
                    </span>
                  </div>
                ) : (
                  <img
                    src={item.url}
                    alt={item.altText || item.filename}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('pooja_portrait')) {
                        target.src = '/assets/awards/pooja_portrait.jpeg';
                      }
                    }}
                  />
                )}

                {/* Badge for Type */}
                <span className="absolute top-2 left-2 px-1.5 py-0.5 rounded-md bg-black/60 backdrop-blur-xs text-[9px] font-bold text-white border border-white/20 uppercase">
                  {item.type}
                </span>

                {/* Picker Action Overlay */}
                {isPicker && (
                  <div className="absolute inset-0 bg-[#D6B574]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-[#1c0f26] font-bold text-xs">
                    <span>चुनें / Select</span>
                  </div>
                )}
              </div>

              {/* Bottom metadata */}
              <div className="p-2.5 bg-[#1c0f26]/90 border-t border-white/5 space-y-0.5">
                <p className="text-[11px] font-medium text-white truncate" title={item.filename}>
                  {item.filename}
                </p>
                <div className="flex items-center justify-between text-[10px] text-[#EAE2F4]/50">
                  <span>{formatBytes(item.sizeBytes)}</span>
                  <span>{item.type === 'video' ? 'MP4' : 'IMG'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Media Detail & Edit Modal */}
      {selectedMedia && !isPicker && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-2xl rounded-3xl bg-[#24152F] border border-[#D6B574]/40 p-6 sm:p-8 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
            >
              <X size={18} />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] uppercase font-bold text-[#D6B574] tracking-wider">
                मीडिया विवरण एवं पूर्वावलोकन
              </span>
              <h2 className="font-cinzel text-lg sm:text-xl font-bold text-white truncate">
                {selectedMedia.filename}
              </h2>
            </div>

            {/* Media Player or Large Image */}
            <div className="rounded-2xl overflow-hidden bg-[#160b20] border border-[#D6B574]/30 flex items-center justify-center max-h-80">
              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.url}
                  controls
                  className="w-full max-h-80 object-contain"
                />
              ) : (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.altText || selectedMedia.filename}
                  className="w-full max-h-80 object-contain"
                />
              )}
            </div>

            {/* Copy Permanent URL Field */}
            <div>
              <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1">
                स्थाई मीडिया URL (Direct URL)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={selectedMedia.url}
                  className="flex-1 px-3 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 font-mono text-xs text-white outline-hidden select-all"
                />
                <button
                  onClick={() => handleCopy(selectedMedia.url)}
                  className="px-4 py-2.5 rounded-xl bg-[#D6B574] hover:brightness-110 text-[#1c0f26] text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
                >
                  {copiedUrl === selectedMedia.url ? (
                    <>
                      <Check size={14} />
                      <span>कॉपी हुआ!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>कॉपी करें</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Edit Alt Text and Caption */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1">
                  ऑल्ट टेक्स्ट (Alt Text - SEO)
                </label>
                <input
                  type="text"
                  value={editAltText}
                  onChange={(e) => setEditAltText(e.target.value)}
                  placeholder="चित्र का विवरण (दृष्टिबाधित व एसईओ हेतु)"
                  className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1">
                  कैप्शन (Caption)
                </label>
                <input
                  type="text"
                  value={editCaption}
                  onChange={(e) => setEditCaption(e.target.value)}
                  placeholder="चित्र के नीचे दिखने वाला शीर्षक"
                  className="w-full px-3 py-2 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <button
                onClick={() => handleDelete(selectedMedia.id)}
                className="px-4 py-2 rounded-xl bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 text-red-300 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <Trash2 size={14} />
                <span>फाइल हटाएँ (Delete)</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-semibold cursor-pointer"
                >
                  बंद करें
                </button>
                <button
                  onClick={handleSaveMetadata}
                  disabled={savingMetadata}
                  className="px-5 py-2 rounded-xl bg-[#D6B574] hover:brightness-110 text-[#1c0f26] text-xs font-bold flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                >
                  <FileCheck size={14} />
                  <span>{savingMetadata ? 'सहेज रहे हैं...' : 'बदलाव सहेजें'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

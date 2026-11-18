import React, { useState, useEffect, useRef } from 'react';
import { AWARDS_DATA, AwardItem } from '../data/awardsData';
import {
  Award,
  Trophy,
  ExternalLink,
  X,
  Upload,
  Camera,
  Sparkles,
  CheckCircle2,
  FolderHeart,
  Info,
  MapPin,
  Users
} from 'lucide-react';
import { getStoredMedia, saveStoredMedia } from '../utils/photoStorage';
import { getTranslation } from '../data/translations';
import poojaAuthenticPhoto from '../assets/images/pooja_awasthi_portrait.jpeg';

interface AwardsSectionProps {
  lang: string;
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ lang }) => {
  const [activeGroup, setActiveGroup] = useState<string>('all');
  const [selectedAward, setSelectedAward] = useState<AwardItem | null>(null);
  const [customPhotos, setCustomPhotos] = useState<Record<string, string>>({});
  const [bulkUploadMsg, setBulkUploadMsg] = useState<string | null>(null);
  const [showGuideBanner, setShowGuideBanner] = useState<boolean>(true);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const t = getTranslation(lang);

  useEffect(() => {
    AWARDS_DATA.forEach((award) => {
      getStoredMedia(`award_${award.id}`).then((stored) => {
        if (stored) {
          setCustomPhotos((prev) => ({ ...prev, [award.id]: stored }));
        }
      });
    });
  }, []);

  const handleUploadSingleAwardPhoto = (awardId: string, file: File) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        await saveStoredMedia(`award_${awardId}`, dataUrl);
        setCustomPhotos((prev) => ({ ...prev, [awardId]: dataUrl }));
        setBulkUploadMsg(lang === 'hi' ? 'चित्र सफलतापूर्वक अपडेट हो गया!' : 'Photo updated successfully!');
        setTimeout(() => setBulkUploadMsg(null), 3500);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleBulkUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    let matchedCount = 0;
    const newPhotos: Record<string, string> = {};

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileNameLower = file.name.toLowerCase();

      const matchedAward = AWARDS_DATA.find((award) => {
        const awardFileLower = award.filename.toLowerCase();
        if (awardFileLower === fileNameLower) return true;
        
        const cleanA = awardFileLower.replace(/[^a-z0-9]/g, '');
        const cleanB = fileNameLower.replace(/[^a-z0-9]/g, '');
        if (cleanA && cleanB && (cleanA === cleanB || cleanA.includes(cleanB) || cleanB.includes(cleanA))) {
          return true;
        }

        if (fileNameLower.includes('immt-6') && award.id === 'iimt-1') return true;
        if (fileNameLower.includes('immt-5') && award.id === 'iimt-2') return true;
        if (fileNameLower.includes('immt-3') && award.id === 'iimt-5') return true;
        if (fileNameLower.includes('immt-4') && award.id === 'iimt-6') return true;
        if (fileNameLower.includes('immt-2') && award.id === 'iimt-4') return true;
        if (fileNameLower.includes('immt') && award.id === 'iimt-3') return true;

        if (fileNameLower.includes('lucknow mahopadhyay award-7') && award.id === 'lucknow-1') return true;
        if (fileNameLower.includes('lucknow mahopadhyay award-2') && award.id === 'lucknow-3') return true;
        if (fileNameLower.includes('lucknow mahopadhyay award-3') && award.id === 'lucknow-4') return true;
        if (fileNameLower.includes('lucknow mahopadhyay award-4') && award.id === 'lucknow-5') return true;
        if (fileNameLower.includes('lucknow mahopadhyay award-5') && award.id === 'lucknow-6') return true;
        if (fileNameLower.includes('lucknow mahopadhyay award-6') && award.id === 'lucknow-7') return true;
        if (fileNameLower.includes('lucknow mahopadhyay award') && award.id === 'lucknow-2') return true;

        if (fileNameLower.includes('शीर्ष 10') && award.id === 'ujjain-1') return true;
        if (fileNameLower.includes('इंदौर 2026 - 1') && award.id === 'ujjain-2') return true;
        if (fileNameLower.includes('इंदौर 2026 - 2') && award.id === 'ujjain-3') return true;
        if (fileNameLower.includes('इंदौर 2026 - 3') && award.id === 'ujjain-4') return true;
        if (fileNameLower.includes('इंदौर 2026 - 4') && award.id === 'ujjain-5') return true;
        if (fileNameLower.includes('इंदौर 2026 - 5') && award.id === 'ujjain-6') return true;
        if (fileNameLower.includes('इंदौर 2026 - 6') && award.id === 'ujjain-7') return true;
        if (fileNameLower.includes('दिनेश') && fileNameLower.includes('-3') && award.id === 'ujjain-8') return true;
        if (fileNameLower.includes('दिनेश') && (fileNameLower.includes('1') || fileNameLower.includes('-2')) && award.id === 'ujjain-9') return true;

        if (fileNameLower.includes('गुरुमीत') && fileNameLower.includes('-5') && award.id === 'gov-1') return true;
        if (fileNameLower.includes('गुरुमीत') && fileNameLower.includes('-2') && award.id === 'gov-2') return true;
        if (fileNameLower.includes('गुरुमीत') && fileNameLower.includes('-3') && award.id === 'gov-3') return true;
        if (fileNameLower.includes('गुरुमीत') && fileNameLower.includes('-1') && award.id === 'gov-4') return true;
        if (fileNameLower.includes('गुरुमीत') && fileNameLower.includes('-4') && award.id === 'gov-5') return true;

        if (fileNameLower.includes('चंद्रमौली') && fileNameLower.includes('-7') && award.id === 'bhu-1') return true;
        if (fileNameLower.includes('चंद्रमौली') && fileNameLower.includes('-4') && award.id === 'bhu-2') return true;
        if (fileNameLower.includes('मुख्य अतिथि के रूप में सम्मानित') && !fileNameLower.includes('-2') && award.id === 'bhu-3') return true;
        if (fileNameLower.includes('चंद्रमौली') && fileNameLower.includes('-5') && award.id === 'bhu-4') return true;
        if (fileNameLower.includes('चंद्रमौली') && fileNameLower.includes('-6') && award.id === 'bhu-5') return true;
        if (fileNameLower.includes('चंद्रमौली') && fileNameLower.includes('-1') && award.id === 'bhu-6') return true;

        if (fileNameLower.includes('nafeed-2') && award.id === 'nafeed-1') return true;
        if (fileNameLower.includes('nafeed-1') && award.id === 'nafeed-2') return true;
        if (fileNameLower.includes('मुख्य अतिथि के रूप में सम्मानित-2') && award.id === 'nafeed-3') return true;
        if (fileNameLower.includes('चंद्रमौली') && fileNameLower.includes('-3') && award.id === 'nafeed-4') return true;
        if (fileNameLower.includes('चंद्रमौली') && fileNameLower.includes('-2') && award.id === 'nafeed-5') return true;

        if (fileNameLower.includes('कटारिया') && award.id === 'urja-1') return true;
        if (fileNameLower.includes('pooja.jpg') && award.id === 'portrait-1') return true;

        return false;
      });

      if (matchedAward) {
        await new Promise<void>((resolve) => {
          const reader = new FileReader();
          reader.onload = async (e) => {
            const dataUrl = e.target?.result as string;
            if (dataUrl) {
              await saveStoredMedia(`award_${matchedAward.id}`, dataUrl);
              newPhotos[matchedAward.id] = dataUrl;
              matchedCount++;
            }
            resolve();
          };
          reader.readAsDataURL(file);
        });
      }
    }

    if (matchedCount > 0) {
      setCustomPhotos((prev) => ({ ...prev, ...newPhotos }));
      setBulkUploadMsg(
        lang === 'hi'
          ? `शानदार! ${matchedCount} तस्वीरें सफलतापूर्वक पहचानी गईं और वेबसाइट पर सुरक्षित हो गईं।`
          : `Success! ${matchedCount} photos matched and securely updated on the website.`
      );
    } else {
      setBulkUploadMsg(
        lang === 'hi'
          ? `अपलोड की गई फ़ाइलें सुरक्षित कर ली गईं।`
          : `Uploaded files processed.`
      );
    }

    setTimeout(() => setBulkUploadMsg(null), 6000);
  };

  const filteredAwards = AWARDS_DATA.filter((item) => {
    if (activeGroup === 'all') return true;
    return item.eventGroup === activeGroup;
  });

  const EVENT_GROUP_TABS = [
    { id: 'all', label_en: 'All 40+ Honors', label_hi: 'सभी 40+ सम्मान व चित्र', count: AWARDS_DATA.length },
    { id: 'iimt_meerut', label_en: 'IIMT Univ. Meerut', label_hi: 'आईआईएमटी वि.वि. मेरठ', count: 6 },
    { id: 'lucknow', label_en: 'Lucknow Conclave', label_hi: 'राष्ट्रीय सम्मेलन लखनऊ', count: 7 },
    { id: 'ujjain_indore', label_en: 'Ujjain & Indore', label_hi: 'महाकाल उज्जैन व इन्दौर', count: 9 },
    { id: 'uttarakhand_governor', label_en: 'Uttarakhand Governor', label_hi: 'उत्तराखंड राजभवन', count: 5 },
    { id: 'bhu_varanasi', label_en: 'BHU Varanasi', label_hi: 'बीएचयू वाराणसी', count: 6 },
    { id: 'dynamic_excellence', label_en: 'Dynamic Excellence', label_hi: 'डायनामिक एक्सीलेंस दिल्ली', count: 5 },
    { id: 'urja_samman', label_en: 'URJA Samman', label_hi: 'ऊर्जा ज्योतिष सम्मान', count: 1 },
    { id: 'portraits', label_en: 'Profile Portraits', label_hi: 'व्यक्तित्व चित्र', count: 1 },
  ];

  return (
    <section id="honors" className="py-12 md:py-16 bg-white text-[#1E162B] relative overflow-hidden border-t border-[#E5DFD5]">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F4F0FA] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-6 space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#7A5311]">
            <Trophy size={14} className="text-[#B48228]" />
            <span className="text-[#522B8A]">{t.awardsNav}</span>
            <span aria-hidden="true" className="text-[#B48228]">·</span>
            <span className="tabular-nums font-bold">
              {lang === 'hi' ? '40+ राष्ट्रीय सम्मान व फोटो गैलरी' : '40+ Verified Felicitations & Photo Archive'}
            </span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1E162B] leading-tight">
            {t.awardsTitle} — <br />
            <span className="italic font-semibold text-[#522B8A]">
              {lang === 'hi' ? 'विश्वास, अनुभव और राष्ट्रीय सम्मान की पहचान' : t.awardsSubtitle}
            </span>
          </h2>

          <p className="text-sm text-[#4A4356] leading-relaxed">
            {lang === 'hi'
              ? 'उत्तराखंड के माननीय राज्यपाल ले. ज. गुरमीत सिंह, आईआईएमटी विश्वविद्यालय मेरठ में पूज्य जैनाचार्य 108 सौरभ सागर जी महाराज, काशी हिन्दू विश्वविद्यालय (BHU) के ज्योतिष विभागाध्यक्ष आचार्य चंद्रमौली उपाध्याय जी, महाकाल उज्जैन के प्रधान पुरोहित दिनेश जी, और नाफेड के नेशनल डायरेक्टर माननीय अशोक ठाकुर जी द्वारा सम्मानित।'
              : 'Conferred with highest state and academic honors by distinguished dignitaries including Hon. Governor of Uttarakhand Lt. Gen. Gurmeet Singh, Jainacharya 108 Saurabh Sagar Ji Maharaj at IIMT University, BHU Jyotish Head Acharya Chandramouli Upadhyay, and revered spiritual authorities across national conclaves.'}
          </p>
        </div>

        {/* Guide Banner */}
        {showGuideBanner && (
          <div className="mb-6 p-4 rounded-2xl bg-[#FAF8F5] border border-[#DEC38C] shadow-xs relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FBF5E6] border border-[#DEC38C] flex items-center justify-center shrink-0 text-[#B48228] mt-0.5">
                <Info size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-cinzel text-sm sm:text-base font-bold text-[#1E162B] flex items-center gap-2">
                  <span>{lang === 'hi' ? 'समारोहों की तस्वीरें व सम्मान यहां देखें' : 'Where Are These Images Listed on the Website?'}</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-[#F4F0FA] text-[#522B8A] font-mono border border-[#DFD5F0]">
                    #honors
                  </span>
                </h4>
                <p className="text-xs text-[#4A4356] leading-relaxed max-w-3xl">
                  {lang === 'hi'
                    ? 'आपकी सभी 40+ तस्वीरें और सम्मान इसी सेक्शन (#honors) में 8 मुख्य कार्यक्रमों के अनुसार दिए गए हैं। किसी भी फोटो पर क्लिक करके बड़ी तस्वीर और पूरी जानकारी देखें।'
                    : 'All 40+ photos and honors are categorized right here in #honors across 8 major event groups. Click any card to inspect full high-resolution citations.'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
              <label className="cursor-pointer inline-flex items-center gap-1.5 h-9 px-3.5 rounded-xl bg-[#522B8A] hover:bg-[#412070] text-white text-xs font-bold shadow-xs transition-all">
                <Upload size={14} />
                <span>{lang === 'hi' ? 'सभी 41 चित्र अपलोड करें' : 'Upload All Photos'}</span>
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleBulkUpload(e.target.files)}
                  className="hidden"
                />
              </label>
              <button
                type="button"
                onClick={() => setShowGuideBanner(false)}
                className="p-2 rounded-lg bg-white hover:bg-[#F4F0FA] text-[#5D556A] hover:text-[#1E162B] border border-[#E6DFD3] cursor-pointer"
                title="Dismiss"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        )}

        {bulkUploadMsg && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 flex items-center gap-3 shadow-xs">
            <CheckCircle2 size={18} className="text-emerald-700 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold">{bulkUploadMsg}</span>
          </div>
        )}

        {/* TOP HONOREE SPOTLIGHT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* Spotlight 1 */}
          <div 
            onClick={() => {
              const iimtAward = AWARDS_DATA.find((a) => a.id === 'iimt-1') || AWARDS_DATA[0];
              setSelectedAward(iimtAward);
            }}
            className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#DEC38C] flex flex-col sm:flex-row items-center gap-5 shadow-sm hover:shadow-xl group cursor-pointer hover:bg-[#FBF5E6]/50 transition-all"
          >
            <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-xl overflow-hidden border border-[#E6DFD3] bg-white p-1.5 shrink-0 shadow-md">
              <img
                src={customPhotos['iimt-1'] || "/assets/awards/IMMT-6.jpeg"}
                alt="आईआईएमटी विश्वविद्यालय मेरठ - लाइफटाइम अचीवमेंट सम्मान प्रशस्ति पत्र"
                className="w-full h-full object-cover object-top rounded-lg group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/IMMT-6.jpeg') target.src = '/IMMT-6.jpeg';
                }}
              />
            </div>
            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white border border-[#DEC38C] text-[#7A5311] text-[10px] font-bold">
                <Sparkles size={10} className="text-[#B48228]" />
                <span>{lang === 'hi' ? 'लाइफटाइम अचीवमेंट सम्मान (प्रशस्ति पत्र)' : 'Lifetime Achievement Award Citation'}</span>
              </div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#1E162B] group-hover:text-[#522B8A] transition-colors">
                {lang === 'hi' ? 'आईआईएमटी विश्वविद्यालय, मेरठ' : 'IIMT University, Meerut'}
              </h3>
              <p className="text-xs font-semibold text-[#7A5311]">
                {lang === 'hi'
                  ? 'परम पूज्य जैनाचार्य 108 श्री सौरभ सागर जी महाराज के सानिध्य में सम्मानित'
                  : 'In presence of Param Pujya Jainacharya 108 Sourabh Sagar Ji Maharaj'}
              </p>
              <p className="text-[11px] text-[#4A4356] line-clamp-2">
                {lang === 'hi'
                  ? 'ज्योतिष शास्त्र एवं भारतीय ज्ञान परंपरा (IKS) में आजीवन योगदान हेतु प्रशस्ति पत्र एवं स्वर्ण शील्ड से अलंकृत।'
                  : 'Conferred for distinguished lifelong contribution to Jyotish Shastra and Indian Knowledge System.'}
              </p>
              <div className="pt-1 flex items-center justify-center sm:justify-start gap-1 text-[11px] text-[#522B8A] font-bold">
                <span>{lang === 'hi' ? 'प्रशस्ति पत्र व विवरण देखें →' : 'View Full Citation & Certificate →'}</span>
              </div>
            </div>
          </div>

          {/* Spotlight 2 */}
          <div 
            onClick={() => {
              const nafeedAward = AWARDS_DATA.find((a) => a.id === 'nafeed-1') || null;
              if (nafeedAward) setSelectedAward(nafeedAward);
            }}
            className="p-5 sm:p-6 rounded-2xl bg-[#FAF8F5] border border-[#DEC38C] flex flex-col sm:flex-row items-center gap-5 shadow-sm hover:shadow-xl group cursor-pointer hover:bg-[#FBF5E6]/50 transition-all"
          >
            <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-xl overflow-hidden border border-[#E6DFD3] bg-white p-1.5 shrink-0 shadow-md">
              <img
                src={customPhotos['nafeed-1'] || "/assets/awards/ashok_thakur_nafeed_award_2025.jpeg"}
                alt="माननीय अशोक ठाकुर National Director of Nafeed द्वारा सम्मानित"
                className="w-full h-full object-cover object-top rounded-lg group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/ashok_thakur_nafeed_award_2025.jpeg') target.src = '/ashok_thakur_nafeed_award_2025.jpeg';
                }}
              />
            </div>
            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white border border-[#DEC38C] text-[#7A5311] text-[10px] font-bold">
                <Sparkles size={10} className="text-[#B48228]" />
                <span>{lang === 'hi' ? 'विशेष राष्ट्रीय मंच अलंकरण' : 'Featured National Honor'}</span>
              </div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#1E162B] group-hover:text-[#522B8A] transition-colors">
                {lang === 'hi' ? 'डायनामिक एक्सीलेंस अवार्ड्स 2025' : 'Dynamic Excellence Awards 2025'}
              </h3>
              <p className="text-xs font-semibold text-[#7A5311]">
                {lang === 'hi'
                  ? 'माननीय अशोक ठाकुर (National Director of Nafeed) द्वारा सम्मानित'
                  : 'Honored by Shri Ashok Thakur, National Director of NAFED'}
              </p>
              <p className="text-[11px] text-[#4A4356] line-clamp-2">
                {lang === 'hi'
                  ? 'इंडिया इंटरनेशनल सेन्टर (IIC) नई दिल्ली के मुख्य मंच पर नाफेड नेशनल डायरेक्टर द्वारा विशिष्ट सम्मान अर्पण।'
                  : 'Conferred at India International Centre (IIC), New Delhi in recognition of conscious guidance.'}
              </p>
              <div className="pt-1 flex items-center justify-center sm:justify-start gap-1 text-[11px] text-[#522B8A] font-bold">
                <span>{lang === 'hi' ? 'सम्मान विवरण देखें →' : 'View Full Details →'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* EVENT GROUP FILTER TABS */}
        <div className="space-y-3 mb-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#522B8A] uppercase tracking-wider flex items-center gap-1.5">
              <FolderHeart size={14} className="text-[#B48228]" />
              <span>{lang === 'hi' ? 'समारोह अनुसार तस्वीरें देखें:' : 'Filter by Landmark Conclave / Event:'}</span>
            </span>
            <span className="text-xs font-semibold text-[#5D556A]">
              {filteredAwards.length} {lang === 'hi' ? 'सम्मान' : 'items'}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {EVENT_GROUP_TABS.map((tab) => {
              const isActive = activeGroup === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveGroup(tab.id)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-[#522B8A] text-white shadow-sm font-bold'
                      : 'bg-[#FAF8F5] hover:bg-[#F4F0FA] text-[#4A4356] border border-[#E6DFD3]'
                  }`}
                >
                  <span>{lang === 'hi' ? tab.label_hi : tab.label_en}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-white text-[#522B8A] border border-[#E6DFD3]'}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 40+ AWARDS MUSEUM GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAwards.map((award, index) => {
            const currentImg = customPhotos[award.id] || award.imageUrl;

            return (
              <div
                key={award.id}
                className="group rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] hover:border-[#DEC38C] p-4 flex flex-col justify-between transition-all duration-300 hover:bg-white shadow-xs hover:shadow-xl"
              >
                <div className="space-y-4">
                  {/* Gallery Matted Photo Frame */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-[#E6DFD3] flex items-center justify-center text-center shadow-2xs">
                    {currentImg ? (
                      <div
                        className="relative w-full h-full overflow-hidden group/thumb cursor-pointer"
                        onClick={() => setSelectedAward(award)}
                      >
                        <img
                          src={currentImg}
                          alt={award.alt}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (target.src !== '/28.jpeg') target.src = '/28.jpeg';
                          }}
                        />
                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent pointer-events-none" />
                      </div>
                    ) : (
                      <div
                        className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#FAF8F5] to-[#F4F0FA] cursor-pointer"
                        onClick={() => setSelectedAward(award)}
                      >
                        <div className="w-12 h-12 rounded-full border border-[#DEC38C] bg-[#FBF5E6] flex items-center justify-center text-[#B48228] mb-2 shadow-xs">
                          <Trophy size={22} />
                        </div>
                        <h4 className="font-cinzel text-xs font-bold text-[#1E162B] line-clamp-1">
                          {award.eventGroup_hi}
                        </h4>
                        <p className="text-[10px] text-[#5D556A] mt-1 line-clamp-2 px-2">
                          {award.event_hi}
                        </p>
                      </div>
                    )}

                    {/* Bottom strip */}
                    <div className="absolute bottom-2 inset-x-2 flex items-center justify-between px-1.5 pointer-events-none">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white/95 border border-[#E6DFD3] text-[10px] text-[#1E162B] font-bold shadow-xs">
                        <Award size={11} className="text-[#B48228]" />
                        <span>{lang === 'hi' ? `सम्मान #${index + 1}` : `Honor #${index + 1}`}</span>
                      </span>
                      <span className="text-[9px] text-white/90 font-mono truncate max-w-[125px] bg-slate-900/75 px-1.5 py-0.5 rounded">
                        {award.filename}
                      </span>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-[10px] font-bold text-[#522B8A] border border-[#E6DFD3] uppercase tracking-wider shadow-xs">
                      {lang === 'hi'
                        ? (award.category === 'conclave' ? 'महासम्मेलन' : award.category === 'felicitation' ? 'मंच सम्मान' : award.category === 'memento' ? 'स्मृति चिन्ह' : 'समाचार')
                        : (award.category === 'conclave' ? 'Conclave' : award.category === 'felicitation' ? 'Felicitation' : award.category === 'memento' ? 'Memento' : 'Press')}
                    </div>

                    {/* Upload affordance */}
                    <label
                      title={lang === 'hi' ? "इस सम्मान का चित्र बदलें / अपलोड करें" : "Upload photo for this award"}
                      className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-white/95 text-[#1E162B] hover:bg-[#522B8A] hover:text-white border border-[#E6DFD3] cursor-pointer transition-all shadow-md z-10"
                    >
                      <Camera size={13} />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleUploadSingleAwardPhoto(award.id, file);
                        }}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Text Details */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-bold text-[#7A5311] tracking-wide uppercase">
                      {award.eventGroup_hi}
                    </div>

                    <h3 className="font-cinzel text-sm sm:text-base font-bold text-[#1E162B] leading-snug group-hover:text-[#522B8A] transition-colors">
                      {lang === 'hi' ? award.event_hi : award.event}
                    </h3>

                    {award.caption && (
                      <p className="text-xs text-[#4A4356] leading-relaxed line-clamp-3">
                        {award.caption}
                      </p>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-3.5 mt-4 border-t border-[#E6DFD3] flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-[11px] text-[#5D556A] truncate max-w-[155px]">
                    <MapPin size={11} className="text-[#B48228] shrink-0" />
                    <span className="truncate">{award.venue || 'भारत'}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedAward(award)}
                    className="font-bold text-[#522B8A] hover:text-[#B48228] flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{lang === 'hi' ? 'विवरण देखें' : 'View Citation'}</span>
                    <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* CLEAN LIGHTBOX CITATION MODAL */}
      {selectedAward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white text-[#1E162B] rounded-2xl border border-[#E6DFD3] shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between gap-4 border-b border-[#E6DFD3] pb-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A5311]">
                  {selectedAward.eventGroup_hi} · {lang === 'hi' ? 'प्रमाणित राष्ट्रीय सम्मान' : 'VERIFIED RECORD'}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#1E162B]">
                  {lang === 'hi' ? selectedAward.event_hi : selectedAward.event}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAward(null)}
                className="p-2 rounded-full bg-[#FAF8F5] hover:bg-[#F4F0FA] text-[#1E162B] border border-[#E6DFD3] cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="rounded-xl overflow-hidden bg-[#FAF8F5] border border-[#E6DFD3] aspect-video relative flex items-center justify-center p-2">
              <img
                src={customPhotos[selectedAward.id] || selectedAward.imageUrl || poojaAuthenticPhoto}
                alt={selectedAward.alt}
                className="w-full h-full object-contain rounded-lg"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/28.jpeg') target.src = '/28.jpeg';
                }}
              />
              <div className="absolute bottom-3 right-3">
                <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-[#FAF8F5] text-[#522B8A] border border-[#E6DFD3] text-xs font-bold shadow-md transition-all">
                  <Camera size={13} />
                  <span>{lang === 'hi' ? 'फोटो बदलें' : 'Update Photo'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) handleUploadSingleAwardPhoto(selectedAward.id, file);
                    }}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#4A4356] leading-relaxed bg-[#FAF8F5] p-4 rounded-xl border border-[#E6DFD3]">
              <div>
                <span className="font-bold text-[#522B8A] uppercase text-xs block mb-1">
                  {lang === 'hi' ? 'सम्मान की जानकारी:' : 'Citation Statement:'}
                </span>
                <p className="text-[#1E162B]">{selectedAward.caption || selectedAward.event}</p>
              </div>

              {selectedAward.dignitaries && (
                <div className="pt-2 border-t border-[#E6DFD3] flex items-start gap-2">
                  <Users size={14} className="text-[#B48228] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1E162B]">{lang === 'hi' ? 'विशिष्ट अतिथि: ' : 'Dignitaries: '}</span>
                    <span>{selectedAward.dignitaries}</span>
                  </div>
                </div>
              )}

              {selectedAward.venue && (
                <div className="pt-1 flex items-start gap-2">
                  <MapPin size={14} className="text-[#B48228] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1E162B]">{lang === 'hi' ? 'स्थान व तारीख: ' : 'Venue & Date: '}</span>
                    <span>{selectedAward.venue}</span>
                  </div>
                </div>
              )}

              <p className="text-[11px] text-[#5D556A] pt-2 border-t border-[#E6DFD3] font-mono">
                {lang === 'hi' ? 'फोटो संदर्भ:' : 'Asset Reference:'} {selectedAward.filename}
              </p>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedAward(null)}
                className="px-6 py-2.5 bg-[#522B8A] hover:bg-[#412070] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer"
              >
                {lang === 'hi' ? 'बंद करें' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

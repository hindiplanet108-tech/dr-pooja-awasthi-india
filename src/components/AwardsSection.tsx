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
  Calendar,
  MapPin,
  Users,
  Image as ImageIcon,
  Check
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
    // Load custom uploaded award photos from IndexedDB / storage if any
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

  // Smart matching algorithm to map uploaded files to awards
  const handleBulkUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    let matchedCount = 0;
    const newPhotos: Record<string, string> = {};

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileNameLower = file.name.toLowerCase();

      // Find the best matching award
      const matchedAward = AWARDS_DATA.find((award) => {
        const awardFileLower = award.filename.toLowerCase();
        if (awardFileLower === fileNameLower) return true;
        
        // Exact normalized name check
        const cleanA = awardFileLower.replace(/[^a-z0-9]/g, '');
        const cleanB = fileNameLower.replace(/[^a-z0-9]/g, '');
        if (cleanA && cleanB && (cleanA === cleanB || cleanA.includes(cleanB) || cleanB.includes(cleanA))) {
          return true;
        }

        // Specific signature matching
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
    <section id="honors" className="py-20 md:py-28 bg-[#24152F] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#6941A5]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D6B574]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D6B574]">
            <Trophy size={14} />
            <span>{t.awardsNav}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums font-bold">
              {lang === 'hi' ? '40+ प्रमाणित राष्ट्रीय सम्मान व चित्र दीर्घा' : '40+ Verified Felicitations & Photo Archive'}
            </span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
            {t.awardsTitle} — <br />
            <span className="italic font-normal text-[#D6B574]">
              {lang === 'hi' ? 'सत्य, निष्ठा एवं सनातन ज्ञान का राष्ट्रीय गौरव' : t.awardsSubtitle}
            </span>
          </h2>

          <p className="text-sm text-[#EAE2F4]/80 leading-relaxed font-light">
            {lang === 'hi'
              ? 'उत्तराखंड के माननीय राज्यपाल ले. ज. गुरमीत सिंह, आईआईएमटी विश्वविद्यालय मेरठ में पूज्य जैनाचार्य 108 सौरभ सागर जी महाराज, काशी हिन्दू विश्वविद्यालय (BHU) के ज्योतिष विभागाध्यक्ष आचार्य चंद्रमौली उपाध्याय जी, महाकाल उज्जैन के प्रधान पुरोहित दिनेश जी, एवं नाफेड के नेशनल डायरेक्टर माननीय अशोक ठाकुर जी द्वारा सम्मानित।'
              : 'Conferred with highest state and academic honors by distinguished dignitaries including Hon. Governor of Uttarakhand Lt. Gen. Gurmeet Singh, Jainacharya 108 Saurabh Sagar Ji Maharaj at IIMT University, BHU Jyotish Head Acharya Chandramouli Upadhyay, and revered spiritual authorities across national conclaves.'}
          </p>
        </div>

        {/* WHERE ARE THESE IMAGES LISTED? Guide Banner answering user's question */}
        {showGuideBanner && (
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#6941A5]/30 via-[#24152F] to-[#D6B574]/20 border border-[#D6B574]/40 backdrop-blur-md shadow-lg relative flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D6B574]/20 border border-[#D6B574]/40 flex items-center justify-center shrink-0 text-[#D6B574] mt-0.5">
                <Info size={20} />
              </div>
              <div className="space-y-1">
                <h4 className="font-cinzel text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>{lang === 'hi' ? '📍 ये चित्र एवं सम्मान कहाँ दिख रहे हैं?' : '📍 Where Are These Images Listed on the Website?'}</span>
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#D6B574]/20 text-[#D6B574] font-mono border border-[#D6B574]/30">
                    #honors
                  </span>
                </h4>
                <p className="text-xs text-[#EAE2F4]/85 leading-relaxed max-w-3xl">
                  {lang === 'hi'
                    ? 'आपकी सभी 40+ तस्वीरें और सम्मान इसी पावन अनुभाग (#honors) में 8 प्रमुख श्रेणियों में सूचीबद्ध हैं: आईआईएमटी मेरठ, लखनऊ महोपाध्याय, महाकाल उज्जैन, उत्तराखंड राजभवन, बीएचयू वाराणसी, नाफेड डायनामिक एक्सीलेंस आदि। किसी भी कार्ड पर क्लिक करके आप बड़ा चित्र एवं प्रशस्ति पत्र देख सकते हैं।'
                    : 'All 40+ photos and honors are categorized right here in this #honors section across 8 major event groups: IIMT Meerut, Lucknow Conclave, Mahakal Ujjain, Uttarakhand Governor, BHU Varanasi, Dynamic Excellence Delhi, etc. Click any card to inspect full high-resolution citations.'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
              <label className="cursor-pointer inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#D6B574] to-[#c79c53] text-[#24152F] text-xs font-bold shadow-md hover:scale-[1.02] transition-all">
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
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#EAE2F4]/70 hover:text-white"
                title="Dismiss"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Upload feedback banner */}
        {bulkUploadMsg && (
          <div className="mb-6 p-4 rounded-xl bg-[#6941A5]/40 border border-[#D6B574] text-white flex items-center gap-3 animate-fade-in shadow-xl">
            <CheckCircle2 size={18} className="text-[#D6B574] shrink-0" />
            <span className="text-xs sm:text-sm font-medium">{bulkUploadMsg}</span>
          </div>
        )}

        {/* TOP HONOREE SPOTLIGHT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          
          {/* Spotlight 1: IIMT University Lifetime Achievement Award */}
          <div 
            onClick={() => {
              const iimtAward = AWARDS_DATA.find((a) => a.id === 'iimt-1') || AWARDS_DATA[0];
              setSelectedAward(iimtAward);
            }}
            className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-[#D6B574]/40 backdrop-blur-md flex flex-col sm:flex-row items-center gap-5 shadow-xl relative overflow-hidden group cursor-pointer hover:border-[#D6B574] hover:bg-white/[0.08] transition-all"
          >
            <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-xl overflow-hidden border-2 border-[#D6B574] shrink-0 shadow-lg relative bg-[#1c0f26]">
              <img
                src={customPhotos['iimt-1'] || "/assets/awards/IMMT-6.jpeg"}
                alt="आईआईएमटी विश्वविद्यालय मेरठ - लाइफटाइम अचीवमेंट सम्मान प्रशस्ति पत्र"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/IMMT-6.jpeg') target.src = '/IMMT-6.jpeg';
                }}
              />
            </div>
            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#D6B574]/20 border border-[#D6B574]/40 text-[#D6B574] text-[10px] font-bold">
                <Sparkles size={10} />
                <span>{lang === 'hi' ? 'लाइफटाइम अचीवमेंट सम्मान (प्रशस्ति पत्र)' : 'Lifetime Achievement Award Citation'}</span>
              </div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-white group-hover:text-[#D6B574] transition-colors">
                {lang === 'hi' ? 'आईआईएमटी विश्वविद्यालय, मेरठ' : 'IIMT University, Meerut'}
              </h3>
              <p className="text-xs font-semibold text-[#D6B574]">
                {lang === 'hi'
                  ? 'परम पूज्य जैनाचार्य 108 श्री सौरभ सागर जी महाराज के सानिध्य में सम्मानित'
                  : 'In presence of Param Pujya Jainacharya 108 Sourabh Sagar Ji Maharaj'}
              </p>
              <p className="text-[11px] text-[#EAE2F4]/75 line-clamp-2">
                {lang === 'hi'
                  ? 'ज्योतिष शास्त्र एवं भारतीय ज्ञान परंपरा (IKS) में आजीवन योगदान हेतु प्रशस्ति पत्र एवं स्वर्ण शील्ड से अलंकृत।'
                  : 'Conferred for distinguished lifelong contribution to Jyotish Shastra and Indian Knowledge System.'}
              </p>
              <div className="pt-1 flex items-center justify-center sm:justify-start gap-1 text-[11px] text-[#D6B574] font-medium">
                <span>{lang === 'hi' ? 'प्रशस्ति पत्र व विवरण देखें →' : 'View Full Citation & Certificate →'}</span>
              </div>
            </div>
          </div>

          {/* Spotlight 2: Dynamic Excellence Awards - NAFED National Director */}
          <div 
            onClick={() => {
              const nafeedAward = AWARDS_DATA.find((a) => a.id === 'nafeed-1') || null;
              if (nafeedAward) setSelectedAward(nafeedAward);
            }}
            className="p-5 sm:p-6 rounded-2xl bg-white/5 border border-[#D6B574]/40 backdrop-blur-md flex flex-col sm:flex-row items-center gap-5 shadow-xl relative overflow-hidden group cursor-pointer hover:border-[#D6B574] hover:bg-white/[0.08] transition-all"
          >
            <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-xl overflow-hidden border-2 border-[#D6B574] shrink-0 shadow-lg relative bg-[#1c0f26]">
              <img
                src={customPhotos['nafeed-1'] || "/assets/awards/ashok_thakur_nafeed_award_2025.jpeg"}
                alt="माननीय अशोक ठाकुर National Director of Nafeed द्वारा सम्मानित"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/ashok_thakur_nafeed_award_2025.jpeg') target.src = '/ashok_thakur_nafeed_award_2025.jpeg';
                }}
              />
            </div>
            <div className="space-y-1.5 text-center sm:text-left flex-1">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#D6B574]/20 border border-[#D6B574]/40 text-[#D6B574] text-[10px] font-bold">
                <Sparkles size={10} />
                <span>{lang === 'hi' ? 'विशेष राष्ट्रीय मंच अलंकरण' : 'Featured National Honor'}</span>
              </div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-white group-hover:text-[#D6B574] transition-colors">
                {lang === 'hi' ? 'डायनामिक एक्सीलेंस अवार्ड्स 2025' : 'Dynamic Excellence Awards 2025'}
              </h3>
              <p className="text-xs font-semibold text-[#D6B574]">
                {lang === 'hi'
                  ? 'माननीय अशोक ठाकुर (National Director of Nafeed) द्वारा सम्मानित'
                  : 'Honored by Shri Ashok Thakur, National Director of NAFED'}
              </p>
              <p className="text-[11px] text-[#EAE2F4]/75 line-clamp-2">
                {lang === 'hi'
                  ? 'इंडिया इंटरनेशनल सेन्टर (IIC) नई दिल्ली के मुख्य मंच पर नाफेड नेशनल डायरेक्टर द्वारा विशिष्ट सम्मान अर्पण।'
                  : 'Conferred at India International Centre (IIC), New Delhi in recognition of conscious guidance.'}
              </p>
              <div className="pt-1 flex items-center justify-center sm:justify-start gap-1 text-[11px] text-[#D6B574] font-medium">
                <span>{lang === 'hi' ? 'सम्मान विवरण देखें →' : 'View Full Details →'}</span>
              </div>
            </div>
          </div>

        </div>

        {/* EVENT GROUP FILTER TABS */}
        <div className="space-y-3 mb-10">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-[#D6B574] uppercase tracking-wider flex items-center gap-1.5">
              <FolderHeart size={14} />
              <span>{lang === 'hi' ? 'समारोह अनुसार तस्वीरें देखें:' : 'Filter by Landmark Conclave / Event:'}</span>
            </span>
            <span className="text-xs text-[#EAE2F4]/60">
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
                  className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D6B574] via-[#eedbb3] to-[#D6B574] text-[#24152F] shadow-md font-bold'
                      : 'bg-white/5 hover:bg-white/10 text-[#EAE2F4]/85 border border-[#D6B574]/20'
                  }`}
                >
                  <span>{lang === 'hi' ? tab.label_hi : tab.label_en}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-[#24152F]/20 text-[#24152F]' : 'bg-white/10 text-[#D6B574]'}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 40+ AWARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAwards.map((award, index) => {
            const hasCustomPhoto = !!customPhotos[award.id];
            const currentImg = customPhotos[award.id] || award.imageUrl;

            return (
              <div
                key={award.id}
                className="group rounded-2xl bg-white/5 border border-[#D6B574]/20 hover:border-[#D6B574]/80 p-5 flex flex-col justify-between transition-all duration-300 hover:bg-white/[0.08] shadow-md hover:shadow-2xl"
              >
                <div className="space-y-4">
                  {/* Photo Display Frame with Upload Affordance */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#1c0f26] border border-[#D6B574]/30 flex items-center justify-center text-center">
                    {currentImg ? (
                      <div
                        className="relative w-full h-full overflow-hidden group/thumb cursor-pointer"
                        onClick={() => setSelectedAward(award)}
                      >
                        <img
                          src={currentImg}
                          alt={award.alt}
                          className="w-full h-full object-cover object-top opacity-95 transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.currentTarget;
                            if (target.src !== '/28.jpeg') target.src = '/28.jpeg';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1c0f26] via-[#1c0f26]/30 to-transparent" />
                      </div>
                    ) : (
                      /* Ceremonial Insignia Fallback Badge */
                      <div
                        className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#2a1738] to-[#160b20] cursor-pointer"
                        onClick={() => setSelectedAward(award)}
                      >
                        <div className="w-12 h-12 rounded-full border border-[#D6B574]/40 bg-[#D6B574]/10 flex items-center justify-center text-[#D6B574] mb-2 shadow-inner">
                          <Trophy size={22} />
                        </div>
                        <h4 className="font-cinzel text-xs font-bold text-[#D6B574] line-clamp-1">
                          {award.eventGroup_hi}
                        </h4>
                        <p className="text-[10px] text-[#EAE2F4]/70 mt-1 line-clamp-2 px-2">
                          {award.event_hi}
                        </p>
                      </div>
                    )}

                    {/* Bottom strip on image */}
                    <div className="absolute bottom-2 inset-x-2 flex items-center justify-between px-2 pointer-events-none">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#24152F]/90 border border-[#D6B574]/50 text-[10px] text-[#D6B574] font-bold">
                        <Award size={11} />
                        <span>{lang === 'hi' ? `सम्मान #${index + 1}` : `Honor #${index + 1}`}</span>
                      </span>
                      <span className="text-[9px] text-[#D6B574]/90 font-mono truncate max-w-[130px] bg-[#24152F]/80 px-1.5 py-0.5 rounded">
                        {award.filename}
                      </span>
                    </div>

                    {/* Category tag */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#24152F]/90 backdrop-blur-xs text-[10px] font-semibold text-[#D6B574] border border-[#D6B574]/30 uppercase tracking-wider">
                      {lang === 'hi'
                        ? (award.category === 'conclave' ? 'महासम्मेलन' : award.category === 'felicitation' ? 'मंच सम्मान' : award.category === 'memento' ? 'स्मृति चिन्ह' : 'समाचार')
                        : (award.category === 'conclave' ? 'Conclave' : award.category === 'felicitation' ? 'Felicitation' : award.category === 'memento' ? 'Memento' : 'Press')}
                    </div>

                    {/* Single Photo Upload Affordance */}
                    <label
                      title={lang === 'hi' ? "इस सम्मान का चित्र बदलें / अपलोड करें" : "Upload photo for this award"}
                      className="absolute top-2.5 right-2.5 p-1.5 rounded-full bg-[#24152F]/90 text-[#D6B574] hover:bg-[#D6B574] hover:text-[#24152F] border border-[#D6B574]/40 cursor-pointer transition-all shadow-md z-10"
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
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-[#D6B574] tracking-wide uppercase">
                      {award.eventGroup_hi}
                    </div>

                    <h3 className="font-cinzel text-sm sm:text-base font-semibold text-white leading-snug group-hover:text-[#D6B574] transition-colors">
                      {lang === 'hi' ? award.event_hi : award.event}
                    </h3>

                    {award.caption && (
                      <p className="text-xs text-[#EAE2F4]/75 leading-relaxed font-light line-clamp-3">
                        {award.caption}
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="pt-4 mt-4 border-t border-[#D6B574]/15 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-[11px] text-[#EAE2F4]/60 truncate max-w-[150px]">
                    <MapPin size={11} className="text-[#D6B574] shrink-0" />
                    <span className="truncate">{award.venue || 'भारत'}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedAward(award)}
                    className="font-medium text-[#D6B574] hover:text-white flex items-center gap-1 transition-colors group-hover:translate-x-0.5"
                  >
                    <span>{lang === 'hi' ? 'सम्मान विवरण देखें' : 'View Citation'}</span>
                    <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* FULL CITATION / LIGHTBOX MODAL */}
      {selectedAward && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#24152F] text-white rounded-2xl border border-[#D6B574]/60 shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between gap-4 border-b border-[#D6B574]/30 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D6B574]">
                  {selectedAward.eventGroup_hi} · {lang === 'hi' ? 'प्रमाणित राष्ट्रीय अभिलेख' : 'VERIFIED RECORD'}
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                  {lang === 'hi' ? selectedAward.event_hi : selectedAward.event}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedAward(null)}
                className="p-1.5 rounded-full hover:bg-white/10 text-[#EAE2F4]"
              >
                <X size={20} />
              </button>
            </div>

            {/* Photo Preview Container */}
            <div className="rounded-xl overflow-hidden bg-black/50 border border-[#D6B574]/40 aspect-video relative flex items-center justify-center shadow-inner">
              <img
                src={customPhotos[selectedAward.id] || selectedAward.imageUrl || poojaAuthenticPhoto}
                alt={selectedAward.alt}
                className="w-full h-full object-contain bg-[#1c0f26]"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/28.jpeg') target.src = '/28.jpeg';
                }}
              />
              <div className="absolute bottom-3 right-3">
                <label className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#24152F]/90 hover:bg-[#24152F] text-[#D6B574] border border-[#D6B574]/50 text-xs font-semibold backdrop-blur-sm transition-all shadow-md">
                  <Camera size={13} />
                  <span>{lang === 'hi' ? 'फोटो अपडेट करें' : 'Update Photo'}</span>
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

            {/* Citation & Dignitaries Details */}
            <div className="space-y-3 text-xs sm:text-sm text-[#EAE2F4]/90 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
              <div>
                <span className="font-bold text-[#D6B574] uppercase text-xs block mb-1">
                  {lang === 'hi' ? 'प्रशस्ति विवरण:' : 'Citation Statement:'}
                </span>
                <p>{selectedAward.caption || selectedAward.event}</p>
              </div>

              {selectedAward.dignitaries && (
                <div className="pt-2 border-t border-white/10 flex items-start gap-2">
                  <Users size={14} className="text-[#D6B574] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">{lang === 'hi' ? 'विशिष्ट सानिध्य व अतिथि: ' : 'Dignitaries: '}</span>
                    <span className="text-[#EAE2F4]/80">{selectedAward.dignitaries}</span>
                  </div>
                </div>
              )}

              {selectedAward.venue && (
                <div className="pt-1 flex items-start gap-2">
                  <MapPin size={14} className="text-[#D6B574] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white">{lang === 'hi' ? 'स्थान व तिथि: ' : 'Venue & Date: '}</span>
                    <span className="text-[#EAE2F4]/80">{selectedAward.venue}</span>
                  </div>
                </div>
              )}

              <p className="text-[11px] text-[#EAE2F4]/60 pt-2 border-t border-white/10 font-mono">
                {lang === 'hi' ? 'मूल फ़ाइल संदर्भ:' : 'Asset Reference:'} {selectedAward.filename}
              </p>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedAward(null)}
                className="px-6 py-2.5 bg-gradient-to-r from-[#D6B574] to-[#c79c53] text-[#24152F] font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md hover:scale-[1.02]"
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

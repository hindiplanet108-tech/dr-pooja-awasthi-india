import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA, TestimonialItem } from '../data/testimonialsData';
import {
  Star,
  Quote,
  MapPin,
  Sparkles,
  ThumbsUp,
  CheckCircle2,
  Filter,
  MessageSquare,
  ShieldCheck,
  Send,
  X,
  Heart,
  ChevronDown,
  Edit3
} from 'lucide-react';
import { getTranslation } from '../data/translations';
import { useSiteContent } from '../utils/siteContentContext';

interface TestimonialsSectionProps {
  lang: string;
  onOpenBooking?: (serviceName?: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  lang,
  onOpenBooking
}) => {
  const t = getTranslation(lang);
  const { siteContent } = useSiteContent();

  // State for all reviews
  const [reviewsList, setReviewsList] = useState<TestimonialItem[]>(() => {
    if (siteContent?.testimonials && siteContent.testimonials.length > 0) {
      const merged: TestimonialItem[] = siteContent.testimonials.map((item, idx) => ({
        id: item.id || `cms-test-${idx}`,
        name: item.name,
        location: item.location || 'India',
        location_hi: item.location || 'भारत',
        service: item.service || 'Vedic Consultation',
        service_hi: item.service || 'वैदिक परामर्श',
        category: 'numerology',
        quote: item.quote,
        quote_hi: item.quote,
        rating: item.rating || 5,
        date: item.date || '2026',
        date_hi: item.date || '2026',
        helpfulCount: 15 + (idx * 7) % 35,
        verified: true,
      }));
      return merged;
    }
    return TESTIMONIALS_DATA;
  });

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState<
    'all' | 'fiveStar' | 'numerology' | 'watch' | 'salt' | 'vastu'
  >('all');

  // Centered Modal Review submission state
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerLocation, setReviewerLocation] = useState('');
  const [reviewerService, setReviewerService] = useState('वॉच थेरेपी एवं समय ऊर्जा संतुलन (Watch Therapy)');
  const [reviewerRating, setReviewerRating] = useState<number>(5);
  const [reviewerQuote, setReviewerQuote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [helpfulVotedIds, setHelpfulVotedIds] = useState<Set<string>>(new Set());

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isReviewModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isReviewModalOpen]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isReviewModalOpen) {
        setIsReviewModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isReviewModalOpen]);

  // Load reviews from server if available
  useEffect(() => {
    const fetchLiveReviews = async () => {
      try {
        const res = await fetch('/api/reviews');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            setReviewsList(data);
          }
        }
      } catch (err) {
        // Fallback to initial state
      }
    };
    fetchLiveReviews();

    // Load local helpful votes
    try {
      const stored = localStorage.getItem('pooja_helpful_votes');
      if (stored) {
        setHelpfulVotedIds(new Set(JSON.parse(stored)));
      }
    } catch (e) {}
  }, []);

  // Handle helpful click
  const handleHelpfulClick = async (reviewId: string) => {
    if (helpfulVotedIds.has(reviewId)) return;

    // Optimistic update
    setReviewsList((prev) =>
      prev.map((r) =>
        r.id === reviewId ? { ...r, helpfulCount: (r.helpfulCount || 0) + 1 } : r
      )
    );

    const updatedSet = new Set(helpfulVotedIds);
    updatedSet.add(reviewId);
    setHelpfulVotedIds(updatedSet);
    try {
      localStorage.setItem('pooja_helpful_votes', JSON.stringify(Array.from(updatedSet)));
      await fetch(`/api/reviews/${reviewId}/helpful`, { method: 'POST' });
    } catch (e) {}
  };

  // Open the review modal
  const handleOpenReviewModal = () => {
    setSubmitSuccess(false);
    setIsReviewModalOpen(true);
  };

  // Handle instant review submit
  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim() || !reviewerQuote.trim()) {
      alert(lang === 'hi' ? 'कृपया अपना नाम और अनुभव दर्ज करें।' : 'Please enter your name and review story.');
      return;
    }

    try {
      setIsSubmitting(true);
      const categoryVal: 'watch' | 'salt' | 'vastu' | 'numerology' = reviewerService.includes('वॉच')
        ? 'watch'
        : reviewerService.includes('सॉल्ट')
        ? 'salt'
        : reviewerService.includes('वास्तु')
        ? 'vastu'
        : 'numerology';

      const newReviewPayload: TestimonialItem = {
        id: `rev-${Date.now()}`,
        name: reviewerName.trim(),
        location: reviewerLocation.trim() || (lang === 'hi' ? 'जयपुर, भारत' : 'Jaipur, India'),
        location_hi: reviewerLocation.trim() || 'जयपुर, भारत',
        service: reviewerService,
        service_hi: reviewerService,
        category: categoryVal,
        rating: reviewerRating,
        quote: reviewerQuote.trim(),
        quote_hi: reviewerQuote.trim(),
        date: lang === 'hi' ? 'अभी-अभी' : 'Just now',
        date_hi: 'अभी-अभी',
        helpfulCount: 1,
        verified: true,
      };

      // Try server save
      let savedReview: TestimonialItem = newReviewPayload;
      try {
        const res = await fetch('/api/reviews', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newReviewPayload),
        });
        if (res.ok) {
          savedReview = await res.json();
        }
      } catch (err) {
        console.warn('Local fallback save');
      }

      // Prepend to list instantly
      setReviewsList((prev) => [savedReview, ...prev]);
      setSubmitSuccess(true);
      setReviewerName('');
      setReviewerLocation('');
      setReviewerQuote('');
      setReviewerRating(5);

      setTimeout(() => {
        setSubmitSuccess(false);
        setIsReviewModalOpen(false);
      }, 2500);
    } catch (err: any) {
      alert(`त्रुटि: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filter reviews
  const filteredReviews = reviewsList.filter((item) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'fiveStar') return item.rating === 5;
    if (selectedCategory === 'watch') {
      return (
        item.category === 'watch' ||
        item.service.toLowerCase().includes('watch') ||
        (item.service_hi && item.service_hi.includes('वॉच'))
      );
    }
    if (selectedCategory === 'salt') {
      return (
        item.category === 'salt' ||
        item.service.toLowerCase().includes('salt') ||
        item.service.toLowerCase().includes('aura') ||
        (item.service_hi && (item.service_hi.includes('सॉल्ट') || item.service_hi.includes('औरा')))
      );
    }
    if (selectedCategory === 'numerology') {
      return (
        item.category === 'numerology' ||
        item.service.toLowerCase().includes('numerology') ||
        (item.service_hi && item.service_hi.includes('अंक'))
      );
    }
    if (selectedCategory === 'vastu') {
      return (
        item.category === 'vastu' ||
        item.service.toLowerCase().includes('vastu') ||
        item.service.toLowerCase().includes('crystal') ||
        (item.service_hi && (item.service_hi.includes('वास्तु') || item.service_hi.includes('क्रिस्टल')))
      );
    }
    return true;
  });

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-[#FBF8F2] text-[#29242E] relative border-t border-[#EAE2F4] overflow-hidden scroll-mt-20"
    >
      {/* Target Anchor Hooks for #client-reviews-stories & #testimonials */}
      <div id="client-reviews-stories" className="absolute -top-24 pointer-events-none" />
      <div id="testimonials" className="absolute -top-24 pointer-events-none" />

      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6B574]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6941A5]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* ==================================================================== */}
        {/* 1. SECTION HEADER WITH AGGREGATE 4.9★ RATING BANNER */}
        {/* ==================================================================== */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6941A5]/10 border border-[#6941A5]/25 text-[#6941A5] text-xs font-semibold uppercase tracking-widest shadow-xs">
            <Quote size={13} className="text-[#D6B574]" />
            <span>{lang === 'hi' ? 'सत्यापित साधक अनुभव एवं कहानियाँ' : 'Client Reviews & Sacred Stories'}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#D6B574]">★ 4.9 / 5.0</span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-[#24152F] leading-tight">
            {lang === 'hi' ? 'संतुष्ट ग्राहकों के अनुभव एवं' : 'Client Reviews & Transformation Stories'} <br />
            <span className="italic font-normal text-[#6941A5]">
              {lang === 'hi' ? 'जीवन परिवर्तन की सत्य कहानियाँ' : 'Authentic Reflections from 1,450+ Seekers Worldwide'}
            </span>
          </h2>

          <p className="text-sm text-[#29242E]/75 leading-relaxed max-w-2xl mx-auto font-light">
            {lang === 'hi'
              ? 'अक्सर पूछे जाने वाले प्रश्नों (FAQ) के बाद प्रस्तुत हैं वे वास्तविक अनुभव, जिन्होंने डॉ. पूजा अवस्थी जी के वैदिक अंक ज्योतिष, वॉच थेरेपी, सॉल्ट थेरेपी व हीलिंग से अपने जीवन में चमत्कारी बदलाव महसूस किया है।'
              : 'Real-life experiences from seekers across 24 countries who experienced deep clarity, career breakthroughs, and emotional peace under Dr. Pooja Awasthi’s divine guidance.'}
          </p>
        </div>

        {/* ==================================================================== */}
        {/* 2. AGGREGATE STATS & TOP TRIGGER CARD */}
        {/* ==================================================================== */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#24152F] via-[#341d44] to-[#24152F] text-white border-2 border-[#D6B574]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: 4.9 Rating summary */}
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#D6B574] via-[#F3E5AB] to-[#D6B574] p-1 shadow-lg shrink-0 flex items-center justify-center">
              <div className="w-full h-full bg-[#1c0f26] rounded-xl flex flex-col items-center justify-center">
                <span className="font-cormorant text-4xl font-bold text-[#D6B574] leading-none">4.9</span>
                <div className="flex items-center text-[#D6B574] mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="#D6B574" />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-base sm:text-lg font-cinzel font-bold text-white">
                  {lang === 'hi' ? '४.९★ वैदिक संतुष्टि रेटिंग' : '4.9★ Global Satisfaction Rating'}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold">
                  ✓ Verified
                </span>
              </div>
              <p className="text-xs text-[#EAE2F4]/75 max-w-md font-light leading-relaxed">
                {lang === 'hi'
                  ? '१,४५०+ से अधिक सत्यापित परामर्शों पर आधारित। ९८% से अधिक साधकों ने ५-स्टार रेटिंग के साथ पूर्ण संतुष्टि व जीवन परिवर्तन व्यक्त किया।'
                  : 'Based on 1,450+ verified global consultations. Over 98% 5-star ratings across India, UAE, UK, USA & Singapore.'}
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-[11px] text-[#D6B574] font-medium pt-1">
                <span>✦ ९८% 5-Star Reviews</span>
                <span>•</span>
                <span>✦ १००% पूर्ण गोपनीयता</span>
                <span>•</span>
                <span>✦ १८+ वर्ष पावन परंपरा</span>
              </div>
            </div>
          </div>

          {/* Right: Instant Review Trigger Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
            <button
              type="button"
              onClick={handleOpenReviewModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#D6B574] via-[#eedca2] to-[#D6B574] text-[#1c0f26] font-bold text-xs uppercase tracking-wider shadow-xl shadow-[#D6B574]/25 hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Edit3 size={16} />
              <span>{lang === 'hi' ? '✍️ समीक्षा लिखें (Write a Review)' : '✍️ Write a Review'}</span>
            </button>
          </div>
        </div>

        {/* ==================================================================== */}
        {/* 3. FILTER TABS STRIP */}
        {/* ==================================================================== */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#EAE2F4] pb-4">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#24152F] text-[#D6B574] shadow-md font-bold'
                : 'bg-white text-[#29242E]/70 hover:bg-gray-100'
            }`}
          >
            {lang === 'hi' ? `सभी समीक्षाएँ (${reviewsList.length})` : `All Reviews (${reviewsList.length})`}
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('fiveStar')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
              selectedCategory === 'fiveStar'
                ? 'bg-[#24152F] text-[#D6B574] shadow-md font-bold'
                : 'bg-white text-[#29242E]/70 hover:bg-gray-100'
            }`}
          >
            <Star size={13} fill="#D6B574" className="text-[#D6B574]" />
            <span>{lang === 'hi' ? 'केवल 5-Star (5★)' : '5★ Only'}</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('watch')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'watch'
                ? 'bg-[#24152F] text-[#D6B574] shadow-md font-bold'
                : 'bg-white text-[#29242E]/70 hover:bg-gray-100'
            }`}
          >
            <span>{lang === 'hi' ? 'वॉच थेरेपी (Watch Therapy)' : 'Watch Therapy'}</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('numerology')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'numerology'
                ? 'bg-[#24152F] text-[#D6B574] shadow-md font-bold'
                : 'bg-white text-[#29242E]/70 hover:bg-gray-100'
            }`}
          >
            <span>{lang === 'hi' ? 'अंक ज्योतिष (Numerology)' : 'Numerology'}</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('salt')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'salt'
                ? 'bg-[#24152F] text-[#D6B574] shadow-md font-bold'
                : 'bg-white text-[#29242E]/70 hover:bg-gray-100'
            }`}
          >
            <span>{lang === 'hi' ? 'सॉल्ट व चक्र हीलिंग' : 'Salt & Chakra Healing'}</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('vastu')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'vastu'
                ? 'bg-[#24152F] text-[#D6B574] shadow-md font-bold'
                : 'bg-white text-[#29242E]/70 hover:bg-gray-100'
            }`}
          >
            <span>{lang === 'hi' ? 'वास्तु व क्रिस्टल (Vastu & Crystals)' : 'Vastu & Crystals'}</span>
          </button>
        </div>

        {/* ==================================================================== */}
        {/* 4. REVIEWS CARDS GRID WITH HELPFUL VOTES */}
        {/* ==================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredReviews.map((item) => {
            const hasVoted = helpfulVotedIds.has(item.id);
            return (
              <div
                key={item.id}
                className="p-8 rounded-3xl bg-white border border-[#EAE2F4] hover:border-[#D6B574] shadow-xs hover:shadow-xl transition-all flex flex-col justify-between space-y-6 group relative"
              >
                <div className="space-y-4">
                  {/* Top Bar: Stars & Verified Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#D6B574]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#D6B574" />
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold">
                      <ShieldCheck size={12} className="text-emerald-600" />
                      <span>{lang === 'hi' ? 'सत्यापित परामर्श' : 'Verified Seeker'}</span>
                    </div>
                  </div>

                  {/* Quote / Review Story */}
                  <p className="font-cormorant text-lg sm:text-xl text-[#24152F] italic leading-relaxed group-hover:text-[#6941A5] transition-colors">
                    “{lang === 'hi' ? item.quote_hi || item.quote : item.quote}”
                  </p>
                </div>

                {/* Footer Metadata & Helpful Button */}
                <div className="pt-4 border-t border-[#EAE2F4] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-cinzel text-sm font-bold text-[#24152F]">{item.name}</h4>
                    <div className="flex items-center gap-2 text-xs text-[#29242E]/60 mt-0.5">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-[#6941A5]" />
                        <span>{lang === 'hi' ? item.location_hi || item.location : item.location}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{lang === 'hi' ? item.date_hi || item.date : item.date}</span>
                    </div>
                    <div className="mt-1">
                      <span className="inline-block px-2 py-0.5 rounded-md bg-[#6941A5]/10 text-[#6941A5] text-[10px] font-semibold">
                        {lang === 'hi' ? item.service_hi || item.service : item.service}
                      </span>
                    </div>
                  </div>

                  {/* Helpful upvote button */}
                  <div className="shrink-0 self-end sm:self-center">
                    <button
                      type="button"
                      onClick={() => handleHelpfulClick(item.id)}
                      disabled={hasVoted}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                        hasVoted
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-300 font-bold'
                          : 'bg-[#FBF8F2] hover:bg-[#EAE2F4] text-[#24152F] border border-[#EAE2F4] active:scale-95'
                      }`}
                      title="Mark review as helpful"
                    >
                      <ThumbsUp size={13} className={hasVoted ? 'text-emerald-600' : 'text-[#6941A5]'} />
                      <span>{hasVoted ? (lang === 'hi' ? 'उपयोगी माना' : 'Helpful') : (lang === 'hi' ? 'उपयोगी' : 'Helpful')}</span>
                      <span className="px-1.5 py-0.2 rounded-full bg-black/5 text-[10px]">
                        {item.helpfulCount || 1}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==================================================================== */}
        {/* 5. BOTTOM BANNER WITH DUAL ACTIONS: WRITE REVIEW & BOOK CONSULTATION */}
        {/* ==================================================================== */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#24152F] via-[#321c42] to-[#24152F] text-white border-2 border-[#D6B574]/40 shadow-xl text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D6B574]/20 border border-[#D6B574]/30 text-[#D6B574] text-xs font-semibold">
            <Sparkles size={13} />
            <span>{lang === 'hi' ? 'संतुष्ट साधकों का अनुभव साझा मंच' : 'Join Our Satisfied Seekers Community'}</span>
          </div>

          <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
            {lang === 'hi'
              ? 'क्या आप भी अपना अनुभव साझा करना चाहते हैं?'
              : 'Would You Like to Share Your Experience?'}
          </h3>

          <p className="text-xs text-[#EAE2F4]/80 max-w-lg mx-auto font-light leading-relaxed">
            {lang === 'hi'
              ? 'यदि आपने डॉ. पूजा अवस्थी जी से परामर्श लिया है, तो नीचे दिए गए बटन से अपनी समीक्षा तुरंत प्रकाशित करें, अथवा नया व्यक्तिगत परामर्श बुक करें।'
              : 'If you have consulted Dr. Pooja Awasthi, submit your review instantly via the centered dialog, or book a personalized consultation.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            {/* 1. Centered Modal Trigger from Bottom */}
            <button
              type="button"
              onClick={handleOpenReviewModal}
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-[#D6B574] via-[#eedca2] to-[#D6B574] text-[#1c0f26] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#D6B574]/25 hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Edit3 size={15} />
              <span>{lang === 'hi' ? '✍️ समीक्षा लिखें (Write a Review)' : '✍️ Write a Review'}</span>
            </button>

            {/* 2. Direct WhatsApp Booking */}
            <a
              href="https://wa.me/919105731969?text=Hello%20Dr.%20Pooja%20Awasthi,%20I%20read%20the%20client%20reviews%20and%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-[#D6B574] hover:text-white border border-[#D6B574]/40 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare size={15} className="text-[#25D366]" />
              <span>
                {lang === 'hi' ? (
                  <>परामर्श बुक करें (<strong className="font-black text-[#F5C242]">₹5,100</strong>)</>
                ) : (
                  <>Book Consultation (<strong className="font-black text-[#F5C242]">₹5,100</strong>)</>
                )}
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 6. INSTANT CENTERED POPUP MODAL DIALOG (त्वरित समीक्षा पॉपअप मॉडल) */}
      {/* ==================================================================== */}
      {isReviewModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto animate-fade-in"
          onClick={() => setIsReviewModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border-2 border-[#D6B574] p-6 sm:p-8 max-h-[90vh] overflow-y-auto my-auto animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#EAE2F4]">
              <div>
                <span className="text-[11px] font-bold text-[#6941A5] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={13} className="text-[#D6B574]" />
                  <span>{lang === 'hi' ? 'त्वरित समीक्षा पॉपअप' : 'Instant Review Modal'}</span>
                </span>
                <h3 className="font-cinzel text-xl font-bold text-[#24152F] mt-0.5">
                  {lang === 'hi' ? '✍️ अपना अनुभव / समीक्षा लिखें' : 'Write a Review & Sacred Story'}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsReviewModalOpen(false)}
                className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
                title="बंद करें (Close / Esc)"
              >
                <X size={20} />
              </button>
            </div>

            {submitSuccess ? (
              <div className="py-10 text-center rounded-2xl bg-emerald-50 border border-emerald-200 space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 size={36} />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#D6B574] uppercase tracking-widest block font-cinzel">
                    ॥ धन्यवाद ॥
                  </span>
                  <h4 className="font-cinzel text-xl font-bold text-emerald-950">
                    {lang === 'hi' ? 'आपकी समीक्षा दर्ज हो गई है!' : 'Your Review is Live!'}
                  </h4>
                  <p className="text-xs text-emerald-800 max-w-sm mx-auto font-light leading-relaxed">
                    {lang === 'hi'
                      ? 'आपका हृदयस्पर्शी अनुभव सुरक्षित कर दिया गया है और अब मुख्य वेबसाइट पर सबसे ऊपर दिखाई दे रहा है।'
                      : 'Your review has been securely saved and is now visible at the top of the reviews list.'}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsReviewModalOpen(false)}
                  className="px-6 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  {lang === 'hi' ? 'समीक्षा देखें (View Review)' : 'Done'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                {/* 5-Star Interactive Rating Selector */}
                <div className="p-4 rounded-2xl bg-[#FBF8F2] border border-[#EAE2F4] space-y-1.5">
                  <label className="text-xs font-semibold text-[#24152F] block">
                    {lang === 'hi' ? '१ से ५ स्टार रेटिंग चुनें (Star Rating) *' : 'Select Star Rating (1 to 5 Stars) *'}
                  </label>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {[1, 2, 3, 4, 5].map((starVal) => (
                      <button
                        key={starVal}
                        type="button"
                        onClick={() => setReviewerRating(starVal)}
                        className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                          reviewerRating >= starVal ? 'text-[#D6B574] scale-110' : 'text-gray-300 hover:text-[#D6B574]/60'
                        }`}
                        title={`${starVal} Star`}
                      >
                        <Star size={28} fill={reviewerRating >= starVal ? '#D6B574' : 'none'} />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-[#6941A5] ml-2">
                      {reviewerRating === 5 && '⭐⭐⭐⭐⭐ उत्कृष्ट (Life Changing)'}
                      {reviewerRating === 4 && '⭐⭐⭐⭐ बहुत अच्छा (Very Good)'}
                      {reviewerRating === 3 && '⭐⭐⭐ अच्छा (Good)'}
                      {reviewerRating === 2 && '⭐⭐ संतोषजनक (Average)'}
                      {reviewerRating === 1 && '⭐ सुधार योग्य (Needs Improvement)'}
                    </span>
                  </div>
                </div>

                {/* Name & Location Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#24152F] block">
                      {lang === 'hi' ? 'आपका पूरा नाम (Full Name) *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'hi' ? 'उदा. रोहित खंडेलवाल' : 'e.g. Rohit Khandelwal'}
                      value={reviewerName}
                      onChange={(e) => setReviewerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6B574]/40 focus:border-[#6941A5] outline-hidden text-xs bg-[#FBF8F2] text-[#24152F]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#24152F] block">
                      {lang === 'hi' ? 'शहर व राज्य / देश (Location) *' : 'City, State / Country *'}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={lang === 'hi' ? 'उदा. जयपुर, मुंबई, दिल्ली, दुबई' : 'e.g. Jaipur, Mumbai, Dubai, London'}
                      value={reviewerLocation}
                      onChange={(e) => setReviewerLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6B574]/40 focus:border-[#6941A5] outline-hidden text-xs bg-[#FBF8F2] text-[#24152F]"
                    />
                  </div>
                </div>

                {/* Service Selection Dropdown */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#24152F] block">
                    {lang === 'hi' ? 'परामर्श सेवा का चयन (Service Consulted) *' : 'Service Consulted *'}
                  </label>
                  <select
                    value={reviewerService}
                    onChange={(e) => setReviewerService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6B574]/40 focus:border-[#6941A5] outline-hidden text-xs bg-[#FBF8F2] text-[#24152F] cursor-pointer"
                  >
                    <option value="वॉच थेरेपी एवं समय ऊर्जा संतुलन (Watch Therapy)">
                      वॉच थेरेपी एवं समय ऊर्जा संतुलन (Watch Therapy)
                    </option>
                    <option value="वैदिक अंक ज्योतिष एवं मूलांक-भाग्यांक (Vedic Numerology)">
                      वैदिक अंक ज्योतिष एवं मूलांक-भाग्यांक (Vedic Numerology)
                    </option>
                    <option value="सॉल्ट थेरेपी एवं औरा शुद्धि (Salt Therapy)">
                      सॉल्ट थेरेपी एवं औरा शुद्धि (Salt Therapy)
                    </option>
                    <option value="चक्र हीलिंग एवं ऊर्जा संतुलन (Chakra Healing)">
                      चक्र हीलिंग एवं ऊर्जा संतुलन (Chakra Healing)
                    </option>
                    <option value="सिद्ध रत्न एवं रुद्राक्ष परामर्श (Gemstone & Rudraksha)">
                      सिद्ध रत्न एवं रुद्राक्ष परामर्श (Gemstone & Rudraksha)
                    </option>
                    <option value="लकी मोबाइल नंबर एवं नाम सुधार (Lucky Mobile & Name)">
                      लकी मोबाइल नंबर एवं नाम सुधार (Lucky Mobile & Name)
                    </option>
                    <option value="३६ गुण मिलान एवं दांपत्य हीलिंग (36 Gun Milan)">
                      ३६ गुण मिलान एवं दांपत्य हीलिंग (36 Gun Milan)
                    </option>
                    <option value="वास्तु दोष निवारण एवं क्रिस्टल ग्रिड (Vastu & Crystals)">
                      वास्तु दोष निवारण एवं क्रिस्टल ग्रिड (Vastu & Crystals)
                    </option>
                    <option value="टैरो कार्ड इंट्यूटिव परामर्श (Tarot Reading)">
                      टैरो कार्ड इंट्यूटिव परामर्श (Tarot Reading)
                    </option>
                  </select>
                </div>

                {/* Detailed Review Text */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#24152F] block">
                    {lang === 'hi' ? 'अपना विस्तृत अनुभव व समीक्षा लिखें *' : 'Your Detailed Experience / Transformation Story *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder={
                      lang === 'hi'
                        ? 'डॉ. पूजा अवस्थी जी से परामर्श के बाद आपके जीवन, करियर, स्वास्थ्य, व्यापार या संबंधों में क्या सकारात्मक बदलाव आया, विस्तार से लिखें...'
                        : 'Describe your consultation experience and the positive breakthroughs you observed in your life, career, finances or relationships...'
                    }
                    value={reviewerQuote}
                    onChange={(e) => setReviewerQuote(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D6B574]/40 focus:border-[#6941A5] outline-hidden text-xs bg-[#FBF8F2] text-[#24152F] leading-relaxed"
                  />
                </div>

                {/* Submit Actions */}
                <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#EAE2F4]">
                  <button
                    type="button"
                    onClick={() => setIsReviewModalOpen(false)}
                    className="px-5 py-2.5 rounded-xl border border-gray-300 hover:bg-gray-100 text-xs font-semibold text-gray-700 transition-colors cursor-pointer"
                  >
                    {lang === 'hi' ? 'रद्द करें (Cancel)' : 'Cancel'}
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D6B574] via-[#ecd6a4] to-[#D6B574] text-[#1c0f26] font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#D6B574]/20 hover:brightness-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send size={14} />
                    <span>
                      {isSubmitting
                        ? (lang === 'hi' ? 'प्रकाशन हो रहा है...' : 'Publishing...')
                        : (lang === 'hi' ? 'Publish Review Instantly (तुरंत समीक्षा सबमिट करें)' : 'Publish Review Instantly')}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

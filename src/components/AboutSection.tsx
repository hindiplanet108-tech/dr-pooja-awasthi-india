import React, { useState } from 'react';
import { Compass, Sparkles, Shield, Maximize2, X, Award, ArrowRight } from 'lucide-react';
import { getTranslation } from '../data/translations';
import poojaAuthenticPhoto from '../assets/images/pooja_awasthi_portrait.jpeg';
import { useSiteContent } from '../utils/siteContentContext';

interface AboutSectionProps {
  lang: string;
  onBookClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onBookClick }) => {
  const { siteContent } = useSiteContent();
  const aboutContent = siteContent?.about;
  const [bioLang, setBioLang] = useState<'en' | 'hi'>(lang === 'hi' ? 'hi' : 'en');
  const [showLightbox, setShowLightbox] = useState(false);
  const t = getTranslation(lang);

  React.useEffect(() => {
    setBioLang(lang === 'hi' ? 'hi' : 'en');
  }, [lang]);

  const displayPhoto = aboutContent?.photo_url || poojaAuthenticPhoto;

  const pillars = [
    {
      num: '01',
      title: bioLang === 'hi'
        ? (aboutContent?.pillar1_title || 'अपनेपन से सुनना (Compassionate Listening)')
        : 'Compassionate Listening',
      desc: bioLang === 'hi'
        ? (aboutContent?.pillar1_desc || 'बिना किसी भेदभाव के आपकी हर बात ध्यानपूर्वक सुनना और मन को सच्ची शांति देना।')
        : 'Listening deeply to your unique circumstances without judgement to provide genuine peace.'
    },
    {
      num: '02',
      title: bioLang === 'hi'
        ? (aboutContent?.pillar2_title || 'वैदिक प्रामाणिकता (Authentic Vedic Insight)')
        : 'Authentic Vedic Insight',
      desc: bioLang === 'hi'
        ? (aboutContent?.pillar2_desc || 'वैदिक ज्योतिष, अंकशास्त्र और चक्रों के आधार पर आपकी स्थिति का सही व सटीक विश्लेषण।')
        : 'Rigorous calculation of birth and destiny numbers grounded in timeless Vedic tradition.'
    },
    {
      num: '03',
      title: bioLang === 'hi'
        ? (aboutContent?.pillar3_title || 'सकारात्मक बदलाव (Positive Transformation)')
        : 'Conscious Transformation',
      desc: bioLang === 'hi'
        ? (aboutContent?.pillar3_desc || 'सरल, व्यावहारिक और बिना किसी डर का मार्गदर्शन जो जीवन में पक्की शांति और सफलता लाए।')
        : 'Practical, fear-free remedies empowering you to take charge of your life with calm courage.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white text-[#1E162B] relative overflow-hidden border-b border-[#E5DFD5]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4F0FA]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#522B8A]">
            <span>{t.aboutNav}</span>
            <span aria-hidden="true" className="text-[#B48228]">·</span>
            <span className="text-[#7A5311]">{lang === 'hi' ? 'पावन संकल्प एवं दृष्टिकोण' : 'Vision & Philosophy'}</span>
          </div>
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1E162B] leading-tight">
            {t.aboutTitle} — <br />
            <span className="italic font-semibold text-[#522B8A]">{t.aboutSubtitle}</span>
          </h2>
        </div>

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Matted Portrait & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group rounded-2xl overflow-hidden bg-[#FAF8F5] border border-[#E6DFD3] shadow-lg p-4 transition-all duration-300 hover:shadow-xl">
              <div
                className="relative aspect-[3/4] rounded-xl overflow-hidden bg-white border border-[#E6DFD3] cursor-pointer group/img"
                onClick={() => setShowLightbox(true)}
              >
                <img
                  src={displayPhoto}
                  alt="Dr. Pooja Awasthi with Tarot & Healing Crystals"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-[1.03]"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/28.jpeg') target.src = '/28.jpeg';
                  }}
                />
                
                {/* Restrained caption scrim at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent p-4 pt-12 text-white text-center">
                  <p className="font-cinzel text-base font-bold text-white">
                    Dr. Pooja Awasthi
                  </p>
                  <p className="text-[11px] text-[#F3D899] tracking-wider uppercase font-semibold mt-0.5">
                    {bioLang === 'hi' ? 'आध्यात्मिक मार्गदर्शिका एवं सलाहकार' : 'Spiritual Guide & Sacred Consultant'}
                  </p>
                </div>

                {/* Lightbox zoom trigger */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-white/95 text-[#1E162B] hover:text-[#522B8A] border border-[#E5DFD5] transition-colors shadow-md">
                  <Maximize2 size={14} />
                </div>
              </div>

              <div className="pt-3.5 pb-2.5 text-center border-b border-[#E6DFD3]">
                <p className="text-xs font-semibold text-[#522B8A]">
                  {bioLang === 'hi'
                    ? 'चित्र: डॉ. पूजा अवस्थी (टैरो कार्ड्स एवं हीलिंग क्रिस्टल्स सहित)'
                    : 'Dr. Pooja Awasthi with Tarot & Healing Crystals'}
                </p>
              </div>

              {/* Core Credentials */}
              <div className="pt-3.5 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#522B8A] flex items-center gap-1.5">
                  <Award size={13} className="text-[#B48228]" />
                  <span>{bioLang === 'hi' ? 'विशेषज्ञता के मुख्य क्षेत्र' : 'Sacred Alignment Disciplines'}</span>
                </div>
                <ul className="text-xs text-[#4A4356] space-y-1.5 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#B48228] mt-0.5">✦</span>
                    <span>
                      {bioLang === 'hi' ? (
                        <><strong className="text-[#1E162B]">वैदिक अंकशास्त्री</strong> एवं नाम स्पेलिंग संतुलन विशेषज्ञ</>
                      ) : (
                        <><strong className="text-[#1E162B]">Vedic Numerologist</strong> & Chaldean Name Vibration Specialist</>
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B48228] mt-0.5">✦</span>
                    <span>
                      {bioLang === 'hi' ? (
                        <><strong className="text-[#1E162B]">सटीक टैरो कार्ड</strong> एवं जीवन दिशा मार्गदर्शन</>
                      ) : (
                        <><strong className="text-[#1E162B]">Intuitive Tarot</strong> & Symbolic Archetypal Consultant</>
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B48228] mt-0.5">✦</span>
                    <span>
                      {bioLang === 'hi' ? (
                        <><strong className="text-[#1E162B]">ऑरा व चक्र हीलिंग</strong> (ऊर्जा संतुलन विशेषज्ञ)</>
                      ) : (
                        <><strong className="text-[#1E162B]">Subtle Body Energy</strong> Cleanser & Chakra Harmonizer</>
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B48228] mt-0.5">✦</span>
                    <span>
                      {bioLang === 'hi' ? (
                        <><strong className="text-[#1E162B]">जीवन मार्गदर्शन</strong> एवं मेंटरशिप</>
                      ) : (
                        <><strong className="text-[#1E162B]">Mindful Life Coach</strong> & Spiritual Mentor</>
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Ethical Sanctuary Guarantee */}
            <div className="p-5 rounded-2xl bg-[#F4F0FA] border border-[#DFD5F0] space-y-2 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-bold text-[#522B8A]">
                <Shield size={16} className="text-emerald-700" />
                <span>{bioLang === 'hi' ? '100% नैतिक व सुरक्षित परामर्श' : '100% Ethical & Confidential Guidance'}</span>
              </div>
              <p className="text-xs text-[#4A4356] leading-relaxed">
                {bioLang === 'hi'
                  ? 'हम किसी भी तरह के भय या डराने वाले दावों से दूर रहते हैं। हर सत्र केवल आपकी मन की शांति, सही दिशा और आत्म-विश्वास के लिए समर्पित है।'
                  : 'Zero fear-based predictions or false promises. Every 1-on-1 session is an authentic, completely private space dedicated to your peace of mind and clarity.'}
              </p>
            </div>
          </div>

          {/* Right Column: Spiritual Biography, Vision, & 3 Pillars */}
          <div className="lg:col-span-7 space-y-6 text-[#4A4356] leading-relaxed">
            
            {/* Bilingual Biography Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] shadow-xs space-y-5">
              <div className="flex items-center justify-between border-b border-[#E6DFD3] pb-3.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#522B8A]">
                  {bioLang === 'hi' ? 'आध्यात्मिक परिचय' : 'Spiritual Biography'}
                </span>
                <div className="inline-flex rounded-lg border border-[#DEC38C] p-0.5 bg-white text-xs shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setBioLang('en')}
                    className={`px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                      bioLang === 'en'
                        ? 'bg-[#522B8A] text-white'
                        : 'text-[#5D556A] hover:text-[#1E162B]'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setBioLang('hi')}
                    className={`px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                      bioLang === 'hi'
                        ? 'bg-[#522B8A] text-white'
                        : 'text-[#5D556A] hover:text-[#1E162B]'
                    }`}
                  >
                    हिन्दी
                  </button>
                </div>
              </div>

              {bioLang === 'hi' ? (
                <div className="space-y-4 text-sm text-[#4A4356] leading-relaxed">
                  <p className="text-base text-[#1E162B] font-semibold leading-relaxed">
                    {aboutContent?.p1_hi || 'डॉ. पूजा अवस्थी एक समर्पित आध्यात्मिक मार्गदर्शिका हैं, जो वैदिक अंकशास्त्र, टैरो मार्गदर्शन, चक्र हीलिंग और जीवन कोचिंग के माध्यम से लोगों को जीवन में नई दिशा और आशा देती हैं।'}
                  </p>
                  <p>
                    {aboutContent?.p2_hi || 'उनका दृष्टिकोण प्राचीन भारतीय ज्ञान परंपरा और आधुनिक समझ का सामंजस्यपूर्ण समन्वय है। वे किसी भय या अंधविश्वास के बिना साधकों को स्पष्ट, व्यावहारिक और आत्मिक मार्गदर्शन प्रदान करती हैं।'}
                  </p>
                </div>
              ) : (
                <div className="space-y-4 text-sm text-[#4A4356] leading-relaxed">
                  <p className="text-base text-[#1E162B] font-semibold leading-relaxed">
                    {aboutContent?.p1_en || 'Dr. Pooja Awasthi offers caring spiritual guidance through Vedic Numerology, Tarot Reading, Energy Healing, and Life Coaching to help you see your life with clarity and hope.'}
                  </p>
                  <p>
                    {aboutContent?.p2_en || 'Her approach blends timeless Vedic wisdom with practical, everyday advice. She never tells you what you "must" do. Instead, she helps you understand yourself better, weigh your choices calmly, and move forward with peace and confidence.'}
                  </p>
                </div>
              )}
            </div>

            {/* Vision Quote Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#FBF5E6] border border-[#DEC38C] shadow-xs space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A5311]">
                <Sparkles size={14} className="text-[#B48228]" />
                <span>{bioLang === 'hi' ? 'हमारा उद्देश्य' : 'Her Vision'}</span>
              </div>
              <blockquote className="font-cormorant text-xl md:text-2xl italic font-medium text-[#1E162B] leading-snug">
                {bioLang === 'hi'
                  ? '“लोगों को उनके जीवन को अधिक समझ, आत्मविश्वास और सकारात्मक सोच के साथ जीने में मदद करना—ताकि वे अपनी अंदरूनी शक्ति को पहचानें और सही रास्ते पर आगे बढ़ सकें।”'
                  : '“Supporting individuals in understanding their lives with greater awareness, confidence, and a positive perspective—so they can connect with their inner strength and make their personal journey truly meaningful.”'}
              </blockquote>
            </div>

            {/* Three Pillars of Mentorship */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] shadow-xs space-y-4">
              <h3 className="font-cinzel text-base font-bold text-[#1E162B] flex items-center gap-2 border-b border-[#E6DFD3] pb-3">
                <Compass size={17} className="text-[#522B8A]" />
                <span>{bioLang === 'hi' ? 'हमारे मार्गदर्शन के 3 मुख्य आधार' : 'Three Sacred Pillars of Mentorship'}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pillars.map((pillar) => (
                  <div key={pillar.num} className="p-4 rounded-xl bg-white border border-[#E6DFD3] space-y-2 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <span className="font-cinzel text-xs font-bold text-white bg-[#522B8A] px-2.5 py-0.5 rounded-md">
                        {pillar.num}
                      </span>
                      <h4 className="font-bold text-xs text-[#1E162B]">{pillar.title}</h4>
                    </div>
                    <p className="text-[11px] text-[#4A4356] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Clean Standardized Button Group */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onBookClick}
                type="button"
                className="h-11 px-6 bg-[#522B8A] hover:bg-[#412070] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{t.bookBtn}</span>
                <ArrowRight size={14} />
              </button>
              <button
                type="button"
                onClick={() => setShowLightbox(true)}
                className="h-11 px-5 bg-white hover:bg-[#FBF5E6] text-[#1E162B] border border-[#DEC38C] font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-2xs inline-flex items-center gap-2 cursor-pointer"
              >
                <Maximize2 size={13} className="text-[#B48228]" />
                <span>{bioLang === 'hi' ? 'बड़ी फोटो देखें' : 'View Original Portrait'}</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Clean Lightbox Modal */}
      {showLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setShowLightbox(false)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] bg-white rounded-2xl p-4 border border-[#E6DFD3] shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowLightbox(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white hover:bg-[#FAF8F5] text-[#1E162B] border border-[#E6DFD3] transition-colors shadow-md cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="w-full overflow-hidden rounded-xl bg-[#FAF8F5]">
              <img
                src={poojaAuthenticPhoto}
                alt="Dr. Pooja Awasthi - Original Portrait"
                className="w-full max-h-[75vh] object-contain rounded-xl mx-auto"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/28.jpeg') target.src = '/28.jpeg';
                }}
              />
            </div>
            <div className="w-full pt-3 px-2 text-center">
              <h3 className="font-cinzel text-lg font-bold text-[#1E162B]">
                Dr. Pooja Awasthi
              </h3>
              <p className="text-xs text-[#5D556A] mt-0.5">
                {bioLang === 'hi'
                  ? 'आध्यात्मिक मार्गदर्शिका एवं सलाहकार • प्रामाणिक स्वरूप'
                  : 'Spiritual Guide & Sacred Consultant • Authentic Portrait'}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

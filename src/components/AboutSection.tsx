import React, { useState } from 'react';
import { Compass, Sparkles, Shield, CheckCircle, Maximize2, X, Award } from 'lucide-react';
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
        ? (aboutContent?.pillar1_title || 'सहानुभूतिपूर्ण श्रवण (Compassionate Listening)')
        : 'Compassionate Listening',
      desc: bioLang === 'hi'
        ? (aboutContent?.pillar1_desc || 'बिना किसी पूर्वग्रह के आपकी चिंताओं को ध्यानपूर्वक सुनना और मानसिक शांति प्रदान करना।')
        : 'Listening deeply to your unique circumstances without judgement to provide genuine peace.'
    },
    {
      num: '02',
      title: bioLang === 'hi'
        ? (aboutContent?.pillar2_title || 'वैदिक प्रामाणिकता (Authentic Vedic Insight)')
        : 'Authentic Vedic Insight',
      desc: bioLang === 'hi'
        ? (aboutContent?.pillar2_desc || 'शास्त्रीय पाराशरी, अंकशास्त्रीय व चक्र सूत्रों का सूक्ष्म वैज्ञानिक विश्लेषण।')
        : 'Rigorous calculation of birth and destiny numbers grounded in timeless Vedic tradition.'
    },
    {
      num: '03',
      title: bioLang === 'hi'
        ? (aboutContent?.pillar3_title || 'सकारात्मक रूपांतरण (Conscious Transformation)')
        : 'Conscious Transformation',
      desc: bioLang === 'hi'
        ? (aboutContent?.pillar3_desc || 'व्यावहारिक, सात्विक एवं भय-मुक्त मार्गदर्शन जो जीवन में स्थाई शांति और सफलता लाए।')
        : 'Practical, fear-free remedies empowering you to take charge of your life with calm courage.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FBF8F2] text-[#29242E] relative overflow-hidden">
      {/* Delicate background decorative element with radiant glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#EAE2F4]/60 to-[#D6B574]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#6941A5]">
            <span>{t.aboutNav}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'hi' ? 'पावन संकल्प एवं दृष्टिकोण' : 'Vision & Philosophy'}</span>
          </div>
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-[#24152F] leading-tight">
            {t.aboutTitle} — <br />
            <span className="italic font-normal text-[#6941A5]">{t.aboutSubtitle}</span>
          </h2>
        </div>

        {/* Editorial Layout: Founder Profile Photo Card + Biography & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (5 cols): Authentic Founder Photo & Credentials Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group rounded-2xl overflow-hidden bg-white border border-[#D6B574]/50 shadow-xl p-4 transition-all duration-300 hover:shadow-2xl">
              {/* Outer gold decorative trim */}
              <div className="absolute inset-0 border border-[#D6B574]/20 rounded-2xl pointer-events-none" />
              
              {/* Authentic Photo Container */}
              <div
                className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#24152F] cursor-pointer group/img"
                onClick={() => setShowLightbox(true)}
              >
                <img
                  src={displayPhoto}
                  alt="Dr. Pooja Awasthi with Tarot & Healing Crystals"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/28.jpeg') target.src = '/28.jpeg';
                  }}
                />
                
                {/* Gold gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#24152F] via-[#24152F]/70 to-transparent p-4 pt-10 text-white text-center">
                  <p className="font-cinzel text-base font-semibold text-[#D6B574]">
                    Dr. Pooja Awasthi
                  </p>
                  <p className="text-[11px] text-[#EAE2F4]/80 tracking-wider uppercase mt-0.5">
                    {bioLang === 'hi' ? 'आध्यात्मिक मार्गदर्शिका एवं सलाहकार' : 'Spiritual Guide & Sacred Consultant'}
                  </p>
                </div>

                {/* Lightbox zoom trigger badge */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-[#24152F]/80 text-[#D6B574] hover:bg-[#24152F] hover:text-white border border-[#D6B574]/40 backdrop-blur-sm transition-colors shadow-md">
                  <Maximize2 size={14} />
                </div>
              </div>

              {/* Photo Caption & Reference */}
              <div className="pt-3 pb-1 text-center border-b border-[#EAE2F4]">
                <p className="text-xs font-medium text-[#6941A5]">
                  {bioLang === 'hi'
                    ? 'चित्र: डॉ. पूजा अवस्थी (टैरो कार्ड्स एवं हीलिंग क्रिस्टल्स सहित)'
                    : 'Dr. Pooja Awasthi with Tarot & Healing Crystals (28.jpeg)'}
                </p>
              </div>

              {/* Core Credentials & Mastery */}
              <div className="pt-3 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#6941A5] flex items-center gap-1.5">
                  <Award size={13} className="text-[#D6B574]" />
                  <span>{bioLang === 'hi' ? 'विशेषज्ञता एवं साधना क्षेत्र' : 'Sacred Alignment Disciplines'}</span>
                </div>
                <ul className="text-xs text-[#29242E]/80 space-y-1.5 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-[#D6B574] mt-0.5">✦</span>
                    <span>
                      {bioLang === 'hi' ? (
                        <><strong>वैदिक अंकशास्त्री</strong> एवं कील्डियन नाम तरंग विशेषज्ञ</>
                      ) : (
                        <><strong>Vedic Numerologist</strong> & Chaldean Name Vibration Specialist</>
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D6B574] mt-0.5">✦</span>
                    <span>
                      {bioLang === 'hi' ? (
                        <><strong>सहज बोध टैरो</strong> एवं प्रतीक विज्ञान मार्गदर्शिका</>
                      ) : (
                        <><strong>Intuitive Tarot</strong> & Symbolic Archetypal Consultant</>
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D6B574] mt-0.5">✦</span>
                    <span>
                      {bioLang === 'hi' ? (
                        <><strong>आभा मंडल व चक्र हीलिंग</strong> ऊर्जा संतुलन विशेषज्ञ</>
                      ) : (
                        <><strong>Subtle Body Energy</strong> Cleanser & Chakra Harmonizer</>
                      )}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#D6B574] mt-0.5">✦</span>
                    <span>
                      {bioLang === 'hi' ? (
                        <><strong>जीवन मार्गदर्शन</strong> एवं आध्यात्मिक परामर्शदाता</>
                      ) : (
                        <><strong>Mindful Life Coach</strong> & Spiritual Mentor</>
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Ethical Sanctuary Guarantee */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#EAE2F4]/40 to-white border border-[#6941A5]/20 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#24152F]">
                <Shield size={16} className="text-[#6941A5]" />
                <span>{bioLang === 'hi' ? '100% नैतिक व सुरक्षित परामर्श' : '100% Ethical & Confidential Guidance'}</span>
              </div>
              <p className="text-xs text-[#29242E]/75 leading-relaxed">
                {bioLang === 'hi'
                  ? 'हम किसी भी तरह के भय या डराने वाले दावों से दूर रहते हैं। हर सत्र केवल आपकी मन की शांति, सही दिशा और आत्म-विश्वास के लिए समर्पित है।'
                  : 'Zero fear-based predictions or false promises. Every 1-on-1 session is an authentic, completely private space dedicated to your peace of mind and clarity.'}
              </p>
            </div>
          </div>

          {/* Right Column (7 cols): Spiritual Biography, Vision, & 3 Pillars */}
          <div className="lg:col-span-7 space-y-6 text-[#29242E]/85 leading-relaxed">
            
            {/* Bilingual Biography Header with Switcher */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#EAE2F4] shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-[#EAE2F4] pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6941A5]">
                  {bioLang === 'hi' ? 'आध्यात्मिक परिचय' : 'Spiritual Biography'}
                </span>
                <div className="inline-flex rounded-lg border border-[#D6B574]/40 p-0.5 bg-[#FBF8F2] text-xs">
                  <button
                    type="button"
                    onClick={() => setBioLang('en')}
                    className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                      bioLang === 'en'
                        ? 'bg-[#24152F] text-[#D6B574]'
                        : 'text-[#29242E]/70 hover:text-[#24152F]'
                    }`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => setBioLang('hi')}
                    className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                      bioLang === 'hi'
                        ? 'bg-[#24152F] text-[#D6B574]'
                        : 'text-[#29242E]/70 hover:text-[#24152F]'
                    }`}
                  >
                    हिन्दी
                  </button>
                </div>
              </div>

              {bioLang === 'hi' ? (
                <div className="space-y-4 text-sm font-normal text-[#29242E]/90 leading-relaxed">
                  <p className="text-base text-[#24152F] font-medium leading-relaxed">
                    {aboutContent?.p1_hi || 'डॉ. पूजा अवस्थी एक समर्पित आध्यात्मिक मार्गदर्शिका हैं, जो वैदिक अंकशास्त्र, टैरो मार्गदर्शन, चक्र हीलिंग और जीवन कोचिंग के माध्यम से लोगों को जीवन में नई दिशा और आशा देती हैं।'}
                  </p>
                  <p>
                    {aboutContent?.p2_hi || 'उनका दृष्टिकोण प्राचीन भारतीय ज्ञान परंपरा और आधुनिक समझ का सामंजस्यपूर्ण समन्वय है। वे किसी भय या अंधविश्वास के बिना साधकों को स्पष्ट, व्यावहारिक और आत्मिक मार्गदर्शन प्रदान करती हैं।'}
                  </p>
                </div>
              ) : (
                <div className="space-y-4 text-sm font-normal text-[#29242E]/90 leading-relaxed">
                  <p className="text-base text-[#24152F] font-medium leading-relaxed">
                    {aboutContent?.p1_en || 'Dr. Pooja Awasthi offers caring spiritual guidance through Vedic Numerology, Tarot Reading, Energy Healing, and Life Coaching to help you see your life with clarity and hope.'}
                  </p>
                  <p>
                    {aboutContent?.p2_en || 'Her approach blends timeless Vedic wisdom with practical, everyday advice. She never tells you what you "must" do. Instead, she helps you understand yourself better, weigh your choices calmly, and move forward with peace and confidence.'}
                  </p>
                </div>
              )}
            </div>

            {/* Her Vision Quote */}
            <div className="p-6 rounded-2xl bg-white border border-[#D6B574]/40 shadow-sm space-y-2 relative overflow-hidden group hover:border-[#D6B574] transition-colors">
              <div className="absolute -right-4 -bottom-4 w-28 h-28 bg-[#D6B574]/15 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#6941A5]">
                <Sparkles size={14} className="text-[#D6B574]" />
                <span>{bioLang === 'hi' ? 'पावन संकल्प' : 'Her Vision'}</span>
              </div>
              <blockquote className="font-cormorant text-xl md:text-2xl italic text-[#24152F] leading-snug">
                {bioLang === 'hi'
                  ? '“लोगों को उनके जीवन को अधिक जागरूकता, आत्मविश्वास और सकारात्मक दृष्टि से समझने में सहायता करना—ताकि वे अपनी आंतरिक शक्ति से जुड़ सकें और अपनी यात्रा को वास्तव में अर्थपूर्ण बना सकें।”'
                  : '“Supporting individuals in understanding their lives with greater awareness, confidence, and a positive perspective—so they can connect with their inner strength and make their personal journey truly meaningful.”'}
              </blockquote>
            </div>

            {/* Three Pillars of Mentorship */}
            <div className="p-6 rounded-2xl bg-white border border-[#EAE2F4] shadow-sm space-y-4">
              <h3 className="font-cinzel text-base font-bold text-[#24152F] flex items-center gap-2 border-b border-[#EAE2F4] pb-3">
                <Compass size={17} className="text-[#6941A5]" />
                <span>{bioLang === 'hi' ? 'मार्गदर्शन के तीन पावन स्तंभ' : 'Three Sacred Pillars of Mentorship'}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {pillars.map((pillar) => (
                  <div key={pillar.num} className="p-3.5 rounded-xl bg-[#FBF8F2] border border-[#EAE2F4] space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-cinzel text-xs font-bold text-[#D6B574] bg-[#24152F] px-2 py-0.5 rounded">
                        {pillar.num}
                      </span>
                      <h4 className="font-semibold text-xs text-[#24152F]">{pillar.title}</h4>
                    </div>
                    <p className="text-[11px] text-[#29242E]/75 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookClick}
                type="button"
                className="px-6 py-3 bg-[#24152F] hover:bg-[#341e44] text-[#D6B574] font-semibold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md hover:scale-[1.02] inline-flex items-center gap-2"
              >
                <span>{t.bookBtn}</span>
              </button>
              <button
                type="button"
                onClick={() => setShowLightbox(true)}
                className="px-5 py-3 bg-white hover:bg-[#FBF8F2] text-[#24152F] border border-[#D6B574] font-semibold text-xs uppercase tracking-wider rounded-lg transition-all shadow-xs inline-flex items-center gap-2"
              >
                <Maximize2 size={13} className="text-[#6941A5]" />
                <span>{bioLang === 'hi' ? 'मूल चित्र देखें' : 'View Original Photo (28.jpeg)'}</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Full-resolution Lightbox for authentic portrait */}
      {showLightbox && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setShowLightbox(false)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] bg-[#24152F] rounded-2xl p-3 border border-[#D6B574]/60 shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowLightbox(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#24152F]/90 text-white hover:text-[#D6B574] border border-[#D6B574]/40 transition-colors shadow-lg"
            >
              <X size={20} />
            </button>
            <div className="w-full overflow-hidden rounded-xl">
              <img
                src={poojaAuthenticPhoto}
                alt="Dr. Pooja Awasthi - Original Portrait (28.jpeg)"
                className="w-full max-h-[75vh] object-contain rounded-xl mx-auto"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== '/28.jpeg') target.src = '/28.jpeg';
                }}
              />
            </div>
            <div className="w-full pt-3 px-2 text-center">
              <h3 className="font-cinzel text-lg font-bold text-[#D6B574]">
                Dr. Pooja Awasthi
              </h3>
              <p className="text-xs text-[#EAE2F4]/80 mt-0.5">
                {bioLang === 'hi'
                  ? 'आध्यात्मिक मार्गदर्शिका एवं सलाहकार • प्रामाणिक स्वरूप'
                  : 'Spiritual Guide & Sacred Consultant • Authentic Consecrated Portrait (28.jpeg)'}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

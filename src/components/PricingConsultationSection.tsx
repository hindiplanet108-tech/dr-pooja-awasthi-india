import React from 'react';
import { ShieldCheck, Check, Sparkles, ArrowRight } from 'lucide-react';
import { getTranslation } from '../data/translations';

interface PricingConsultationSectionProps {
  lang: string;
  onBookClick: () => void;
  onOpenTariff?: () => void;
  onOpenBankUpi?: () => void;
}

export const PricingConsultationSection: React.FC<PricingConsultationSectionProps> = ({
  lang,
  onBookClick,
  onOpenTariff,
  onOpenBankUpi
}) => {
  const t = getTranslation(lang);

  const deliverables = [
    {
      title: lang === 'hi' ? '60 मिनट का व्यक्तिगत परामर्श सत्र' : '60-Minute Private 1-on-1 Session',
      desc: lang === 'hi' ? 'वीडियो या फोन कॉल द्वारा डॉ. पूजा जी से सीधा संवाद' : 'Private video or phone call directly with Dr. Pooja Awasthi'
    },
    {
      title: lang === 'hi' ? 'मूलांक व भाग्यांक विश्लेषण' : 'Birth & Destiny Numbers (Mulank & Bhagyank)',
      desc: lang === 'hi' ? 'जन्मतिथि के अनुसार आपकी खूबियों और सही करियर दिशा की पहचान' : 'Understand your personality, inner talents, and best life direction'
    },
    {
      title: lang === 'hi' ? 'नाम की स्पेलिंग व शुभ अंक सुधार' : 'Name Spelling & Lucky Number Check',
      desc: lang === 'hi' ? 'नाम की स्पेलिंग का अंकशास्त्रीय मिलान और शुभ संतुलन' : 'Check if your name spelling aligns with your lucky numbers'
    },
    {
      title: lang === 'hi' ? 'शुभ समय व सही निर्णय' : 'Best Timing for Career & Major Decisions',
      desc: lang === 'hi' ? 'करियर, नया काम, विवाह या निवेश के लिए सबसे अच्छा समय' : 'Know the most favorable months and years to start new projects'
    },
    {
      title: lang === 'hi' ? 'सरल और आसान घरेलू उपाय' : 'Simple & Practical Daily Remedies',
      desc: lang === 'hi' ? 'आपके अनुकूल शुभ रंग, शुभ दिन, सरल मंत्र व रत्न मार्गदर्शन' : 'Actionable daily tips, lucky colors, days, and gemstone advice'
    },
    {
      title: lang === 'hi' ? 'सत्र के बाद लिखित सारांश' : 'Written Summary & Next Steps',
      desc: lang === 'hi' ? 'बातचीत के मुख्य बिंदुओं और जरूरी उपायों की लिखित जानकारी' : 'Key points and important advice sent to you after the session'
    }
  ];

  const steps = [
    {
      num: '01',
      title: lang === 'hi' ? 'अपनी जानकारी साझा करें' : 'Share Your Details',
      desc:
        lang === 'hi'
          ? 'अपनी जन्मतिथि, नाम और जो सवाल आप पूछना चाहते हैं, वे बताएं।'
          : 'Send your birth date, name, and the questions on your mind.'
    },
    {
      num: '02',
      title: lang === 'hi' ? 'समय तय करें' : 'Confirm Your Time',
      desc:
        lang === 'hi'
          ? 'व्हाट्सएप (+91 91057 31969) पर अपनी सुविधानुसार समय निश्चित करें।'
          : 'Choose a convenient day and time slot easily on WhatsApp.'
    },
    {
      num: '03',
      title: lang === 'hi' ? 'सीधा व्यक्तिगत परामर्श' : '1-on-1 Consultation',
      desc:
        lang === 'hi'
          ? 'डॉ. पूजा अवस्थी के साथ 60 मिनट की शांत, गोपनीय और गहन बातचीत।'
          : 'Enjoy a calm, completely private 60-minute session with Dr. Pooja Awasthi.'
    },
    {
      num: '04',
      title: lang === 'hi' ? 'शांति व आत्मविश्वास' : 'Clarity & Next Steps',
      desc:
        lang === 'hi'
          ? 'मिली हुई स्पष्टता और सरल उपायों के साथ आत्मविश्वास से आगे बढ़ें।'
          : 'Move forward with clear answers, peace of mind, and simple remedies.'
    }
  ];

  return (
    <section id="charges" className="py-12 md:py-16 bg-[#FAF8F5] text-[#1E162B] relative border-t border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-[#522B8A]">
            <Sparkles size={14} className="text-[#B48228]" />
            <span>{t.chargesNav}</span>
            <span aria-hidden="true" className="text-[#B48228]">·</span>
            <span className="text-[#7A5311]">{lang === 'hi' ? '100% गोपनीय व व्यक्तिगत परामर्श' : 'Private Sanctuary'}</span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-medium text-[#1E162B] leading-tight">
            {t.chargesTitle} — <br />
            <span className="italic font-semibold text-[#522B8A]">{t.chargesSubtitle}</span>
          </h2>

          <p className="text-sm text-[#4A4356] leading-relaxed max-w-2xl mx-auto">
            {lang === 'hi'
              ? 'प्रत्येक सत्र डॉ. पूजा अवस्थी द्वारा स्वयं संचालित किया जाता है। बिना किसी हड़बड़ी के, आपके प्रश्नों को पूरी संवेदनशीलता के साथ सुना और सुलझाया जाता है।'
              : 'Every single consultation is conducted personally by Dr. Pooja Awasthi. Dedicated 60 minutes with 100% focused attention on your karmic matrix.'}
          </p>
        </div>

        {/* Pricing Card & Deliverables Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          
          {/* Luxury Editorial Light Signature Fee Card */}
          <div className="lg:col-span-5 rounded-3xl bg-white text-[#1E162B] p-8 sm:p-10 border-2 border-[#DEC38C] shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6 relative z-10">
              {/* Portrait Header */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3]">
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#DEC38C] shrink-0 aspect-square shadow-md bg-white p-0.5">
                    <img
                      src="/28.jpeg"
                      alt="Dr. Pooja Awasthi"
                      className="w-full h-full object-cover object-top rounded-xl"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== '/assets/images/dr_pooja_awasthi_portrait_1792561214013.jpg') {
                          target.src = '/assets/images/dr_pooja_awasthi_portrait_1792561214013.jpg';
                        }
                      }}
                    />
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#7A5311] px-2 py-0.5 rounded bg-[#FBF5E6] border border-[#DEC38C]">
                        {lang === 'hi' ? 'व्यक्तिगत परामर्श सत्र' : 'Comprehensive 1-on-1'}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#F4F0FA] text-[#522B8A] border border-[#DFD5F0] font-bold">
                        {lang === 'hi' ? '60 मिनट' : '60 Min'}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1E162B] leading-tight">
                      {lang === 'hi' ? 'डॉ. पूजा अवस्थी' : 'Dr. Pooja Awasthi'}
                    </h3>
                    <p className="text-[11px] text-[#5D556A] leading-snug">
                      {lang === 'hi'
                        ? 'प्रसिद्ध एवं अनुभवी अंकशास्त्री, टैरो रीडर व लाइफ कोच'
                        : 'Celebrity Numerologist, Tarot Reader & Spiritual Guide'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bold ₹5,100 Light Champagne Pricing Box */}
              <div className="p-5 rounded-2xl bg-[#FBF5E6] border border-[#DEC38C] shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A5311] flex items-center gap-1.5">
                    <Sparkles size={13} className="text-[#B48228]" />
                    <span>{lang === 'hi' ? 'निश्चित परामर्श फीस (Fixed Fee)' : 'Guaranteed Fixed Fee'}</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                    {lang === 'hi' ? 'सीधा संवाद' : '100% Direct'}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="inline-flex items-baseline font-rupee">
                    <strong className="font-black text-[#B48228] text-4xl sm:text-5xl rupee-symbol mr-1 select-none">
                      ₹
                    </strong>
                    <strong className="text-5xl sm:text-6xl font-black text-[#1E162B] tabular-nums tracking-tight">
                      5,100
                    </strong>
                  </span>
                  <span className="text-xs text-[#4A4356] uppercase tracking-wider font-bold">
                    {lang === 'hi' ? '/ व्यक्तिगत सत्र' : '/ 1-on-1 Session'}
                  </span>
                </div>

                <p className="text-xs text-[#4A4356] mt-2 leading-relaxed">
                  {lang === 'hi'
                    ? 'अंकशास्त्र, टैरो या जीवन मार्गदर्शन सत्र के लिए निश्चित परामर्श फीस।'
                    : 'Standard verified fee for Vedic Numerology, Tarot Reading, or Integrated Life Coaching.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD3] space-y-2 text-xs text-[#4A4356]">
                <div className="flex items-center gap-2 font-bold text-[#1E162B]">
                  <ShieldCheck size={16} className="text-emerald-700" />
                  <span>{lang === 'hi' ? 'परामर्श की प्रमुख विशेषताएं:' : 'Session Assurances:'}</span>
                </div>
                <ul className="space-y-1.5 pl-6 list-disc text-[#4A4356] text-[11px]">
                  <li>{lang === 'hi' ? 'डॉ. पूजा अवस्थी जी से सीधा संवाद' : 'Direct 1-on-1 dialogue with Dr. Pooja Awasthi'}</li>
                  <li>{lang === 'hi' ? '100% गोपनीय और सुरक्षित बातचीत' : '100% confidential and non-judgmental space'}</li>
                  <li>{lang === 'hi' ? 'व्हाट्सएप पर तुरंत समय की पुष्टि' : 'Instant appointment confirmation via WhatsApp'}</li>
                </ul>
              </div>
            </div>

            <div className="pt-6 relative z-10 space-y-3">
              <button
                type="button"
                onClick={onBookClick}
                className="w-full h-12 bg-[#522B8A] hover:bg-[#412070] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>{t.bookBtn}</span>
                <span className="px-2.5 py-0.5 rounded-md bg-white/15 text-white font-rupee font-black text-xs sm:text-sm">
                  ₹5,100
                </span>
                <ArrowRight size={15} />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {onOpenTariff && (
                  <button
                    type="button"
                    onClick={onOpenTariff}
                    className="h-10 px-3 rounded-xl border border-[#DEC38C] bg-[#FBF5E6] hover:bg-[#F5E8C8] text-[#7A5311] text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Sparkles size={13} className="text-[#B48228] shrink-0" />
                    <span className="truncate">{lang === 'hi' ? '11 विशिष्ट सेवाएं (16)' : '11 Services & Fees'}</span>
                  </button>
                )}
                {onOpenBankUpi && (
                  <button
                    type="button"
                    onClick={onOpenBankUpi}
                    className="h-10 px-3 rounded-xl border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ShieldCheck size={13} className="text-emerald-700 shrink-0" />
                    <span className="truncate">{lang === 'hi' ? 'Bank & UPI विवरण' : 'Bank & UPI Details'}</span>
                  </button>
                )}
              </div>

              <p className="text-[11px] text-[#5D556A] text-center">
                {lang === 'hi'
                  ? 'व्हाट्सएप द्वारा आधिकारिक समय निर्धारण एवं पुष्टि'
                  : 'Official booking & calendar confirmation via WhatsApp'}
              </p>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div className="lg:col-span-7 rounded-3xl bg-white p-8 sm:p-10 border border-[#E6DFD3] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-cinzel text-xl font-bold text-[#1E162B] mb-6 border-b border-[#EFECE6] pb-4">
                {lang === 'hi' ? 'परामर्श सत्र में आपको क्या मिलेगा:' : 'What Your Consultation Includes:'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F4F0FA] border border-[#DFD5F0] flex items-center justify-center shrink-0 mt-0.5 text-[#522B8A]">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-[#1E162B]">{item.title}</h4>
                      <p className="text-[11px] text-[#4A4356] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD3] text-xs text-[#4A4356] leading-relaxed">
              {lang === 'hi' ? (
                <>
                  <span className="font-bold text-[#522B8A]">परामर्श पूर्व तैयारी: </span>
                  सत्र से पहले अपनी जन्मतिथि, जन्म समय और अपने 2-3 मुख्य प्रश्न लिख लें ताकि चर्चा अधिक उपयोगी व स्पष्ट हो सके।
                </>
              ) : (
                <>
                  <span className="font-bold text-[#522B8A]">Preparation Guidance: </span>
                  Note down your birth date, time, and 2-3 specific priorities you wish to explore for maximum depth during the consultation.
                </>
              )}
            </div>
          </div>

        </div>

        {/* 4-Step Consultation Journey */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#522B8A]">
              {lang === 'hi' ? 'सरल एवं पारदर्शी प्रक्रिया' : 'Seamless Workflow'}
            </span>
            <h3 className="font-cormorant text-2xl sm:text-3xl font-medium text-[#1E162B]">
              {lang === 'hi' ? 'स्पष्टता और मार्गदर्शन के 4 सरल चरण' : 'Your 4-Step Journey to Clarity'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.num}
                className="p-6 rounded-2xl bg-white border border-[#E6DFD3] shadow-xs space-y-3 relative group hover:border-[#DEC38C] transition-all hover:-translate-y-1"
              >
                <span className="font-cinzel text-lg font-bold text-white bg-[#522B8A] px-3 py-1 rounded-lg inline-block shadow-xs">
                  {s.num}
                </span>
                <h4 className="font-bold text-sm text-[#1E162B]">{s.title}</h4>
                <p className="text-xs text-[#4A4356] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

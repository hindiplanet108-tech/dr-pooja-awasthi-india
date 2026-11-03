import React from 'react';
import { ShieldCheck, Check, Clock, Calendar, MessageCircle, Video, FileText, Sparkles } from 'lucide-react';
import { getTranslation } from '../data/translations';
import poojaAuthenticPhoto from '../assets/images/pooja_awasthi_portrait.jpeg';

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
    <section id="charges" className="py-20 md:py-28 bg-[#FBF8F2] text-[#29242E] relative border-t border-[#EAE2F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#6941A5]">
            <Sparkles size={14} className="text-[#D6B574]" />
            <span>{t.chargesNav}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'hi' ? '100% गोपनीय व व्यक्तिगत परामर्श' : 'Private Sanctuary'}</span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-[#24152F] leading-tight">
            {t.chargesTitle} — <br />
            <span className="italic font-normal text-[#6941A5]">{t.chargesSubtitle}</span>
          </h2>

          <p className="text-sm text-[#29242E]/75 leading-relaxed max-w-2xl mx-auto font-light">
            {lang === 'hi'
              ? 'प्रत्येक सत्र डॉ. पूजा अवस्थी द्वारा स्वयं संचालित किया जाता है। बिना किसी हड़बड़ी के, आपके प्रश्नों को पूरी संवेदनशीलता के साथ सुना और सुलझाया जाता है।'
              : 'Every single consultation is conducted personally by Dr. Pooja Awasthi. Dedicated 60 minutes with 100% focused attention on your karmic matrix.'}
          </p>
        </div>

        {/* Pricing Card & Deliverables Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Main Price Feature Card with Glowing Gold Border */}
          <div className="lg:col-span-5 rounded-3xl bg-[#24152F] text-white p-8 sm:p-10 border border-[#D6B574]/40 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#6941A5]/40 to-[#D6B574]/20 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />

            <div className="space-y-6 relative z-10">
              {/* Elevated Authentic Portrait Header */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-white/10 via-[#6941A5]/20 to-white/5 border border-[#D6B574]/40 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#D6B574] shrink-0 aspect-square shadow-xl bg-[#1c0f26]">
                    <img
                      src="/28.jpeg"
                      alt="Dr. Pooja Awasthi"
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== '/assets/images/dr_pooja_awasthi_portrait_1792561214013.jpg') {
                          target.src = '/assets/images/dr_pooja_awasthi_portrait_1792561214013.jpg';
                        }
                      }}
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent py-0.5 text-center">
                      <span className="text-[9px] font-black tracking-wider text-[#F5C242] uppercase">
                        ✓ Verified
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F5C242] px-2 py-0.5 rounded-md bg-[#D6B574]/20 border border-[#D6B574]/30">
                        {lang === 'hi' ? 'व्यक्तिगत परामर्श सत्र' : 'Comprehensive 1-on-1'}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/15 text-white border border-white/20 font-bold">
                        {lang === 'hi' ? '60 मिनट' : '60 Min'}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                      {lang === 'hi' ? 'डॉ. पूजा अवस्थी' : 'Dr. Pooja Awasthi'}
                    </h3>
                    <p className="text-[11px] text-[#EAE2F4]/80 leading-snug font-light">
                      {lang === 'hi'
                        ? 'प्रसिद्ध एवं अनुभवी अंकशास्त्री, टैरो रीडर व लाइफ कोच'
                        : 'Celebrity Numerologist, Tarot Reader & Spiritual Guide'}
                    </p>
                  </div>
                </div>
              </div>

              {/* BOLD ₹5,100 Pricing Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/10 via-[#D6B574]/15 to-black/40 border-2 border-[#D6B574] shadow-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#F5C242] flex items-center gap-1.5">
                    <Sparkles size={13} className="text-[#F5C242]" />
                    <span>{lang === 'hi' ? 'निश्चित परामर्श फीस (Fixed Fee)' : 'Guaranteed Fixed Fee'}</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                    {lang === 'hi' ? 'सीधा संवाद' : '100% Direct'}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  {/* Extra bold ₹ sign and 5,100 */}
                  <span className="inline-flex items-baseline">
                    <strong className="font-black text-[#F5C242] text-4xl sm:text-5xl font-sans drop-shadow-[0_2px_10px_rgba(245,194,66,0.5)] mr-1 select-none">
                      ₹
                    </strong>
                    <strong className="font-cormorant text-5xl sm:text-6xl font-black text-white tabular-nums drop-shadow-[0_2px_14px_rgba(214,181,116,0.5)] tracking-tight">
                      5,100
                    </strong>
                  </span>
                  <span className="text-xs text-[#EAE2F4]/90 uppercase tracking-wider font-bold">
                    {lang === 'hi' ? '/ व्यक्तिगत सत्र' : '/ 1-on-1 Session'}
                  </span>
                </div>

                <p className="text-xs text-[#EAE2F4]/90 mt-2 font-light leading-relaxed">
                  {lang === 'hi'
                    ? 'अंकशास्त्र, टैरो या जीवन मार्गदर्शन सत्र के लिए निश्चित परामर्श फीस।'
                    : 'Standard verified fee for Vedic Numerology, Tarot Reading, or Integrated Life Coaching.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-[#D6B574]/20 space-y-2 text-xs text-[#EAE2F4]/90">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <ShieldCheck size={16} className="text-[#D6B574]" />
                  <span>{lang === 'hi' ? 'परामर्श की प्रमुख विशेषताएं:' : 'Session Assurances:'}</span>
                </div>
                <ul className="space-y-1.5 pl-6 list-disc text-[#EAE2F4]/80 text-[11px]">
                  <li>{lang === 'hi' ? 'डॉ. पूजा अवस्थी जी से सीधा संवाद' : 'Direct 1-on-1 dialogue with Dr. Pooja Awasthi'}</li>
                  <li>{lang === 'hi' ? '100% गोपनीय और सुरक्षित बातचीत' : '100% confidential and non-judgmental space'}</li>
                  <li>{lang === 'hi' ? 'व्हाट्सएप पर तुरंत समय की पुष्टि' : 'Instant appointment confirmation via WhatsApp'}</li>
                </ul>
              </div>
            </div>

            <div className="pt-6 relative z-10 space-y-2.5">
              <button
                type="button"
                onClick={onBookClick}
                className="w-full py-4 bg-gradient-to-r from-[#D6B574] via-[#F5C242] to-[#D6B574] hover:brightness-110 text-[#24152F] font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-xl hover:scale-[1.01] flex items-center justify-center gap-2"
              >
                <span>{t.bookBtn}</span>
                <span className="px-3 py-0.5 rounded-full bg-[#24152F] text-[#F5C242] font-black text-xs sm:text-sm border border-[#D6B574]/40 shadow-inner">
                  ₹5,100
                </span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                {onOpenTariff && (
                  <button
                    type="button"
                    onClick={onOpenTariff}
                    className="py-2.5 px-3 rounded-lg border border-[#D6B574]/50 bg-white/5 hover:bg-[#D6B574]/20 text-[#D6B574] text-[11px] font-semibold transition-all text-center"
                  >
                    {lang === 'hi' ? '★ संपूर्ण 11 सेवा शुल्क' : '★ 11 Services Tariff'}
                  </button>
                )}
                {onOpenBankUpi && (
                  <button
                    type="button"
                    onClick={onOpenBankUpi}
                    className="py-2.5 px-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/15 text-white text-[11px] font-medium transition-all text-center"
                  >
                    {lang === 'hi' ? 'बैंक एवं यूपीआई' : 'Bank & UPI QR'}
                  </button>
                )}
              </div>

              <p className="text-[11px] text-[#EAE2F4]/60 text-center pt-1">
                {lang === 'hi'
                  ? 'व्हाट्सएप द्वारा आधिकारिक समय निर्धारण एवं पुष्टि'
                  : 'Official booking & calendar confirmation via WhatsApp'}
              </p>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div className="lg:col-span-7 rounded-3xl bg-white p-8 sm:p-10 border border-[#EAE2F4] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-cinzel text-xl font-bold text-[#24152F] mb-6 border-b border-[#EAE2F4] pb-4">
                {lang === 'hi' ? 'परामर्श सत्र में आपको क्या मिलेगा:' : 'What Your Consultation Includes:'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#EAE2F4] flex items-center justify-center shrink-0 mt-0.5 text-[#6941A5]">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-bold text-[#24152F]">{item.title}</h4>
                      <p className="text-[11px] text-[#29242E]/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Advice Note */}
            <div className="mt-8 p-4 rounded-xl bg-[#FBF8F2] border border-[#EAE2F4] text-xs text-[#29242E]/75 leading-relaxed">
              {lang === 'hi' ? (
                <>
                  <span className="font-bold text-[#6941A5]">परामर्श पूर्व तैयारी: </span>
                  सत्र से पहले अपनी जन्मतिथि, जन्म समय और अपने 2-3 मुख्य प्रश्न लिख लें ताकि चर्चा अधिक उपयोगी व स्पष्ट हो सके।
                </>
              ) : (
                <>
                  <span className="font-bold text-[#6941A5]">Preparation Guidance: </span>
                  Note down your birth date, time, and 2-3 specific priorities you wish to explore for maximum depth during the consultation.
                </>
              )}
            </div>
          </div>

        </div>

        {/* 4-Step Consultation Journey */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6941A5]">
              {lang === 'hi' ? 'सरल एवं पारदर्शी प्रक्रिया' : 'Seamless Workflow'}
            </span>
            <h3 className="font-cormorant text-2xl sm:text-3xl font-light text-[#24152F]">
              {lang === 'hi' ? 'स्पष्टता और मार्गदर्शन के 4 सरल चरण' : 'Your 4-Step Journey to Clarity'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.num}
                className="p-6 rounded-2xl bg-white border border-[#EAE2F4] shadow-xs space-y-3 relative group hover:border-[#D6B574]/80 transition-all hover:-translate-y-1"
              >
                <span className="font-cinzel text-xl font-bold text-[#D6B574] bg-[#24152F] px-2.5 py-1 rounded inline-block shadow-xs">
                  {s.num}
                </span>
                <h4 className="font-semibold text-sm text-[#24152F]">{s.title}</h4>
                <p className="text-xs text-[#29242E]/75 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

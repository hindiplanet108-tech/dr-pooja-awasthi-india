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
      title: lang === 'hi' ? '60 मिनट का गहन 1-on-1 सत्र' : '60-Minute Comprehensive 1-on-1 Session',
      desc: lang === 'hi' ? 'वीडियो या ऑडियो कॉल द्वारा पूजा जी से सीधा संवाद' : 'Private video or audio dialogue directly with Dr. Pooja Awasthi'
    },
    {
      title: lang === 'hi' ? 'मूलांक व भाग्यांक का संपूर्ण विश्लेषण' : 'Mulank & Bhagyank Cosmic Matrix Analysis',
      desc: lang === 'hi' ? 'जन्मतिथि के आधार पर कर्म चक्र और करियर का मार्गदर्शन' : 'Uncovering your core soul number, destiny trajectory, and career cycles'
    },
    {
      title: lang === 'hi' ? 'नाम कंपन व स्पेलिंग संतुलन' : 'Name Vibration & Phonetic Alignment',
      desc: lang === 'hi' ? 'नाम के अक्षरों का अंकशास्त्रीय परीक्षण और शुभ संशोधन' : 'Evaluating your current name frequency against planetary rulers'
    },
    {
      title: lang === 'hi' ? 'आने वाले समय का ग्रह चक्र (Timing)' : 'Planetary Timing & Auspicious Windows',
      desc: lang === 'hi' ? 'करियर, व्यापार, विवाह व निवेश के लिए अनुकूल समय' : 'Identifying optimal cycles for major ventures and decisions'
    },
    {
      title: lang === 'hi' ? 'व्यक्तिगत और सरल वैदिक उपाय' : 'Personalized Practical Vedic Remedies',
      desc: lang === 'hi' ? 'शुभ रंग, शुभ दिन, मंत्र व क्रिस्टल मार्गदर्शन' : 'Actionable daily remedies, auspicious colors, mantras, and crystals'
    },
    {
      title: lang === 'hi' ? 'सत्रोपरांत मार्गदर्शन सार' : 'Post-Session Summary & Follow-Up',
      desc: lang === 'hi' ? 'महत्वपूर्ण बिंदुओं का लिखित सारांश व दिशा-निर्देश' : 'Key points and actionable decision checklist delivered after the call'
    }
  ];

  const steps = [
    {
      num: '01',
      title: lang === 'hi' ? 'विवरण साझा करें' : 'Share Coordinates',
      desc:
        lang === 'hi'
          ? 'अपनी जन्मतिथि, जन्म समय, जन्म स्थान और अपने मुख्य प्रश्न दर्ज करें।'
          : 'Submit your birth date, time, location, and the core crossroads you wish to navigate.'
    },
    {
      num: '02',
      title: lang === 'hi' ? 'समय निर्धारण' : 'Direct Confirmation',
      desc:
        lang === 'hi'
          ? 'व्हाट्सएप (+91 91057 31969) पर आपकी सुविधानुसार समय निश्चित किया जाता है।'
          : 'Your preferred video or audio time slot is confirmed directly via WhatsApp or Email.'
    },
    {
      num: '03',
      title: lang === 'hi' ? 'निजी 1-on-1 सत्र' : 'Private Guidance Session',
      desc:
        lang === 'hi'
          ? 'डॉ. पूजा अवस्थी के साथ 60 मिनट का शांत, गोपनीय और गहन विश्लेषण सत्र।'
          : 'Experience an unhurried, compassionate, and deeply focused 60-minute consultation.'
    },
    {
      num: '04',
      title: lang === 'hi' ? 'सचेत आत्मविश्वास' : 'Grounded Roadmap',
      desc:
        lang === 'hi'
          ? 'प्राप्त स्पष्टता और वैदिक उपायों को अपने दैनिक जीवन में लागू करें।'
          : 'Walk away with total clarity, empowering answers, and constructive next steps.'
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
            <span>Private Sanctuary</span>
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
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border border-[#D6B574] shrink-0 aspect-square shadow-sm">
                    <img
                      src={poojaAuthenticPhoto}
                      alt="Dr. Pooja Awasthi"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== '/28.jpeg') target.src = '/28.jpeg';
                      }}
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#D6B574] block">
                      {lang === 'hi' ? 'मानक परामर्श सत्र' : 'Comprehensive Guidance'}
                    </span>
                    <span className="text-[11px] text-[#EAE2F4]/70">Dr. Pooja Awasthi (1-on-1)</span>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-[#EAE2F4] border border-white/20">
                  60 Minutes
                </span>
              </div>

              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-cormorant text-5xl sm:text-6xl font-light text-[#D6B574] tabular-nums">
                    ₹5,100
                  </span>
                  <span className="text-xs text-[#EAE2F4]/70 uppercase tracking-wider">
                    / 1-on-1 Session
                  </span>
                </div>
                <p className="text-xs text-[#EAE2F4]/80 mt-2 font-light">
                  Standard verified fee for Vedic Numerology, Tarot Reading, or Integrated Life Coaching.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-[#D6B574]/20 space-y-2 text-xs text-[#EAE2F4]/90">
                <div className="flex items-center gap-2 font-semibold text-white">
                  <ShieldCheck size={16} className="text-[#D6B574]" />
                  <span>Session Assurances:</span>
                </div>
                <ul className="space-y-1.5 pl-6 list-disc text-[#EAE2F4]/80 text-[11px]">
                  <li>Direct 1-on-1 dialogue with Dr. Pooja Awasthi</li>
                  <li>100% confidential and non-judgmental space</li>
                  <li>Instant appointment confirmation via WhatsApp</li>
                </ul>
              </div>
            </div>

            <div className="pt-8 relative z-10 space-y-2.5">
              <button
                type="button"
                onClick={onBookClick}
                className="w-full py-3.5 bg-gradient-to-r from-[#D6B574] via-[#e2c78a] to-[#D6B574] hover:brightness-105 text-[#24152F] font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-md hover:scale-[1.01]"
              >
                {t.bookBtn} (₹5,100)
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                {onOpenTariff && (
                  <button
                    type="button"
                    onClick={onOpenTariff}
                    className="py-2.5 px-3 rounded-lg border border-[#D6B574]/50 bg-white/5 hover:bg-[#D6B574]/20 text-[#D6B574] text-[11px] font-semibold transition-all text-center"
                  >
                    ★ 11 Services Tariff
                  </button>
                )}
                {onOpenBankUpi && (
                  <button
                    type="button"
                    onClick={onOpenBankUpi}
                    className="py-2.5 px-3 rounded-lg border border-white/20 bg-white/5 hover:bg-white/15 text-white text-[11px] font-medium transition-all text-center"
                  >
                    Bank & UPI QR
                  </button>
                )}
              </div>

              <p className="text-[11px] text-[#EAE2F4]/60 text-center pt-1">
                Official booking & calendar confirmation via WhatsApp
              </p>
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div className="lg:col-span-7 rounded-3xl bg-white p-8 sm:p-10 border border-[#EAE2F4] shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-cinzel text-xl font-bold text-[#24152F] mb-6 border-b border-[#EAE2F4] pb-4">
                What Your Consultation Includes:
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
              <span className="font-bold text-[#6941A5]">Preparation Guidance: </span>
              Note down your birth date, time, and 2-3 specific priorities you wish to explore for maximum depth during the consultation.
            </div>
          </div>

        </div>

        {/* 4-Step Consultation Journey */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#6941A5]">
              Seamless Workflow
            </span>
            <h3 className="font-cormorant text-2xl sm:text-3xl font-light text-[#24152F]">
              Your 4-Step Journey to Clarity
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

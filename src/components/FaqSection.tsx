import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Mail, Sparkles } from 'lucide-react';

interface FaqSectionProps {
  lang?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang = 'en' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const faqs_en = [
    {
      q: "How do online consultations with Pooja ji work?",
      a: "All sessions are conducted seamlessly via high-definition Google Meet, Zoom, or WhatsApp video call. You receive an instant confirmation and prep guide once booked. Distance does not diminish the accuracy or potency of spiritual and numerological consultations."
    },
    {
      q: "What details are needed for a Vedic Numerology reading?",
      a: "For Vedic Numerology and life chart breakdown, you provide your full date of birth (Day, Month, Year), your legal/daily name spelling, and approximate birth time (if available). This allows Dr. Pooja Awasthi to calculate your Mulank, Bhagyank, planetary periods (Dashas), and Chaldean name vibrations."
    },
    {
      q: "What is the difference between Tarot and Fortune Telling?",
      a: "Tarot is not fatalistic fortune-telling. Rather, it serves as a sacred intuitive mirror reflecting your subconscious mind, underlying emotional conflicts, and emerging opportunities. Pooja ji’s guidance focuses on returning conscious autonomy and clarity into your hands, rather than creating passive dependency on pre-determined outcomes."
    },
    {
      q: "Can Energy Healing work remotely?",
      a: "Yes. In the Vedic and quantum paradigm of Prana (vital life force), subtle energy transcends geographical boundaries. Distance energy healing, aura cleansing, and chakra alignment operate across the subtle biofield through meditative attunement, sacred sound resonance, and intention."
    }
  ];

  const faqs_hi = [
    {
      q: "पूजा जी के साथ ऑनलाइन परामर्श कैसे आयोजित होता है?",
      a: "सभी सत्र उच्च गुणवत्ता वाले गूगल मीट, ज़ूम या व्हाट्सएप वीडियो/ऑडियो कॉल द्वारा आयोजित किए जाते हैं। बुकिंग के बाद आपको समय व लिंक प्राप्त होता है। वैदिक व आध्यात्मिक परामर्श में दूरी का कोई नकारात्मक प्रभाव नहीं पड़ता।"
    },
    {
      q: "वैदिक अंकशास्त्र परामर्श के लिए किन जानकारियों की आवश्यकता होती है?",
      a: "वैदिक अंकशास्त्र विश्लेषण के लिए आपकी पूर्ण जन्मतिथि (दिन, माह, वर्ष), पुकारू नाम की अंग्रेजी वर्तनी (स्पेलिंग), तथा जन्म समय (यदि उपलब्ध हो) आवश्यक होता है। इससे आपके मूलांक, भाग्यांक और नाम कंपन की गणना की जाती है।"
    },
    {
      q: "टैरो कार्ड रीडिंग और केवल भविष्य कथन में क्या अंतर है?",
      a: "टैरो अंधविश्वास या भय आधारित भविष्य कथन नहीं है। यह आपके अवचेतन मन और वर्तमान ऊर्जाओं का पावन दर्पण है। पूजा जी का मार्गदर्शन आपको अपने निर्णयों के प्रति सजग, आत्मविश्वासी और स्पष्ट बनाता है।"
    },
    {
      q: "क्या दूरस्थ ऊर्जा उपचार (डिस्टेंस हीलिंग) वास्तव में काम करता है?",
      a: "हाँ। सनातन वैदिक परंपरा और प्राण ऊर्जा के सिद्धांत के अनुसार, सूक्ष्म चेतना भौतिक दूरी से परे होती है। ध्यान, संकल्प, पवित्र मंत्र ध्वनि और सूक्ष्म ऊर्जा कंपन के माध्यम से डिस्टेंस हीलिंग अत्यंत प्रभावशाली परिणाम देती है।"
    }
  ];

  const faqs = lang === 'hi' ? faqs_hi : faqs_en;

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FBF8F2] text-[#29242E] relative border-t border-[#EAE2F4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#6941A5]">
            <HelpCircle size={14} className="text-[#D6B574]" />
            <span>{lang === 'hi' ? 'जिज्ञासा एवं समाधान' : 'Clarifications & Questions'}</span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-[#24152F] leading-tight">
            {lang === 'hi' ? 'प्रायः पूछे जाने वाले प्रश्न —' : 'Frequently Asked Questions —'} <br />
            <span className="italic font-normal text-[#6941A5]">
              {lang === 'hi'
                ? 'समय निर्धारण, गोपनीयता एवं सत्र की प्रक्रिया से जुड़ी संपूर्ण जानकारी'
                : 'Everything you need to know about scheduling, confidentiality, and what to expect'}
            </span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-14">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-[#EAE2F4] hover:border-[#D6B574]/60 transition-colors shadow-xs overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-cinzel text-base font-semibold text-[#24152F]">
                    {item.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-[#FBF8F2] text-[#6941A5] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#29242E]/80 leading-relaxed font-light border-t border-[#EAE2F4]/60">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Team Help Box */}
        <div className="p-8 rounded-3xl bg-[#24152F] text-white border border-[#D6B574]/40 shadow-xl space-y-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:space-y-0">
          <div className="space-y-1">
            <h4 className="font-cinzel text-lg font-bold text-white">
              {lang === 'hi' ? 'कोई अन्य प्रश्न या विशेष परामर्श आवश्यकता?' : 'Still have questions or special requirements?'}
            </h4>
            <p className="text-xs text-[#EAE2F4]/75">
              {lang === 'hi'
                ? 'पूजा जी की टीम से सीधे संपर्क करें। बुकिंग से पूर्व किसी भी जिज्ञासा के समाधान हेतु हम सदैव तत्पर हैं।'
                : 'Connect directly with Pooja ji’s team. We are happy to clarify any questions prior to booking.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919105731969"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm"
            >
              <MessageSquare size={14} />
              <span>WhatsApp: +919105731969</span>
            </a>
            <a
              href="mailto:astro.poojaofficial@gmail.com"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#D6B574] text-xs font-semibold flex items-center gap-2 border border-[#D6B574]/30 transition-colors"
            >
              <Mail size={14} />
              <span>{lang === 'hi' ? 'ईमेल सहायता' : 'Email Support'}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

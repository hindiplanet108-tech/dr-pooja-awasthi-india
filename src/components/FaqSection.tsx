import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare, Mail, Sparkles } from 'lucide-react';
import { useSiteContent } from '../utils/siteContentContext';

interface FaqSectionProps {
  lang?: string;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang = 'en' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default
  const { siteContent } = useSiteContent();

  const faqs_en = [
    {
      q: "How do online consultations with Pooja ji work?",
      a: "Sessions take place comfortably via Google Meet, Zoom, or WhatsApp video/audio call. Once you book, you receive a direct link and quick confirmation. Online sessions are just as personal, comfortable, and accurate as meeting in person."
    },
    {
      q: "What details are needed for a Vedic Numerology reading?",
      a: "You only need your date of birth (Day, Month, Year) and the usual spelling of your name. If you know your approximate birth time, that is helpful too. This helps calculate your Birth Number (Mulank) and Destiny Number (Bhagyank)."
    },
    {
      q: "What is the difference between Tarot and Fortune Telling?",
      a: "Tarot is not about creating fear or guessing rigid futures. It acts like an honest mirror to your thoughts, feelings, and choices. Pooja ji helps you understand where you stand and make confident decisions that bring peace."
    },
    {
      q: "Does Distance Energy Healing really work?",
      a: "Yes. Energy and heartfelt prayers are not limited by physical distance. Through calm meditation and positive intention, distance sessions bring wonderful relief, peace, and lightness wherever you are in the world."
    }
  ];

  const default_faqs_hi = [
    {
      q: "पूजा जी के साथ ऑनलाइन परामर्श कैसे होता है?",
      a: "सत्र बहुत आसानी से गूगल मीट, ज़ूम या व्हाट्सएप वीडियो/ऑडियो कॉल द्वारा होते हैं। बुकिंग के बाद आपको समय और लिंक मिल जाता है। ऑनलाइन सत्र भी आमने-सामने की तरह ही व्यक्तिगत और असरदार होते हैं।"
    },
    {
      q: "वैदिक अंकशास्त्र के लिए किन जानकारियों की जरूरत होती है?",
      a: "इसके लिए केवल आपकी जन्मतिथि (दिन, महीना, साल) और आपके नाम की सही स्पेलिंग चाहिए। यदि जन्म का समय भी पता हो, तो और भी अच्छा है। इससे आपके मूलांक और भाग्यांक की सही गणना की जाती है।"
    },
    {
      q: "टैरो कार्ड रीडिंग और केवल भविष्य बताने में क्या फर्क है?",
      a: "टैरो किसी डर या अंधविश्वास पर आधारित नहीं है। यह आपके मन, विचारों और वर्तमान स्थिति का एक सच्चा दर्पण है। पूजा जी आपको सही फैसले लेने और मन का भ्रम दूर करने में मदद करती हैं।"
    },
    {
      q: "क्या दूर से की जाने वाली हीलिंग (डिस्टेंस हीलिंग) काम करती है?",
      a: "हाँ। सकारात्मक ऊर्जा और प्रार्थना की कोई सीमा नहीं होती। ध्यान, संकल्प और सकारात्मक तरंगों के माध्यम से आप घर बैठे ही मन की शांति, हल्कापन और नई ऊर्जा महसूस कर सकते हैं।"
    }
  ];

  const customFaqs = siteContent?.faqs && siteContent.faqs.length > 0
    ? siteContent.faqs.map(f => ({ q: f.q, a: f.a }))
    : null;

  const faqs = lang === 'hi' 
    ? (customFaqs || default_faqs_hi) 
    : (customFaqs && customFaqs.length > 0 ? customFaqs : faqs_en);

  return (
    <section id="faq" className="py-12 md:py-16 bg-white text-[#1E162B] relative border-t border-[#E6DFD3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 space-y-2.5">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#522B8A]">
            <HelpCircle size={14} className="text-[#B48228]" />
            <span>{lang === 'hi' ? 'जिज्ञासा एवं समाधान' : 'Clarifications & Questions'}</span>
          </div>

          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-[#1E162B] leading-tight">
            {lang === 'hi' ? 'प्रायः पूछे जाने वाले प्रश्न —' : 'Frequently Asked Questions —'} <br />
            <span className="italic font-normal text-[#522B8A]">
              {lang === 'hi'
                ? 'समय निर्धारण, गोपनीयता एवं सत्र की प्रक्रिया से जुड़ी संपूर्ण जानकारी'
                : 'Everything you need to know about scheduling, confidentiality, and what to expect'}
            </span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-8">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl bg-[#FAF8F5] border border-[#E6DFD3] hover:border-[#DEC38C] transition-colors shadow-2xs overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                >
                  <span className="font-cinzel text-base font-semibold text-[#1E162B]">
                    {item.q}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white border border-[#E6DFD3] text-[#522B8A] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-3 text-xs sm:text-sm text-[#4A4356] leading-relaxed border-t border-[#EFECE6] bg-white">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Team Help Box */}
        <div className="p-6 sm:p-7 rounded-3xl bg-[#FBF5E6] text-[#1E162B] border-2 border-[#DEC38C] shadow-md space-y-4 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:space-y-0 gap-6">
          <div className="space-y-1">
            <h4 className="font-cinzel text-lg font-bold text-[#1E162B]">
              {lang === 'hi' ? 'कोई अन्य प्रश्न या विशेष परामर्श आवश्यकता?' : 'Still have questions or special requirements?'}
            </h4>
            <p className="text-xs text-[#4A4356]">
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
              className="h-10 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold flex items-center gap-2 transition-colors shadow-xs"
            >
              <MessageSquare size={14} />
              <span>WhatsApp: +919105731969</span>
            </a>
            <a
              href="mailto:astro.poojaofficial@gmail.com"
              className="h-10 px-4 rounded-xl bg-white hover:bg-[#FAF8F5] text-[#522B8A] text-xs font-semibold flex items-center gap-2 border border-[#DFD5F0] transition-colors shadow-2xs"
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

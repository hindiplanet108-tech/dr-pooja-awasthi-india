import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Clock, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { getTranslation } from '../data/translations';
import { useSiteContent } from '../utils/siteContentContext';

interface ContactBookingSectionProps {
  lang: string;
  preSelectedService?: string;
}

export const ContactBookingSection: React.FC<ContactBookingSectionProps> = ({
  lang,
  preSelectedService
}) => {
  const { siteContent } = useSiteContent();
  const contactInfo = siteContent?.contact;
  const currentPhone = contactInfo?.phone || '+91 91057 31969';
  const currentWhatsApp = contactInfo?.whatsapp || '919105731969';
  const currentEmail = contactInfo?.email || 'astro.poojaofficial@gmail.com';
  const currentHours = contactInfo?.hours || (lang === 'hi' ? 'प्रातः 10:00 से सायं 7:00 बजे (सोम - शनि)' : '10:00 AM – 7:00 PM IST (Mon - Sat)');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    birthTime: '',
    service: preSelectedService || `Vedic Numerology (${contactInfo?.consultation_fee || '₹5,100'})`,
    format: 'Video Call (Google Meet / WhatsApp Video)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const t = getTranslation(lang);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg(
        lang === 'hi'
          ? 'कृपया अपना नाम, फोन नंबर और ईमेल दर्ज करें।'
          : 'Please enter your name, phone number, and email address.'
      );
      return;
    }

    setErrorMsg(null);
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Dr. Pooja Awasthi,\n\nI would like to book a consultation.\n\nName: ${formData.name || 'Seeker'}\nPhone: ${formData.phone || ''}\nService: ${formData.service}\nDOB: ${formData.dob || 'To provide'}\nFormat: ${formData.format}\n\nKindly share available slots. Thank you!`
    );
    window.open(`https://wa.me/${currentWhatsApp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-[#F4F0FA] text-[#1E162B] relative overflow-hidden border-t border-[#DFD5F0]">
      {/* Subtle luminous background accents */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-white/80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FBF5E6]/90 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Verified Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#7A5311]">
                <MessageSquare size={14} className="text-[#B48228]" />
                <span>{t.contactNav}</span>
                <span aria-hidden="true">·</span>
                <span>{lang === 'hi' ? 'सीधा अपॉइंटमेंट लें' : 'Direct Appointment'}</span>
              </div>

              <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-[#1E162B] leading-tight">
                {t.contactTitle} — <br />
                <span className="italic font-normal text-[#522B8A]">{t.contactSubtitle}</span>
              </h2>

              <p className="text-sm text-[#4A4356] leading-relaxed">
                {lang === 'hi'
                  ? 'सभी परामर्श सत्र पहले से समय तय करके लिए जाते हैं। फॉर्म भरें या सीधे आधिकारिक व्हाट्सएप पर मैसेज भेजकर अपना समय बुक करें।'
                  : 'All private consultations are conducted by prior appointment. Fill out the consultation request below or message directly via official WhatsApp.'}
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* WhatsApp direct card */}
              <div className="p-5 rounded-2xl bg-white border border-[#E6DFD3] hover:border-[#DEC38C] transition-all duration-300 space-y-2 group shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#7A5311] uppercase tracking-wider">
                    {lang === 'hi' ? 'आधिकारिक व्हाट्सएप' : 'Official WhatsApp'}
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200">
                    {lang === 'hi' ? 'तुरंत जवाब' : 'Fast Response'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href={`https://wa.me/${currentWhatsApp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-cinzel text-lg sm:text-xl font-bold text-[#1E162B] group-hover:text-[#522B8A] transition-colors flex items-center gap-2"
                  >
                    <span>{currentPhone}</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
                <p className="text-xs text-[#5D556A]">
                  {currentHours}
                </p>
              </div>

              {/* Email direct card */}
              <div className="p-5 rounded-2xl bg-white border border-[#E6DFD3] hover:border-[#DEC38C] transition-all duration-300 space-y-2 group shadow-sm">
                <span className="text-xs font-bold text-[#7A5311] uppercase tracking-wider">
                  {lang === 'hi' ? 'आधिकारिक ईमेल' : 'Official Email Sanctuary'}
                </span>
                <div>
                  <a
                    href={`mailto:${currentEmail}`}
                    className="font-cinzel text-sm sm:text-base font-semibold text-[#1E162B] group-hover:text-[#522B8A] transition-colors block"
                  >
                    {currentEmail}
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp Instant Action */}
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full h-12 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <MessageSquare size={17} />
                <span>{t.chatWhatsapp}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7 rounded-3xl bg-white text-[#1E162B] p-8 sm:p-10 shadow-xl border border-[#DFD5F0]">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 mx-auto flex items-center justify-center border border-emerald-200">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-[#1E162B]">
                  {lang === 'hi' ? 'परामर्श अनुरोध प्राप्त हुआ' : 'Consultation Request Received'}
                </h3>
                <p className="text-sm text-[#4A4356] max-w-md mx-auto leading-relaxed">
                  {lang === 'hi' ? (
                    <>
                      धन्यवाद, <span className="font-semibold text-[#1E162B]">{formData.name}</span>। आपका परामर्श अनुरोध सफलतापूर्वक दर्ज हो गया है। डॉ. पूजा अवस्थी का कार्यालय शीघ्र ही व्हाट्सएप ({formData.phone}) या ईमेल पर समय की पुष्टि हेतु संपर्क करेगा।
                    </>
                  ) : (
                    <>
                      Thank you, <span className="font-semibold text-[#1E162B]">{formData.name}</span>. Your consultation request has been registered. Dr. Pooja Awasthi’s office will reach out shortly on WhatsApp ({formData.phone}) or email to confirm your appointment slot.
                    </>
                  )}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="h-10 px-5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm cursor-pointer"
                  >
                    {lang === 'hi' ? 'व्हाट्सएप पर समय बुक करें' : 'Confirm Slot via WhatsApp'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="h-10 px-5 bg-[#FAF8F5] hover:bg-[#F4F0FA] text-[#1E162B] text-xs font-semibold rounded-xl transition-colors border border-[#E6DFD3] cursor-pointer"
                  >
                    {lang === 'hi' ? 'एक और बुकिंग भेजें' : 'Submit Another Request'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#EFECE6] pb-4">
                  <h3 className="font-cinzel text-xl font-bold text-[#1E162B]">
                    {lang === 'hi' ? 'परामर्श बुकिंग फॉर्म' : 'Consultation Booking Form'}
                  </h3>
                  <p className="text-xs text-[#5D556A] mt-1">
                    {lang === 'hi'
                      ? 'सही जन्म विवरण से अंकशास्त्र का सटीक और सही विश्लेषण संभव होता है।'
                      : 'Birth coordinates ensure pinpoint accuracy for Vedic numerological analysis.'}
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 flex items-center gap-2">
                    <AlertCircle size={15} />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1E162B] uppercase tracking-wider mb-1">
                      {lang === 'hi' ? 'पूरा नाम *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6DFD3] text-xs text-[#1E162B] focus:outline-none focus:border-[#522B8A] bg-[#FAF8F5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1E162B] uppercase tracking-wider mb-1">
                      {lang === 'hi' ? 'व्हाट्सएप / मोबाइल नंबर *' : 'WhatsApp / Mobile *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6DFD3] text-xs text-[#1E162B] focus:outline-none focus:border-[#522B8A] bg-[#FAF8F5]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-[#1E162B] uppercase tracking-wider mb-1">
                    {lang === 'hi' ? 'ईमेल पता *' : 'Email Address *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6DFD3] text-xs text-[#1E162B] focus:outline-none focus:border-[#522B8A] bg-[#FAF8F5]"
                  />
                </div>

                {/* DOB and Birth Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1E162B] uppercase tracking-wider mb-1">
                      {lang === 'hi' ? 'जन्मतिथि (वैकल्पिक)' : 'Date of Birth (Optional)'}
                    </label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6DFD3] text-xs text-[#1E162B] focus:outline-none focus:border-[#522B8A] bg-[#FAF8F5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1E162B] uppercase tracking-wider mb-1">
                      {lang === 'hi' ? 'जन्म समय (वैकल्पिक)' : 'Time of Birth (Optional)'}
                    </label>
                    <input
                      type="time"
                      value={formData.birthTime}
                      onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6DFD3] text-xs text-[#1E162B] focus:outline-none focus:border-[#522B8A] bg-[#FAF8F5]"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-[#1E162B] uppercase tracking-wider mb-1">
                    {lang === 'hi' ? 'परामर्श सेवा चुनें' : 'Desired Guidance Offering'}
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6DFD3] text-xs text-[#1E162B] focus:outline-none focus:border-[#522B8A] bg-[#FAF8F5]"
                  >
                    <option value="Vedic Numerology (₹5,100)">
                      {lang === 'hi' ? 'वैदिक अंकशास्त्र परामर्श — ₹5,100' : 'Vedic Numerology Consultation — ₹5,100'}
                    </option>
                    <option value="Tarot Guidance (₹5,100)">
                      {lang === 'hi' ? 'टैरो कार्ड मार्गदर्शन — ₹5,100' : 'Tarot Intuitive Guidance — ₹5,100'}
                    </option>
                    <option value="Energy Chakras & Healing (₹5,100)">
                      {lang === 'hi' ? 'ऑरा एवं चक्र हीलिंग (ऊर्जा संतुलन) — ₹5,100' : 'Energy Chakras & Aura Healing — ₹5,100'}
                    </option>
                    <option value="Life Coaching & Mentorship (₹5,100)">
                      {lang === 'hi' ? 'जीवन मार्गदर्शन एवं पर्सनल कोचिंग — ₹5,100' : 'Life Coaching & Conscious Mentorship — ₹5,100'}
                    </option>
                    <option value="Combined Guidance Session (₹5,100)">
                      {lang === 'hi' ? 'संयुक्त परामर्श सत्र (अंकशास्त्र + टैरो + हीलिंग) — ₹5,100' : 'Combined Multi-Disciplinary Session — ₹5,100'}
                    </option>
                    <option value="Mobile Number Correction (₹5,100)">
                      {lang === 'hi' ? 'लकी मोबाइल नंबर अंक सुधार — ₹5,100' : 'Mobile Number Numerology Correction — ₹5,100'}
                    </option>
                    <option value="Name Spelling Correction (₹5,100/-)">
                      {lang === 'hi' ? 'नाम की स्पेलिंग सुधार — ₹5,100/-' : 'Name Spelling Vibrational Correction — ₹5,100/-'}
                    </option>
                    <option value="Aura Cleansing (₹3,100)">
                      {lang === 'hi' ? 'ऑरा शुद्धि (ऊर्जा संतुलन - 20 मिनट) — ₹3,100' : 'Aura Cleansing (20 min) — ₹3,100'}
                    </option>
                    <option value="Crystal Healing and Charging (₹11,000/-)">
                      {lang === 'hi' ? 'क्रिस्टल हीलिंग एवं चार्जिंग — ₹11,000/-' : 'Crystal Healing and Charging — ₹11,000/-'}
                    </option>
                    <option value="Vastu Harmonization (₹11,000/-)">
                      {lang === 'hi' ? 'वास्तु दोष निवारण (40-60 मिनट) — ₹11,000/-' : 'Vastu Harmonization & Spatial Energy (40-60 Mins) — ₹11,000/-'}
                    </option>
                    <option value="Karma Cord Cutting (₹11,000/-)">
                      {lang === 'hi' ? 'कॉर्ड कटिंग व भावनात्मक मुक्ति (30-40 मिनट) — ₹11,000/-' : 'Karma Cord Cutting & Emotional Liberation (30-40 Mins) — ₹11,000/-'}
                    </option>
                    <option value="Past Life Regression PLR (₹21,000/-)">
                      {lang === 'hi' ? 'पास्ट लाइफ रिग्रेशन (पूर्व जन्म सत्र - PLR) — ₹21,000/-' : 'Past Life Regression (PLR) Session — ₹21,000/-'}
                    </option>
                    <option value="7-Day Chakra Intensive (₹31,000)">
                      {lang === 'hi' ? '7 चक्र हीलिंग सत्र (7 दिन का कोर्स) — ₹31,000' : '7-Day Intensive Chakra Alignment — ₹31,000'}
                    </option>
                  </select>
                </div>

                {/* Consultation Format */}
                <div>
                  <label className="block text-xs font-semibold text-[#1E162B] uppercase tracking-wider mb-1">
                    {lang === 'hi' ? 'परामर्श का माध्यम' : 'Consultation Medium'}
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, format: 'Video Call (Google Meet / WhatsApp Video)' })}
                      className={`p-2.5 rounded-xl border text-xs font-medium text-center transition-colors cursor-pointer ${
                        formData.format.includes('Video')
                          ? 'border-[#522B8A] bg-[#F4F0FA] text-[#522B8A] font-bold shadow-2xs'
                          : 'border-[#E6DFD3] bg-[#FAF8F5] text-[#4A4356]'
                      }`}
                    >
                      {lang === 'hi' ? 'वीडियो कॉल (मीट / व्हाट्सएप)' : 'Video Call (Meet / WhatsApp)'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, format: 'Private Audio Call' })}
                      className={`p-2.5 rounded-xl border text-xs font-medium text-center transition-colors cursor-pointer ${
                        formData.format.includes('Audio')
                          ? 'border-[#522B8A] bg-[#F4F0FA] text-[#522B8A] font-bold shadow-2xs'
                          : 'border-[#E6DFD3] bg-[#FAF8F5] text-[#4A4356]'
                      }`}
                    >
                      {lang === 'hi' ? 'फोन / ऑडियो कॉल' : 'Private Voice Call'}
                    </button>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-[#1E162B] uppercase tracking-wider mb-1">
                    {lang === 'hi' ? 'अपने मुख्य प्रश्न या स्थिति' : 'Primary Questions or Context'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      lang === 'hi'
                        ? 'करियर, रिश्ते, व्यक्तिगत निर्णय या जिस विषय पर आप मार्गदर्शन चाहते हैं, संक्षेप में लिखें...'
                        : 'Briefly mention career crossroads, relationship dilemmas, or personal topics you wish to explore...'
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E6DFD3] text-xs text-[#1E162B] focus:outline-none focus:border-[#522B8A] bg-[#FAF8F5]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full h-12 bg-[#522B8A] hover:bg-[#412070] text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send size={15} />
                  <span>{lang === 'hi' ? 'परामर्श अनुरोध भेजें / बुक करें' : 'Submit Consultation Request'}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

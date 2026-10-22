import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Clock, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { getTranslation } from '../data/translations';

interface ContactBookingSectionProps {
  lang: string;
  preSelectedService?: string;
}

export const ContactBookingSection: React.FC<ContactBookingSectionProps> = ({
  lang,
  preSelectedService
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    birthTime: '',
    service: preSelectedService || 'Vedic Numerology (₹5,100)',
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
    window.open(`https://wa.me/919105731969?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#24152F] text-white relative overflow-hidden">
      {/* Decorative ambient orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#6941A5]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#D6B574]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Verified Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D6B574]">
                <MessageSquare size={14} />
                <span>{t.contactNav}</span>
                <span aria-hidden="true">·</span>
                <span>Direct Appointment</span>
              </div>

              <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
                {t.contactTitle} — <br />
                <span className="italic font-normal text-[#D6B574]">{t.contactSubtitle}</span>
              </h2>

              <p className="text-sm text-[#EAE2F4]/80 leading-relaxed font-light">
                {lang === 'hi'
                  ? 'परामर्श सत्र पूर्व-निर्धारित समय पर आयोजित किए जाते हैं। फॉर्म भरें या सीधे आधिकारिक व्हाट्सएप पर संदेश भेजकर अपना स्लॉट सुरक्षित करें।'
                  : 'All private consultations are conducted by prior appointment. Fill out the consultation request below or message directly via official WhatsApp.'}
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* WhatsApp direct card */}
              <div className="p-5 rounded-2xl bg-white/5 border border-[#D6B574]/30 hover:border-[#D6B574] transition-all duration-300 space-y-2 group shadow-sm hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#D6B574] uppercase tracking-wider">
                    Official WhatsApp
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                    Fast Response
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="https://wa.me/919105731969"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-cinzel text-lg sm:text-xl font-bold text-white group-hover:text-[#D6B574] transition-colors flex items-center gap-2"
                  >
                    <span>+91 91057 31969</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
                <p className="text-xs text-[#EAE2F4]/70">
                  Consultation Hours: 10:00 AM – 7:00 PM IST (Mon - Sat)
                </p>
              </div>

              {/* Email direct card */}
              <div className="p-5 rounded-2xl bg-white/5 border border-[#D6B574]/30 hover:border-[#D6B574] transition-all duration-300 space-y-2 group shadow-sm">
                <span className="text-xs font-bold text-[#D6B574] uppercase tracking-wider">
                  Official Email Sanctuary
                </span>
                <div>
                  <a
                    href="mailto:astro.poojaofficial@gmail.com"
                    className="font-cinzel text-sm sm:text-base font-semibold text-white group-hover:text-[#D6B574] transition-colors block"
                  >
                    astro.poojaofficial@gmail.com
                  </a>
                  <a
                    href="mailto:connect@poojaawasthi.com"
                    className="text-xs text-[#EAE2F4]/70 hover:text-white transition-colors"
                  >
                    connect@poojaawasthi.com
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp Instant Action */}
              <button
                type="button"
                onClick={handleWhatsAppDirect}
                className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01]"
              >
                <MessageSquare size={17} />
                <span>{t.chatWhatsapp}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7 rounded-3xl bg-white text-[#29242E] p-8 sm:p-10 shadow-2xl border border-[#D6B574]/40">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="font-cinzel text-2xl font-bold text-[#24152F]">
                  Consultation Request Received
                </h3>
                <p className="text-sm text-[#29242E]/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-[#24152F]">{formData.name}</span>. Your consultation request has been registered. Dr. Pooja Awasthi’s office will reach out shortly on WhatsApp ({formData.phone}) or email to confirm your appointment slot.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                  >
                    Confirm Slot via WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-[#FBF8F2] hover:bg-[#EAE2F4] text-[#24152F] text-xs font-semibold rounded-lg transition-colors border border-[#EAE2F4]"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-[#EAE2F4] pb-4">
                  <h3 className="font-cinzel text-xl font-bold text-[#24152F]">
                    Consultation Booking Form
                  </h3>
                  <p className="text-xs text-[#29242E]/60 mt-1">
                    Birth coordinates ensure pinpoint accuracy for Vedic numerological analysis.
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
                    <label className="block text-xs font-semibold text-[#24152F] uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#EAE2F4] text-xs text-[#24152F] focus:outline-none focus:border-[#6941A5] bg-[#FBF8F2]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#24152F] uppercase tracking-wider mb-1">
                      WhatsApp / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#EAE2F4] text-xs text-[#24152F] focus:outline-none focus:border-[#6941A5] bg-[#FBF8F2]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-[#24152F] uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#EAE2F4] text-xs text-[#24152F] focus:outline-none focus:border-[#6941A5] bg-[#FBF8F2]"
                  />
                </div>

                {/* DOB and Birth Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#24152F] uppercase tracking-wider mb-1">
                      Date of Birth (Optional)
                    </label>
                    <input
                      type="date"
                      value={formData.dob}
                      onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#EAE2F4] text-xs text-[#24152F] focus:outline-none focus:border-[#6941A5] bg-[#FBF8F2]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#24152F] uppercase tracking-wider mb-1">
                      Time of Birth (Optional)
                    </label>
                    <input
                      type="time"
                      value={formData.birthTime}
                      onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#EAE2F4] text-xs text-[#24152F] focus:outline-none focus:border-[#6941A5] bg-[#FBF8F2]"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-semibold text-[#24152F] uppercase tracking-wider mb-1">
                    Desired Guidance Offering
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#EAE2F4] text-xs text-[#24152F] focus:outline-none focus:border-[#6941A5] bg-[#FBF8F2]"
                  >
                    <option value="Vedic Numerology (₹5,100)">Vedic Numerology Consultation — ₹5,100</option>
                    <option value="Tarot Guidance (₹5,100)">Tarot Intuitive Guidance — ₹5,100</option>
                    <option value="Energy Chakras & Healing (₹5,100)">Energy Chakras & Aura Healing — ₹5,100</option>
                    <option value="Life Coaching & Mentorship (₹5,100)">Life Coaching & Conscious Mentorship — ₹5,100</option>
                    <option value="Combined Guidance Session (₹5,100)">Combined Multi-Disciplinary Session — ₹5,100</option>
                    <option value="Mobile Number Correction (₹5,100)">Mobile Number Numerology Correction — ₹5,100</option>
                    <option value="Name Spelling Correction (₹1,100)">Name Spelling Vibrational Correction — ₹1,100</option>
                    <option value="Aura Cleansing (₹3,100)">Aura Cleansing (20 min) — ₹3,100</option>
                    <option value="Past Life Regression PLR (₹15,000)">Past Life Regression (PLR) Session — ₹15,000</option>
                    <option value="7-Day Chakra Intensive (₹31,000)">7-Day Intensive Chakra Alignment — ₹31,000</option>
                  </select>
                </div>

                {/* Consultation Format */}
                <div>
                  <label className="block text-xs font-semibold text-[#24152F] uppercase tracking-wider mb-1">
                    Consultation Medium
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, format: 'Video Call (Google Meet / WhatsApp Video)' })}
                      className={`p-2.5 rounded-lg border text-xs font-medium text-center transition-colors ${
                        formData.format.includes('Video')
                          ? 'border-[#6941A5] bg-[#EAE2F4]/50 text-[#24152F] font-bold shadow-xs'
                          : 'border-[#EAE2F4] bg-[#FBF8F2] text-[#29242E]/70'
                      }`}
                    >
                      Video Call (Meet / WhatsApp)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, format: 'Private Audio Call' })}
                      className={`p-2.5 rounded-lg border text-xs font-medium text-center transition-colors ${
                        formData.format.includes('Audio')
                          ? 'border-[#6941A5] bg-[#EAE2F4]/50 text-[#24152F] font-bold shadow-xs'
                          : 'border-[#EAE2F4] bg-[#FBF8F2] text-[#29242E]/70'
                      }`}
                    >
                      Private Voice Call
                    </button>
                  </div>
                </div>

                {/* Message / Core questions */}
                <div>
                  <label className="block text-xs font-semibold text-[#24152F] uppercase tracking-wider mb-1">
                    Primary Questions or Context
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly mention career crossroads, relationship dilemmas, or personal topics you wish to explore..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#EAE2F4] text-xs text-[#29242E] focus:outline-none focus:border-[#6941A5] bg-[#FBF8F2]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#24152F] hover:bg-[#341e44] text-[#D6B574] font-bold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01]"
                >
                  <Send size={15} />
                  <span>Submit Consultation Request</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { X, Copy, Check, QrCode, ShieldCheck, ArrowRight, MessageSquare, Building2, Smartphone } from 'lucide-react';

interface BankUpiModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: string;
}

export const BankUpiModal: React.FC<BankUpiModalProps> = ({ isOpen, onClose, lang = 'en' }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const paymentData = {
    accountHolder: 'Dr. Pooja Awasthi',
    bankName: 'State Bank of India (SBI)',
    branch: 'Dehradun Main Branch, Uttarakhand',
    accountNumber: '38920194857',
    ifscCode: 'SBIN0001234',
    accountType: 'Savings Account',
    upiId: '9105731969@okaxis',
    phone: '+91 91057 31969',
    consultancyFee: '₹5,100'
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#24152F] text-white rounded-3xl border border-[#D6B574]/50 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 bg-[#1a0e22] border-b border-[#D6B574]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#D6B574]/20 border border-[#D6B574]/50 flex items-center justify-center text-[#D6B574]">
              <QrCode size={20} />
            </div>
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white">
                {lang === 'hi' ? 'बैंक एवं UPI भुगतान विवरण' : 'Bank & UPI Payment Details'}
              </h3>
              <p className="text-xs text-[#D6B574]">
                {lang === 'hi'
                  ? `परामर्श दक्षिणा: ${paymentData.consultancyFee} · प्रामाणिक व सत्यापित खाते`
                  : `Consultation Fee: ${paymentData.consultancyFee} · Direct Verified Accounts`}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#EAE2F4] transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* UPI Direct Section */}
          <div className="p-5 rounded-2xl bg-white/5 border border-[#D6B574]/30 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D6B574]">
                <Smartphone size={16} />
                <span>Instant UPI & QR Payment</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30">
                GPay · PhonePe · Paytm · BHIM
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {/* UPI ID Box */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#EAE2F4]/60 uppercase block">Official UPI ID</span>
                  <span className="font-mono text-sm font-bold text-white select-all">
                    {paymentData.upiId}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(paymentData.upiId, 'upi')}
                  className="p-2 rounded-lg bg-white/10 hover:bg-[#D6B574] hover:text-[#24152F] transition-all"
                  title="Copy UPI ID"
                >
                  {copiedField === 'upi' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone / Mobile UPI */}
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#EAE2F4]/60 uppercase block">UPI Linked Mobile</span>
                  <span className="font-mono text-sm font-bold text-white select-all">
                    {paymentData.phone}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('9105731969', 'phone')}
                  className="p-2 rounded-lg bg-white/10 hover:bg-[#D6B574] hover:text-[#24152F] transition-all"
                  title="Copy Phone Number"
                >
                  {copiedField === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
          </div>

          {/* Bank Transfer (NEFT / RTGS / IMPS) */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/15 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D6B574]">
              <Building2 size={16} />
              <span>Direct Bank Account Transfer (NEFT / IMPS)</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-black/30 border border-white/5 space-y-1">
                <span className="text-[10px] text-[#EAE2F4]/60 uppercase block">Account Holder</span>
                <span className="font-semibold text-white block">{paymentData.accountHolder}</span>
              </div>

              <div className="p-3 rounded-xl bg-black/30 border border-white/5 space-y-1">
                <span className="text-[10px] text-[#EAE2F4]/60 uppercase block">Bank Name</span>
                <span className="font-semibold text-white block">{paymentData.bankName}</span>
              </div>

              <div className="p-3 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#EAE2F4]/60 uppercase block">Account Number</span>
                  <span className="font-mono text-sm font-bold text-white select-all">
                    {paymentData.accountNumber}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(paymentData.accountNumber, 'acc')}
                  className="p-1.5 rounded hover:bg-white/10 transition-colors"
                >
                  {copiedField === 'acc' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              <div className="p-3 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#EAE2F4]/60 uppercase block">IFSC Code</span>
                  <span className="font-mono text-sm font-bold text-white select-all">
                    {paymentData.ifscCode}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(paymentData.ifscCode, 'ifsc')}
                  className="p-1.5 rounded hover:bg-white/10 transition-colors"
                >
                  {copiedField === 'ifsc' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              <div className="p-3 rounded-xl bg-black/30 border border-white/5 sm:col-span-2 space-y-1">
                <span className="text-[10px] text-[#EAE2F4]/60 uppercase block">Branch Location</span>
                <span className="text-white block">{paymentData.branch}</span>
              </div>
            </div>
          </div>

          {/* Instructions note */}
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-200/90 leading-relaxed flex items-start gap-3">
            <ShieldCheck size={18} className="text-emerald-400 shrink-0 mt-0.5" />
            <p>
              {lang === 'hi'
                ? 'कृपया भुगतान पूर्ण होने के उपरांत स्क्रीनशॉट या यूटीआर (UTR) संख्या आधिकारिक व्हाट्सएप (+91 91057 31969) पर भेजें। पुष्टि होते ही आपका 1-on-1 परामर्श स्लॉट लॉक कर दिया जाएगा।'
                : 'After completing payment, please share the screenshot or UTR number directly to official WhatsApp (+91 91057 31969). Your private consultation slot will be scheduled immediately.'}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#1a0e22] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href="https://wa.me/919105731969?text=Hello%20Dr.%20Pooja%20Awasthi,%20I%20have%20completed%20the%20consultation%20payment%20of%20₹5,100.%20Here%20is%20the%20screenshot."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare size={15} />
            <span>{lang === 'hi' ? 'व्हाट्सएप पर रसीद भेजें' : 'Send Receipt on WhatsApp'}</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            {lang === 'hi' ? 'बंद करें' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

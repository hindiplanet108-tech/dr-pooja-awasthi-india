import React, { useState } from 'react';
import { X, Copy, Check, QrCode, ShieldCheck, MessageSquare, Smartphone } from 'lucide-react';
import { useSiteContent } from '../utils/siteContentContext';

interface BankUpiModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: string;
}

export const BankUpiModal: React.FC<BankUpiModalProps> = ({ isOpen, onClose, lang = 'en' }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { siteContent } = useSiteContent();

  if (!isOpen) return null;

  const bankInfo = siteContent?.bankUpi;
  const qrCodeUrl = bankInfo?.qr_code_image || '/assets/aistudio/Screenshot_2026-11-17_120046_1b5aa9a9.png';

  const paymentData = {
    accountHolder: bankInfo?.account_name || 'Pooja Awasthi',
    upiId: bankInfo?.upi_id || '9105731969@upi',
    phone: siteContent?.contact?.phone || '+91 91057 31969',
    consultancyFee: siteContent?.contact?.consultation_fee || '₹5,100',
    qrImage: qrCodeUrl
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1E162B]/65 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-white text-[#1E162B] rounded-3xl border border-[#E6DFD3] shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-6 bg-[#FAF8F5] border-b border-[#EFECE6] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#FBF5E6] border border-[#DEC38C] flex items-center justify-center text-[#7A5311]">
              <QrCode size={20} />
            </div>
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#1E162B]">
                {lang === 'hi' ? 'UPI एवं QR कोड भुगतान विवरण' : 'UPI & QR Code Payment Details'}
              </h3>
              <p className="text-xs text-[#7A5311]">
                {lang === 'hi' ? (
                  <>परामर्श फीस: <strong className="font-black font-rupee text-[#1E162B] text-sm tracking-tight">{paymentData.consultancyFee}</strong> · केवल UPI एवं QR कोड द्वारा भुगतान</>
                ) : (
                  <>Consultation Fee: <strong className="font-black font-rupee text-[#1E162B] text-sm tracking-tight">{paymentData.consultancyFee}</strong> · UPI & QR Code Only</>
                )}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#EFECE6] text-[#5D556A] transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* QR Code and UPI Direct Combined Section */}
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#DEC38C] space-y-4">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7A5311]">
                <Smartphone size={16} className="text-[#B48228]" />
                <span>{lang === 'hi' ? 'स्कैन करें एवं तुरंत UPI भुगतान' : 'Scan & Pay via UPI'}</span>
              </div>
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200">
                GPay · PhonePe · Paytm · BHIM
              </span>
            </div>

            {/* Scannable QR Code Card */}
            <div className="p-4 rounded-2xl bg-white border border-[#E6DFD3] text-center flex flex-col sm:flex-row items-center justify-center gap-5 shadow-xs">
              <div className="relative p-2 rounded-xl border border-[#E6DFD3] bg-white shrink-0 shadow-2xs">
                <img
                  src={paymentData.qrImage}
                  alt={`UPI QR Code - ${paymentData.accountHolder} (${paymentData.upiId})`}
                  className="w-40 h-40 object-contain rounded-lg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('upi-qr-9105731969.svg')) {
                      target.src = '/upi-qr-9105731969.svg';
                    }
                  }}
                />
              </div>

              <div className="text-left space-y-2">
                <div className="inline-block px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold">
                  ✓ {paymentData.accountHolder}
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] uppercase font-semibold text-[#5D556A] block">
                    {lang === 'hi' ? 'सत्यापित UPI ID:' : 'Verified UPI ID:'}
                  </span>
                  <span className="font-mono text-sm sm:text-base font-black text-[#1E162B] block select-all">
                    {paymentData.upiId}
                  </span>
                </div>
                <p className="text-[11px] text-[#4A4356] leading-relaxed">
                  {lang === 'hi'
                    ? 'गूगल पे, फोनपे, पेटीएम या भीम ऐप से स्कैन करके सीधे भुगतान करें।'
                    : 'Scan with Google Pay, PhonePe, Paytm, BHIM, or any banking UPI app.'}
                </p>
                <a
                  href={`upi://pay?pa=${paymentData.upiId}&pn=${encodeURIComponent(paymentData.accountHolder)}&cu=INR`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#522B8A] hover:underline pt-1"
                >
                  <span>{lang === 'hi' ? 'मोबाइल UPI ऐप में सीधे खोलें →' : 'Open in Mobile UPI App →'}</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {/* UPI ID Box */}
              <div className="p-3.5 rounded-xl bg-white border border-[#E6DFD3] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#5D556A] uppercase block">
                    {lang === 'hi' ? 'आधिकारिक UPI ID' : 'Official UPI ID'}
                  </span>
                  <span className="font-mono text-sm font-bold text-[#1E162B] select-all">
                    {paymentData.upiId}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(paymentData.upiId, 'upi')}
                  className="p-2 rounded-lg bg-[#F4F0FA] hover:bg-[#522B8A] hover:text-white text-[#522B8A] transition-all cursor-pointer"
                  title="Copy UPI ID"
                >
                  {copiedField === 'upi' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone / Mobile UPI */}
              <div className="p-3.5 rounded-xl bg-white border border-[#E6DFD3] flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#5D556A] uppercase block">
                    {lang === 'hi' ? 'UPI से जुड़ा मोबाइल नंबर' : 'UPI Linked Mobile'}
                  </span>
                  <span className="font-mono text-sm font-bold text-[#1E162B] select-all">
                    {paymentData.phone}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard('9105731969', 'phone')}
                  className="p-2 rounded-lg bg-[#F4F0FA] hover:bg-[#522B8A] hover:text-white text-[#522B8A] transition-all cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedField === 'phone' ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
              {lang === 'hi'
                ? 'नोट: हम केवल QR कोड एवं UPI (GPay / PhonePe / Paytm / BHIM) द्वारा ही भुगतान स्वीकार करते हैं।'
                : 'Note: We strictly accept payments via Verified QR Code and UPI Apps only (GPay / PhonePe / Paytm / BHIM).'}
            </div>
          </div>

          {/* Instructions note */}
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 leading-relaxed flex items-start gap-3">
            <ShieldCheck size={18} className="text-emerald-700 shrink-0 mt-0.5" />
            <p>
              {lang === 'hi'
                ? 'कृपया भुगतान पूर्ण होने के उपरांत रसीद का स्क्रीनशॉट या यूटीआर (UTR) संख्या आधिकारिक व्हाट्सएप (+91 91057 31969) पर भेजें। पुष्टि होते ही आपका व्यक्तिगत परामर्श समय तुरंत निश्चित कर दिया जाएगा।'
                : 'After completing payment, please share the screenshot or UTR number directly to official WhatsApp (+91 91057 31969). Your private consultation slot will be scheduled immediately.'}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#FAF8F5] border-t border-[#EFECE6] flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href="https://wa.me/919105731969?text=Hello%20Dr.%20Pooja%20Awasthi,%20I%20have%20completed%20the%20consultation%20payment%20of%20₹5,100.%20Here%20is%20the%20screenshot."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto h-10 px-5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare size={15} />
            <span>{lang === 'hi' ? 'व्हाट्सएप पर रसीद भेजें' : 'Send Receipt on WhatsApp'}</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto h-10 px-5 bg-white hover:bg-[#F4F0FA] text-[#1E162B] border border-[#E6DFD3] text-xs font-semibold rounded-xl transition-colors cursor-pointer"
          >
            {lang === 'hi' ? 'बंद करें' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};

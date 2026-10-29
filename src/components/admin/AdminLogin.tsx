import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, ShieldCheck, Sparkles, ArrowLeft, KeyRound } from 'lucide-react';
import { loginAdmin } from '../../utils/cmsApi';

interface AdminLoginProps {
  onLoginSuccess: () => void;
  onBackToSite: () => void;
  lang?: string;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onLoginSuccess, onBackToSite, lang = 'hi' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await loginAdmin(email, password);
      onLoginSuccess();
    } catch (err: any) {
      setError(err.message || 'लॉगिन विफल। कृपया ईमेल और पासवर्ड की जाँच करें।');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFillDemoCredentials = () => {
    setEmail('admin@poojaawasthi.com');
    setPassword('Admin@PoojaVedic2026!');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#160b20] via-[#24152F] to-[#160b20] text-white flex flex-col justify-center items-center p-4 relative overflow-hidden font-sans">
      {/* Background celestial ornament glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#D6B574]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#9B51E0]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Return to public site button */}
      <button
        onClick={onBackToSite}
        className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-[#D6B574]/30 text-[#D6B574] text-xs font-semibold backdrop-blur-md transition-all hover:scale-105"
      >
        <ArrowLeft size={16} />
        <span>{lang === 'hi' ? '← मुख्य वेबसाइट पर लौटें' : '← Return to Main Website'}</span>
      </button>

      {/* Login Card */}
      <div className="w-full max-w-md bg-[#24152F]/90 backdrop-blur-xl border border-[#D6B574]/40 rounded-3xl p-8 sm:p-10 shadow-2xl relative z-10">
        {/* Brand Emblem */}
        <div className="text-center space-y-3 mb-8">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-[#D6B574] via-[#F3E5AB] to-[#D6B574] p-0.5 shadow-lg shadow-[#D6B574]/20 flex items-center justify-center">
            <div className="w-full h-full bg-[#1c0f26] rounded-2xl flex items-center justify-center text-[#D6B574]">
              <Lock size={26} />
            </div>
          </div>
          <div>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-[#D6B574] inline-flex items-center gap-1">
              <Sparkles size={11} />
              <span>{lang === 'hi' ? 'सुरक्षित व्यवस्थापक प्रवेश' : 'Secure Admin Portal'}</span>
            </span>
            <h1 className="font-cinzel text-xl sm:text-2xl font-bold text-white tracking-wide mt-1">
              {lang === 'hi' ? 'डॉ. पूजा अवस्थी CMS' : 'Dr. Pooja Awasthi CMS'}
            </h1>
            <p className="text-xs text-[#EAE2F4]/70 mt-1">
              {lang === 'hi'
                ? 'वेबसाइट पेज, मीडिया व सामग्री प्रबंधन प्रणाली'
                : 'Website Pages, Media & Content Management System'}
            </p>
          </div>
        </div>

        {/* Quick Demo Credentials Banner */}
        <div className="mb-6 p-3.5 rounded-2xl bg-white/5 border border-[#D6B574]/30 text-xs space-y-2">
          <div className="flex items-center justify-between text-[#D6B574] font-semibold">
            <span className="flex items-center gap-1.5">
              <KeyRound size={13} />
              <span>{lang === 'hi' ? 'व्यवस्थापक क्रेडेंशियल (Admin Access)' : 'Admin Credentials'}</span>
            </span>
            <button
              type="button"
              onClick={handleFillDemoCredentials}
              className="text-[11px] underline hover:text-white transition-colors cursor-pointer text-[#F3E5AB]"
            >
              {lang === 'hi' ? 'ऑटो-भरें (Auto-Fill)' : 'Auto-Fill'}
            </button>
          </div>
          <div className="text-[11px] text-[#EAE2F4]/80 space-y-0.5 font-mono">
            <div>Email: <span className="text-white select-all">admin@poojaawasthi.com</span></div>
            <div>Pass: <span className="text-white select-all">Admin@PoojaVedic2026!</span></div>
          </div>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
            <span className="shrink-0 font-bold">⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
              {lang === 'hi' ? 'व्यवस्थापक ईमेल (Admin Email)' : 'Admin Email'}
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D6B574]/60" size={17} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@poojaawasthi.com"
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#1c0f26]/80 border border-[#D6B574]/30 focus:border-[#D6B574] focus:ring-1 focus:ring-[#D6B574] text-white text-sm placeholder-white/30 outline-hidden transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#D6B574] uppercase tracking-wider mb-1.5">
              {lang === 'hi' ? 'गुप्त पासवर्ड (Password)' : 'Password'}
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D6B574]/60" size={17} />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full pl-11 pr-11 py-3 rounded-xl bg-[#1c0f26]/80 border border-[#D6B574]/30 focus:border-[#D6B574] focus:ring-1 focus:ring-[#D6B574] text-white text-sm placeholder-white/30 outline-hidden transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#D6B574]/70 hover:text-white transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-2 py-3.5 rounded-xl bg-gradient-to-r from-[#D6B574] via-[#eedca2] to-[#D6B574] text-[#1c0f26] font-bold text-sm tracking-wide shadow-lg shadow-[#D6B574]/20 hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {isLoading ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-[#1c0f26] border-t-transparent rounded-full animate-spin" />
                <span>{lang === 'hi' ? 'सत्यापन हो रहा है...' : 'Authenticating...'}</span>
              </span>
            ) : (
              <>
                <ShieldCheck size={18} />
                <span>{lang === 'hi' ? 'लॉगिन करें (Secure Login)' : 'Secure Login'}</span>
              </>
            )}
          </button>
        </form>

        {/* Security Note */}
        <div className="mt-6 text-center text-[11px] text-[#EAE2F4]/50 border-t border-white/5 pt-4">
          <span>🔒 256-Bit Cryptographic PBKDF2 Server Protection</span>
        </div>
      </div>
    </div>
  );
};

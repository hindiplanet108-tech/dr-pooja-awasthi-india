import React, { useState, useEffect } from 'react';
import {
  Lock,
  Mail,
  ShieldCheck,
  Globe,
  Phone,
  MessageSquare,
  DollarSign,
  Download,
  Save,
  CheckCircle,
  AlertCircle,
  Eye,
  EyeOff
} from 'lucide-react';
import {
  changeAdminPassword,
  getCMSSettings,
  updateCMSSettings,
  getPages,
  CMSSettings
} from '../../utils/cmsApi';

interface AdminSettingsProps {
  lang?: string;
}

export const AdminSettings: React.FC<AdminSettingsProps> = ({ lang = 'hi' }) => {
  // Password State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminName, setAdminName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [pwLoading, setPwLoading] = useState(false);
  const [pwSuccess, setPwSuccess] = useState<string | null>(null);
  const [pwError, setPwError] = useState<string | null>(null);

  // Settings State
  const [settings, setSettings] = useState<CMSSettings>({
    siteTitle: 'Dr. Pooja Awasthi — Spiritual Guidance',
    contactPhone: '+91 91057 31969',
    whatsappNumber: '919105731969',
    consultationFee: '₹5,100',
    enablePublicPagesNav: true,
  });
  const [settingsLoading, setSettingsLoading] = useState(false);
  const [settingsSuccess, setSettingsSuccess] = useState<string | null>(null);
  const [settingsError, setSettingsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await getCMSSettings();
        if (data) setSettings(data);
      } catch (e) {
        console.error('Error fetching settings:', e);
      }
    };
    fetchSettings();
  }, []);

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPwSuccess(null);
    setPwError(null);

    if (newPassword !== confirmPassword) {
      setPwError('नया पासवर्ड और पुष्टि पासवर्ड मेल नहीं खाते।');
      return;
    }

    if (newPassword.length < 6) {
      setPwError('नया पासवर्ड कम से कम 6 अक्षरों का होना चाहिए।');
      return;
    }

    try {
      setPwLoading(true);
      const res = await changeAdminPassword(
        currentPassword,
        newPassword,
        adminEmail || undefined,
        adminName || undefined
      );
      setPwSuccess(res.message || 'पासवर्ड सफलतापूर्वक बदल दिया गया!');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => setPwSuccess(null), 4000);
    } catch (err: any) {
      setPwError(err.message || 'पासवर्ड बदलने में त्रुटि');
    } finally {
      setPwLoading(false);
    }
  };

  const handleSettingsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSettingsSuccess(null);
    setSettingsError(null);

    try {
      setSettingsLoading(true);
      const updated = await updateCMSSettings(settings);
      setSettings(updated);
      setSettingsSuccess('CMS सेटिंग्स सफलतापूर्वक सहेज ली गईं!');
      setTimeout(() => setSettingsSuccess(null), 4000);
    } catch (err: any) {
      setSettingsError(err.message || 'सेटिंग्स सहेजने में त्रुटि');
    } finally {
      setSettingsLoading(false);
    }
  };

  const handleExportBackup = async () => {
    try {
      const allPages = await getPages(true);
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(allPages, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute('href', dataStr);
      downloadAnchor.setAttribute('download', `pooja_awasthi_pages_backup_${Date.now()}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    } catch (err: any) {
      alert(`बैकअप डाउनलोड में त्रुटि: ${err.message}`);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in pb-12">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-[#24152F]/80 border border-[#D6B574]/30 shadow-xl">
        <h1 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
          {lang === 'hi' ? 'सुरक्षा एवं वेबसाइट सेटिंग्स' : 'Security & CMS Settings'}
        </h1>
        <p className="text-xs text-[#EAE2F4]/70 mt-1">
          {lang === 'hi'
            ? 'व्यवस्थापक पासवर्ड बदलें, संपर्क विवरण अद्यतन करें एवं संपूर्ण पेज डेटा का बैकअप लें।'
            : 'Change admin password, update site contact details, and download data backups.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1: Admin Password & Profile */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#24152F]/70 border border-[#D6B574]/30 shadow-xl space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D6B574]/15 border border-[#D6B574]/30 flex items-center justify-center text-[#D6B574]">
              <Lock size={20} />
            </div>
            <div>
              <h2 className="font-cinzel text-base font-bold text-white">
                व्यवस्थापक पासवर्ड एवं सुरक्षा
              </h2>
              <p className="text-xs text-[#EAE2F4]/60">
                PBKDF2 एन्क्रिप्शन द्वारा सर्वर पर सुरक्षित रूप से सहेजा जाता है
              </p>
            </div>
          </div>

          {pwSuccess && (
            <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle size={15} />
              <span>{pwSuccess}</span>
            </div>
          )}

          {pwError && (
            <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle size={15} />
              <span>{pwError}</span>
            </div>
          )}

          <form onSubmit={handlePasswordSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                वर्तमान पासवर्ड (Current Password) *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="वर्तमान पासवर्ड दर्ज करें"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden focus:border-[#D6B574]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D6B574]/70 hover:text-white"
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                  नया पासवर्ड (New Password) *
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="कम से कम 6 अक्षर"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden focus:border-[#D6B574]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                  पुष्टि करें (Confirm Password) *
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="नया पासवर्ड दोबारा लिखें"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden focus:border-[#D6B574]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                  नया ईमेल (वैकल्पिक)
                </label>
                <input
                  type="email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  placeholder="admin@poojaawasthi.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                  व्यवस्थापक नाम
                </label>
                <input
                  type="text"
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                  placeholder="डॉ. पूजा अवस्थी"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={pwLoading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D6B574] via-[#eedca2] to-[#D6B574] text-[#1c0f26] font-bold text-xs tracking-wide shadow-lg shadow-[#D6B574]/20 hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <ShieldCheck size={16} />
              <span>{pwLoading ? 'अद्यतन हो रहा है...' : 'पासवर्ड सुरक्षित करें'}</span>
            </button>
          </form>
        </div>

        {/* Card 2: CMS Global Settings */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#24152F]/70 border border-[#D6B574]/30 shadow-xl space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D6B574]/15 border border-[#D6B574]/30 flex items-center justify-center text-[#D6B574]">
              <Globe size={20} />
            </div>
            <div>
              <h2 className="font-cinzel text-base font-bold text-white">
                वैश्विक वेबसाइट सेटिंग्स
              </h2>
              <p className="text-xs text-[#EAE2F4]/60">
                वेबसाइट का मुख्य शीर्षक, शुल्क व नेविगेशन नियंत्रण
              </p>
            </div>
          </div>

          {settingsSuccess && (
            <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
              <CheckCircle size={15} />
              <span>{settingsSuccess}</span>
            </div>
          )}

          {settingsError && (
            <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle size={15} />
              <span>{settingsError}</span>
            </div>
          )}

          <form onSubmit={handleSettingsSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                वेबसाइट शीर्षक (Portal Title)
              </label>
              <input
                type="text"
                value={settings.siteTitle}
                onChange={(e) => setSettings({ ...settings, siteTitle: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden focus:border-[#D6B574]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                  संपर्क फ़ोन नंबर
                </label>
                <input
                  type="text"
                  value={settings.contactPhone}
                  onChange={(e) => setSettings({ ...settings, contactPhone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                  व्हाट्सएप नंबर (कंट्री कोड सहित)
                </label>
                <input
                  type="text"
                  value={settings.whatsappNumber}
                  onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#D6B574] mb-1">
                मानक परामर्श शुल्क (Consultation Fee)
              </label>
              <input
                type="text"
                value={settings.consultationFee}
                onChange={(e) => setSettings({ ...settings, consultationFee: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#1c0f26] border border-[#D6B574]/30 text-xs text-white outline-hidden"
              />
            </div>

            <div className="p-3.5 rounded-2xl bg-[#1c0f26] border border-[#D6B574]/20 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-semibold text-white">
                  हेडर में डायनामिक पेज ड्रॉपडाउन दिखाएँ
                </h4>
                <p className="text-[11px] text-[#EAE2F4]/50">
                  सभी "Show in Nav" सक्रिय पेजों को मुख्य मेन्यू में जोड़ें
                </p>
              </div>
              <input
                type="checkbox"
                checked={settings.enablePublicPagesNav}
                onChange={(e) => setSettings({ ...settings, enablePublicPagesNav: e.target.checked })}
                className="w-4 h-4 accent-[#D6B574] cursor-pointer"
              />
            </div>

            <button
              type="submit"
              disabled={settingsLoading}
              className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-[#D6B574]/40 text-[#D6B574] hover:text-white font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <Save size={16} />
              <span>{settingsLoading ? 'सहेज रहे हैं...' : 'सेटिंग्स सहेजें'}</span>
            </button>
          </form>
        </div>
      </div>

      {/* Card 3: Data Backup & Export */}
      <div className="p-6 rounded-3xl bg-[#24152F]/70 border border-[#D6B574]/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-cinzel text-base font-bold text-white flex items-center gap-2">
            <Download size={18} className="text-[#D6B574]" />
            <span>संपूर्ण सामग्री बैकअप (JSON Export)</span>
          </h3>
          <p className="text-xs text-[#EAE2F4]/70 mt-0.5">
            सभी पेजों, छवियों के संदर्भ व सामग्री का एक-क्लिक ऑफ़लाइन बैकअप अपने कंप्यूटर पर डाउनलोड करें।
          </p>
        </div>

        <button
          onClick={handleExportBackup}
          className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-[#D6B574]/40 text-[#D6B574] hover:text-white font-semibold text-xs flex items-center gap-2 transition-all cursor-pointer shrink-0"
        >
          <Download size={15} />
          <span>बैकअप डाउनलोड करें (Export JSON)</span>
        </button>
      </div>
    </div>
  );
};

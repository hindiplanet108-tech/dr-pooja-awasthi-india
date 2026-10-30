import React, { useState } from 'react';
import {
  LayoutDashboard,
  FileText,
  PlusCircle,
  Image as ImageIcon,
  Settings,
  Globe,
  LogOut,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { clearAdminAuth, getStoredAdminUser } from '../../utils/cmsApi';

interface AdminLayoutProps {
  currentTab: 'dashboard' | 'site-editor' | 'pages' | 'create-page' | 'media' | 'settings';
  onSelectTab: (tab: 'dashboard' | 'site-editor' | 'pages' | 'create-page' | 'media' | 'settings') => void;
  onLogout: () => void;
  onViewLiveSite: () => void;
  children: React.ReactNode;
  lang?: string;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  currentTab,
  onSelectTab,
  onLogout,
  onViewLiveSite,
  children,
  lang = 'hi',
}) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const user = getStoredAdminUser() || { name: 'Dr. Pooja Awasthi', email: 'admin@poojaawasthi.com' };

  const handleLogout = () => {
    if (window.confirm('क्या आप व्यवस्थापक पैनल से लॉगआउट करना चाहते हैं?')) {
      clearAdminAuth();
      onLogout();
    }
  };

  const navItems = [
    {
      id: 'dashboard',
      label: lang === 'hi' ? 'डैशबोर्ड' : 'Dashboard',
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: 'site-editor',
      label: lang === 'hi' ? 'वेबसाइट सामग्री संपादक' : 'Edit Website Sections',
      icon: Sparkles,
      badge: 'Live',
    },
    {
      id: 'pages',
      label: lang === 'hi' ? 'विशेष/कस्टम पेज' : 'Custom Pages',
      icon: FileText,
      badge: null,
    },
    {
      id: 'create-page',
      label: lang === 'hi' ? 'नया पेज बनाएँ' : 'Create Page',
      icon: PlusCircle,
      badge: '+',
    },
    {
      id: 'media',
      label: lang === 'hi' ? 'मीडिया लाइब्रेरी' : 'Media Library',
      icon: ImageIcon,
      badge: null,
    },
    {
      id: 'settings',
      label: lang === 'hi' ? 'सेटिंग्स व सुरक्षा' : 'Settings',
      icon: Settings,
      badge: null,
    },
  ];

  return (
    <div className="min-h-screen bg-[#160b20] text-white flex flex-col lg:flex-row font-sans selection:bg-[#D6B574] selection:text-[#1c0f26]">
      {/* Mobile Top Header */}
      <div className="lg:hidden bg-[#24152F] border-b border-[#D6B574]/30 px-5 py-3.5 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#D6B574] transition-colors"
          >
            {mobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div>
            <h1 className="font-cinzel text-sm font-bold text-white tracking-wide">
              डॉ. पूजा अवस्थी CMS
            </h1>
            <span className="text-[10px] text-[#D6B574]">प्रशासन नियंत्रण केंद्र</span>
          </div>
        </div>

        <button
          onClick={onViewLiveSite}
          className="p-2 rounded-xl bg-[#D6B574]/20 border border-[#D6B574]/40 text-[#D6B574] text-xs font-semibold flex items-center gap-1.5"
        >
          <Globe size={14} />
          <span>वेबसाइट</span>
        </button>
      </div>

      {/* Sidebar (Desktop & Mobile Drawer) */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-[#24152F] border-r border-[#D6B574]/25 flex flex-col justify-between p-6 z-50 transition-transform duration-300 ${
          mobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="space-y-8">
          {/* Brand Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#D6B574] via-[#F3E5AB] to-[#D6B574] p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full bg-[#1c0f26] rounded-2xl flex items-center justify-center text-[#D6B574]">
                  <Sparkles size={20} />
                </div>
              </div>
              <div>
                <h2 className="font-cinzel text-base font-bold text-white tracking-wide leading-tight">
                  डॉ. पूजा अवस्थी
                </h2>
                <span className="text-[10px] text-[#D6B574] uppercase tracking-wider font-semibold">
                  Admin Panel & CMS
                </span>
              </div>
            </div>

            {/* Mobile close */}
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="lg:hidden p-1.5 text-white/50 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onSelectTab(item.id as any);
                    setMobileSidebarOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-xs font-semibold transition-all cursor-pointer group ${
                    isActive
                      ? 'bg-gradient-to-r from-[#D6B574] to-[#eedca2] text-[#1c0f26] shadow-lg shadow-[#D6B574]/20 font-bold'
                      : 'text-[#EAE2F4]/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={17} className={isActive ? 'text-[#1c0f26]' : 'text-[#D6B574]'} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge ? (
                    <span
                      className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-[#1c0f26] text-[#D6B574]'
                          : 'bg-[#D6B574]/20 text-[#D6B574]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  ) : (
                    <ChevronRight
                      size={14}
                      className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                        isActive ? 'opacity-100 text-[#1c0f26]' : 'text-white/40'
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom User Profile & Live Site link */}
        <div className="space-y-3 pt-6 border-t border-white/10">
          <button
            onClick={onViewLiveSite}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-[#D6B574]/30 text-[#D6B574] text-xs font-semibold transition-all cursor-pointer"
          >
            <Globe size={15} />
            <span>{lang === 'hi' ? 'मुख्य वेबसाइट देखें' : 'View Public Website'}</span>
          </button>

          <div className="p-3.5 rounded-2xl bg-[#1c0f26]/80 border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#D6B574]/20 border border-[#D6B574]/40 flex items-center justify-center text-[#D6B574] shrink-0 font-bold text-xs">
                {user.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-white truncate">{user.name}</div>
                <div className="text-[10px] text-[#EAE2F4]/50 truncate">{user.email}</div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              title="लॉगआउट करें / Logout"
              className="p-1.5 rounded-lg text-white/50 hover:text-red-400 hover:bg-red-500/10 transition-colors cursor-pointer shrink-0"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Viewport */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>

      {/* Backdrop for mobile sidebar */}
      {mobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
        />
      )}
    </div>
  );
};

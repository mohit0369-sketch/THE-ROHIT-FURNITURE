import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { WhatsAppButton } from './WhatsAppButton';
import { CallButton } from './CallButton';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { createWhatsAppUrl } from '../../utils/whatsapp';
import { Menu, X, Hammer, MapPin } from 'lucide-react';

export type NavTab = 
  | 'home'
  | 'furniture'
  | 'kitchens'
  | 'doors_windows'
  | 'in_shop'
  | 'made_to_order'
  | 'materials'
  | 'partners'
  | 'visit';

interface HeaderProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab }) => {
  const { language, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: NavTab; labelKey: string }[] = [
    { id: 'home', labelKey: 'navHome' },
    { id: 'furniture', labelKey: 'navFurniture' },
    { id: 'kitchens', labelKey: 'navKitchens' },
    { id: 'doors_windows', labelKey: 'navDoorsWindows' },
    { id: 'in_shop', labelKey: 'navAvailableInShop' },
    { id: 'made_to_order', labelKey: 'navMadeToOrder' },
    { id: 'visit', labelKey: 'navVisit' }
  ];

  const handleNavClick = (tab: NavTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const headerWhatsAppUrl = createWhatsAppUrl(
    language === 'hi' 
      ? "नमस्ते! मैंने The Rohit Furniture की वेबसाइट देखी है और मुझे जानकारी चाहिए।" 
      : "Hello The Rohit Furniture! I am browsing your website and would like to enquire."
  );

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-stone-200">
      {/* Top micro bar for location and experience */}
      <div className="bg-[#2C1E16] text-[#FDFBF7] text-[11px] sm:text-xs py-1 px-4 text-center flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <MapPin className="w-3 h-3 text-[#A35824]" />
          <span>{BUSINESS_INFO.city}, {BUSINESS_INFO.state}</span>
          <span className="text-stone-400">|</span>
          <span className="font-semibold text-amber-200">{BUSINESS_INFO.experienceYears} {language === 'hi' ? "वर्षों का अनुभव" : "Years Experience"}</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span>{language === 'hi' ? "हस्तनिर्मित लकड़ी का कार्य" : "Solid Handmade Woodwork"}</span>
          <span className="text-stone-400">|</span>
          <span>{language === 'hi' ? "सीधे कारीगर से संपर्क" : "Direct Workshop Contact"}</span>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#8B4513] text-white flex items-center justify-center shadow-xs group-hover:bg-[#72380F] transition-colors shrink-0">
            <Hammer className="w-5 h-5" />
          </div>
          <div>
            <span className="font-extrabold text-base sm:text-xl text-stone-900 tracking-tight leading-none block">
              {BUSINESS_INFO.name[language]}
            </span>
            <span className="text-[10px] sm:text-xs text-stone-500 font-medium block mt-0.5">
              {language === 'hi' ? "लकड़ी वर्कशॉप व फर्नीचर शोरूम" : "Wood Workshop & Furniture Showroom"}
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors ${
                activeTab === link.id
                  ? 'bg-amber-100 text-[#8B4513]'
                  : 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
              }`}
            >
              {t(link.labelKey)}
            </button>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          <div className="hidden md:flex items-center gap-2">
            <CallButton variant="outline" className="text-xs py-1.5 px-3" />
            <WhatsAppButton
              url={headerWhatsAppUrl}
              label={language === 'hi' ? "व्हाट्सएप" : "WhatsApp"}
              variant="primary"
              className="text-xs py-1.5 px-3"
            />
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-stone-700 hover:text-stone-950 hover:bg-stone-100 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-stone-200 px-4 py-4 space-y-2 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-stone-100">
            <CallButton variant="outline" fullWidth />
            <WhatsAppButton url={headerWhatsAppUrl} label="WhatsApp" variant="primary" fullWidth />
          </div>

          <div className="space-y-1 pt-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === link.id
                    ? 'bg-amber-50 text-[#8B4513] font-bold'
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                {t(link.labelKey)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};


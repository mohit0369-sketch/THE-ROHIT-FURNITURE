import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { WhatsAppButton } from './WhatsAppButton';
import { CallButton } from './CallButton';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { createWhatsAppUrl } from '../../utils/whatsapp';
import { Menu, X, MapPin } from 'lucide-react';

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
    <header className="sticky top-0 z-40 bg-[#F5EDE4]/95 backdrop-blur-md border-b border-[#D4B896]">
      {/* Top micro bar for location and experience */}
      <div className="bg-[#261408] text-[#EFE6DA] text-[11px] sm:text-xs py-1 px-4 text-center flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <MapPin className="w-3 h-3 text-[#A0673C]" />
          <span>{BUSINESS_INFO.city}, {BUSINESS_INFO.state}</span>
          <span className="text-[#B8926A]">|</span>
          <span className="font-semibold text-[#D4B896]">{BUSINESS_INFO.experienceYears} {language === 'hi' ? "वर्षों का अनुभव" : "Years Experience"}</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <span>{language === 'hi' ? "हस्तनिर्मित लकड़ी का कार्य" : "Solid Handmade Woodwork"}</span>
          <span className="text-[#B8926A]">|</span>
          <span>{language === 'hi' ? "सीधे कारीगर से संपर्क" : "Direct Workshop Contact"}</span>
        </div>
      </div>

      {/* Main navigation row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-xs border border-[#D4B896] bg-[#2C1A0B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
            <img
              src="/images/logo.png"
              alt="The Rohit Furniture Works"
              className="w-full h-full object-contain p-1"
            />
          </div>
          <div>
            <span className="font-extrabold text-base sm:text-xl text-[#2C1A0B] tracking-tight leading-none block group-hover:text-[#7D4A27] transition-colors">
              THE ROHIT
            </span>
            <span className="text-[10px] sm:text-xs text-[#9A7350] font-bold tracking-wider uppercase block mt-0.5">
              FURNITURE WORKS
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
                  ? 'bg-[#D4B896]/40 text-[#5E3D22] border border-[#B8926A]/50'
                  : 'text-[#5E3D22] hover:text-[#2C1A0B] hover:bg-[#EBD9C8]'
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
            className="xl:hidden p-2 text-[#5E3D22] hover:text-[#2C1A0B] hover:bg-[#EBD9C8] rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#F5EDE4] border-b border-[#D4B896] px-4 py-4 space-y-2 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#D4B896]/50">
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
                    ? 'bg-[#D4B896]/30 text-[#5E3D22] font-bold'
                    : 'text-[#5E3D22] hover:bg-[#EBD9C8]'
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


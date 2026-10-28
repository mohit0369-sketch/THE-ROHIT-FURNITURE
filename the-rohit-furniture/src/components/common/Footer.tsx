import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { WhatsAppButton } from './WhatsAppButton';
import { CallButton } from './CallButton';
import { createWhatsAppUrl } from '../../utils/whatsapp';
import type { NavTab } from './Header';
import { MapPin, Phone, Clock, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: NavTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const { language, t } = useLanguage();

  const footerWhatsAppUrl = createWhatsAppUrl(
    language === 'hi' 
      ? "नमस्ते रोहित फर्नीचर! मुझे आपसे कुछ जानकारी लेनी है।" 
      : "Hello The Rohit Furniture! I have an inquiry regarding your woodwork."
  );

  return (
    <footer className="bg-[#1F1209] text-[#D4B896] pt-12 pb-24 md:pb-12 border-t border-[#422A14] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[#3D210F]">
          {/* Brand & Workshop Heritage */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden border border-[#5E3D22] bg-[#2C1A0B] flex items-center justify-center shadow-sm shrink-0">
                <img
                  src="/images/logo.png"
                  alt="The Rohit Furniture Works"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight leading-none block">
                  THE ROHIT
                </span>
                <span className="text-[11px] text-[#D4B896] font-bold tracking-wider uppercase block mt-0.5">
                  FURNITURE WORKS
                </span>
              </div>
            </div>

            <p className="text-[#B8926A] text-xs sm:text-sm leading-relaxed">
              {language === 'hi'
                ? "महेंद्रगढ़, हरियाणा में 15 वर्षों से हाथ से बना पक्की लकड़ी का फर्नीचर, मॉड्युलर किचन, मजबूत दरवाजे और खिड़कियाँ। प्रत्यक्ष दुकान व पूर्ण सामग्री पारदर्शिता।"
                : "Handcrafted solid wood furniture, modular wooden kitchens, doors and windows with over 20 years of craftsmanship in Mahendragarh, Haryana. Physical workshop & complete material transparency."}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#EBD9C8] bg-[#2C1A0B]/80 p-2.5 rounded-lg border border-[#422A14]">
              <ShieldCheck className="w-4 h-4 text-[#A0673C] shrink-0" />
              <span>
                {language === 'hi' ? "सच्ची तस्वीरें व ईमानदार कारीगरी" : "Real Photographs & Honest Carpentry"}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {language === 'hi' ? "श्रेणियाँ" : "Categories"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onSelectTab('furniture')} className="hover:text-white transition-colors">
                  {t('navFurniture')}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('kitchens')} className="hover:text-white transition-colors">
                  {t('navKitchens')}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('doors_windows')} className="hover:text-white transition-colors">
                  {t('navDoorsWindows')}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('in_shop')} className="hover:text-white transition-colors">
                  {t('navAvailableInShop')}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('made_to_order')} className="hover:text-white transition-colors">
                  {t('navMadeToOrder')}
                </button>
              </li>
            </ul>
          </div>

          {/* Trust & Transparency Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {language === 'hi' ? "पारदर्शिता व नियम" : "Trust & Transparency"}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onSelectTab('materials')} className="hover:text-white transition-colors">
                  {t('navMaterials')} (Know Your Materials)
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('visit')} className="hover:text-white transition-colors">
                  {t('navVisit')} (Directions & Timings)
                </button>
              </li>
              <li>
                <span className="text-stone-500 text-xs block pt-1">
                  {language === 'hi' ? "• केवल प्रमाणित ठोस लकड़ी (शीशम, सागवान)" : "• 100% Genuine Timber (Sheesham, Teak)"}
                </span>
              </li>
              <li>
                <span className="text-stone-500 text-xs block">
                  {language === 'hi' ? "• कोई नकली 3D स्टॉक रेंडर नहीं" : "• Zero synthetic stock 3D renders"}
                </span>
              </li>
            </ul>
          </div>

          {/* Physical Location & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {language === 'hi' ? "दुकान का पता व समय" : "Showroom & Workshop"}
            </h4>
            <div className="space-y-2.5 text-xs text-[#B8926A]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#A0673C] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address[language]}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#9A7350] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.hours[language]}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.phone.display}</span>
              </div>
            </div>

            <div className="pt-2 flex gap-2">
              <CallButton variant="outline" className="text-xs py-1.5 px-3 bg-[#2C1A0B] text-[#EBD9C8] border-[#5E3D22] hover:bg-[#422A14]" />
              <WhatsAppButton url={footerWhatsAppUrl} label="WhatsApp" variant="primary" className="text-xs py-1.5 px-3" />
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name[language]} — {t('locationNotice')}.
          </p>
          <p className="flex items-center gap-1">
            <span>{language === 'hi' ? "सच्ची कारीगरी से निर्मित" : "Crafted with honest woodwork"}</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline" />
            <span>in Mahendragarh</span>
          </p>
        </div>
      </div>
    </footer>
  );
};


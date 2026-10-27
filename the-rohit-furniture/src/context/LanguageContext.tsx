import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'hi';

export interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

export const UI_STRINGS: Translations = {
  // Navigation
  navHome: { en: "Home", hi: "होम" },
  navFurniture: { en: "Furniture", hi: "फर्नीचर" },
  navKitchens: { en: "Wooden Kitchens", hi: "लकड़ी की किचन" },
  navDoorsWindows: { en: "Doors & Windows", hi: "दरवाजे और खिड़कियाँ" },
  navAvailableInShop: { en: "Available in Shop", hi: "दुकान में उपलब्ध" },
  navMadeToOrder: { en: "Made to Order", hi: "ऑर्डर पर तैयार" },
  navOurWork: { en: "Our Work", hi: "हमारा काम" },
  navMaterials: { en: "Know Materials", hi: "सामग्री की पहचान" },
  navPartners: { en: "Partner Products", hi: "पार्टनर उत्पाद" },
  navVisit: { en: "Visit Our Shop", hi: "दुकान पर आएं" },
  
  // CTAs
  ctaWhatsApp: { en: "WhatsApp Us", hi: "व्हाट्सएप करें" },
  ctaCall: { en: "Call Us", hi: "फोन करें" },
  ctaVisitShop: { en: "Visit Shop", hi: "शॉप पर आएं" },
  ctaExploreWork: { en: "Explore Our Work", hi: "हमारा काम देखें" },
  ctaViewDetails: { en: "View Details", hi: "विस्तार से देखें" },
  ctaAskWhatsApp: { en: "Ask on WhatsApp", hi: "व्हाट्सएप पर पूछें" },
  ctaEnquireNow: { en: "Enquire Now", hi: "जानकारी लें" },
  ctaCheckDelivery: { en: "Check Delivery on WhatsApp", hi: "व्हाट्सएप पर डिलीवरी पूछें" },
  ctaDiscussCustom: { en: "Discuss on WhatsApp", hi: "व्हाट्सएप पर चर्चा करें" },

  // Trust Strip & Badges
  trustExpYears: { en: "15 Years Experience", hi: "15 वर्षों का अनुभव" },
  trustExpDesc: { en: "Handmade by skilled carpenters", hi: "अनुभवी कारीगरों द्वारा हस्तनिर्मित" },
  trustMaterials: { en: "Transparent Materials", hi: "सच्ची सामग्री व लकड़ी" },
  trustMaterialsDesc: { en: "We declare every wood & ply used", hi: "हर लकड़ी व प्लाई की खुली जानकारी" },
  trustShop: { en: "Physical Shop & Workshop", hi: "दुकान व वर्कशॉप" },
  trustShopDesc: { en: "Visit us in Mahendragarh", hi: "महेंद्रगढ़ में प्रत्यक्ष देखकर खरीदें" },
  trustCustom: { en: "Custom Orders", hi: "कस्टम ऑर्डर सुविधा" },
  trustCustomDesc: { en: "Crafted to your exact size & design", hi: "आपकी पसंद व नाप अनुसार निर्माण" },

  // Status Badges
  badgeAvailable: { en: "Available Now in Shop", hi: "दुकान पर अभी उपलब्ध" },
  badgeMadeToOrder: { en: "Made to Order", hi: "ऑर्डर पर तैयार" },
  badgeCustom: { en: "Custom Made", hi: "कस्टम डिज़ाइन" },
  badgePartner: { en: "Available through Trusted Partners", hi: "विश्वसनीय सहयोगी के माध्यम से" },

  // Section Headings
  headingAvailableInShop: { en: "Available in Our Shop Now", hi: "दुकान में अभी उपलब्ध फर्नीचर" },
  subheadingAvailableInShop: { 
    en: "These pieces are physically available at our Mahendragarh showroom. Walk in and inspect the woodwork in person.", 
    hi: "ये फर्नीचर हमारे महेंद्रगढ़ शोरूम में प्रत्यक्ष मौजूद हैं। आप स्वयं आकर इनकी मजबूती और फिनिश देख सकते हैं।" 
  },
  headingMadeToOrder: { en: "Made to Order & Custom Furniture", hi: "ऑर्डर पर हस्तनिर्मित फर्नीचर" },
  subheadingMadeToOrder: { 
    en: "Choose a design or bring your own idea. We build each piece to your required dimensions and selected wood.", 
    hi: "कोई भी डिज़ाइन चुनें या अपनी पसंद लाएं। हम आपके नाप और चुनी हुई लकड़ी के अनुसार तैयार करेंगे।" 
  },
  headingKitchens: { en: "Handcrafted Wooden Kitchens", hi: "लकड़ी की मजबूत मॉड्युलर किचन" },
  headingDoorsWindows: { en: "Solid Wooden Doors & Windows", hi: "ठोस लकड़ी के दरवाजे और खिड़कियाँ" },
  headingOurWork: { en: "Our Real Craft & Projects", hi: "हमारा वास्तविक काम और प्रोजेक्ट्स" },
  headingMaterials: { en: "Know Your Materials — Complete Transparency", hi: "सामग्री की पहचान — पूर्ण पारदर्शिता" },
  headingWhereWeServe: { en: "Where We Serve", hi: "हम कहाँ सेवा देते हैं" },
  headingVisitShop: { en: "Visit Our Physical Shop & Workshop", hi: "हमारी दुकान व वर्कशॉप पर पधारें" },
  headingPartnerProducts: { en: "More Options Through Our Trusted Partners", hi: "हमारे सहयोगी स्टोर्स के माध्यम से अन्य विकल्प" },
  partnerDisclaimer: {
    en: "Strict Transparency: These products are sourced through trusted partner businesses and are not built in Rohit Furniture's wooden workshop.",
    hi: "पूर्ण पारदर्शिता: ये उत्पाद हमारे सहयोगी स्टोर्स से मंगाए जाते हैं और रोहित फर्नीचर के वर्कशॉप में नहीं बने हैं।"
  },

  // Material Spec labels
  specWood: { en: "Solid Wood", hi: "ठोस लकड़ी" },
  specPlywood: { en: "Plywood / Board", hi: "प्लाईवुड / बोर्ड" },
  specFinish: { en: "Finish & Polish", hi: "पॉलिश व फिनिश" },
  specHardware: { en: "Hardware Fittings", hi: "हार्डवेयर फिटिंग" },
  specDimensions: { en: "Dimensions / Size", hi: "आकार व नाप" },
  specCustomizable: { en: "Customization", hi: "कस्टमाइजेशन" },
  specCustomYes: { en: "Available in custom sizes & wood", hi: "मनपसंद नाप व लकड़ी में संभव" },
  specCustomNo: { en: "Standard partner piece", hi: "मानक साइज" },
  specComingSoon: { en: "Material details coming soon", hi: "सामग्री विवरण जल्द उपलब्ध होगा" },

  // Footer & Notices
  realPhotosNotice: { 
    en: "Real Photographs Notice: We showcase our real workshop and showroom pieces. No fake stock 3D renders.", 
    hi: "वास्तविक तस्वीरों का नियम: हम अपनी असली वर्कशॉप और तैयार काम की तस्वीरें दिखाते हैं। कोई बनावटी फोटो नहीं।" 
  },
  locationNotice: { en: "Based in Mahendragarh, Haryana", hi: "महेंद्रगढ़, हरियाणा में स्थित" }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('rohit_lang');
    return (saved === 'hi' || saved === 'en') ? saved : 'hi';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('rohit_lang', lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
    if (language === 'hi') {
      document.body.classList.add('lang-hi');
    } else {
      document.body.classList.remove('lang-hi');
    }
  }, [language]);

  const t = (key: string): string => {
    const item = UI_STRINGS[key];
    if (!item) return key;
    return item[language] || item['en'] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};


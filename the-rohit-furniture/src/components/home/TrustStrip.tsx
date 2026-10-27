import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Award, Hammer, ShieldCheck, MapPin } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const { language, t } = useLanguage();

  const trustItems = [
    {
      icon: Award,
      title: t('trustExpYears'),
      desc: t('trustExpDesc')
    },
    {
      icon: Hammer,
      title: language === 'hi' ? "हस्तनिर्मित मजबूती" : "Handmade Strength",
      desc: language === 'hi' ? "पारंपरिक जोड़ों के साथ टिकाऊ निर्माण" : "Mortise-and-tenon solid construction"
    },
    {
      icon: ShieldCheck,
      title: t('trustMaterials'),
      desc: t('trustMaterialsDesc')
    },
    {
      icon: MapPin,
      title: t('trustShop'),
      desc: t('trustShopDesc')
    }
  ];

  return (
    <div className="bg-[#F4EFEA] border-y border-stone-200 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-white/70 rounded-xl border border-stone-200/70">
              <div className="p-2 rounded-lg bg-[#8B4513]/10 text-[#8B4513] shrink-0 mt-0.5">
                <item.icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-stone-900 text-xs sm:text-sm leading-snug">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-stone-600 mt-0.5 leading-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


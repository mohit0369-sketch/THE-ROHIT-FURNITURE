import React from 'react';
import type { ProductStatus } from '../../types/product';
import { useLanguage } from '../../context/LanguageContext';
import { Store, Hammer, Sparkles, Building2 } from 'lucide-react';

interface StatusBadgeProps {
  status: ProductStatus;
  size?: 'sm' | 'md';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = 'md' }) => {
  const { language } = useLanguage();

  const config = {
    available_in_shop: {
      en: "Available in Shop",
      hi: "दुकान में उपलब्ध",
      icon: Store,
      bg: "bg-emerald-50 text-emerald-800 border-emerald-300",
      dot: "bg-emerald-600 animate-pulse"
    },
    made_to_order: {
      en: "Made to Order",
      hi: "ऑर्डर पर तैयार",
      icon: Hammer,
      bg: "bg-amber-50 text-amber-900 border-amber-300",
      dot: "bg-amber-600"
    },
    custom_only: {
      en: "Custom Made",
      hi: "कस्टम डिज़ाइन",
      icon: Sparkles,
      bg: "bg-stone-100 text-stone-800 border-stone-300",
      dot: "bg-stone-600"
    },
    partner_product: {
      en: "Trusted Partner Product",
      hi: "सहयोगी स्टोर का उत्पाद",
      icon: Building2,
      bg: "bg-blue-50 text-blue-900 border-blue-200",
      dot: "bg-blue-500"
    }
  }[status];

  const Icon = config.icon;
  const label = language === 'hi' ? config.hi : config.en;
  const padding = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-2.5 py-1 text-xs sm:text-sm';

  return (
    <span className={`inline-flex items-center gap-1.5 font-medium border rounded-full ${config.bg} ${padding} shadow-xs`}>
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      <Icon className={size === 'sm' ? "w-3 h-3" : "w-3.5 h-3.5"} />
      <span>{label}</span>
    </span>
  );
};


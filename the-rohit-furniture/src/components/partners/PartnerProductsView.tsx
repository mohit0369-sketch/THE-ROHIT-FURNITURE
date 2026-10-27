import React from 'react';
import type { Product } from '../../types/product';
import { useLanguage } from '../../context/LanguageContext';
import { ProductCard } from '../products/ProductCard';
import { Building2, ShieldAlert } from 'lucide-react';

interface PartnerProductsViewProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
}

export const PartnerProductsView: React.FC<PartnerProductsViewProps> = ({
  products,
  onViewDetails
}) => {
  const { language, t } = useLanguage();
  const partnerProducts = products.filter(p => p.status === 'partner_product');

  return (
    <section className="py-12 sm:py-16 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Transparency Banner */}
        <div className="bg-blue-50/80 border border-blue-200 rounded-2xl p-6 sm:p-8 mb-8 text-left space-y-3">
          <div className="flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
            <Building2 className="w-4 h-4 text-blue-700" />
            <span>{t('headingPartnerProducts')}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950">
            {language === 'hi' 
              ? "विश्वसनीय सहयोगी स्टोर्स के उत्पाद (स्पष्ट पारदर्शिता)" 
              : "Options Through Our Trusted Partner Network"}
          </h2>
          <div className="flex items-start gap-3 bg-white/90 p-4 rounded-xl border border-blue-100 text-blue-900 text-xs sm:text-sm leading-relaxed">
            <ShieldAlert className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
            <p>
              <strong>{language === 'hi' ? "ईमानदार व्यापार नीति: " : "Our Honest Policy: "}</strong>
              {t('partnerDisclaimer')}
            </p>
          </div>
        </div>

        {/* Partner Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


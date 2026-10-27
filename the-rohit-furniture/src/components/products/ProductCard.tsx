import React from 'react';
import type { Product } from '../../types/product';
import { useLanguage } from '../../context/LanguageContext';
import { StatusBadge } from '../common/StatusBadge';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { MaterialSpecs } from './MaterialSpecs';
import { getProductWhatsAppUrl } from '../../utils/whatsapp';
import { Eye, ShieldAlert } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const { language, t } = useLanguage();
  const prodName = language === 'hi' ? product.name.hi : product.name.en;
  const prodDesc = language === 'hi' ? product.description.hi : product.description.en;
  const priceText = product.priceDisplay ? (language === 'hi' ? product.priceDisplay.hi : product.priceDisplay.en) : null;
  const whatsappUrl = getProductWhatsAppUrl(product, language);
  const mainImage = product.images[0] || {
    url: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
    alt: prodName
  };

  return (
    <div className="group bg-white rounded-xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden">
      {/* Photo Container */}
      <div 
        onClick={() => onViewDetails(product)}
        className="relative aspect-4/3 bg-stone-100 overflow-hidden cursor-pointer"
      >
        <img
          src={mainImage.url}
          alt={mainImage.alt}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-2.5 left-2.5">
          <StatusBadge status={product.status} size="sm" />
        </div>
        {product.status === 'partner_product' && (
          <div className="absolute top-2.5 right-2.5 bg-blue-900/80 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-xs flex items-center gap-1">
            <ShieldAlert className="w-3 h-3" />
            <span>{language === 'hi' ? "पार्टनर स्टोर" : "Partner Store"}</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 
            onClick={() => onViewDetails(product)}
            className="font-bold text-stone-900 text-base sm:text-lg hover:text-[#8B4513] transition-colors line-clamp-1 cursor-pointer"
          >
            {prodName}
          </h3>

          {priceText ? (
            <div className="text-sm font-bold text-[#8B4513] mt-1">
              {priceText}
            </div>
          ) : (
            <div className="text-xs font-medium text-stone-500 mt-1 italic">
              {language === 'hi' ? "कीमत के लिए व्हाट्सएप पर पूछें" : "Price on request / WhatsApp"}
            </div>
          )}

          <p className="text-stone-600 text-xs sm:text-sm line-clamp-2 mt-2 leading-relaxed">
            {prodDesc}
          </p>

          {/* Compact Material Disclosure */}
          <div className="mt-3 pt-3 border-t border-stone-100">
            <span className="text-[11px] font-bold text-stone-700 uppercase tracking-wider block mb-1">
              {language === 'hi' ? "मुख्य सामग्री:" : "Key Material:"}
            </span>
            <MaterialSpecs materials={product.materials} compact />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 pt-3 border-t border-stone-100 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onViewDetails(product)}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{t('ctaViewDetails')}</span>
          </button>
          <WhatsAppButton
            url={whatsappUrl}
            label="WhatsApp"
            variant="primary"
            className="text-xs sm:text-sm py-2 px-2.5"
          />
        </div>
      </div>
    </div>
  );
};


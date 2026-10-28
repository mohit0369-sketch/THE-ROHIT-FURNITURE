import React from 'react';
import type { Product } from '../../types/product';
import { useLanguage } from '../../context/LanguageContext';
import { StatusBadge } from '../common/StatusBadge';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { MaterialSpecs } from './MaterialSpecs';
import { getProductWhatsAppUrl } from '../../utils/whatsapp';
import { Eye, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <div className="group bg-[#FAF6F0] rounded-xl border border-[#D4B896] shadow-xs hover:shadow-md hover:border-[#A0673C] transition-all duration-200 flex flex-col overflow-hidden">
      {/* Photo Container */}
      <div 
        onClick={() => onViewDetails(product)}
        className="relative aspect-4/3 bg-[#EBD9C8]/40 overflow-hidden cursor-pointer"
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
            className="font-bold text-[#2C1A0B] text-base sm:text-lg hover:text-[#7D4A27] transition-colors line-clamp-1 cursor-pointer"
          >
            {prodName}
          </h3>

          {priceText ? (
            <div className="text-sm font-bold text-[#7D4A27] mt-1">
              {priceText}
            </div>
          ) : (
            <div className="text-xs font-medium text-[#7A5536] mt-1 italic">
              {language === 'hi' ? "कीमत के लिए व्हाट्सएप पर पूछें" : "Price on request / WhatsApp"}
            </div>
          )}

          <p className="text-[#5E3D22] text-xs sm:text-sm line-clamp-2 mt-2 leading-relaxed">
            {prodDesc}
          </p>

          {/* Compact Material Disclosure */}
          <div className="mt-3 pt-3 border-t border-[#D4B896]/40">
            <span className="text-[11px] font-bold text-[#7A5536] uppercase tracking-wider block mb-1">
              {language === 'hi' ? "मुख्य सामग्री:" : "Key Material:"}
            </span>
            <MaterialSpecs materials={product.materials} compact />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 pt-3 border-t border-[#D4B896]/40 grid grid-cols-2 gap-2">
          <motion.button
            type="button"
            onClick={() => onViewDetails(product)}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-semibold text-[#422A14] bg-[#EBD9C8]/70 hover:bg-[#D4B896]/60 border border-[#D4B896] rounded-lg transition-colors cursor-pointer select-none"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{t('ctaViewDetails')}</span>
          </motion.button>
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


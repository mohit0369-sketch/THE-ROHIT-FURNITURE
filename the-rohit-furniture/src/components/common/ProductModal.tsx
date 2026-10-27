import React, { useState } from 'react';
import type { Product } from '../../types/product';
import { useLanguage } from '../../context/LanguageContext';
import { StatusBadge } from './StatusBadge';
import { MaterialSpecs } from '../products/MaterialSpecs';
import { WhatsAppButton } from './WhatsAppButton';
import { CallButton } from './CallButton';
import { getProductWhatsAppUrl } from '../../utils/whatsapp';
import { X, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onNavigateToMaterials?: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onNavigateToMaterials
}) => {
  const { language, t } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) return null;

  const prodName = language === 'hi' ? product.name.hi : product.name.en;
  const prodDesc = language === 'hi' ? product.description.hi : product.description.en;
  const priceText = product.priceDisplay ? (language === 'hi' ? product.priceDisplay.hi : product.priceDisplay.en) : null;
  const whatsappUrl = getProductWhatsAppUrl(product, language);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#FDFBF7] rounded-2xl shadow-2xl border border-stone-200 overflow-hidden my-8 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200 bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2 min-w-0 pr-4">
            <StatusBadge status={product.status} size="sm" />
            {product.isHandmadeByUs && (
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-[#8B4513] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                <Sparkles className="w-3 h-3" />
                {language === 'hi' ? "हस्तनिर्मित" : "Workshop Handmade"}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Main Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-4/3 sm:aspect-16/9 bg-stone-100 rounded-xl overflow-hidden border border-stone-200">
              <img
                src={product.images[activeImageIndex]?.url || product.images[0]?.url}
                alt={product.images[activeImageIndex]?.alt || prodName}
                className="w-full h-full object-cover"
              />
              {product.images[activeImageIndex]?.caption && (
                <div className="absolute bottom-0 inset-x-0 bg-black/60 text-white text-xs px-3 py-1.5 backdrop-blur-xs">
                  {product.images[activeImageIndex].caption}
                </div>
              )}
            </div>

            {/* Thumbnails if multiple images */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                      activeImageIndex === idx ? 'border-[#8B4513] ring-2 ring-[#8B4513]/20' : 'border-stone-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Pricing */}
          <div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-stone-900 leading-tight">
              {prodName}
            </h2>
            {priceText && (
              <div className="mt-2 text-lg sm:text-xl font-bold text-[#8B4513]">
                {priceText}
              </div>
            )}
            {product.dimensions && (
              <div className="mt-1.5 text-xs sm:text-sm text-stone-600">
                <span className="font-semibold text-stone-800">{t('specDimensions')}:</span> {product.dimensions}
              </div>
            )}
          </div>

          {/* Partner Disclaimer (if applicable) */}
          {product.status === 'partner_product' && product.partnerDetails && (
            <div className="bg-blue-50/90 border border-blue-200 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-blue-900">
              <ShieldAlert className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">
                  {language === 'hi' ? "विश्वसनीय पार्टनर उत्पाद सूचना" : "Trusted Partner Sourced Product"}
                </span>
                <p className="mt-0.5 text-blue-800">
                  {language === 'hi' ? product.partnerDetails.disclaimer.hi : product.partnerDetails.disclaimer.en}
                </p>
              </div>
            </div>
          )}

          {/* Description */}
          <div className="text-stone-700 text-sm leading-relaxed whitespace-pre-line bg-white p-4 rounded-xl border border-stone-200">
            <span className="font-bold block text-stone-900 mb-1">
              {language === 'hi' ? "विवरण व विशेषताएँ:" : "Description & Details:"}
            </span>
            {prodDesc}
          </div>

          {/* Material Specifications */}
          <MaterialSpecs
            materials={product.materials}
            onExploreMaterials={() => {
              onClose();
              if (onNavigateToMaterials) onNavigateToMaterials();
            }}
          />

          {/* Customization Note */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-700 bg-amber-50/60 p-3 rounded-lg border border-amber-200/60">
            <CheckCircle2 className="w-4 h-4 text-[#8B4513] shrink-0" />
            <span>
              {product.isCustomizable 
                ? (language === 'hi' ? "कस्टमाइजेशन उपलब्ध: आप इसे अपने कमरे के नाप, अलग लकड़ी (शीशम/सागवान) और मनपसंद फिनिश में बनवा सकते हैं।" : "Customization Available: You can order this piece tailored to your room dimensions, wood preference, and finish.")
                : (language === 'hi' ? "मानक पार्टनर साइज उपलब्ध।" : "Standard commercial partner size.")}
            </span>
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="px-5 py-4 border-t border-stone-200 bg-white flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
          <CallButton label={t('ctaCall')} className="sm:w-auto" />
          <WhatsAppButton
            url={whatsappUrl}
            label={language === 'hi' ? "व्हाट्सएप पर जानकारी लें" : "Ask Details on WhatsApp"}
            variant="primary"
            className="sm:w-auto"
          />
        </div>
      </div>
    </div>
  );
};


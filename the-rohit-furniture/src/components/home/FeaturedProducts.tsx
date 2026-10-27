import React from 'react';
import type { Product } from '../../types/product';
import { useLanguage } from '../../context/LanguageContext';
import { ProductCard } from '../products/ProductCard';
import { Store, ArrowRight } from 'lucide-react';

interface FeaturedProductsProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
  onViewAllInShop: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  onViewDetails,
  onViewAllInShop
}) => {
  const { language, t } = useLanguage();
  const availableItems = products.filter(p => p.status === 'available_in_shop').slice(0, 4);

  return (
    <section className="py-12 sm:py-16 bg-[#F4EFEA]/60 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4 text-left">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Store className="w-3.5 h-3.5" />
              <span>{t('headingAvailableInShop')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              {language === 'hi' ? "दुकान में अभी उपलब्ध फर्नीचर (शो-रूम स्टॉक)" : "Currently Available in Our Showroom"}
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-2xl">
              {t('subheadingAvailableInShop')}
            </p>
          </div>

          <button
            onClick={onViewAllInShop}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#8B4513] hover:text-[#72380F] group shrink-0"
          >
            <span>{language === 'hi' ? "सभी उपलब्ध सामान देखें" : "View All Showroom Stock"}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {availableItems.map((product) => (
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


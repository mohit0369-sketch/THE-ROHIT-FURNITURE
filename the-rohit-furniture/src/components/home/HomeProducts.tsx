import { useState } from 'react';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { CategoriesGrid } from './CategoriesGrid';
import type { CatKey } from './CategoriesGrid';
import { ProductCard } from '../products/ProductCard';
import type { Product } from '../../types/product';

type F = 'all' | 'available_in_shop' | 'made_to_order';

export const HomeProducts: FC<{ products: Product[]; onSelectCategory: (k: CatKey) => void; onViewDetails: (p: Product) => void; activeCat?: CatKey | null }> = ({ products, onSelectCategory, onViewDetails, activeCat }) => {
  const { language } = useLanguage();
  const hi = language === 'hi';
  const [f, setF] = useState<F>('all');
  const list = products.filter((p) => p.isHandmadeByUs && (f === 'all' || p.status === f));
  const tabs: [F, string][] = [['all', hi ? 'सभी' : 'All'], ['available_in_shop', hi ? 'दुकान में तैयार' : 'Ready in shop'], ['made_to_order', hi ? 'ऑर्डर पर बने काम' : 'Made to order']];
  return (
    <section className="bg-[#F5EDE4] py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CategoriesGrid onSelect={onSelectCategory} active={activeCat ?? undefined} />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-extrabold text-[#2C1A0B] sm:text-3xl">{hi ? 'हमारा फ़र्नीचर' : 'Our furniture'}</h1>
          <div className="flex gap-2">
            {tabs.map(([k, label]) => (
              <motion.button
                key={k}
                onClick={() => setF(k)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className={`rounded-full px-3.5 py-1.5 text-sm font-bold transition-colors cursor-pointer select-none ${
                  f === k
                    ? 'bg-[#7D4A27] text-white shadow-xs border border-[#6E3F20]'
                    : 'border border-[#D4B896] bg-[#FAF6F0] text-[#5E3D22] hover:bg-[#EBD9C8]'
                }`}
              >
                {label}
              </motion.button>
            ))}
          </div>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <ProductCard key={p.id} product={p} onViewDetails={onViewDetails} />)}
        </div>
      </div>
    </section>
  );
};

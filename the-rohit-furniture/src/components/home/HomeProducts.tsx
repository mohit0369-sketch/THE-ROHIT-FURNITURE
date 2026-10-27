import { useState } from 'react';
import type { FC } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CategoriesGrid } from './CategoriesGrid';
import type { CatKey } from './CategoriesGrid';
import { ProductCard } from '../products/ProductCard';
import type { Product } from '../../types/product';

type F = 'all' | 'available_in_shop' | 'made_to_order';

export const HomeProducts: FC<{ products: Product[]; onSelectCategory: (k: CatKey) => void; onViewDetails: (p: Product) => void }> = ({ products, onSelectCategory, onViewDetails }) => {
  const { language } = useLanguage();
  const hi = language === 'hi';
  const [f, setF] = useState<F>('all');
  const list = products.filter((p) => p.isHandmadeByUs && (f === 'all' || p.status === f));
  const tabs: [F, string][] = [['all', hi ? 'सभी' : 'All'], ['available_in_shop', hi ? 'दुकान में तैयार' : 'Ready in shop'], ['made_to_order', hi ? 'ऑर्डर पर बने काम' : 'Made to order']];
  return (
    <section className="bg-[#FDFBF7] py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CategoriesGrid onSelect={onSelectCategory} />
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl font-extrabold text-stone-900 sm:text-3xl">{hi ? 'हमारा फ़र्नीचर' : 'Our furniture'}</h1>
          <div className="flex gap-2">
            {tabs.map(([k, label]) => (
              <button key={k} onClick={() => setF(k)} className={`rounded-full px-3.5 py-1.5 text-sm font-bold ${f === k ? 'bg-[#2D4A3E] text-white' : 'border border-stone-300 bg-white text-stone-800'}`}>{label}</button>
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

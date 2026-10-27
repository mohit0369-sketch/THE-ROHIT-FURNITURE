import React, { useState, useMemo } from 'react';
import type { Product, ProductCategory, FurnitureSubcategory, ProductStatus } from '../../types/product';
import { useLanguage } from '../../context/LanguageContext';
import { ProductCard } from '../products/ProductCard';
import { ProductFilterBar } from '../products/ProductFilterBar';
import { PackageOpen, Sparkles } from 'lucide-react';

interface CatalogViewProps {
  products: Product[];
  initialCategory?: ProductCategory;
  initialStatus?: ProductStatus | 'all';
  initialSubcategory?: FurnitureSubcategory;
  initialSearch?: string;
  onViewDetails: (product: Product) => void;
  title?: string;
  subtitle?: string;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  products,
  initialCategory = 'all',
  initialStatus = 'all',
  initialSubcategory = 'all',
  initialSearch = '',
  onViewDetails,
  title,
  subtitle
}) => {
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState<FurnitureSubcategory>(initialSubcategory);
  const [selectedStatus, setSelectedStatus] = useState<ProductStatus | 'all'>(initialStatus);

  const hasActiveFilters = 
    searchQuery.trim() !== '' || 
    selectedCategory !== 'all' || 
    selectedSubcategory !== 'all' || 
    selectedStatus !== 'all';

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSelectedStatus('all');
  };

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      // Category filter
      if (selectedCategory !== 'all' && p.category !== selectedCategory) {
        return false;
      }

      // Subcategory filter
      if (selectedSubcategory !== 'all' && p.subcategory !== selectedSubcategory) {
        return false;
      }

      // Status filter
      if (selectedStatus !== 'all' && p.status !== selectedStatus) {
        return false;
      }

      // Search query (name, materials, description)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const nameEn = p.name.en.toLowerCase();
        const nameHi = p.name.hi.toLowerCase();
        const descEn = p.description.en.toLowerCase();
        const descHi = p.description.hi.toLowerCase();
        const wood = (p.materials.wood || '').toLowerCase();
        const ply = (p.materials.plywood || '').toLowerCase();

        const match = 
          nameEn.includes(query) ||
          nameHi.includes(query) ||
          descEn.includes(query) ||
          descHi.includes(query) ||
          wood.includes(query) ||
          ply.includes(query);

        if (!match) return false;
      }

      return true;
    });
  }, [products, selectedCategory, selectedSubcategory, selectedStatus, searchQuery]);

  return (
    <div className="py-10 sm:py-16 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
            {title || (language === 'hi' ? "हमारा संपूर्ण फर्नीचर संग्रह" : "Handcrafted Woodwork Collection")}
          </h1>
          <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-3xl">
            {subtitle || (language === 'hi' 
              ? "दुकान में तुरंत उपलब्ध फर्नीचर, ऑर्डर पर तैयार होने वाले मॉडल और विशेष कस्टम काम देखें।" 
              : "Explore furniture currently in our Mahendragarh showroom, made-to-order designs, and bespoke pieces.")}
          </p>
        </div>

        {/* Filter Controls */}
        <ProductFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedSubcategory={selectedSubcategory}
          onSelectSubcategory={setSelectedSubcategory}
          selectedStatus={selectedStatus}
          onSelectStatus={setSelectedStatus}
          onClearFilters={handleClearFilters}
          hasActiveFilters={hasActiveFilters}
        />

        {/* Results Counter & Real Photos Badge */}
        <div className="flex items-center justify-between text-xs text-stone-600 border-b border-stone-200 pb-3">
          <span>
            {language === 'hi' ? "दिखाए गए उत्पाद: " : "Showing "}
            <strong className="text-stone-900 font-bold">{filteredProducts.length}</strong>
            {language === 'hi' ? " आइटम" : " items"}
          </span>

          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-stone-500">
            <Sparkles className="w-3.5 h-3.5 text-[#8B4513]" />
            <span>{language === 'hi' ? "सभी विवरण पारदर्शी हैं" : "Fully transparent materials"}</span>
          </span>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-stone-200 p-12 text-center max-w-md mx-auto space-y-3">
            <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
              <PackageOpen className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-stone-900 text-base">
              {language === 'hi' ? "कोई उत्पाद नहीं मिला" : "No products found"}
            </h3>
            <p className="text-xs text-stone-600">
              {language === 'hi'
                ? "आपके चुने गए फ़िल्टर या खोज के अनुसार कोई फर्नीचर नहीं मिला। कृपया फ़िल्टर बदलें।"
                : "No items match your active filters or search terms. Try clearing filters to see all work."}
            </p>
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 text-xs font-semibold bg-[#8B4513] text-white rounded-lg hover:bg-[#72380F] transition-colors"
            >
              {language === 'hi' ? "फ़िल्टर हटाएं" : "Clear All Filters"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};


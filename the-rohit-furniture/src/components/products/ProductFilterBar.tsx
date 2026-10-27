import React from 'react';
import type { ProductCategory, FurnitureSubcategory, ProductStatus } from '../../types/product';
import { useLanguage } from '../../context/LanguageContext';
import { Search, SlidersHorizontal, X } from 'lucide-react';

interface ProductFilterBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  selectedSubcategory: FurnitureSubcategory;
  onSelectSubcategory: (sub: FurnitureSubcategory) => void;
  selectedStatus: ProductStatus | 'all';
  onSelectStatus: (status: ProductStatus | 'all') => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
}

export const ProductFilterBar: React.FC<ProductFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  selectedSubcategory,
  onSelectSubcategory,
  selectedStatus,
  onSelectStatus,
  onClearFilters,
  hasActiveFilters
}) => {
  const { language } = useLanguage();

  const categories: { id: ProductCategory; en: string; hi: string }[] = [
    { id: 'all', en: "All Work", hi: "सभी कार्य" },
    { id: 'furniture', en: "Furniture", hi: "फर्नीचर" },
    { id: 'wooden_kitchen', en: "Wooden Kitchens", hi: "लकड़ी की किचन" },
    { id: 'wooden_door', en: "Wooden Doors", hi: "लकड़ी के दरवाजे" },
    { id: 'wooden_window', en: "Wooden Windows", hi: "लकड़ी की खिड़कियाँ" }
  ];

  const subcategories: { id: FurnitureSubcategory; en: string; hi: string }[] = [
    { id: 'all', en: "All Types", hi: "सभी प्रकार" },
    { id: 'beds', en: "Beds", hi: "डबल बेड" },
    { id: 'sofa_sets', en: "Sofa Sets", hi: "सोफा सेट" },
    { id: 'dining_tables', en: "Dining Tables", hi: "डाइनिंग सेट" },
    { id: 'wardrobes', en: "Wardrobes / Almirah", hi: "अलमारी / वार्डरोब" },
    { id: 'chairs', en: "Chairs", hi: "कुर्सियाँ" },
    { id: 'tv_units', en: "TV Units", hi: "टीवी यूनिट" }
  ];

  const statuses: { id: ProductStatus | 'all'; en: string; hi: string }[] = [
    { id: 'all', en: "All Status", hi: "सभी उपलब्धता" },
    { id: 'available_in_shop', en: "Available in Shop", hi: "दुकान में उपलब्ध" },
    { id: 'made_to_order', en: "Made to Order", hi: "ऑर्डर पर तैयार" },
    { id: 'partner_product', en: "Partner Products", hi: "पार्टनर उत्पाद" }
  ];

  return (
    <div className="bg-white rounded-xl border border-stone-200 p-4 sm:p-5 shadow-xs space-y-4">
      {/* Search Input & Reset Button */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={
              language === 'hi' 
                ? "उत्पाद, लकड़ी (शीशम, सागवान) या श्रेणी खोजें..." 
                : "Search furniture, wood (Sheesham, Teak), or kitchen..."
            }
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]/20 focus:border-[#8B4513]"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? "फ़िल्टर हटाएं" : "Clear Filters"}</span>
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div>
        <div className="flex items-center gap-1.5 text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#8B4513]" />
          <span>{language === 'hi' ? "मुख्य श्रेणी:" : "Main Category:"}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                if (cat.id !== 'furniture') {
                  onSelectSubcategory('all');
                }
              }}
              className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#8B4513] text-white shadow-xs'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-750'
              }`}
            >
              {language === 'hi' ? cat.hi : cat.en}
            </button>
          ))}
        </div>
      </div>

      {/* Subcategory Pills (Only visible when Furniture or All is active) */}
      {(selectedCategory === 'furniture' || selectedCategory === 'all') && (
        <div className="pt-2 border-t border-stone-100">
          <span className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-2">
            {language === 'hi' ? "फर्नीचर प्रकार:" : "Furniture Type:"}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {subcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => onSelectSubcategory(sub.id)}
                className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                  selectedSubcategory === sub.id
                    ? 'bg-amber-100 text-amber-900 font-bold border border-amber-300'
                    : 'bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200'
                }`}
              >
                {language === 'hi' ? sub.hi : sub.en}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Status Pills */}
      <div className="pt-2 border-t border-stone-100">
        <span className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-2">
          {language === 'hi' ? "उपलब्धता स्थिति:" : "Availability Status:"}
        </span>
        <div className="flex flex-wrap gap-1.5">
          {statuses.map((st) => (
            <button
              key={st.id}
              onClick={() => onSelectStatus(st.id)}
              className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                selectedStatus === st.id
                  ? 'bg-stone-900 text-white font-bold'
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-600 border border-stone-200'
              }`}
            >
              {language === 'hi' ? st.hi : st.en}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};


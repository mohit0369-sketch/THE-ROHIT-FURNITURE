import React, { useState } from 'react';
import type { Product, ProductCategory, ProductStatus } from '../../types/product';
import { useLanguage } from '../../context/LanguageContext';
import { StatusBadge } from '../common/StatusBadge';
import { 
  Plus, 
  Trash2, 
  Check, 
  Store, 
  Hammer, 
  Download, 
  Upload, 
  RotateCcw, 
  Layers
} from 'lucide-react';

interface AdminProductManagerProps {
  products: Product[];
  onUpdateProducts: (updated: Product[]) => void;
  onResetToDefaults: () => void;
}

export const AdminProductManager: React.FC<AdminProductManagerProps> = ({
  products,
  onUpdateProducts,
  onResetToDefaults
}) => {
  const { language } = useLanguage();
  const [showAddForm, setShowAddForm] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState('');

  // Form State
  const [nameEn, setNameEn] = useState('');
  const [nameHi, setNameHi] = useState('');
  const [category, setCategory] = useState<ProductCategory>('furniture');
  const [status, setStatus] = useState<ProductStatus>('available_in_shop');
  const [priceEn, setPriceEn] = useState('');
  const [priceHi, setPriceHi] = useState('');
  const [wood, setWood] = useState('Sheesham Wood (Indian Rosewood)');
  const [plywood, setPlywood] = useState('');
  const [finish, setFinish] = useState('Natural Hand Polish');
  const [hardware, setHardware] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [descriptionEn, setDescriptionEn] = useState('');
  const [descriptionHi, setDescriptionHi] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isHandmade, setIsHandmade] = useState(true);

  // Toggle quick status (e.g. mark in-shop item as sold / made to order)
  const handleToggleStatus = (id: string, newStatus: ProductStatus) => {
    const updated = products.map(p => {
      if (p.id === id) {
        return { ...p, status: newStatus };
      }
      return p;
    });
    onUpdateProducts(updated);
    flashMessage(language === 'hi' ? "स्थिति सफलतापूर्वक अपडेट हुई!" : "Product status updated!");
  };

  const handleDelete = (id: string) => {
    if (window.confirm(language === 'hi' ? "क्या आप वाकई इस उत्पाद को हटाना चाहते हैं?" : "Are you sure you want to delete this product?")) {
      const updated = products.filter(p => p.id !== id);
      onUpdateProducts(updated);
      flashMessage(language === 'hi' ? "उत्पाद हटा दिया गया।" : "Product removed.");
    }
  };

  const flashMessage = (msg: string) => {
    setSaveSuccessMsg(msg);
    setTimeout(() => setSaveSuccessMsg(''), 3000);
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameEn.trim()) {
      alert("Please provide product name in English");
      return;
    }

    const newProduct: Product = {
      id: `prod-${Date.now()}`,
      slug: nameEn.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      name: {
        en: nameEn.trim(),
        hi: nameHi.trim() || nameEn.trim()
      },
      category,
      status,
      description: {
        en: descriptionEn.trim() || "Handcrafted woodwork from The Rohit Furniture workshop.",
        hi: descriptionHi.trim() || "द रोहित फर्नीचर द्वारा हस्तनिर्मित लकड़ी का कार्य।"
      },
      priceDisplay: priceEn.trim() ? {
        en: priceEn.trim(),
        hi: priceHi.trim() || priceEn.trim()
      } : null,
      materials: {
        wood: wood.trim() || null,
        plywood: plywood.trim() || null,
        finish: finish.trim() || null,
        hardware: hardware.trim() || null
      },
      dimensions: dimensions.trim() || null,
      images: [
        {
          id: `img-${Date.now()}`,
          url: imageUrl.trim() || "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80",
          alt: nameEn.trim()
        }
      ],
      isCustomizable: true,
      isHandmadeByUs: isHandmade,
      featuredInHome: status === 'available_in_shop'
    };

    onUpdateProducts([newProduct, ...products]);
    setShowAddForm(false);
    flashMessage(language === 'hi' ? "नया उत्पाद सफलतापूर्वक जोड़ा गया!" : "New product added successfully!");
    // Reset Form
    setNameEn('');
    setNameHi('');
    setDescriptionEn('');
    setDescriptionHi('');
    setPriceEn('');
    setPriceHi('');
    setImageUrl('');
  };

  // Export JSON backup
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(products, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `rohit-furniture-products-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Import JSON backup
  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      fileReader.readAsText(e.target.files[0], "UTF-8");
      fileReader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target?.result as string);
          if (Array.isArray(parsed)) {
            onUpdateProducts(parsed);
            flashMessage("Products imported successfully!");
          }
        } catch {
          alert("Invalid JSON file format");
        }
      };
    }
  };

  return (
    <div className="py-10 sm:py-16 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-900 text-white text-xs font-bold uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Owner Product Management Studio</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              {language === 'hi' ? "उत्पाद प्रबंधन (मालिक/टीम कंट्रोल)" : "Product & Inventory Management"}
            </h1>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              {language === 'hi'
                ? "यहाँ से आप नए उत्पाद जोड़ सकते हैं, दुकान में उपलब्ध सामान की स्थिति बदल सकते हैं और डेटा बैकअप ले सकते हैं।"
                : "Add products, toggle in-shop availability, edit materials, and export data for future Supabase/CMS syncing."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#8B4513] hover:bg-[#72380F] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>{showAddForm ? "Cancel Form" : (language === 'hi' ? "नया उत्पाद जोड़ें" : "Add Product")}</span>
            </button>

            <button
              onClick={handleExportJSON}
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-white border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs sm:text-sm font-semibold rounded-xl shadow-2xs transition-colors"
              title="Export JSON backup"
            >
              <Download className="w-4 h-4 text-stone-600" />
              <span>Export JSON</span>
            </button>

            <label className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-white border border-stone-300 hover:bg-stone-50 text-stone-700 text-xs sm:text-sm font-semibold rounded-xl shadow-2xs transition-colors cursor-pointer">
              <Upload className="w-4 h-4 text-stone-600" />
              <span>Import JSON</span>
              <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
            </label>

            <button
              onClick={onResetToDefaults}
              className="inline-flex items-center gap-1.5 px-3 py-2.5 text-stone-500 hover:text-red-700 hover:bg-red-50 text-xs font-semibold rounded-xl transition-colors"
              title="Reset to default seeds"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Success Alert */}
        {saveSuccessMsg && (
          <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 p-4 rounded-xl flex items-center gap-2 text-sm font-semibold shadow-2xs">
            <Check className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>{saveSuccessMsg}</span>
          </div>
        )}

        {/* Add Product Form Modal / Section */}
        {showAddForm && (
          <form onSubmit={handleCreateProduct} className="bg-white rounded-2xl border border-stone-300 p-6 sm:p-8 space-y-6 shadow-md">
            <h3 className="text-lg font-bold text-stone-900 border-b border-stone-200 pb-3">
              {language === 'hi' ? "नया उत्पाद विवरण भरें" : "Enter New Product Details"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Product Name (English) *</label>
                <input
                  type="text"
                  required
                  value={nameEn}
                  onChange={(e) => setNameEn(e.target.value)}
                  placeholder="e.g. Handmade Solid Sheesham Double Bed"
                  className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">उत्पाद का नाम (हिन्दी)</label>
                <input
                  type="text"
                  value={nameHi}
                  onChange={(e) => setNameHi(e.target.value)}
                  placeholder="उदा. हस्तनिर्मित ठोस शीशम डबल बेड"
                  className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as ProductCategory)}
                  className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]/20"
                >
                  <option value="furniture">Furniture</option>
                  <option value="wooden_kitchen">Wooden Kitchen</option>
                  <option value="wooden_door">Wooden Door</option>
                  <option value="wooden_window">Wooden Window</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Initial Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value as ProductStatus)}
                  className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]/20"
                >
                  <option value="available_in_shop">Available in Shop (Showroom piece)</option>
                  <option value="made_to_order">Made to Order</option>
                  <option value="custom_only">Custom Design</option>
                  <option value="partner_product">Partner Product (External supplier)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Price / Price Label (English)</label>
                <input
                  type="text"
                  value={priceEn}
                  onChange={(e) => setPriceEn(e.target.value)}
                  placeholder="e.g. Starting from ₹28,500"
                  className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">मूल्य (हिन्दी)</label>
                <input
                  type="text"
                  value={priceHi}
                  onChange={(e) => setPriceHi(e.target.value)}
                  placeholder="उदा. शुरुआती मूल्य ₹28,500"
                  className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Wood Species</label>
                <input
                  type="text"
                  value={wood}
                  onChange={(e) => setWood(e.target.value)}
                  placeholder="e.g. Seasoned Sheesham Wood or Teak"
                  className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Plywood / Core Board</label>
                <input
                  type="text"
                  value={plywood}
                  onChange={(e) => setPlywood(e.target.value)}
                  placeholder="e.g. BWP 710 Marine Waterproof Ply"
                  className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Finish & Polish</label>
                <input
                  type="text"
                  value={finish}
                  onChange={(e) => setFinish(e.target.value)}
                  placeholder="e.g. Lakhdana Hand Polish or PU Matte"
                  className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Hardware & Fittings</label>
                <input
                  type="text"
                  value={hardware}
                  onChange={(e) => setHardware(e.target.value)}
                  placeholder="e.g. Soft-close hinges, Hydraulic pump"
                  className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Dimensions / Size</label>
                <input
                  type="text"
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  placeholder={'e.g. 72" x 78" (King Size)'}
                  className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">Image URL</label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 mb-1">Description (English)</label>
              <textarea
                rows={2}
                value={descriptionEn}
                onChange={(e) => setDescriptionEn(e.target.value)}
                placeholder="Product description and craftsmanship details..."
                className="w-full px-3.5 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513]/20"
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="isHandmadeCheck"
                checked={isHandmade}
                onChange={(e) => setIsHandmade(e.target.checked)}
                className="w-4 h-4 text-[#8B4513] rounded border-stone-300"
              />
              <label htmlFor="isHandmadeCheck" className="text-xs font-semibold text-stone-700">
                Handmade by Rohit Furniture Workshop (Uncheck if sourced from external partner)
              </label>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-bold bg-[#8B4513] hover:bg-[#72380F] text-white rounded-lg shadow-sm"
              >
                Save & Add to Catalog
              </button>
            </div>
          </form>
        )}

        {/* Existing Products List & Fast Status Toggles */}
        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
          <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
            <h3 className="font-bold text-stone-900 text-sm">
              All Catalog Products ({products.length})
            </h3>
            <span className="text-xs text-stone-500">
              Click status pills below to toggle availability instantly
            </span>
          </div>

          <div className="divide-y divide-stone-100">
            {products.map((p) => (
              <div key={p.id} className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-stone-50/60 transition-colors">
                <div className="flex items-start gap-3.5 min-w-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-stone-100 shrink-0 border border-stone-200">
                    <img src={p.images[0]?.url} alt={p.name.en} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-bold text-stone-900 text-sm sm:text-base truncate">
                        {p.name.en}
                      </h4>
                      <StatusBadge status={p.status} size="sm" />
                    </div>
                    <div className="text-xs text-stone-500 mt-0.5">
                      <span className="capitalize">{p.category.replace('_', ' ')}</span>
                      {p.materials.wood && <span> • {p.materials.wood}</span>}
                      {p.dimensions && <span> • {p.dimensions}</span>}
                    </div>
                    {p.priceDisplay && (
                      <div className="text-xs font-bold text-[#8B4513] mt-0.5">
                        {p.priceDisplay.en}
                      </div>
                    )}
                  </div>
                </div>

                {/* Quick Availability Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <div className="inline-flex rounded-lg border border-stone-200 p-0.5 bg-stone-100">
                    <button
                      onClick={() => handleToggleStatus(p.id, 'available_in_shop')}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                        p.status === 'available_in_shop' 
                          ? 'bg-emerald-600 text-white shadow-xs' 
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                      title="Mark as currently in showroom"
                    >
                      <Store className="w-3 h-3 inline mr-1" />
                      In Shop
                    </button>
                    <button
                      onClick={() => handleToggleStatus(p.id, 'made_to_order')}
                      className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                        p.status === 'made_to_order' 
                          ? 'bg-amber-600 text-white shadow-xs' 
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                      title="Mark as made to order"
                    >
                      <Hammer className="w-3 h-3 inline mr-1" />
                      Made to Order
                    </button>
                  </div>

                  <button
                    onClick={() => handleDelete(p.id)}
                    className="p-2 text-stone-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete product"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


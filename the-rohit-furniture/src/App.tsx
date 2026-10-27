import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header, type NavTab } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { BottomMobileNav } from './components/common/BottomMobileNav';
import { ProductModal } from './components/common/ProductModal';

// Home Components
import type { CatKey } from './components/home/CategoriesGrid';
import { HomeProducts } from './components/home/HomeProducts';
import { DesignIdeas } from './components/home/DesignIdeas';
import { AboutSection } from './components/home/AboutSection';
import { Landing } from './components/common/Landing';
import { ServiceAreaSection } from './components/home/ServiceAreaSection';
import { VisitShopSection } from './components/home/VisitShopSection';

// Custom & Materials
import { CustomWorkflow } from './components/custom/CustomWorkflow';
import { MaterialGuide } from './components/materials/MaterialGuide';
import { PartnerProductsView } from './components/partners/PartnerProductsView';

// Dedicated Views
import { KitchensView } from './components/views/KitchensView';
import { DoorsWindowsView } from './components/views/DoorsWindowsView';
import { CatalogView } from './components/views/CatalogView';

// Data & Types
import { productRepository } from './services/productRepository';
import type { Product, FurnitureSubcategory } from './types/product';

const MainContent: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [products, setProducts] = useState<Product[]>([]);
  const [landing, setLanding] = useState(true);
  const [sub, setSub] = useState<FurnitureSubcategory>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    productRepository.getAll().then(setProducts);
  }, []);

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategory = (k: CatKey) => {
    const subs: Partial<Record<CatKey, FurnitureSubcategory>> = {
      bed: 'beds', dining: 'dining_tables', sofa: 'sofa_sets', table: 'tables',
      almirah: 'wardrobes', trunk: 'trunks', dress: 'dressing_tables', more: 'other',
    };
    if (k === 'kitchen') handleSelectTab('kitchens');
    else if (k === 'door' || k === 'window') handleSelectTab('doors_windows');
    else { setSub(subs[k] ?? 'all'); handleSelectTab('furniture'); }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#1F1D1A]">
      {landing && <Landing onDone={() => setLanding(false)} />}
      {/* Header */}
      <Header activeTab={activeTab} onSelectTab={handleSelectTab} />

      {/* Main View Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            <HomeProducts products={products} onSelectCategory={handleCategory} onViewDetails={setSelectedProduct} />
            <DesignIdeas />
            <AboutSection />
          </>
        )}

        {activeTab === 'furniture' && (
          <CatalogView
            key={sub}
            products={products}
            initialCategory="furniture"
            initialSubcategory={sub}
            onViewDetails={setSelectedProduct}
            title={language === 'hi' ? "हस्तनिर्मित फर्नीचर (डबल बेड, सोफा, अलमारी)" : "Handcrafted Solid Furniture"}
            subtitle={language === 'hi' 
              ? "पक्की शीशम व सागवान से हाथ से बने बेड, सोफा सेट, डाइनिंग टेबल व अलमारियां।" 
              : "Handmade double beds, sofa frames, dining sets, and solid wood wardrobes built in our Mahendragarh workshop."}
          />
        )}

        {activeTab === 'kitchens' && (
          <KitchensView
            products={products}
            onViewDetails={setSelectedProduct}
          />
        )}

        {activeTab === 'doors_windows' && (
          <DoorsWindowsView
            products={products}
            onViewDetails={setSelectedProduct}
          />
        )}

        {activeTab === 'in_shop' && (
          <CatalogView
            products={products}
            initialStatus="available_in_shop"
            onViewDetails={setSelectedProduct}
            title={language === 'hi' ? "दुकान में अभी उपलब्ध फर्नीचर (शो-रूम स्टॉक)" : "Available in Shop Now"}
            subtitle={language === 'hi'
              ? "ये उत्पाद हमारे महेंद्रगढ़ शोरूम में अभी तैयार हैं। आप सीधे आकर देख व खरीद सकते हैं।"
              : "These items are physically on display in our Mahendragarh showroom. Walk in and inspect today."}
          />
        )}

        {activeTab === 'made_to_order' && (
          <>
            <CustomWorkflow />
            <DesignIdeas />
            <CatalogView
              products={products.filter(p => p.status === 'made_to_order' || p.status === 'custom_only')}
              onViewDetails={setSelectedProduct}
              title={language === 'hi' ? "ऑर्डर पर बनाए जाने वाले डिज़ाइन" : "Made to Order Masterpieces"}
              subtitle={language === 'hi'
                ? "हमारे पिछले काम के उदाहरण। आप इनमें से चुन सकते हैं या अपना मनपसंद साइज़ बनवा सकते हैं।"
                : "Examples of past handcrafted projects. You can order these exact specs or modify dimensions to your room."}
            />
          </>
        )}

        {activeTab === 'materials' && (
          <MaterialGuide />
        )}

        {activeTab === 'partners' && (
          <PartnerProductsView
            products={products}
            onViewDetails={setSelectedProduct}
          />
        )}

        {activeTab === 'visit' && (
          <>
            <VisitShopSection />
            <ServiceAreaSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Sticky Bottom Bar for Mobile Viewports */}
      <BottomMobileNav onVisitClick={() => handleSelectTab('visit')} />

      {/* Accessible Product Details Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onNavigateToMaterials={() => handleSelectTab('materials')}
      />
    </div>
  );
};

export function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;


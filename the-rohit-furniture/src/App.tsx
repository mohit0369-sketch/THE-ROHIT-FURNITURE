import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { CallProvider, useCall } from './context/CallContext';
import { CallChooser } from './components/common/CallChooser';
import { Header, type NavTab } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { BottomMobileNav } from './components/common/BottomMobileNav';
import { ProductModal } from './components/common/ProductModal';

// Home Components
import type { CatKey } from './components/home/CategoriesGrid';
import { HomeProducts } from './components/home/HomeProducts';
import { DesignIdeas } from './components/home/DesignIdeas';
import { AboutSection } from './components/home/AboutSection';
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

// Landing Page
import PerspectiveTunnelHero from './components/ui/perspective-tunnel-hero';

// Data & Types
import { productRepository } from './services/productRepository';
import type { Product, FurnitureSubcategory } from './types/product';

const MainContent: React.FC = () => {
  const { language } = useLanguage();

  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [products, setProducts] = useState<Product[]>([]);
  const [landing, setLanding] = useState(true);
  const [sub, setSub] = useState<FurnitureSubcategory>('all');
  const [activeCat, setActiveCat] = useState<CatKey | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Single shared "Who would you like to call?" chooser state so the modal
  // can only be open once at a time regardless of which "Call Us" entry
  // point (header, hero, footer, mobile nav, etc.) triggered it.
  const { isCallOpen, closeCallChooser } = useCall();

  // Load products only.
  // Landing page controls when it closes.
  useEffect(() => {
    productRepository.getAll().then(setProducts);
  }, []);

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleCategory = (k: CatKey) => {
    const subs: Partial<Record<CatKey, FurnitureSubcategory>> = {
      bed: 'beds',
      dining: 'dining_tables',
      sofa: 'sofa_sets',
      table: 'tables',
      almirah: 'wardrobes',
      trunk: 'trunks',
      dress: 'dressing_tables',
      more: 'other',
    };

    if (k === 'kitchen') {
      handleSelectTab('kitchens');
    } else if (k === 'door' || k === 'window') {
      handleSelectTab('doors_windows');
    } else {
      setSub(subs[k] ?? 'all');
      handleSelectTab('furniture');
    }

    setActiveCat(k);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5EDE4] text-[#2C1A0B]">

      {/* =========================================================
          PERSPECTIVE TUNNEL LANDING PAGE
         ========================================================= */}
      {landing && (
        <div className="fixed inset-0 z-[100]">
          <PerspectiveTunnelHero
            onDone={() => {
              setLanding(false);
            }}
          />
        </div>
      )}

      {/* =========================================================
          EXISTING HEADER
         ========================================================= */}
      <Header
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />

      {/* =========================================================
          MAIN CONTENT
         ========================================================= */}
      <main className="flex-1">

        {/* HOME */}
        {activeTab === 'home' && (
          <>
            <HomeProducts
              products={products}
              onSelectCategory={handleCategory}
              onViewDetails={setSelectedProduct}
              activeCat={activeCat}
            />

            <DesignIdeas />

            <AboutSection />
          </>
        )}

        {/* FURNITURE */}
        {activeTab === 'furniture' && (
          <CatalogView
            key={sub}
            products={products}
            initialCategory="furniture"
            initialSubcategory={sub}
            onViewDetails={setSelectedProduct}
            title={
              language === 'hi'
                ? 'हस्तनिर्मित फर्नीचर (डबल बेड, सोफा, अलमारी)'
                : 'Handcrafted Solid Furniture'
            }
            subtitle={
              language === 'hi'
                ? 'पक्की शीशम व सागवान से हाथ से बने बेड, सोफा सेट, डाइनिंग टेबल व अलमारियां।'
                : 'Handmade double beds, sofa frames, dining sets, and solid wood wardrobes built in our Mahendragarh workshop.'
            }
          />
        )}

        {/* KITCHENS */}
        {activeTab === 'kitchens' && (
          <KitchensView
            products={products}
            onViewDetails={setSelectedProduct}
          />
        )}

        {/* DOORS & WINDOWS */}
        {activeTab === 'doors_windows' && (
          <DoorsWindowsView
            products={products}
            onViewDetails={setSelectedProduct}
          />
        )}

        {/* AVAILABLE IN SHOP */}
        {activeTab === 'in_shop' && (
          <CatalogView
            products={products}
            initialStatus="available_in_shop"
            onViewDetails={setSelectedProduct}
            title={
              language === 'hi'
                ? 'दुकान में अभी उपलब्ध फर्नीचर (शो-रूम स्टॉक)'
                : 'Available in Shop Now'
            }
            subtitle={
              language === 'hi'
                ? 'ये उत्पाद हमारे महेंद्रगढ़ शोरूम में अभी तैयार हैं। आप सीधे आकर देख व खरीद सकते हैं।'
                : 'These items are physically on display in our Mahendragarh showroom. Walk in and inspect today.'
            }
          />
        )}

        {/* MADE TO ORDER */}
        {activeTab === 'made_to_order' && (
          <>
            <CustomWorkflow />

            <DesignIdeas />

            <CatalogView
              products={products.filter(
                (p) =>
                  p.status === 'made_to_order' ||
                  p.status === 'custom_only'
              )}
              onViewDetails={setSelectedProduct}
              title={
                language === 'hi'
                  ? 'ऑर्डर पर बनाए जाने वाले डिज़ाइन'
                  : 'Made to Order Masterpieces'
              }
              subtitle={
                language === 'hi'
                  ? 'हमारे पिछले काम के उदाहरण। आप इनमें से चुन सकते हैं या अपना मनपसंद साइज़ बनवा सकते हैं।'
                  : 'Examples of past handcrafted projects. You can order these exact specs or modify dimensions to your room.'
              }
            />
          </>
        )}

        {/* MATERIALS */}
        {activeTab === 'materials' && (
          <MaterialGuide />
        )}

        {/* PARTNERS */}
        {activeTab === 'partners' && (
          <PartnerProductsView
            products={products}
            onViewDetails={setSelectedProduct}
          />
        )}

        {/* VISIT SHOP */}
        {activeTab === 'visit' && (
          <>
            <VisitShopSection />
            <ServiceAreaSection />
          </>
        )}

      </main>

      {/* =========================================================
          EXISTING FOOTER
         ========================================================= */}
      <Footer
        onSelectTab={handleSelectTab}
      />

      {/* =========================================================
          MOBILE NAVIGATION
         ========================================================= */}
      <BottomMobileNav
        onVisitClick={() => handleSelectTab('visit')}
      />

      {/* =========================================================
          PRODUCT MODAL
         ========================================================= */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onNavigateToMaterials={() => handleSelectTab('materials')}
      />

      {/* SHARED CALL CHOOSER (rendered once at root - no duplicates) */}
      <CallChooser open={isCallOpen} onClose={closeCallChooser} />

    </div>
  );
};

export function App() {
  return (
    <LanguageProvider>
      <CallProvider>
        <MainContent />
      </CallProvider>
    </LanguageProvider>
  );
}

export default App;
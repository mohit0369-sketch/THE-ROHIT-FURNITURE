import React, { useState } from 'react';
import type { Product } from '../../types/product';
import { useLanguage } from '../../context/LanguageContext';
import { ProductCard } from '../products/ProductCard';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { CallButton } from '../common/CallButton';
import { getDoorsWindowsWhatsAppUrl } from '../../utils/whatsapp';
import { DoorOpen } from 'lucide-react';



interface DoorsWindowsViewProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
}

export const DoorsWindowsView: React.FC<DoorsWindowsViewProps> = ({ products, onViewDetails }) => {
  const { language } = useLanguage();
  const [filterType, setFilterType] = useState<'all' | 'doors' | 'windows'>('all');

  const doorsProducts = products.filter(p => p.category === 'wooden_door');
  const windowsProducts = products.filter(p => p.category === 'wooden_window');

  const displayedProducts = filterType === 'doors'
    ? doorsProducts
    : filterType === 'windows'
    ? windowsProducts
    : [...doorsProducts, ...windowsProducts];

  const doorsWhatsAppUrl = getDoorsWindowsWhatsAppUrl(
    filterType === 'doors' ? 'door' : filterType === 'windows' ? 'window' : 'both',
    language
  );

  return (
    <div className="py-10 sm:py-16 bg-[#F5EDE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner Section */}
        <div className="bg-[#1F1209] text-white rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden text-left border border-[#422A14] shadow-md">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7D4A27] text-white text-xs font-bold uppercase tracking-wider">
              <DoorOpen className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? "ठोस इमारती लकड़ी" : "Solid Timber Woodwork"}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {language === 'hi'
                ? "ठोस सागवान व शीशम के भारी दरवाजे और खिड़कियाँ"
                : "Solid Teak & Sheesham Handcrafted Doors & Windows"}
            </h1>

            <p className="text-[#D4B896] text-sm sm:text-base leading-relaxed">
              {language === 'hi'
                ? "मकान के मुख्य द्वार से लेकर कमरों के पल्लों और भारी चौखटों तक। धूप-बारिश सहने वाली पक्की लकड़ी, हाथ की पारंपरिक नक्काशी और आपके नाप के अनुसार निर्माण।"
                : "Heavy entrance doors, hand-carved panels, seasoned chaukhat frames, and glazed wooden window leaves built to withstand weather, sun, and decades of use in Haryana."}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <WhatsAppButton
                url={doorsWhatsAppUrl}
                label={language === 'hi' ? "दरवाजे/खिड़की के लिए संपर्क करें" : "Discuss Doors & Windows"}
                variant="primary"
                className="py-3 px-5 text-base"
              />
              <CallButton label={language === 'hi' ? "फोन करें" : "Call Workshop"} className="py-3 px-4 text-base" />
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-[#D4B896] pb-4 text-left">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterType('all')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors ${
                filterType === 'all'
                  ? 'bg-[#7D4A27] text-white shadow-xs border border-[#6E3F20]'
                  : 'bg-[#FAF6F0] hover:bg-[#EBD9C8] text-[#422A14] border border-[#D4B896]'
              }`}
            >
              {language === 'hi' ? "सभी (दरवाजे व खिड़कियाँ)" : "All Doors & Windows"}
            </button>
            <button
              onClick={() => setFilterType('doors')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors ${
                filterType === 'doors'
                  ? 'bg-[#7D4A27] text-white shadow-xs border border-[#6E3F20]'
                  : 'bg-[#FAF6F0] hover:bg-[#EBD9C8] text-[#422A14] border border-[#D4B896]'
              }`}
            >
              {language === 'hi' ? "केवल दरवाजे (Doors)" : "Wooden Doors Only"}
            </button>
            <button
              onClick={() => setFilterType('windows')}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-colors ${
                filterType === 'windows'
                  ? 'bg-[#7D4A27] text-white shadow-xs border border-[#6E3F20]'
                  : 'bg-[#FAF6F0] hover:bg-[#EBD9C8] text-[#422A14] border border-[#D4B896]'
              }`}
            >
              {language === 'hi' ? "केवल खिड़कियाँ (Windows)" : "Wooden Windows Only"}
            </button>
          </div>

          <span className="text-xs text-[#5E3D22] font-medium">
            {displayedProducts.length} {language === 'hi' ? "डिज़ाइन उपलब्ध" : "designs shown"}
          </span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

        {/* Custom Measurements WhatsApp Card */}
        <div className="bg-[#F4EFEA] rounded-2xl border border-stone-200 p-6 sm:p-8 text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-stone-900">
              {language === 'hi' ? "मकान का काम चल रहा है? चौखट व पल्ले के नाप भेजें" : "Building a house? Send your Door/Window Sizes"}
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm max-w-xl">
              {language === 'hi'
                ? "दरवाजे की ऊंचाई, चौड़ाई और लकड़ी की पसंद (सागवान या शीशम) व्हाट्सएप पर भेजें। हम चौखट सहित पूरा अनुमान बताएंगे।"
                : "Send your door height, width, and timber preference (Teak / Sheesham) on WhatsApp. We provide a complete quote with frame/chaukhat."}
            </p>
          </div>
          <WhatsAppButton
            url={doorsWhatsAppUrl}
            label={language === 'hi' ? "व्हाट्सएप पर नाप भेजें" : "Send Dimensions on WhatsApp"}
            variant="primary"
            className="shrink-0 py-3 px-6"
          />
        </div>
      </div>
    </div>
  );
};


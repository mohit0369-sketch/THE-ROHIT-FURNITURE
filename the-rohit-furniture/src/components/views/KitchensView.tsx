import React from 'react';
import type { Product } from '../../types/product';
import { useLanguage } from '../../context/LanguageContext';
import { ProductCard } from '../products/ProductCard';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { CallButton } from '../common/CallButton';
import { getKitchenWhatsAppUrl } from '../../utils/whatsapp';
import { ChefHat, ShieldCheck, Layers, Sparkles, Wrench } from 'lucide-react';


interface KitchensViewProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
}

export const KitchensView: React.FC<KitchensViewProps> = ({ products, onViewDetails }) => {
  const { language } = useLanguage();
  const kitchenWhatsAppUrl = getKitchenWhatsAppUrl(language);
  const kitchenProducts = products.filter(p => p.category === 'wooden_kitchen');

  const kitchenBenefits = [
    {
      icon: ShieldCheck,
      title: { en: "100% Waterproof BWP 710 Ply Carcass", hi: "100% वाटरप्रूफ BWP 710 मरीन प्लाई" },
      desc: { en: "No particle board or swelling. Stands up to daily steam, water, and cleaning.", hi: "कोई कच्चा बोर्ड नहीं। रोज के पानी और भाप में कभी नहीं फूलती।" }
    },
    {
      icon: Layers,
      title: { en: "Solid Wood Framed Shutters", hi: "ठोस लकड़ी के फ्रेम वाले पल्ले" },
      desc: { en: "Pure Teak or Sheesham outer frames for natural richness and eternal durability.", hi: "प्राकृतिक सुंदरता व मजबूती के लिए ठोस सागवान या शीशम की बॉर्डर।" }
    },
    {
      icon: Sparkles,
      title: { en: "Heat & Turmeric-Resistant PU Polish", hi: "दाग व गर्मी प्रतिरोधी पीयू पॉलिश" },
      desc: { en: "Specially formulated coatings that do not absorb oil, spices, or hot utensils.", hi: "हल्दी, तेल व गर्म बर्तनों के दाग से पूरी तरह सुरक्षित सतह।" }
    },
    {
      icon: Wrench,
      title: { en: "Heavy-Duty SS304 Soft-Close Hardware", hi: "मजबूत स्टील बास्केट्स व सॉफ्ट-क्लोज" },
      desc: { en: "Smooth hydraulic channels and rust-proof stainless steel basket organizers.", hi: "आसानी से सरकने वाली हाइड्रोलिक फिटिंग व जंग-मुक्त स्टील बास्केट।" }
    }
  ];

  return (
    <div className="py-10 sm:py-16 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Banner Section */}
        <div className="bg-[#241A13] text-white rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden text-left">
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A35824] text-white text-xs font-bold uppercase tracking-wider">
              <ChefHat className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? "विशेषज्ञता: लकड़ी की किचन" : "Specialty: Wooden Kitchens"}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {language === 'hi'
                ? "ठोस लकड़ी व वाटरप्रूफ प्लाई की कस्टम मॉड्युलर किचन"
                : "Handcrafted Solid Wood & Marine Ply Modular Kitchens"}
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {language === 'hi'
                ? "हम किसी भी आकार की किचन (L-शेप, U-शेप, पैरेलल) आपके कमरे के नाप अनुसार बनाते हैं। भीतर 100% वाटरप्रूफ BWP 710 प्लाईवुड और बाहर ठोस लकड़ी के सुंदर पल्ले।"
                : "Tailored to your exact home layout in Mahendragarh. We use genuine BWP 710 Boiling Water Proof ply carcasses with solid timber shutters and heavy-duty fittings built to endure Indian cooking."}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <WhatsAppButton
                url={kitchenWhatsAppUrl}
                label={language === 'hi' ? "किचन के लिए व्हाट्सएप करें" : "Consult Kitchen on WhatsApp"}
                variant="primary"
                className="py-3 px-5 text-base"
              />
              <CallButton label={language === 'hi' ? "सीधे फोन करें" : "Call Workshop"} className="py-3 px-4 text-base" />
            </div>
          </div>

          <div className="absolute right-0 bottom-0 top-0 w-1/3 hidden lg:block opacity-30 pointer-events-none">
            <img
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80"
              alt="Kitchen Woodwork"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Benefits Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {kitchenBenefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="bg-white p-5 rounded-xl border border-stone-200 text-left shadow-xs space-y-2">
                <div className="p-2.5 rounded-lg bg-amber-50 text-[#8B4513] border border-amber-200 w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-stone-900 text-sm sm:text-base">
                  {language === 'hi' ? b.title.hi : b.title.en}
                </h4>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {language === 'hi' ? b.desc.hi : b.desc.en}
                </p>
              </div>
            );
          })}
        </div>

        {/* Kitchen Projects Grid */}
        <div>
          <div className="text-left mb-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              {language === 'hi' ? "किचन प्रोजेक्ट्स व डिज़ाइन" : "Kitchen Designs & Configurations"}
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              {language === 'hi'
                ? "सभी किचन ऑर्डर पर आपके घर के नाप के अनुसार तैयार की जाती हैं।"
                : "Every wooden kitchen is custom measured on-site and fabricated in our workshop."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {kitchenProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        </div>

        {/* Layout Measurement Banner */}
        <div className="bg-[#F4EFEA] rounded-2xl border border-stone-200 p-6 sm:p-8 text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-stone-900">
              {language === 'hi' ? "क्या आपके पास किचन का नक्शा या नाप है?" : "Have Kitchen Dimensions or Blueprint?"}
            </h3>
            <p className="text-stone-600 text-xs sm:text-sm max-w-xl">
              {language === 'hi'
                ? "कमरे की लंबाई, चौड़ाई या हाथ से बना खाका व्हाट्सएप पर भेजें। हम आपको लकड़ी व बजट का सटीक अनुमान देंगे।"
                : "Send your room length, L-shape wall measurements, or rough sketch directly to our WhatsApp. We will provide an honest material breakdown and estimate."}
            </p>
          </div>
          <WhatsAppButton
            url={kitchenWhatsAppUrl}
            label={language === 'hi' ? "व्हाट्सएप पर नाप भेजें" : "Send Layout on WhatsApp"}
            variant="primary"
            className="shrink-0 py-3 px-6"
          />
        </div>
      </div>
    </div>
  );
};


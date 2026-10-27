import React, { useState } from 'react';
import { MATERIAL_GUIDE } from '../../data/materials';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheck, Layers, Sparkles, Wrench, CheckCircle } from 'lucide-react';

export const MaterialGuide: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'wood' | 'plywood' | 'finish' | 'hardware'>('all');

  const tabs: { id: 'all' | 'wood' | 'plywood' | 'finish' | 'hardware'; en: string; hi: string }[] = [
    { id: 'all', en: "All Materials", hi: "सभी सामग्रियां" },
    { id: 'wood', en: "Solid Wood", hi: "ठोस इमारती लकड़ी" },
    { id: 'plywood', en: "Plywood Types", hi: "प्लाईवुड के प्रकार" },
    { id: 'finish', en: "Polish & Finishes", hi: "पॉलिश व फिनिश" },
    { id: 'hardware', en: "Hardware", hi: "हार्डवेयर फिटिंग्स" }
  ];

  const filteredItems = activeTab === 'all' 
    ? MATERIAL_GUIDE 
    : MATERIAL_GUIDE.filter(m => m.category === activeTab);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'wood': return ShieldCheck;
      case 'plywood': return Layers;
      case 'finish': return Sparkles;
      default: return Wrench;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B4513] block mb-1">
            {language === 'hi' ? "खुली व सच्ची जानकारी" : "Honest Woodwork Education"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
            {t('headingMaterials')}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-3xl leading-relaxed">
            {language === 'hi'
              ? "हम केवल वही सामग्री इस्तेमाल करते हैं और बताते हैं जो वास्तव में फर्नीचर में लगाई जाती है। जानें कि आपके फर्नीचर के लिए कौन सी लकड़ी और प्लाई सबसे बेहतर है।"
              : "We believe a customer should know exactly what goes inside their furniture. Here is an honest, straightforward guide to the solid woods, plywood grades, and polishes we use."}
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#8B4513] text-white shadow-xs'
                    : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                }`}
              >
                {language === 'hi' ? tab.hi : tab.en}
              </button>
            ))}
          </div>
        </div>

        {/* Material Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredItems.map((item) => {
            const Icon = getCategoryIcon(item.category);
            return (
              <div 
                key={item.id}
                className="bg-white rounded-xl border border-stone-200 p-5 shadow-xs flex flex-col justify-between text-left space-y-4"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-amber-50 text-[#8B4513] border border-amber-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                        {language === 'hi' ? item.name.hi : item.name.en}
                      </h3>
                    </div>
                  </div>

                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed mt-2">
                    {language === 'hi' ? item.description.hi : item.description.en}
                  </p>

                  <div className="mt-4 pt-3 border-t border-stone-100 space-y-2 text-xs">
                    <div>
                      <span className="font-bold text-stone-900 block">
                        {language === 'hi' ? "किसके लिए सर्वश्रेष्ठ है:" : "Best Application:"}
                      </span>
                      <span className="text-stone-600">
                        {language === 'hi' ? item.bestFor.hi : item.bestFor.en}
                      </span>
                    </div>

                    <div>
                      <span className="font-bold text-stone-900 block">
                        {language === 'hi' ? "मजबूती व उम्र:" : "Durability & Longevity:"}
                      </span>
                      <span className="text-stone-600">
                        {language === 'hi' ? item.durability.hi : item.durability.en}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 p-3 rounded-lg border border-stone-200/80 text-xs flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#8B4513] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900">
                      {language === 'hi' ? "रोहित फर्नीचर में हमारा नियम:" : "How We Use It at Rohit Furniture:"}
                    </span>
                    <p className="text-stone-600 mt-0.5">
                      {language === 'hi' ? item.howWeUseIt.hi : item.howWeUseIt.en}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


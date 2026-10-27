import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { getCustomFurnitureWhatsAppUrl } from '../../utils/whatsapp';
import { 
  Camera, 
  MessageSquare, 
  Ruler, 
  Trees, 
  Paintbrush, 
  CheckCircle, 
  Truck 
} from 'lucide-react';

export const CustomWorkflow: React.FC = () => {
  const { language } = useLanguage();
  const customWhatsAppUrl = getCustomFurnitureWhatsAppUrl(language);

  const steps = [
    {
      num: 1,
      icon: Camera,
      title: { en: "1. Share Your Idea", hi: "1. डिज़ाइन या फोटो भेजें" },
      desc: { 
        en: "Found a design on Pinterest, a magazine, or have your own sketch? Send it directly on WhatsApp.", 
        hi: "कोई फोटो पसंद आई हो या आपके दिमाग में कोई विचार हो? सीधे व्हाट्सएप पर शेयर करें।" 
      }
    },
    {
      num: 2,
      icon: Ruler,
      title: { en: "2. Discuss Dimensions", hi: "2. कमरे का सटीक नाप" },
      desc: { 
        en: "Tell us the space available in your room or building. We assist with exact measurements.", 
        hi: "अपने कमरे की जगह बताएं। हम सही नाप और लेआउट तय करने में मदद करते हैं।" 
      }
    },
    {
      num: 3,
      icon: Trees,
      title: { en: "3. Choose Wood & Ply", hi: "3. लकड़ी व सामग्री चुनें" },
      desc: { 
        en: "Choose pure Sheesham, Teak, or waterproof BWP ply according to your budget and requirement.", 
        hi: "पक्की शीशम, सागवान या वाटरप्रूफ प्लाई — अपनी पसंद व बजट अनुसार तय करें।" 
      }
    },
    {
      num: 4,
      icon: Paintbrush,
      title: { en: "4. Select Finish", hi: "4. पॉलिश व फिनिश" },
      desc: { 
        en: "Select natural hand polish, walnut stain, matte melamine, or waterproof PU finish.", 
        hi: "नेचुरल हैंड पॉलिश, अखरोट रंग, मैट मेलामाइन या वाटरप्रूफ पीयू कोटिंग चुनें।" 
      }
    },
    {
      num: 5,
      icon: CheckCircle,
      title: { en: "5. Confirm Order", hi: "5. आर्डर व अनुमानित समय" },
      desc: { 
        en: "We confirm the timeline, honest cost estimate, and start crafting in our workshop.", 
        hi: "स्पष्ट लागत और समय सीमा तय कर हमारे वर्कशॉप में काम शुरू किया जाता है।" 
      }
    },
    {
      num: 6,
      icon: MessageSquare,
      title: { en: "6. Workshop Inspection", hi: "6. बनते समय आकर देखें" },
      desc: { 
        en: "You are welcome to visit our Mahendragarh workshop while your furniture is being framed.", 
        hi: "फर्नीचर बनते समय आप वर्कशॉप आकर लकड़ी और ढांचा अपनी आँखों से देख सकते हैं।" 
      }
    },
    {
      num: 7,
      icon: Truck,
      title: { en: "7. Delivery & Fitting", hi: "7. डिलीवरी व फिटिंग" },
      desc: { 
        en: "Carefully transported and set up in your room with sturdy leveling and alignment.", 
        hi: "सुरक्षित डिलीवरी और आपके घर पर कारीगरों द्वारा पूरी फिटिंग।" 
      }
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#F4EFEA]/70 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#8B4513] block mb-1">
            {language === 'hi' ? "कस्टम ऑर्डर की आसान प्रक्रिया" : "Custom Order Workflow"}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900">
            {language === 'hi' 
              ? "मनपसंद फर्नीचर कैसे बनवाएं? (7 आसान चरण)" 
              : "How We Build Custom Furniture for You"}
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm mt-2">
            {language === 'hi'
              ? "कोई भी साइज़, कोई भी डिज़ाइन — सीधे हमारे वर्कशॉप से बनवाएं। पूरी प्रक्रिया पारदर्शी है।"
              : "Custom dimensions, custom timber, custom polish — crafted with complete transparency."}
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.num}
                className="bg-white p-5 rounded-xl border border-stone-200/90 shadow-xs flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 text-[#8B4513] border border-amber-200 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-extrabold text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full">
                      Step {step.num}
                    </span>
                  </div>
                  <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                    {language === 'hi' ? step.title.hi : step.title.en}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {language === 'hi' ? step.desc.hi : step.desc.en}
                  </p>
                </div>
              </div>
            );
          })}

          {/* 8th Slot: Fast WhatsApp Consultation Card */}
          <div className="bg-[#2D4A3E] text-white p-5 rounded-xl flex flex-col justify-between text-left shadow-sm">
            <div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">
                {language === 'hi' ? "तुरंत बात करें" : "Direct Discussion"}
              </span>
              <h3 className="text-lg font-bold">
                {language === 'hi' ? "क्या आपके पास कोई डिज़ाइन है?" : "Have a design in mind?"}
              </h3>
              <p className="text-emerald-100 text-xs mt-2 leading-relaxed">
                {language === 'hi'
                  ? "व्हाट्सएप पर फोटो या नाप भेजें। हमारे कारीगर से सीधे चर्चा करें।"
                  : "Send your reference photo or dimensions on WhatsApp. Talk directly with us."}
              </p>
            </div>
            <div className="pt-4">
              <WhatsAppButton
                url={customWhatsAppUrl}
                label={language === 'hi' ? "व्हाट्सएप पर फोटो भेजें" : "Send Design on WhatsApp"}
                variant="primary"
                fullWidth
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


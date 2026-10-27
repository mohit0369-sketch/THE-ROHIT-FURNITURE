import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Hammer, CheckCircle2 } from 'lucide-react';


export const CraftStory: React.FC = () => {
  const { language } = useLanguage();

  const points = [
    {
      en: "Properly Seasoned Timber: We ensure wood is thoroughly seasoned to prevent bending or seasonal cracks.",
      hi: "सूखी व पक्की लकड़ी: हम लकड़ी को ठीक से सुखाते हैं ताकि मौसम बदलने पर उसमें दरारें या खिंचाव न आए।"
    },
    {
      en: "Traditional Mortise & Tenon Joints: We believe in deep wooden interlocks rather than relying only on nails.",
      hi: "पारंपरिक जोड़: केवल कीलों पर भरोसा करने के बजाय लकड़ी के मजबूत खांचे (mortise & tenon) जोड़े जाते हैं।"
    },
    {
      en: "Layered Hand Polish: Slow, hand-rubbed coats allow the natural grain of Sheesham and Teak to shine.",
      hi: "हाथ की धीमी पॉलिश: परत-दर-परत हाथ से घिसाई, जिससे लकड़ी की प्राकृतिक धारियाँ साफ और सुंदर दिखती हैं।"
    },
    {
      en: "Custom Sizing & Direct Collaboration: You can sit down with our carpenters and customize every inch.",
      hi: "मनपसंद नाप: आप हमारे कारीगरों के साथ बैठकर अपनी जगह और जरूरत के मुताबिक एक-एक इंच तय कर सकते हैं।"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Workshop Visual Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4 order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4">
              <div className="aspect-4/3 rounded-xl overflow-hidden bg-stone-200 border border-stone-300">
                <img
                  src="https://images.unsplash.com/photo-1502005229762-ee1b2da97c0f?auto=format&fit=crop&w=600&q=80"
                  alt="Wood planning in workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden bg-stone-200 border border-stone-300">
                <img
                  src="https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=600&q=80"
                  alt="Seasoned wood preparation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-3 sm:space-y-4 pt-6">
              <div className="aspect-square rounded-xl overflow-hidden bg-stone-200 border border-stone-300">
                <img
                  src="https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80"
                  alt="Hand tools and joinery"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-4/3 rounded-xl overflow-hidden bg-stone-200 border border-stone-300">
                <img
                  src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80"
                  alt="Finished wooden furniture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Story Narrative */}
          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#8B4513] text-xs font-bold uppercase tracking-wider">
              <Hammer className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? "हमारी कारीगरी और अनुभव" : "Our Craftsmanship & Heritage"}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 leading-tight">
              {language === 'hi'
                ? "फर्नीचर केवल बेचने का सामान नहीं, 15 वर्षों की पक्की मेहनत है।"
                : "Furniture is not just something we sell. It is what our hands have built for over 20 years."}
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {language === 'hi'
                ? "महेंद्रगढ़ में रोहित फर्नीचर की नींव हाथ की शुद्ध कारीगरी, पक्की लकड़ी और ग्राहकों के सीधे विश्वास पर टिकी है। बड़े कारखानों के सस्ते प्लास्टिक बोर्ड वाले फर्नीचर के विपरीत, हम मानते हैं कि घर का फर्नीचर मजबूत, टिकाऊ और पीढ़ियों तक चलने वाला होना चाहिए।"
                : "Based in Mahendragarh, The Rohit Furniture was built on the values of honest woodwork, seasoned solid timbers, and personal trust. Unlike mass-manufactured flatpack furniture made from weak compressed dust, we build real wooden furniture designed to stay solid in your home for decades."}
            </p>

            {/* Checklist of our principles */}
            <div className="space-y-3 pt-2">
              {points.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-[#8B4513] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-stone-800 leading-snug">
                    {language === 'hi' ? pt.hi : pt.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


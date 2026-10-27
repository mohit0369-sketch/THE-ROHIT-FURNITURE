import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { CallButton } from '../common/CallButton';
import { createWhatsAppUrl } from '../../utils/whatsapp';
import { 
  Hammer, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Users, 
  Trees, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

export const AboutUsView: React.FC<{ onVisitShop: () => void }> = ({ onVisitShop }) => {
  const { language } = useLanguage();

  const aboutWhatsAppUrl = createWhatsAppUrl(
    language === 'hi'
      ? "नमस्ते रोहित फर्नीचर! मैंने आपकी 15 वर्षों की कारीगरी के बारे में पढ़ा और मुझे आपसे फर्नीचर बनवाने के बारे में बात करनी है।"
      : "Hello The Rohit Furniture! I read about your 15 years of workshop craftsmanship and would like to discuss a project."
  );

  const pillars = [
    {
      title: { en: "15 Years in Mahendragarh", hi: "महेंद्रगढ़ में 15 वर्षों का अनुभव" },
      desc: {
        en: "Two decades of serving local families, builders, and shop owners with dependable wooden craftsmanship.",
        hi: "दो दशकों से स्थानीय परिवारों, मकान मालिकों और दुकानदारों को मजबूत लकड़ी का फर्नीचर प्रदान करते आ रहे हैं।"
      },
      icon: Clock
    },
    {
      title: { en: "Master Craftsmen Team", hi: "अनुभवी बढ़ई व कारीगरों की टीम" },
      desc: {
        en: "Our carpenters specialize in traditional mortise-and-tenon wood joinery, solid frame carving, and layered hand finishing.",
        hi: "हमारे कारीगर पारंपरिक लकड़ी के खांचों, नक्काशी और परत-दर-परत हाथ की फिनिशिंग में माहिर हैं।"
      },
      icon: Users
    },
    {
      title: { en: "Pure Seasoned Solid Woods", hi: "पक्की व सूखी इमारती लकड़ी" },
      desc: {
        en: "We hand-select properly dried Sheesham (Indian Rosewood) and Sagwan (Teak) logs that will not warp or crack.",
        hi: "हम धूप में सूखी पक्की शीशम और सागवान की लकड़ी का चयन करते हैं, जिसमें कभी खिंचाव नहीं आता।"
      },
      icon: Trees
    },
    {
      title: { en: "Direct Owner Accountability", hi: "मालिक व कारीगर से सीधी बात" },
      desc: {
        en: "No corporate call centers or pushy sales agents. You speak directly to the person building your furniture.",
        hi: "कोई बिचौलिया या कॉल सेंटर नहीं। आप सीधे उसी व्यक्ति से बात करते हैं जो आपका काम बना रहा है।"
      },
      icon: ShieldCheck
    }
  ];

  const workshopStages = [
    {
      step: "01",
      name: { en: "Timber Selection & Seasoning", hi: "लकड़ी की परख व सुखाना" },
      desc: {
        en: "We inspect logs for density, grain character, and moisture content before cutting into structural planks.",
        hi: "तख्तों की कटाई से पहले लकड़ी के घनत्व, प्राकृतिक धारियों और नमी की जांच की जाती है।"
      },
      image: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=600&q=80"
    },
    {
      step: "02",
      name: { en: "Precision Planing & Joint Carving", hi: "रंदा लगाना व मजबूत जोड़ तराशना" },
      desc: {
        en: "Traditional mortise, tenon, and dovetail joints are cut for permanent structural interlock without wobbling.",
        hi: "फर्नीचर के हिलने या ढीले पड़ने से बचाने के लिए मजबूत खांचे व जोड़ तराशे जाते हैं।"
      },
      image: "https://images.unsplash.com/photo-1502005229762-ee1b2da97c0f?auto=format&fit=crop&w=600&q=80"
    },
    {
      step: "03",
      name: { en: "Assembly & Structural Clamping", hi: "फ्रेम जोड़ना व मजबूती परीक्षण" },
      desc: {
        en: "The framework is securely clamped and cured. Customers are always welcome to inspect the raw skeleton in our shop.",
        hi: "पूरा ढांचा मजबूती से जोड़ा जाता है। ग्राहक पॉलिश से पहले कच्चा ढांचा देखने वर्कशॉप आ सकते हैं।"
      },
      image: "https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=600&q=80"
    },
    {
      step: "04",
      name: { en: "Multi-Coat Hand Polishing", hi: "हाथ की धीमी व प्राकृतिक पॉलिश" },
      desc: {
        en: "Hand-rubbed with fine sandpaper and polished with natural Lakhdana or protective PU sealant.",
        hi: "बारीक रेगमार से घिसाई और प्राकृतिक लाखदाना या टिकाऊ पीयू सीलेंट से सुरक्षित पॉलिश।"
      },
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="py-10 sm:py-16 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Banner */}
        <div className="bg-[#241A13] text-white rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden text-left">
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#A35824] text-white text-xs font-bold uppercase tracking-wider">
              <Hammer className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? "15 वर्षों की विरासत" : "15 Years Heritage"}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {language === 'hi'
                ? "द रोहित फर्नीचर — 15 वर्षों का स्थानीय विश्वास व हाथ की शुद्ध कारीगरी"
                : "The Rohit Furniture — 15 Years of Local Trust & Genuine Handmade Woodwork"}
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {language === 'hi'
                ? "फर्नीचर केवल बेचने का उत्पाद नहीं है, यह काम हम अपने हाथों और अनुभवी कारीगरों के साथ पिछले 20 से अधिक वर्षों से कर रहे हैं। महेंद्रगढ़ में स्थित हमारी दुकान और वर्कशॉप में आपको मिलती है सच्ची लकड़ी, पारदर्शी सामग्री और सीधे मालिक से बात।"
                : "Furniture is not just something we sell. It is what our hands have crafted with experienced local craftsmen for more than two decades in Mahendragarh, Haryana. We stand for genuine seasoned timber, transparent specifications, and direct craftsman relationships."}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <WhatsAppButton
                url={aboutWhatsAppUrl}
                label={language === 'hi' ? "कारीगर से बात करें" : "Talk with Workshop"}
                variant="primary"
                className="py-3 px-5 text-base"
              />
              <button
                type="button"
                onClick={onVisitShop}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all active:scale-95"
              >
                <MapPin className="w-4 h-4 text-amber-300" />
                <span>{language === 'hi' ? "दुकान पर आएं" : "Visit Our Shop"}</span>
              </button>
              <CallButton label={language === 'hi' ? "फोन करें" : "Call Us"} className="py-3 px-4 text-base" />
            </div>
          </div>
        </div>

        {/* 4 Pillars of Trust */}
        <div className="text-left space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B4513] block mb-1">
              {language === 'hi' ? "हमारे मूल सिद्धांत" : "Our Foundational Principles"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              {language === 'hi' ? "लोग रोहित फर्नीचर पर भरोसा क्यों करते हैं?" : "Why Customers Trust The Rohit Furniture"}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-stone-200 text-left shadow-xs space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#8B4513] border border-amber-200 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                    {language === 'hi' ? pillar.title.hi : pillar.title.en}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                    {language === 'hi' ? pillar.desc.hi : pillar.desc.en}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Workshop Craftsmanship Stages */}
        <div className="text-left space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#8B4513] block mb-1">
              {language === 'hi' ? "वर्कशॉप निर्माण प्रक्रिया" : "Inside Our Workshop"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              {language === 'hi' ? "हमारा लकड़ी का काम कैसे बनता है?" : "How Our Furniture Is Constructed"}
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-2xl">
              {language === 'hi'
                ? "कच्ची लकड़ी से लेकर तैयार फिनिश तक, हर चरण अनुभवी कारीगरों की देखरेख में होता है।"
                : "From seasoned timber logs to multi-coat hand polishing, every stage is executed by real artisans."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workshopStages.map((stage) => (
              <div key={stage.step} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between">
                <div>
                  <div className="relative aspect-4/3 bg-stone-100 overflow-hidden">
                    <img src={stage.image} alt={stage.name.en} className="w-full h-full object-cover" />
                    <div className="absolute top-3 left-3 bg-[#8B4513] text-white text-xs font-extrabold px-2.5 py-1 rounded-md">
                      Stage {stage.step}
                    </div>
                  </div>
                  <div className="p-5 space-y-2">
                    <h4 className="font-bold text-stone-900 text-base">
                      {language === 'hi' ? stage.name.hi : stage.name.en}
                    </h4>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      {language === 'hi' ? stage.desc.hi : stage.desc.en}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Strict Honesty Pledge */}
        <div className="bg-[#F4EFEA] border border-stone-200 rounded-3xl p-6 sm:p-10 text-left space-y-4">
          <div className="flex items-center gap-2 text-stone-900 font-bold text-base sm:text-lg">
            <Sparkles className="w-5 h-5 text-[#8B4513]" />
            <span>{language === 'hi' ? "हमारी स्पष्ट व ईमानदार व्यापार नीति" : "Our Commitment to Complete Honesty"}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span>
                {language === 'hi'
                  ? "कोई नकली समीक्षाएं नहीं: हम केवल असली ग्राहकों की अनुमति से उनकी सच्ची राय दिखाते हैं।"
                  : "No fake reviews or awards: We never invent false customer numbers or marketing badges."}
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span>
                {language === 'hi'
                  ? "कोई नकली 3D कंप्यूटर रेंडर नहीं: हम केवल अपनी वर्कशॉप और वास्तविक फर्नीचर की तस्वीरें दिखाते हैं।"
                  : "No synthetic 3D renders: We showcase only genuine woodworking and showroom pieces."}
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span>
                {language === 'hi'
                  ? "पूर्ण सामग्री घोषणा: हर उत्पाद में किस लकड़ी और किस प्लाई का उपयोग हुआ है, यह साफ बताया जाता है।"
                  : "Full material disclosure: We openly state every species of timber, plywood grade, and finish applied."}
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <span>
                {language === 'hi'
                  ? "पार्टनर उत्पादों में स्पष्ट अंतर: सहयोगी स्टोर्स के उत्पाद हमेशा अलग लेबल के साथ दिखाए जाते हैं।"
                  : "Strict partner segregation: Commercial partner items are clearly marked so our handmade craft stays pure."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


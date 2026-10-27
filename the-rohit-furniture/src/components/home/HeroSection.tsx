import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { CallButton } from '../common/CallButton';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { createWhatsAppUrl } from '../../utils/whatsapp';
import { Hammer, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onExploreWork: () => void;
  onVisitShop: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreWork, onVisitShop }) => {
  const { language, t } = useLanguage();

  const heroWhatsAppMsg = language === 'hi'
    ? "नमस्ते रोहित फर्नीचर! मैंने आपकी वेबसाइट देखी है और मुझे फर्नीचर के काम के बारे में पूछताछ करनी है।"
    : "Hello The Rohit Furniture! I visited your website and would like to consult on furniture and custom woodwork.";
  const heroWhatsAppUrl = createWhatsAppUrl(heroWhatsAppMsg);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4EFEA] via-[#FDFBF7] to-[#FDFBF7] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Location & Experience Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-stone-300 text-stone-800 text-xs sm:text-sm font-semibold shadow-2xs">
              <span className="flex h-2 w-2 rounded-full bg-[#8B4513]" />
              <MapPin className="w-3.5 h-3.5 text-[#8B4513]" />
              <span>{BUSINESS_INFO.city}, {BUSINESS_INFO.state}</span>
              <span className="text-stone-300">|</span>
              <span>{BUSINESS_INFO.experienceYears} {language === 'hi' ? "वर्षों का अनुभव" : "Years Experience"}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.15]">
              {language === 'hi' ? (
                <>
                  हाथ से बना मजबूत फर्नीचर। <br className="hidden sm:inline" />
                  <span className="text-[#8B4513]">15 वर्षों के अनुभव</span> के साथ।
                </>
              ) : (
                <>
                  Handmade Furniture. <br className="hidden sm:inline" />
                  Built with <span className="text-[#8B4513]">15 Years of Experience</span>.
                </>
              )}
            </h1>

            {/* Subtitle / Core Message */}
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {language === 'hi'
                ? "महेंद्रगढ़ में हमारे अनुभवी कारीगरों द्वारा तैयार किया गया ठोस लकड़ी का फर्नीचर, मॉड्युलर किचन, मजबूत दरवाजे और खिड़कियाँ। पूरी तरह पारदर्शी सामग्री और सीधे कारीगर से बात।"
                : "Handcrafted by experienced craftsmen with over 20 years of woodwork experience in Mahendragarh, Haryana. Real handmade furniture, wooden kitchens, doors and windows. Full material transparency with direct owner contact."}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <WhatsAppButton
                url={heroWhatsAppUrl}
                label={t('ctaWhatsApp')}
                variant="primary"
                className="py-3 px-5 text-base"
              />
              <button
                type="button"
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-base font-semibold rounded-lg bg-stone-900 hover:bg-stone-800 text-white transition-all shadow-sm active:scale-95"
              >
                <span>{t('ctaExploreWork')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <CallButton label={t('ctaCall')} className="py-3 px-4 text-base" />
              <button
                type="button"
                onClick={onVisitShop}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-sm font-semibold rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 transition-all active:scale-95"
              >
                <span>{language === 'hi' ? "दुकान पर आएं" : "Visit Showroom"}</span>
              </button>
            </div>

            {/* Physical Shop Reassurance */}
            <div className="pt-3 flex items-center gap-2 text-xs sm:text-sm text-stone-600">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>
                {language === 'hi' 
                  ? "असली वर्कशॉप व शोरूम — आप स्वयं महेंद्रगढ़ आकर काम व लकड़ी देख सकते हैं।" 
                  : "Physical showroom & workshop in Mahendragarh — walk in and inspect in person."}
              </span>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-stone-300 shadow-xl bg-stone-100 group">
              <img
                src="https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1000&q=80"
                alt="Craftsman working on solid wood furniture"
                className="w-full h-80 sm:h-96 object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent flex flex-col justify-end p-5 text-white">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#8B4513] text-white px-2.5 py-1 rounded-full w-fit mb-2">
                  <Hammer className="w-3.5 h-3.5" />
                  {language === 'hi' ? "वर्कशॉप हस्तकला" : "Workshop Craft"}
                </span>
                <p className="font-bold text-base sm:text-lg">
                  {language === 'hi' ? "असली शीशम व सागवान की पक्की कारीगरी" : "Solid Sheesham & Teak Wood Mastery"}
                </p>
                <p className="text-stone-300 text-xs mt-1">
                  {language === 'hi' ? "कोई नकली 3D मॉडल नहीं, केवल हमारा असली काम।" : "Real carpentry, no synthetic AI templates."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


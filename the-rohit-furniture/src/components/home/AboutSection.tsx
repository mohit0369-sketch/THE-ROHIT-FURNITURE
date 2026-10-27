import { useLanguage } from '../../context/LanguageContext';
import { FamilySection } from './FamilySection';
import { VisitShopSection } from './VisitShopSection';

export const AboutSection = () => {
  const { language } = useLanguage();
  const hi = language === 'hi';
  return (
    <div id="about">
      <section className="border-t border-stone-200 bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold text-stone-900 sm:text-3xl">{hi ? 'हमारे बारे में' : 'About us'}</h2>
            <p className="mt-4 leading-relaxed text-stone-700">
              {hi
                ? 'द रोहित फ़र्नीचर महेंद्रगढ़, हरियाणा की एक पारिवारिक दुकान और कारखाना है। इसे 15 साल पहले भाई राकेश राज और बृजेश राज ने श्री महेन्द्र कुमार P.T.I. जी के आशीर्वाद से शुरू किया।'
                : 'The Rohit Furniture is a family shop and workshop in Mahendragarh, Haryana. Brothers Rakesh Raj and Brijesh Raj started it 15 years ago, with the blessings of Mahender Kumar PTI.'}
            </p>
            <p className="mt-3 leading-relaxed text-stone-700">
              {hi
                ? 'हम पलंग, सोफा, अलमारी, ड्रेसिंग टेबल, मेज़, दरवाज़े और रसोई हाथ से बनाते हैं। हमारे कारीगरों को 20 साल से ज़्यादा का अनुभव है। हम बताते हैं कि हर चीज़ में कौन सी लकड़ी लगी है।'
                : 'We make beds, sofas, almirahs, dressing tables, tables, doors and kitchens by hand. Our craftsmen have over 20 years of experience, and we tell you which wood goes into each piece.'}
            </p>
            <p className="mt-3 leading-relaxed text-stone-700">
              {hi
                ? 'आप दुकान में आकर तैयार फ़र्नीचर देख सकते हैं, या अपने साइज़ और पसंद का फ़र्नीचर बनवा सकते हैं। यह वेबसाइट उन लोगों के लिए है जो घर बैठे हमारा काम देखना चाहते हैं।'
                : 'Visit the shop to see furniture that is ready, or have a piece made to your size and choice. This website is for people who want to see our work from home.'}
            </p>
          </div>
          <div className="space-y-3">
            <img src="/images/shop-front.jpg" alt={hi ? 'द रोहित फ़र्नीचर, महेंद्रगढ़' : 'The Rohit Furniture shop front'} className="w-full rounded-2xl border border-stone-200" loading="lazy" />
            <div className="grid grid-cols-2 gap-3">
              <img src="/images/showroom-1.jpg" alt="Showroom" className="h-40 w-full rounded-xl object-cover" loading="lazy" />
              <img src="/images/showroom-2.jpg" alt="Showroom" className="h-40 w-full rounded-xl object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      <FamilySection />
      <VisitShopSection />
    </div>
  );
};

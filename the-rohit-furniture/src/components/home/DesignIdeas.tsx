import { useLanguage } from '../../context/LanguageContext';
import { BUSINESS_INFO } from '../../data/businessInfo';

// EDIT: put your own Pinterest board link here when you make one.
const PINTEREST_URL = 'https://in.pinterest.com/search/pins/?q=wooden%20bed%20design';

export const DesignIdeas = () => {
  const { language } = useLanguage();
  const hi = language === 'hi';
  const wa = `https://wa.me/${BUSINESS_INFO.contacts[0].whatsappNumber}?text=${encodeURIComponent(
    hi ? 'नमस्ते, मुझे यह डिज़ाइन पसंद है। क्या आप इसे बना सकते हैं? (मैं फ़ोटो भेज रहा हूँ)' : 'Hello, I like this design. Can you make it? (I am sending the photo)'
  )}`;
  return (
    <section className="bg-[#F4EFEA] py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-extrabold text-stone-900 sm:text-2xl">{hi ? 'कोई और डिज़ाइन पसंद है?' : 'Want a different design?'}</h2>
        <p className="mt-1 max-w-2xl text-sm text-stone-700">
          {hi
            ? 'पसंद की फ़ोटो हमें WhatsApp पर भेजें, हम बताएँगे कि बन सकता है या नहीं और कितने में। या Pinterest पर और डिज़ाइन देखें।'
            : 'Send us a photo you like on WhatsApp and we will tell you if we can make it and the price. Or look at more design ideas on Pinterest.'}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={wa} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white">{hi ? 'WhatsApp पर फ़ोटो भेजें' : 'Send us a photo on WhatsApp'}</a>
          <a href={PINTEREST_URL} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-stone-500 px-5 py-2.5 text-sm font-bold text-stone-900">{hi ? 'Pinterest पर और डिज़ाइन' : 'More design ideas on Pinterest'}</a>
        </div>
      </div>
    </section>
  );
};

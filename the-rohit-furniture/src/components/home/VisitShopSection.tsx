import React from 'react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { useLanguage } from '../../context/LanguageContext';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { createWhatsAppUrl } from '../../utils/whatsapp';
import { MapPin, Clock, Phone, Store, Navigation, AlertCircle } from 'lucide-react';


export const VisitShopSection: React.FC = () => {
  const { language, t } = useLanguage();
  const visitWhatsAppUrl = createWhatsAppUrl(
    language === 'hi' 
      ? "नमस्ते! मैं आपकी महेंद्रगढ़ दुकान पर आना चाहता हूँ। कृपया दुकान का सही पता और समय बताएं।" 
      : "Hello! I am planning to visit your Mahendragarh showroom. Please share your exact shop location and current hours."
  );

  return (
    <section className="py-12 sm:py-16 bg-[#FAF6F0] border-b border-[#D4B896]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBD9C8]/80 border border-[#D4B896] text-[#5E3D22] text-xs font-bold uppercase tracking-wider mb-2">
            <Store className="w-3.5 h-3.5 text-[#7D4A27]" />
            <span>{language === 'hi' ? "प्रत्यक्ष शोरूम व वर्कशॉप" : "Showroom & Workshop"}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2C1A0B]">
            {t('headingVisitShop')}
          </h2>
          <p className="text-[#5E3D22] text-xs sm:text-sm mt-1 max-w-2xl">
            {language === 'hi'
              ? "फर्नीचर ऑनलाइन देखने से ज्यादा महत्वपूर्ण उसे छूकर, लकड़ी की मोटाई और मजबूती देखना है। हमारी महेंद्रगढ़ दुकान पर आपका स्वागत है।"
              : "We encourage you to visit our workshop in person to touch the wood, check the joints, and speak directly with our craftsmen."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-6 bg-[#F5EDE4] rounded-2xl border border-[#D4B896] p-6 sm:p-8 space-y-6 text-left shadow-xs">
            {/* Address */}
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#EBD9C8] text-[#7D4A27] shrink-0 mt-0.5 border border-[#D4B896]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A5536] block">
                  {language === 'hi' ? "दुकान व वर्कशॉप का पता:" : "Physical Shop & Workshop:"}
                </span>
                <p className="text-stone-900 font-semibold text-sm sm:text-base mt-1">
                  {BUSINESS_INFO.name[language]}
                </p>
                <p className="text-stone-700 text-xs sm:text-sm mt-0.5">
                  {BUSINESS_INFO.address[language]}
                </p>
                {BUSINESS_INFO.address.isPlaceholder && (
                  <span className="inline-flex items-center gap-1 text-[11px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 mt-2 font-medium">
                    <AlertCircle className="w-3 h-3" />
                    <span>{language === 'hi' ? "सटीक पता मालिक द्वारा पुष्टि पर अपडेट होगा" : "Exact street address to be confirmed by owner"}</span>
                  </span>
                )}
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-3.5 pt-4 border-t border-stone-100">
              <div className="p-2.5 rounded-xl bg-stone-100 text-stone-800 shrink-0 mt-0.5 border border-stone-200">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block">
                  {language === 'hi' ? "दुकान खुलने का समय:" : "Operating Hours:"}
                </span>
                <p className="text-stone-800 text-xs sm:text-sm mt-1">
                  {BUSINESS_INFO.hours[language]}
                </p>
              </div>
            </div>


            {/* All Three Contacts */}
            <div className="flex items-start gap-3.5 pt-4 border-t border-stone-100">
              <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 shrink-0 mt-0.5 border border-emerald-200">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-700 block mb-2">
                  {language === 'hi' ? "हमारी टीम — सीधे संपर्क करें:" : "Our Team — Contact Directly:"}
                </span>
                <div className="space-y-2">
                  {BUSINESS_INFO.contacts.map((contact) => (
                    <div key={contact.name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 bg-stone-50 px-3 py-2 rounded-xl border border-stone-200">
                      <div>
                        <span className="font-bold text-stone-900 text-xs sm:text-sm block">
                          {language === 'hi' ? contact.nameHi : contact.name}
                        </span>
                        <span className="text-[11px] text-stone-500 block">
                          {language === 'hi' ? contact.role.hi : contact.role.en}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-mono font-bold text-stone-800">{contact.phone}</span>
                        <a
                          href={contact.telLink}
                          className="p-1.5 rounded-lg bg-stone-900 text-white hover:bg-stone-700 transition-colors"
                          aria-label={`Call ${contact.name}`}
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href={`https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(language === 'hi' ? `नमस्ते ${contact.nameHi} जी! मुझे फर्नीचर के बारे में बात करनी है।` : `Hello ${contact.name}! I saw The Rohit Furniture website and would like to enquire.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-[#25D366] text-white hover:bg-[#20BD5A] transition-colors"
                          aria-label={`WhatsApp ${contact.name}`}
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.64 6.06L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.22-3.48-8.52zM12 22c-1.78 0-3.53-.48-5.05-1.38l-.36-.21-3.72.98.99-3.64-.24-.38A9.93 9.93 0 0 1 2 12C2 6.48 6.48 2 12 2c2.66 0 5.17 1.04 7.07 2.93A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.43-7.43c-.3-.15-1.77-.87-2.04-.97s-.47-.15-.67.15-.77.97-.94 1.17-.35.22-.65.07a8.13 8.13 0 0 1-2.39-1.47 9.01 9.01 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52s-.67-1.62-.92-2.22c-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.48.71.31 1.27.49 1.7.63.72.23 1.37.2 1.88.12.57-.09 1.77-.73 2.02-1.43.25-.7.25-1.3.17-1.43-.07-.13-.27-.2-.57-.35z"/></svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* WhatsApp Before Visit button */}
            <div className="pt-2">
              <WhatsAppButton
                url={visitWhatsAppUrl}
                label={language === 'hi' ? "आने से पहले व्हाट्सएप करें" : "WhatsApp Before Visiting"}
                variant="primary"
                fullWidth
              />
            </div>
          </div>


          {/* Interactive Map / Direction Card */}
          <div className="lg:col-span-6 bg-[#EBD9C8]/40 rounded-2xl border border-[#D4B896] overflow-hidden shadow-xs text-left flex flex-col h-full min-h-[360px]">
            <div className="p-4 bg-[#FAF6F0] border-b border-[#D4B896] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#7D4A27]" />
                <span className="font-bold text-[#2C1A0B] text-xs sm:text-sm">
                  {language === 'hi' ? "महेंद्रगढ़, हरियाणा में हमारी लोकेशन" : "Location in Mahendragarh, Haryana"}
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#5E3D22] bg-[#EBD9C8] px-2 py-0.5 rounded border border-[#D4B896]">
                Google Maps
              </span>
            </div>

            <div className="flex-1 relative flex items-center justify-center bg-[#F5EDE4]/60 p-6 text-center">
              {/* Map Placeholder Canvas */}
              <div className="max-w-sm space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#7D4A27] text-white flex items-center justify-center mx-auto shadow-md">
                  <MapPin className="w-6 h-6 animate-bounce" />
                </div>
                <h4 className="font-bold text-[#2C1A0B] text-base">
                  {BUSINESS_INFO.name[language]}
                </h4>
                <p className="text-[#5E3D22] text-xs leading-relaxed">
                  {language === 'hi'
                    ? "महेंद्रगढ़ शहर में मुख्य बाजार / वर्कशॉप रोड। गूगल मैप्स पर सही दिशा पाने के लिए नीचे बटन दबाएं।"
                    : "Located in Mahendragarh town. Tap below to navigate or ask for live WhatsApp location pin."}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.googleMaps.searchQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#5C3317] hover:bg-[#3D210F] text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{language === 'hi' ? "गूगल मैप पर देखें" : "Open in Google Maps"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


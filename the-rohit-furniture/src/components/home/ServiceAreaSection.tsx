import React from 'react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { useLanguage } from '../../context/LanguageContext';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { getServiceAreaWhatsAppUrl } from '../../utils/whatsapp';
import { MapPin, Truck, CheckCircle2 } from 'lucide-react';

export const ServiceAreaSection: React.FC = () => {
  const { language, t } = useLanguage();
  const serviceWhatsAppUrl = getServiceAreaWhatsAppUrl(language);

  return (
    <section className="py-12 bg-[#F4EFEA]/80 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[#8B4513] text-xs font-bold uppercase tracking-wider">
                <Truck className="w-3.5 h-3.5" />
                <span>{t('headingWhereWeServe')}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                {language === 'hi' 
                  ? "डिलीवरी व ऑन-साइट सर्विस क्षेत्र" 
                  : "Local Service & Delivery Coverage"}
              </h2>

              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                {language === 'hi' ? BUSINESS_INFO.serviceArea.details.hi : BUSINESS_INFO.serviceArea.details.en}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-stone-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B4513] shrink-0" />
                  <span>
                    {language === 'hi' ? "महेंद्रगढ़ शहर में सीधी डिलीवरी" : "Mahendragarh City Direct Delivery"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B4513] shrink-0" />
                  <span>
                    {language === 'hi' ? "ऑन-साइट नाप व लकड़ी परामर्श" : "On-Site Measurements & Consultation"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B4513] shrink-0" />
                  <span>
                    {language === 'hi' ? "नजदीकी क्षेत्रों में सुरक्षित वाहन व्यवस्था" : "Careful Transport to Nearby Areas"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#8B4513] shrink-0" />
                  <span>
                    {language === 'hi' ? "किचन व दरवाजों की ऑन-साइट फिटिंग" : "Professional On-Site Carpenter Fitting"}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#FDFBF7] p-5 rounded-xl border border-stone-200 text-left space-y-4">
              <div className="flex items-center gap-2 text-stone-900 font-bold text-sm">
                <MapPin className="w-4 h-4 text-[#8B4513]" />
                <span>{language === 'hi' ? "डिलीवरी की जानकारी लें" : "Check Your Area"}</span>
              </div>
              <p className="text-stone-600 text-xs leading-relaxed">
                {language === 'hi'
                  ? "यदि आप महेंद्रगढ़ या आसपास के किसी गाँव/कस्बे में रहते हैं, तो व्हाट्सएप पर अपनी लोकेशन भेजकर पुष्टि करें।"
                  : "If you live in or around Mahendragarh, send your location or village name on WhatsApp to confirm delivery."}
              </p>
              <WhatsAppButton
                url={serviceWhatsAppUrl}
                label={t('ctaCheckDelivery')}
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


import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { WhatsAppButton } from './WhatsAppButton';
import { createWhatsAppUrl } from '../../utils/whatsapp';
import { MessageSquareQuote, ShieldCheck, HeartHandshake } from 'lucide-react';

export interface CustomerReview {
  id: string;
  customerName: string;
  location?: string;
  reviewText: {
    en: string;
    hi: string;
  };
  productName?: {
    en: string;
    hi: string;
  };
  date: string;
  verifiedLocalCustomer: boolean;
  photoUrl?: string;
}

// Initial genuine structure - currently empty per business brief instructions
export const GENUINE_REVIEWS: CustomerReview[] = [];

export const ReviewsSection: React.FC = () => {
  const { language } = useLanguage();

  const reviewWhatsAppUrl = createWhatsAppUrl(
    language === 'hi'
      ? "नमस्ते रोहित फर्नीचर! मैंने आपसे फर्नीचर बनवाया था और मैं अपना सच्चा रिव्यू शेयर करना चाहता हूँ।"
      : "Hello The Rohit Furniture! I purchased furniture from your workshop and would like to share my honest feedback."
  );

  return (
    <section className="py-12 sm:py-16 bg-[#F5EDE4] border-b border-[#D4B896]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBD9C8]/80 border border-[#D4B896] text-[#7D4A27] text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? "सच्ची ग्राहक राय" : "Genuine Customer Feedback"}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2C1A0B]">
            {language === 'hi' ? "ग्राहकों के विचार व अनुभव" : "Customer Experiences"}
          </h2>

          <p className="text-[#5E3D22] text-xs sm:text-sm leading-relaxed">
            {language === 'hi'
              ? "हमारी सख्त नीति है: हम इंटरनेट से कोई बनावटी या फर्जी समीक्षाएं (fake reviews) नहीं लगाते। हम केवल अपने वास्तविक ग्राहकों की अनुमति से उनकी राय प्रकाशित करते हैं।"
              : "Our strict policy: We never fabricate fake reviews, ratings, or testimonials. We only publish verified reviews from our local clients with their explicit consent."}
          </p>
        </div>

        {GENUINE_REVIEWS.length === 0 ? (
          <div className="bg-[#FAF6F0] rounded-2xl border border-[#D4B896] p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-4 shadow-xs">
            <div className="w-14 h-14 rounded-full bg-[#EBD9C8] border border-[#D4B896] text-[#7D4A27] flex items-center justify-center mx-auto">
              <MessageSquareQuote className="w-7 h-7" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-[#2C1A0B]">
              {language === 'hi' ? "ग्राहक समीक्षाएं जल्द उपलब्ध होंगी।" : "Customer reviews coming soon."}
            </h3>

            <p className="text-[#5E3D22] text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
              {language === 'hi'
                ? "हमारी वेबसाइट नई है। जैसे ही हमारे स्थानीय ग्राहक अनुमति देंगे, हम उनके नाम, खरीदे गए फर्नीचर और तारीख के साथ उनकी वास्तविक समीक्षाएं यहाँ जोड़ेंगे।"
                : "As our local clients grant explicit permission, their verified feedback, product names, and dates will be documented here with total transparency."}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <WhatsAppButton
                url={reviewWhatsAppUrl}
                label={language === 'hi' ? "व्हाट्सएप पर अपना रिव्यू भेजें" : "Share Your Feedback on WhatsApp"}
                variant="primary"
                className="py-2.5 px-5 text-xs sm:text-sm"
              />
            </div>

            <div className="pt-3 flex items-center justify-center gap-1.5 text-xs text-stone-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {language === 'hi' ? "100% सत्यता व गोपनीयता की गारंटी" : "100% verified & consent-first policy"}
              </span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Template ready for when genuine reviews are populated */}
            {GENUINE_REVIEWS.map((rev) => (
              <div key={rev.id} className="bg-white p-5 rounded-2xl border border-stone-200 text-left shadow-xs space-y-3">
                <p className="text-stone-700 text-xs sm:text-sm italic leading-relaxed">
                  "{language === 'hi' ? rev.reviewText.hi : rev.reviewText.en}"
                </p>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-stone-900 block">{rev.customerName}</span>
                    {rev.location && <span className="text-stone-500">{rev.location}</span>}
                  </div>
                  <span className="text-stone-400">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};


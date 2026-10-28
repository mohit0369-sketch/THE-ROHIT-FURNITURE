import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useCall } from '../../context/CallContext';
import { createWhatsAppUrl } from '../../utils/whatsapp';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

interface BottomMobileNavProps {
  onVisitClick: () => void;
}

export const BottomMobileNav: React.FC<BottomMobileNavProps> = ({ onVisitClick }) => {
  const { language } = useLanguage();
  const { openCallChooser } = useCall();

  const bottomWhatsAppUrl = createWhatsAppUrl(
    language === 'hi'
      ? "नमस्ते! मैंने रोहित फर्नीचर की वेबसाइट देखी है और मुझे फर्नीचर के बारे में बात करनी है।"
      : "Hello Rohit Furniture! I am interested in discussing furniture and custom orders."
  );

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#F5EDE4]/95 backdrop-blur-md border-t border-[#D4B896] md:hidden shadow-lg safe-bottom">
      <div className="grid grid-cols-3 divide-x divide-[#D4B896]/60">
        {/* Call Button */}
        <button
          type="button"
          onClick={openCallChooser}
          className="flex flex-col items-center justify-center py-2.5 px-1 text-[#422A14] hover:bg-[#EBD9C8] active:bg-[#D4B896]/50 transition-colors"
          aria-label="Call Rohit Furniture"
        >
          <Phone className="w-5 h-5 text-[#7A5536]" />
          <span className="text-[11px] font-bold mt-1">
            {language === 'hi' ? "फोन करें" : "Call Us"}
          </span>
        </button>

        {/* WhatsApp Button */}
        <a
          href={bottomWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2.5 px-1 bg-[#25D366]/10 text-[#1E7E34] hover:bg-[#25D366]/20 active:scale-95 transition-all"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-current text-[#25D366]" />
          <span className="text-[11px] font-extrabold mt-1 text-[#1E7E34]">
            {language === 'hi' ? "व्हाट्सएप" : "WhatsApp"}
          </span>
        </a>

        {/* Visit Shop Button */}
        <button
          type="button"
          onClick={onVisitClick}
          className="flex flex-col items-center justify-center py-2.5 px-1 text-[#422A14] hover:bg-[#EBD9C8] active:bg-[#D4B896]/50 transition-colors"
          aria-label="Visit Mahendragarh Showroom"
        >
          <MapPin className="w-5 h-5 text-[#A0673C]" />
          <span className="text-[11px] font-bold mt-1">
            {language === 'hi' ? "दुकान पर आएं" : "Visit Shop"}
          </span>
        </button>
      </div>
    </div>
  );
};

import React from 'react';
import { BUSINESS_INFO } from '../../data/businessInfo';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, MessageCircle, User } from 'lucide-react';

interface ContactTeamCardProps {
  variant?: 'compact' | 'full';
}

export const ContactTeamCard: React.FC<ContactTeamCardProps> = ({ variant = 'full' }) => {
  const { language } = useLanguage();

  const getWhatsAppUrl = (number: string, personName: string) => {
    const msg = language === 'hi'
      ? `नमस्ते ${personName} जी! मैंने The Rohit Furniture की वेबसाइट देखी है और मुझे फर्नीचर के बारे में पूछताछ करनी है।`
      : `Hello ${personName}! I visited The Rohit Furniture website and would like to enquire about woodwork and furniture.`;
    return `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;
  };

  if (variant === 'compact') {
    return (
      <div className="space-y-2">
        {BUSINESS_INFO.contacts.map((contact) => (
          <div key={contact.name} className="flex items-center justify-between gap-3 bg-stone-900/60 px-3 py-2 rounded-lg border border-stone-700">
            <div className="min-w-0">
              <span className="block text-xs font-bold text-white truncate">
                {language === 'hi' ? contact.nameHi : contact.name}
              </span>
              <span className="block text-[11px] text-stone-400 truncate">
                {language === 'hi' ? contact.role.hi : contact.role.en}
              </span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <a
                href={contact.telLink}
                className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors"
                aria-label={`Call ${contact.name}`}
              >
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a
                href={getWhatsAppUrl(contact.whatsappNumber, contact.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg bg-[#25D366]/20 hover:bg-[#25D366]/40 text-[#25D366] transition-colors"
                aria-label={`WhatsApp ${contact.name}`}
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
              </a>
              <span className="text-xs font-mono text-stone-300 ml-1">{contact.phone}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {BUSINESS_INFO.contacts.map((contact) => (
        <div
          key={contact.name}
          className={`bg-white rounded-2xl border p-5 space-y-3 text-left shadow-xs ${
            contact.isPrimary 
              ? 'border-[#8B4513]/40 ring-2 ring-[#8B4513]/10' 
              : 'border-stone-200'
          }`}
        >
          {/* Avatar & Name */}
          <div className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
              contact.isPrimary ? 'bg-[#8B4513] text-white' : 'bg-stone-100 text-stone-600'
            }`}>
              <User className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h4 className="font-bold text-stone-900 text-sm sm:text-base leading-snug">
                {language === 'hi' ? contact.nameHi : contact.name}
              </h4>
              <span className={`text-[11px] sm:text-xs font-semibold block ${
                contact.isPrimary ? 'text-[#8B4513]' : 'text-stone-500'
              }`}>
                {language === 'hi' ? contact.role.hi : contact.role.en}
              </span>
            </div>
          </div>

          {/* Phone Number */}
          <div className="flex items-center gap-2 text-sm font-mono font-bold text-stone-900 bg-stone-50 px-3 py-2 rounded-lg border border-stone-200">
            <Phone className="w-4 h-4 text-stone-500 shrink-0" />
            <span>{contact.phone}</span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={contact.telLink}
              className="flex items-center justify-center gap-1.5 py-2 px-3 bg-stone-900 hover:bg-stone-800 text-white text-xs font-bold rounded-lg transition-colors active:scale-95"
              aria-label={`Call ${contact.name}`}
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>{language === 'hi' ? "फोन" : "Call"}</span>
            </a>
            <a
              href={getWhatsAppUrl(contact.whatsappNumber, contact.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2 px-3 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold rounded-lg transition-colors active:scale-95"
              aria-label={`WhatsApp ${contact.name}`}
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};


import type { FC } from 'react';
import { Phone, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { BUSINESS_INFO } from '../../data/businessInfo';

export const CallChooser: FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const { language } = useLanguage();
  const hi = language === 'hi';
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60" onClick={onClose} role="dialog" aria-modal="true">
      <div className="w-full max-w-sm rounded-2xl bg-[#FAF6F0] border border-[#D4B896] p-5 sm:p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-[#2C1A0B]">{hi ? 'किसे फ़ोन करें?' : 'Who would you like to call?'}</h3>
          <button onClick={onClose} aria-label="Close" className="rounded-full p-1 text-[#7A5536] hover:bg-[#EBD9C8]"><X className="h-5 w-5" /></button>
        </div>
        <div className="space-y-2">
          {BUSINESS_INFO.contacts.map((c) => (
            <a key={c.telLink} href={c.telLink} onClick={onClose} className="flex items-center justify-between rounded-xl border border-[#D4B896] bg-[#F5EDE4] px-4 py-3 hover:bg-[#EBD9C8] transition-colors">
              <span>
                <span className="block font-bold text-[#2C1A0B]">{hi ? c.nameHi : c.name}</span>
                <span className="font-mono text-sm text-[#5E3D22]">{c.phone}</span>
              </span>
              <Phone className="h-5 w-5 text-[#7D4A27]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

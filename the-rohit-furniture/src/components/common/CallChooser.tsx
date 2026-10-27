import type { FC } from 'react';
import { Phone, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { BUSINESS_INFO } from '../../data/businessInfo';

export const CallChooser: FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const { language } = useLanguage();
  const hi = language === 'hi';
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center bg-black/50 sm:items-center" onClick={onClose} role="dialog" aria-modal="true">
      <div className="w-full max-w-sm rounded-t-2xl bg-white p-5 sm:rounded-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-extrabold text-stone-900">{hi ? 'किसे फ़ोन करें?' : 'Who would you like to call?'}</h3>
          <button onClick={onClose} aria-label="Close" className="rounded-full p-1 hover:bg-stone-100"><X className="h-5 w-5" /></button>
        </div>
        <div className="space-y-2">
          {BUSINESS_INFO.contacts.map((c) => (
            <a key={c.telLink} href={c.telLink} onClick={onClose} className="flex items-center justify-between rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 hover:bg-stone-100">
              <span>
                <span className="block font-bold text-stone-900">{hi ? c.nameHi : c.name}</span>
                <span className="font-mono text-sm text-stone-700">{c.phone}</span>
              </span>
              <Phone className="h-5 w-5 text-[#8B4513]" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

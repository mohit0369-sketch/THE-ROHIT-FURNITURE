import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Languages } from 'lucide-react';

export const LanguageSwitcher: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center p-1 bg-stone-100 rounded-lg border border-stone-200">
      <span className="sr-only">Choose language</span>
      {!compact && <Languages className="w-3.5 h-3.5 text-stone-500 ml-1.5 mr-1" />}
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
          language === 'en'
            ? 'bg-white text-stone-900 shadow-xs border border-stone-200'
            : 'text-stone-600 hover:text-stone-900'
        }`}
        aria-pressed={language === 'en'}
      >
        English
      </button>
      <button
        type="button"
        onClick={() => setLanguage('hi')}
        className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
          language === 'hi'
            ? 'bg-[#8B4513] text-white shadow-xs'
            : 'text-stone-600 hover:text-stone-900'
        }`}
        aria-pressed={language === 'hi'}
      >
        हिन्दी
      </button>
    </div>
  );
};


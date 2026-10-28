import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Languages } from 'lucide-react';
import { motion } from 'framer-motion';

export const LanguageSwitcher: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center p-1 bg-[#EBD9C8]/70 rounded-lg border border-[#D4B896]">
      <span className="sr-only">Choose language</span>
      {!compact && <Languages className="w-3.5 h-3.5 text-[#7A5536] ml-1.5 mr-1" />}
      <motion.button
        type="button"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
          language === 'en'
            ? 'bg-[#FAF6F0] text-[#2C1A0B] shadow-xs border border-[#D4B896]'
            : 'text-[#5E3D22] hover:text-[#2C1A0B]'
        }`}
        aria-pressed={language === 'en'}
      >
        English
      </motion.button>
      <motion.button
        type="button"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        onClick={() => setLanguage('hi')}
        className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
          language === 'hi'
            ? 'bg-[#7D4A27] text-white shadow-xs'
            : 'text-[#5E3D22] hover:text-[#2C1A0B]'
        }`}
        aria-pressed={language === 'hi'}
      >
        हिन्दी
      </motion.button>
    </div>
  );
};

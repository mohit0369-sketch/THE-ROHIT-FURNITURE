import { useLanguage } from '../../context/LanguageContext';

export type CatKey = 'bed' | 'dining' | 'sofa' | 'table' | 'almirah' | 'trunk' | 'dress' | 'more' | 'kitchen' | 'window' | 'door';
const CATS: [CatKey, string, string, string][] = [
  ['bed', '🛏️', 'Beds', 'पलंग'], ['dining', '🍽️', 'Dining Tables', 'डाइनिंग टेबल'], ['sofa', '🛋️', 'Sofas', 'सोफा'],
  ['table', '🪑', 'Tables', 'मेज़'], ['almirah', '🗄️', 'Almirah', 'अलमारी'], ['trunk', '🧰', 'Trunk', 'संदूक'],
  ['dress', '🪞', 'Dressing Table', 'ड्रेसिंग टेबल'], ['kitchen', '🍳', 'Wooden Kitchen', 'लकड़ी की रसोई'],
  ['window', '🪟', 'Windows', 'खिड़कियाँ'], ['door', '🚪', 'Doors', 'दरवाज़े'], ['more', '➕', 'More', 'और भी'],
];

export const CategoriesGrid = ({ onSelect }: { onSelect: (k: CatKey) => void }) => {
  const { language } = useLanguage();
  const hi = language === 'hi';
  return (
    <div className="flex flex-wrap gap-2">
      {CATS.map(([k, icon, en, h]) => (
        <button key={k} onClick={() => onSelect(k)} className="flex items-center gap-1.5 rounded-full border border-stone-300 bg-white px-3.5 py-2 text-sm font-bold text-stone-900 transition hover:border-[#A35824] hover:bg-amber-50">
          <span className="text-lg leading-none">{icon}</span>{hi ? h : en}
        </button>
      ))}
    </div>
  );
};

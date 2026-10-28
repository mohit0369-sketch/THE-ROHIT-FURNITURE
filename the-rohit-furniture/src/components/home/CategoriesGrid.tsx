import React, { useRef, createContext, useContext } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export type CatKey =
  | 'bed'
  | 'dining'
  | 'sofa'
  | 'table'
  | 'almirah'
  | 'trunk'
  | 'dress'
  | 'more'
  | 'kitchen'
  | 'window'
  | 'door';

const CATS: [CatKey, string, string, string][] = [
  ['bed', '🛏️', 'Beds', 'पलंग'],
  ['dining', '🍽️', 'Dining Tables', 'डाइनिंग टेबल'],
  ['sofa', '🛋️', 'Sofas', 'सोफा'],
  ['table', '🪑', 'Tables', 'मेज़'],
  ['almirah', '🗄️', 'Almirah', 'अलमारी'],
  ['trunk', '🧰', 'Trunk', 'संदूक'],
  ['dress', '🪞', 'Dressing Table', 'ड्रेसिंग टेबल'],
  ['kitchen', '🍳', 'Wooden Kitchen', 'लकड़ी की रसोई'],
  ['window', '🪟', 'Windows', 'खिड़कियाँ'],
  ['door', '🚪', 'Doors', 'दरवाज़े'],
  ['more', '➕', 'More', 'और भी'],
];

const DockMouseContext = createContext<MotionValue<number> | null>(null);

interface CategoryDockButtonProps {
  catKey: CatKey;
  icon: string;
  label: string;
  selected: boolean;
  onSelect: (k: CatKey) => void;
}

const CategoryDockButton: React.FC<CategoryDockButtonProps> = ({
  catKey,
  icon,
  label,
  selected,
  onSelect,
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const mouseX = useContext(DockMouseContext);

  const distanceCalc = useTransform(mouseX || { get: () => Infinity } as MotionValue<number>, (val: number) => {
    if (!btnRef.current || val === Infinity) return 200;
    const bounds = btnRef.current.getBoundingClientRect();
    const center = bounds.x + bounds.width / 2;
    return val - center;
  });

  const rawScale = useTransform(distanceCalc, [-130, 0, 130], [1, 1.18, 1]);
  const rawY = useTransform(distanceCalc, [-130, 0, 130], [0, -6, 0]);

  const springConfig = { mass: 0.1, stiffness: 200, damping: 14 };
  const scale = useSpring(rawScale, springConfig);
  const y = useSpring(rawY, springConfig);

  return (
    <motion.button
      ref={btnRef}
      style={{ scale, y }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onSelect(catKey)}
      className={`group relative flex items-center gap-1.5 shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-colors select-none origin-bottom cursor-pointer ${
        selected
          ? 'bg-[#7D4A27] border-[#6E3F20] text-white shadow-md ring-2 ring-[#A0673C]/40 ring-offset-1 ring-offset-[#FAF6F0]'
          : 'border-[#D4B896] bg-[#FAF6F0] text-[#422A14] hover:border-[#A0673C] hover:bg-[#EBD9C8] hover:shadow-sm'
      }`}
    >
      <span className="text-lg leading-none transition-transform duration-200 group-hover:scale-115">
        {icon}
      </span>
      <span className="whitespace-nowrap tracking-tight">{label}</span>
      {selected && (
        <motion.span
          layoutId="activeCategoryDot"
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#7D4A27]"
        />
      )}
    </motion.button>
  );
};

export const CategoriesGrid = ({
  onSelect,
  active,
}: {
  onSelect: (k: CatKey) => void;
  active?: CatKey | null;
}) => {
  const { language } = useLanguage();
  const hi = language === 'hi';
  const mouseX = useMotionValue(Infinity);

  return (
    <DockMouseContext.Provider value={mouseX}>
      <div className="relative py-2">
        <motion.div
          onMouseMove={(e) => mouseX.set(e.pageX)}
          onMouseLeave={() => mouseX.set(Infinity)}
          className="flex flex-nowrap items-center gap-2.5 overflow-x-auto [&::-webkit-scrollbar]:hidden py-3 px-1 scroll-smooth"
        >
          {CATS.map(([k, icon, en, h]) => (
            <CategoryDockButton
              key={k}
              catKey={k}
              icon={icon}
              label={hi ? h : en}
              selected={active === k}
              onSelect={onSelect}
            />
          ))}
        </motion.div>
      </div>
    </DockMouseContext.Provider>
  );
};

import React from 'react';
import type { ProductMaterials } from '../../types/product';
import { useLanguage } from '../../context/LanguageContext';
import { Layers, ShieldCheck, Sparkles, Wrench, Info } from 'lucide-react';

interface MaterialSpecsProps {
  materials: ProductMaterials;
  onExploreMaterials?: () => void;
  compact?: boolean;
}

export const MaterialSpecs: React.FC<MaterialSpecsProps> = ({
  materials,
  onExploreMaterials,
  compact = false
}) => {
  const { language, t } = useLanguage();

  const specs = [
    {
      key: 'wood',
      label: t('specWood'),
      value: materials.wood,
      icon: ShieldCheck,
      color: "text-amber-800 bg-amber-50"
    },
    {
      key: 'plywood',
      label: t('specPlywood'),
      value: materials.plywood,
      icon: Layers,
      color: "text-stone-800 bg-stone-100"
    },
    {
      key: 'finish',
      label: t('specFinish'),
      value: materials.finish,
      icon: Sparkles,
      color: "text-orange-800 bg-orange-50"
    },
    {
      key: 'hardware',
      label: t('specHardware'),
      value: materials.hardware,
      icon: Wrench,
      color: "text-emerald-800 bg-emerald-50"
    }
  ];

  // Also include foam / glass if present
  if (materials.foam) {
    specs.push({
      key: 'foam',
      label: language === 'hi' ? 'कुशन फोम' : 'Cushion Foam',
      value: materials.foam,
      icon: Layers,
      color: "text-blue-800 bg-blue-50"
    });
  }

  if (materials.glass) {
    specs.push({
      key: 'glass',
      label: language === 'hi' ? 'कांच (Glass)' : 'Glass',
      value: materials.glass,
      icon: Sparkles,
      color: "text-cyan-800 bg-cyan-50"
    });
  }

  if (compact) {
    return (
      <div className="space-y-1.5 text-xs text-stone-700">
        {materials.wood && (
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-stone-900">{t('specWood')}:</span>
            <span className="text-stone-700 truncate">{materials.wood}</span>
          </div>
        )}
        {materials.plywood && (
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-stone-900">{t('specPlywood')}:</span>
            <span className="text-stone-700 truncate">{materials.plywood}</span>
          </div>
        )}
        {!materials.wood && !materials.plywood && (
          <span className="text-stone-500 italic">{t('specComingSoon')}</span>
        )}
      </div>
    );
  }

  return (
    <div className="bg-stone-50/80 border border-stone-200/80 rounded-xl p-4 sm:p-5">
      <div className="flex items-center justify-between mb-3 border-b border-stone-200 pb-2.5">
        <h4 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
          <span>{language === 'hi' ? "यह किससे बना है? (सामग्री विवरण)" : "What is it made of? (Material Details)"}</span>
        </h4>
        {onExploreMaterials && (
          <button
            onClick={onExploreMaterials}
            className="text-xs text-[#8B4513] hover:underline font-semibold flex items-center gap-1"
          >
            <Info className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? "लकड़ी गाइड देखें" : "Material Guide"}</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
        {specs.map((item) => (
          <div key={item.key} className="flex items-start gap-2.5 bg-white p-2.5 rounded-lg border border-stone-200">
            <div className={`p-1.5 rounded-md ${item.color} shrink-0 mt-0.5`}>
              <item.icon className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="block text-[11px] font-semibold uppercase tracking-wider text-stone-700">
                {item.label}
              </span>
              <span className="block text-stone-900 font-medium break-words mt-0.5">
                {item.value || <span className="text-stone-500 italic font-normal">{t('specComingSoon')}</span>}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


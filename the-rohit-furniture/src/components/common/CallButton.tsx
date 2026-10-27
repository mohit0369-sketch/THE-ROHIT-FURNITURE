import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { CallChooser } from './CallChooser';

interface CallButtonProps {
  label?: string;
  variant?: 'primary' | 'outline' | 'compact';
  fullWidth?: boolean;
  className?: string;
}

export const CallButton: React.FC<CallButtonProps> = ({
  label = "Call Us",
  variant = 'outline',
  fullWidth = false,
  className = ""
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 active:scale-95";
  
  const variantStyles = {
    primary: "bg-[#8B4513] hover:bg-[#72380F] text-white py-2.5 px-4 text-sm sm:text-base font-semibold shadow-sm",
    outline: "bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 py-2 px-3 text-sm shadow-xs",
    compact: "bg-stone-800 text-white p-2 hover:bg-stone-900"
  }[variant];

  const widthClass = fullWidth ? "w-full" : "";

  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${baseClasses} ${variantStyles} ${widthClass} ${className}`}
        aria-label={label}
      >
        <Phone className="w-4 h-4 shrink-0" />
        {variant !== 'compact' && <span>{label}</span>}
      </button>
      <CallChooser open={open} onClose={() => setOpen(false)} />
    </>
  );
};

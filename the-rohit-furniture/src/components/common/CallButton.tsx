import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCall } from '../../context/CallContext';

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
  const { openCallChooser } = useCall();

  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium rounded-lg cursor-pointer select-none";

  const variantStyles = {
    primary: "bg-[#7D4A27] hover:bg-[#5C3317] text-white py-2.5 px-4 text-sm sm:text-base font-semibold shadow-sm hover:shadow-md border border-[#6E3F20]",
    outline: "bg-[#FAF6F0] hover:bg-[#EFE6DA] border border-[#C7AF96] text-[#422A14] py-2 px-3 text-sm shadow-xs hover:shadow-sm",
    compact: "bg-[#5C3317] text-[#FAF6F0] p-2 hover:bg-[#3D210F]"
  }[variant];

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <motion.button
      type="button"
      onClick={openCallChooser}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${baseClasses} ${variantStyles} ${widthClass} ${className}`}
      aria-label={label}
    >
      <Phone className="w-4 h-4 shrink-0" />
      {variant !== 'compact' && <span>{label}</span>}
    </motion.button>
  );
};

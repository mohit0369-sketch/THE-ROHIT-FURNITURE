import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface WhatsAppButtonProps {
  url: string;
  label?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'compact';
  fullWidth?: boolean;
  className?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  url,
  label = "WhatsApp Us",
  variant = 'primary',
  fullWidth = false,
  className = ""
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium rounded-lg shadow-sm cursor-pointer select-none";
  
  const variantStyles = {
    primary: "bg-[#25D366] hover:bg-[#20BD5A] text-white border border-[#20BD5A] py-2.5 px-4 text-sm sm:text-base font-semibold hover:shadow-md",
    secondary: "bg-[#2D4A3E] hover:bg-[#223930] text-white py-2.5 px-4 text-sm font-semibold hover:shadow-md",
    outline: "bg-transparent border border-[#25D366] text-[#1E7E34] hover:bg-[#25D366]/10 py-2 px-3 text-sm",
    compact: "bg-[#25D366] text-white p-2 hover:bg-[#20BD5A]"
  }[variant];

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${baseClasses} ${variantStyles} ${widthClass} ${className}`}
      aria-label={label}
    >
      <MessageCircle className="w-5 h-5 shrink-0 fill-current" />
      {variant !== 'compact' && <span>{label}</span>}
    </motion.a>
  );
};

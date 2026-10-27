import React from 'react';
import { MessageCircle } from 'lucide-react';

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
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 active:scale-95 shadow-sm";
  
  const variantStyles = {
    primary: "bg-[#25D366] hover:bg-[#20BD5A] text-white border border-[#20BD5A] py-2.5 px-4 text-sm sm:text-base font-semibold",
    secondary: "bg-[#2D4A3E] hover:bg-[#223930] text-white py-2.5 px-4 text-sm font-semibold",
    outline: "bg-transparent border border-[#25D366] text-[#1E7E34] hover:bg-[#25D366]/10 py-2 px-3 text-sm",
    compact: "bg-[#25D366] text-white p-2 hover:bg-[#20BD5A]"
  }[variant];

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantStyles} ${widthClass} ${className}`}
      aria-label={label}
    >
      <MessageCircle className="w-5 h-5 shrink-0 fill-current" />
      {variant !== 'compact' && <span>{label}</span>}
    </a>
  );
};


import React from "react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans tracking-[0.14em] uppercase text-xs font-semibold rounded-none transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-spark-gold focus-visible:ring-offset-2 select-none active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-4 py-2 text-[10px] min-h-[36px]",
    md: "px-6 py-3 text-xs min-h-[46px]",
    lg: "px-8 py-4 text-xs sm:text-sm min-h-[54px]",
  }[size];

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#DFCA95] via-[#C8A96B] to-[#B08F4E] text-neutral-950 shadow-[0_4px_20px_rgba(200,169,107,0.25)] hover:shadow-[0_6px_25px_rgba(200,169,107,0.4)] hover:brightness-105 border border-[#E5D2A8]/50",
    secondary:
      "bg-white/10 hover:bg-white/15 text-white backdrop-blur-md border border-white/20 hover:border-spark-gold/50",
    outline:
      "bg-transparent border border-spark-gold/60 text-spark-gold hover:bg-spark-gold hover:text-neutral-950 transition-colors",
    ghost:
      "bg-transparent text-neutral-300 hover:text-white hover:bg-white/5",
    whatsapp:
      "bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.45)] border border-emerald-300/30",
  }[variant];

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-4 h-4 mr-2 animate-spin text-current" />
      ) : (
        leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && rightIcon && (
        <span className="ml-2 flex items-center transition-transform duration-300 group-hover:translate-x-1">
          {rightIcon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className} group`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      disabled={disabled || isLoading}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${
        disabled || isLoading ? "opacity-60 cursor-not-allowed" : ""
      } ${className} group`}
      {...props}
    >
      {content}
    </button>
  );
};

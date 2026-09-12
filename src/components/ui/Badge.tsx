import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'olive' | 'terracotta' | 'parchment' | 'dark' | 'outline';
  size?: 'xs' | 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'olive',
  size = 'sm',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center font-sans uppercase font-medium tracking-widest2 select-none border';
  
  const sizeStyles = {
    xs: 'text-[9px] px-2 py-0.5',
    sm: 'text-[10px] px-2.5 py-1',
    md: 'text-xs px-3 py-1.5',
  };

  const variantStyles = {
    olive: 'bg-olive-900/10 text-olive-900 border-olive-900/20',
    terracotta: 'bg-terracotta-500/10 text-terracotta-600 border-terracotta-500/25',
    parchment: 'bg-cream-100/90 text-espresso-900 border-espresso-900/15 backdrop-blur-sm',
    dark: 'bg-espresso-900 text-cream-100 border-espresso-800',
    outline: 'bg-transparent text-espresso-800 border-espresso-900/20',
  };

  return (
    <span className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'terracotta' | 'outline' | 'ghost' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-editorial font-semibold tracking-widest uppercase transition-all duration-300 relative group overflow-hidden select-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeStyles = {
    sm: 'text-[11px] px-4 py-2 gap-2',
    md: 'text-xs px-6 py-3.5 gap-2.5',
    lg: 'text-xs md:text-sm px-8 py-4 gap-3',
  };

  const variantStyles = {
    primary: 'bg-olive-900 text-cream-100 hover:bg-terracotta-500 hover:text-cream-50 shadow-sm border border-olive-800/40 hover:border-terracotta-500',
    secondary: 'bg-parchment text-espresso-900 border border-espresso-900/20 hover:border-espresso-900 hover:bg-cream-100 shadow-sm',
    terracotta: 'bg-terracotta-500 text-cream-50 hover:bg-olive-900 hover:text-cream-100 border border-terracotta-600/30',
    outline: 'bg-transparent text-cream-100 border border-cream-100/30 hover:border-cream-100 hover:bg-cream-100/10 backdrop-blur-sm',
    ghost: 'bg-transparent text-espresso-900 hover:text-terracotta-500 underline-offset-8 hover:underline p-0 border-none tracking-widest',
    dark: 'bg-espresso-900 text-cream-100 hover:bg-terracotta-500 border border-espresso-800',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </button>
  );
};

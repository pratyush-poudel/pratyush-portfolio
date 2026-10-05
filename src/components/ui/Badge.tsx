import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'crimson' | 'dark' | 'outline' | 'ghost' | 'success';
  size?: 'xs' | 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'dark',
  size = 'xs',
  className = '',
}) => {
  const sizeClasses = {
    xs: 'text-[10px] px-2 py-0.5 font-mono tracking-wider',
    sm: 'text-xs px-2.5 py-1 font-mono tracking-wider',
    md: 'text-sm px-3 py-1.5 font-mono',
  };

  const variantClasses = {
    crimson: 'bg-black text-crimson-400 border border-crimson-600/50 shadow-crimson-sm',
    dark: 'bg-dark-900 text-white border border-zinc-800 hover:border-zinc-700',
    outline: 'bg-transparent text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-600',
    ghost: 'bg-white/5 text-zinc-300 border border-transparent',
    success: 'bg-black text-emerald-400 border border-emerald-600/40',
  };

  return (
    <span
      className={`inline-flex items-center uppercase font-medium rounded-none border transition-colors ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

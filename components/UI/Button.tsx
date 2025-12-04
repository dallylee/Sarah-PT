import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'green';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm uppercase tracking-widest font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-london-green disabled:opacity-50 disabled:cursor-not-allowed rounded-full";
  
  const variants = {
    // White button for dark backgrounds (like the reference)
    primary: "bg-white text-london-green hover:bg-stone-100 shadow-md hover:shadow-lg hover:-translate-y-1",
    // Gold/accent button
    secondary: "bg-gold text-white hover:bg-opacity-90 shadow-sm hover:-translate-y-1",
    // Outline style
    outline: "border border-london-green text-london-green bg-transparent hover:bg-london-green hover:text-white hover:-translate-y-1",
    // Text only
    text: "bg-transparent text-london-green hover:text-park-green underline-offset-4 hover:underline padding-0",
    // Permanent Green button with gentle bounce
    green: "bg-london-green text-white hover:bg-park-green shadow-lg hover:shadow-xl hover:-translate-y-1"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
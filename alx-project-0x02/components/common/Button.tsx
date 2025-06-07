import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = 'medium',
  shape = 'rounded-md',
  className = '',
  type = 'button',
  ...props
}) => {
  // Size classes mapping
  const sizeClasses = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };

  // Shape classes mapping
  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-lg': 'rounded-lg',
    'rounded-full': 'rounded-full'
  };

  // Base button classes
  const baseClasses = 'font-medium transition-colors duration-200 focus:outline-none';

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${shapeClasses[shape]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
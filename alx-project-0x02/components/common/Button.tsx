import { type ButtonProps } from '../../interfaces';

const Button = ({ 
  size = 'medium', 
  shape = 'rounded-md' 
}: ButtonProps) => {
  const sizeClasses = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

  return (
    <button
      className={`${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-500 text-white`}
    >
      Button
    </button>
  );
};

export default Button;
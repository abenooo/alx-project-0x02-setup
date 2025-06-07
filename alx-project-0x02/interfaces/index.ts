export interface IExample {
    id: number;
    name: string;
  }
  // interfaces/index.ts
export interface CardProps {
  title: string;
  content: string;
  className?: string; // Optional for additional styling
}
export interface PostData {
  id: number;
  title: string;
  content: string;
}
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}
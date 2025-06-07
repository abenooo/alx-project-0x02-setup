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
  size?: 'small' | 'medium' | 'large';
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full';
}
export interface PostProps {
  id: number,
  title: string,
  body: string;
  userId: string;
}
export interface UserProps {
  id: number,
  name: string,
  email: string,
  address: string,
}
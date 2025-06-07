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
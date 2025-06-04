import Link from "next/link";
import { about } from "../../pages/about";
import { home } from "../../pages/home";
export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">ALX Project</h1>
      <Link href="/about">About</Link>
      <Link href="/home">Home</Link>
    </header>
  );
}
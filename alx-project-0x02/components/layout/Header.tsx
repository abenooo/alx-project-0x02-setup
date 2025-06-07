import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            ALX Project
          </Link>
          <div className="flex space-x-6">
            <Link href="/home" className="hover:underline hover:text-blue-200">
              Home
            </Link>
            <Link href="/about" className="hover:underline hover:text-blue-200">
              About
            </Link>
            <Link href="/posts" className="hover:underline hover:text-blue-200">
              Posts
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
import Header from '../components/layout/Header';
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold">Welcome to ALX Next.js!</h1>
      </main>
    </div>
  );
}
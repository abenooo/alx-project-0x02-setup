import Header from '@/components/layout/Header';

const PostsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold my-8">Latest Posts</h1>
        <p>Browse our collection of posts.</p>
      </main>
    </div>
  );
};

export default PostsPage;
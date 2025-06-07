import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts?_limit=5'
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold my-8">Latest Posts</h1>
        
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                body={post.body}
                userId={post.userId}
                id={post.id}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default PostsPage;
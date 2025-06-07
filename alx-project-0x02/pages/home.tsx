import React, { useState } from 'react';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';
import { PostData } from '../interfaces';
import Header from '@/components/layout/Header';
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<PostData[]>([]);

  const handleAddPost = (newPost: PostData) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="container mx-auto p-4">
            <Header />
      <h1 className="text-3xl font-bold mb-8">Card Component Demo</h1>
      
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Add New Post
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            content={post.content}
            className="border-l-4 border-green-500"
          />
        ))}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default HomePage;
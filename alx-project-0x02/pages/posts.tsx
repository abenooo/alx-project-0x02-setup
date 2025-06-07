import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage = ({ posts }: PostsPageProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-3xl font-bold my-8">Latest Posts</h1>
        
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
      </main>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts?_limit=5'
    );
    const posts = await response.json();

    return {
      props: {
        posts,
      },
      // Re-generate the page at most once every 10 seconds
      revalidate: 10, // Optional: for incremental static regeneration
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default PostsPage;
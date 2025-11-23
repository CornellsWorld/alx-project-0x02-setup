import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        const data = await res.json();
        const mappedData = data.map((post: any) => ({
          userId: post.userId,
          title: post.title,
          content: post.body,
        }));
        setPosts(mappedData);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <Header />

      <main className="mt-6 space-y-4">
        <h1 className="text-3xl font-bold mb-4">Posts</h1>
        {posts.map((post, index) => (
          <PostCard key={index} title={post.title} content={post.content} userId={post.userId} />
        ))}
      </main>
    </div>
  );
}

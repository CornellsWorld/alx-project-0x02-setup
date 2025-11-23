"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow p-8 space-y-6 bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to our Application!</h1>
          <p className="text-xl mb-6">We're glad you're here. Explore and enjoy your experience.</p>
          <button
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 bg-white text-blue-500 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Add New Post
          </button>
        </div>

        {/* Original static cards */}
        <div className="space-y-4">
          <Card title="First Card" content="This is the first card content." />
          <Card title="Second Card" content="This is the second card content." />
          <Card title="Third Card" content="More sample content here." />
        </div>

        {/* Dynamic posts */}
        <div className="space-y-4 mt-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>

      <PostModal isOpen={isOpen} onClose={() => setIsOpen(false)} onSubmit={handleAddPost} />
    </div>
  );
}

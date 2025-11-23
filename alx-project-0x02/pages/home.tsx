"use client";

import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle modal data submission
  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="p-8 space-y-4">

      {/* ✅ Your original cards — NOT deleted */}
      <Card 
        title="First Card" 
        content="This is the first card content." 
      />

      <Card 
        title="Second Card" 
        content="This is the second card content." 
      />

      <Card 
        title="Third Card" 
        content="More sample content here." 
      />

      {/* ✅ Button to open modal */}
      <button 
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add New Post
      </button>

      {/* ✅ Display dynamic posts from modal */}
      <div className="space-y-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      {/* ✅ Modal */}
      <PostModal 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        onSubmit={handleAddPost}
      />
    </div>
  );
}

import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <div className="min-h-screen p-8">
      {/* Header component */}
      <Header />

      <main className="mt-6">
        <h1 className="text-3xl font-bold mb-4">Posts Page</h1>
        <p>This is the posts page. You can display all posts here.</p>
      </main>
    </div>
  );
}

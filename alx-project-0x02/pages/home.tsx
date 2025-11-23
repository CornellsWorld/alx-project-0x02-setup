import Card from "../components/common/Card";

export default function HomePage() {
  return (
    <div className="p-8 space-y-4">
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
    </div>
  );
}

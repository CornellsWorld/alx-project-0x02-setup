import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div className="p-10 space-y-4">
      <Button title="Small Rounded" size="small" shape="rounded-sm" />
      <Button title="Medium Rounded" size="medium" shape="rounded-md" />
      <Button title="Large Rounded" size="large" shape="rounded-full" />
    </div>
  );
}

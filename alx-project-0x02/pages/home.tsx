import Card from "../components/common/Card";

export default function HomePage() {
  return (
    <div className="p-10 space-y-6">
      <Card
        title="Welcome to the Dashboard"
        content="This card shows an overview of your system activity."
      />

      <Card
        title="User Management"
        content="Manage users, add new accounts, and view user activity."
      />

      <Card
        title="Reports"
        content="Generate performance and activity reports here."
      />
    </div>
  );
}

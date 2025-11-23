import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <Header />

      <main className="mt-6 space-y-4">
        <h1 className="text-3xl font-bold mb-4">Users</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard
              key={user.email}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

// ✅ Static generation for data fetching
export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data: UserProps[] = await res.json();

    return {
      props: {
        users: data,
      },
    };
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return {
      props: {
        users: [],
      },
    };
  }
}

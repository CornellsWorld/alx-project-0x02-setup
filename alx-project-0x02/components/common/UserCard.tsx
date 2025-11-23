import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-1">{name}</h2>
      <p className="text-gray-700 mb-1">{email}</p>
      <p className="text-gray-500 text-sm">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;

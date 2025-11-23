import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 p-4 shadow-md">
      <nav>
        <ul className="flex gap-6 justify-center">
          <li>
            <Link href="/home" className="text-blue-600 font-semibold hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-blue-600 font-semibold hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" className="text-blue-600 font-semibold hover:underline">
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

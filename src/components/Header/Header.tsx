import { Link } from "@nextui-org/react";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 mx-auto md:w-[50%]">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="text-lg font-bold">Your Logo</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <div className="hover:text-gray-300">Home</div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="hover:text-gray-300">About</div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="hover:text-gray-300">User</div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="hover:text-gray-300">FAQ</div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

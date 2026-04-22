import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-5xl font-bold">Logo</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          {/* <li>
            <Link href="/datafetching/server" className="hover:text-gray-300">
              server fetching
            </Link>
          </li>
          <li>
            <Link href="/posts" className="hover:text-gray-300">
              Posts
            </Link> 
          </li> */}
          {/* <li>
            <Link href="/services" className="hover:text-gray-300">
              Services
            </Link>
          </li> */}
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-300 px-4 py-3 bg-blue-500 rounded">
                Login
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

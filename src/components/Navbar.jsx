import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 items-center top-0 sticky w-full">
      <div className="space-x-4 text-right p-2">
        <Link className="text-white" to="/">Home</Link>
        <Link className="text-white" to="/about">About</Link>
        <Link className="text-white" to="/pricing">Pricing</Link>
        <Link className="text-white" to="/contact">Contact</Link>
        <Link className="border px-4 py-2 rounded bg-white text-purple-500" to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;

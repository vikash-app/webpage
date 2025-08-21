import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="w-full px-8 py-4 bg-gradient-to-r from-pink-50 via-white to-cyan-50 shadow-md">
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center w-1/4 justify-start">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="vikash.app logo" style={{ height: 32, marginRight: '1rem' }} />
          </Link>
        </div>
        <div className="flex items-center justify-center w-2/4">
          <div className="flex text-lg font-semibold" style={{ gap: '3rem' }}>
            <Link to="/" className={pathname === "/" ? "text-pink-600 underline" : "text-gray-700 hover:text-pink-500 transition"}>Home</Link>
            <Link to="/travel-destinations" className={pathname.startsWith("/travel-destinations") ? "text-pink-600 underline" : "text-gray-700 hover:text-pink-500 transition"}>Destinations</Link>
            <Link to="/about" className={pathname === "/about" ? "text-pink-600 underline" : "text-gray-700 hover:text-pink-500 transition"}>About</Link>
            <Link to="/contact" className={pathname === "/contact" ? "text-pink-600 underline" : "text-gray-700 hover:text-pink-500 transition"}>Contact</Link>
          </div>
        </div>
        <div className="w-1/4"></div>
      </div>
      <div className="flex justify-center w-full">
        <h1 className="text-3xl font-bold text-pink-600 whitespace-nowrap">Welcome to Vikash.app</h1>
      </div>
    </nav>
  );
}
export default Navbar;
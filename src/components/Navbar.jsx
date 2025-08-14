import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="w-full px-8 py-4 bg-gradient-to-r from-pink-50 via-white to-cyan-50 shadow-md">
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-2 min-w-[180px]">
          <img src={logo} alt="vikash.app logo" style={{ height: 36, width: 'auto' }} />
        </Link>
      </div>
      <div className="flex flex-col items-center mt-2">
        <div className="flex gap-8 text-lg font-semibold force-gap-navbar justify-center mb-2">
          <Link to="/" className={pathname === "/" ? "text-pink-600 underline" : "text-gray-700 hover:text-pink-500 transition"}>Home</Link>
          <Link to="/travel-destinations" className={pathname.startsWith("/travel-destinations") ? "text-pink-600 underline" : "text-gray-700 hover:text-pink-500 transition"}>Destinations</Link>
          {/* <Link to="/travel-stories" className={pathname === "/travel-stories" ? "text-pink-600 underline" : "text-gray-700 hover:text-pink-500 transition"}>Stories</Link> */}
          <Link to="/about" className={pathname === "/about" ? "text-pink-600 underline" : "text-gray-700 hover:text-pink-500 transition"}>About</Link>
          <Link to="/contact" className={pathname === "/contact" ? "text-pink-600 underline" : "text-gray-700 hover:text-pink-500 transition"}>Contact</Link>
        </div>
  {/* Welcome header removed; now only on Home page */}
      </div>
    </nav>
  );
}
export default Navbar;
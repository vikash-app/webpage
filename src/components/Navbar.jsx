import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-pink-50 via-white to-cyan-50 shadow-md">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="vikash.app logo" style={{ height: 32 }} />
      </Link>
       <div className="flex gap-6 text-lg font-semibold">
        <Link to="/" className={pathname === "/" ? "text-pink-600 underline" : "text-gray-700 hover:text-pink-500 transition"}>Home</Link>
        <Link to="/travel-destinations" className={pathname.startsWith("/travel-destinations") ? "text-pink-600 underline" : "text-gray-700 hover:text-pink-500 transition"}>Destinations</Link>
       {/*} <Link to="/travel-stories" className={pathname === "/travel-stories" ? "text-pink-600 underline" : "text-gray-700 hover:text-pink-500 transition"}>Stories</Link>*/}
        <Link to="/about" className={pathname === "/about" ? "text-pink-600 underline" : "text-gray-700 hover:text-pink-500 transition"}>About</Link>
        <Link to="/contact" className={pathname === "/contact" ? "text-pink-600 underline" : "text-gray-700 hover:text-pink-500 transition"}>Contact</Link>
      </div>
    </nav>
  );
}
export default Navbar;
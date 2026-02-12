import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = (path) =>
    pathname === path || (path !== "/" && pathname.startsWith(path))
      ? "text-pink-600 underline"
      : "text-gray-700 dark:text-gray-200 hover:text-pink-500 transition";

  return (
    <nav className="w-full px-8 py-4 bg-gradient-to-r from-pink-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-md">
      <div className="flex items-center justify-between md:justify-center w-full">
        {/* Logo */}
        <div className="flex items-center md:w-1/4 justify-start">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="vikash.app logo" style={{ height: 32 }} />
            <span className="text-lg font-bold bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text">vikash.app</span>
          </Link>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center justify-center md:w-2/4">
          <div className="flex text-lg font-semibold" style={{ gap: '3rem' }}>
            <Link to="/" className={linkClass("/")}>Home</Link>
            <Link to="/travel-destinations" className={linkClass("/travel-destinations")}>Footprints</Link>
          </div>
        </div>
        <div className="hidden md:flex md:w-1/4 justify-end">
          <ThemeToggle />
        </div>

        {/* Hamburger + toggle — mobile only */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="p-2 text-gray-700 dark:text-gray-200 hover:text-pink-500 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center gap-4 text-lg font-semibold pb-2">
          <Link to="/" className={linkClass("/")} onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/travel-destinations" className={linkClass("/travel-destinations")} onClick={() => setMenuOpen(false)}>Footprints</Link>
        </div>
      )}
    </nav>
  );
}
export default Navbar;

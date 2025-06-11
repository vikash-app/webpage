import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md dark:bg-darkSurface">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="vikash.app logo" style={{ height: 32 }} />
      </Link>
      <div className="flex gap-6 text-lg">
        <Link to="/" className={pathname === "/" ? "text-primary font-bold" : ""}>Home</Link>
        <Link to="/travel-destinations" className={pathname.startsWith("/travel-destinations") ? "text-primary font-bold" : ""}>Destinations</Link>
        <Link to="/travel-stories" className={pathname === "/travel-stories" ? "text-primary font-bold" : ""}>Stories</Link>
        <Link to="/about" className={pathname === "/about" ? "text-primary font-bold" : ""}>About</Link>
        <Link to="/contact" className={pathname === "/contact" ? "text-primary font-bold" : ""}>Contact</Link>
      </div>
    </nav>
  );
}
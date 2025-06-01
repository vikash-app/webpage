import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#fafafa", borderBottom: "1px solid #eee" }}>
      <Link to="/" style={{ marginRight: "1.5rem" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "1.5rem" }}>About</Link>
    </nav>
  );
}

export default Navbar;
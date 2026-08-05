import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          📱 PhoneStore
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/">Store</Link>
          <Link to="/">About</Link>
          <Link to="/">Support</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

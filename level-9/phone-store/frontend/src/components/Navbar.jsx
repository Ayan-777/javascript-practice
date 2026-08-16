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
          <Link to="/cart">Cart</Link>
          <Link to="/about">About</Link>
          {/* Support Dropdown Container */}
          <div className="nav-dropdown-wrapper">
            <span className="nav-dropdown-trigger">Supprt ▾</span>
            <div className="support-dropdown-menu">
              <div className="support-card-content">
                <Link to="/" className="support-pill-btn">iPhone</Link>
                <Link to="/" className="support-pill-btn">Samsung</Link>
                <Link to="/" className="support-pill-btn">Vivo</Link>
                <Link to="/" className="support-pill-btn">Google Pixel</Link>
                <Link to="/" className="support-pill-btn">Oppo</Link>
              </div>
            </div>
          </div>
          <Link to="/about-me">About Me</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

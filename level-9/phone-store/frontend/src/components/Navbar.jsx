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
                <a
                  href="https://support.apple.com/iphone"
                  target="_blank"
                  rel="noreferrer"
                  className="support-pill-btn"
                >
                  iphone
                </a>

                <a
                  href="https://www.samsung.com/us/support/"
                  target="_blank"
                  rel="noreferrer"
                  className="support-pill-btn"
                >
                  Samsung
                </a>

                <a
                  href="https://www.vivo.com/en/support"
                  target="_blank"
                  rel="noreferrer"
                  className="support-pill-btn"
                >
                  Vivo
                </a>

                <a
                  href="https://support.oppo.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="support-pill-btn"
                >
                  Oppo
                </a>

                <a
                  href="https://www.mi.com/in/support/"
                  target="_blank"
                  rel="noreferrer"
                  className="support-pill-btn"
                >
                  Xiaomi
                </a>

                <a
                  href="https://service.oneplus.com/in#/"
                  target="_blank"
                  rel="noreferrer"
                  className="support-pill-btn"
                >
                  OnePlus
                </a>
                <a
                  href="https://in.nothing.tech/pages/contact-support"
                  target="_blank"
                  rel="noreferrer"
                  className="support-pill-btn"
                >
                  Nothing
                </a>
                <a
                  href="https://www.realme.com/in/support"
                  target="_blank"
                  rel="noreferrer"
                  className="support-pill-btn"
                >
                  Realme
                </a>
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

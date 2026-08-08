import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          IUNU
        </Link>

        {/* Desktop Navigation */}
        <nav className={`navbar-menu ${menuOpen ? "show" : ""}`}>

          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "nav-link nav-link-active"
                : "nav-link"
            }
          >
            HOME
          </NavLink>

          <NavLink
            to="/project"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "nav-link nav-link-active"
                : "nav-link"
            }
          >
            PROJECT
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "nav-link nav-link-active"
                : "nav-link"
            }
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive
                ? "nav-link nav-link-active"
                : "nav-link"
            }
          >
            CONTACT
          </NavLink>

          {/* Phone inside mobile menu */}
          <a
            href="tel:17337"
            className="mobile-phone"
          >
            <span className="phone-icon">☎</span>
            17337
          </a>

          {/* Close Button */}
          <button
            className="menu-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ×
          </button>

        </nav>

        {/* Desktop Phone */}
        <a
          href="tel:17337"
          className="navbar-phone"
        >
          <span className="phone-icon">☎</span>
          17337
        </a>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          ☰
        </button>

      </div>
    </header>
  );
}

export default Navbar;
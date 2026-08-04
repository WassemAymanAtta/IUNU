import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">

      <div className="container">

        <div className="logo">

          <Link to="/">
            EduPlatform
          </Link>

        </div>

        <nav className="nav-links">

          <Link to="/">Home</Link>

          <Link to="/courses">Courses</Link>

          <Link to="/teachers">Teachers</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>

        </nav>

        <div className="nav-buttons">

          <Link className="login-btn" to="/login">
            Login
          </Link>

          <Link className="register-btn" to="/register">
            Get Started
          </Link>

        </div>

        <button className="menu-btn">

          <FaBars />

        </button>

      </div>

    </header>
  );
}

export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* โลโก้ */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* เมนูหลัก */}
      <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/trader-training" onClick={() => setMenuOpen(false)}>Trader training</Link></li>
        <li><Link to="/challenge" onClick={() => setMenuOpen(false)}>Challenge</Link></li>
        <li><Link to="/ea-robottade" onClick={() => setMenuOpen(false)}>EA-robottade</Link></li>
        <li><Link to="/useprogram" onClick={() => setMenuOpen(false)}>การใช้โปรแกรม</Link></li>
        <li>
          <Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
          <ul className="dropdown">
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact us</Link></li>
          </ul>
        </li>
      </ul>

      {/* ปุ่มสมัคร & Dashboard */}
      <div className="navbar-buttons">
        <Link to="/login">
          <button className="signup">Sign up</button>
        </Link>
        <button className="dashboard">Dashboard</button>
      </div>

      {/* Hamburger Menu สำหรับมือถือ */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar bar1" : "bar"}></div>
        <div className={menuOpen ? "bar bar2" : "bar"}></div>
        <div className={menuOpen ? "bar bar3" : "bar"}></div>
      </div>

      {/* เมนูสำหรับมือถือ */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/trader-training" onClick={() => setMenuOpen(false)}>Trader training</Link></li>
          <li><Link to="/challenge" onClick={() => setMenuOpen(false)}>Challenge</Link></li>
          <li><Link to="/ea-robottade" onClick={() => setMenuOpen(false)}>EA-robottade</Link></li>
          <li><Link to="/useprogram" onClick={() => setMenuOpen(false)}>การใช้โปรแกรม</Link></li>
          <li><Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

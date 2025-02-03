import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo2.png";
import LanguageSwitcher from "../LaguageSwitcher";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false); // สำหรับเปิด/ปิดเมนูภาษานี้

  // ใช้ useRef เพื่อเก็บการอ้างอิงถึง SVG
  const svgRef = React.useRef(null);

  useEffect(() => {
    if (isLanguageOpen) {
      // ถ้าเมนูเปิด, หมุน SVG 180 องศา
      svgRef.current.style.transform = 'rotate(0deg)';
    } else {
      // ถ้าเมนูปิด, กลับหมุนกลับ
      svgRef.current.style.transform = 'rotate(-90deg)';
    }
  }, [isLanguageOpen]); // เมื่อ isLanguageOpen เปลี่ยนแปลง

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
        <li><Link to="/ea-robottade" onClick={() => setMenuOpen(false)}>EA-robottrade</Link></li>
        <li><Link to="/useprogram" onClick={() => setMenuOpen(false)}>การใช้โปรแกรม</Link></li>
        <li>
          <Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
          <ul className="dropdown">
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact us</Link></li>
          </ul>
        </li>
        <li>
          <LanguageSwitcher />
        </li>
      </ul>

      {/* ปุ่มสมัคร & Dashboard */}
      <div className="navbar-buttons">
        <Link to="/login">
          <button className="signup">Sign up</button>
        </Link>
        <button className="dashboard">Dashboard</button>
      </div>

      <div className="menu-container">
        {/* Hamburger Menu สำหรับมือถือ */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <div className={menuOpen ? "bar bar1" : "bar"}></div>
          <div className={menuOpen ? "bar bar2" : "bar"}></div>
          <div className={menuOpen ? "bar bar3" : "bar"}></div>
        </div>

        {/* เมนูสำหรับมือถือ */}
        <nav className={`side-menu ${isOpen ? 'open' : ''}`}>
          {/* <button className="" onClick={() => setIsOpen(false)}>×</button> */}
          <div style={{ height: "50px" }}></div>
          <ul>
            <li><a href="/" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="/trader-training" onClick={() => setMenuOpen(false)}>Trader training</a></li>
            <li><a href="/challenge" onClick={() => setMenuOpen(false)}>Challenge</a></li>
            <li><a href="/ea-robottade" onClick={() => setMenuOpen(false)}>EA-robottade</a></li>
            <li><a href="/useprogram" onClick={() => setMenuOpen(false)}>การใช้โปรแกรม</a></li>
            <li><a href="/about-us" onClick={() => setMenuOpen(false)}>About Us</a></li>
            <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact us</a></li>
            {/* <li><LanguageSwitcher /></li> */}
            {/* เมนูภาษาแบบ Dropdown */}
            <li style={{ padding: "0" }}>
              <div className="dropdown-btn" onClick={() => setIsLanguageOpen(!isLanguageOpen)} >
                <img
                  src="https://flagcdn.com/w20/gb.png"
                  alt="English"
                  className="flag-icon"
                />
                <span>EN</span>
                <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
                  <path fill="white" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                </svg>
              </div>
              {/* เมนูภาษาที่จะเปิดเมื่อคลิก */}
              <ul className={`dropdown-menu ${isLanguageOpen ? 'open' : ''}`}>
                <li>
                  <a href="/" onClick={() => setIsLanguageOpen(false)}>
                    <img
                      src="https://flagcdn.com/w20/gb.png"
                      alt="English"
                      className="flag-icon"
                    />
                    <span className='font-300'>English</span>
                  </a>
                </li>
                <li>
                  <a href="/" onClick={() => setIsLanguageOpen(false)}>
                    <img
                      src="https://flagcdn.com/w20/th.png"
                      alt="Thai"
                      className="flag-icon"
                    />
                    <span>ไทย</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        {/* 🌑 Overlay */}
        {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
      </div >
    </nav>
  );
};

export default Navbar;

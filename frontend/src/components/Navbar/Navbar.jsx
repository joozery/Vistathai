import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo2v.png";
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
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/trader-training" onClick={() => setIsOpen(false)}>Trader training</Link></li>
            <li><Link to="/challenge" onClick={() => setIsOpen(false)}>Challenge</Link></li>
            <li><Link to="/ea-robottade" onClick={() => setIsOpen(false)}>EA-robottade</Link></li>
            <li><Link to="/useprogram" onClick={() => setIsOpen(false)}>การใช้โปรแกรม</Link></li>
            <li><Link to="/about-us" onClick={() => setIsOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact us</Link></li>
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
                  <Link to="/" onClick={() => setIsOpen(false)}>
                    <img
                      src="https://flagcdn.com/w20/gb.png"
                      alt="English"
                      className="flag-icon"
                    />
                    <span className='font-300'>English</span>
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={() => setIsOpen(false)}>
                    <img
                      src="https://flagcdn.com/w20/th.png"
                      alt="Thai"
                      className="flag-icon"
                    />
                    <span>ไทย</span>
                  </Link>
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

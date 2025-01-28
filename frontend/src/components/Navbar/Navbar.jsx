import React from "react";
import { Link } from "react-router-dom"; // นำเข้า Link สำหรับการ Routing
import "./Navbar.css"; // เชื่อมไฟล์ CSS สำหรับสไตล์
import logo from "../../assets/logo2.png"; // นำเข้าภาพโลโก้

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" /> {/* ใช้โลโก้ที่ import มา */}
        </Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/trader-training">Trader training</Link></li>
        <li>
          <Link to="/challenge">Challenge</Link>
        </li>
        <li><Link to="/ea-robottade">EA-robottade</Link></li>
        <li><Link to="/use-program">การใช้โปรแกรม</Link></li>
        <li>
          <Link to="/about-us">About Us</Link>
          <ul className="dropdown">
            <li><Link to="/contact">Contact us</Link></li>
          </ul>
        </li>
      </ul>
      <div className="navbar-buttons">
        {/* ใช้ Link เพื่อพาไปยังหน้า Login */}
        <Link to="/login">
          <button className="signup">Sign up</button>
        </Link>
        <button className="dashboard">Dashboard</button>
      </div>
    </nav>
  );
};

export default Navbar;

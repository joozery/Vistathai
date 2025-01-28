import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; // Navbar
import Footer from "./components/Footer/Footer"; // Footer
import ChatPopup from "./components/ChatPopup/ChatPopup"; // Pop-up Chat
import Home from "./page/Home"; // หน้าแรก
import Contact from "./page/Contact"; // หน้า Contact
import Login from "./page/Login"; // หน้า Login
import EArobottade from "./page/EA-robottade"; // หน้า EA-robottade
import AboutUs from "./page/AboutUs"; // หน้า About Us (เพิ่มการ import)
import Useprogram from "./page/Useprogram";
import Challenge from "./page/Challenge";

const App = () => {
  const location = useLocation(); // ใช้เพื่อดึงเส้นทางปัจจุบัน

  const isLoginPage = location.pathname === "/login"; // ตรวจสอบว่าเป็นหน้า Login หรือไม่

  return (
    <>
      {!isLoginPage && <Navbar />} {/* ซ่อน Navbar ถ้าอยู่ใน /login */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* หน้าแรก */}
        <Route path="/contact" element={<Contact />} /> {/* หน้า Contact */}
        <Route path="/login" element={<Login />} /> {/* หน้า Login */}
        <Route path="/ea-robottade" element={<EArobottade />} /> {/* หน้า EA-robottade */}
        <Route path="/about-us" element={<AboutUs />} /> {/* หน้า About Us (เพิ่มเส้นทางนี้) */}
        <Route path="/useprogram" element={<Useprogram />} /> {/* หน้า Useprogram */}
        <Route path="/challenge" element={<Challenge />} />
      </Routes>
      {!isLoginPage && <Footer />} {/* ซ่อน Footer ถ้าอยู่ใน /login */}
      {!isLoginPage && <ChatPopup />} {/* ซ่อน ChatPopup ถ้าอยู่ใน /login */}
    </>
  );
};

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

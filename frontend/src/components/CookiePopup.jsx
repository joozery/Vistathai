import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // ใช้ Link แทน <a>
import "./CookiePopup.css"; // ไฟล์ CSS สำหรับสไตล์

const CookiePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // เช็คว่าเคยยอมรับ Cookie แล้วหรือยัง
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted) {
      setShowPopup(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieAccepted", "true"); // บันทึกการยอมรับ
    setShowPopup(false);
  };

  const rejectCookies = () => {
    setShowPopup(false); // ปิด popup โดยไม่บันทึกค่า
  };

  if (!showPopup) return null; // ถ้าไม่ต้องแสดงให้ return null

  return (
    <div className="cookie-popup">
      <p>
        เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพและประสบการณ์ที่ดีในการใช้งานเว็บไซต์ 
        สามารถศึกษารายละเอียดเพิ่มเติมได้ที่{" "}
        <Link to="/cookie-policy" className="cookie-link">
          นโยบายการใช้คุกกี้
        </Link>{" "}
        {" "}
        <Link to="/cookie-settings" className="cookie-link">
          
        </Link>
      </p>
      <div className="cookie-buttons">
        <button className="reject-button" onClick={rejectCookies}>
          ปฏิเสธทั้งหมด
        </button>
        <button className="accept-button" onClick={acceptCookies}>
          ยอมรับทั้งหมด
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;

import React, { useState } from "react";
import "./ChatPopup.css";
import { FaComments } from "react-icons/fa"; // ใช้ React Icons สำหรับไอคอน

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false); // state สำหรับเปิด/ปิด chat
  const [name, setName] = useState(""); // state สำหรับเก็บชื่อ
  const [isNameSubmitted, setIsNameSubmitted] = useState(false); // ตรวจสอบว่าผู้ใช้กรอกชื่อหรือยัง

  // ฟังก์ชันสลับสถานะเปิด/ปิด Chat
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // ฟังก์ชันจัดการเมื่อกดปุ่ม "ถัดไป"
  const handleNext = () => {
    if (name.trim() !== "") {
      setIsNameSubmitted(true);
    }
  };

  return (
    <div className="chat-popup-container">
      {/* ปุ่มเปิด/ปิด Chat */}
      <button className="chat-toggle-button" onClick={toggleChat}>
        <FaComments />
      </button>

      {/* กล่องแชท */}
      <div className={`chat-popup ${isOpen ? "open" : ""}`}>
        <div className="chat-header">
          <h3>Vista Thai</h3>
          <button className="close-button" onClick={toggleChat}>
            &times;
          </button>
        </div>
        <div className="chat-body">
          {/* ถ้ายังไม่ได้กรอกชื่อให้แสดง Input กรอกชื่อ */}
          {!isNameSubmitted ? (
            <div className="chat-form">
              <label htmlFor="name">Name</label>
              <div className="input-group">
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button className="next-button" onClick={handleNext}>
                  ถัดไป
                </button>
              </div>
            </div>
          ) : (
            <div className="chat-message">
              <p>สวัสดี {name} 👋 มีอะไรให้เราช่วยเหลือคุณไหมคะ?</p>
            </div>
          )}
        </div>
        <div className="chat-footer">
          <textarea
            placeholder="พิมพ์ข้อความของคุณ..."
            className="chat-input"
          ></textarea>
          <button className="send-button">ส่ง</button>
        </div>
      </div>
    </div>
  );
};

export default ChatPopup;

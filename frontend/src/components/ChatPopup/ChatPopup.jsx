import React, { useState } from "react";
import "./ChatPopup.css";
import { FaComments } from "react-icons/fa"; // ใช้ React Icons สำหรับไอคอน

const ChatPopup = () => {
  const [isOpen, setIsOpen] = useState(false); // state สำหรับเปิด/ปิด chat

  const toggleChat = () => {
    setIsOpen(!isOpen); // สลับสถานะเปิด/ปิด
  };

  return (
    <div className="chat-popup-container">
      {/* ปุ่มสำหรับเปิด/ปิด Chat */}
      <button className="chat-toggle-button" onClick={toggleChat}>
        <FaComments />
      </button>

      {/* กล่องแชท */}
      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <h3>Vista Thai</h3>
            <button className="close-button" onClick={toggleChat}>
              &times;
            </button>
          </div>
          <div className="chat-body">
            <div className="chat-message">
              <p>สวัสดีค่ะ มีอะไรให้เราช่วยเหลือคุณมั้ยคะ</p>
            </div>
            <div className="chat-form">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
              <button className="next-button">ถัดไป</button>
            </div>
          </div>
          <div className="chat-footer">
            <textarea
              placeholder="พิมพ์ข้อความของคุณ..."
              className="chat-input"
            ></textarea>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatPopup;

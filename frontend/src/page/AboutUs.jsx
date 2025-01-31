import React from "react";
import "./AboutUs.css"; // ไฟล์ CSS สำหรับจัดการสไตล์
import MetaTraderImage from "../assets/MetaTrader.jpeg"; // นำเข้ารูปภาพ

const AboutUs = () => {
  return (
    <div className="about-us-wrapper">
      <div className="about-us-content">
        <div className="text-section">
          <h1>เกี่ยวกับเรา</h1>
          <h2>Vista Story</h2>
          <p>
            Vista มุ่งมั่นที่จะเป็นผู้นำในด้านการศึกษาและเทคโนโลยีขั้นสูง
            ที่พัฒนาและนำเสนอผลิตภัณฑ์และบริการที่ตอบโจทย์ทุกความต้องการของเทรดเดอร์และองค์กร
          </p>
          <h2>ทำไมต้องเลือกเรา</h2>
          <p>
            ทีมงานผู้เชี่ยวชาญในหลากหลายด้านของเรา
            พร้อมที่จะขับเคลื่อนองค์กรให้เติบโตอย่างยั่งยืน
            โดยยึดหลักการทำงานเป็นทีมที่ให้ความสำคัญกับการสนับสนุนและช่วยเหลือ
            เพื่อให้ทุกคนประสบความสำเร็จในเส้นทางการเรียนรู้และการพัฒนาอย่างเต็มศักยภาพ
          </p>
        </div>
        <div className="image-section">
          <img
            src={MetaTraderImage}
            alt="Vista Team"
            className="about-us-image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

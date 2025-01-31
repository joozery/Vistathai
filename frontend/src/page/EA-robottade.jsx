import React from "react";
import { Helmet } from "react-helmet"; // สำหรับ SEO
import "./EArobottade.css"; // สไตล์สำหรับหน้า
import phoneImage from "../assets/phone-image.png"; // ภาพแสดงโทรศัพท์
import appStoreLogo from "../assets/apple.svg"; // โลโก้ App Store
import playStoreLogo from "../assets/google.svg"; // โลโก้ Google Play
import FAQ from "../components/FAQ/FAQ"; // Component FAQ

const EArobottade = () => {
  return (
    <>
      {/* เพิ่ม SEO */}
      <Helmet>
        <title>สมัครพอร์ตหุ้น - MetaTrader 5</title>
        <meta
          name="description"
          content="เปิดพอร์ตหุ้นออนไลน์และลงทุนง่าย ๆ ด้วยแอป MetaTrader 5"
        />
      </Helmet>

      <div className="ea-robottade-container">
        <div className="container">
          <div className="header-section">
            <h1>
            เปิดพอร์ต เริ่มลงทุนง่ายๆ ด้วยแอป <span>MetaTrader 5</span>
            </h1>
            <p>
              MetaTrader 5 แอปพลิเคชันเพื่อการลงทุนที่คนยุคใหม่ต้องมี เปิดพอร์ตหุ้นออนไลน์
              เลือกลงทุนในหลักทรัพย์ที่หลากหลาย พร้อมอัปเดตข่าวสารทางการเงิน
              และบทวิเคราะห์จากผู้เชี่ยวชาญได้ในแอปเดียว ให้คุณไม่พลาดทุกความเคลื่อนไหวในโลกการเงิน
            </p>
            <div className="download-section">
              {/* ลิงก์สำหรับดาวน์โหลด */}
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                <img
                  src={appStoreLogo}
                  alt="App Store"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </a>
              <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
                <img
                  src={playStoreLogo}
                  alt="Google Play"
                  onError={(e) => (e.target.style.display = "none")}
                />
              </a>
            </div>
          </div>

          <div className="image-section">
            {/* ภาพโทรศัพท์ */}
            <img src={phoneImage} alt="MetaTrader App" />
          </div>
        </div>
      </div>

      {/* FAQ Component */}
      <div className="faq-section-wrapper">
        <FAQ />
      </div>
    </>
  );
};

export default EArobottade;

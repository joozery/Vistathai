import React from "react";
import "./Footer.css"; // นำเข้า CSS
import AppleIcon from "../../assets/Apple.svg";
import GoogleIcon from "../../assets/Google.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* คอลัมน์ 1 */}
        <div className="footer-column">
          <h4>เกี่ยวกับเรา</h4>
          <ul>
            <li>องค์กร</li>
            <li>นักลงทุนสัมพันธ์</li>
            <li>ข่าวสารองค์กร</li>
            <li>ร่วมงานกับเรา</li>
          </ul>
        </div>

        {/* คอลัมน์ 2 */}
        <div className="footer-column">
          <h4>ผลิตภัณฑ์และบริการ</h4>
          <ul>
            <li>หุ้นไทย</li>
            <li>หุ้นต่างประเทศ</li>
            <li>ตราสารอนุพันธ์</li>
            <li>Block Trade</li>
            <li>ตราสารหนี้</li>
          </ul>
        </div>

        {/* คอลัมน์ 3 */}
        <div className="footer-column">
          <h4>บทวิเคราะห์และคลังความรู้</h4>
          <ul>
            <li>บทวิเคราะห์</li>
            <li>Pi Knowledge</li>
          </ul>
          <h4>โปรโมชั่น</h4>
          <ul>
            <li>โปรโมชั่น</li>
          </ul>
        </div>

        {/* คอลัมน์ 4 */}
        <div className="footer-column">
          <h4>บริการช่วยเหลือ</h4>
          <ul>
            <li>คำถามที่พบบ่อย</li>
            <li>ดาวน์โหลดแบบฟอร์ม</li>
            <li>ติดต่อเรา</li>
            <li>Common Reporting Standards</li>
          </ul>
        </div>

        {/* คอลัมน์ 5 */}
        <div className="footer-column">
          <h4>แอป MetaTrader 5</h4>
          <div className="app-links">
            <a 
              href="https://apps.apple.com/us/app/metatrader-5/id413251709" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={AppleIcon} alt="App Store" />
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img src={GoogleIcon} alt="Google Play" />
            </a>
          </div>
          <h4>ติดตามเรา</h4>
          <div className="social-links">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Vsita thailand | นโยบายความเป็นส่วนตัว | ค่าเตือนความเสี่ยง</p>
      </div>
    </footer>
  );
};

export default Footer;

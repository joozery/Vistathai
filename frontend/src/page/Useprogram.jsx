import React from "react";
import "./Useprogram.css";

const Useprogram = () => {
  return (
    <div className="useprogram-container">
      {/* ส่วนหัวของหน้า */}
      <header className="useprogram-header">
        <h1>วิธีใช้งาน MetaTrader 5</h1>
        <p>คู่มือแนะนำการใช้งาน MetaTrader 5 อย่างมีประสิทธิภาพ</p>
      </header>

      {/* ส่วนแนะนำ MetaTrader 5 */}
      <section className="useprogram-introduction">
        <h2>MetaTrader 5 คืออะไร?</h2>
        <p>
          MetaTrader 5 (MT5) เป็นแพลตฟอร์มเทรดที่ล้ำสมัย ซึ่งมีเครื่องมือครบวงจรสำหรับการซื้อขายฟอเร็กซ์ หุ้น และฟิวเจอร์ส
          ด้วยอินเทอร์เฟซที่ใช้งานง่าย นักเทรดสามารถวิเคราะห์ตลาดทั้งทางเทคนิคและปัจจัยพื้นฐานได้อย่างละเอียด
        </p>
      </section>

      {/* ขั้นตอนการติดตั้ง */}
      <section className="useprogram-steps">
        <h2>ขั้นตอนการติดตั้ง MetaTrader 5</h2>
        <ol>
          <li>ไปที่เว็บไซต์ทางการของ MetaTrader 5 และดาวน์โหลดโปรแกรม</li>
          <li>เปิดไฟล์ติดตั้ง และทำตามคำแนะนำบนหน้าจอ</li>
          <li>เข้าสู่ระบบด้วยบัญชีเทรดของคุณ</li>
          <li>สำรวจแพลตฟอร์ม และเริ่มต้นการซื้อขาย</li>
        </ol>
      </section>

      {/* ฟีเจอร์หลักของ MetaTrader 5 */}
      <section className="useprogram-features">
        <h2>คุณสมบัติเด่นของ MetaTrader 5</h2>
        <div className="useprogram-features-grid">
          <div className="useprogram-feature-card">
            <h3>รองรับสินทรัพย์หลายประเภท</h3>
            <p>สามารถซื้อขายสินทรัพย์หลายประเภท เช่น ฟอเร็กซ์ หุ้น และสินค้าโภคภัณฑ์</p>
          </div>
          <div className="useprogram-feature-card">
            <h3>เครื่องมือวิเคราะห์กราฟขั้นสูง</h3>
            <p>มีเครื่องมือวิเคราะห์กราฟและอินดิเคเตอร์หลากหลายสำหรับการวิเคราะห์เชิงลึก</p>
          </div>
          <div className="useprogram-feature-card">
            <h3>ระบบเทรดอัตโนมัติ (Algorithmic Trading)</h3>
            <p>รองรับการพัฒนาระบบเทรดอัตโนมัติผ่าน MQL5</p>
          </div>
          <div className="useprogram-feature-card">
            <h3>รองรับมือถือและเว็บไซต์</h3>
            <p>สามารถเทรดผ่านแอปบนมือถือหรือแพลตฟอร์มเว็บได้ทุกที่ทุกเวลา</p>
          </div>
        </div>
      </section>

      {/* คำถามที่พบบ่อย */}
      <section className="useprogram-faq">
        <h2>คำถามที่พบบ่อย</h2>
        <div className="useprogram-faq-item">
          <h4>MetaTrader 5 ใช้งานฟรีหรือไม่?</h4>
          <p>ใช่ โปรแกรมสามารถดาวน์โหลดและใช้งานได้ฟรี แต่การซื้อขายอาจมีค่าธรรมเนียมขึ้นอยู่กับโบรกเกอร์</p>
        </div>
        <div className="useprogram-faq-item">
          <h4>สามารถใช้ MetaTrader 5 บนอุปกรณ์มือถือได้หรือไม่?</h4>
          <p>ได้ MT5 รองรับทั้งระบบ Android และ iOS</p>
        </div>
      </section>
    </div>
  );
};

export default Useprogram;

import React, { useState } from "react";
import "./FAQ.css"; // เชื่อมไฟล์ CSS สำหรับสไตล์

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // คำถามในแต่ละ Section
  const sections = [
    {
      title: "เกี่ยวกับแอป MetaTrader 5",
      questions: [
        {
          question: "แอป MetaTrader 5 คืออะไร",
          answer: "MetaTrader 5 คือแอปบริหารจัดการพอร์ตหุ้นออนไลน์ที่ช่วยให้คุณสามารถลงทุนในตลาดหุ้นได้ง่ายและสะดวกที่สุด",
        },
        {
          question: "ฉันสามารถใช้งานแอป MetaTrader 5 บนอุปกรณ์ใดได้บ้าง",
          answer: "คุณสามารถใช้งานได้ทั้งบนโทรศัพท์มือถือระบบ iOS และ Android",
        },
      ],
    },
    {
      title: "เกี่ยวกับการลงทุน",
      questions: [
        {
          question: "ฉันสามารถเปิดบัญชีซื้อขายหุ้นประเภทไหนได้บ้างเพื่อการลงทุน",
          answer: "คุณสามารถเปิดบัญชีซื้อขายหุ้นทุกประเภทที่เหมาะสมกับความต้องการของคุณ",
        },
        {
          question: "ฉันจะฝากเงินเข้าสู่บัญชีลงทุนของตัวเองได้อย่างไร",
          answer: "คุณสามารถฝากเงินผ่านระบบออนไลน์หรือผ่านธนาคารที่รองรับการโอนเงินของ MetaTrader 5",
        },
      ],
    },
  ];

  // ฟังก์ชันจัดการการเปิด/ปิดคำถาม
  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>คำถามที่พบบ่อย (FAQ)</h2>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="faq-section">
          <h3>{section.title}</h3>
          {section.questions.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === `${sectionIndex}-${index}` ? "active" : ""}`}
            >
              <div
                className="faq-question"
                onClick={() => toggleQuestion(`${sectionIndex}-${index}`)}
              >
                {item.question}
                <span>{activeIndex === `${sectionIndex}-${index}` ? "▲" : "▼"}</span>
              </div>
              {activeIndex === `${sectionIndex}-${index}` && (
                <div className="faq-answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      ))}
      <button className="faq-all-button">ดู FAQ ทั้งหมด</button>
    </div>
  );
};

export default FAQ;

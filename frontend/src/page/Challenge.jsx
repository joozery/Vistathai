import React from "react";
import "./Challenge.css";

const Challenge = () => {
  return (
    <div className="challenge-container">
      {/* ส่วนหัว */}
      <header className="challenge-header">
        <h1>Challenge บัญชีทดลอง</h1>
        <p>เลือก Challenge ที่เหมาะกับคุณ และเริ่มการซื้อขายทันที</p>
      </header>

      {/* ตาราง Level of Challenge */}
      <section className="challenge-level">
        <h2>ระดับของ Challenge</h2>
        <table className="challenge-table">
          <thead>
            <tr>
              <th>บัญชี</th>
              <th>ทุนเริ่มต้น (USD)</th>
              <th>ค่าสมัคร (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Level 1</td><td>10,000</td><td>99</td></tr>
            <tr><td>Level 2</td><td>30,000</td><td>180</td></tr>
            <tr><td>Level 3</td><td>50,000</td><td>280</td></tr>
            <tr><td>Level 4</td><td>100,000</td><td>480</td></tr>
            <tr><td>Level 5</td><td>200,000</td><td>960</td></tr>
          </tbody>
        </table>
      </section>

      {/* เงื่อนไขของ Challenge */}
      <section className="challenge-conditions">
        <h2>เงื่อนไขของ Challenge</h2>
        <div className="phase">
          <h3>Phase 1</h3>
          <ul>
            <li>กำไรที่ต้องทำ: <b>8%</b></li>
            <li>Daily Drawdown: <b>5%</b></li>
            <li>Max Loss: <b>10%</b></li>
          </ul>
        </div>
        <div className="phase">
          <h3>Phase 2</h3>
          <ul>
            <li>กำไรที่ต้องทำ: <b>5%</b></li>
            <li>Daily Drawdown: <b>5%</b></li>
            <li>Max Loss: <b>10%</b></li>
          </ul>
        </div>
        <p><b>หมายเหตุ:</b> ต้องมีออเดอร์อย่างน้อย 1 ครั้งทุก 2 สัปดาห์ และไม่มีระยะเวลากำหนด</p>
      </section>

      {/* รายละเอียดบัญชีทดลอง */}
      <section className="challenge-details">
        <h2>รายละเอียดบัญชีทดลอง</h2>
        <ul>
          <li>Leverage: <b>1:100</b></li>
          <li>สินทรัพย์ที่สามารถซื้อขายได้: <b>คู่สกุลเงิน, ทองคำ, น้ำมันดิบ</b> (ยกเว้นดัชนี)</li>
          <li>ไม่จำกัดมาร์จิ้นในการซื้อขาย</li>
          <li>ไม่จำกัด Lot</li>
        </ul>
      </section>

      {/* ข้อมูลเกี่ยวกับบัญชีจริง */}
      <section className="challenge-real">
        <h2>บัญชีจริง (เมื่อผ่านการทดสอบ)</h2>
        <ul>
          <li>Daily Drawdown: <b>5%</b></li>
          <li>Max Loss: <b>10%</b></li>
          <li>ต้องเปิดออเดอร์อย่างน้อย 10 วันภายใน 1 เดือน</li>
          <li>พิจารณาผลทุกๆ 1 เดือน</li>
          <li>แบ่งกำไร: เทรดเดอร์ <b>80%</b>, บริษัท <b>20%</b></li>
        </ul>
      </section>
    </div>
  );
};

export default Challenge;

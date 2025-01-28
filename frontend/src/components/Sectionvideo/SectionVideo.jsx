import React, { useEffect, useRef } from "react";
import videoFile from "../../assets/Video.mp4"; // ใช้ ../../ แทนเพื่อขึ้นไปหาโฟลเดอร์ assets

const SectionVideo = () => {
  const videoRef = useRef(null); // ใช้ useRef เพื่ออ้างอิงถึง <video>

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.2; // ปรับความเร็วเล่นวิดีโอ (0.5 = slow motion)
    }
  }, []);

  return (
    <section
      style={{
        position: "relative", // ทำให้สามารถซ้อนเนื้อหาบนวิดีโอได้
        width: "100%",
        height: "100vh", // ความสูงเต็มหน้าจอ
        overflow: "hidden", // ซ่อนส่วนเกินของวิดีโอ
      }}
    >
      {/* วิดีโอพื้นหลัง */}
      <video
        ref={videoRef} // เพิ่ม ref เพื่ออ้างอิงวิดีโอ
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover", // ครอบคลุมพื้นที่โดยไม่เสียสัดส่วน
          transform: "translate(-50%, -50%)", // จัดให้อยู่ตรงกลาง
          zIndex: "-1", // ให้อยู่ด้านหลังเนื้อหา
        }}
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* เนื้อหาบนวิดีโอ */}
      <div
        style={{
          position: "relative",
          color: "white",
          textAlign: "center",
          zIndex: "1", // ให้อยู่เหนือวิดีโอ
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%", // ครอบคลุมความสูงทั้งหมด
          padding: "0 20px",
        }}
      >
        <h1 style={{ fontSize: "6rem", fontWeight: "bold", marginBottom: "20px" }}>
          Built by traders <br /> ➡ for traders.
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            maxWidth: "600px",
            margin: "0 auto 30px",
            lineHeight: "1.6",
            fontFamily: "'Prompt', sans-serif", // ใช้ Prompt
          }}
        >
          Join over 750,000 traders in the world’s leading firm. Trade in a fully simulated environment and earn up to 100% rewards.
        </p>
        <div style={{ display: "flex", gap: "15px" }}>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              color: "white",
              backgroundColor: "#e64e20",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              transition: "background-color 0.3s",
              fontFamily: "'Prompt', sans-serif", // ใช้ Prompt
            }}
          >
            Buy Challenge
          </button>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "1rem",
              color: "#e64e20",
              backgroundColor: "transparent",
              border: "2px solid #e64e20",
              borderRadius: "8px",
              cursor: "pointer",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              transition: "background-color 0.3s",
              fontFamily: "'Prompt', sans-serif", // ใช้ Prompt
            }}
          >
            Join Competition
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionVideo;

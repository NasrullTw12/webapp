import React, { useEffect, useState } from "react";

const HomeContent = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 0,
          margin: 0,
          background: "linear-gradient(to bottom, #0C2B4E, #515963ff)",
          minHeight: "500px",
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* Kiri: Teks besar */}
        <div
          style={{
            flex: 1,
            padding: "50px",
            color: "#FFFFFF",
            fontFamily: "sans-serif",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(50px)",
            transition: "all 1s ease",
          }}
        >
          {/* Header kotak */}
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#FFFFFF",
              color: "#0C2B4E",
              padding: "10px 20px",
              borderRadius: "20px 20px 20px 20px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Welcome to natadana
          </div>
          <h1 style={{ fontSize: "3rem", margin: 0, lineHeight: 1.2 }}>
            Your Trusted One-Stop Solution<br />For Fiduciary & Technology Needs
          </h1>
          <p style={{ margin: "20px 0" }}>
            Simplifying fiduciary services and financial technology with seamless, smart, and secure solutions—built for your success
          </p>
          {/* Button */}
          <button
            style={{
              padding: "12px 25px",
              borderRadius: "25px",
              border: "none",
              backgroundColor: "#FFFFFF",
              color: "#0C2B4E",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Let's Get Started
          </button>
        </div>

        {/* Kanan: Gambar */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            opacity: animate ? 1 : 0,
            transform: animate ? "scale(1)" : "scale(0.5)",
            transition: "all 1s ease 0.5s",
            padding: "50px",
          }}
        >
          {/* Teks di atas gambar */}
          <p
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              backgroundColor: "rgba(255,255,255,0)", // transparan
              color: "orange",
              fontWeight: "bold",
              lineHeight: "1.5",
              fontSize: "1rem",
            }}
          >
            ✓ Guiding Financial Journey<br />
            To Elevating Your Business<br />
            Destiny
          </p>

          <img
            src="/images/layar.png"
            alt="Layar"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
          />

          {/* Box pojok kanan bawah */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              backgroundColor: "#0C2B4E",
              color: "#fff",
              padding: "10px 15px",
              borderRadius: "8px",
              fontWeight: "bold",
              boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
            }}
          >
            Guiding Financial Journey
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;

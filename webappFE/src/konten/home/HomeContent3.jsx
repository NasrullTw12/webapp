import React, { useEffect, useState } from "react";

const HomeContent3 = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const cardStyle = {
    backgroundColor: "#FFFFFF",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    padding: "30px",
    flex: "1",
    transition: "all 1s ease",
    opacity: animate ? 1 : 0,
    transform: animate ? "translateY(0)" : "translateY(60px)",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
    minHeight: "250px",
    textAlign: "center",
  };

  return (
    <div
      style={{
        width: "100%",
        margin: 0,
        padding: "80px 0",
        fontFamily: "sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* ===== BAGIAN ATAS: 2 PARAGRAF ===== */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "0 80px",
          marginBottom: "80px",
          gap: "50px",
        }}
      >
        {/* Paragraf kiri */}
        <div
          style={{
            flex: 1,
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "#333",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0)" : "translateX(-50px)",
            transition: "all 1s ease",
          }}
        >
          <p>
            Natadana empowers businesses to accelerate their digital
            transformation journey with seamless, reliable, and secure
            solutions. We combine innovation, strategy, and execution to help
            partners thrive in a fast-changing financial world.
          </p>
        </div>

        {/* Paragraf kanan */}
        <div
          style={{
            flex: 1,
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "#333",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0)" : "translateX(50px)",
            transition: "all 1s ease 0.3s",
          }}
        >
          <p>
            Our team provides end-to-end digital solutions — from fiduciary
            systems and financial automation to intelligent platforms designed
            to enhance efficiency, transparency, and long-term business growth.
          </p>
        </div>
      </section>

      {/* ===== BAGIAN BAWAH: 3 CARD DALAM 1 BARIS ===== */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
          padding: "0 80px",
          gap: "30px",
          flexWrap: "nowrap", // semua dalam 1 baris
        }}
      >
        {/* CARD 1 */}
        <div style={{ ...cardStyle, transitionDelay: "0.2s" }}>
          <h3
            style={{
              gridColumn: "1 / span 2",
              color: "#0C2B4E",
              marginBottom: "10px",
              fontSize: "1.3rem",
            }}
          >
            Digital Innovation
          </h3>
          <div>⚙️ System Integration</div>
          <div>💡 Smart Automation</div>
          <div>📱 App Development</div>
          <div>☁️ Cloud Services</div>
        </div>

        {/* CARD 2 */}
        <div style={{ ...cardStyle, transitionDelay: "0.4s" }}>
          <h3
            style={{
              gridColumn: "1 / span 2",
              color: "#0C2B4E",
              marginBottom: "10px",
              fontSize: "1.3rem",
            }}
          >
            Fiduciary Excellence
          </h3>
          <div>🔒 Compliance Process</div>
          <div>🧾 Document Management</div>
          <div>💼 Partner Collaboration</div>
          <div>📊 Secure Reporting</div>
        </div>

        {/* CARD 3 */}
        <div style={{ ...cardStyle, transitionDelay: "0.6s" }}>
          <h3
            style={{
              gridColumn: "1 / span 2",
              color: "#0C2B4E",
              marginBottom: "10px",
              fontSize: "1.3rem",
            }}
          >
            Financial Growth
          </h3>
          <div>💰 Digital Financing</div>
          <div>📈 Investment Tools</div>
          <div>🤝 Business Advisory</div>
          <div>🔍 Market Insights</div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent3;

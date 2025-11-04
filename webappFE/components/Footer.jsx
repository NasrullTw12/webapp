import React from "react";

const Footer = () => {
  return (
    <div style={{ position: "relative", width: "100%", marginTop: "-100px" }}>
      {/* ===== CARD DI ATAS SECTION ===== */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
          padding: "40px",
          zIndex: 2,
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#0C2B4E", marginBottom: "15px" }}>
          Subscribe To Our Weekly Newsletter
        </h2>
        <button
          style={{
            backgroundColor: "#0C2B4E",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#117A65")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0C2B4E")}
        >
          Subscribe Now
        </button>
      </div>

      {/* ===== SECTION GRADIENT ===== */}
      <section
        style={{
          background: "linear-gradient(to right, #0C2B4E, #117A65)",
          color: "#fff",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          padding: "120px 20px 60px", // ruang atas untuk overlap card
          flexWrap: "wrap",
          textAlign: "left",
          zIndex: 1,
        }}
      >
        {/* Kolom 1 - Logo dan Perusahaan */}
        <div style={{ width: "250px", margin: "20px" }}>
          <img
            src="/images/logoPerusahaan.png"
            alt="PT. Natadana Solusi Pratama"
            style={{
              width: "80px",
              height: "80px",
              marginBottom: "15px",
            }}
          />
          <h3
            style={{
              fontSize: "1.2rem",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            PT. Natadana Solusi Pratama
          </h3>
          <p
            style={{
              fontSize: "1rem",
              color: "#E0E0E0",
              lineHeight: "1.5",
            }}
          >
            Partnership Digital Solution
          </p>
        </div>

        {/* Kolom 2 - Our Services */}
        <div style={{ width: "200px", margin: "20px" }}>
          <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
            Our Services
          </h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Digital Project</li>
            <li>Fidusia Solution</li>
            <li>Financial Solution</li>
          </ul>
        </div>

        {/* Kolom 3 - Support */}
        <div style={{ width: "200px", margin: "20px" }}>
          <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>Support</h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
            <li>Help & FAQ’s</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Kolom 4 - Contact Us */}
        <div style={{ width: "250px", margin: "20px" }}>
          <h3 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
            Contact Us
          </h3>
          <p style={{ margin: "8px 0" }}>📞 +62 217248867</p>
          <p style={{ margin: "8px 0" }}>✉️ admin@nda.co.id</p>
          <p style={{ margin: "8px 0", lineHeight: "1.5" }}>
            🏢 WISMA BAYUADJI unit 304 A
            <br />
            Jl. Gandaria Tengah III No.44, Jakarta Selatan, 12240
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        style={{
          backgroundColor: "#FFF8D4",
          textAlign: "center",
          padding: "20px",
          width: "100%",
          boxSizing: "border-box",
          color: "black",
        }}
      >
        <p style={{ margin: 0 }}>
          Copyright © 2025 Natadana | Powered by Natadana
        </p>
      </footer>
    </div>
  );
};

export default Footer;

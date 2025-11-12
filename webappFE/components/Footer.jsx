import React, { useEffect, useState } from "react";



const Footer = () => {
   const [isMobile, setIsMobile] = useState(false);
 
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
  return (
    <div style={{ position: "relative", width: "100%", marginTop: "-100px", fontFamily : " Roboto", color : " #0D2430" }}>
      <div className="subscribe-card">
        <div className="subscribe-left">
          <h2>
            Subscribe To Our <br /> Weekly Newsletter
          </h2>
        </div>

        <div className="subscribe-right">
          <div className="label-group" >
            <label htmlFor="email"><span style={{ background: "#00202e",
              borderRadius: "50%", 
              padding: "5px", 
              objectFit: "contain",
              color : "#CDEC76",}}>✓</span> Free Consultation</label>
            <label htmlFor="email"><span style={{ background: "#00202e",
              borderRadius: "50%", 
              padding: "5px", 
              objectFit: "contain",
              color : "#CDEC76",}}>✓</span> Free coba</label>
          </div>

          <div className="input-group">
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              disabled
            />
            <button disabled>Subscribe</button>
          </div>
        </div>

         <style>
    {`
      .subscribe-card {
        background-color: #CDEC76;
        border-radius: 20px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        padding: 40px;
        z-index: 2;
        display: flex;
        align-items: center;
        gap: 40px;
        color: #0D2430;
        width: 80%;
        margin: 0 auto;
        height : 210px;
      }

      .subscribe-left h2 {
        color: #0C2B4E;
        font-size: 40px;
        font-weight: bold;
        margin: 0;
      }

      .subscribe-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
        
      }

      .label-group {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 50px; 
      }

      .label-group label {
        color: black;
        font-weight: bold;
        font-size: 16px;
      }

      .input-group {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .input-group input {
        flex: 1;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #ccc;
        font-size: 14px;
        background-color: #fff;
      }

      .input-group button {
        background-color: #00202e;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 8px;
        font-weight: bold;
        cursor: not-allowed;
        white-space: nowrap;
      }

      @media (max-width: 1024px) {
        .subscribe-card {
          flex-direction: column;
          text-align: center;
          gap: 20px;
          padding: 30px;
          height : 270px;
        }
        .subscribe-left h2 {
          font-size: 24px;
        }
        .label-group {
          justify-content: center;
          gap: 15px;
        }
        .input-group {
          flex-direction: column;
          align-items: stretch;
        }
        .input-group input,
        .input-group button {
          width: 100%;
        }
      }

      @media (max-width: 768px) {
        .subscribe-card {
          position: relative;
          bottom: -50px;
          left: 0;
          flex-direction: column;
          align-items: stretch;
          gap: 15px;
        }

        .subscribe-left h2 {
          font-size: 20px;
          text-align: center;
        }

        .label-group {
          justify-content: space-between;
          gap: 10px;
        }

        .label-group label {
          font-size: 14px;
        }

        .input-group {
          flex-direction: column;
          align-items: stretch;
          gap: 10px;
        }

        .input-group input,
        .input-group button {
          width: 100%;
          font-size: 14px;
          padding: 12px;
        }
      }
    `}
  </style>
      </div>

      <section id="slebew"
        style={{
          background: "linear-gradient(to top, #00202e, #003f5c)",
          color: "#fff",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "flex-start",
          padding: "120px 20px 60px",
          flexWrap: "wrap",
          textAlign: "left",
          zIndex: 1,
          backgroundImage: `
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 2px),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 2px)
          `,
          backgroundSize: "100px 100px",
          
        }}
      >
        <div className="footer-col" style={{ width: "250px", margin: "20px", textAlign: isMobile ? "center" : "left" }}>
          <img
            src="/images/logoPerusahaan.png"
            alt="PT. Natadana Solusi Pratama"
            style={{
              width: isMobile ? "120px" : "80px",
              height: isMobile ? "120px" : "80px",
              marginBottom: "15px",
              marginLeft: isMobile ? "auto" : "0",
              marginRight: isMobile ? "auto" : "0",
              display: isMobile ? "block" : "inline-block",
            }}
          />
          <p style={{ fontSize: "1rem", color: "#E0E0E0", lineHeight: "1.5" }}>
            PT. Natadana Solusi Pratama
          </p>
          <p style={{ fontSize: "1rem", color: "#E0E0E0", lineHeight: "1.5" }}>
            Partnership Digital Solution
          </p>
        </div>

        <div className="footer-col" style={{ width: "200px", margin: "20px", textAlign: isMobile ? "center" : "left" }}>
          <h3 style={{ fontSize: "1.2rem", marginBottom: "10px", color: "#CDEC76" }}>
            Our Services
          </h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Digital Project</li>
            <li>Fidusia Solution</li>
            <li>Financial Solution</li>
          </ul>
        </div>

        <div className="footer-col" style={{ width: "200px", margin: "20px", textAlign: isMobile ? "center" : "left" }}>
          <h3 style={{ fontSize: "1.2rem", marginBottom: "10px", color: "#CDEC76" }}>
            Support
          </h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
            <li>Help & FAQ’s</li>
            <li>Testimonials</li>
          </ul>
        </div>

        <div className="footer-col" style={{ width: "250px", margin: "20px", textAlign: isMobile ? "center" : "left" }}>
          <h3 style={{ fontSize: "1.2rem", marginBottom: "10px", color: "#CDEC76" }}>
            Contact Us
          </h3>

          <p style={{ 
            margin: "8px 0", 
            display: "flex", 
            alignItems: "center", 
            gap: "8px",
            justifyContent: isMobile ? "center" : "flex-start",
          }}>
            <span className="material-symbols-outlined" style={{ color: "#CDEC76" }}>
              call
            </span>
            +62 217248867
          </p>

          <p style={{ 
            margin: "8px 0", 
            display: "flex", 
            alignItems: "center", 
            gap: "8px",
            justifyContent: isMobile ? "center" : "flex-start",
          }}>
            <span className="material-symbols-outlined" style={{ color: "#CDEC76" }}>
              mail
            </span>
            admin@nda.co.id
          </p>

          <p style={{ 
            margin: "8px 0", 
            display: "flex", 
            alignItems: "flex-start", 
            gap: "8px", 
            lineHeight: "1.5",
            justifyContent: isMobile ? "center" : "flex-start",
          }}>
            <span className="material-symbols-outlined" style={{ color: "#CDEC76" }}>
              location_on
            </span>
            WISMA BAYUADJI unit 304 A<br />
            Jl. Gandaria Tengah III No.44, Jakarta Selatan, 12240
          </p>
        </div>
      </section>

      <footer
        style={{
          backgroundColor: "#FFF8D4",
          textAlign: "center",
          padding: "20px",
          width: "100%",
          color: "black",
        }}
      >
        <p style={{ margin: 0 }}>Copyright © 2025 Natadana | Powered by Natadana</p>
      </footer>

      <style>
        {`
        @media (max-width: 768px) {
          section {
            justify-content: left !important;
            text-align: left !important;
          }

          .footer-col {
            width: 100% !important;
            margin: 10px 0 !important;
            max-width: 300px;
          }

          .footer-col ul {
            padding-left: 0 !important;
          }
        }
      `}
      </style>
    </div>
  );
};

export default Footer;

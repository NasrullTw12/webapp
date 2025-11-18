import React, { useEffect, useState } from "react";
import "./footer.css";

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
    
    <div>
    <div className="footer-wrapper">
  <div className="subscribe-card">
    <div className="subscribe-left">
      <h2>Subscribe To Our <br /> Weekly Newsletter</h2>
    </div>
    <div className="subscribe-right">
      <div className="label-group">
        <label htmlFor="email">
          <button
          style={{
            borderRadius: "50%",
            background: "#0d2430",
            border: "none",
            alignItems: "center",
            justifyContent: "center",
            padding: 0 ,
            color: "#fff",
            margin : isMobile ? "0" : "10px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#cdec76"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </button>
        Free Consultation
        </label>
        <label htmlFor="email">
          <button
            style={{
            borderRadius: "50%",
            background: "#0d2430",
            border: "none",
            alignItems: "center",
            justifyContent: "center",
            padding: 0 ,
            color: "#fff",
            margin : isMobile ? "2px" : "10px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#cdec76"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </button>
           24/7 Online Support
        </label>
      </div>
      <div className="input-group">
        <input id="email" type="email" placeholder="Enter your email" disabled />
      <button disabled className="subscribe-btn">
        <span>Subscribe</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="11" fill="#cdec76" stroke="none" />
          <path d="M8 12H16" stroke="black" stroke-width="2" stroke-linecap="round" />
          <path d="M12 8L16 12L12 16" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      </div>
    </div>
  </div>

  {/* Footer Section */}
  <section id="slebew">
    <div className="footer-col">
      <img
        src="https://nda.co.id/wp-content/uploads/2025/02/Logo-Natadana-2048x1837.png"
        alt="PT. Natadana Solusi Pratama"
        style={{ width: isMobile ? "120px" : "80px", height: isMobile ? "120px" : "80px" }}
      />
      <p>PT. Natadana Solusi Pratama</p>
      <p>Partnership Digital Solution</p>

       <div className="social-icons">
        <a href="#" className="icon-circle"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="icon-circle"><i className="fab fa-twitter"></i></a>
        <a href="#" className="icon-circle"><i className="fab fa-youtube"></i></a>
      </div>
    </div>

    <div className="footer-col">
      <h3>Our Services</h3>
      <ul>
        <li>Digital Project</li>
        <li>Fidusia Solution</li>
        <li>Financial Solution</li>
      </ul>
    </div>

    <div className="footer-col">
      <h3>Support</h3>
      <ul>
        <li>Privacy Policy</li>
        <li>Disclaimer</li>
        <li>Help & FAQ’s</li>
        <li>Testimonials</li>
      </ul>
    </div>

    <div className="footer-col">
      <h3>Contact Us</h3>
      <p><span className="material-symbols-outlined">call</span> +62 217248867</p>
      <p><span className="material-symbols-outlined">mail</span> admin@nda.co.id</p>
      <p>
        <span className="material-symbols-outlined">location_on</span>
        WISMA BAYUADJI unit 304 A<br />
        Jl. Gandaria Tengah III No.44, Jakarta Selatan, 12240
      </p>
    </div>
  </section>
</div>

{/* Footer copyright */}
<footer>
  <p>Copyright © 2025 Natadana | Powered by Natadana</p>
</footer>

    </div>
  );
};

export default Footer;

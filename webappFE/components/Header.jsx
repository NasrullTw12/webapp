import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Our Team", path: "/team" }
  ];

  return (
    <header style={{ backgroundColor: "#0C2B4E", padding: "10px 20px" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative"
      }}>
        {/* Logo kiri */}
        <div>
          <img src="/images/logoPerusahaan.png" alt="Logo" style={{ height: "70px" }} />
        </div>

        {/* Menu desktop */}
        <nav className="desktop-menu" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          {menuItems.map((item, index) => (
            <Link
              key={item.name}
              to={item.path}
              style={{
                color: "#fff",
                padding: "8px 20px",
                textDecoration: "none",
                fontWeight: "bold",
                borderLeft: index !== 0 ? "1px solid #ccc" : "none"
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Button desktop */}
        <div className="desktop-button">
          <button style={{
            padding: "8px 16px",
            backgroundColor: "#fff",
            color: "#0C2B4E",
            border: "none",
            borderRadius: "999px",
            cursor: "pointer",
            fontWeight: "bold"
          }}>
            Get Started
          </button>
        </div>

        {/* Hamburger icon */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span style={{ display: "block", width: "25px", height: "3px", backgroundColor: "#fff", margin: "4px 0" }}></span>
          <span style={{ display: "block", width: "25px", height: "3px", backgroundColor: "#fff", margin: "4px 0" }}></span>
          <span style={{ display: "block", width: "25px", height: "3px", backgroundColor: "#fff", margin: "4px 0" }}></span>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="mobile-menu">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)} // auto close setelah klik
              style={{
                display: "block",
                color: "#fff",
                padding: "12px 20px",
                textDecoration: "none",
                borderBottom: "1px solid #ccc"
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}

      {/* CSS media queries */}
      <style>
        {`
          .hamburger {
            display: none;
            cursor: pointer;
            flex-direction: column;
          }

          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
            .desktop-button {
              display: none !important;
            }
            .hamburger {
              display: flex !important;
            }
            .mobile-menu {
              display: flex;
              flex-direction: column;
              background-color: #0C2B4E;
              border-radius: 8px;
              margin-top: 10px;
              overflow: hidden;
            }
          }
        `}
      </style>
    </header>
  );
};

export default Header;

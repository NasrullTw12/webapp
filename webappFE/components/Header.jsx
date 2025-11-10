import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Our Team", path: "/team" }
  ];

  return (
    <header
      style={{
        backgroundColor: "#00202e",
        padding: "50px 20px",
        backgroundImage: `
          linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 2px),
          linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 2px)
        `,
        backgroundSize: "100px 100px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1350px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Logo kiri */}
        <div>
          <img src="/images/logoPerusahaan.png" alt="Logo" style={{ height: "80px" }} />
        </div>

        {/* Menu desktop */}
        <nav className="desktop-menu-wrapper">
          <div className="desktop-menu">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  color: location.pathname === item.path ? "#CDEC76" : "#fff", // <-- menu aktif merah
                  padding: "10px 80px 20px 50px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  borderLeft: index !== 0 ? "1px solid #1b191918" : "none",
                  transition: "color 0.3s",
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Button desktop */}
        <div className="desktop-button">
          <Link 
            to="/contact"
            className="get-started-button"
          >
            Get a Quote
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              stroke="#0C2B4E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              className="arrow"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
              <style>
              {`
                .get-started-button {
                    padding: 12px 25px;
                    border-radius: 25px;
                    border: none;
                    background-color: #ffff;
                    color: #0C2B4E;
                    font-weight: bold;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    width: fit-content;
                  }
                  .get-started-button:hover {
                    background-color: white;
                  }
                  .get-started-button:hover .arrow {
                    transform: translateX(5px);
                    transition: transform 0.3s ease;
                  }
              `}
          </style>
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
              onClick={() => setIsOpen(false)}
              style={{
                display: "block",
                color: location.pathname === item.path ? "#CDEC76" : "#fff", // menu aktif merah
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
          .desktop-menu-wrapper {
            display: flex;
            align-items: center;
            border-radius: 25px;
            overflow: hidden;
            border: 1px solid #383232ff;
            height: 60px;
          }

          .desktop-menu a {
            transition: color 0.2s;
          }

          .hamburger {
            display: none;
            cursor: pointer;
            flex-direction: column;
          }

          @media (max-width: 768px) {
            .desktop-menu-wrapper {
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

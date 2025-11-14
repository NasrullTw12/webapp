import React, { useState,useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
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
        padding: isMobile ? "50px 20px" : "0",
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
          padding : isMobile ? "0" : "50px",
        }}
      >
        <div>
          <img src="/images/logoPerusahaan.png" alt="Logo" style={{ height: isMobile ? "120" :"80px" }} />
        </div>

        <nav className="desktop-menu-wrapper" style={{ paddingLeft : "100px" , paddingRight : "100px"}}>
          <div className="desktop-menu">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  color: location.pathname === item.path ? "#CDEC76" : "#fff", 
                  padding : "50px",
                  textDecoration: "none",
                  borderLeft: index !== 0 ? "1px solid #1b191918" : "none",
                  transition: "color 0.3s",
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        <div className="desktop-button">
          <Link 
            to="/contact"
            className="get-started-button" 
          >
            Get a Quote
            {/* <svg
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
                <circle cx="100" cy="100" r="80" fill="#4CAF50" stroke="black" stroke-width="3"/>

            </svg> */}
              <div className="circle-arrow">&#8594;</div>
            

          </Link>
           <style>
            {`.get-started-button {
    padding: 12px 25px;
    border-radius: 25px;
    background-color: #fff;
    color: #0C2B4E;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    transition: all 0.3s ease;
    width: fit-content;
}

.get-started-button:hover {
    background-color: transparent;
    color: white;
    border: 1px solid white;
}

/* Lingkaran panah */
.circle-arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
   
    border-radius: 50%;
    background-color: black;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    transition: all 0.3s ease;
    height : 16px;
    padding-bottom : 4px
}

/* Saat hover tombol */
.get-started-button:hover .circle-arrow {
    background-color: white;
    color: black;
    border: 1px solid black;
    transform: translateX(5px);
}
`}
           </style>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span style={{ display: "block", width: "25px", height: "3px", backgroundColor: "#fff", margin: "4px 0" }}></span>
          <span style={{ display: "block", width: "25px", height: "3px", backgroundColor: "#fff", margin: "4px 0" }}></span>
          <span style={{ display: "block", width: "25px", height: "3px", backgroundColor: "#fff", margin: "4px 0" }}></span>
        </div>
      </div>

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

      <style>
        {`
          .desktop-menu-wrapper {
            display: flex;
            align-items: center;
            border-radius: 25px;
            overflow: hidden;
            border: 1px solid #FFFFFF21;
            height: 60px;
            background : #FFFFFF0A;
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

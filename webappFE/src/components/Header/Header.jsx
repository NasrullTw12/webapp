import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Our Team", path: "/team" }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header style={{ padding: isMobile ? "50px 20px" : "0" }}>
      <div className="header-container" style={{ padding: isMobile ? "0" : "50px" }}>
        {/* Logo */}
        <div>
          <img
            src="https://nda.co.id/wp-content/uploads/2025/02/Logo-Natadana-2048x1837.png"
            alt="Logo"
            style={{ height: isMobile ? "120px" : "80px" }}
          />
        </div>

        {/* Desktop Menu */}
        {!isMobile && (
          <>
            <nav className="desktop-menu-wrapper">
              <div className="desktop-menu">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={location.pathname === item.path ? "active" : ""}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="desktop-button">
              <Link to="/contact" className="get-started-button">
                Get a Quote
                <div className="circle-arrow">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="0" />
                    <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 8L16 12L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </div>
          </>
        )}

        {/* Hamburger for mobile */}
        {isMobile && (
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <nav className="mobile-menu">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={location.pathname === item.path ? "active" : ""}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;

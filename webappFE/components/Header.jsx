import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#0C2B4E", padding: "10px 20px", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", minHeight:"718 px", margin: "0 auto", position: "relative" }}>
        
        {/* Logo kiri */}
        <div>
          <img src="/images/logoPerusahaan.png" alt="Logo" style={{ height: "70px" }} />
        </div>

        {/* Menu tengah */}
        <nav style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          height: "70 px",
          display: "flex",
          backgroundColor: "#2f4e78ff",
          borderRadius: "999px",
          overflow: "hidden",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
        }}>
          {[
            { name: "Home", path: "/home" },
            { name: "About", path: "/about" },
            { name: "Contact", path: "/contact" },
            { name: "Our Team", path: "/team" }
          ].map((item, index) => (
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

        {/* Button kanan */}
        <div>
          <button style={{
            padding: "8px 16px",
            backgroundColor: "#fff",
            color: "#0C2B4E",
            border: "none",
            height:"70 px",
            borderRadius: "999px",
            cursor: "pointer",
            fontWeight: "bold"
          }}>
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

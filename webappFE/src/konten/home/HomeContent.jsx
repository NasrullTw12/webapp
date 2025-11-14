import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeContent = () => {
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    setAnimate(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    if (index < 5) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, 500);

      return () => clearTimeout(timeout);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [index]);

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <section
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          padding: isMobile ? "0px" : "50px",
          margin: 0,
          background: "linear-gradient(to bottom, #00202e, #003f5c)",
          minHeight: "500px",
          width: "100%",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
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
          <div
            style={{
              display: "inline-block",
              color: "#CDEC76",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "1px solid ",
              backgroundColor: "transparent",
              marginBottom: "20px",
              marginTop: isMobile ? "-100px" : "0px",
              marginLeft : isMobile ? "13%" : "0px",
            }}
          >
            Welcome To Natadana
          </div>
          <h1 style={{ fontSize: isMobile ? "3rem" : "4rem", margin: 0, lineHeight: 1, width : "100%", marginLeft : isMobile ? "2%" :"" , textAlign : isMobile ? "center" : "left"  }}>
            Your Trusted One-Stop Solution<br />For Fiduciary & Technology Needs
          </h1>
          <p style={{ margin: "20px 0",textAlign: isMobile ? "center" : "" }}>
            Simplifying fiduciary services and financial technology with seamless, smart, and secure solutions—built for your success
          </p>
              <Link 
                to="/contact"
                className="get-started-button1" style={{marginLeft : isMobile ? "18%" : "0",
}}
              >
                Let's Get Started
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
                .get-started-button1 {
                    padding: 12px 25px;
                    border-radius: 25px;
                    border: none;
                    background-color: #CDEC76;
                    color: #0D2430;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    width: fit-content;
                  }
                  .get-started-button1:hover {
                    background-color: white;
                  }
                  .get-started-button1:hover .arrow {
                    transform: translateX(5px);
                    transition: transform 0.3s ease;
                  }
              `}
          </style>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            position: "relative",
            opacity: animate ? 1 : 0,
            transform: animate ? "scale(1)" : "scale(0.5)",
            transition: "all 1s ease 0.5s",
            // padding: "50px",
            marginTop: isMobile ? "60px" : "0",
            paddingTop : isMobile? "" : "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              position: "absolute",
              top: isMobile ? "-10px" : "70px",
              left: "20px",
              backgroundColor: "transparent",
            }}
          >
             <button
                aria-label="Select consultation"
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: "#CDEC76",
                  marginTop : "5px",
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0C2B4E",
                  // cursor: "pointer",
                  alignSelf: isMobile ? "center" : "flex-start",
                  visibility : isMobile ? "hidden" : "visible",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0C2B4E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </button>
            <p
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                lineHeight: "1.5",
                fontSize: isMobile ? "1.2rem" : "1rem",
                visibility: isMobile ? "hidden" : "visible",
                margin: "0",
              }}
            >
              Guiding Financial Journey<br />
              To Elevating Your Business<br />
              Destiny
            </p>
          </div>

          <img
            src="/images/layar.png"
            alt="Layar"
            style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" , marginTop : isMobile? "-100px" : "10px" }}
          />

          <div
            style={{
              position: "absolute",
              marginTop : isMobile ? "30px" : "250px" ,
              right: isMobile ? "50px" : "150px",
              backgroundColor: "#CDEC76",
              color: "#0D2430",
              padding: "15px 25px",
              borderRadius: "25px",
              fontSize: isMobile ? "1rem" : "1.2rem",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              textAlign: "center",
              width: "fit-content",
              height : "fit-content",
            }}
          >
            <span style={{ fontSize: isMobile ? "2rem" : "2.5rem", display: "block", color: "#28464e", fontWeight: "bold"}}>{index}+</span>
            <p style={{ fontSize: isMobile ? "0.7rem" : "1rem", margin: 0, color: "#28464e" }}>Years of experience</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;

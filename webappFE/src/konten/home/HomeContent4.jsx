import React, { useEffect, useState } from "react";
import Card from "../../../components/Card";

const HomeContent4 = () => {
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cardStyle = {
    backgroundColor: "#FFFFFF",
    borderRadius: "15px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    padding: "30px",
    textAlign: "left",
    color: "#0D2430",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    cursor: "pointer",
    position: "relative",
  };

  const handleHover = (e, isHover) => {
    e.currentTarget.style.transform = isHover
      ? "translateY(-10px)"
      : "translateY(0)";
    e.currentTarget.style.boxShadow = isHover
      ? "0 8px 25px rgba(0,0,0,0.2)"
      : "0 4px 15px rgba(0,0,0,0.1)";
  };

  const numberStyle = {
    position: "absolute",
    top: "15px",
    left: "32px",
    fontWeight: "bold",
    color: "#88888888",
    fontSize: "4rem",
  };

  return (
    <div
      style={{
        width: "100%",
        margin: 0,
        padding: "80px 0",
        background: "#fff",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "20px",
          padding: "40px 20px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            color: "#0D2430",
            padding: "10px 20px",
            borderRadius: "20px",
            border: "2px solid #CDEC76",
            backgroundColor: "#CDEC76",
            marginBottom: "0",
          }}
        >
          Benefit
        </div>
        <p style={{ fontSize : isMobile ? "2rem" : "3.5rem", margin: "0", color: "#0D2430"}}>
          4 Game-Changing Benefits You Get When You Work With Us
        </p>
        <p
          style={{
            fontSize: isMobile ? "1rem" : "1rem",
            maxWidth: "600px",
            color: "#0D2430",
          }}
        >
          Unlock seamless solutions, expert guidance, and innovative strategies to elevate your success.
        </p>
      </div>

      <section id = "re"
        style={{
          background: "white",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, 250px)",
          gap: "30px",
          padding: "60px",
          justifyItems: "center",
          alignItems: "center",
          position: "relative",
          minHeight: "700px",
        }}
      >
        <div
          style={{
            ...cardStyle,
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s ease",
            gridColumn: "1 / 2",
            gridRow: "1 / 2",
            width: "80%",
          }}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          <div style={numberStyle}>01</div>
          <h3 style={{ marginTop: "70px" }}>Time efficiency</h3>
          <p>
            Save valuable time with our streamlined processes and expert
            solutions, allowing you to focus on what truly matters.
          </p>
        </div>

        <div
          style={{
            ...cardStyle,
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s ease 0.2s",
            gridColumn: "1 / 2",
            gridRow: "2 / 3",
            width: "80%",
          }}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          <div style={numberStyle}>02</div>
          <h3 style={{ marginTop: "70px" }}>Automation</h3>
          <p>
            Streamline tasks and increase efficiency with smart, hands-free
            solutions.
          </p>
        </div>

        <div
          style={{
            ...cardStyle,
            opacity: animate ? 1 : 0,
            transform: animate ? "scale(1)" : "scale(0.8)",
            transition: "all 1s ease 0.4s",
            gridColumn: "2 / 3",
            gridRow: "1 / span 2",
            width: "90%",
            height: "100%",
            padding: "0",
            overflow: "hidden",
          }}
        >
          <img
            src="https://nda.co.id/wp-content/uploads/2025/02/12-25.jpg"
            alt="Contoh"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
        </div>
        <div
          style={{
            ...cardStyle,
            gridColumn: "2 / 3",
            gridRow: "2 / 3",
            width: "100%",
            position: "absolute",
            top: "90%",
            transform: "translateY(-50%)",
            zIndex: 10,
            backgroundColor: "#ffffff",
            overflow: "hidden",
            height: "300px",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "700%", // 7 gambar
              animation: "slide 30s linear infinite", // lebih pelan dan halus
              alignItems: "center",
            }}
          >
            {[
              "https://nda.co.id/wp-content/uploads/2025/02/client_3.png",
              "https://nda.co.id/wp-content/uploads/2025/02/client_2.png",
              "https://nda.co.id/wp-content/uploads/2025/02/client_1.png",
              "https://nda.co.id/wp-content/uploads/2025/02/client_5.png",
              "https://nda.co.id/wp-content/uploads/2025/02/client_4.png",
              "https://nda.co.id/wp-content/uploads/2025/02/images-removebg-preview.png",
              "https://nda.co.id/wp-content/uploads/2025/02/653b7fa5b8979-removebg-preview.png",
            ].map((src, i) => (
              <div
                key={i}
                style={{
                  flex: "0 0 100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#f8fbff", // background lembut tiap slide
                  borderRadius: "20px",
                  overflow: "hidden",
                  padding: "10px",
                }}
              >
                <img
                  src={src}
                  alt={`client ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>

          <style>
            {`
              @keyframes slide {
                0% { transform: translateX(0); }
                14.28% { transform: translateX(0); }
                28.56% { transform: translateX(-100%); }
                42.84% { transform: translateX(-200%); }
                57.12% { transform: translateX(-300%); }
                71.4% { transform: translateX(-400%); }
                85.68% { transform: translateX(-500%); }
                100% { transform: translateX(-600%); }
              }
            `}
          </style>
        </div>
        <div
          style={{
            ...cardStyle,
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s ease 0.6s",
            gridColumn: "3 / 4",
            gridRow: "1 / 2",
            width: "80%",
          }}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          <div style={numberStyle}>03</div>
          <h3 style={{ marginTop: "70px" }}>Data Security</h3>
          <p>
            Protect your sensitive information with industry-leading security
            measures, ensuring privacy and compliance.
          </p>
        </div>

        {/* Card 5 */}
        <div
          style={{
            ...cardStyle,
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(30px)",
            transition: "all 1s ease 0.8s",
            gridColumn: "3 / 4",
            gridRow: "2 / 3",
            width: "80%",
          }}
          onMouseEnter={(e) => handleHover(e, true)}
          onMouseLeave={(e) => handleHover(e, false)}
        >
          <div style={numberStyle}>04</div>
          <h3 style={{ marginTop: "70px" }}>Monitoring</h3>
          <p>
            Stay in control with real-time tracking and insights, helping you
            make informed decisions with confidence.
          </p>
        </div>

      </section>

      {/* ✅ Responsive Style */}
      <style>
        {`
        @media (max-width: 768px) {
  #re {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    padding: 20px !important;
  }

  #re > div {
    width: 100% !important;
    position: relative !important;
    transform: none !important;
    top: auto !important;
    margin-bottom: 20px !important;
  }

  /* Atur urutan elemen */
  #re > div:nth-child(1) { order: 3; } /* 01 - Time efficiency */
  #re > div:nth-child(2) { order: 4; } /* 02 - Automation */
  #re > div:nth-child(3) { order: 2; } /* Gambar */
  #re > div:nth-child(5) { order: 4; } /* 03 - Data Security */
  #re > div:nth-child(6) { order: 5; } /* 04 - Monitoring */
  #re > div:nth-child(4) { order: 6; } /* 05 - Bonus Feature */
}

            
          }
        `}
      </style>
    </div>
  );
};

export default HomeContent4;

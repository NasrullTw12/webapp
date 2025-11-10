import React, { useEffect, useState, useRef } from "react";

const CardGrid = ({ cardData, isMobile }) => {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
        gap: "20px",
        padding: isMobile ? "0 20px" : "0 80px",
      }}
    >
      {cardData.map((card, idx) => (
        <div
          key={idx}
          ref={(el) => (cardRefs.current[idx] = el)}
          data-index={idx}
          style={{
            position: "relative",
            width: "100%",
            height: "400px",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            cursor: "default",
            transform: visibleCards.includes(idx) ? "translateY(0)" : "translateY(60px)",
            transition: "transform 0.6s ease",
          }}
        >
          {/* Gambar */}
          <div
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          ></div>

          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              background: "rgba(0, 0, 0, 0.5)",
              color: "#fff",
              padding: "20px",
            }}
          >
            <h3 style={{ margin: 0 }}>{card.title}</h3>

            <p
              style={{
                marginTop: "10px",
                fontSize: "0.9rem",
                opacity: visibleCards.includes(idx) ? 1 : 0,
                transform: visibleCards.includes(idx)
                  ? "translateY(0)"
                  : "translateY(20px)",
                transition: "all 0.5s ease",
                transitionDelay: visibleCards.includes(idx) ? "0.3s" : "0s",
              }}
            >
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

const HomeContent3 = () => {
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cardData = [
    {
      title: "Digital Innovation",
      image: "https://nda.co.id/wp-content/uploads/2025/02/8-23.jpg",
      description: "Innovative solutions to grow your business digitally.",
    },
    {
      title: "Fiduciary Excellence",
      image: "https://nda.co.id/wp-content/uploads/2025/02/11-22.jpg",
      description: "Reliable fiduciary services to protect your assets.",
    },
    {
      title: "Financial Growth",
      image: "https://nda.co.id/wp-content/uploads/2025/02/10-22.jpg",
      description: "Smart financial strategies to maximize growth.",
    },
  ];

  useEffect(() => {
    setAnimate(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        margin: 0,
        padding: "80px 0",
        fontFamily: "sans-serif",
        backgroundColor: "#fff",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "center" : "flex-start",
          padding: "0 80px",
          marginBottom: "80px",
          gap: "50px",
        }}
      >
        <div
          style={{
            flex: isMobile ? "1 1 100%" : "0 0 65%",
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "#333",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0)" : "translateX(-50px)",
            transition: "all 1s ease",
          }}
        >
          <div
            style={{
              display: "inline-block",
              color: "black",
              padding: "10px 20px",
              borderRadius: "20px",
              border: "2px solid #CDEC76",
              backgroundColor: "#e9f1b6ff",
            }}
          >
            Our Services
          </div>
          <p style={{ color: "black", fontSize : isMobile ? "2rem" : "3.5rem" }}>
            Fiduciary & Technology Solutions To Protect, Manage, And Grow Your
            Business
          </p>
        </div>

        <div
          style={{
            flex: isMobile ? "1 1 100%" : "0 0 35%",
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "#333",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0)" : "translateX(50px)",
            transition: "all 1s ease 0.3s",
            marginTop: isMobile ? "40px" : "150px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <p style={{ fontSize: "1.5rem", color: "black" }}>
            Innovative fiduciary and financial technology solutions designed to
            simplify management, enhance security, and drive growth.
          </p>
          <button
            style={{
              padding: "12px 25px",
              borderRadius: "25px",
              border: "none",
              backgroundColor: "#CDEC76",
              color: "#0C2B4E",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "20px",
            }}
            className="get-started-button"
          >
            Learn More
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
              style={{ transition: "transform 0.3s ease" }}
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </section>

      <CardGrid cardData={cardData} isMobile={isMobile} />
    </div>
  );
};

export default HomeContent3;

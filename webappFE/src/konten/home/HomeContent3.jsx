import React, { useEffect, useState, useRef } from "react";

const CardGrid = ({ cardData, isMobile }) => {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [activeIdx, setActiveIdx] = useState(null);
  const [desktopShowIdx, setDesktopShowIdx] = useState(null);

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
      {cardData.map((card, idx) => {
        const isOpen = (isMobile && activeIdx === idx) || (!isMobile && desktopShowIdx === idx);

        return (
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
              cursor: isMobile ? "pointer" : "default",
              transform: visibleCards.includes(idx) ? "translateY(0)" : "translateY(60px)",
              transition: "transform 0.6s ease",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              backgroundColor: "#FBF9F7",
            }}
            onClick={() => isMobile && setActiveIdx(idx)}
            onMouseEnter={() => !isMobile && setDesktopShowIdx(idx)}
            onMouseLeave={() => !isMobile && setDesktopShowIdx(null)}
          >
            <div
              style={{
                backgroundImage: `url(${card.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1,
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: isMobile ? "100%" : "80%",
                background: "#0D2430",
                borderRadius: "0 25px 0px 15px",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "12px",
                color: "#F7FFDF",
              }}
            >
              <div style={{ display: "flex", alignItems: isMobile ? "flex-start" : "center", gap: "12px", width: "100%", justifyContent: isMobile ? "flex-start" : "flex-start" }}>
                {/* mobile: ak3 left of icon */}
                {isMobile && (
                  <img
                    src="https://nda.co.id/wp-content/uploads/2025/02/ak3.png"
                    alt="ak3"
                    style={{
                      width: "40px",
                      height: "40px",
                      objectFit: "cover",
                      borderRadius: "6px",
                      opacity: isOpen ? 1 : 0.5,
                      background: isOpen ? "transparent" : "transparent",
                      flexShrink: 0,
                      marginTop: "8px",
                    }}
                  />
                )}

                {/* desktop: icon left of title */}
                {!isMobile && (
                  <img
                    src={card.icon}
                    alt={`${card.title} icon`}
                    style={{
                     marginBottom: "10px",
                      width: "60px",
                      height: "60px",
                      background: "#CDEC76",
                      borderRadius: "50%", 
                      padding: "10px", 
                      objectFit: "contain",
                      borderRadius: "50px",
                      flexShrink: 0,
                      background: isOpen ? "#CDEC76" : "#CDEC76",
                      // opacity: isOpen ? 1 : 0.6,
                    }}
                  />
                )}

                <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "center" : "center", gap: "8px" }}>
                  {isMobile && (
                    <img
                      src={card.icon}
                      alt={`${card.title} icon`}
                      style={{
                       marginBottom: "10px",
                        width: "60px",
                        height: "60px",
                        background: "#CDEC76",
                        borderRadius: "50%", 
                        padding: "5px", 
                        objectFit: "contain" ,
                        flexShrink: 0,
                        // opacity: isOpen ? 1 : 0.6,
                      }}
                    />
                  )}

                  <h3
                    style={{
                      margin: 0,
                      transition: "transform 0.4s cubic-bezier(.4,2,.3,1)",
                      transform: isOpen ? "translateY(-10px)" : "translateY(0)",
                      zIndex: 3,
                      textAlign: isMobile ? "center" : "left",
                      fontSize: isMobile ? "1.5rem" : "1.5rem",
                      cursor: isMobile ? "pointer" : "default",
                    }}
                    onClick={(e) => {
                      if (isMobile) {
                        e.stopPropagation();
                        setActiveIdx(activeIdx === idx ? null : idx);
                      }
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* desktop: ak3 to the right of title */}
                  {!isMobile && (
                    <img
                      src="https://nda.co.id/wp-content/uploads/2025/02/ak3.png"
                      alt="ak3"
                      style={{
                        width: "40px",
                        height: "40px",
                        objectFit: "cover",
                        borderRadius: "6px",
                        marginLeft: "12px",
                        opacity: isOpen ? 1 : 0.5,
                        background: isOpen ? "transparent" : "transparent",
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Divider line */}
              {isOpen && (
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#F7FFDF",
                    opacity: 0.3,
                    margin: "12px 0",
                  }}
                />
              )}

              {isMobile ? (
                <div
                  style={{
                    maxHeight: activeIdx === idx ? "120px" : "0px",
                    opacity: activeIdx === idx ? 1 : 0,
                    overflow: "hidden",
                    transition: activeIdx === idx ? "max-height 0.4s cubic-bezier(.4,2,.3,1), opacity 0.3s" : "max-height 0.4s cubic-bezier(.4,2,.3,1)",
                    width: "100%",
                    marginTop: activeIdx === idx ? "10px" : "0px",
                    textAlign: "center",
                    pointerEvents: activeIdx === idx ? "auto" : "none",
                    backgroundColor: "#0D2430",
                    cursor: "pointer",
                  }}
                  onClick={(e) => { e.stopPropagation(); setActiveIdx(null); }}
                >
                  <p style={{ margin: 0, fontSize: "1rem", transition: "opacity 0.3s", opacity: activeIdx === idx ? 1 : 0, backgroundColor: "#0D2430" }}>{card.description}</p>
                </div>
              ) : (
                <div
                  style={{
                    maxHeight: desktopShowIdx === idx ? "120px" : "0px",
                    opacity: desktopShowIdx === idx ? 1 : 0,
                    overflow: "hidden",
                    transition: desktopShowIdx === idx ? "max-height 0.4s cubic-bezier(.4,2,.3,1), opacity 0.3s" : "max-height 0.4s cubic-bezier(.4,2,.3,1)",
                    width: "100%",
                    marginTop: desktopShowIdx === idx ? "10px" : "0px",
                    textAlign: "center",
                    background: "transparent",
                    pointerEvents: desktopShowIdx === idx ? "auto" : "none",
                  }}
                >
                  <p style={{ margin: 0, fontSize: "1rem", transition: "opacity 0.3s", opacity: desktopShowIdx === idx ? 1 : 0 }}>{card.description}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
};

const HomeContent3 = () => {
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cardData = [
    {
      title: "Data Security",
      image: "https://nda.co.id/wp-content/uploads/2025/02/8-23.jpg",
      icon: "https://nda.co.id/wp-content/uploads/2025/02/19.png",
      description: "Data is stored on a secure server that can be accessed any time.",
    },
    {
      title: "Financial Solution",
      image: "https://nda.co.id/wp-content/uploads/2025/02/11-22.jpg",
      icon: "https://nda.co.id/wp-content/uploads/2025/02/20.png",
      description: "Partnership with Financial institutions to develop new market",
    },
    {
      title: "Monitoring Technology",
      image: "https://nda.co.id/wp-content/uploads/2025/02/10-22.jpg",
      icon: "https://nda.co.id/wp-content/uploads/2025/02/21.png",
      description: "The entire data recording process can be monitored by clients with real-time data",
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
        marginTop : isMobile ? "-220px" : "-80px",
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
          padding: isMobile ? "0 10px" : "0 80px",
          marginBottom: "80px",
          gap: "50px",
        }}
      >
        <div
          style={{
            flex: isMobile ? "1 1 60%" : "0 0 60%",
            fontSize: "1.1rem",
            lineHeight: 1.8,
            color: "#333",
            opacity: animate ? 1 : 0,
            transform: animate ? "translateX(0)" : "translateX(-50px)",
            transition: "all 1s ease",
            textAlign: isMobile ? "center" : "left", 
            display: "flex",
            flexDirection: "column",
            alignItems: isMobile ? "center" : "flex-start", 
          }}
        >
          <div
            style={{
              display: "inline-block",
              color: "black",
              padding: "1px 30px",
              borderRadius: "20px",
              border: "2px solid #d2d3d2f5",
              backgroundColor: "#F7FFDF",
              color : "#00202e",
             fontSize : "1rem",            
            }}
          >
            Our Services
          </div>
          <p
            style={{
              color: "black",
              fontWeight : "bold",
              fontSize: isMobile ? "2rem" : "3rem",
              lineHeight: "1.2",
              marginTop: "25px",
              paddingLeft : "2px",
              textAlign: isMobile ? "center" : "left", 
            }}
          >
            Fiduciary & Technology <br />
            Solutions To Protect, Manage,<br />And Grow Your Business
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
            marginTop: isMobile ? "-15px" : "70px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <p style={{ fontSize: "1rem", color: "black",marginBottom : "40px" }}>
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
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginTop: isMobile? "-5px" : "20px",
              height: "50px",
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

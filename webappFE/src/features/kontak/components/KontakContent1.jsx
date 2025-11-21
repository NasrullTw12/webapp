import React, { useEffect, useState, useRef } from "react";
import styles from "./KontakContent1.module.css";

const KontakContent1 = () => {
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    // Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true); // trigger animasi saat muncul di viewport
          observer.disconnect(); // stop observe setelah animasi jalan
        }
      },
      { threshold: 0.3 } // 30% elemen terlihat sudah trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (observer) observer.disconnect();
    };
  }, []);

  const ruangData = [
    {
      name: "Call Us Now",
      icon: "https://nda.co.id/wp-content/uploads/2025/02/40.png",
      description: "+62 217248867",
    },
    {
      name: "Email Address",
      icon: "https://nda.co.id/wp-content/uploads/2025/02/41.png",
      description: "admin@nda.co.id",
    },
    {
      name: "Our Location",
      icon: "https://nda.co.id/wp-content/uploads/2025/02/42.png",
      description:
        "WISMA BAYUADJI unit 304 A Jl. Gandaria Tengah III No.44, Jakarta Selatan, 12240",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${
        isMobile ? styles.sectionMobile : styles.sectionDesktop
      }`}
      style={{ gap: "20px" }}
    >
      <div
        className={`${styles.leftCard} ${
          isMobile ? styles.leftCardMobile : styles.leftCardDesktop
        } ${animate ? styles.leftCardAnimate : ""}`}
      >
        <img
          src="https://nda.co.id/wp-content/uploads/2025/02/28-19.jpg"
          alt="Left Card"
          className={styles.leftCardImage}
        />
        <div className={styles.gradientOverlay}></div>
        <div className={styles.textOverlay}>
          Don't Hesitate To <br />
          Contact Natadana
      <div className={styles.textOverlaySub}>
                        <div className={styles.textWrapper}>
                          Start To Chat
                        </div>
        
                        <div className={styles.arrowWrapper}>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ color: "inherit" }}
                          >
                            <circle cx="12" cy="12" r="11" fill="currentcolor" />
                            <path d="M8 12H16" stroke="#0d2430" strokeWidth="2" strokeLinecap="round" />
                            <path d="M12 8L16 12L12 16" stroke="#0d2430" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
        
                        </div>
                      </div>
        </div>
      </div>
      <div
        className={`${styles.rightContainer} ${
          isMobile ? styles.rightContainerMobile : styles.rightContainerDesktop
        } ${animate ? styles.rightContainerAnimate : ""}`}
      >
        {ruangData.map((ruang, index) => (
          <div
            key={index}
            className={`${styles.contactCard} 
              ${isMobile ? styles.contactCardMobile : ""} 
              ${index === 0 ? styles.leftMostCard : ""}
              ${index === 1 ? styles.middleCardDivider : ""}`}
          >
            <img
              src={ruang.icon}
              alt={`${ruang.name} icon`}
              className={styles.contactIcon}
            />
            <div className={styles.contactTitle}>{ruang.name}</div>
             {(index === 0 || index === 1) && (
                <div className={styles.arrowWrapperBottom}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="11" fill="#cdec76" stroke="none" />
                    <path d="M8 12H16" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 8L16 12L12 16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            <div
              className={`${styles.description} 
                ${isMobile ? styles.contactCardMobile : ""} 
                ${index === 0 ? styles.contactDescription : ""}
                ${index === 1 ? styles.contactDescription : ""}
                ${index === 2 ? styles.contactDescription1 : ""}`}
              onClick={() => {
                if (index === 0) {
                  // Phone
                  window.location.href = `tel:${ruang.description}`;
                } else if (index === 1) {
                  // Email
                  window.location.href = `mailto:${ruang.description}`;
                } else if (index === 2) {
                  // Address → buka Google Maps
                  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    ruang.description
                  )}`;
                  window.open(mapsUrl, "_blank");
                }
              }}
              style={{ cursor: "pointer" }} // tanda bisa diklik
            >
              {ruang.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KontakContent1;

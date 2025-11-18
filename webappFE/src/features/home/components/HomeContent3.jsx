import React, { useEffect, useState } from "react";
import CardGrid from "./CardGrid";
import styles from "./HomeContent3.module.css";

const HomeContent3 = () => {
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cardData = [
    {
      title: "Data             Security",
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
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${styles.wrapper} ${
        isMobile ? styles.mobileWrapper : styles.desktopWrapper
      }`}
    >
      <section
        className={`${styles.top} ${
          isMobile ? styles.mobileTop : styles.desktopTop
        }`}
      >
        <div
          className={`${animate ? styles.leftTextVisible : styles.leftText}`}
        >
          <div className={styles.titleTag}>Our Services</div>

          <p
            className={`${styles.bigTitle} ${
              isMobile ? styles.textCenter : styles.textLeft
            }`}
            style={{ fontSize: isMobile ? "2rem" : "3rem" }}
          >
            Fiduciary & Technology <br />
            Solutions To Protect, Manage,
            And Grow Your Business
          </p>
        </div>

        <div
          className={`${animate ? styles.rightTextVisible : styles.rightText}`}
        >
          <p style={{ fontSize: "1rem", color: "black", marginBottom: "40px", textAlign: isMobile? "center" : "auto", marginTop: isMobile? "-40px" : "140px" , with:"50%"}}>
            Innovative fiduciary and financial technology solutions designed to
            simplify management, enhance security, and drive growth.
          </p>

          <button className={styles.button}>
            Learn More
             <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="11" fill="#0d2430" stroke="none" />
                <path d="M8 12H16" stroke="#cdec76" strokeWidth="2" strokeLinecap="round" />
                <path d="M12 8L16 12L12 16" stroke="#cdec76" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
          </button>
        </div>
      </section>

      <CardGrid cardData={cardData} isMobile={isMobile} />
    </div>
  );
};

export default HomeContent3;

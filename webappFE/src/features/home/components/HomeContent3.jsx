import React, { useEffect, useState } from "react";
import CardGrid from "./CardGrid";
import { Link, useLocation } from "react-router-dom";
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
          >
            Fiduciary & Technology <br />
            Solutions To Protect, Manage, <br />
            And Grow Your Business
          </p>
        </div>

        <div
          className={`${animate ? styles.rightTextVisible : styles.rightText}`}
        >
          <p style={{ fontSize: "1rem", color: "black", marginBottom: "40px", textAlign: isMobile? "center" : "left", marginTop: isMobile? "-40px" : "140px" , with:"50%"}}>
            Innovative fiduciary and financial technology solutions <br /> designed to
            simplify management, enhance security, and drive <br /> growth.
          </p>
          <div className="desktop-button20">
              <Link to="/contact" className={styles["get-started-button20"]}>
                Learn More
                <div className={styles["circle-arrow20"]}>
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
        </div>
      </section>

      <CardGrid cardData={cardData} isMobile={isMobile} />
    </div>
  );
};

export default HomeContent3;

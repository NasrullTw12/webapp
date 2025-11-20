import React, { useEffect, useState } from "react";
import styles from "./HomeContent4.module.css";

const HomeContent4 = () => {
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => setAnimate(true), []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const clients = [
    "https://nda.co.id/wp-content/uploads/2025/02/client_3.png",
    "https://nda.co.id/wp-content/uploads/2025/02/client_2.png",
    "https://nda.co.id/wp-content/uploads/2025/02/client_1.png",
    "https://nda.co.id/wp-content/uploads/2025/02/client_5.png",
    "https://nda.co.id/wp-content/uploads/2025/02/client_4.png",
    "https://nda.co.id/wp-content/uploads/2025/02/images-removebg-preview.png",
    "https://nda.co.id/wp-content/uploads/2025/02/653b7fa5b8979-removebg-preview.png"
  ];

  return (
    <div className={styles.wrapper}>
      
      {/* TOP SECTION */}
      <div className={styles.topSection}>
        <div className={styles.tag}>Benefit</div>

        <p
          className={`${styles.bigTitle} ${
            isMobile ? styles.bigTitleMobile : styles.bigTitleDesktop
          }`}
        >
          4 Game-Changing Benefits You Get When You Work With Us
        </p>

        <p className={styles.subText}>
          Unlock seamless solutions, expert guidance, and innovative strategies to elevate your success.
        </p>
      </div>

      {/* GRID */}
      <section className={styles.grid}>

        {/* CARD 1 */}
        <div
          className={`
            ${styles.card} 
            ${styles.fadeIn} 
            ${animate ? styles.fadeInVisible : ""} 
            order1
          `}
        >
          <div className={styles.number}>01</div>
          <h3 style={{ marginTop: "70px" }}>Time efficiency</h3>
          <p>Save valuable time with our streamlined processes and expert solutions, allowing you to focus on what truly matters.</p>
        </div>

        {/* CARD 2 */}
        <div
          className={`
            ${styles.card} 
            ${styles.fadeIn} 
            ${styles.fadeInDelay2}
            ${animate ? styles.fadeInVisible : ""} 
            order2
          `}
        >
          <div className={styles.number}>02</div>
          <h3 style={{ marginTop: "70px" }}>Automation</h3>
          <p>Streamline tasks and increase efficiency with smart, hands-free solutions.</p>
        </div>

        <div
          className={`
            ${styles.bigImageWrapper}
            ${styles.fadeIn}
            ${styles.fadeInDelay4}
            ${animate ? styles.fadeInVisible : ""}
            orderImage
          `}
        >
          <img src="https://nda.co.id/wp-content/uploads/2025/02/12-25.jpg" alt="Main" />
        </div>

     <div className={`${styles.sliderContainer} orderSlide`}>
        <div className={styles.sliderTrack}>
          {[...clients, ...clients].map((src, i) => (
            <div key={i} className={styles.slide}>
              <div className={styles.imgBox}>
                <img src={src} alt={`client ${i}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

        {/* CARD 3 */}
        <div
          className={`
            ${styles.card} 
            ${styles.fadeIn} 
            ${styles.fadeInDelay6}
            ${animate ? styles.fadeInVisible : ""} 
            order3
          `}
        >
          <div className={styles.number}>03</div>
          <h3 style={{ marginTop: "70px" }}>Data Security</h3>
          <p>Protect your sensitive information with industry-leading security measures, ensuring privacy and compliance.</p>
        </div>

        {/* CARD 4 */}
        <div
          className={`
            ${styles.card} 
            ${styles.fadeIn} 
            ${styles.fadeInDelay8}
            ${animate ? styles.fadeInVisible : ""} 
            order4
          `}
        >
          <div className={styles.number}>04</div>
          <h3 style={{ marginTop: "70px" }}>Monitoring</h3>
          <p>Stay in control with real-time tracking and insights, helping you make informed decisions with confidence.</p>
        </div>

      </section>
    </div>
  );
};

export default HomeContent4;

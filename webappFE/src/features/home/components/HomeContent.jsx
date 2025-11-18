import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./HomeContent.module.css";

const HomeContent = () => {
  const [animate, setAnimate] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const target = 5; // angka target

  useEffect(() => {
    setAnimate(true);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Counter naik dari 0 -> target setiap scroll masuk section
  useEffect(() => {
    let interval = null;

    const startCounter = () => {
      let start = 0;
      const duration = 2000; // 2 detik
      const stepTime = Math.ceil(duration / target);

      setCount(0); // reset ke 0 setiap kali start
      interval = setInterval(() => {
        start += 1;
        if (start > target) {
          clearInterval(interval);
          interval = null;
          return;
        }
        setCount(start);
      }, stepTime);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounter();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.container}>
      <section className={`${styles.section} ${isMobile ? styles.sectionMobile : ""}`}>
        <div className={`${styles.left} ${animate ? styles.animate : ""}`}>
          <div className={`${styles.badge} ${isMobile ? styles.badgeMobile : ""}`}>Welcome To Natadana</div>
          <h1 className={`${styles.heading} ${isMobile ? styles.headingMobile : ""}`}>
            Your Trusted One-Stop Solution<br />For Fiduciary & Technology Needs
          </h1>
          <p className={`${styles.text} ${isMobile ? styles.textMobile : ""}`}>
            Simplifying fiduciary services and financial technology with seamless, smart, and secure solutions—built for your success
          </p>
          <Link to="/contact" className={styles.getStarted}>
            Let's Get Started
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
          </Link>
        </div>

        <div className={`${styles.right} ${animate ? styles.animate : ""} ${isMobile ? styles.rightMobile : ""}`}>
           <div className={`${styles.infoBlock} ${isMobile ? styles.infoBlockMobile : ""}`}>
            <button className={`${styles.infoButton} ${isMobile ? styles.infoButtonMobile : ""}`} aria-label="Select consultation">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0C2B4E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </button>
            <p className={`${styles.infoText} ${isMobile ? styles.infoTextMobile : ""}`}>
              Guiding Financial Journey<br />To Elevating Your Business<br />Destiny
            </p>
          </div>
          <img
            src="https://nda.co.id/wp-content/uploads/2025/02/Screenshot_2025-02-18_at_20.19.44-removebg-preview.png"
            alt="Layar"
            className={`${styles.image} ${isMobile ? styles.imageMobile : ""}`}
          />

          <div className={`${styles.experience} ${isMobile ? styles.experienceMobile : ""}`} ref={counterRef}>
            <span className={`${styles.experienceNumber} ${isMobile ? styles.experienceNumberMobile : ""}`}>
              {count}+
            </span>
            <p className={`${styles.experienceText} ${isMobile ? styles.experienceTextMobile : ""}`}>Years of experience</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;

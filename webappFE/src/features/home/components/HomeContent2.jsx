import React, { useEffect, useState, useRef } from "react";
import styles from "./HomeContent2.module.css";

const HomeContent2 = () => {
  const [animate, setAnimate] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const targets = [10, 13, 98, 15];
  const descriptions = [
    "Happy Customers",
    "Awards Winning",
    "Striving for Customer Satisfaction is Top Priority",
    "Completed Project",
  ];
  const icons = ["+", "+", "%", "+"];

  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Trigger animation for top section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.disconnect(); // hanya jalan sekali
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Function to run stats counter
  const runCounter = () => {
    const steps = 60;
    const duration = 1500;
    const intervalTime = duration / steps;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      setCounts(targets.map((target) => Math.min(Math.ceil((target * step) / steps), target)));

      if (step >= steps) clearInterval(interval);
    }, intervalTime);
  };

  // Intersection Observer untuk stats section (looping)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCounter();
          } else {
            // Reset counts supaya animasi bisa jalan lagi
            setCounts([0, 0, 0, 0]);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.container} ref={sectionRef}>
      <section className={isMobile ? styles.sectionGridMobile : styles.sectionGrid}>
        <div className={isMobile ? styles.rightColumnWrapperMobile : styles.rightColumnWrapper}>
          {/* About Us */}
          <div className={`${styles.aboutUs} ${animate ? styles.aboutUsAnimate : ""} ${isMobile ? styles.aboutUsMobile : ""}`}>
            <div className={styles.aboutUsTag}>About Us</div>
            <h3 className={isMobile ? styles.aboutTitleMobile : styles.aboutTitle}>
              The Best Digital Consultant In Town
            </h3>
          </div>

          {/* Company Mission */}
          <div
            className={`${isMobile ? styles.companyMissionMobile : styles.companyMission} ${animate ? styles.companyMissionAnimate : ""}`}
            style={{ flexDirection: isMobile ? "column" : "row" }}
          >
            <div className={isMobile ? styles.missionIconTitleMobile : styles.missionIconTitle}>
              <img
                src="https://nda.co.id/wp-content/uploads/2025/02/17-1.png"
                alt="company mission"
                className={styles.missionIcon}
              />
              Company Mission
            </div>
            <p className={isMobile ? styles.missionTextMobile : styles.missionText}>
              To be the preferred partner of the financial industry in implementing digital processes to develop our partners' businesses.
            </p>
          </div>
        </div>

        {/* Company Vision */}
        <div className={`${isMobile ? styles.companyVisionMobile : styles.companyVision} ${animate ? styles.companyVisionAnimate : ""}`}>
          <div className={isMobile ? styles.visionIconTitleMobile : styles.visionIconTitle}>
            <img
              src="https://nda.co.id/wp-content/uploads/2025/02/18.png"
              alt="company vision"
              className={styles.visionIcon}
            />
            Company Vision
          </div>
          <p className={isMobile ? styles.visionTextMobile : styles.visionText}>
            Providing unlimited access to comprehensive and quality resources in the digital space for the financial industry and other industries.
          </p>
        </div>

        {/* Image */}
        <div className={isMobile ? styles.imageWrapperMobile : styles.imageWrapper}>
          <img
            src="https://nda.co.id/wp-content/uploads/2025/02/7-29.jpg"
            alt="gambar section"
            className={`${styles.image} ${isMobile ? styles.imageMobile : styles.imageDesktop}`}
          />
        </div>

        {/* Learn More Button */}
        <div className={`${isMobile ? styles.learnMoreButtonMobile : styles.learnMoreButton} ${animate ? styles.learnMoreButtonAnimate : ""}`}>
          {/* Mobile */}
          {isMobile ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  maxWidth: "320px",
                  gap: "16px",
                  marginTop: "10px",
                }}
              >
                <button
                  aria-label="Select consultation left"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#CDEC76",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 0,
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0d2430"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </button>
              </div>

              <div
                style={{
                  color: "#fff",
                  fontSize: "0.95rem",
                  maxWidth: "100%",
                  textAlign: "center",
                  padding: "0 8px",
                  marginLeft: "30px",
                  marginTop: "-50px",
                }}
              >
                Join us to achieve sustainable growth and reach your financial goals with the right strategies.
              </div>

              <button
                style={{
                  padding: "8px 12px",
                  borderRadius: "20px",
                  border: "none",
                  backgroundColor: "#CDEC76",
                  color: "#00202e",
                  fontSize: "0.9rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  width: "auto",
                  minWidth: "200px",
                  justifyContent: "center",
                  fontWeight: "600",
                }}
              >
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
          ) : (
            // Desktop
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "10px",
                width: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  gap: "12px",
                  width: "auto",
                  paddingLeft: "21px",
                }}
              >
                <button
                  aria-label="Select consultation"
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    background: "#CDEC76",
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 0 ,
                    color: "#fff",
                    alignSelf: "flex-start",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0d2430"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </button>

                <div
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    maxWidth: "500px",
                    textAlign: "left",
                    marginRight: "30px",
                  }}
                >
                  Join us to achieve sustainable growth and reach <br /> your financial goals with the right strategies.
                </div>
              </div>

              <button
                style={{
                  padding: "12px 15px",
                  borderRadius: "25px",
                  border: "none",
                  backgroundColor: "#CDEC76",
                  color: "#0D2430",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  width: "150px",
                  justifyContent: "center",
                  fontWeight: "normal",
                }}
              >
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
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section
        id="slebew"
        ref={statsRef}
        className={styles.statsSection}
        style={{ gap: isMobile ? "2px" : "60px" }}
      >
        {counts.map((count, index) => (
          <div key={index} className={styles.statsCard}>
            <div className={styles.statsProgressTop}>
              <div className={styles.statsProgressBar1}></div>
              <div className={styles.statsProgressBar2}></div>
            </div>
            <div className={styles.statsCount}>
              <span>{count}</span>
              <span className={styles.statsIcon}>{icons[index]}</span>
            </div>
            <div className={styles.statsDescription}>{descriptions[index]}</div>
          </div>
        ))}
      </section>

      <p style={{ fontSize: "4rem", margin: "0", color: "white", backgroundColor: "white" }}>
        Cihuyyy
      </p>
    </div>
  );
};

export default HomeContent2;

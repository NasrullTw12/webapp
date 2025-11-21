import React, { useEffect, useState, useRef } from "react";
import styles from "./AboutContent2.module.css";

const AboutContent2 = () => {
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    const observerOptions = { threshold: 0.2 };

    const leftObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimateLeft(true);
          leftObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const rightObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimateRight(true);
          rightObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (leftRef.current) leftObserver.observe(leftRef.current);
    if (rightRef.current) rightObserver.observe(rightRef.current);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (leftRef.current) leftObserver.unobserve(leftRef.current);
      if (rightRef.current) rightObserver.unobserve(rightRef.current);
    };
  }, []);

  const ruangData = [
    {
      name: "Digital Project",
      icon: "https://nda.co.id/wp-content/uploads/2025/02/14.png",
      description:
        "Innovative solutions to bring your ideas to life.",
    },
    {
      name: "Fidusia Solution",
      icon: "https://nda.co.id/wp-content/uploads/2025/02/15.png",
      description:
        "Trusted fiduciary services for secure financial management.",
    },
    {
      name: "Finance Solution",
      icon: "https://nda.co.id/wp-content/uploads/2025/02/16.png",
      description:
        "Smart financial tools to help you grow and protect your wealth.",
    },
  ];

  return (
    <section
      className={`${styles.section} ${
        isMobile ? styles.sectionMobile : styles.sectionDesktop
      }`}
      style={{ gap: "20px" }}
    >
      <div
        ref={leftRef}
        className={`${styles.leftCard} ${
          isMobile ? styles.leftCardMobile : styles.leftCardDesktop
        } ${animateLeft ? styles.leftCardAnimate : ""}`}
      >
        <img
          src="https://nda.co.id/wp-content/uploads/2025/02/28-19.jpg"
          alt="Left Card"
          className={styles.leftCardImage}
        />
        <div className={styles.gradientOverlay}></div>
         <div className={styles.textOverlay}>
            How Does It Work?
                <div className={styles.textOverlaySub}>
                  <div className={styles.textWrapper}>
                    Learn More
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
        ref={rightRef}
        className={`${styles.rightContainer} ${
          isMobile ? styles.rightContainerMobile : styles.rightContainerDesktop
        } ${animateRight ? styles.rightContainerAnimate : ""}`}
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
            <div className={styles.contactDescription}>{ruang.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutContent2;

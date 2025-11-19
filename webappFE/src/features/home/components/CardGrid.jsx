import React, { useEffect, useState, useRef } from "react";
import styles from "./CardGrid.module.css";

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
      className={`${styles.grid} ${
        isMobile ? styles.mobileGrid : styles.desktopGrid
      }`}
    >
      {cardData.map((card, idx) => {
        const isOpen =
          (isMobile && activeIdx === idx) ||
          (!isMobile && desktopShowIdx === idx);

        return (
          <div
            key={idx}
            ref={(el) => (cardRefs.current[idx] = el)}
            data-index={idx}
            className={`${styles.card} 
              ${isMobile ? styles.mobileCard : ""} 
              ${visibleCards.includes(idx) ? styles.visible : styles.hidden}
            `}
            onClick={() => isMobile && setActiveIdx(idx)}
            onMouseEnter={() => !isMobile && setDesktopShowIdx(idx)}
            onMouseLeave={() => !isMobile && setDesktopShowIdx(null)}
          >
            <div
              className={styles.bg}
              style={{ backgroundImage: `url(${card.image})` }}
            />

            <div
              className={`${styles.cardContent} ${
                isMobile ? styles.mobileContent : styles.desktopContent
              }`}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px", width: "100%" }}>
                
                {isMobile && (
                  <img
                    src="https://nda.co.id/wp-content/uploads/2025/02/ak3.png"
                    className={`${styles.ak3} ${isOpen ? styles.ak3Open : ""}`}
                    alt="ak3"
                  />
                )}

                {!isMobile && (
                  <img
                    src={card.icon}
                    alt=""
                    className={styles.iconCircle}
                  />
                )}

                <h3
                  className={`${styles.title} ${
                    isOpen ? styles.titleOpen : ""
                  }`}
                  onClick={(e) => {
                    if (isMobile) {
                      e.stopPropagation();
                      setActiveIdx(activeIdx === idx ? null : idx);
                    }
                  }}
                >
                  {card.title}
                </h3>

                {!isMobile && (
                  <img
                    src="https://nda.co.id/wp-content/uploads/2025/02/ak3.png"
                    className={`${styles.ak3} ${isOpen ? styles.ak3Open : ""}`}
                    alt="ak3"
                  />
                )}
              </div>

              {isOpen && <div className={styles.divider} />}

              <div
                className={`${styles.desc} 
                  ${isOpen ? styles.visibleDesc : styles.hiddenDesc}
                  ${isMobile ? styles.mobileDesc : styles.desktopDesc}
                `}
                onClick={(e) => {
                  if (isMobile) {
                    e.stopPropagation();
                    setActiveIdx(null);
                  }
                }}
              >
                <p style={{ margin: 0 }}>{card.description}</p>
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
          </div>
        );
      })}
    </section>
  );
};

export default CardGrid;

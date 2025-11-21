// src/features/ourteam/components/OurTeamContent.jsx
import React, { useEffect, useState } from "react";
import styles from "./OurTeamContent.module.css";
import { TeamCard } from ".";
import Marquee from "@components/Marquee/Marquee";

const marqueeItems = [
  '<i class="fa-solid fa-star" style="color:white;"></i> Smart Finance <i class="fa-solid fa-star" style="color:white;"></i>',
  '<i class="fa-solid fa-star" style="color:white;"></i> Financial Success <i class="fa-solid fa-star" style="color:white;"></i>',
  '<i class="fa-solid fa-star" style="color:white;"></i> Strategic Solution <i class="fa-solid fa-star" style="color:white;"></i>'
];

const teamMembers = [
  {
    name: "Dwi Adhitya Putera",
    title: "Direktur Utama",
    image: "https://nda.co.id/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-25-at-12.15.26-scaled.jpeg",
  },
  {
    name: "Hudan Maulana",
    title: "Chief Technology Officer",
    image: "https://nda.co.id/wp-content/uploads/2025/02/1714114789670.jpg",
  },
];

const OurTeamContent = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>

      {/* SECTION 1 — SAMA FORMAT KONTAK */}
      <section className={styles["kontak-container"]}>
        <div className={styles["kontak-header"]}>Our Team</div>

        <p className={styles["kontak-title"]}>
          Meet Our Members
        </p>

        <p className={styles["kontak-subtitle"]}>
          A Team of Experts Committed to Driving Your Success Forward
        </p>
      </section>

      {/* SECTION 2 — MARQUEE */}
      <section className={styles["marquee-section"]}>
        <Marquee items={marqueeItems} speed={2} />
      </section>

      {/* SECTION 3 — TEAM CARDS */}
      <section className={styles.teamSection}>
        <div className={styles.cardsWrapper}>
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
        <div className={styles.tambahan}>
        </div>
      </section>

    </div>
  );
};

export default OurTeamContent;

// src/features/ourteam/components/OurTeamContent.jsx
import React, { useEffect, useState } from "react";
import styles from "./OurTeamContent.module.css";
import { TeamCard} from ".";
import Marquee from "@components/Marquee/Marquee"; // jika default export


// Data bisa dipindah ke file terpisah jika dibutuhkan
  const marqueeItems = [
      '<i class="fa-solid fa-star" style="color:white;"></i> Smart Finance <i class="fa-solid fa-star" style="color:white;"></i>',
      '<i class="fa-solid fa-star" style="color:white;"></i> Financial Success <i class="fa-solid fa-star" style="color:white;"></i>',
      '<i class="fa-solid fa-star" style="color:white;"></i> Strategic Solution <i class="fa-solid fa-star" style="color:white;"></i>'
    ];

const teamMembers = [
  {
    name: "Dwi Adhitya Putera",
    title: "Direktur Utama",
    image:
      "https://nda.co.id/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-25-at-12.15.26-scaled.jpeg",
  },
  {
    name: "Hudan Maulana",
    title: "Chief Technology Officer",
    image:
      "https://nda.co.id/wp-content/uploads/2025/02/1714114789670.jpg",
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
      {/* Header Section */}
      <section className={styles.container}>
        <div className={styles.title}>Our Team</div>
        <h1 className={isMobile ? styles.headingMobile : styles.heading}>
          Meet Our Members
        </h1>
        <p className={styles.subtitle}>
          A Team of Experts Committed to Driving Your Success Forward
        </p>
      </section>

      {/* Marquee Section */}
      <section>
        <Marquee items={marqueeItems} speed={2} />
      </section>

      {/* Team Cards Section */}
      <section className={styles.teamSection}>
        <div className={styles.cardsWrapper}>
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeamContent;

import React from "react";
import Marquee from "@components/Marquee/Marquee"; 
import styles from "./AboutContent.module.css"; // → nanti isinya copy dari kontak

const AboutContent = () => {
  const marqueeItems = [
    '<i class="fa-solid fa-star" style="color:white;"></i> Smart Finance <i class="fa-solid fa-star" style="color:white;"></i>',
    '<i class="fa-solid fa-star" style="color:white;"></i> Financial Success <i class="fa-solid fa-star" style="color:white;"></i>',
    '<i class="fa-solid fa-star" style="color:white;"></i> Strategic Solution <i class="fa-solid fa-star" style="color:white;"></i>'
  ];

  return (
    <div>

      {/* SECTION 1 — SAMA KAYA KONTAK */}
      <section className={styles["kontak-container"]}>
        <div className={styles["kontak-header"]}>About Us</div>

        <p className={styles["kontak-title"]}>About Natadana</p>

        <p className={styles["kontak-subtitle"]}>
          Armed with experience in the modern and digital-based financial world.
          Natadana was founded as a solution for partners in effectiveness
          and efficiency in running operations and distribution processes.
        </p>
      </section>

      {/* SECTION 2 — MARQUEE */}
      <section className={styles["marquee-section"]}>
        <Marquee items={marqueeItems} speed={2} />
      </section>

    </div>
  );
};

export default AboutContent;

import React from "react";
import Marquee from "@components/Marquee/Marquee"; // Assuming the Marquee component exists
import styles from "./AboutContent.module.css";

const AboutContent = () => {
    const marqueeItems = [
      '<i class="fa-solid fa-star" style="color:white;"></i> Smart Finance <i class="fa-solid fa-star" style="color:white;"></i>',
      '<i class="fa-solid fa-star" style="color:white;"></i> Financial Success <i class="fa-solid fa-star" style="color:white;"></i>',
      '<i class="fa-solid fa-star" style="color:white;"></i> Strategic Solution <i class="fa-solid fa-star" style="color:white;"></i>'
    ];

  return (
    <div className={styles.container}>
      {/* About Header Section */}
      <div className={styles.header}>
        About Us
      </div>

      <p className={styles.title}>
        About Natadana
      </p>

      <p className={styles.description}>
        Armed with experience in the modern and digital-based financial world.
        Natadana was founded as a solution for partners in effectiveness and efficiency in running operations and distribution processes.
      </p>

      {/* Marquee Section */}
      <section className={styles.marqueeSection}>
        <Marquee items={marqueeItems} speed={2} />
      </section>
    </div>
  );
};

export default AboutContent;

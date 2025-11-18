import React, { useEffect } from "react";
import styles from "./Marquee.module.css";

const Marquee = ({ items, speed = 2 }) => {
  useEffect(() => {
    const marquee = document.getElementById("globalMarqueeContent");

    // Buat konten marquee dengan urutan yang tetap
    let content = "";
    for (let i = 0; i < 50; i++) {  // Mengulang 50 kali untuk panjang konten yang lebih besar
      items.forEach(item => {
        content += `<span class="${styles.marqueeItem}">${item}</span>`;
      });
    }
    marquee.innerHTML = content;

    let pos = marquee.parentElement.offsetWidth;
    const animate = () => {
      pos -= speed;
      if (pos < -marquee.offsetWidth) pos = marquee.parentElement.offsetWidth;
      marquee.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, [items, speed]);

  return (
    <div className={styles.marqueeWrapper}>
      <div id="globalMarqueeContent" className={styles.marqueeContent}></div>
    </div>
  );
};

export default Marquee;

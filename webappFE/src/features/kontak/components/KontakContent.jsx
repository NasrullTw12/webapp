import React, { useEffect, useState } from "react";
import KontakContent1 from "./KontakContent1";
import styles from "./KontakContent.module.css";
import Marquee from "@components/Marquee/Marquee"; // import marquee global

  const marqueeItems = [
      '<i class="fa-solid fa-star" style="color:white;"></i> Smart Finance <i class="fa-solid fa-star" style="color:white;"></i>',
      '<i class="fa-solid fa-star" style="color:white;"></i> Financial Success <i class="fa-solid fa-star" style="color:white;"></i>',
      '<i class="fa-solid fa-star" style="color:white;"></i> Strategic Solution <i class="fa-solid fa-star" style="color:white;"></i>'
    ];

const KontakContent = () => {
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
      <section className={styles["kontak-container"]}>
        <div className={styles["kontak-header"]}>Contact Us</div>
        <p className={styles["kontak-title"]}>Get In Touch With Us</p>
        <p className={styles["kontak-subtitle"]}>
          Questions? Ideas? Just want to say hello? Drop us a message—we’d love to hear from you!
        </p>
      </section>

      {/* Marquee Section */}
      <section className={styles["marquee-section"]}>
        <Marquee items={marqueeItems} speed={2} />
      </section>

      <section className={styles["gathell-section"]}>
      <KontakContent1 />

      </section>

      {/* Main Contact Section */}
      <section className={`${styles["kontak-section"]} ${isMobile ? styles.mobile : ""}`}>
        {/* Left: Image and Text */}
        <div className={`${styles["kontak-image-wrapper"]} ${isMobile ? styles.mobile : ""}`}>
          <img
            src="https://nda.co.id/wp-content/uploads/2025/02/carlos-gil-RVHYGbQt28k-unsplash-scaled.jpg"
            alt="Contact Illustration"
            className={`${styles["kontak-image"]} ${isMobile ? styles.mobile : ""}`}
          />
          <div className={`${styles["kontak-image-overlay"]} ${isMobile ? styles.mobile : ""}`}></div>
          <div className={`${styles["kontak-image-text"]} ${isMobile ? styles.mobile : ""}`}>
            <p>
              We’re glad you’re here. Whether you have a question, feedback, or just want to say hello, we’d love to hear from you. Fill out the form, and our team will get back to you as soon as possible. We’re always here to help!
            </p>
            <hr />
            <div className={`${styles["kontak-profile"]} ${isMobile ? styles.mobile : ""}`}>
              <img src="https://nda.co.id/wp-content/uploads/2025/02/1714114789670.jpg" alt="Hudan Maulana"/>
              <div>
                <p>Hudan Maulana</p>
                <p>CEO Natadana</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className={styles["kontak-form-wrapper"]}>
          <div className={styles["kontak-form-header"]}>Get In Touch</div>
          <h2 className={styles["kontak-form-title"]}>We Ready To Help You</h2>
          <p className={styles["kontak-form-text"]}>
            Have a question or need assistance? Fill out the form below, and we’ll get back to you as soon as possible! 
          </p>
          <div className={styles["kontak-form-box"]}>
            <p>Let's Connect With Us</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your Name" disabled className={styles["kontak-input"]}/>
              <input type="email" placeholder="Your Email" disabled className={styles["kontak-input"]}/>
              <textarea placeholder="Your Message" rows="5" disabled className={`${styles["kontak-input"]} ${styles["kontak-textarea"]}`}/>
              <div className={styles["kontak-button-wrapper"]}>
                <label>
                  <input type="checkbox"/> I agree to the Privacy Policy
                </label>
                <button type="submit" disabled className={`${styles["kontak-button"]} ${isMobile ? styles.mobile : ""}`}>
                  Subscribe Now 
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles["kontak-map"]}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.525045205579!2d106.793424!3d-6.246428!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f113286b1dd9%3A0x809586ad22c6f374!2sWisma%20Bayuadji!5e0!3m2!1sid!2sus!4v1762746008677!5m2!1sid!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Natadana Location"
        ></iframe>
      </section>
    </div>
  );
};

export default KontakContent;

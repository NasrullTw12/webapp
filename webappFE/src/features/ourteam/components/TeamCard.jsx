import React from "react";
import styles from "./TeamCard.module.css";

const TeamCard = ({ member }) => (
  <div className={styles.card}>
    <img src={member.image} alt={member.name} className={styles.cardImage} />
    <div className={styles.cardOverlay}>
      <h3>{member.name}</h3>
      <p>{member.title}</p>
      <div className={styles.iconContainer}>
        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i className="fa-brands fa-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-youtube"></i></a>
      </div>
    </div>
  </div>
);

export default TeamCard;

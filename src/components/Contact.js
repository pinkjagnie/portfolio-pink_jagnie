import React from "react";

import unicornImg from "../img/unicorn_contact_1200-1700.png";
import sheepImg from "../img/flying_sheep_800-800.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTelegram, faInstagramSquare} from "@fortawesome/free-brands-svg-icons";

import styles from "./contact.module.css";

const Contact = () => {
  return(
    <div className={styles.contactContainer}>
      <div className={styles.unicornImage}>
        <img src={unicornImg} alt="unicorn" />
        <img src={sheepImg} alt="sheep image" className={styles.lamb} />
      </div>
      <div className={styles.descriptionContact}>
        <p>When working on creating a website, I combine my diverse work experience:</p>
        <p>- 9 years of experience in creative working with words - as a journalist and as a marketing manager</p>
        <p>- 4 years of legal experience - which taught me logical thinking</p>
      </div>
      <div className={styles.contacts}>
        <h1>Get in touch!</h1>
        <p>I'm currently looking for new job opportunities. I'm available for cooperation &amp; employment.</p>
        <p>You can reach me in several ways:</p>
      </div>
      <div className={styles.socialContainer}>
        <div className={styles.socialBox}>
          <FontAwesomeIcon icon={faGithub} className={styles.social} /> 
          <a href="https://github.com/pinkjagnie" target="_blank" rel="noopener noreferrer">@PinkJagnie on GitHub</a>
        </div>
        <div className={styles.socialBox}>
          <FontAwesomeIcon icon={faTelegram} className={styles.social} />
          <a href="https://t.me/PinkJagnie" target="_blank" rel="noopener noreferrer">@PinkJagnie on Telegram</a>
        </div>
        <div className={styles.socialBox}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.social} />
          <a href="mailto:me@pinkjagnie.pl">Send me an email on me@pinkjagnie.pl</a>
        </div>
        <div className={styles.socialBox}>
          <FontAwesomeIcon icon={faInstagramSquare} className={styles.social} /> 
          <a href="https://instagram.com/onowakowna" target="_blank" rel="noopener noreferrer">Feeling social? @onowakowna on Insta</a>
        </div>
      </div>
        
    </div>
  )
};

export default Contact;
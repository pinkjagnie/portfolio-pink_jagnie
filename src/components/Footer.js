import React from "react";

import { GiPawHeart } from "react-icons/gi";

import styles from "./footer.module.css";

const Footer = () => {
  return(
    <div className={styles.footerContainer}>
      <p>&copy; 2022 | Designed &amp; coded with <GiPawHeart className={styles.author} /> by Olga - Pink Jagnie</p>
    </div>
  )
};

export default Footer;
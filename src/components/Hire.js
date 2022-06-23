import React from "react";

import hireImg from "../img/sheep_hire_1200-1400.png";

import styles from "./hire.module.css";

const Hire = () => {
  return(
    <div className={styles.hireContainer}>
      <div className={styles.hireImage}>
        <img src={hireImg} alt="Pink Jagnie available to collab" />
      </div>
    </div>
  )
};

export default Hire;
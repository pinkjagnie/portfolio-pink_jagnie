import React from "react";

import TypeWriterEffect from 'react-typewriter-effect';
import Hire from "./Hire";

import meImg from "../img/me_header_800-800.png";

import styles from "./main.module.css";

function Main () {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerBack}>
        <img src={meImg} alt="Pink Jagnie" className={styles.welcomePicture}/>
        <div className={styles.text}>
          <h1>Hi, I'm Olga</h1>
          <div className={styles.underlineTitle}></div>
          <div className={styles.textFlip}><h1>I'm</h1>
            <TypeWriterEffect
              textStyle={{ marginTop: '1.4rem', paddingLeft: '0.5rem' }}
              startDelay={2000}
              cursorColor="#3F3D56"
              multiText={[
                'a frontend developer',
                'a bookworm',
                'a pessimist fighting to be an optimist',
                'a lawyer',
                'an animal lover',
              ]}
              multiTextDelay={1000}
              typeSpeed={30}
              multiTextLoop={true}
            />
          </div>
          <div></div>
        </div>
        <Hire />
      </div>
    </div>
  );
}

export default Main;
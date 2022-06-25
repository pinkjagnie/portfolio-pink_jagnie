import React from "react";

import styles from "./about.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand, faCandyCane, faHammer, faMagnifyingGlass, faBoltLightning, faLocationPin, faHeart } from "@fortawesome/free-solid-svg-icons";

import mePhoto from "../img/about_me_1200-1400.png";

const About = () => {
  return(
    <div className={styles.aboutContainer}>
      <div className={styles.aboutPhoto}>
        <img src={mePhoto} alt="Pink Jagnie photo" />
      </div>

      <div className={styles.window}>
        <div className={styles.titlebar}>
          <div className={styles.buttons}>
            <div className={styles.close}></div>
            <div className={styles.minimize}></div>
            <div className={styles.zoom}></div>
          </div>
        </div>
        <div className={styles.content}>
          <p><FontAwesomeIcon icon={faHand} className={styles.icon} />I'm <span>Pink Jagnie</span> but you can call me Olga</p>
          <p><FontAwesomeIcon icon={faCandyCane} className={styles.icon} />Obviously pink is my color</p>
          <p><FontAwesomeIcon icon={faHammer} className={styles.icon} />I'm currently improving React</p>
          <p><FontAwesomeIcon icon={faMagnifyingGlass} className={styles.icon} />Recently I've been working on AxiomOS's web</p>
          <p><FontAwesomeIcon icon={faBoltLightning} className={styles.icon} /><em>Znaczy ogólnie to interesowania, zainteresowania, to: React, CSS i ogólnie takie, takie... Ale w miarę to nauka mnie najbardziej kręci i w ogóle mam nadzieję na przyszłość.</em></p>
          <p><FontAwesomeIcon icon={faLocationPin} className={styles.icon} />Poland based</p>
          <p><FontAwesomeIcon icon={faHeart} className={styles.icon} />Fun facts: I like llamas. I have 15 plants and 1 artificial eucalyptus</p>
        </div>
      </div>       
    </div>
       
  )
};

export default About;
import React from "react";

import portfolioAxiom from "../img/portfolio1_1000-750.png";

import { AiFillHtml5, AiFillApi } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiJquery } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { MdWebStories } from "react-icons/md";

import styles from "./portfolio.module.css";

const Portfolio = () => {
  return(
    <div className={styles.portfolioContainer}>
      <h1>My work</h1>
      <div className={styles.underline}></div>

      <div className={styles.grid}>

        <figure className={styles.effectApollo}>
          <img src={portfolioAxiom} alt="AxiomOS web"/>
          <figcaption>
            <p>Commercial website for the AxiomOS</p>
          </figcaption>     
        </figure>
        <div className={styles.projectDescription}>
          <h2>AxiomOS</h2>
          <p>Commercial project. Website for a mobile operating system which is helping users stay private in a world where everyone follows you. The project includes HTTP requests (subscribing to the mailing list) and a countdown to the premiere of the new version of the system. </p>
          <div className={styles.boxIcon}>
            <AiFillHtml5 className={styles.icon}/>
            <DiCss3 className={styles.icon}/>
            <SiJavascript className={styles.icon}/>
            <FaReact className={styles.icon}/>
            <MdWebStories className={styles.icon}/>
            <AiFillApi className={styles.icon}/>
          </div>
          <div className={styles.linksContainer}>
            <button><a href="http://web.axiomos.pl/" target="_blank" rel="noopener noreferrer">View it here</a></button>
            <button><a href="https://github.com/pinkjagnie/axiom-os" target="_blank" rel="noopener noreferrer">View GitHub repo</a></button>
          </div>
        </div>
        
        <figure className={styles.effectApollo}>
        <img src={portfolioAxiom} alt="AxiomOS web"/>
          <figcaption>
            <p>Commercial website for the AxiomOS Hub.</p>
            <a href="http://web.axiomos.pl/" target="_blank" rel="noopener noreferrer">View more</a>
          </figcaption>     
        </figure>
      </div>

    </div>
  )
};

export default Portfolio;
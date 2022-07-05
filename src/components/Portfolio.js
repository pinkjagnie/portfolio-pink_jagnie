import React from "react";

import portfolioAxiom from "../img/portfolio1_1000-750.png";
import portfolioFlowers from "../img/portfolio4_1000-750.png";
import portfolioWitch from "../img/portfolio5_1000-750.png";

import { AiFillHtml5, AiFillApi } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiJquery } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { MdWebStories } from "react-icons/md";

import styles from "./portfolio.module.css";

const standardSetTools = <div className={styles.boxIcon}>
<AiFillHtml5 className={styles.icon}/>
<DiCss3 className={styles.icon}/>
<SiJavascript className={styles.icon}/>
<FaReact className={styles.icon}/>
<MdWebStories className={styles.icon}/>
<AiFillApi className={styles.icon}/>
</div>;

const Portfolio = () => {
  return(
    <div className={styles.portfolioContainer}>
      <h1>My work</h1>
      <div className={styles.underline}></div>

      <div className={styles.grid}>

        <div className={styles.flexContainer}>
          <figure className={styles.effectApollo}>
            <img src={portfolioAxiom} alt="AxiomOS web"/>
            <figcaption>
              <p>Commercial website for the AxiomOS</p>
            </figcaption>     
          </figure>
          <div className={styles.projectDescription}>
            <h2>AxiomOS</h2>
            <p>Commercial project. Website for a mobile operating system which is helping users stay private in a world where everyone follows you. The project includes HTTP requests (subscribing to the mailing list) and a countdown to the premiere of the new version of the system.</p>
            {standardSetTools}
            <div className={styles.linksContainer}>
              <button><a href="http://axiomos.pl/" target="_blank" rel="noopener noreferrer">View it here</a></button>
              <button><a href="https://github.com/pinkjagnie/axiom-os" target="_blank" rel="noopener noreferrer">View GitHub repo</a></button>
            </div>
          </div>
        </div>

        <div className={styles.flexContainer}>
          <figure className={styles.effectApollo}>
            <img src={portfolioAxiom} alt="AxiomOS Hub web"/>
            <figcaption>
              <p>Commercial website for the AxiomOS Hub</p>
            </figcaption>     
          </figure>
          <div className={styles.projectDescription}>
            <h2>AxiomOS Hub</h2>
            <p>Commercial project. This website is part of AxiomOS where the user can view application privacy reports and analyzes. The project includes React Router, HTTP requests (search bar and the ability to add your application to the list).</p>
            {standardSetTools}
            <div className={styles.linksContainer}>
              <button><a href="http://web.axiomos.pl/" target="_blank" rel="noopener noreferrer">View it here</a></button>
              <button><a href="https://github.com/pinkjagnie/axiom-hub" target="_blank" rel="noopener noreferrer">View GitHub repo</a></button>
            </div>
          </div>
        </div>

        <div className={styles.flexContainer}>
          <figure className={styles.effectApollo}>
            <img src={portfolioAxiom} alt="Pink Jagnie portfolio"/>
            <figcaption>
              <p>My portfolio</p>
            </figcaption>     
          </figure>
          <div className={styles.projectDescription}>
            <h2>Pink Jagnie portfolio</h2>
            <p>A portfolio that is not boring. A website that, apart from my skills, also shows my personality. Built with React.</p>
            {standardSetTools}
            <div className={styles.linksContainer}>
              <button><a href="http://pinkjagnie.pl/" target="_blank" rel="noopener noreferrer">View it here</a></button>
              <button><a href="https://github.com/pinkjagnie/portfolio-pink_jagnie" target="_blank" rel="noopener noreferrer">View GitHub repo</a></button>
            </div>
          </div>
        </div>

        <div className={styles.flexContainer}>
          <figure className={styles.effectApollo}>
            <img src={portfolioFlowers} alt="Flower store website"/>
            <figcaption>
              <p>Website of flowerstore "Twój bukiet"</p>
            </figcaption>     
          </figure>
          <div className={styles.projectDescription}>
            <h2>Flowerstore "Twój bukiet"</h2>
            <p>The beginning of my journey. A website of fictional flowerstore built to learn CSS, using some jQuery.</p>
            <div className={styles.boxIcon}>
              <AiFillHtml5 className={styles.icon}/>
              <DiCss3 className={styles.icon}/>
              <SiJquery className={styles.icon}/>
              <MdWebStories className={styles.icon}/>
              <AiFillApi className={styles.icon}/>
            </div>
            <div className={styles.linksContainer}>
              <button><a href="https://twoj-bukiet.netlify.app/" target="_blank" rel="noopener noreferrer">View it here</a></button>
              <button><a href="https://github.com/pinkjagnie/flowerstore-your-bouquet" target="_blank" rel="noopener noreferrer">View GitHub repo</a></button>
            </div>
          </div>
        </div>

        <div className={styles.flexContainer}>
          <figure className={styles.effectApollo}>
            <img src={portfolioWitch} alt="Fortune generator"/>
            <figcaption>
              <p>Website where you will know your future</p>
            </figcaption>     
          </figure>
          <div className={styles.projectDescription}>
            <h2>Fortune generator</h2>
            <p>Also the beginning of my journey. The website where the witch Alberta will predict your future. Project created to improve CSS and JavaScript.</p>
            <div className={styles.boxIcon}>
              <AiFillHtml5 className={styles.icon}/>
              <DiCss3 className={styles.icon}/>
              <SiJavascript className={styles.icon}/>
              <MdWebStories className={styles.icon}/>
              <AiFillApi className={styles.icon}/>
            </div>
            <div className={styles.linksContainer}>
              <button><a href="https://omnes-generator.netlify.app/" target="_blank" rel="noopener noreferrer">View it here</a></button>
              <button><a href="https://github.com/pinkjagnie/fortune-generator" target="_blank" rel="noopener noreferrer">View GitHub repo</a></button>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
};

export default Portfolio;
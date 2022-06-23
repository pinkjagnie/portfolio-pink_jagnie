import React from "react";

import { AiFillHtml5, AiFillApi } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiJavascript, SiJquery, SiFirebase, SiVisualstudio, SiLinux } from "react-icons/si";
import { FaReact, FaGitAlt, FaCogs } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { VscTerminalBash } from "react-icons/vsc";
import { ImEyePlus } from "react-icons/im";
import { MdWebStories } from "react-icons/md";

import styles from "./toolbox.module.css";

const Toolbox = () => {
  return(
    <div className={styles.toolboxContainer}>
      <h1>My toolbox &amp; things I can do</h1>
      <div className={styles.iconsContainer}>
        <div className={styles.boxIcon}><AiFillHtml5 className={styles.icon}/><p>HTML5</p></div>
        <div className={styles.boxIcon}><DiCss3 className={styles.icon}/><p>CSS3</p></div>
        <div className={styles.boxIcon}><SiJavascript className={styles.icon}/><p>JavaScript</p></div>
        <div className={styles.boxIcon}><SiJquery className={styles.icon}/><p>jQuery</p></div>
        <div className={styles.boxIcon}><FaReact className={styles.icon}/><p>React</p></div>
        <div className={styles.boxIcon}><FaGitAlt className={styles.icon}/><p>Git</p></div>
        <div className={styles.boxIcon}><BsGithub className={styles.icon}/><p>Github</p></div>
        <div className={styles.boxIcon}><SiFirebase className={styles.icon}/><p>Firebase</p></div>
        <div className={styles.boxIcon}><SiVisualstudio className={styles.icon}/><p>VSCode</p></div>
        <div className={styles.boxIcon}><MdWebStories className={styles.icon}/><p>Responsive Websites</p></div>
        <div className={styles.boxIcon}><SiLinux className={styles.icon}/><p>Linux</p></div>
        <div className={styles.boxIcon}><AiFillApi className={styles.icon}/><p>Backend API integration</p></div>
        <div className={styles.boxIcon}><FaCogs className={styles.icon}/><p>RESTful APIs</p></div>
        <div className={styles.boxIcon}><RiTeamFill className={styles.icon}/><p>Team working</p></div>
        <div className={styles.boxIcon}><ImEyePlus className={styles.icon}/><p>Aesthetic sense</p></div>
        <div className={styles.boxIcon}><VscTerminalBash className={styles.icon}/><p>Bash Shell</p></div>
      </div>
    </div>
  )
};

export default Toolbox;
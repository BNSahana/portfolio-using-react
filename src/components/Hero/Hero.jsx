import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sahana</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <div className={styles.btns}>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="https://drive.google.com/file/d/1Ah00ZCKzSxS4mXa-g8b5QD6KNJNnhX2o/view?usp=sharing" className={styles.cvBtn}>
          Download CV
        </a>
        </div>
       
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

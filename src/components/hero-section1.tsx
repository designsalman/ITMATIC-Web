import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./hero-section1.module.css";

export type HeroSection1Type = {
  className?: string;
};

const HeroSection1: FunctionComponent<HeroSection1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.heroSection, className].join(" ")}>
      <div className={styles.heroSectionInner}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-39177.svg"
        />
      </div>
      <div className={styles.textBlockH1p1}>
        <div className={styles.caption}>OUR PORTFOLIO</div>
        <h1 className={styles.title}>
          <p
            className={styles.strategicItConsulting}
          >{`Strategic IT Consulting for `}</p>
          <p className={styles.strategicItConsulting}>Sustainable Growth</p>
        </h1>
        <div className={styles.description}>
          <p className={styles.strategicItConsulting}>
            IT consulting involves providing expert advice and solutions to help
            businesses leverage technology effectively. It includes assessing
            your current IT infrastructure, recommending improvements, and
            guiding technology adoption.
          </p>
          <p className={styles.strategicItConsulting}>
            IT consulting helps businesses align their technology with their
            strategic goals, ensuring long-term success.
          </p>
        </div>
        <div className={styles.button}>
          <b className={styles.letsConnect}>Let’s Connect</b>
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;

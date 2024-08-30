import * as React from "react";
import { FunctionComponent } from "react";
import CardBlockWhiteH2P from "./card-block-white-h2-p";
import * as styles from "./security-technology1.module.css";

export type SecurityTechnology1Type = {
  className?: string;
};

const SecurityTechnology1: FunctionComponent<SecurityTechnology1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.securityTechnology, className].join(" ")}>
      <div className={styles.textBlockH1p1}>
        <div className={styles.caption}>OUR PORTFOLIO</div>
        <h1 className={styles.title}>
          <span>{`Security & Technological `}</span>
          <span className={styles.excellence}>Excellence</span>
        </h1>
        <div className={styles.description}>
          We prioritize top-tier security and stay ahead with cutting-edge
          technology. Our solutions are designed to protect your data and ensure
          robust, reliable performance.
        </div>
        <div className={styles.button}>
          <b className={styles.letsConnect}>Let’s Connect</b>
        </div>
      </div>
      <div className={styles.technologyFeatures}>
        <div className={styles.cardBlockWhiteH2p2}>
          <div className={styles.featureIcons}>
            <div className={styles.component1}>
              <img
                className={styles.techSolutionIcons}
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className={styles.heading3}>Robust Security Measures</div>
            <div className={styles.defineTheProjectsContainer}>
              <p className={styles.wePrioritizeYour}>
                We prioritize your data's safety with cutting-edge security
                protocols, continuous monitoring, and regular updates to protect
                against evolving threats.
              </p>
            </div>
          </div>
        </div>
        <CardBlockWhiteH2P
          heading3Accessibility="Cutting-Edge Technology"
          defineTheProjectsObjectives="We harness the latest advancements in technology to create innovative, high-performance solutions that ensure reliability and keep you ahead in a rapidly evolving digital landscape."
          vector3="/vector.svg"
        />
      </div>
    </section>
  );
};

export default SecurityTechnology1;

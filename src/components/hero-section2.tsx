import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import { navigate } from "gatsby";
import * as styles from "./hero-section2.module.css";

export type HeroSection2Type = {
  className?: string;
};

const HeroSection2: FunctionComponent<HeroSection2Type> = ({
  className = "",
}) => {
  const onButtonClick = useCallback(() => {
    navigate("/contact-us");
  }, []);

  return (
    <section className={[styles.heroSection, className].join(" ")}>
      <div className={styles.iCertifyParent}>
        <div className={styles.iCertify}>I Certify</div>
        <div className={styles.textBlockH1p1}>
          <div className={styles.caption}>ABOUT US</div>
          <div className={styles.title}>
            Credential Validation and Verification Platform
          </div>
          <div className={styles.description}>
            Itmatic was founded with a singular vision: to empower businesses
            through innovative technology solutions. Over the past 15 years,
            we’ve grown from a small team of passionate technologists into a
            trusted partner for companies around the globe. Our commitment to
            excellence and our deep industry expertise have allowed us to create
            impactful solutions that drive growth and innovation.
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <b className={styles.letsConnect}>Let’s Connect</b>
          </button>
        </div>
      </div>
      <img className={styles.icon} loading="lazy" alt="" src="/1@2x.png" />
    </section>
  );
};

export default HeroSection2;

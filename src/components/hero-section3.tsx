import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import { navigate } from "gatsby";
import * as styles from "./hero-section3.module.css";

export type HeroSection3Type = {
  className?: string;
};

const HeroSection3: FunctionComponent<HeroSection3Type> = ({
  className = "",
}) => {
  const onButtonClick = useCallback(() => {
    navigate("/contact-us");
  }, []);

  return (
    <section className={[styles.heroSection, className].join(" ")}>
      <div className={styles.heroSectionInner}>
        <div className={styles.almacircleLogoParent}>
          <div className={styles.almacircleLogo}>
            <div className={styles.frameParent}>
              <div className={styles.frameWrapper}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                </div>
              </div>
              <div className={styles.almacircle}>Almacircle</div>
            </div>
          </div>
          <div className={styles.textBlockH1p1}>
            <div className={styles.caption}>ABOUT US</div>
            <div className={styles.title}>
              Almacircle - Alumni Engagement Platform
            </div>
            <div className={styles.description}>
              Itmatic was founded with a singular vision: to empower businesses
              through innovative technology solutions. Over the past 15 years,
              we’ve grown from a small team of passionate technologists into a
              trusted partner for companies around the globe. Our commitment to
              excellence and our deep industry expertise have allowed us to
              create impactful solutions that drive growth and innovation.
            </div>
            <button className={styles.button} onClick={onButtonClick}>
              <b className={styles.letsConnect}>Let’s Connect</b>
            </button>
          </div>
        </div>
      </div>
      <img className={styles.icon} loading="lazy" alt="" src="/7@2x.png" />
    </section>
  );
};

export default HeroSection3;

import * as React from "react";
import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { navigate } from "gatsby";
import * as styles from "./hero-section.module.css";

export type HeroSectionType = {
  className?: string;
  chitkaraLogo1?: string;
  title?: string;
  prop?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propWidth?: CSSProperties["width"];
  propOverflow?: CSSProperties["overflow"];
  propHeight?: CSSProperties["height"];
  propColor?: CSSProperties["color"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor1?: CSSProperties["color"];
};

const HeroSection: FunctionComponent<HeroSectionType> = ({
  className = "",
  propBackgroundColor,
  chitkaraLogo1,
  propWidth,
  propOverflow,
  propHeight,
  title,
  propColor,
  propBackgroundColor1,
  propColor1,
  prop,
}) => {
  const heroSectionStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const chitkaraLogo1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      overflow: propOverflow,
      height: propHeight,
    };
  }, [propWidth, propOverflow, propHeight]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const letsConnectStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const onButtonClick = useCallback(() => {
    navigate("/contact-us");
  }, []);

  return (
    <section
      className={[styles.heroSection, className].join(" ")}
      style={heroSectionStyle}
    >
      <div className={styles.chitkaraLogo1Parent}>
        <img
          className={styles.chitkaraLogo1}
          loading="lazy"
          alt=""
          src={chitkaraLogo1}
          style={chitkaraLogo1Style}
        />
        <div className={styles.textBlockH1p1}>
          <div className={styles.caption}>ABOUT US</div>
          <div className={styles.title} style={titleStyle}>
            {title}
          </div>
          <div className={styles.description}>
            Itmatic was founded with a singular vision: to empower businesses
            through innovative technology solutions. Over the past 15 years,
            we’ve grown from a small team of passionate technologists into a
            trusted partner for companies around the globe. Our commitment to
            excellence and our deep industry expertise have allowed us to create
            impactful solutions that drive growth and innovation.
          </div>
          <button
            className={styles.button}
            onClick={onButtonClick}
            style={buttonStyle}
          >
            <b className={styles.letsConnect} style={letsConnectStyle}>
              Let’s Connect
            </b>
          </button>
        </div>
      </div>
      <img className={styles.icon} loading="lazy" alt="" src={prop} />
    </section>
  );
};

export default HeroSection;

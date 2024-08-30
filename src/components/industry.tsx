import * as React from "react";
import { FunctionComponent } from "react";
import TextBlockH1P from "./text-block-h1-p";
import * as styles from "./industry.module.css";

export type IndustryType = {
  className?: string;
};

const Industry: FunctionComponent<IndustryType> = ({ className = "" }) => {
  return (
    <section className={[styles.industry, className].join(" ")}>
      <TextBlockH1P
        propWidth="1100px"
        propAlignSelf="unset"
        caption="OUR PORTFOLIO"
        caption1={false}
        propColor="#000"
        title="Industry Expertise You Can Trust"
        propTextAlign="center"
        propColor1="unset"
        propBackground="unset"
        propWebkitBackgroundClip="unset"
        propWebkitTextFillColor="unset"
        description="With deep experience across diverse industries, we understand the unique challenges and opportunities in your sector. Our tailored solutions leverage industry-specific knowledge to deliver impactful results, helping your business thrive in a competitive landscape. Whether it's finance, healthcare, retail, or any other industry, our expertise ensures your success."
        propTextAlign1="center"
        propColor2="#000"
        propDisplay="unset"
        propMinHeight="unset"
        captionFontWeight="600"
        descriptionFontWeight="unset"
        descriptionAlignSelf="unset"
        descriptionPosition="unset"
        descriptionFontSize="unset"
        descriptionFontFamily="unset"
        button
        buttonWidth="unset"
        buttonBorderRadius="unset"
        buttonFlexDirection="unset"
        buttonPadding="unset"
        buttonWebkitBackgroundClip="unset"
        buttonWebkitTextFillColor="unset"
        letsConnect="With deep experience across diverse industries, we understand the unique challenges and opportunities in your sector. Our tailored solutions leverage industry-specific knowledge to deliver impactful results, helping your business thrive in a competitive landscape. Whether it's finance, healthcare, retail, or any other industry, our expertise ensures your success."
        letsConnectHeight="unset"
        letsConnectFontSize="20px"
        letsConnectDisplay="unset"
        letsConnectFontFamily="'Noto Sans'"
        letsConnectColor="#000"
        letsConnectFontWeight="unset"
      />
      <div className={styles.industryIcons}>
        <div className={styles.iconContainers}>
          <img
            className={styles.graduateIcon}
            loading="lazy"
            alt=""
            src="/animation--1723535607855@2x.png"
          />
          <b className={styles.manufacturing}>Manufacturing</b>
        </div>
        <div className={styles.iconContainers1}>
          <img
            className={styles.graduateIcon}
            loading="lazy"
            alt=""
            src="/graduate@2x.png"
          />
          <b className={styles.manufacturing}>Education</b>
        </div>
        <div className={styles.iconContainers2}>
          <img
            className={styles.graduateIcon}
            loading="lazy"
            alt=""
            src="/heartbeat@2x.png"
          />
          <b className={styles.manufacturing}>Healthcare</b>
        </div>
        <div className={styles.iconContainers3}>
          <img
            className={styles.graduateIcon}
            loading="lazy"
            alt=""
            src="/grocery@2x.png"
          />
          <b className={styles.manufacturing}>Social</b>
        </div>
        <div className={styles.iconContainers4}>
          <img
            className={styles.graduateIcon}
            loading="lazy"
            alt=""
            src="/buyahouse@2x.png"
          />
          <b className={styles.manufacturing}>Real Estate</b>
        </div>
        <div className={styles.iconContainers2}>
          <img
            className={styles.graduateIcon}
            loading="lazy"
            alt=""
            src="/shoppingbags@2x.png"
          />
          <b className={styles.manufacturing}>Ecommerce</b>
        </div>
      </div>
    </section>
  );
};

export default Industry;

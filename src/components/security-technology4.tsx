import * as React from "react";
import { FunctionComponent } from "react";
import TextBlockH1P from "./text-block-h1-p";
import * as styles from "./security-technology4.module.css";

export type SecurityTechnology4Type = {
  className?: string;
};

const SecurityTechnology4: FunctionComponent<SecurityTechnology4Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.securityTechnology, className].join(" ")}>
      <TextBlockH1P
        propWidth="1100px"
        propAlignSelf="unset"
        caption="OUR PORTFOLIO"
        caption1={false}
        propColor="#000"
        title="The Heart of Itmatic"
        propTextAlign="center"
        propColor1="#000"
        propBackground="unset"
        propWebkitBackgroundClip="unset"
        propWebkitTextFillColor="unset"
        description="Our team is the driving force behind every success at Itmatic. Comprised of passionate innovators, seasoned strategists, and skilled technologists, we bring diverse expertise and a shared commitment to excellence. Together, we collaborate to turn challenges into opportunities, delivering solutions that push the boundaries of what's possible. At Itmatic, our people are our greatest asset, and their dedication to your success is what sets us apart."
        propTextAlign1="center"
        propColor2="#000"
        propDisplay="unset"
        propMinHeight="unset"
        captionFontWeight="600"
        descriptionFontWeight="unset"
        descriptionAlignSelf="stretch"
        descriptionPosition="relative"
        descriptionFontSize="20px"
        descriptionFontFamily="'Noto Sans'"
        button={false}
        buttonWidth="149px"
        buttonBorderRadius="30px"
        buttonFlexDirection="column"
        buttonPadding="12px 24px"
        buttonWebkitBackgroundClip="unset"
        buttonWebkitTextFillColor="unset"
        letsConnect="Let’s Connect"
        letsConnectHeight="24px"
        letsConnectFontSize="16px"
        letsConnectDisplay="flex"
        letsConnectFontFamily="'IBM Plex Sans'"
        letsConnectColor="#fff"
        letsConnectFontWeight="unset"
      />
      <div className={styles.maskGroupParent}>
        <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
        <img
          className={styles.maskGroupIcon1}
          alt=""
          src="/mask-group-1@2x.png"
        />
        <img className={styles.icon} loading="lazy" alt="" src="/22.svg" />
      </div>
      <div className={styles.cardBlockWhiteH2p2Parent}>
        <div className={styles.cardBlockWhiteH2p2}>
          <div className={styles.cardComponents}>
            <img
              className={styles.component1Icon}
              loading="lazy"
              alt=""
              src="/component-111@2x.png"
            />
            <div className={styles.heading3}>Diverse Expertise</div>
            <div className={styles.defineTheProjects}>
              Our team includes experts from various fields, ensuring
              comprehensive solutions tailored to your needs.
            </div>
          </div>
        </div>
        <div className={styles.cardBlockWhiteH2p2}>
          <div className={styles.cardComponents}>
            <img
              className={styles.component1Icon}
              loading="lazy"
              alt=""
              src="/component-1-12@2x.png"
            />
            <div className={styles.heading3}>Client-Focused Approach</div>
            <div className={styles.defineTheProjects}>
              Every team member is committed to understanding and exceeding
              client expectations, driving results that matter.
            </div>
          </div>
        </div>
        <div className={styles.cardBlockWhiteH2p2}>
          <div className={styles.cardComponents}>
            <img
              className={styles.component1Icon}
              loading="lazy"
              alt=""
              src="/component-111@2x.png"
            />
            <div className={styles.heading3}>Collaborative Spirit</div>
            <div className={styles.defineTheProjects}>
              We believe in teamwork and open communication, fostering an
              environment where innovative ideas thrive.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTechnology4;

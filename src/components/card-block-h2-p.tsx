import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./card-block-h2-p.module.css";

export type CardBlockH2PType = {
  className?: string;
  webApp?: string;
  webAppIcon?: boolean;
  uIUX?: string;
  uIUXIcon?: boolean;
  mobileApp?: string;
  mobileAppIcon?: boolean;
  softwareDevelopment?: string;
  softwareDevelopmentIcon?: boolean;
  qualityAssurance?: string;
  qualityAssuranceIcon?: boolean;
  support?: string;
  showSupportIcon?: boolean;
  heading3Accessibility?: string;
  scalableWebApplicationsTailored?: string;
};

const CardBlockH2P: FunctionComponent<CardBlockH2PType> = ({
  className = "",
  webApp,
  webAppIcon,
  uIUX,
  uIUXIcon,
  mobileApp,
  mobileAppIcon,
  softwareDevelopment,
  softwareDevelopmentIcon,
  qualityAssurance,
  qualityAssuranceIcon,
  support,
  showSupportIcon,
  heading3Accessibility,
  scalableWebApplicationsTailored,
}) => {
  return (
    <div className={[styles.cardBlockH2p2, className].join(" ")}>
      <img
        className={styles.component1Icon}
        loading="lazy"
        alt=""
        src="/component-1-5.svg"
      />
      <div className={styles.heading3}>{heading3Accessibility}</div>
      <div className={styles.scalableWebApplications}>
        {scalableWebApplicationsTailored}
      </div>
      <b className={styles.learnMore}>Learn More</b>
    </div>
  );
};

export default CardBlockH2P;

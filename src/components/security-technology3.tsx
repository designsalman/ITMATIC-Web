import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./security-technology3.module.css";

export type SecurityTechnology3Type = {
  className?: string;
};

const SecurityTechnology3: FunctionComponent<SecurityTechnology3Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.securityTechnology, className].join(" ")}>
      <div className={styles.textBlockH1p1}>
        <div className={styles.caption}>OUR PORTFOLIO</div>
        <h1 className={styles.title}>
          <span>{`My Online College, Your All-in-One Guide to `}</span>
          <span className={styles.onlineEducation}>Online Education</span>
        </h1>
        <div className={styles.description}>
          MyOnlineCollege is your go-to platform for exploring and selecting the
          best online education programs from top universities across India. Our
          website is designed to make your educational journey as smooth and
          informed as possible. 
        </div>
        <div className={styles.button}>
          <b className={styles.letsConnect}>Let’s Connect</b>
        </div>
      </div>
      <div className={styles.cardList}>
        <div className={styles.cardBlockWhiteH2p2}>
          <div className={styles.component1Parent}>
            <div className={styles.component1}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles.heading3Container}>
              <p className={styles.p}>01</p>
              <p className={styles.p}>Extensive Program Directory</p>
            </div>
            <div className={styles.defineTheProjects}>
              Explore a wide array of online education programs from top
              universities across India, all conveniently available in one
              platform.
            </div>
          </div>
        </div>
        <div className={styles.cardBlockWhiteH2p2}>
          <div className={styles.component1Parent}>
            <div className={styles.component1}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles.heading3Container}>
              <p className={styles.p}>02</p>
              <p className={styles.p}>Informed Program Selection</p>
            </div>
            <div className={styles.defineTheProjects}>
              Easily compare university offerings through our unique
              presentation method, helping you make well-informed decisions.
            </div>
          </div>
        </div>
        <div className={styles.cardBlockWhiteH2p2}>
          <div className={styles.component1Parent}>
            <div className={styles.component1}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles.heading3Container}>
              <p className={styles.p}>03</p>
              <p className={styles.p}>Comprehensive Guidance</p>
            </div>
            <div className={styles.defineTheProjects}>
              Receive full support from selecting the right university to
              navigating the admission process and post-admission assistance.
            </div>
          </div>
        </div>
        <div className={styles.cardBlockWhiteH2p2}>
          <div className={styles.component1Parent}>
            <div className={styles.component1}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles.heading3Container}>
              <p className={styles.p}>03</p>
              <p className={styles.p}>Comprehensive Guidance</p>
            </div>
            <div className={styles.defineTheProjects}>
              Receive full support from selecting the right university to
              navigating the admission process and post-admission assistance.
            </div>
          </div>
        </div>
        <div className={styles.cardBlockWhiteH2p2}>
          <div className={styles.component1Parent}>
            <div className={styles.component1}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles.heading3Container}>
              <p className={styles.p}>03</p>
              <p className={styles.p}>Comprehensive Guidance</p>
            </div>
            <div className={styles.defineTheProjects}>
              Receive full support from selecting the right university to
              navigating the admission process and post-admission assistance.
            </div>
          </div>
        </div>
        <div className={styles.cardBlockWhiteH2p2}>
          <div className={styles.component1Parent}>
            <div className={styles.component1}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles.heading3Container}>
              <p className={styles.p}>03</p>
              <p className={styles.p}>Comprehensive Guidance</p>
            </div>
            <div className={styles.defineTheProjects}>
              Receive full support from selecting the right university to
              navigating the admission process and post-admission assistance.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTechnology3;

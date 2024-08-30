import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./content.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.innerContent}>
        <img
          className={styles.moc3Icon}
          loading="lazy"
          alt=""
          src="/moc-31@2x.png"
        />
      </div>
      <div className={styles.cardBlockH2p2}>
        <img className={styles.component1Icon} alt="" src="/component-11.svg" />
        <div className={styles.heading3}>
          My Online College: Your Gateway to Quality Education
        </div>
        <div className={styles.scalableWebApplicationsContainer}>
          <span className={styles.scalableWebApplicationsContainer1}>
            <p
              className={styles.myOnlineCollege}
            >{`My Online College is India’s newest and most innovative aggregator for online education programs, showcasing offerings from the country’s leading universities. Our platform’s unique approach to presenting university programs makes it easier for students and parents to make informed decisions and focus on quality education. `}</p>
            <p className={styles.myOnlineCollege}>&nbsp;</p>
            <p className={styles.myOnlineCollege}>
              Dedicated to simplifying the educational journey, My Online
              College provides a comprehensive view of online programs and
              offers end-to-end services, including financial options, to
              support students and parents every step of the way. Discover how
              My Online College is transforming the future of online education
              and empowering your academic choices.
            </p>
          </span>
        </div>
        <b className={styles.learnMore}>Learn More</b>
      </div>
    </section>
  );
};

export default Content;

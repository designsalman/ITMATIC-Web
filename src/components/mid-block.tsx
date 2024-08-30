import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import { navigate } from "gatsby";
import List from "./list";
import * as styles from "./mid-block.module.css";

export type MidBlockType = {
  className?: string;
};

const MidBlock: FunctionComponent<MidBlockType> = ({ className = "" }) => {
  const onButtonClick = useCallback(() => {
    navigate("/contact-us");
  }, []);

  return (
    <section className={[styles.midBlock, className].join(" ")}>
      <div className={styles.textBlockH1p1}>
        <div className={styles.caption}>OUR PORTFOLIO</div>
        <h1 className={styles.title}>Our Process</h1>
        <div className={styles.description}>
          Our consulting process begins with a deep dive into your current IT
          infrastructure, followed by actionable recommendations and ongoing
          support.
        </div>
        <button className={styles.button} onClick={onButtonClick}>
          <b className={styles.letsConnect}>Let’s Connect</b>
        </button>
      </div>
      <div className={styles.listBlock}>
        <List
          heading3Accessibility="01"
          showHeading3
          propMinWidth="26px"
          propWidth="unset"
          propMinWidth1="272px"
          heading3Accessibility1="Assessment"
          analyzeYourCurrentITInfrastruct="Analyze your current IT infrastructure and business goals."
        />
        <List
          heading3Accessibility="02"
          showHeading3
          propMinWidth="32px"
          propWidth="unset"
          propMinWidth1="268px"
          heading3Accessibility1="Strategy Development"
          analyzeYourCurrentITInfrastruct="Create a roadmap to align IT with your objectives."
        />
        <List
          heading3Accessibility="03"
          showHeading3
          propMinWidth="32px"
          propWidth="unset"
          propMinWidth1="268px"
          heading3Accessibility1="Implementation"
          analyzeYourCurrentITInfrastruct="Guide the adoption of new technologies and practices."
        />
        <List
          heading3Accessibility="04"
          showHeading3
          propMinWidth="32px"
          propWidth="unset"
          propMinWidth1="268px"
          heading3Accessibility1="Optimization"
          analyzeYourCurrentITInfrastruct="Continuously refine IT processes to enhance performance."
        />
        <List
          heading3Accessibility="04"
          showHeading3
          heading3Accessibility1="Support"
          analyzeYourCurrentITInfrastruct="Provide ongoing consultation and troubleshooting as needed."
        />
      </div>
    </section>
  );
};

export default MidBlock;

import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import { navigate } from "gatsby";
import List from "./list";
import StatsNumber from "./stats-number";
import * as styles from "./frame-component1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  const onButtonClick = useCallback(() => {
    navigate("/contact-us");
  }, []);

  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.textBlockH1p1Parent}>
        <div className={styles.textBlockH1p1}>
          <div className={styles.caption}>OUR PORTFOLIO</div>
          <h1 className={styles.title}>
            <p className={styles.theCoreValues}>{`The Core Values `}</p>
            <p className={styles.theCoreValues}>That Define Us</p>
          </h1>
          <div className={styles.description}>
            Guided by Principles, Driven by Passion. Our values guide our
            decisions, shape our culture, and ensure that we always deliver the
            best to our clients.
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <b className={styles.letsConnect}>Let’s Connect</b>
          </button>
        </div>
        <div className={styles.list1Parent}>
          <List
            heading3Accessibility="01"
            showHeading3={false}
            propMinWidth="unset"
            propWidth="26px"
            propMinWidth1="unset"
            heading3Accessibility1="Innovation"
            analyzeYourCurrentITInfrastruct="We stay ahead of the curve, continuously exploring new technologies to provide cutting-edge solutions."
          />
          <List
            heading3Accessibility="02"
            showHeading3={false}
            propMinWidth="unset"
            propWidth="32px"
            propMinWidth1="unset"
            heading3Accessibility1="Integrity"
            analyzeYourCurrentITInfrastruct="Our commitment to ethical practices ensures transparency and trust in all our dealings."
          />
          <List
            heading3Accessibility="03"
            showHeading3={false}
            propMinWidth="unset"
            propWidth="32px"
            propMinWidth1="unset"
            heading3Accessibility1="Customer-Centricity"
            analyzeYourCurrentITInfrastruct="Your success is our success. We tailor our solutions to meet your unique needs."
          />
        </div>
      </div>
      <StatsNumber
        statsNumbersContainerWidth="171px"
        frameDivAlignSelf="stretch"
        projectsDeliveredSuccessfullWidth="259px"
        projectsDeliveredSuccessfullDisplay="flex"
        statsNumbersContainerWidth1="171px"
        frameDivAlignSelf1="stretch"
        clientSatisfactionRateWidth="194px"
        clientSatisfactionRateDisplay="flex"
        heading3FontSize="60px"
        heading3MinWidth="84px"
      />
    </section>
  );
};

export default FrameComponent1;

import * as React from "react";
import { FunctionComponent, useMemo, type CSSProperties } from "react";
import * as styles from "./stats-number.module.css";

export type StatsNumberType = {
  className?: string;

  /** Style props */
  statsNumbersContainerWidth?: CSSProperties["width"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
  projectsDeliveredSuccessfullWidth?: CSSProperties["width"];
  projectsDeliveredSuccessfullDisplay?: CSSProperties["display"];
  statsNumbersContainerWidth1?: CSSProperties["width"];
  frameDivAlignSelf1?: CSSProperties["alignSelf"];
  clientSatisfactionRateWidth?: CSSProperties["width"];
  clientSatisfactionRateDisplay?: CSSProperties["display"];
  heading3FontSize?: CSSProperties["fontSize"];
  heading3MinWidth?: CSSProperties["minWidth"];
};

const StatsNumber: FunctionComponent<StatsNumberType> = ({
  className = "",
  statsNumbersContainerWidth,
  frameDivAlignSelf,
  projectsDeliveredSuccessfullWidth,
  projectsDeliveredSuccessfullDisplay,
  statsNumbersContainerWidth1,
  frameDivAlignSelf1,
  clientSatisfactionRateWidth,
  clientSatisfactionRateDisplay,
  heading3FontSize,
  heading3MinWidth,
}) => {
  const statsNumbersContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: statsNumbersContainerWidth,
    };
  }, [statsNumbersContainerWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivAlignSelf]);

  const projectsDeliveredSuccessfullStyle: CSSProperties = useMemo(() => {
    return {
      width: projectsDeliveredSuccessfullWidth,
      display: projectsDeliveredSuccessfullDisplay,
    };
  }, [projectsDeliveredSuccessfullWidth, projectsDeliveredSuccessfullDisplay]);

  const statsNumbersContainer1Style: CSSProperties = useMemo(() => {
    return {
      width: statsNumbersContainerWidth1,
    };
  }, [statsNumbersContainerWidth1]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf1,
    };
  }, [frameDivAlignSelf1]);

  const clientSatisfactionRateStyle: CSSProperties = useMemo(() => {
    return {
      width: clientSatisfactionRateWidth,
      display: clientSatisfactionRateDisplay,
    };
  }, [clientSatisfactionRateWidth, clientSatisfactionRateDisplay]);

  const heading31Style: CSSProperties = useMemo(() => {
    return {
      fontSize: heading3FontSize,
      minWidth: heading3MinWidth,
    };
  }, [heading3FontSize, heading3MinWidth]);

  return (
    <div className={[styles.statsNumber, className].join(" ")}>
      <div className={styles.statsNumbersContainer}>
        <div className={styles.statsNumberLabels}>
          <div className={styles.heading3} style={heading31Style}>
            10+
          </div>
        </div>
        <div className={styles.numberValues}>
          <div className={styles.yearsOfExperience}>Years of experience</div>
        </div>
      </div>
      <div
        className={styles.statsNumbersContainer1}
        style={statsNumbersContainerStyle}
      >
        <div className={styles.heading3AccessibilityWrapper}>
          <div className={styles.heading31}>100+</div>
        </div>
        <div
          className={styles.projectsDeliveredSuccessfullWrapper}
          style={frameDiv1Style}
        >
          <div
            className={styles.projectsDeliveredSuccessfull}
            style={projectsDeliveredSuccessfullStyle}
          >{`Projects Delivered Successfully `}</div>
        </div>
      </div>
      <div
        className={styles.statsNumbersContainer2}
        style={statsNumbersContainer1Style}
      >
        <div className={styles.heading3AccessibilityContainer}>
          <div className={styles.heading32}>93%</div>
        </div>
        <div
          className={styles.projectsDeliveredSuccessfullWrapper}
          style={frameDiv2Style}
        >
          <div
            className={styles.clientSatisfactionRate}
            style={clientSatisfactionRateStyle}
          >
            Client Satisfaction Rate
          </div>
        </div>
      </div>
      <div className={styles.statsNumbersContainer3}>
        <div className={styles.heading3AccessibilityFrame}>
          <div className={styles.heading33}>90%</div>
        </div>
        <div className={styles.projectSuccessRateWrapper}>
          <div className={styles.yearsOfExperience}>Project success rate</div>
        </div>
      </div>
    </div>
  );
};

export default StatsNumber;

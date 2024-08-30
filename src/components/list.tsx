import * as React from "react";
import { FunctionComponent, useMemo, type CSSProperties } from "react";
import * as styles from "./list.module.css";

export type ListType = {
  className?: string;
  heading3Accessibility?: string;
  showHeading3?: boolean;
  heading3Accessibility1?: string;
  analyzeYourCurrentITInfrastruct?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propMinWidth1?: CSSProperties["minWidth"];
};

const List: FunctionComponent<ListType> = ({
  className = "",
  heading3Accessibility,
  showHeading3,
  propMinWidth,
  propWidth,
  propMinWidth1,
  heading3Accessibility1,
  analyzeYourCurrentITInfrastruct,
}) => {
  const heading3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propMinWidth, propWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={[styles.list5, className].join(" ")}>
      {showHeading3 && (
        <div className={styles.heading3} style={heading3Style}>
          {heading3Accessibility}
        </div>
      )}
      <div className={styles.heading3AccessibilityParent} style={frameDivStyle}>
        <div className={styles.heading31}>{heading3Accessibility1}</div>
        <div className={styles.analyzeYourCurrent}>
          {analyzeYourCurrentITInfrastruct}
        </div>
      </div>
    </div>
  );
};

export default List;

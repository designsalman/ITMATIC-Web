import * as React from "react";
import { FunctionComponent, useMemo, type CSSProperties } from "react";
import * as styles from "./card-block-white-h2-p.module.css";

export type CardBlockWhiteH2PType = {
  className?: string;
  emojioneMonotonelightBulb?: boolean;
  vector?: string;
  hugeiconscustomerSupport?: boolean;
  group?: string;
  fontistocode?: boolean;
  vector1?: string;
  fluentdesignIdeasRegular?: boolean;
  vector2?: string;
  privacy?: string;
  privacyIcon?: boolean;
  robot?: string;
  showRobotIcon?: boolean;
  heading3Accessibility?: string;
  defineTheProjectsObjectives?: string;
  vector3?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  component1FlexDirection?: CSSProperties["flexDirection"];
  component1Width?: CSSProperties["width"];
  component1Padding?: CSSProperties["padding"];
  vectorIconWidth?: CSSProperties["width"];
  vectorIconHeight?: CSSProperties["height"];
  component1Overflow?: CSSProperties["overflow"];
  component1Display?: CSSProperties["display"];
  component1Height?: CSSProperties["height"];
  component1Position?: CSSProperties["position"];
  vectorIconAlignSelf?: CSSProperties["alignSelf"];
  vectorIconFontSize?: CSSProperties["fontSize"];
  vectorIconFontFamily?: CSSProperties["fontFamily"];
  vectorIconColor?: CSSProperties["color"];
  vectorIconTextAlign?: CSSProperties["textAlign"];
  heading3FontFamily?: CSSProperties["fontFamily"];
};

const CardBlockWhiteH2P: FunctionComponent<CardBlockWhiteH2PType> = ({
  className = "",
  propMinWidth,
  propHeight,
  emojioneMonotonelightBulb,
  propWidth,
  vector,
  hugeiconscustomerSupport,
  group,
  fontistocode,
  propWidth1,
  vector1,
  fluentdesignIdeasRegular,
  vector2,
  privacy,
  privacyIcon,
  robot,
  showRobotIcon,
  heading3Accessibility,
  defineTheProjectsObjectives,
  component1FlexDirection,
  component1Width,
  component1Padding,
  vector3,
  vectorIconWidth,
  vectorIconHeight,
  component1Overflow,
  component1Display,
  component1Height,
  component1Position,
  vectorIconAlignSelf,
  vectorIconFontSize,
  vectorIconFontFamily,
  vectorIconColor,
  vectorIconTextAlign,
  heading3FontFamily,
}) => {
  const cardBlockWhiteH2P2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      height: propHeight,
    };
  }, [propMinWidth, propHeight]);

  const component1Style: CSSProperties = useMemo(() => {
    return {
      flexDirection: component1FlexDirection,
      width: component1Width,
      padding: component1Padding,
      overflow: component1Overflow,
      display: component1Display,
      height: component1Height,
      position: component1Position,
    };
  }, [
    component1FlexDirection,
    component1Width,
    component1Padding,
    component1Overflow,
    component1Display,
    component1Height,
    component1Position,
  ]);

  const vectorIconStyle: CSSProperties = useMemo(() => {
    return {
      width: vectorIconWidth,
      height: vectorIconHeight,
      alignSelf: vectorIconAlignSelf,
      fontSize: vectorIconFontSize,
      fontFamily: vectorIconFontFamily,
      color: vectorIconColor,
      textAlign: vectorIconTextAlign,
    };
  }, [
    vectorIconWidth,
    vectorIconHeight,
    vectorIconAlignSelf,
    vectorIconFontSize,
    vectorIconFontFamily,
    vectorIconColor,
    vectorIconTextAlign,
  ]);

  const heading32Style: CSSProperties = useMemo(() => {
    return {
      fontFamily: heading3FontFamily,
    };
  }, [heading3FontFamily]);

  return (
    <div
      className={[styles.cardBlockWhiteH2p2, className].join(" ")}
      style={cardBlockWhiteH2P2Style}
    >
      <div className={styles.component1Parent}>
        <div className={styles.component1} style={component1Style}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src={vector3}
            style={vectorIconStyle}
          />
        </div>
        <div className={styles.heading3} style={heading32Style}>
          {heading3Accessibility}
        </div>
        <div className={styles.defineTheProjects}>
          {defineTheProjectsObjectives}
        </div>
      </div>
    </div>
  );
};

export default CardBlockWhiteH2P;

import * as React from "react";
import { FunctionComponent, useMemo, type CSSProperties } from "react";
import * as styles from "./text-block-h1-p.module.css";

export type TextBlockH1PType = {
  className?: string;
  caption?: string;
  caption1?: boolean;
  title?: string;
  description?: string;
  button?: boolean;
  letsConnect?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propColor?: CSSProperties["color"];
  propTextAlign?: CSSProperties["textAlign"];
  propColor1?: CSSProperties["color"];
  propBackground?: CSSProperties["background"];
  propWebkitBackgroundClip?: CSSProperties["webkitBackgroundClip"];
  propWebkitTextFillColor?: CSSProperties["webkitTextFillColor"];
  propTextAlign1?: CSSProperties["textAlign"];
  propColor2?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];
  propMinHeight?: CSSProperties["minHeight"];
  captionFontWeight?: CSSProperties["fontWeight"];
  descriptionFontWeight?: CSSProperties["fontWeight"];
  descriptionAlignSelf?: CSSProperties["alignSelf"];
  descriptionPosition?: CSSProperties["position"];
  descriptionFontSize?: CSSProperties["fontSize"];
  descriptionFontFamily?: CSSProperties["fontFamily"];
  buttonWidth?: CSSProperties["width"];
  buttonBorderRadius?: CSSProperties["borderRadius"];
  buttonFlexDirection?: CSSProperties["flexDirection"];
  buttonPadding?: CSSProperties["padding"];
  buttonWebkitBackgroundClip?: CSSProperties["webkitBackgroundClip"];
  buttonWebkitTextFillColor?: CSSProperties["webkitTextFillColor"];
  letsConnectHeight?: CSSProperties["height"];
  letsConnectFontSize?: CSSProperties["fontSize"];
  letsConnectDisplay?: CSSProperties["display"];
  letsConnectFontFamily?: CSSProperties["fontFamily"];
  letsConnectColor?: CSSProperties["color"];
  letsConnectFontWeight?: CSSProperties["fontWeight"];
};

const TextBlockH1P: FunctionComponent<TextBlockH1PType> = ({
  className = "",
  propWidth,
  propAlignSelf,
  caption,
  caption1,
  propColor,
  title,
  propTextAlign,
  propColor1,
  propBackground,
  propWebkitBackgroundClip,
  propWebkitTextFillColor,
  description,
  propTextAlign1,
  propColor2,
  propDisplay,
  propMinHeight,
  captionFontWeight,
  descriptionFontWeight,
  descriptionAlignSelf,
  descriptionPosition,
  descriptionFontSize,
  descriptionFontFamily,
  button,
  buttonWidth,
  buttonBorderRadius,
  buttonFlexDirection,
  buttonPadding,
  buttonWebkitBackgroundClip,
  buttonWebkitTextFillColor,
  letsConnect,
  letsConnectHeight,
  letsConnectFontSize,
  letsConnectDisplay,
  letsConnectFontFamily,
  letsConnectColor,
  letsConnectFontWeight,
}) => {
  const textBlockH1P1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const captionStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      fontWeight: captionFontWeight,
    };
  }, [propColor, captionFontWeight]);

  const title2Style: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign,
      color: propColor1,
      background: propBackground,
      webkitBackgroundClip: propWebkitBackgroundClip,
      webkitTextFillColor: propWebkitTextFillColor,
    };
  }, [
    propTextAlign,
    propColor1,
    propBackground,
    propWebkitBackgroundClip,
    propWebkitTextFillColor,
  ]);

  const descriptionStyle: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign1,
      color: propColor2,
      display: propDisplay,
      minHeight: propMinHeight,
      fontWeight: descriptionFontWeight,
      alignSelf: descriptionAlignSelf,
      position: descriptionPosition,
      fontSize: descriptionFontSize,
      fontFamily: descriptionFontFamily,
    };
  }, [
    propTextAlign1,
    propColor2,
    propDisplay,
    propMinHeight,
    descriptionFontWeight,
    descriptionAlignSelf,
    descriptionPosition,
    descriptionFontSize,
    descriptionFontFamily,
  ]);

  const letsConnect1Style: CSSProperties = useMemo(() => {
    return {
      textAlign: propTextAlign1,
      color: propColor2,
      display: propDisplay,
      minHeight: propMinHeight,
      fontWeight: descriptionFontWeight,
      height: letsConnectHeight,
      fontSize: letsConnectFontSize,
      display: letsConnectDisplay,
      fontFamily: letsConnectFontFamily,
      color: letsConnectColor,
      fontWeight: letsConnectFontWeight,
    };
  }, [
    propTextAlign1,
    propColor2,
    propDisplay,
    propMinHeight,
    descriptionFontWeight,
    letsConnectHeight,
    letsConnectFontSize,
    letsConnectDisplay,
    letsConnectFontFamily,
    letsConnectColor,
    letsConnectFontWeight,
  ]);

  const button1Style: CSSProperties = useMemo(() => {
    return {
      width: buttonWidth,
      borderRadius: buttonBorderRadius,
      flexDirection: buttonFlexDirection,
      padding: buttonPadding,
      webkitBackgroundClip: buttonWebkitBackgroundClip,
      webkitTextFillColor: buttonWebkitTextFillColor,
    };
  }, [
    buttonWidth,
    buttonBorderRadius,
    buttonFlexDirection,
    buttonPadding,
    buttonWebkitBackgroundClip,
    buttonWebkitTextFillColor,
  ]);

  const letsConnect1Style1: CSSProperties = useMemo(() => {
    return {
      height: letsConnectHeight,
      fontSize: letsConnectFontSize,
      display: letsConnectDisplay,
      fontFamily: letsConnectFontFamily,
      color: letsConnectColor,
      fontWeight: letsConnectFontWeight,
    };
  }, [
    letsConnectHeight,
    letsConnectFontSize,
    letsConnectDisplay,
    letsConnectFontFamily,
    letsConnectColor,
    letsConnectFontWeight,
  ]);

  return (
    <div
      className={[styles.textBlockH1p1, className].join(" ")}
      style={textBlockH1P1Style}
    >
      {!caption1 && (
        <div className={styles.caption} style={captionStyle}>
          {caption}
        </div>
      )}
      <h1 className={styles.title} style={title2Style}>
        {title}
      </h1>
      <div className={styles.description} style={descriptionStyle}>
        {description}
      </div>
      {!button && (
        <div className={styles.button} style={button1Style}>
          <b className={styles.letsConnect} style={letsConnect1Style}>
            {letsConnect}
          </b>
        </div>
      )}
    </div>
  );
};

export default TextBlockH1P;

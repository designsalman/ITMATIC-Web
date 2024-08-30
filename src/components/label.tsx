import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./label.module.css";

export type LabelType = {
  className?: string;
  labelValue?: string;
  showLabelValue?: boolean;
  showIconLeft?: boolean;
};

const Label: FunctionComponent<LabelType> = ({
  className = "",
  labelValue = "Tell us about your project",
  showLabelValue = true,
  showIconLeft = true,
}) => {
  return (
    <div className={[styles.label, className].join(" ")}>
      {showIconLeft && (
        <img
          className={styles.lefticon}
          loading="lazy"
          alt=""
          src="/lefticon.svg"
        />
      )}
      {showLabelValue && <b className={styles.text}>{labelValue}</b>}
    </div>
  );
};

export default Label;

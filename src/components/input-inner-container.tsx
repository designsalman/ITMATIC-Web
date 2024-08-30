import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./input-inner-container.module.css";

export type InputInnerContainerType = {
  className?: string;
  showIconRight?: boolean;
  showIconLeft?: boolean;
  showValue?: boolean;
};

const InputInnerContainer: FunctionComponent<InputInnerContainerType> = ({
  className = "",
  showIconRight = false,
  showIconLeft = true,
  showValue = true,
}) => {
  return (
    <div className={[styles.inputinnercontainer, className].join(" ")}>
      {showIconLeft && (
        <img className={styles.lefticon} alt="" src="/lefticon-1.svg" />
      )}
      {showValue && (
        <input
          className={styles.text}
          placeholder="abc@gmail.com"
          type="text"
        />
      )}
      {showIconRight && (
        <img className={styles.righticon} alt="" src="/righticon.svg" />
      )}
    </div>
  );
};

export default InputInnerContainer;

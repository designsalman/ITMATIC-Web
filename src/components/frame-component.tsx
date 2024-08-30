import * as React from "react";
import { FunctionComponent } from "react";
import Distance from "./distance";
import * as styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.distanceWrapper, className].join(" ")}>
      <Distance />
    </section>
  );
};

export default FrameComponent;

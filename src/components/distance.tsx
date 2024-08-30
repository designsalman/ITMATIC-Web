import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import { navigate } from "gatsby";
import * as styles from "./distance.module.css";

export type DistanceType = {
  className?: string;
};

const Distance: FunctionComponent<DistanceType> = ({ className = "" }) => {
  const onButtonClick = useCallback(() => {
    navigate("/contact-us");
  }, []);

  return (
    <div className={[styles.distance, className].join(" ")}>
      <div className={styles.textBlockH1p1}>
        <div className={styles.caption}>OUR PORTFOLIO</div>
        <h1 className={styles.title}>
          We’re Always There for You, No Matter Where We Are
        </h1>
        <div className={styles.description}>
          Distance is never a barrier when it comes to supporting our clients.
          Whether we're across the globe or just around the corner, our team is
          always available to ensure your success.
        </div>
        <button className={styles.button} onClick={onButtonClick}>
          <b className={styles.letsConnect}>Let’s Connect</b>
        </button>
      </div>
      <img
        className={styles.johnnyAfricaGkcargwTdgUnspIcon}
        loading="lazy"
        alt=""
        src="/johnnyafricagkcargw-tdgunsplash-1@2x.png"
      />
    </div>
  );
};

export default Distance;

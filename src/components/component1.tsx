import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./component1.module.css";

export type Component1Type = {
  className?: string;
};

const Component1: FunctionComponent<Component1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.component1, className].join(" ")}>
      <img
        className={styles.emptyPortfolioItems}
        loading="lazy"
        alt=""
        src="/4@2x.png"
      />
      <img
        className={styles.emptyPortfolioItems}
        loading="lazy"
        alt=""
        src="/5@2x.png"
      />
      <img
        className={styles.emptyPortfolioItems}
        loading="lazy"
        alt=""
        src="/6@2x.png"
      />
      <img
        className={styles.emptyPortfolioItems}
        loading="lazy"
        alt=""
        src="/11@2x.png"
      />
      <img
        className={styles.emptyPortfolioItems}
        loading="lazy"
        alt=""
        src="/21@2x.png"
      />
      <img
        className={styles.emptyPortfolioItems}
        loading="lazy"
        alt=""
        src="/31@2x.png"
      />
      <img
        className={styles.emptyPortfolioItems}
        loading="lazy"
        alt=""
        src="/71@2x.png"
      />
    </div>
  );
};

export default Component1;

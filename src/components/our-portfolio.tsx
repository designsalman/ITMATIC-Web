import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import { navigate } from "gatsby";
import Component1 from "./component1";
import * as styles from "./our-portfolio.module.css";

export type OurPortfolioType = {
  className?: string;
};

const OurPortfolio: FunctionComponent<OurPortfolioType> = ({
  className = "",
}) => {
  const onButtonClick = useCallback(() => {
    navigate("/contact-us");
  }, []);

  return (
    <section className={[styles.ourPortfolio, className].join(" ")}>
      <div className={styles.textBlockH1p1}>
        <div className={styles.caption}>OUR PORTFOLIO</div>
        <h1 className={styles.title}>
          <p
            className={styles.highlightingExcellenceAnd}
          >{`Highlighting Excellence and `}</p>
          <p className={styles.highlightingExcellenceAnd}>
            Innovation in Every Achievement
          </p>
        </h1>
        <div
          className={styles.description}
        >{`Discover how we’ve delivered exceptional solutions across industries. Our portfolio highlights the innovation, quality, and results that define our work, driving success for our clients. `}</div>
        <button className={styles.button} onClick={onButtonClick}>
          <b className={styles.letsConnect}>Let’s Connect</b>
        </button>
      </div>
      <div className={styles.portfolioComponent}>
        <Component1 />
      </div>
    </section>
  );
};

export default OurPortfolio;

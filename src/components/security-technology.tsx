import * as React from "react";
import {
  FunctionComponent,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { navigate } from "gatsby";
import * as styles from "./security-technology.module.css";

export type SecurityTechnologyType = {
  className?: string;

  /** Style props */
  securityTechnologyPadding?: CSSProperties["padding"];
  titleMargin?: CSSProperties["margin"];
  titleFontWeight?: CSSProperties["fontWeight"];
};

const SecurityTechnology: FunctionComponent<SecurityTechnologyType> = ({
  className = "",
  securityTechnologyPadding,
  titleMargin,
  titleFontWeight,
}) => {
  const securityTechnologyStyle: CSSProperties = useMemo(() => {
    return {
      padding: securityTechnologyPadding,
    };
  }, [securityTechnologyPadding]);

  const title1Style: CSSProperties = useMemo(() => {
    return {
      margin: titleMargin,
      fontWeight: titleFontWeight,
    };
  }, [titleMargin, titleFontWeight]);

  const onButtonClick = useCallback(() => {
    navigate("/contact-us");
  }, []);

  return (
    <section
      className={[styles.securityTechnology, className].join(" ")}
      style={securityTechnologyStyle}
    >
      <div className={styles.textBlockH1p1}>
        <div className={styles.caption}>OUR PORTFOLIO</div>
        <h1 className={styles.title} style={title1Style}>
          Transform Your IT Strategy with Itmatic
        </h1>
        <div className={styles.description}>
          Your IT strategy should be a driving force behind your business
          success. At Itmatic, we provide the expertise and insights you need to
          optimize your IT environment and achieve your business goals. Contact
          us today to learn how we can help you navigate the complexities of
          technology and drive sustainable growth.
        </div>
        <button className={styles.button} onClick={onButtonClick}>
          <b className={styles.letsConnect}>Let’s Connect</b>
        </button>
      </div>
    </section>
  );
};

export default SecurityTechnology;

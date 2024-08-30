import * as React from "react";
import { FunctionComponent, memo, useCallback } from "react";
import { navigate } from "gatsby";
import * as styles from "./navigation1.module.css";

export type Navigation1Type = {
  className?: string;

  /** Action props */
  onPortfolioContainerClick?: () => void;
  onAboutUsContainerClick?: () => void;
  onContactUsClick?: () => void;
  onServicesContainerClick?: () => void;
};

const Navigation1: FunctionComponent<Navigation1Type> = memo(
  ({
    className = "",
    onPortfolioContainerClick,
    onAboutUsContainerClick,
    onContactUsClick,
    onServicesContainerClick,
  }) => {
    const onServicesContainerClick1 = useCallback(() => {
      navigate("/i-t-consulting");
    }, []);

    const onPortfolioContainerClick1 = useCallback(() => {
      navigate("/portfolio");
    }, []);

    const onAboutUsContainerClick1 = useCallback(() => {
      navigate("/about-us");
    }, []);

    const onContactUsClick1 = useCallback(() => {
      navigate("/contact-us");
    }, []);

    return (
      <header className={[styles.navigation1, className].join(" ")}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img
              className={styles.logoShapeIcon}
              alt=""
              src="/rectangle@2x.png"
            />
            <a className={styles.itmatic}>ITMATIC</a>
          </div>
          <div className={styles.desktopMenu}>
            <div className={styles.services} onClick={onServicesContainerClick}>
              <a className={styles.services1}>Services</a>
            </div>
            <div
              className={styles.services}
              onClick={onPortfolioContainerClick}
            >
              <a className={styles.portfolio1}>Portfolio</a>
            </div>
            <div className={styles.aboutUs} onClick={onAboutUsContainerClick}>
              <a className={styles.aboutUs1}>About Us</a>
            </div>
            <button className={styles.contactUs} onClick={onContactUsClick}>
              <a className={styles.letsConnect}>Let’s Connect</a>
            </button>
          </div>
          <img className={styles.mobileMenuIcon} alt="" src="/mobilemenu.svg" />
        </div>
      </header>
    );
  }
);

export default Navigation1;

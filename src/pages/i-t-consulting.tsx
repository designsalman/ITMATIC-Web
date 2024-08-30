import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import { navigate } from "gatsby";
import Navigation1 from "../components/navigation1";
import HeroSection1 from "../components/hero-section1";
import MidBlock from "../components/mid-block";
import SecurityTechnology2 from "../components/security-technology2";
import SecurityTechnology from "../components/security-technology";
import DesktopFooter from "../components/desktop-footer";
import * as styles from "./i-t-consulting.module.css";

const ITConsulting: FunctionComponent = () => {
  const onPortfolioContainerClick = useCallback(() => {
    navigate("/portfolio");
  }, []);

  const onAboutUsContainerClick = useCallback(() => {
    navigate("/about-us");
  }, []);

  const onContactUsClick = useCallback(() => {
    navigate("/contact-us");
  }, []);

  return (
    <div className={styles.itConsulting}>
      <Navigation1
        onPortfolioContainerClick={onPortfolioContainerClick}
        onAboutUsContainerClick={onAboutUsContainerClick}
        onContactUsClick={onContactUsClick}
      />
      <HeroSection1 />
      <MidBlock />
      <section className={styles.bottomBlock}>
        <div className={styles.bottomContent}>
          <h1 className={styles.heading3}>
            Did you know? Businesses that align IT with their strategy are 35%
            more likely to experience growth.
          </h1>
        </div>
      </section>
      <SecurityTechnology2 />
      <SecurityTechnology />
      <DesktopFooter
        propAlignSelf="stretch"
        propMarginTop="-1px"
        propMargin="unset"
        propPosition="unset"
        propTop="unset"
        propLeft="unset"
        propPadding="0px 0px 0.1px"
        rectangle6971="/rectangle-6971.svg"
        rectangle6970="/rectangle-6970.svg"
        propTextDecoration="unset"
        rectangle6967="/rectangle-6967.svg"
        iconBackgroundsLeft="32px"
        desktopFooterFlexWrap="unset"
        desktopFooterFlexDirection="row"
        itmaticIsDedicatedFontWeight="unset"
        mobileAppDevelopmentContainerFontWeight="unset"
        sCO46SectorContainerFontWeight="unset"
        letsCollabMargin="0"
        letsCollabFontWeight="400"
      />
    </div>
  );
};

export default ITConsulting;

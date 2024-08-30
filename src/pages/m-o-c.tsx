import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import { navigate } from "gatsby";
import Navigation1 from "../components/navigation1";
import Content from "../components/content";
import Review from "../components/review";
import SecurityTechnology3 from "../components/security-technology3";
import SecurityTechnology from "../components/security-technology";
import DesktopFooter from "../components/desktop-footer";
import * as styles from "./m-o-c.module.css";

const MOC: FunctionComponent = () => {
  const onPortfolioContainerClick = useCallback(() => {
    navigate("/portfolio");
  }, []);

  const onAboutUsContainerClick = useCallback(() => {
    navigate("/about-us");
  }, []);

  const onContactUsClick = useCallback(() => {
    navigate("/contact-us");
  }, []);

  const onServicesContainerClick = useCallback(() => {
    navigate("/i-t-consulting");
  }, []);

  return (
    <div className={styles.moc}>
      <Navigation1
        onPortfolioContainerClick={onPortfolioContainerClick}
        onAboutUsContainerClick={onAboutUsContainerClick}
        onContactUsClick={onContactUsClick}
        onServicesContainerClick={onServicesContainerClick}
      />
      <section className={styles.heroSection}>
        <div className={styles.textBlockH1p1}>
          <div className={styles.caption}>OUR PORTFOLIO</div>
          <h1 className={styles.title}>
            <span>{`Discover India’s Best Online Education `}</span>
            <span className={styles.programs}>Programs</span>
            <span> with My Online College</span>
          </h1>
          <b className={styles.description}>
            <span>
              <p className={styles.itConsultingInvolves}>
                IT consulting involves providing expert advice and solutions to
                help businesses leverage technology effectively. It includes
                assessing your current IT infrastructure, recommending
                improvements, and guiding technology adoption.
              </p>
              <p className={styles.itConsultingInvolves}>
                IT consulting helps businesses align their technology with their
                strategic goals, ensuring long-term success. Did you know?
                Businesses that align IT with their strategy are 35% more likely
                to experience growth.
              </p>
            </span>
          </b>
          <div className={styles.button}>
            <b className={styles.letsConnect}>Let’s Connect</b>
          </div>
        </div>
      </section>
      <section className={styles.moc8Wrapper}>
        <img
          className={styles.moc8Icon}
          loading="lazy"
          alt=""
          src="/moc-8@2x.png"
        />
      </section>
      <Content />
      <Review />
      <SecurityTechnology3 />
      <SecurityTechnology
        securityTechnologyPadding="90px 20px"
        titleMargin="0"
        titleFontWeight="400"
      />
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

export default MOC;

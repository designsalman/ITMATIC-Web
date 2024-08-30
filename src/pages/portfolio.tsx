import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import { navigate } from "gatsby";
import Navigation1 from "../components/navigation1";
import HeroSection from "../components/hero-section";
import HeroSection2 from "../components/hero-section2";
import HeroSection3 from "../components/hero-section3";
import SecurityTechnology from "../components/security-technology";
import DesktopFooter from "../components/desktop-footer";
import * as styles from "./portfolio.module.css";

const Portfolio: FunctionComponent = () => {
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

  const onButtonClick = useCallback(() => {
    navigate("/m-o-c");
  }, []);

  return (
    <div className={styles.portfolio}>
      <Navigation1
        onPortfolioContainerClick={onPortfolioContainerClick}
        onAboutUsContainerClick={onAboutUsContainerClick}
        onContactUsClick={onContactUsClick}
        onServicesContainerClick={onServicesContainerClick}
      />
      <section className={styles.heroSection}>
        <div className={styles.frameParent}>
          <div className={styles.schoolpadLogo1Wrapper}>
            <img
              className={styles.schoolpadLogo1Icon}
              loading="lazy"
              alt=""
              src="/schoolpadlogo-1@2x.png"
            />
          </div>
          <div className={styles.textBlockH1p1}>
            <div className={styles.caption}>ABOUT US</div>
            <div className={styles.title}>
              Transforming Education with Seamless Digital Solutions
            </div>
            <div className={styles.description}>
              Itmatic was founded with a singular vision: to empower businesses
              through innovative technology solutions. Over the past 15 years,
              we’ve grown from a small team of passionate technologists into a
              trusted partner for companies around the globe. Our commitment to
              excellence and our deep industry expertise have allowed us to
              create impactful solutions that drive growth and innovation.
            </div>
            <button className={styles.button} onClick={onContactUsClick}>
              <b className={styles.letsConnect}>Let’s Connect</b>
            </button>
          </div>
        </div>
        <img className={styles.icon} loading="lazy" alt="" src="/4@2x.png" />
      </section>
      <HeroSection
        chitkaraLogo1="/chitkara-logo-1.svg"
        title="Admissions Portal - Lead Management Software (LMS)"
        prop="/5@2x.png"
      />
      <HeroSection
        propBackgroundColor="#87ccff"
        chitkaraLogo1="/frame-1618872204.svg"
        propWidth="250px"
        propOverflow="unset"
        propHeight="51px"
        title="Streamlining Sales Leads and Driving Business Growth"
        propColor="#000"
        propBackgroundColor1="#000"
        propColor1="#fff"
        prop="/6@2x.png"
      />
      <HeroSection
        propBackgroundColor="#b54f3e"
        chitkaraLogo1="/layer-1@2x.png"
        propWidth="250px"
        propOverflow="hidden"
        propHeight="39.4px"
        title={`Simplify Your Home Life with the Virtual Assistant & Management App`}
        propColor="#fff"
        propBackgroundColor1="#000"
        propColor1="#fff"
        prop="/2@2x.png"
      />
      <HeroSection2 />
      <HeroSection
        propBackgroundColor="#000"
        chitkaraLogo1="/chitkara-logo-1.svg"
        propWidth="133.2px"
        propOverflow="hidden"
        propHeight="51px"
        title="A comprehensive website redesign for Enhanced Engagement and Accessibility"
        propColor="#fff"
        propBackgroundColor1="#fff"
        propColor1="#000"
        prop="/3@2x.png"
      />
      <section className={styles.heroSection1}>
        <div className={styles.frameParent}>
          <div className={styles.moc3Wrapper}>
            <img
              className={styles.moc3Icon}
              loading="lazy"
              alt=""
              src="/moc-3@2x.png"
            />
          </div>
          <div className={styles.textBlockH1p11}>
            <div className={styles.caption}>ABOUT US</div>
            <div className={styles.title}>
              Discover Trusted Online Learning Partner
            </div>
            <div className={styles.description}>
              Itmatic was founded with a singular vision: to empower businesses
              through innovative technology solutions. Over the past 15 years,
              we’ve grown from a small team of passionate technologists into a
              trusted partner for companies around the globe. Our commitment to
              excellence and our deep industry expertise have allowed us to
              create impactful solutions that drive growth and innovation.
            </div>
            <button className={styles.button} onClick={onButtonClick}>
              <b className={styles.letsConnect}>Let’s Connect</b>
            </button>
          </div>
        </div>
        <img className={styles.icon} loading="lazy" alt="" src="/7@2x.png" />
      </section>
      <HeroSection3 />
      <SecurityTechnology
        securityTechnologyPadding="90px 20px"
        titleMargin="unset"
        titleFontWeight="unset"
      />
      <DesktopFooter
        propAlignSelf="stretch"
        propMarginTop="-1px"
        propMargin="unset"
        propPosition="unset"
        propTop="unset"
        propLeft="unset"
        propPadding="unset"
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
        letsCollabMargin="unset"
        letsCollabFontWeight="unset"
      />
    </div>
  );
};

export default Portfolio;

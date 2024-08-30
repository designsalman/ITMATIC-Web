import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import { navigate } from "gatsby";
import Navigation1 from "../components/navigation1";
import TextBlockH1P from "../components/text-block-h1-p";
import FrameComponent1 from "../components/frame-component1";
import SecurityTechnology4 from "../components/security-technology4";
import SecurityTechnology from "../components/security-technology";
import DesktopFooter from "../components/desktop-footer";
import * as styles from "./about-us.module.css";

const AboutUs: FunctionComponent = () => {
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
    <div className={styles.aboutUs}>
      <Navigation1
        onPortfolioContainerClick={onPortfolioContainerClick}
        onAboutUsContainerClick={onAboutUsContainerClick}
        onContactUsClick={onContactUsClick}
        onServicesContainerClick={onServicesContainerClick}
      />
      <section className={styles.heroSection}>
        <TextBlockH1P
          propWidth="1100px"
          propAlignSelf="unset"
          caption="OUR STORY"
          caption1
          propColor="#fff"
          title="Our Journey to Excellence"
          propTextAlign="left"
          propColor1="#fff"
          propBackground="unset"
          propWebkitBackgroundClip="unset"
          propWebkitTextFillColor="unset"
          description="Itmatic was founded with a singular vision: to empower businesses through innovative technology solutions. Over the past 15 years, we’ve grown from a small team of passionate technologists into a trusted partner for companies around the globe. Our commitment to excellence and our deep industry expertise have allowed us to create impactful solutions that drive growth and innovation."
          propTextAlign1="left"
          propColor2="#fff"
          propDisplay="unset"
          propMinHeight="unset"
          captionFontWeight="bold"
          descriptionFontWeight="unset"
          descriptionAlignSelf="stretch"
          descriptionPosition="relative"
          descriptionFontSize="20px"
          descriptionFontFamily="'Noto Sans'"
          button={false}
          buttonWidth="149px"
          buttonBorderRadius="30px"
          buttonFlexDirection="column"
          buttonPadding="12px 24px"
          buttonWebkitBackgroundClip="unset"
          buttonWebkitTextFillColor="unset"
          letsConnect="Let’s Connect"
          letsConnectHeight="24px"
          letsConnectFontSize="16px"
          letsConnectDisplay="flex"
          letsConnectFontFamily="'IBM Plex Sans'"
          letsConnectColor="#fff"
          letsConnectFontWeight="unset"
        />
      </section>
      <FrameComponent1 />
      <SecurityTechnology4 />
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

export default AboutUs;

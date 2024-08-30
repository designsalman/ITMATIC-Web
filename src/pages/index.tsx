import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import { navigate } from "gatsby";
import Navigation1 from "../components/navigation1";
import OurPortfolio from "../components/our-portfolio";
import TextBlockH1P from "../components/text-block-h1-p";
import StatsNumber from "../components/stats-number";
import Services from "../components/services";
import HowWeWork from "../components/how-we-work";
import FrameComponent from "../components/frame-component";
import SecurityTechnology1 from "../components/security-technology1";
import Industry from "../components/industry";
import Testimonials from "../components/testimonials";
import DesktopFooter from "../components/desktop-footer";
import * as styles from "./index.module.css";

const Homepage: FunctionComponent = () => {
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
    <div className={styles.homepage}>
      <Navigation1
        onPortfolioContainerClick={onPortfolioContainerClick}
        onAboutUsContainerClick={onAboutUsContainerClick}
        onContactUsClick={onContactUsClick}
        onServicesContainerClick={onServicesContainerClick}
      />
      <section className={styles.heroSection}>
        <div className={styles.weCraftDeliverSupportWrapper}>
          <h1 className={styles.weCraftDeliverContainer}>
            <span>{`We Craft. `}</span>
            <span className={styles.deliver}>Deliver.</span>
            <span className={styles.support}> Support.</span>
          </h1>
        </div>
        <b className={styles.heading3}>
          Crafting digital excellence across industries—where innovation meets
          dedication.
        </b>
        <div
          className={styles.discoverHowWeve}
        >{`Discover how we’ve delivered exceptional solutions across industries. Our portfolio highlights the innovation, quality, and results that define our work, driving success for our clients. Our portfolio highlights the innovation, quality, and results that define our work, driving success for our clients. `}</div>
      </section>
      <section className={styles.clients}>
        <img
          className={styles.newEffect2Icon}
          loading="lazy"
          alt=""
          src="/neweffect-2@2x.png"
        />
        <img
          className={styles.newEffect2Icon}
          loading="lazy"
          alt=""
          src="/inscol-1@2x.png"
        />
        <img
          className={styles.stories1Icon}
          loading="lazy"
          alt=""
          src="/360stories-1@2x.png"
        />
        <img className={styles.newEffect2Icon} alt="" src="/ttaiff-1@2x.png" />
        <img
          className={styles.newEffect2Icon}
          alt=""
          src="/chitkara-1@2x.png"
        />
        <img className={styles.newEffect2Icon} alt="" src="/zingit-1@2x.png" />
        <img className={styles.newEffect2Icon} alt="" src="/aspire-2@2x.png" />
      </section>
      <OurPortfolio />
      <section className={styles.stats}>
        <TextBlockH1P
          propWidth="1100px"
          propAlignSelf="unset"
          caption="OUR PORTFOLIO"
          caption1
          propColor="#000"
          title="Drive Unmatched Results with Proven Solutions"
          propTextAlign="left"
          propColor1="#000"
          propBackground="unset"
          propWebkitBackgroundClip="unset"
          propWebkitTextFillColor="unset"
          description="Enhance Project Success with Our Expertise, Delivering reliable results, on time and within budget. Discover the certifications I’ve earned in the product design and UI/UX industry."
          propTextAlign1="left"
          propColor2="#000"
          propDisplay="unset"
          propMinHeight="unset"
          captionFontWeight="600"
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
        <StatsNumber />
      </section>
      <Services />
      <HowWeWork />
      <FrameComponent />
      <SecurityTechnology1 />
      <Industry />
      <Testimonials />
      <DesktopFooter
        rectangle6971="/rectangle-6971.svg"
        rectangle6970="/rectangle-6970.svg"
        rectangle6967="/rectangle-6967.svg"
      />
    </div>
  );
};

export default Homepage;

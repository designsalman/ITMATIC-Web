import * as React from "react";
import { FunctionComponent, useCallback } from "react";
import { navigate } from "gatsby";
import Navigation1 from "../components/navigation1";
import Form from "../components/form";
import DesktopFooter from "../components/desktop-footer";
import * as styles from "./contact-us.module.css";

const ContactUs: FunctionComponent = () => {
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
    <div className={styles.contactUs}>
      <Navigation1
        onPortfolioContainerClick={onPortfolioContainerClick}
        onAboutUsContainerClick={onAboutUsContainerClick}
        onContactUsClick={onContactUsClick}
        onServicesContainerClick={onServicesContainerClick}
      />
      <main className={styles.frameParent}>
        <section className={styles.imageWrapper}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
        </section>
        <section className={styles.formParent}>
          <Form />
          <DesktopFooter
            propAlignSelf="stretch"
            propMarginTop="unset"
            propMargin="unset"
            propPosition="unset"
            propTop="unset"
            propLeft="unset"
            propPadding="unset"
            rectangle6970="/rectangle-6970.svg"
            propTextDecoration="unset"
            iconBackgroundsLeft="0.1px"
            desktopFooterFlexWrap="unset"
            desktopFooterFlexDirection="row"
            itmaticIsDedicatedFontWeight="unset"
            mobileAppDevelopmentContainerFontWeight="unset"
            sCO46SectorContainerFontWeight="unset"
            letsCollabMargin="0"
            letsCollabFontWeight="400"
          />
        </section>
      </main>
    </div>
  );
};

export default ContactUs;

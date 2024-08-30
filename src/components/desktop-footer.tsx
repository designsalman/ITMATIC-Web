import * as React from "react";
import { FunctionComponent, useMemo, type CSSProperties } from "react";
import * as styles from "./desktop-footer.module.css";

export type DesktopFooterType = {
  className?: string;
  rectangle6971?: string;
  rectangle6970?: string;
  rectangle6967?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propMarginTop?: CSSProperties["marginTop"];
  propMargin?: CSSProperties["margin"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propPadding?: CSSProperties["padding"];
  propTextDecoration?: CSSProperties["textDecoration"];
  iconBackgroundsLeft?: CSSProperties["left"];
  desktopFooterFlexWrap?: CSSProperties["flexWrap"];
  desktopFooterFlexDirection?: CSSProperties["flexDirection"];
  itmaticIsDedicatedFontWeight?: CSSProperties["fontWeight"];
  mobileAppDevelopmentContainerFontWeight?: CSSProperties["fontWeight"];
  sCO46SectorContainerFontWeight?: CSSProperties["fontWeight"];
  letsCollabMargin?: CSSProperties["margin"];
  letsCollabFontWeight?: CSSProperties["fontWeight"];
};

const DesktopFooter: FunctionComponent<DesktopFooterType> = ({
  className = "",
  propAlignSelf,
  propMarginTop,
  propMargin,
  propPosition,
  propTop,
  propLeft,
  propPadding,
  rectangle6971,
  rectangle6970,
  propTextDecoration,
  rectangle6967,
  iconBackgroundsLeft,
  desktopFooterFlexWrap,
  desktopFooterFlexDirection,
  itmaticIsDedicatedFontWeight,
  mobileAppDevelopmentContainerFontWeight,
  sCO46SectorContainerFontWeight,
  letsCollabMargin,
  letsCollabFontWeight,
}) => {
  const desktopFooterStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      marginTop: propMarginTop,
      margin: propMargin,
      position: propPosition,
      top: propTop,
      left: propLeft,
      flexWrap: desktopFooterFlexWrap,
      flexDirection: desktopFooterFlexDirection,
    };
  }, [
    propAlignSelf,
    propMarginTop,
    propMargin,
    propPosition,
    propTop,
    propLeft,
    desktopFooterFlexWrap,
    desktopFooterFlexDirection,
  ]);

  const contactColumnStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const iTMATICStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: propTextDecoration,
    };
  }, [propTextDecoration]);

  const iconBackgroundsStyle: CSSProperties = useMemo(() => {
    return {
      left: iconBackgroundsLeft,
    };
  }, [iconBackgroundsLeft]);

  const itmaticIsDedicatedStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: itmaticIsDedicatedFontWeight,
    };
  }, [itmaticIsDedicatedFontWeight]);

  const mobileAppDevelopmentContainerStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: mobileAppDevelopmentContainerFontWeight,
    };
  }, [mobileAppDevelopmentContainerFontWeight]);

  const sCO46SectorContainerStyle: CSSProperties = useMemo(() => {
    return {
      fontWeight: sCO46SectorContainerFontWeight,
    };
  }, [sCO46SectorContainerFontWeight]);

  const letsCollabStyle: CSSProperties = useMemo(() => {
    return {
      margin: letsCollabMargin,
      fontWeight: letsCollabFontWeight,
    };
  }, [letsCollabMargin, letsCollabFontWeight]);

  return (
    <footer
      className={[styles.desktopFooter, className].join(" ")}
      style={desktopFooterStyle}
    >
      <div className={styles.footerContainer}>
        <h1 className={styles.letsCollab} style={letsCollabStyle}>
          Let’s Collab.
        </h1>
        <div className={styles.desktopMenu}>
          <div className={styles.aboutColumn}>
            <div className={styles.aboutItmatic}>About ITMATIC</div>
            <div
              className={styles.itmaticIsDedicated}
              style={itmaticIsDedicatedStyle}
            >
              Itmatic is dedicated to transforming ideas into powerful digital
              solutions. With 15 years of expertise, we specialize in delivering
              innovative IT services that drive success and growth for our
              clients. From design to deployment, we ensure excellence at every
              step.
            </div>
          </div>
          <div className={styles.servicesColumn}>
            <div className={styles.servicesHeading}>
              <div className={styles.service}>Service</div>
            </div>
            <div className={styles.servicesHeading1}>
              <div
                className={styles.mobileAppDevelopmentContainer}
                style={mobileAppDevelopmentContainerStyle}
              >
                <p className={styles.mobileAppDevelopment}>
                  Mobile App Development
                </p>
                <p className={styles.mobileAppDevelopment}>
                  Web App Development
                </p>
                <p className={styles.mobileAppDevelopment}>UI/UX Designing</p>
                <p className={styles.mobileAppDevelopment}>
                  Custom Software Development
                </p>
                <p className={styles.mobileAppDevelopment}>Quality Assurance</p>
                <p className={styles.mobileAppDevelopment}>IT Consulting</p>
              </div>
            </div>
          </div>
          <div className={styles.contactColumn} style={contactColumnStyle}>
            <div className={styles.frameParent}>
              <div className={styles.vectorWrapper}>
                <img className={styles.frameChild} alt="" src={rectangle6971} />
              </div>
              <div className={styles.iconBackgrounds} />
              <div
                className={styles.iconBackgrounds1}
                style={iconBackgroundsStyle}
              />
              <img className={styles.frameItem} alt="" src={rectangle6970} />
              <a className={styles.itmatic} style={iTMATICStyle}>
                ITMATIC
              </a>
              <div className={styles.iconBackgrounds2} />
              <img className={styles.frameInner} alt="" src={rectangle6967} />
            </div>
            <div className={styles.contactHeading}>
              <div className={styles.service}>Get in Touch</div>
            </div>
            <div className={styles.contactHeading1}>
              <div
                className={styles.mobileAppDevelopmentContainer}
                style={sCO46SectorContainerStyle}
              >
                <p
                  className={styles.mobileAppDevelopment}
                >{`SCO 46, Sector 80, `}</p>
                <p className={styles.mobileAppDevelopment}>Mohali, 140308,</p>
                <p className={styles.mobileAppDevelopment}>India</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mobileMenu}>
          <div className={styles.aboutItmaticParent}>
            <div className={styles.aboutItmatic1}>About ITMATIC</div>
            <div className={styles.itmaticIsDedicated1}>
              Itmatic is dedicated to transforming ideas into powerful digital
              solutions. With 15 years of expertise, we specialize in delivering
              innovative IT services that drive success and growth for our
              clients. From design to deployment, we ensure excellence at every
              step.
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.serviceWrapper}>
              <div className={styles.service1}>Service</div>
            </div>
            <div className={styles.mobileAppDevelopmentWebAppWrapper}>
              <div className={styles.mobileAppDevelopmentContainer1}>
                <p className={styles.mobileAppDevelopment}>
                  Mobile App Development
                </p>
                <p className={styles.mobileAppDevelopment}>
                  Web App Development
                </p>
                <p className={styles.mobileAppDevelopment}>UI/UX Designing</p>
                <p className={styles.mobileAppDevelopment}>
                  Custom Software Development
                </p>
                <p className={styles.mobileAppDevelopment}>Quality Assurance</p>
                <p className={styles.mobileAppDevelopment}>IT Consulting</p>
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.itmaticParent}>
              <div className={styles.itmatic1}>ITMATIC</div>
              <div className={styles.rectangleDiv} />
              <div className={styles.frameChild1} />
              <img
                className={styles.rectangleIcon}
                alt=""
                src="/rectangle-6970.svg"
              />
              <img
                className={styles.frameChild2}
                alt=""
                src="/rectangle-6971.svg"
              />
              <div className={styles.frameChild3} />
              <img
                className={styles.frameChild4}
                alt=""
                src="/rectangle-6967.svg"
              />
            </div>
            <div className={styles.getInTouchWrapper}>
              <div className={styles.service1}>Get in Touch</div>
            </div>
            <div className={styles.sco46Sector80Mohali140Wrapper}>
              <div className={styles.sco46SectorContainer1}>
                <p
                  className={styles.mobileAppDevelopment}
                >{`SCO 46, Sector 80, `}</p>
                <p className={styles.mobileAppDevelopment}>Mohali, 140308,</p>
                <p className={styles.mobileAppDevelopment}>India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DesktopFooter;

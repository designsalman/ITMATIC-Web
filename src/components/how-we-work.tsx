import * as React from "react";
import { FunctionComponent } from "react";
import TextBlockH1P from "./text-block-h1-p";
import CardBlockWhiteH2P from "./card-block-white-h2-p";
import * as styles from "./how-we-work.module.css";

export type HowWeWorkType = {
  className?: string;
};

const HowWeWork: FunctionComponent<HowWeWorkType> = ({ className = "" }) => {
  return (
    <section className={[styles.howWeWork, className].join(" ")}>
      <TextBlockH1P
        propWidth="1100px"
        propAlignSelf="unset"
        caption="OUR PORTFOLIO"
        caption1={false}
        propColor="#000"
        title="How We Work"
        propTextAlign="center"
        propColor1="#fff"
        propBackground="unset"
        propWebkitBackgroundClip="unset"
        propWebkitTextFillColor="unset"
        description="With deep experience across diverse industries, we understand the unique challenges and opportunities in your sector. Our tailored solutions leverage industry-specific knowledge to deliver impactful results"
        propTextAlign1="center"
        propColor2="#fff"
        propDisplay="unset"
        propMinHeight="unset"
        captionFontWeight="600"
        descriptionFontWeight="bold"
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
      <div className={styles.workflowSteps}>
        <CardBlockWhiteH2P
          propMinWidth="257px"
          propHeight="unset"
          heading3Accessibility={`Discovery & Planning`}
          defineTheProjectsObjectives="Define the project’s objectives, scope, and gather initial requirements. Define the project’s objectives, scope, and gather initial requirements."
          component1FlexDirection="row"
          component1Width="unset"
          component1Padding="4.9px 11px"
          vector3="/vector.svg"
          vectorIconWidth="28px"
          vectorIconHeight="42px"
          component1Overflow="hidden"
          component1Display="flex"
          component1Height="unset"
          component1Position="unset"
          vectorIconAlignSelf="unset"
          vectorIconFontSize="unset"
          vectorIconFontFamily="unset"
          vectorIconColor="unset"
          vectorIconTextAlign="unset"
          heading3FontFamily="'DM Serif Display'"
        />
        <CardBlockWhiteH2P
          propMinWidth="257px"
          propHeight="unset"
          heading3Accessibility={`Design & Prototype`}
          defineTheProjectsObjectives="Develop design documents, wireframes, and technical specifications. Get client approval."
          component1FlexDirection="column"
          component1Width="50px"
          component1Padding="4.8px 6px 4.7px 4px"
          vector3="/vector-1.svg"
          vectorIconWidth="39px"
          vectorIconHeight="39px"
          component1Overflow="hidden"
          component1Display="flex"
          component1Height="unset"
          component1Position="unset"
          vectorIconAlignSelf="unset"
          vectorIconFontSize="unset"
          vectorIconFontFamily="unset"
          vectorIconColor="unset"
          vectorIconTextAlign="unset"
          heading3FontFamily="'DM Serif Display'"
        />
        <CardBlockWhiteH2P
          propMinWidth="257px"
          propHeight="unset"
          heading3Accessibility={`Development & Testing`}
          defineTheProjectsObjectives="Set up the development environment, start coding, and conduct unit testing and code reviews."
          component1FlexDirection="column"
          component1Width="unset"
          component1Padding="10.7px 6px"
          vector3="/vector-2.svg"
          vectorIconWidth="38.1px"
          vectorIconHeight="28.6px"
          component1Overflow="hidden"
          component1Display="flex"
          component1Height="unset"
          component1Position="unset"
          vectorIconAlignSelf="unset"
          vectorIconFontSize="unset"
          vectorIconFontFamily="unset"
          vectorIconColor="unset"
          vectorIconTextAlign="unset"
          heading3FontFamily="'DM Serif Display'"
        />
        <CardBlockWhiteH2P
          propMinWidth="257px"
          propHeight="unset"
          heading3Accessibility={`Deployment & Support`}
          defineTheProjectsObjectives="Deploy to staging for client review, then move to production. Configure necessary settings."
          component1FlexDirection="column"
          component1Width="50px"
          component1Padding="7.1px 6px 7.2px 4px"
          vector3="/group.svg"
          vectorIconWidth="39px"
          vectorIconHeight="35.1px"
          component1Overflow="hidden"
          component1Display="flex"
          component1Height="unset"
          component1Position="unset"
          vectorIconAlignSelf="unset"
          vectorIconFontSize="unset"
          vectorIconFontFamily="unset"
          vectorIconColor="unset"
          vectorIconTextAlign="unset"
          heading3FontFamily="'DM Serif Display'"
        />
      </div>
    </section>
  );
};

export default HowWeWork;

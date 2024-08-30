import * as React from "react";
import { FunctionComponent } from "react";
import TextBlockH1P from "./text-block-h1-p";
import CardBlockWhiteH2P from "./card-block-white-h2-p";
import * as styles from "./security-technology2.module.css";

export type SecurityTechnology2Type = {
  className?: string;
};

const SecurityTechnology2: FunctionComponent<SecurityTechnology2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.securityTechnology, className].join(" ")}>
      <TextBlockH1P
        propWidth="1100px"
        propAlignSelf="unset"
        caption="OUR PORTFOLIO"
        caption1={false}
        propColor="#000"
        title="Strategic IT Consulting for Business Excellence"
        propTextAlign="left"
        propColor1="#000"
        propBackground="unset"
        propWebkitBackgroundClip="unset"
        propWebkitTextFillColor="unset"
        description="With extensive experience in the IT industry, we provide expert insights and practical solutions tailored to your business needs. Our consulting services focus on optimizing IT resources, reducing costs, and enhancing efficiency. By staying current with the latest trends, we ensure that your business remains competitive and future-ready."
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
      <div className={styles.cardBlock}>
        <CardBlockWhiteH2P
          propMinWidth="360px"
          propHeight="unset"
          heading3Accessibility="IT solutions designed to support and advance your business objectives."
          defineTheProjectsObjectives="IT solutions designed to support and advance your business objectives."
          component1FlexDirection="unset"
          component1Width="50px"
          component1Padding="unset"
          vectorIconWidth="unset"
          vectorIconHeight="unset"
          component1Overflow="unset"
          component1Display="unset"
          component1Height="51.8px"
          component1Position="relative"
          vectorIconAlignSelf="stretch"
          vectorIconFontSize="20px"
          vectorIconFontFamily="'DM Serif Display'"
          vectorIconColor="#000"
          vectorIconTextAlign="left"
          heading3FontFamily="'Noto Sans'"
        />
        <CardBlockWhiteH2P
          propMinWidth="360px"
          propHeight="unset"
          heading3Accessibility="Streamlining IT resources to cut operational expenses."
          defineTheProjectsObjectives="Streamlining IT resources to cut operational expenses."
          component1FlexDirection="unset"
          component1Width="50px"
          component1Padding="unset"
          vectorIconWidth="unset"
          vectorIconHeight="unset"
          component1Overflow="unset"
          component1Display="unset"
          component1Height="51.8px"
          component1Position="relative"
          vectorIconAlignSelf="stretch"
          vectorIconFontSize="20px"
          vectorIconFontFamily="'DM Serif Display'"
          vectorIconColor="#000"
          vectorIconTextAlign="left"
          heading3FontFamily="'Noto Sans'"
        />
        <CardBlockWhiteH2P
          propMinWidth="360px"
          propHeight="unset"
          heading3Accessibility="Expert guidance on adopting emerging technologies to prepare your business for future challenges."
          defineTheProjectsObjectives="Expert guidance on adopting emerging technologies to prepare your business for future challenges."
          component1FlexDirection="unset"
          component1Width="50px"
          component1Padding="unset"
          vectorIconWidth="unset"
          vectorIconHeight="unset"
          component1Overflow="unset"
          component1Display="unset"
          component1Height="51.8px"
          component1Position="relative"
          vectorIconAlignSelf="stretch"
          vectorIconFontSize="20px"
          vectorIconFontFamily="'DM Serif Display'"
          vectorIconColor="#000"
          vectorIconTextAlign="left"
          heading3FontFamily="'Noto Sans'"
        />
      </div>
    </section>
  );
};

export default SecurityTechnology2;

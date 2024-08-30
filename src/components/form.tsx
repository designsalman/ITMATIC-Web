import * as React from "react";
import { FunctionComponent } from "react";
import TextBlockH1P from "./text-block-h1-p";
import InputInnerContainer from "./input-inner-container";
import Label from "./label";
import * as styles from "./form.module.css";

export type FormType = {
  className?: string;
};

const Form: FunctionComponent<FormType> = ({ className = "" }) => {
  return (
    <form className={[styles.form, className].join(" ")}>
      <TextBlockH1P
        propWidth="unset"
        propAlignSelf="stretch"
        caption="ABOUT US"
        caption1={false}
        propColor="#000"
        title="Contact Us"
        propTextAlign="center"
        propColor1="#000"
        propBackground="unset"
        propWebkitBackgroundClip="unset"
        propWebkitTextFillColor="unset"
        description="Contact us today to learn how we can help you navigate the complexities of technology and drive sustainable growth."
        propTextAlign1="center"
        propColor2="#000"
        propDisplay="inline-block"
        propMinHeight="64px"
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
      <div className={styles.inputFields}>
        <div className={styles.nameEmailInputs}>
          <div className={styles.nameEmailContainer}>
            <div className={styles.input}>
              <div className={styles.label}>
                <img className={styles.lefticon} alt="" src="/lefticon.svg" />
                <b className={styles.text}>
                  <span className={styles.fullName}>Full Name</span>
                  <span className={styles.span}>*</span>
                </b>
              </div>
              <div className={styles.inputcontainer}>
                <input
                  className={styles.inputinnercontainer}
                  placeholder="John"
                  type="text"
                />
              </div>
              <div className={styles.response}>
                <img className={styles.lefticon1} alt="" src="/lefticon1.svg" />
                <div className={styles.text1}>Response</div>
              </div>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.input}>
              <div className={styles.label}>
                <img className={styles.lefticon} alt="" src="/lefticon.svg" />
                <b className={styles.text2}>
                  <span className={styles.fullName}>Email</span>
                  <span className={styles.span}>*</span>
                </b>
              </div>
              <div className={styles.inputcontainer1}>
                <InputInnerContainer
                  showIconRight={false}
                  showIconLeft
                  showValue
                />
              </div>
              <div className={styles.response}>
                <img className={styles.lefticon1} alt="" src="/lefticon1.svg" />
                <div className={styles.text1}>Response</div>
              </div>
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <div className={styles.input}>
              <div className={styles.label}>
                <img className={styles.lefticon} alt="" src="/lefticon.svg" />
                <b className={styles.text4}>Phone Number*</b>
              </div>
              <div className={styles.inputcontainer1}>
                <InputInnerContainer showIconRight showIconLeft showValue />
              </div>
              <div className={styles.response}>
                <img className={styles.lefticon1} alt="" src="/lefticon1.svg" />
                <div className={styles.text1}>Response</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.messageInput}>
          <div className={styles.nameEmailContainer}>
            <div className={styles.input}>
              <div className={styles.label}>
                <img className={styles.lefticon} alt="" src="/lefticon.svg" />
                <b className={styles.text6}>Full Name</b>
              </div>
              <div className={styles.inputcontainer}>
                <input
                  className={styles.inputinnercontainer}
                  placeholder="John"
                  type="text"
                />
              </div>
              <div className={styles.response}>
                <img className={styles.lefticon1} alt="" src="/lefticon1.svg" />
                <div className={styles.text1}>Response</div>
              </div>
            </div>
          </div>
          <div className={styles.input4}>
            <Label
              labelValue="Tell us about your project"
              showLabelValue
              showIconLeft
            />
            <textarea
              className={styles.inputcontainer4}
              placeholder="Tell us about your use case..."
              rows={8}
              cols={26}
            />
            <div className={styles.response}>
              <img className={styles.lefticon1} alt="" src="/lefticon1.svg" />
              <div className={styles.text1}>Response</div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.link}>
        <b className={styles.submit}>Submit</b>
      </button>
    </form>
  );
};

export default Form;

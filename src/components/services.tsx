import * as React from "react";
import { FunctionComponent } from "react";
import CardBlockH2P from "./card-block-h2-p";
import * as styles from "./services.module.css";

export type ServicesType = {
  className?: string;
};

const Services: FunctionComponent<ServicesType> = ({ className = "" }) => {
  return (
    <section className={[styles.services, className].join(" ")}>
      <div className={styles.textBlockH1p1}>
        <b className={styles.caption}>OUR PORTFOLIO</b>
        <h1 className={styles.title}>
          <p
            className={styles.comprehensiveItServices}
          >{`Comprehensive IT Services to `}</p>
          <p className={styles.comprehensiveItServices}>
            <span className={styles.empowerAndElevate}>
              Empower and Elevate
            </span>
            <span className={styles.yourBusiness}> Your Business</span>
          </p>
        </h1>
        <div
          className={styles.description}
        >{`Discover how we’ve delivered exceptional solutions across industries. Our portfolio highlights the innovation, quality, and results that define our work, driving success for our clients. `}</div>
        <div className={styles.button}>
          <b className={styles.letsConnect}>Let’s Connect</b>
        </div>
      </div>
      <div className={styles.serviceCards}>
        <CardBlockH2P
          heading3Accessibility="Web Applications"
          scalableWebApplicationsTailored="Scalable web applications tailored to meet your business goals with seamless performance."
        />
        <CardBlockH2P
          heading3Accessibility="Mobile Apps"
          scalableWebApplicationsTailored="Custom mobile app development to enhance user engagement and drive business growth."
        />
        <CardBlockH2P
          heading3Accessibility="UI/UX Designing"
          scalableWebApplicationsTailored="Intuitive UI/UX design that enhances user experience and drives customer satisfaction."
        />
        <CardBlockH2P
          heading3Accessibility="Quality Assurance"
          scalableWebApplicationsTailored="Rigorous testing to ensure your software products are reliable, secure, and error-free."
        />
        <CardBlockH2P
          heading3Accessibility="Software Development"
          scalableWebApplicationsTailored="End-to-end software development services that transform ideas into powerful, scalable solutions."
        />
        <CardBlockH2P
          heading3Accessibility="IT Consulting"
          scalableWebApplicationsTailored="Expert IT consulting to align your technology strategy with your business objectives."
        />
      </div>
    </section>
  );
};

export default Services;

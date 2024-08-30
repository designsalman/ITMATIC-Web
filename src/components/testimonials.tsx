import * as React from "react";
import { FunctionComponent } from "react";
import TextBlockH1P from "./text-block-h1-p";
import * as styles from "./testimonials.module.css";

export type TestimonialsType = {
  className?: string;
};

const Testimonials: FunctionComponent<TestimonialsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.testimonials, className].join(" ")}>
      <TextBlockH1P
        caption="OUR PORTFOLIO"
        caption1
        title="What Our Client Say"
        description="We prioritize top-tier security and stay ahead with cutting-edge technology. Our solutions are designed to protect your data and ensure robust, reliable performance."
        button
        letsConnect="Let’s Connect"
      />
      <div className={styles.testimonialQuotes}>
        <div className={styles.quoteContainers}>
          <div className={styles.quoteImages}>
            <img
              className={styles.imageTypeIcon}
              loading="lazy"
              alt=""
              src="/vector-5@2x.png"
            />
          </div>
          <div className={styles.salmansDesignExpertiseIsTWrapper}>
            <blockquote className={styles.salmansDesignExpertise}>
              "Salman's design expertise is truly impressive. He effortlessly
              transforms user needs into intuitive, elegant designs. Reliable,
              creative, and a pleasure to work with, Salman brings exceptional
              value to an organization"
            </blockquote>
          </div>
          <div className={styles.authorInfo}>
            <div className={styles.authorAvatars}>
              <img
                className={styles.avatarShapeIcon}
                loading="lazy"
                alt=""
                src="/ellipse-1@2x.png"
              />
            </div>
            <div className={styles.authorNames}>
              <div className={styles.shankarRamchandran}>
                Shankar Ramchandran
              </div>
              <b className={styles.zuki}>Zuki</b>
            </div>
          </div>
        </div>
        <div className={styles.quoteContainers}>
          <div className={styles.agency1}>
            <img
              className={styles.clipPathGroup}
              loading="lazy"
              alt=""
              src="/clip-path-group.svg"
            />
          </div>
          <div className={styles.salmansDesignExpertiseIsTWrapper}>
            <blockquote className={styles.salmansDesignExpertise}>
              "They’re absolute pro, They combines creativity with a deep
              understanding of user experience. His designs are not only
              visually stunning but also incredibly user-friendly. Working with
              him has been a game changer”
            </blockquote>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.authorAvatars}>
              <img
                className={styles.avatarShapeIcon}
                loading="lazy"
                alt=""
                src="/ellipse-1-1@2x.png"
              />
            </div>
            <div className={styles.authorNames}>
              <div className={styles.shankarRamchandran}>Nashid Braswell</div>
              <b className={styles.zuki}>Agency Maison</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import * as React from "react";
import { FunctionComponent } from "react";
import * as styles from "./review.module.css";

export type ReviewType = {
  className?: string;
};

const Review: FunctionComponent<ReviewType> = ({ className = "" }) => {
  return (
    <section className={[styles.review, className].join(" ")}>
      <div className={styles.hisExpertiseAsAProductDesParent}>
        <blockquote className={styles.hisExpertiseAs}>
          "His expertise as a product designer has been transformative for us.
          He brought innovative solutions and a user-first approach to our
          Ed-tech products, elevating the quality and functionality. His ability
          to balance aesthetics with practicality has truly set our products
          apart."
        </blockquote>
        <div className={styles.ellipseParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/ellipse-2@2x.png"
          />
          <div className={styles.saurabhSharmaParent}>
            <div className={styles.saurabhSharma}>Saurabh Sharma</div>
            <div className={styles.chitkaraUniversity}>Chitkara University</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

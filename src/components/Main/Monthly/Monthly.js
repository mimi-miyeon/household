import React from "react";

import styles from "./Monthly.module.css";

const Monthly = () => {
  return (
    <section className={styles["section--graph"]}>
      <div className={styles.wrapper}>
        <h2>Monthly</h2>
        <div className={styles["con-wrapper"]}>
          <ul className={styles["graph-bars"]}>
            <li>
              <div>
                <span></span>
              </div>
            </li>
            <li>
              <div>
                <span></span>
              </div>
            </li>
            <li>
              <div>
                <span></span>
              </div>
            </li>
          </ul>
          <div className={styles["graph-lines"]}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={styles["graph-labels"]}>
            <li>Jun</li>
            <li>Jul</li>
            <li>Aug</li>
            <li>Sep</li>
            <li>Oct</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Monthly;
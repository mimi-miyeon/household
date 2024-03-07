import React from "react";

import styles from "./Monthly.module.css";

const Monthly = () => {
  return (
    <div className={styles["graph-wrapper"]}>
      <h2>Monthly</h2>
      <div className={styles["graph"]}>
        <div className={styles["graph--inside"]}>
          <ul className={styles["graph-lines"]}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <ul className={styles["graph-bars"]}>
              <li className={styles.bar}>
                <span className={styles.card}></span>
                <span className={styles.cash}></span>
                <span className={styles["money-left"]}></span>
              </li>
          </ul>
        </div>
        <div className={styles["graph--outside"]}>
          <ul className={styles["graph-labels"]}>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Monthly;
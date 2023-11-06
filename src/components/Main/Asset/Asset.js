import React from "react";

import styles from "./Asset.module.css"

const Asset = () => {
  return (
    <section className={styles["section--asset"]}>
      <div className={styles["total"]}>
        <p>Total assets</p>
        <h2>￦ 300,000</h2>
      </div>

      <div className={styles["detail"]}>
        <article className={styles.cash}>
          <div>
            <h3>Cash</h3>
            <b>￦ 300,000</b>
          </div>
        </article>
        <article className={styles.card}>
          <div>
            <h3>Card</h3>
            <b>￦ 300,000</b>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Asset;
import React from "react";
import styles from "./Asset.module.css";

const Asset = () => {
  return (
    <div className={styles["asset-wrapper"]}>
      <div className={styles["detail"]}>
        <article className={styles["cash"]}>
          <div>
            <h3>Cash</h3>
            <b>￦</b>
          </div>
        </article>
        <article className={styles["card"]}>
          <div>
            <h3>Cash</h3>
            <b>￦</b>
          </div>
        </article>
      </div>
    </div>
  );
};
export default Asset;
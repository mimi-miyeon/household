import React from "react";

import styles from "./MoneyLeft.module.css"

const MoneyLeft = () => {
  const moneyLeft = 100;
  return (
    <div className={styles["moneyLeft-wrapper"]}>
      <p>Money left</p>
      <h2>￦ {moneyLeft}</h2>
    </div>
  );
};

export default MoneyLeft;
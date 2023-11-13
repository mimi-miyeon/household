import React, { useEffect, useState } from "react";

import styles from "./Asset.module.css"

const Asset = () => {
  const DUMMY_DATA = {
    cardTopUp: 700000,
    cashTopUp: 70000,
    cardSpent: 7000,
    cashSpent: 700
  };
  
  const [leftMoney, setLeftMoney] = useState(DUMMY_DATA.cardTopUp+DUMMY_DATA.cashTopUp-DUMMY_DATA.cashSpent-DUMMY_DATA.cardSpent);
  const [cardLeft, setCardLeft] = useState(DUMMY_DATA.cardTopUp-DUMMY_DATA.cashSpent);
  const [cashLeft, setCashLeft] = useState(DUMMY_DATA.cashTopUp-DUMMY_DATA.cardSpent);

  useEffect(()=>{
    setLeftMoney(DUMMY_DATA.cardTopUp+DUMMY_DATA.cashTopUp-DUMMY_DATA.cashSpent-DUMMY_DATA.cardSpent);
    setCardLeft(DUMMY_DATA.cardTopUp-DUMMY_DATA.cashSpent);
    setCashLeft(DUMMY_DATA.cashTopUp-DUMMY_DATA.cardSpent);
  },[DUMMY_DATA.cardTopUp,DUMMY_DATA.cardSpent,DUMMY_DATA.cashTopUp,DUMMY_DATA.cashSpent]);

  return (
    <section className={styles["section--asset"]}>
      <div className={styles["total"]}>
        <p>Money left</p>
        <h2>￦ {leftMoney}</h2>
      </div>

      <div className={styles["detail"]}>
        <article className={styles.cash}>
          <div>
            <h3>Cash</h3>
            <b>￦ {cashLeft}</b>
          </div>
        </article>
        <article className={styles.card}>
          <div>
            <h3>Card</h3>
            <b>￦ {cardLeft}</b>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Asset;
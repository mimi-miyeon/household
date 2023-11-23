import React, { useEffect, useState, useContext } from "react";
import MoneyDataProvider, {MoneyData} from "../../../store/money-data";

import styles from "./Asset.module.css"

const Asset = () => {
  const MoneyCtx = useContext(MoneyData);

  const {commaInsertHandler} = useContext(MoneyData);
  
  const DUMMY_DATA = {
    cardTopUp: 700000,
    cashTopUp: 70000,
    cardSpent: 7000,
    cashSpent: 700
  };
  
  const [leftMoney, setLeftMoney] = useState(DUMMY_DATA.cardTopUp+DUMMY_DATA.cashTopUp-DUMMY_DATA.cashSpent-DUMMY_DATA.cardSpent);
  const [cardLeft, setCardLeft] = useState(DUMMY_DATA.cardTopUp-DUMMY_DATA.cashSpent);
  const [cashLeft, setCashLeft] = useState(DUMMY_DATA.cashTopUp-DUMMY_DATA.cardSpent);

  // useEffect(()=>{
  //   setLeftMoney(DUMMY_DATA.cardTopUp+DUMMY_DATA.cashTopUp-DUMMY_DATA.cashSpent-DUMMY_DATA.cardSpent);
  //   setCardLeft(DUMMY_DATA.cardTopUp-DUMMY_DATA.cashSpent);
  //   setCashLeft(DUMMY_DATA.cashTopUp-DUMMY_DATA.cardSpent);
  // },[DUMMY_DATA.cardTopUp,DUMMY_DATA.cardSpent,DUMMY_DATA.cashTopUp,DUMMY_DATA.cashSpent]);

  return (
    <MoneyDataProvider>
      <div className={styles["detail"]}>
        <article className={styles.cash}>
          <div>
            <h3>Cash</h3>
            <b>￦ {commaInsertHandler(cashLeft)}</b>
          </div>
        </article>
        <article className={styles.card}>
          <div>
            <h3>Card</h3>
            <b>￦ {commaInsertHandler(cardLeft)}</b>
          </div>
        </article>
      </div>
      <button onClick={MoneyCtx.totalCashLeft}>test</button>
    </MoneyDataProvider>
  );
};

export default Asset;
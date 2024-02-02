import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {Data} from "../../../store/money-data";

import styles from "./Asset.module.css"

const Asset = () => {
  const {commaInsertHandler} = useContext(Data).moneyData;

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

  const location = useLocation().pathname;

  const assetStyled = location === '/' ? (
    <div className={styles["asset-wrapper"]}>
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
    </div>
  ) : (
    <ul className={styles["asset-wrapper--text-style"]}>
      <li>
        <span>Cash : </span>
        <span>￦ {commaInsertHandler(3000)}</span>
      </li>
      <li>
        <span>Card : </span>
        <span>￦ {commaInsertHandler(3000)}</span>
      </li>
    </ul>
  );

  return (
    <>{assetStyled}</>
  );
};

export default Asset;
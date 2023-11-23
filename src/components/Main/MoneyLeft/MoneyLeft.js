import React,{useState, useEffect} from "react";
import styles from "./MoneyLeft.module.css"

const DUMMY_DATA = {
  cardTopUp: 700000,
  cashTopUp: 70000,
  cardSpent: 7000,
  cashSpent: 700
};
  
const MoneyLeft = () => {
  const [leftMoney, setLeftMoney] = useState(DUMMY_DATA.cardTopUp+DUMMY_DATA.cashTopUp-DUMMY_DATA.cashSpent-DUMMY_DATA.cardSpent);
  const [cardLeft, setCardLeft] = useState(DUMMY_DATA.cardTopUp-DUMMY_DATA.cashSpent);
  const [cashLeft, setCashLeft] = useState(DUMMY_DATA.cashTopUp-DUMMY_DATA.cardSpent);
  
  useEffect(()=>{
    setLeftMoney(DUMMY_DATA.cardTopUp+DUMMY_DATA.cashTopUp-DUMMY_DATA.cashSpent-DUMMY_DATA.cardSpent);
    setCardLeft(DUMMY_DATA.cardTopUp-DUMMY_DATA.cashSpent);
    setCashLeft(DUMMY_DATA.cashTopUp-DUMMY_DATA.cardSpent);
  },[DUMMY_DATA.cardTopUp,DUMMY_DATA.cardSpent,DUMMY_DATA.cashTopUp,DUMMY_DATA.cashSpent]);

  const commaHandler = (sum) => {
    return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className={styles["moneyLeft-wrapper"]}>
      <p>Money left</p>
      <h2>￦ {commaHandler(leftMoney)}</h2>
    </div>
  )
};

export default MoneyLeft;
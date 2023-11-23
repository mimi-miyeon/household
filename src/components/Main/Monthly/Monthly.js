import React from "react";

import styles from "./Monthly.module.css";

// graph month labels

/*
const thisMonthIndex = new Date().getMonth();
const n_originGraphCount = 5;

const n_firstStartIndex = thisMonthIndex-n_originGraphCount < 0 ? 0 : thisMonthIndex-n_originGraphCount;
const arr_labelNames1 = arr_monthNames.slice(n_firstStartIndex, thisMonthIndex);

const n_lastStartIndex = thisMonthIndex-n_originGraphCount < 0 ? arr_monthNames.length+(thisMonthIndex-n_originGraphCount) : arr_monthNames.length;
const arr_labelNames2 = arr_monthNames.slice(n_lastStartIndex);

const arr_labelNames = arr_labelNames2.concat(arr_labelNames1);
*/
const arr_monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// DUMMY DATA for Graph
const EXPENSE_DUMMY = [
  {
    year: 2023,
    month: 11,
    cashSpent: 3000,
    cardSpent: 60000,
    cashAdded: 0,
    cardAdded: 600000
  },
  {
    year: 2023,
    month: 10,
    cashSpent: 30000,
    cardSpent: 556300,
    cashAdded: 0,
    cardAdded: 600000
  },
  {
    year: 2023,
    month: 9,
    cashSpent: 500000,
    cardSpent: 100000,
    cashAdded: 0,
    cardAdded: 600000
  },
  {
    year: 2023,
    month: 8,
    cashSpent: 300000,
    cardSpent: 236300,
    cashAdded: 0,
    cardAdded: 600000
  },
  {
    year: 2023,
    month: 7,
    cashSpent: 13000,
    cardSpent: 466300,
    cashAdded: 0,
    cardAdded: 600000
  },
  {
    year: 2023,
    month: 6,
    cashSpent: 3000,
    cardSpent: 560000,
    cashAdded: 0,
    cardAdded: 600000
  },
  {
    year: 2023,
    month: 5,
    cashSpent: 30000,
    cardSpent: 501000,
    cashAdded: 0,
    cardAdded: 600000
  }
];

const arr_EXPENSE_DUMMY = EXPENSE_DUMMY.slice(0, 5).reverse();

const monthConvertHandler = (month) => {
  return arr_monthNames[month -1];
};

const graphHeightHandler = (total, sum) => {
  const perPercent = total/100;
  const sumHeight = Math.floor(sum/perPercent);
  return sumHeight;
};

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
            {arr_EXPENSE_DUMMY.map(graph => {return (
              <li key={graph.month} className={styles.bar}>
                <span className={styles.card} style={{height: `${graphHeightHandler(graph.cashAdded+graph.cardAdded, graph.cardSpent)}%`}} title={graph.cardSpent}></span>
                <span className={styles.cash} style={{height: `${graphHeightHandler(graph.cashAdded+graph.cardAdded, graph.cashSpent)}%`}} title={graph.cashSpent}></span>
                <span className={styles["money-left"]} style={{height: `${graphHeightHandler(graph.cashAdded+graph.cardAdded, (graph.cashAdded+graph.cardAdded)-(graph.cardSpent+graph.cashSpent))}%`}} title={(graph.cashAdded+graph.cardAdded)-(graph.cardSpent+graph.cashSpent)}></span>
              </li>
            )})}
          </ul>
        </div>
        <div className={styles["graph--outside"]}>
          <ul className={styles["graph-labels"]}>
            {arr_EXPENSE_DUMMY.map(label=> {return <li style={{width: `calc(100% / ${arr_EXPENSE_DUMMY.length})`}} key={label.month}>{monthConvertHandler(label.month)}</li>})}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Monthly;
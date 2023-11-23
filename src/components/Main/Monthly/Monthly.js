import React from "react";

import styles from "./Monthly.module.css";

// graph month labels

/*
const arr_monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const thisMonthIndex = new Date().getMonth();
const n_originGraphCount = 5;

const n_firstStartIndex = thisMonthIndex-n_originGraphCount < 0 ? 0 : thisMonthIndex-n_originGraphCount;
const arr_labelNames1 = arr_monthNames.slice(n_firstStartIndex, thisMonthIndex);

const n_lastStartIndex = thisMonthIndex-n_originGraphCount < 0 ? arr_monthNames.length+(thisMonthIndex-n_originGraphCount) : arr_monthNames.length;
const arr_labelNames2 = arr_monthNames.slice(n_lastStartIndex);

const arr_labelNames = arr_labelNames2.concat(arr_labelNames1);
*/

// DUMMY DATA for Graph
const EXPENSE_DUMMY = [
  {
    year: 2023,
    month: 11,
    cashSpent: 3000,
    cardSpent: 6000,
    cashAdded: 0,
    cardAdded: 9000,
    spentList : [
      {
        title: "",
        date: null,
        store: "",
        price: null,
        category: ""
      }
    ],
    // totalAdded: this.cardAdded + this.cashAdded,
      // totalSpent: this.cash + this.card,
      // totalLeft: this.totalAdded - this.totalSpent
  }
];

const arr_EXPENSE_DUMMY = EXPENSE_DUMMY.slice(0, 5);

const graphHeightHandler = (total, sum) => {
  const perPercent = total/100;
  const sumHeight = Math.floor(sum/perPercent);
  return sumHeight;
};

const Monthly = () => {
  return (
    <section className={styles["section--graph"]}>
      <div className={styles.wrapper}>
        <h2>Monthly</h2>
        <div className={styles["con-wrapper"]}>
          <div className={styles["graph-wrapper"]}>
            <ul className={styles["graph-lines"]}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul className={styles["graph-bars"]}>
              {arr_EXPENSE_DUMMY.map(graph => {return (
                <li key={graph.month} className={styles.bar}>
                  <span className={styles.card} style={{height: `${graphHeightHandler(graph.cashAdded+graph.cardAdded, graph.cashSpent+graph.cardSpent)}%`}} title={graph.cardSpent}></span>
                  <span className={styles.cash} style={{height: `${graphHeightHandler(graph.cashAdded+graph.cardAdded, graph.cashSpent)}%`}} title={graph.cashSpent}></span>
                </li>
              )})}
            </ul>
          </div>
          <ul className={styles["graph-labels"]}>
            {arr_EXPENSE_DUMMY.map(label=> {return <li style={{width: `calc(100% / ${arr_EXPENSE_DUMMY.length})`}} key={label.month}>{label.month}</li>})}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Monthly;
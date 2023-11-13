import React from "react";
import { Link } from "react-router-dom";

import styles from "./List.module.css";
const DUMMY_LIST = [
  {
    itemName : "Banana",
    price: 3000,
    store: "NoBrand",
    date: "2/11/2023",
    category: "Food",
    type: "-"
  },
  {
    itemName : "Banana",
    price: 3000,
    store: "NoBrand",
    date: "2/11/2023",
    category: "Food",
    type: "-"
  },
  {
    itemName : "Banana",
    price: 3000,
    store: "NoBrand",
    date: "2/11/2023",
    category: "Food",
    type: "-"
  },
  {
    itemName : "Banana",
    price: 3000,
    store: "NoBrand",
    date: "2/11/2023",
    category: "Food",
    type: "-"
  },
  {
    itemName : "Banana",
    price: 3000,
    store: "NoBrand",
    date: "2/11/2023",
    category: "Food",
    type: "-"
  },

];
const DUMMY_SHORT = DUMMY_LIST.slice(0,2);
const List = () => {
  return (
    <section className={styles["section--list"]}>
      <div className={styles["list-wrapper"]}>
        <ul>
          {DUMMY_SHORT.map(item=>{return (
            <li>
              <span className={styles.icon} role="img" aria-label="food icon">{item.category}</span>
              <div className={styles["text-wrapper"]}>
                <hBanana4>{item.itemName}</hBanana4>
                <p className={styles.info}>{item.date} · {item.store}</p>
                <p className={styles.price}>￦ {item.price}</p>
              </div>
            </li>
          )})}
        </ul>
      </div>
      <Link to="/Wallet" className={`${styles.btTypeOne} btTypeOne`}><p>More List</p> <span></span></Link>
    </section>
  )
};

export default List;

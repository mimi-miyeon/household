import React from "react";

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
    category: "",
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
    category: "",
    type: "-"
  },

];

const DUMMY_SHORT = DUMMY_LIST.slice(0,2);

const commaHandler = (sum) => {
  return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const categoryIconHandler = (category) => {
  switch (category) {
    case "Food":
      return "🥗"
  
    default:
      return "🤷‍♀️"
  }
};

const List = () => {
  return (
    <div className={styles["list-wrapper"]}>
      <ul>
        {DUMMY_SHORT.map(item=>{return (
          <li key={item.date + "-" + item.itemName}>
            <span className={styles.icon} role="img" aria-label="food icon">{categoryIconHandler(item.category)}</span>
            <div className={styles["text-wrapper"]}>
              <h4>{item.itemName}</h4>
              <p className={styles.info}>{item.date} · {item.store}</p>
              <p className={styles.price}>￦ {commaHandler(item.price)}</p>
            </div>
          </li>
        )})}
      </ul>
    </div>
  )
};

export default List;

import React, { useState, useContext, useEffect } from "react";

import styles from "./List.module.css";
import { Data } from "../../../store/money-data";

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
  const {itemInfo} = useContext(Data);
  const [slicedItem, setSlicedItem] = useState([]);

  useEffect(()=>{
    setSlicedItem(itemInfo);
  },[itemInfo]);

  return (
    <div className={styles["list-wrapper"]}>
      <ul>
        {slicedItem.map(item=>{return (
          <li key={item.date + "-" + item.itemName}>
            <span className={styles.icon} role="img" aria-label="category icon">{categoryIconHandler(item.category)}</span>
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

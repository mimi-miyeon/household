import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ActionButtons.module.css";

const arrFilter = ["Date", "Store", "Category"];

const ActionButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const filterHandler = () => setIsOpen(!isOpen);

  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
};

  return (
    <div className={styles["actionButtons-wrapper"]}>
      <Link to="/Wallet" className={`${styles.btTypeTwo} btTypeTwo`}>Add item</Link>
      <div className={styles["dropdown-container"]}>
        <div onClick={filterHandler} className={`${styles.btTypeOne} ${styles["dropdown-header"]} btTypeOne`}>{selectedOption || "Filter"}</div>
        {isOpen && <div className={styles["dropdown-list-container"]}>
          <ul className={styles["dropdown-list"]}>
            {arrFilter.map(option=>(<li className={selectedOption === option && styles.selected} onClick={onOptionClicked(option)} key={option}>{option}</li>))}
          </ul>
        </div>}
      </div>
    </div>
  );
};

export default ActionButtons;
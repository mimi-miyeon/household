import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ActionButtons.module.css";

const arrFilter = ["Date", "Store", "Category"];

const ActionButtons = ({onOpenModal}) => {
  const [openFilter, setOpenFilter] = useState(false);
  const filterHandler = () => setOpenFilter(!openFilter);
  const [selectedOption, setSelectedOption] = useState(null);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setOpenFilter(false);
  };

  return (
    <div className={styles["actionButtons-wrapper"]}>
      <button type="text" className={`${styles.btTypeTwo} btTypeTwo`} onClick={()=>onOpenModal()}>Add item</button>
      <div className={styles["dropdown-container"]}>
        <div onClick={filterHandler} className={`${styles.btTypeOne} ${styles["dropdown-header"]} btTypeOne`}>{selectedOption || "Filter"}</div>
        {openFilter && <div className={styles["dropdown-list-container"]}>
          <ul className={styles["dropdown-list"]}>
            {arrFilter.map(option=>(<li className={selectedOption === option && styles.selected} onClick={onOptionClicked(option)} key={option}>{option}</li>))}
          </ul>
        </div>}
      </div>
    </div>
  );
};

export default ActionButtons;
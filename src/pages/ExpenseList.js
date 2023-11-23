import React from "react";
import styles from "../components/Main/List/List.module.css";
import MoneyLeft from "../components/Main/MoneyLeft/MoneyLeft"
import List from "../components/Main/List/List";

const ExpenseList = () => {
  return (
    <section className={styles["section--asset"]}>
      <MoneyLeft />
      <List />
    </section>
  );
};

export default ExpenseList;
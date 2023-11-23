import React from "react";
import styles from "../components/Main/List/List.module.css";
import MoneyLeft from "../components/Main/MoneyLeft/MoneyLeft"
import List from "../components/Main/List/List";
import MoneyDataProvider from "../store/money-data";
import ActionButtons from "../components/Main/ActionButtons/ActionButtons";

const ExpenseList = () => {
  return (
    <section className={styles["section--asset"]}>
      <MoneyDataProvider>
        <MoneyLeft />
      </MoneyDataProvider>
      <ActionButtons />
      <List />
    </section>
  );
};

export default ExpenseList;
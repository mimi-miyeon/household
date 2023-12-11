import React from "react";
import styles from "../components/Main/List/List.module.css";
import MoneyLeft from "../components/Main/MoneyLeft/MoneyLeft"
import List from "../components/Main/List/List";
import ActionButtons from "../components/Main/ActionButtons/ActionButtons";

const ExpenseList = ({onOpenModal}) => {
  return (
    <section className={styles["section--asset"]}>
      <MoneyLeft />
      <ActionButtons onOpenModal={onOpenModal} />
      <List />
    </section>
  );
};

export default ExpenseList;
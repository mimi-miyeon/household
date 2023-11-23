import React from "react";
import MoneyLeft from "../components/Main/MoneyLeft/MoneyLeft";
import Asset from "../components/Main/Asset/Asset";
import Monthly from "../components/Main/Monthly/Monthly";
import List from "../components/Main/List/List";
import styles from "../components/Main/Asset/Asset.module.css"

const Main = () => {
  return (
    <>
      <section className={styles["section--asset"]}>
        <MoneyLeft />
      </section>
      <Asset />
      <Monthly />
      <List />
    </>
  );
};

export default Main;
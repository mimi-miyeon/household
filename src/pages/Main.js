import React from "react";
import MoneyLeft from "../components/Main/MoneyLeft/MoneyLeft";
import Asset from "../components/Main/Asset/Asset";
import Monthly from "../components/Main/Monthly/Monthly";
import List from "../components/Main/List/List";
import MoneyDataProvider from "../store/money-data";
import MoreListButton from "../components/Main/List/MoreListButton";

const Main = () => {
  return (
    <>
      <MoneyDataProvider>
        <section>
          <MoneyLeft />
          <Asset />
        </section>
      </MoneyDataProvider>

      <section>
        <Monthly />
      </section>

      <section className="section--list">
        <List />
        <MoreListButton />
      </section>
    </>
  );
};

export default Main;
import React from "react";
import Asset from "./Asset/Asset";
import Monthly from "./Monthly/Monthly";
import List from "./List/List";

const Main = () => {
  return (
    <main className="inner-content">
        <Asset />
        <Monthly />
        <List />
      </main>
  );
};

export default Main;
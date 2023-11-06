import React from "react";

import Card from "../UI/Card/Card"

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={`${styles["header__inner-content"]} inner-content`}>
        <h1>Dashboard</h1>
        <div>
          <button type="button">
            <span role="img" aria-label="list">
              📖
            </span>
          </ button>
          <button type="button">
            <span role="img" aria-label="wallet">
              💸
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  const pageName = "Dashboard";
  return (
    <header>
      <nav className={`${styles["header__inner-content"]} inner-content`}>
        <h1>{pageName}</h1>
        <ul>
          <li>
            <a>
              <span role="img" aria-label="list" title="list">
                🏡
              </span>
            </a>
          </li>
          <li>
            <a>
              <span role="img" aria-label="list" title="List">
                📖
              </span>
            </a>
          </li>
          <li>
            <a>
              <span role="img" aria-label="list" title="List">
                💸
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
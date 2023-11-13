import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav className={`${styles["header__inner-content"]} inner-content`}>
        <h1>Dashboard</h1>
        <ul>
          <li>
            <NavLink 
              to="/" 
              style={({isActive})=>({display: isActive && "none"})} 
              end={true}
            >
              <span role="img" aria-label="list" title="List">
                🏡
              </span>
            </NavLink>
          </li>
          <li>
          <NavLink 
            to="/ExpenseList"
            style={({isActive})=>({display: isActive && "none"})} 
          >
            <span role="img" aria-label="list" title="List">
              📖
            </span>
          </NavLink>
          </li>
          <li>
          <NavLink 
            to="/Wallet" 
            style={({isActive})=>({display: isActive && "none"})} 
          >
            <span role="img" aria-label="wallet" title="wallet">
              💸
            </span>
          </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

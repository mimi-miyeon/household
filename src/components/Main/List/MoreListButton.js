import React from "react";
import {Link} from "react-router-dom";
import styles from "./MoreListButton.module.css";

const MoreListButton = () => {
  return (
    <Link to="/ExpenseList" className={`${styles.btTypeOne} btTypeOne`}><p>More List</p> <span></span></Link>
  );
}

export default MoreListButton;
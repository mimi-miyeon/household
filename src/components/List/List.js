import React from "react";

import styles from "./List.module.css"

const List = () => {
  return (
    <div className={styles["list-wrapper"]}>
      <ul>
        <li>
          <span className={styles.icon} role="img" aria-label="category icon">카테고리 아이콘</span>
          <div className={styles["text-wrapper"]}>
            <h4>구매상품명</h4>
            <p>MM.DD · 구매장소</p>
            <p>￦ 가격</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default List;
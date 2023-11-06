import React from "react";

const List = () => {
  return (
    <section>
      <div>
        <ul>
          <li style={{display: "flex", alignItems: "center", padding:"15px", backgroundColor: "white", borderRadius: "1rem"}}>
            <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: "50px", backgroundColor: "var(--cGyTwo)", borderRadius: "1rem"}}>🥗</span>
            <div style={{width: "100%", position: "relative"}}>
              <h4>Banana</h4>
              <p style={{fontSize: "var(--fsSmall)"}}>2/11/2023 · NoBrand</p>
              <p style={{position: "absolute", right: 0, top: 0}}>￦ 3,000</p>
            </div>
          </li>
        </ul>
      </div>
      <button><p>More List</p> <span></span></button>
    </section>
  )
};

export default List;

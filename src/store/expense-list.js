import React, {createContext} from "react";

const expenseListData = createContext([
  {
    itemName : "",
    price: 3000,
    store: "NoBrand",
    date: 2/11/2023,
    category: "Food",
    type: "-"
  }
]);

const ExpenseListData = ({children}) => {
  const expenseListDataUpdate = [{
    itemName : "",
    price: 3000,
    store: "NoBrand",
    date: 2/11/2023,
    category: "Food",
    type: "-"
  }]
  return (
    <expenseListData.Provider value={expenseListDataUpdate}>

    </expenseListData.Provider>
  );
};
import React, {useContext} from "react";
import ExpenseData from "./expense-data"

const ExpenseDataProvider = ({children}) => {
  const expenseCtxUpdate = ([
    {
      year: null,
      month: null,
      cashSpent: 0,
      cashAdded: 0,
      cardSpent: 0,
      cardAdded: 0,
      totalSpent: 0,
      totalLeft: 0,
      cashAddedHandler : () => {},
      cashSpenHandler : () => {},
      cardAddedHandler : () => {},
      cardSpenHandler : () => {},
      totalSpentHandler : () => {},
      totalLeftHandler : () => {}
    },
  ]);

  return (
    <ExpenseData.Provider value={expenseCtxUpdate}>
      {children}
    </ExpenseData.Provider>
  );
};

export default ExpenseDataProvider;
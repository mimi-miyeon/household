import React, { createContext, useState } from "react";

export const MoneyData = createContext(
  {
    cashIn: null,
    cashOut: null,
    cardIn: null,
    cardOut: null,
    totalCashLeft : () => {},
    totalCardLeft : () => {},
    totalIn: () => {},
    totalOut: () => {},
    totalLeft: () => {},
    commaInsertHandler: () => {}
}
);

const MoneyDataProvider = ({children}) => {
  const [cashIn, setCashIn] = useState(0);
  const [cashOut, setCashOut] = useState(0);
  const [cardIn, setCardIn] = useState(0);
  const [cardOut, setCardOut] = useState(0);
  
  const commaHandler = (sum) => {
    return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const moneyDataUpdate = {
    cashIn: cashIn,
    cashOut: cashOut,
    cardIn: cardIn,
    cardOut: cardOut,
    totalCashLeft : () => {},
    totalCardLeft : () => {},
    totalIn: () => {},
    totalOut: () => {},
    totalLeft: () => {},
    commaInsertHandler: commaHandler,
  };

  return (
    <MoneyData.Provider value={moneyDataUpdate}>
      {children}
    </MoneyData.Provider>
  );
};

export default MoneyDataProvider;
import { createContext, useState } from "react";

export const MoneyData = createContext({
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
});

export default function MoneyDataProvider ({children}) {
  const [cashIn, setCashIn] = useState(0);
  const [cashOut, setCashOut] = useState(0);
  const [cardIn, setCardIn] = useState(0);
  const [cardOut, setCardOut] = useState(0);
  

  const commaInsertHandler = (sum) => {
    return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const cashInHandler = (inCash) => {
    setCashIn(prev=>{prev+=inCash});
    console.log('test')
  }

  const moneyDataUpdate = ({
    cashIn: cashIn,
    cashOut: cashOut,
    cardIn: cardIn,
    cardOut: cardOut,
    totalCashLeft : cashInHandler,
    totalCardLeft : () => {},
    totalIn: () => {},
    totalOut: () => {},
    totalLeft: () => {},
    commaInsertHandler: commaInsertHandler,
  });

  return (
    <MoneyData.Provider value={moneyDataUpdate}>
      {children}
    </MoneyData.Provider>
  );
};
// export default MoneyDataProvider;
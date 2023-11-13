import React, {createContext} from "react";

const ASSET_DUMMY_DATA = createContext([
  {
    year: null,
    month: null,
    cash: 0,
    card: 0,
    totalSpent: 0,
    totalLeft: 0,
    cashTopUpHandler : () => {},
    cashSpenHandler : () => {},
    cardTopUpHandler : () => {},
    cardSpenHandler : () => {},
    totalSpentHandler : () => {},
    totalLeftHandler : () => {}
  },
]);

export default ASSET_DUMMY_DATA;
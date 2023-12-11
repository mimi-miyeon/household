import React, { createContext, useState, useEffect } from "react";

export const Data = createContext(
  {
    itemInfo : {},
    itemInfoHandler : () => {},
    moneyData: {
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
  }
);

// itemInfo 
// 'itemInfo'에 값이 없으면 빈 배열, 있으면 해당 배열을 가져온다.
const storageItemInfo = JSON.parse(localStorage.getItem('itemInfo')) || [];

/**
 * [fn void]
 * 숫자에 ','를 추가하는 함수
*/
const commaHandler = (sum) => {
  return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * [fn]
 * 지출한 방법으로 객체를 분리하는 함수
 */
const methodData = storageItemInfo.length> 0 && storageItemInfo.reduce((acc, item) => {
  const method = item.method;
  if(!acc[method]) {
    acc[method]=[];
  };
  acc[method].push(item);
  return acc;
});

function DataProvider ({children}) {
  const [cashIn, setCashIn] = useState(0);
  const [cashOut, setCashOut] = useState(0);
  const [cardIn, setCardIn] = useState(0);
  const [cardOut, setCardOut] = useState(0);
  // itemInfo에 localstorage에서 가져온 값을 기본 값으로 넣는다.
  const [itemInfo, setItemInfo] = useState(storageItemInfo);

  useEffect(()=>{
    // setCashOut(10000)
    setCashOut(()=>{
      const cash = methodData.cash ? methodData.cash.reduce((acc,item)=>{return acc+Number(item.price)},0) : 0;
      return cash;
    });
    setCardOut(()=>{
      const card = methodData.card ? methodData.card.reduce((acc,item)=>{return acc+Number(item.price)},0) : 0;
      return card;
    });
  },[itemInfo]);
  
  /**
   * [value]
   * Provider 값
  */
  const dataUpdate = {
    // localstorage에 넣을 배열 타입. 
    itemInfo : itemInfo,
    // itemInfo 데이터 생성을 위한 함수
    itemInfoHandler: (newItemInfo) => {
      /*
       *newItemInfo를 매개변수로 받아서 storageItemInfo에 추가하고
       *storageItemInfo를 itemInfo에 useState로 set해주고
       *업데이트 된 storageItemInfo를 localStorage에 업데이트 해준다.
       */
      storageItemInfo.push(newItemInfo);
      setItemInfo(storageItemInfo);
      localStorage.setItem('itemInfo', JSON.stringify(storageItemInfo));
    },
    
    moneyData: {
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
    }
  };

  return (
    <Data.Provider value={dataUpdate}>
      {children}
    </Data.Provider>
  )
};
export default DataProvider;
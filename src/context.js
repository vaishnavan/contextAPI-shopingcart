import React, { createContext, useState } from "react";
import { myProduct } from "./data";

export const productContext = createContext();

export default function DataProvider({ children }) {
  const [cartData, setCartData] = useState(myProduct);
  const [cartItem, setCartItem] = useState([]);

  const { data } = cartData;
  console.log(data);

  const handleAdd = (prod) => {
    const findData = cartItem.find((data) => data.id === prod.id);
    console.log(findData);
    if (findData) {
      // console.log("hello");
      setCartItem(
        cartItem.map((x) =>
          x.id === prod.id ? { ...findData, qty: findData.qty + 1 } : x
        )
      );
    } else {
      setCartItem([...cartItem, { ...prod, qty: 1 }]);
    }
  };

  const handleRemove = (prod) => {
    const findData = cartItem.find((data) => data.id === prod.id);
    if (findData.qty === 1) {
      setCartItem(cartItem.filter((data) => data.id !== prod.id));
    } else {
      setCartItem(
        cartItem.map((data) =>
          data.id === prod.id ? { ...findData, qty: findData.qty - 1 } : data
        )
      );
    }
  };

  return (
    <productContext.Provider
      value={{
        cartData,
        setCartData,
        cartItem,
        setCartItem,
        handleAdd,
        handleRemove
      }}
    >
      {children}
    </productContext.Provider>
  );
}

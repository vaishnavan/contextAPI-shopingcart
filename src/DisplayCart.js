import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "./context";

export default function DisplayCart() {
  const { cartItem, handleAdd, handleRemove } = useContext(productContext);
  console.log(cartItem);

  const totalprice = cartItem.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <>
      {cartItem.length === 0 && (
        <>
          <h1>Cart is Empty</h1>
          <Link to="/">Click here to Purchase product</Link>
        </>
      )}
      {cartItem.map((data) => {
        return (
          <div key={data.id}>
            <h1>{data.name}</h1>
            <h4>{data.price}</h4>
            <button onClick={() => handleAdd(data)}>+</button>
            <h4>{data.qty}</h4>
            <button onClick={() => handleRemove(data)}>-</button>
            <p>Total:{data.price - data.price + data.qty * data.price}</p>
          </div>
        );
      })}
      <h1>SubTotal: {totalprice}</h1>
    </>
  );
}

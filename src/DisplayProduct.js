import React, { useContext } from "react";
import { productContext } from "./context";

export default function DisplayProduct() {
  const { cartData, handleAdd } = useContext(productContext);
  // console.log(cartData);

  const { data } = cartData;

  return (
    <>
      {(data || cartData).map((data) => {
        return (
          <div key={data.id}>
            <h2>{data.name}</h2>
            <p>{data.price}</p>
            <button disabled={data.cart} onClick={() => handleAdd(data)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </>
  );
}

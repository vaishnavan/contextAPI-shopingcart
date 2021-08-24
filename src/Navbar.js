import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext } from "./context";

export default function Navbar() {
  const { cartItem } = useContext(productContext);

  return (
    <>
      <ul>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <span>{cartItem.length}</span>
      </ul>
    </>
  );
}

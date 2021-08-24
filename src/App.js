import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DataProvider from "./context";
import DisplayCart from "./DisplayCart";
import DisplayProduct from "./DisplayProduct";
import Navbar from "./Navbar";

export default function App() {
  return (
    <>
      <Router>
        <DataProvider>
          <Navbar />
          <Switch>
            <Route exact path="/" component={DisplayProduct} />
            <Route exact path="/cart" component={DisplayCart} />
          </Switch>
        </DataProvider>
      </Router>
    </>
  );
}

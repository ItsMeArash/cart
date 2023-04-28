import React from "react";
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import Store from "./components/Store";
import ProductDetails from "./components/shared/ProductDetails";
import { Switch, Redirect, Route } from "react-router-dom";

const App = () => {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;

import React from "react";
import "./App.css";
import Products from "./components/Products";
import CheckoutPage from "./components/CheckoutPage";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Products} />
        <Route path="/checkout" component={CheckoutPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;

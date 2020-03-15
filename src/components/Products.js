import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
let list = [
  {
    name: "Small Pizza",
    description: "10” pizza for one person",
    price: 269.99,
    count: 0
  },
  {
    name: "Medium Pizza",
    description: "12” pizza for two people",
    price: 322.99,
    count: 0
  },
  {
    name: "Large Pizza",
    description: "15” pizza for four people",
    price: 394.99,
    count: 0
  }
];
class Products extends React.Component {
  render() {
    return (
      <div>
        <h2 style={{ margin: "40px 0px 40px 0px" }}>List of products</h2>
        {list.map((p) => {
          return <Product item={p} />;
        })}
        <Link to="/checkout">
          <button>checkout</button>
        </Link>
      </div>
    );
  }
}

export default Products;

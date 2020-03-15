import React from "react";
import Product from "./Product";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { customeraction } from "../actions/CustomerAction";

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
  state = {
    customer: null
  };
  handleChange = (e) => {
    this.setState({ customer: e.target.value });
  };
  handleOkay = () => {
    this.props.customeraction(this.state.customer);
  };
  render() {
    return (
      <div>
        <h2 style={{ margin: "40px 0px 40px 0px" }}>List of products</h2>
        <p>
          customer:&ensp;
          <input required="true" onChange={(e) => this.handleChange(e)} />
          <button onClick={this.handleOkay}>okay</button>
        </p>
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

export default connect(null, { customeraction })(Products);

import React from "react";

class Product extends React.Component {
  render() {
    return (
      <div>
        <p>Name : {this.props.item.name}</p>
        <p>Description : {this.props.item.description}</p>
        <p>Price : {this.props.item.price}</p>
        <hr />
      </div>
    );
  }
}
export default Product;

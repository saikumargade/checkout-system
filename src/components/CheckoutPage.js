import React from "react";
import { connect } from "react-redux";

class CheckoutPage extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        {cart.length
          ? cart.map((i) => {
              const { item } = i;
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "100px"
                  }}
                >
                  <p>
                    {item.name} &ensp; (X {item.count})
                  </p>
                  <p style={{ marginLeft: "100px" }}>
                    ${item.count * item.price}
                  </p>
                </div>
              );
            })
          : `Your cart is empty`}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.CartReducer.cart,
    customer: state.CustomerReducer.customer
  };
};

export default connect(mapStateToProps)(CheckoutPage);

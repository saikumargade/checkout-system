import React from "react";
import { connect } from "react-redux";

const infosys_offers = [
  {
    name: "Small Pizza",
    buy_count: 3,
    get_for_count: 2
  }
];
const amazon_offers = [
  {
    name: "Large Pizza",
    price: 299.99
  }
];
const facebook_offers = [
  {
    name: "Medium Pizza",
    buy_count: 5,
    get_for_count: 4
  },
  {
    name: "Large Pizza",
    price: 389.99
  }
];
class CheckoutPage extends React.Component {
  render() {
    const { cart, customer } = this.props;
    var total = 0;
    if (cart.length) {
      if (customer === "infosys") {
        let newcart = Array.from(cart);
        newcart = newcart.map((i) => {
          const item = { ...i.item };
          if (item.name === infosys_offers[0].name) {
            if (item.count % infosys_offers[0].buy_count === 0) {
              let quotient = item.count / infosys_offers[0].buy_count;
              item.count = infosys_offers[0].get_for_count * quotient;
              return item;
            } else if (
              item.count > infosys_offers[0].buy_count &&
              item.count % infosys_offers[0].buy_count !== 0
            ) {
              let quotient = Math.floor(
                item.count / infosys_offers[0].buy_count
              );
              let remainder = item.count % infosys_offers[0].buy_count;
              item.count =
                infosys_offers[0].get_for_count * quotient + remainder;
              return item;
            }
          }
          return item;
        });
        let prices = newcart.map((i) => i.count * i.price);
        for (let i = 0; i < prices.length; i++) {
          total += prices[i];
        }
      } else if (customer === "amazon") {
        let newcart = Array.from(cart);
        newcart = newcart.map((i) => {
          const item = { ...i.item };
          if (item.name === amazon_offers[0].name) {
            item.price = amazon_offers[0].price;
            return item;
          }
          return item;
        });
        let prices = newcart.map((i) => i.count * i.price);
        for (let i = 0; i < prices.length; i++) {
          total += prices[i];
        }
      } else if (customer === "facebook") {
        let newcart = Array.from(cart);
        newcart = newcart.map((i) => {
          const item = { ...i.item };
          if (item.name === facebook_offers[0].name) {
            if (item.count % facebook_offers[0].buy_count === 0) {
              let quotient = item.count / facebook_offers[0].buy_count;
              item.count = facebook_offers[0].get_for_count * quotient;
              return item;
            } else if (
              item.count > facebook_offers[0].buy_count &&
              item.count % facebook_offers[0].buy_count !== 0
            ) {
              let quotient = Math.floor(
                item.count / facebook_offers[0].buy_count
              );
              let remainder = item.count % facebook_offers[0].buy_count;
              item.count =
                facebook_offers[0].get_for_count * quotient + remainder;
              return item;
            }
          } else if (item.name === facebook_offers[1].name) {
            item.price = facebook_offers[1].price;
            return item;
          }
          return item;
        });
        let prices = newcart.map((i) => i.count * i.price);
        for (let i = 0; i < prices.length; i++) {
          total += prices[i];
        }
      } else {
        let prices = cart.map((i) => i.item.count * i.item.price);
        for (let i = 0; i < prices.length; i++) {
          total += prices[i];
        }
      }
    }
    return (
      <div>
        {cart.length ? (
          cart.map((i) => {
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
              </div>
            );
          })
        ) : (
          <h2>Your cart is empty</h2>
        )}
        {cart.length ? (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p style={{ marginLeft: "150px" }}>Total:</p>
            <p style={{ marginLeft: "140px" }}>${total}</p>
          </div>
        ) : null}
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

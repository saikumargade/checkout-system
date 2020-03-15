const initialState = {
  cart: []
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CART":
      let cart = state.cart;
      cart = cart.filter((row) => row.item.count);
      let temp =
        cart.filter((row) => row.item.name === action.payload.item.name) || [];
      if (action.payload.item.count && temp.length == 0)
        cart.push(action.payload);
      return {
        ...state,
        cart
      };
    default:
      return state;
  }
};
export default CartReducer;

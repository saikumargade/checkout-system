const initialState = {
  customer: null
};
const CustomerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CUSTOMER":
      return {
        ...state,
        customer: action.payload
      };
    default:
      return state;
  }
};
export default CustomerReducer;

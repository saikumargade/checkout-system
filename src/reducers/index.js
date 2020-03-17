import { combineReducers } from "redux";
import CartReducer from "./CartReducer";
import CustomerReducer from "./CustomerReducer";

const reducers = combineReducers({
  CartReducer,
  CustomerReducer
});

export default reducers;

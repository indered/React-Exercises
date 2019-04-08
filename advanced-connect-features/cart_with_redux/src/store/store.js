import { createStore } from "redux";
import { cart, products } from "../reducers/reducer";
import { combineReducers } from "redux";
import logger from "../middleware/logger";

const rootReducer = combineReducers({
  cart,
  products
});
export const store = createStore(rootReducer, logger);

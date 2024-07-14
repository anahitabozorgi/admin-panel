import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import ProductReducer from "./ProductReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  productlist: ProductReducer
});
export default rootReducer;
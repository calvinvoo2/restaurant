import { combineReducers } from "redux";
import restaurantReducer from "./restaurantReducer";
import restaurantDetailReducer from "./restaurantDetailReducer";

export default combineReducers({
  restaurant: restaurantReducer,
  restaurantDetail: restaurantDetailReducer
});

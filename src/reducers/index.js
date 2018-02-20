import { combineReducers } from "redux";
import restaurantReducer from "./restaurantReducer";
import restaurantDetailReducer from "./restaurantDetailReducer";
import langReducer from "./langReducer";

export default combineReducers({
  restaurant: restaurantReducer,
  restaurantDetail: restaurantDetailReducer,
  lang: langReducer
});

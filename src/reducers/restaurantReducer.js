import { FETCH_TOP_RESTAURANT_LIST } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_TOP_RESTAURANT_LIST:
      return action.payload || false;
      break;
    default:
      return state;
  }
}

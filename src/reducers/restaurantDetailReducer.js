import { BOOK_RESTAURANT, FETCH_RESTAURANT_DETAIL } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_RESTAURANT_DETAIL:
      return action.payload || false;
    case BOOK_RESTAURANT:
      return action.payload || false;
    default:
      return state;
  }
}

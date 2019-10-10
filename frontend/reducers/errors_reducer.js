import { combineReducers } from "redux";
import session from "./session_errors_reducer";
import beers from "./beer_errors_reducer";
import checkins from "./checkin_errors_reducer";

const errorsReducer = combineReducers({
  session,
  beers,
  checkins,
});

export default errorsReducer;
import { combineReducers } from "redux";
import session from "./session_errors_reducer";
import beers from "./beer_errors_reducer";

const errorsReducer = combineReducers({
  session,
  beers,
});

export default errorsReducer;
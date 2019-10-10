import { combineReducers } from "redux";
import users from "./users_reducer";
import beers from "./beers_reducer";
import checkins from "./checkins_reducer";

const entitiesReducer = combineReducers({
  users,
  beers,
  checkins,
});

export default entitiesReducer;
import { combineReducers } from "redux";
import users from "./users_reducer";
import beers from "./beers_reducer";

const entitiesReducer = combineReducers({
  users,
  beers,
});

export default entitiesReducer;
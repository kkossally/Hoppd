import { combineReducers } from "redux";
import users from "./users_reducer";
import beers from "./beers_reducer";
import checkins from "./checkins_reducer";
// import favorites from "./favorites_reducer";
import breweries from "./breweries_reducer";

const entitiesReducer = combineReducers({
  users,
  beers,
  checkins,
  // favoriteBeerIds: favorites,
  breweries,
});

export default entitiesReducer;
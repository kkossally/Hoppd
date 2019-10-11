import { RECEIVE_FILTERED_BEERS } from '../actions/beer_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILTERED_BEERS:
      return action.filteredBeers;
      
    default:
      return state;
  }
}
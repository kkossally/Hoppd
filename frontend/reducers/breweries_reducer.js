import { RECEIVE_BREWERIES } from '../actions/brewery_actions';

export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BREWERIES:
      return action.breweries;

    default:
      return state;
  } 
}
import { merge } from 'lodash';
import { RECEIVE_BEERS, RECEIVE_BEER, REMOVE_BEER }  from '../actions/beer_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_BEERS:
      return action.beers;

    case RECEIVE_BEER:
      return merge({}, state, { [action.beer.id]: action.beer });

    case REMOVE_BEER:
        newState = merge({}, state); 
        delete newState[action.id];
        return newState;
  
    default:
      return state;
  }
}
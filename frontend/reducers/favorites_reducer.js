import { merge } from 'lodash';
import { RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {  
    case RECEIVE_FAVORITE:
      return merge({}, state, { [action.favorite.id]: action.favorite });

    case REMOVE_FAVORITE:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;

    default:
      return state;
  } 
}
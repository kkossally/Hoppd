import { RECEIVE_FAVORITES, REMOVE_FAVORITE } from '../actions/favorite_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {  
    case RECEIVE_FAVORITES:
      return action.favoriteBeerIds;

    case REMOVE_FAVORITE:
      return state.filter(action.id);

    default:
      return state;
  } 
}
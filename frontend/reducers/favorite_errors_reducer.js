import { RECEIVE_FAVORITE_ERRORS, CLEAR_FAVORITE_ERRORS, RECEIVE_FAVORITES } from '../actions/favorite_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FAVORITE_ERRORS:
      return action.favoriteErrors;

    case RECEIVE_FAVORITES:
      return [];

    case CLEAR_FAVORITE_ERRORS:
      return [];
      
    default:
      return state;
  }
}
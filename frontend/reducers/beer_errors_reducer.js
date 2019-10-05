import { RECEIVE_BEER, RECEIVE_BEER_ERRORS, CLEAR_BEER_ERRORS }  from '../actions/beer_actions';

export default (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BEER_ERRORS:
      return state.concat(action.beerErrors);

    case RECEIVE_BEER:
      return [];

    case CLEAR_BEER_ERRORS:
      return [];

    default:
      return state;
  }
};
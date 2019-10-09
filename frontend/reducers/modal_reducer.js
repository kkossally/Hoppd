import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
// import { RECEIVE_BEER } from '../actions/beer_actions';

export default (state = null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;

    case CLOSE_MODAL:
      return null;

    // case RECEIVE_BEER:
    //   return null;
      
   default:
      return state;
  }
}
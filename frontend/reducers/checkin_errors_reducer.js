import { RECEIVE_CHECKIN_ERRORS, CLEAR_CHECKIN_ERRORS, RECEIVE_CHECKIN } from '../actions/checkin_actions';

export default (state = [], action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_CHECKIN_ERRORS:
      return action.checkinErrors;

    case RECEIVE_CHECKIN:
      return [];

    case CLEAR_CHECKIN_ERRORS:
      return [];
      
    default:
      return state;
  }
}
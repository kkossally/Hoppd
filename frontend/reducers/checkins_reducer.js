import { merge } from 'lodash';
import { RECEIVE_CHECKINS, RECEIVE_CHECKIN, REMOVE_CHECKIN } from '../actions/checkin_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_CHECKINS:
      return action.checkins;
      
    case RECEIVE_CHECKIN:
      return merge({}, state, { [action.checkin.id]: action.checkin });

    case REMOVE_CHECKIN:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;

    default:
      return state;
  } 
}
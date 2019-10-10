import * as CheckinApiUtil from '../util/checkins_api_util';

export const RECEIVE_CHECKINS = "RECEIVE_CHECKINS";
export const RECEIVE_CHECKIN = "RECEIVE_CHECKIN";
export const REMOVE_CHECKIN = "REMOVE_CHECKIN";
export const RECEIVE_CHECKIN_ERRORS = "RECEIVE_CHECKIN_ERRORS";
export const CLEAR_CHECKIN_ERRORS = "CLEAR_CHECKIN_ERRORS";

const receiveCheckins = checkins => {
  return {
    type: RECEIVE_CHECKINS,
    checkins
  };
};

const receiveCheckin = checkin => {
  return {
    type: RECEIVE_CHECKIN,
    checkin
  };
};

const removeCheckin = id => {
  return {
    type: REMOVE_CHECKIN,
    id
  };
};

export const receiveCheckinErrors = checkinErrors => {
  return {
    type: RECEIVE_CHECKIN_ERRORS,
    checkinErrors,
  }
}

export const clearCheckinErrors = () => {
  return {
    type: CLEAR_CHECKIN_ERRORS,
  }
}

export const fetchCheckins = () => dispatch => {
  return CheckinApiUtil.fetchCheckins()
  .then(checkins => dispatch(receiveCheckins(checkins)), errors => dispatch(receiveCheckinErrors(errors.responseJSON)));
};

export const fetchCheckin = id => dispatch => {
  return CheckinApiUtil.fetchCheckin(id)
  .then(checkin => dispatch(receiveCheckin(checkin)), errors => dispatch(receiveCheckinErrors(errors.responseJSON)));
};

export const createCheckin = checkin => dispatch => {
  return CheckinApiUtil.createCheckin(checkin)
  .then(checkin => dispatch(receiveCheckin(checkin)), errors => dispatch(receiveCheckinErrors(errors.responseJSON)));
};

export const deleteCheckin = id => dispatch => {
  return CheckinApiUtil.deleteCheckin(id)
  .then(() => dispatch(removeCheckin(id)), errors => dispatch(receiveCheckinErrors(errors.responseJSON)));
}
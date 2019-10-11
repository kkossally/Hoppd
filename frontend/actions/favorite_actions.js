import * as FavoriteApiUtil from '../util/favorites_api_util';

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const RECEIVE_FAVORITE_ERRORS = "RECEIVE_FAVORITE_ERRORS";
export const CLEAR_FAVORITE_ERRORS = "CLEAR_FAVORITE_ERRORS";

const receiveFavorite = favorite => {
  return {
    type: RECEIVE_FAVORITE,
    favorite
  };
};

const removeFavorite = id => {
  return {
    type: REMOVE_FAVORITE,
    id
  };
};

export const receiveFavoriteErrors = favoriteErrors => {
  return {
    type: RECEIVE_FAVORITE_ERRORS,
    favoriteErrors,
  }
}

export const clearFavoriteErrors = () => {
  return {
    type: CLEAR_FAVORITE_ERRORS,
  }
}

export const createFavorite = favorite => dispatch => {
  return FavoriteApiUtil.createFavorite(favorite)
  .then(favorite => dispatch(receiveFavorite(favorite)), errors => dispatch(receiveFavoriteErrors(errors.responseJSON)));
};

export const deleteFavorite = id => dispatch => {
  return FavoriteApiUtil.deleteFavorite(id)
  .then(() => dispatch(removeFavorite(id)), errors => dispatch(receiveFavoriteErrors(errors.responseJSON)));
}
import * as BeerApiUtil from "../util/beers_api_util";

export const RECEIVE_BEERS = "RECEIVE_BEERS";
export const RECEIVE_BEER = "RECEIVE_BEER";
export const REMOVE_BEER = "REMOVE_BEER";
export const RECEIVE_BEER_ERRORS = "RECEIVE_BEER_ERRORS";
export const CLEAR_BEER_ERRORS = "CLEAR_BEER_ERRORS";

const receiveBeers = beers => {
  return {
    type: RECEIVE_BEERS,
    beers
  };
};

const receiveBeer = beer => {
  return {
    type: RECEIVE_BEER,
    beer
  };
};

const removeBeer = id => {
  return {
    type: REMOVE_BEER,
    id
  };
};

export const receiveBeerErrors = beerErrors => {
  return {
    type: RECEIVE_BEER_ERRORS,
    beerErrors,
  }
}

export const clearBeerErrors = () => {
  return {
    type: CLEAR_BEER_ERRORS,
  }
}

export const fetchBeers = () => dispatch => {
  return BeerApiUtil.fetchBeers()
  .then(beers => dispatch(receiveBeers(beers)), errors => dispatch(receiveBeerErrors(errors.responseJSON)));
};

export const fetchBeer = id => dispatch => {
  return BeerApiUtil.fetchBeer(id)
  .then(beer => dispatch(receiveBeer(beer)), errors => dispatch(receiveBeerErrors(errors.responseJSON)));
};

export const createBeer = beer => dispatch => {
  return BeerApiUtil.createBeer(beer)
  .then(beer => dispatch(receiveBeer(beer)), errors => dispatch(receiveBeerErrors(errors.responseJSON)));
};

export const updateBeer = beer => dispatch => {
  return BeerApiUtil.updateBeer(beer)
  .then(beer => dispatch(receiveBeer(beer)), errors => dispatch(receiveBeerErrors(errors.responseJSON)));
};

export const deleteBeer = id => dispatch => {
  return BeerApiUtil.deleteBeer(id)
  .then(() => dispatch(removeBeer(id)), errors => dispatch(receiveBeerErrors(errors.responseJSON)));
}
import * as BreweryApiUtil from "../util/breweries_api_util";

export const RECEIVE_BREWERIES = "RECEIVE_BREWERIES";


const receiveBreweries = breweries => {
  return {
    type: RECEIVE_BREWERIES,
    breweries
  };
};

export const fetchBreweries = () => dispatch => {
  return BreweryApiUtil.fetchBreweries()
  .then(breweries => dispatch(receiveBreweries(breweries)));
};
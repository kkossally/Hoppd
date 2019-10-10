import { combineReducers } from 'redux';
import  modal from './modal_reducer';
import filteredBeers from './filtered_beers_reducer';

export default combineReducers({
  modal,
  filteredBeers,
})
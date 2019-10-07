import { connect } from 'react-redux';
import { createBeer, receiveBeerErrors, clearBeerErrors } from '../../actions/beer_actions';
import BeerForm from './beer_form';

const msp = ({ errors: { beers } }) => {
  return {
    errors: beers,
    formType: 'Add New Beer',
    beer: { name: "", style: "", abv: "", ibu: "", description: "", brewery_id: "" }
  }
}

const mdp = dispatch => {
  return {
    submitForm: beer => dispatch(createBeer(beer)),
    dispatchErrors: errors => dispatch(receiveBeerErrors(errors)),
    clearErrors: () => dispatch(clearBeerErrors()),
  }
}

export default connect(msp, mdp)(BeerForm);
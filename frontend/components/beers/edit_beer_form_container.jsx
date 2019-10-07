import { connect } from 'react-redux';
import { updateBeer, receiveBeerErrors, clearBeerErrors } from '../../actions/beer_actions';
import BeerForm from './beer_form';

const msp = ({ errors: { beers } }) => {
  return {
    errors: beers,
    formType: 'Edit Beer',
  }
}

const mdp = dispatch => {
  return {
    submitForm: beer => dispatch(updateBeer(beer)),
    dispatchErrors: errors => dispatch(receiveBeerErrors(errors)),
    clearErrors: () => dispatch(clearBeerErrors()),
  }
}

export default connect(msp, mdp)(BeerForm);
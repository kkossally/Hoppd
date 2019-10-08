import { connect } from 'react-redux';
import { createBeer, clearBeerErrors } from '../../actions/beer_actions';
import { closeModal } from '../../actions/modal_actions';
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
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearBeerErrors()),
  }
}

export default connect(msp, mdp)(BeerForm);
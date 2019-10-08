import React from 'react';
import { connect } from 'react-redux';
import { fetchBeer, updateBeer, deleteBeer, clearBeerErrors } from '../../actions/beer_actions';
import { closeModal } from '../../actions/modal_actions';
import BeerForm from './beer_form';

const msp = (state, ownProps) => {
  const defaultBeer = { name: "", style: "", abv: "", ibu: "", description: "", brewery_id: "" };
  const splitPath = ownProps.location.pathname.split('/');
  const beerId = splitPath[splitPath.length - 1];
  const beer = state.entities.beers[beerId] || defaultBeer;
  return {
    errors: state.errors.beers,
    formType: 'Edit Beer',
    beerId,
    beer,
  }
}

const mdp = dispatch => {
  return {
    submitForm: beer => dispatch(updateBeer(beer)),
    fetchBeer: id => dispatch(fetchBeer(id)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearBeerErrors()),
  }
}

class EditBeerForm extends React.Component {
  
  componentDidMount() {
    this.props.fetchBeer(this.props.beerId);
  }

  render () {
    const props = this.props;
    return (
      <BeerForm {...props} />
    );
  }
}

export default connect(msp, mdp)(EditBeerForm);
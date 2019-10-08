import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchBeer, updateBeer, deleteBeer, receiveBeerErrors, clearBeerErrors } from '../../actions/beer_actions';
import { closeModal } from '../../actions/modal_actions';
import BeerForm from './beer_form';

const msp = (state, ownProps) => {
  const defaultBeer = { name: "", style: "", abv: "", ibu: "", description: "", brewery_id: "" };
  const beer = state.entities.beers[ownProps.match.params.beerId] || defaultBeer;
  // debugger
  return {
    // errors: state.errors.beers,
    formType: 'Edit Beer',
    beer, 
  }
}

const mdp = dispatch => {
  return {
    submitForm: beer => dispatch(updateBeer(beer)),
    fetchBeer: id => dispatch(fetchBeer(id)),
    closeModal: () => dispatch(closeModal()),
    // deleteBeer: id => dispatch(deleteBeer(id)),
    // dispatchErrors: errors => dispatch(receiveBeerErrors(errors)),
    // clearErrors: () => dispatch(clearBeerErrors()),
  }
}

class EditBeerForm extends React.Component {
  
  componentDidMount() {
    // debugger
    this.props.fetchBeer(this.props.match.params.beerId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.beer.id != this.props.match.params.beerId) {
      this.props.fetchBeer(this.props.match.params.beerId);
    }
  }

  render () {
    const { submitForm, deleteBeer, formType, beer } = this.props;
    // debugger
    return (
      <BeerForm
        submitForm={submitForm}
        deleteBeer={deleteBeer}
        formType={formType}
        beer={beer}
        closeModal={closeModal} />
    );
  }
}

export default withRouter(connect(msp, mdp)(EditBeerForm));
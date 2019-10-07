import React from 'react';
import { connect } from 'react-redux';
import { updateBeer, fetchBeer, receiveBeerErrors, clearBeerErrors } from '../../actions/beer_actions';
import BeerForm from './beer_form';

const msp = (state, ownProps) => {
  const defaultBeer = { name: "", style: "", abv: "", ibu: "", description: "", brewery_id: "" };
  const beer = state.entities.beers[ownProps.match.params.beerId] || defaultBeer;
  return {
    errors: state.errors.beers,
    formType: 'Edit Beer',
    beer, 
  }
}

const mdp = dispatch => {
  return {
    submitForm: beer => dispatch(updateBeer(beer)),
    fetchBeer: id => dispatch(fetchBeer(id)),
    dispatchErrors: errors => dispatch(receiveBeerErrors(errors)),
    clearErrors: () => dispatch(clearBeerErrors()),
  }
}

class EditBeerForm extends React.Component {
  
  componentDidMount() {
    this.props.fetchBeer(this.props.match.params.beerId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.beer.id != this.props.match.params.beerId) {
      this.props.fetchBeer(this.props.match.params.beerId);
    }
  }

  render () {
    const { submitForm, formType, beer } = this.props;
    return (
      <BeerForm
        submitForm={submitForm}
        formType={formType}
        beer={beer} />
    );
  }
}

export default connect(msp, mdp)(EditBeerForm);
import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditBeerFormContainer from '../beers/edit_beer_form_container';
import CreateBeerFormContainer from '../beers/create_beer_form_container';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'editBeer':
      component = <EditBeerFormContainer />;
      break;

    case 'createBeer':
      component = <CreateBeerFormContainer />;
      break;

    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal" onClick={event => event.stopPropagation()}>
        { component }
      </div>
    </div>
  )
}

const msp = (state) => {
  return {
    modal: state.ui.modal,
  }
}

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  }
}

export default withRouter(connect(msp, mdp)(Modal));
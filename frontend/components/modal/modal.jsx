import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import EditBeerFormContainer from '../beers/edit_beer_form_container';
import CreateBeerFormContainer from '../beers/create_beer_form_container';
import CheckinForm from '../checkins/checkin_form';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.modalName) {
    case 'editBeer':
      component = <EditBeerFormContainer beerId={modal.beerId} />;
      break;

    case 'createBeer':
      component = <CreateBeerFormContainer />;
      break;

    case 'checkin':
      component = <CheckinForm beerId={modal.beerId} />;
      break;

    case 'login':
      component = <LoginFormContainer />
      break;

    case 'signup':
      component = <SignupFormContainer />
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

export default connect(msp, mdp)(Modal);
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { login, clearSessionErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import LoginForm from './login_form';


const msp = ({ errors: { session } }) => {
  return {
    errors: session,
    formType: 'Sign In',
  }
}

const mdp = dispatch => {
  return {
    submitForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors()),
    closeModal: () => dispatch(closeModal()),
    signup: () => dispatch(openModal('signup')),
  }
}

export default connect(msp, mdp)(LoginForm);
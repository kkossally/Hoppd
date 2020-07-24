import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { login, clearSessionErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import LoginForm from './login_form';


const msp = ({ errors: { session } }) => {
  return {
    errors: session,
    formType: 'Sign In',
    signUpLink: <Link to='/signup'>Sign up!</Link>,
  }
}

const mdp = dispatch => {
  return {
    submitForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearSessionErrors()),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(LoginForm);
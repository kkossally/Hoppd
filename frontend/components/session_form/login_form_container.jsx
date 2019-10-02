import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';


const msp = ({ errors }) => {
  return {
    errors: errors,
    formType: 'Sign In',
    signUpLink: <Link to='/signup'>Sign up!</Link>,
  }
}

const mdp = dispatch => {
  return {
    submitForm: user => dispatch(login(user)),
  }
}

export default connect(msp, mdp)(SessionForm);
import { connect } from 'react-redux';
import { signup, receiveSessionErrors, clearSessionErrors } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import SignupForm from './signup_form';

const msp = ({ errors: { session } }) => {
  return {
    errors: session,
    formType: 'Create Account',
  }
}

const mdp = dispatch => {
  return {
    submitForm: user => dispatch(signup(user)),
    dispatchErrors: errors => dispatch(receiveSessionErrors(errors)),
    clearErrors: () => dispatch(clearSessionErrors()),
    closeModal: () => dispatch(closeModal()),
  }
}

export default connect(msp, mdp)(SignupForm);
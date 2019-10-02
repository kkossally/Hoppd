import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const msp = ({ errors }) => {
  return {
    errors: errors,
    formType: 'Create Account',
  }
}

const mdp = dispatch => {
  return {
    submitForm: user => dispatch(signup(user)),
  }
}

export default connect(msp, mdp)(SessionForm);
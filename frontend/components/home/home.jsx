import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

const msp = ({ entities: { users }, session }) => {
  return {
    currentUser: users[session.id],
  }
}

const mdp = dispatch => {
  return {
    logout: () => dispatch(logout()),
  }
}

class Home extends React.Component {
  constructor({props}) {
    super(props);
  }

  render() {
    return (
      <button className="logout-button" onClick={this.props.logout}>Logout</button>
    )
  }
}

export default connect (msp, mdp)(Home);
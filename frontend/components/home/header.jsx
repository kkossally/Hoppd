import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import SearchBar from '../search/searchbar';

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

const Header = ({ logout, currentUser }) => {

  const profile = currentUser ? (
    <div className="profile-dropdown">
      <img src={window.userIconURL} alt="User icon" />
      <ul className="dropdown-menu">
        <li><a>Recent Activity</a></li>
        <li><a>My Profile</a></li>
        <li><a>Personal Stats</a></li>
        <li><a>Beer History</a></li>
        <li><a>Friends</a></li>
        <li><a>Lists</a></li>
        <li><a>Badges</a></li>
        <li><a>Venues</a></li>
        <li><a>Account Settings</a></li>
        <li><a onClick={logout}>Logout</a></li>
      </ul>
    </div>
  ) : (
    <>
      <Link className="session-button" to='/login'>Sign In</Link>
      <Link className="session-button" to='/signup'>Join Now</Link>
    </>
  );

  return (
    <header className="internal">
      <nav> 

        <div className="left">
          <div className="logo-box">
            <Link to='/'>
              <h1>Uncaskd</h1>
              <h3>Raise a Glass</h3>
            </Link>
            {/* <img src={window.logoURL} alt="Uncaskd Logo"/> */}
          </div>

          <ul>
            <Link to="/checkins" >The Pub</Link>
            <Link to="/beers" >Top Rated</Link>
            <a href="#">Supporter</a>
            <a href="#">Help</a>
          </ul>
        </div>

        <div className="right">
          {profile}
          <SearchBar />
        </div>

      </nav>
    </header>
  )
}

export default connect(msp, mdp)(Header);
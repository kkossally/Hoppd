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

const NavBar = ({ logout, currentUser }) => {

  const profile = currentUser ? (
    <div className="profile-dropdown">
      <span>Hello {currentUser.f_name}</span>
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
    <header className="protected">
      <nav> 
        <Link className="logo-box" to='/'>
          <h1>Hoppd</h1>
        </Link>

        <ul>
          <Link to="/checkins" >Pub</Link>
          <Link to="/beers" >Beers</Link>
          <a href="#">Supporter</a>
          <a href="#">Help</a>
        </ul>

        {profile}

        <SearchBar />
      </nav>
    </header>
  )
}

export default connect(msp, mdp)(NavBar);
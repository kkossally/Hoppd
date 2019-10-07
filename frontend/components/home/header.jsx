import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

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

const Header = (props) => {
  return (
    <header className="home">

      <nav className="navbar"> 
        <Link className="home-logo-box" to='/'>
          <h1>Hoppd</h1>
        </Link>

        <ul>
          <a href="#">The Pub</a>
          <Link to="/beers" style={{textTransform: 'uppercase', fontWeight: 'bolder'}}>Beers</Link>
          <a href="#">Supporter</a>
          <a href="#">Help</a>
        </ul>

        <div className="profile-dropdown">
          <img src={window.userIconURL} alt="User icon"/>
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
              <li><a onClick={props.logout}>Logout</a></li>
            </ul>
        </div>

        <div className="search-container">
          Search Container
        </div>
        
      </nav>

      
    </header>
  )
}

export default connect(msp, mdp)(Header);
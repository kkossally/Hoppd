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
          <a href="#">Top Rated</a>
          <a href="#">Supporter</a>
          <a href="#">Help</a>
        </ul>

        <div className="profile-dropdown">
          <img src={window.userIconURL} alt="User icon"/>
        </div>

        <div className="search-container">
          Search Container
        </div>
        
      </nav>

      
    <button className="logout-button" onClick={props.logout}>Logout</button>
    </header>
  )
}

export default connect(msp, mdp)(Header);
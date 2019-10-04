import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const greeting = () => {
    return (
      <button className="logout-button" onClick={logout}>Logout</button>
    )
  }
  const sessionLinks = () => {
    return (
      <div className="greeting-masthead">
        <div className="masthead-inner">
              
          <header>
            <Link to='/signup'>Create An Account</Link>
            <Link to='/login'>Sign In</Link>
          </header>

          <div className="masthead-inner-content">
            <section>
              <img className="ut-logo-bottles" src={window.utLogoBottlesURL} alt="Logo"/>
              <h1>Hoppd</h1>
              <h3>Be hoppy</h3>
              <div className="short-rule"/>
              <h2>Discover and share the best beer.</h2>
            </section>

            <section className="masthead-inner-content-right">
              <img className="cellphone-image" src={window.cellphoneImageURL} alt="Cellphone Image"/>
            </section>
          </div>

        </div> 
      </div>
    )
  }
  return currentUser ? greeting() : sessionLinks();
}
import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logout}) => {
  const greeting = () => {
    return (
      <div>
        <header>
          <h3>Hello {currentUser.f_name}</h3>
          <button onClick={logout}>Logout</button>
        </header>
      </div>
      
    )
  }

  const sessionLinks = () => {
    return (
      <div className="masthead">
        
        <div className="masthead-inner">
          
          <header>
            <Link to='/signup'>Create An Account</Link>
            <Link to='/login'>Sign In</Link>
          </header>

          <div className="masthead-inner-content">
            <section>
              <img className="ut-logo-bottles" src="../../assets/ut_logo_bottles.svg" alt="Logo"/>
              <h1>Hoppd</h1>
              <h3>Don't worry be hoppy</h3>
              <div className="short-rule"/>
              <h2>Discover and share the best beer.</h2>
            </section>

            <section className="masthead-inner-content-right">
              <img className="cellphone-image" src="../../assets/cellphone_image.png" alt="Cellphone Image"/>
            </section>
          </div>

        </div>
        
      </div>
    )
  }


  return currentUser ? greeting() : sessionLinks();
}
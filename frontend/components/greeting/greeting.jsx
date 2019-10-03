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
        <header>
          <Link to='/signup'>Create An Account</Link>
          <Link to='/login'>Sign In</Link>
        </header>

        <div className="content">
          <section className="left">
            <img className="logo" src="../../assets/ut-logo-bottles.svg" alt="logo"/>
            <h1>Hoppd</h1>
            <h3>Drink Like There's No Tomorrow</h3>
            <div className="short-rule"/>
            <h2>Discover and share the best beer.</h2>
          </section>

          <section className="right">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </section>
        </div>
      </div>
    )
  }


  return currentUser ? greeting() : sessionLinks();
}
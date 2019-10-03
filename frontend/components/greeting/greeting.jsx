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
      <div>
        <header>
          <Link to='/signup'>Create An Account</Link>
          <Link to='/login'>Sign In</Link>
        </header>


        <div className="content">
          <section className="left">
            <h1>Hoppd</h1>
            <h3>Drink Like There's No Tomorrow</h3>
          </section>

          <section className="right">
          </section>
        </div>
      </div>
    )
  }


  return currentUser ? greeting() : sessionLinks();
}
import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser, logout}) => {
  const greeting = () => {
    return (
      <div>
        <h3>Hello {currentUser.f_name}</h3>
        <button onClick={logout}>Logout</button>
      </div>
    )
  }

  const sessionLinks = () => {
    return (
      <div>
        <Link to='/login'>Sign In</Link>
        <Link to='/signup'>Create An Account</Link>
      </div>
    )
  }


  return currentUser ? greeting() : sessionLinks();
}
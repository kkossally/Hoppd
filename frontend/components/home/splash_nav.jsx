import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <header className="splash">
      <Link to='/signup'>Create An Account</Link>
      <Link to='/login'>Sign In</Link>
    </header>
)
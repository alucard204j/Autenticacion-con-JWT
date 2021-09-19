import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <h1>Navbar</h1>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/">Home</Link></li>
    </ul>
  </div>
);

export default NavBar;

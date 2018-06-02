import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {
  return (
    <nav className="nav">
      <NavLink className="nav-link dj-link" to="/">DJ</NavLink>
      <h4 className="dj-title">DJ App</h4>
      <NavLink className="nav-link"to="/" onClick={props.save}>Save Filters</NavLink>
      <NavLink className="nav-link" to="/login">Login</NavLink>
      <NavLink className="nav-link" to="/register">Register</NavLink>
    </nav>
  );
}

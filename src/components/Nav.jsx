import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {
  return (
    <nav className="nav">
      <NavLink to="/">DJ</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
      <div onClick={props.save}>Save Filter Config</div>
    </nav>
  );
}

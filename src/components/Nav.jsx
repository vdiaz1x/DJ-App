import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {
  // console.log(props);

  const user = !props.user;
  const inLog = <NavLink className="nav-link" to="/login">Login</NavLink>;
  const outLog = <NavLink className="nav-link" to="/" onClick={props.logout}>Logout</NavLink>;
  const log = user ? inLog : outLog;
  const reg = user ? <NavLink className="nav-link" to="/register">Register</NavLink> : null;
  const welcome = !user ? 'welcome' : null;
  const save = !user ? <NavLink className="nav-link" to="/" onClick={props.save}>Save Filters</NavLink> : null;
  const get = !user ? <NavLink className="nav-link" to="/" onClick={props.retrieve}>Set Filters</NavLink> : null;

  return (
    <nav className="nav">
      <NavLink className="nav-link dj-link" to="/">DJ</NavLink>
      <h3 className="dj-title">DJ App</h3>
      <h4>{welcome}</h4>
      {save}
      {get}
      {log}
      {reg}
    </nav>
  );
}

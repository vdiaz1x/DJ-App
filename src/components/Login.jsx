import React from 'react';

export default function Login(props) {
  // console.log(props);

  const {
    password, email, error,
  } = props.log;

  const invalid =
    password === '' ||
    email === '';

  return (
    <section className="login">
      <div className="login-form">
        <label className="login-label" htmlFor="">Email</label>
        <input
          className="login-input"
          type="text"
          onChange={e => props.input(e, 'email', 'log')}
        />
        <label className="login-label" htmlFor="">Password</label>
        <input
          className="login-input"
          type="text"
          onChange={e => props.input(e, 'password', 'log')}
        />
        <button className="submit" disabled={invalid} onClick={props.login}>Submit</button>
        {error && <p className="error">{error.message}</p>}
      </div>
    </section>
  );
}

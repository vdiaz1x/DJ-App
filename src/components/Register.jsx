import React from 'react';

export default function Register(props) {
  const {
    username, email, password, passwordCheck, error,
  } = props.reg;

  const invalid =
    password !== passwordCheck ||
    password === '' ||
    email === '' ||
    username === '';

  return (
    <section className="register">
      <div className="register-form">
        <label className="register-label" htmlFor="">Username</label>
        <input
          className="register-input"
          type="text"
          onChange={e => props.input(e, 'username', 'reg')}
        />
        <label className="register-label" htmlFor="">Email</label>
        <input
          className="register-input"
          type="text"
          onChange={e => props.input(e, 'email', 'reg')}
        />
        <label className="register-label" htmlFor="">Password</label>
        <input
          className="register-input"
          type="text"
          onChange={e => props.input(e, 'password', 'reg')}
        />
        <label className="register-label" htmlFor="">Password Check</label>
        <input
          className="register-input"
          type="text"
          onChange={e => props.input(e, 'passwordCheck', 'reg')}
        />
        <button className="submit" disabled={invalid} onClick={props.register}>Submit</button>

      </div>
      {error && <p className="error">{error.message}</p>}
    </section>
  );
}

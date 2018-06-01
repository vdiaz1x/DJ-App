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
        <label htmlFor="">Email</label>
        <input
          type="text"
          onChange={e => props.input(e, 'email', 'log')}
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          onChange={e => props.input(e, 'password', 'log')}
        />
        <button disabled={invalid} onClick={props.login}>Submit</button>
        {error && <p>{error.message}</p>}
      </div>
    </section>
  );
}

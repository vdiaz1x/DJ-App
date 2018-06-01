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
        <label htmlFor="">Username</label>
        <input
          type="text"
          onChange={e => props.input(e, 'username', 'reg')}
        />
        <label htmlFor="">Email</label>
        <input
          type="text"
          onChange={e => props.input(e, 'email', 'reg')}
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          onChange={e => props.input(e, 'password', 'reg')}
        />
        <label htmlFor="">Password Check</label>
        <input
          type="text"
          onChange={e => props.input(e, 'passwordCheck', 'reg')}
        />
        <button disabled={invalid} onClick={props.register}>Submit</button>
        {error && <p>{error.message}</p>}
      </div>
    </section>
  );
}

// <label htmlFor="">First Name</label>
//   <input
//     type="text"
//     onChange={(e) => props.input(e, "fname")}
//   />
//   <label htmlFor="">Last Name</label>
//   <input
//     type="text"
//     onChange={(e) => props.input(e, "lname")}
//   />

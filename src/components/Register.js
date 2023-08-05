import React from 'react';

import { auth }  from '../service/firebase'

import '../App.css';

const Register = ({ user }) => {
  return (
    <div className="home">
      <h2>Register</h2>
      <h3>Hello, <span></span>{user.displayName}</h3>
      <img src={user.photoURL} alt="" />
      <button className="button signout" onClick={() => auth.signOut()}>Sign out</button>
    </div>
  )
}

export default Register;
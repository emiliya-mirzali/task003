import React, { useState } from 'react';
import './UserLogin.css';
const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='a'>
      <h2>User Login</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Email:<br/>
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br/>
        <label>
          Password:<br/>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br/>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default UserLogin;
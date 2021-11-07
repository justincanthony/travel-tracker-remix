import React, { useState } from 'react';
import './Login.css';

export const Login = () => {
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className="login" type="submit">
      <input
        type="text"
        className="userName"
        name="username"
        value={username}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="passWord"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="loginSubmit"
        onClick={(e) => handleSubmit(e)}
      >
        Login
      </button>
    </form>
  );
};

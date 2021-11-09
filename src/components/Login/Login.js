import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { fetchTraveler } from '../../apiCalls';
import { ErrorMessage } from '../Error_Message/ErrorMessage';
import './Login.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userID, setUserID] = useState();
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username !== '' && password !== '') {
      fetchTraveler(username, password)
        .then((data) => {
          setUserID(data.id);
          setIsLoggedIn(true);
        })
        .catch((res) => setError(res.message));
      setUsername('');
      setPassword('');
    } else {
      setError('Please fill out both fields.');
    }
  };

  return (
    <React.Fragment>
      {!isLoggedIn && (
        <form className="login" type="submit">
          <input
            type="text"
            className="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            className="password"
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
      )}
      {!isLoggedIn && error && <ErrorMessage message={error} />}
      {isLoggedIn && <Redirect push to={`/user_dashboard/${userID}`} />}
    </React.Fragment>
  );
};

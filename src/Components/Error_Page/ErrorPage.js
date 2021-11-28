import React from 'react';
import './ErrorPage.css';
import { NavLink } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <React.Fragment>
      <p>Whoops! The page you are looking for does not exist.</p>
      <NavLink to="/">Return to Login</NavLink>
    </React.Fragment>
  );
};

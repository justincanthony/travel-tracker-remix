import React from 'react';
import './ErrorPage.css';
import { NavLink } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <section className="errorPage">
      <h4 className="errorMessage">
        Whoops! The page you are looking for does not exist.
      </h4>
      <NavLink to="/">Return to Login</NavLink>
    </section>
  );
};

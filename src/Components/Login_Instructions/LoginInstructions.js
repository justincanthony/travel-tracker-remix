import React from 'react';
import { Link } from 'react-router-dom';
import './LoginInstructions.css';

export const LoginInstructions = () => {
  return (
    <section className="loginInstructions">
      <h2>How to Log In</h2>
      <p>Username can be the word "traveler" followed by any number 1-50</p>
      <br />
      <p>Example: traveler50</p>
      <br />
      <p>Please use the password "traveler" for all usernames</p>
      <Link to="/">Return to Log In</Link>
    </section>
  );
};

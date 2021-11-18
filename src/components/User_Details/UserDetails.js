import React from 'react';
import './UserDetails.css';

export const UserDetails = ({ traveler }) => {
  const { id, name, travelerType } = traveler;

  return (
    <section className="userDetails">
      <h3 className="userName">Welcome {name}</h3>
      {/* <h4 className="travelerType">Traveler Type: {travelerType}</h4> */}
    </section>
  );
};

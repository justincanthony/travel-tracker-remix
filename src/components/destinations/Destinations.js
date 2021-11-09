import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { fetchData } from '../../apiCalls';
import DestinationCard from '../Destination_Card/DestinationCard';
import './Destinations.css';

export const Destinations = ({ destinations, userID, sendNewTrip }) => {
  const destinationCards = destinations.map((destinationObj) => (
    <DestinationCard
      key={destinationObj.id}
      destinationObj={destinationObj}
      sendNewTrip={sendNewTrip}
      userID={userID}
    />
  ));

  return (
    <section className="destinationsContainer">
      <h2>Destinations</h2>
      <div className="destinationsCardWrapper">{destinationCards}</div>
    </section>
  );
};

export default Destinations;

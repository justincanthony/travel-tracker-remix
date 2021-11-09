import React, { useState } from 'react';
import './PendingTrips.css';
import { TripCard } from '../Trip_Card/TripCard';

export const PendingTrips = ({ tripsPending, cancelTrip }) => {
  const [error, setError] = useState('');

  let tripsPendingCards;
  if (tripsPendingCards.length > 0) {
    tripsPendingCards = tripsPending.map((trip) => {
      return <TripCard key={trip.id} trip={trip} cancelTrip={cancelTrip} />;
    });
  } else {
    setError('Looks Like you need to book some trips!');
  }

  return (
    <section className="pendingTripsContainer">
      <h2>Pending Trips</h2>
      <div className="pendingTripsWrapper">{tripsPendingCards}</div>
    </section>
  );
};

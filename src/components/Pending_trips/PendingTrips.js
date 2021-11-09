import React from 'react';
import './PendingTrips.css';
import { TripCard } from '../Trip_Card/TripCard';

export const PendingTrips = ({ tripsPending, cancelTrip }) => {
  const tripsPendingCards = tripsPending.map((trip) => {
    return <TripCard key={trip.id} trip={trip} cancelTrip={cancelTrip} />;
  });

  return (
    <section className="pendingTripsContainer">
      <h2>Pending Trips</h2>
      <div className="pendingTripsWrapper">{tripsPendingCards}</div>
    </section>
  );
};

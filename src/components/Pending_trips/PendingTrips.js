import React, { useState } from 'react';
import './PendingTrips.css';
import { ErrorMessage } from '../Error_Message/ErrorMessage';
import { TripCard } from '../Trip_Card/TripCard';

export const PendingTrips = ({ tripsPending, cancelTrip }) => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState('true');

  let tripsPendingCards;
  if (tripsPending.length > 0) {
    setIsLoading(false);
    tripsPendingCards = tripsPending.map((trip) => {
      return <TripCard key={trip.id} trip={trip} cancelTrip={cancelTrip} />;
    });
  } else {
    setError('Looks Like you need to book some trips!');
  }

  return (
    <section className="pendingTripsContainer">
      {isLoading && !error && <p>"We are getting your trips...</p>}
      {tripsPending.length > 0 && !error && (
        <React.Fragment>
          <h2>Pending Trips</h2>
          <div className="pendingTripsWrapper">{tripsPendingCards}</div>
        </React.Fragment>
      )}
      {error && <ErrorMessage message={error} />}
    </section>
  );
};

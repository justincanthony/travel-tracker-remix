import React, { useState, useEffect } from 'react';
import './PendingTrips.css';
import { filterData } from '../../utils';
import { fetchTripsByID, deleteTrip } from '../../apiCalls';
import { ErrorMessage } from '../Error_Message/ErrorMessage';
import { TripCard } from '../Trip_Card/TripCard';

export const PendingTrips = ({ userID }) => {
  const [tripsPending, setTripsPending] = useState([]);
  const [notification, setNotification] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const cancelTrip = (id) => {
    deleteTrip(id)
      .then((data) => setNotification(data.message))
      .catch((error) => setError(error.message));
  };

  const getTrips = () => {
    fetchTripsByID(userID)
      .then((data) => {
        setTripsPending(filterData.getPendingTrips(data.requestedTrips));
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    getTrips();
  }, []);

  const tripsPendingCards = tripsPending.map((trip) => {
    return (
      <TripCard
        key={trip.id}
        trip={trip}
        userID={userID}
        cancelTrip={cancelTrip}
      />
    );
  });

  return (
    <section className="pendingTripsContainer">
      {isLoading && !error && <p>"We are getting your trips...</p>}
      {!isLoading && !error && (
        <React.Fragment>
          <h2>Pending Trips</h2>
          <div className="pendingTripsWrapper">{tripsPendingCards}</div>
        </React.Fragment>
      )}
      {error && <ErrorMessage message={error} />}
    </section>
  );
};

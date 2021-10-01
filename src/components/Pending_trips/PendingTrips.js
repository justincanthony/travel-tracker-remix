import React, { useState, useEffect } from 'react';
import './PendingTrips.css';
import { fetchTripsByID } from '../../apiCalls';
import { filterData } from '../../utils';
import { TripCard } from '../Trip_Card/TripCard';

export const PendingTrips = ({ pendingTrips }) => {
  const { id } = pendingTrips;
  const [tripsPending, setTripsPending] = useState([]);
  const [error, setError] = useState('');

  const getTrips = () => {
    fetchTripsByID(id)
      .then((data) =>
        setTripsPending(filterData.getPendingTrips(data.requestedTrips))
      )
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    getTrips();
  }, []);

  const tripsPendingCards = tripsPending.map((trip) => (
    <TripCard key={trip.id} trip={trip} />
  ));

  return (
    <section className="pendingTripsContainer">
      <h2>Pending Trips</h2>
      <div className="pendingTripsWrapper">{tripsPendingCards}</div>
    </section>
  );
};

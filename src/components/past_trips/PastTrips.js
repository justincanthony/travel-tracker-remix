import React, { useState, useEffect } from 'react';
import { fetchTripsByID } from '../../apiCalls';
import { filterData } from '../../utils';
import { TripCard } from '../Trip_Card/TripCard';
import './PastTrips.css';

export const PastTrips = ({ userID }) => {
  const [tripsPast, setTripsPast] = useState([]);
  const [notification, setNotification] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTrips = () => {
      fetchTripsByID(userID)
        .then((data) => {
          setTripsPast(filterData.getPastTrips(data.requestedTrips));
          setIsLoading(false);
        })
        .catch((error) => setError(error.message));
    };
    getTrips();
  }, [userID]);

  const pastTripCards = tripsPast.map((trip) => {
    return <TripCard key={trip.id} trip={trip} />;
  });

  return (
    <section className="pastTripsContainer">
      {isLoading && !error && <p>"We are getting your trips...</p>}
      {!isLoading && !error && (
        <React.Fragment>
          <h2>Past Trips</h2>
          <section className="pastTripsCardWrapper">{pastTripCards}</section>
        </React.Fragment>
      )}
    </section>
  );
};

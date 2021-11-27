import React, { useState, useEffect } from 'react';
import './PendingTrips.css';
import { filterData } from '../../utils';
import { fetchTripsByID, deleteTrip } from '../../apiCalls';
import { ErrorMessage } from '../Error_Message/ErrorMessage';
import { DashboardNavbar } from '../Dashboard_Navbar/DashboardNavbar';
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
    const getTrips = () => {
      fetchTripsByID(userID)
        .then((data) => {
          setTripsPending(filterData.getPendingTrips(data.requestedTrips));
          console.log(data.requestedTrips);
          setIsLoading(false);
        })
        .catch((error) => setError(error.message));
    };
    getTrips();
  };

  useEffect(() => {
    const getTrips = () => {
      fetchTripsByID(userID)
        .then((data) => {
          setTripsPending(filterData.getPendingTrips(data.requestedTrips));
          setIsLoading(false);
        })
        .catch((error) => setError(error.message));
    };
    getTrips();
  }, [userID, tripsPending]);

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
    <React.Fragment>
      <DashboardNavbar userID={userID} />

      <section className="pendingTripsContainer">
        {isLoading && !error && <p>"We are getting your trips...</p>}
        {!isLoading && !error && tripsPendingCards.length > 0 && (
          <React.Fragment>
            <h2>Pending Trips</h2>
            <div className="pendingTripsWrapper">{tripsPendingCards}</div>
          </React.Fragment>
        )}
        {!isLoading && !error && tripsPendingCards.length < 1 && (
          <React.Fragment>
            <h2>Pending Trips</h2>
            <div className="pendingTripsWrapper">
              <ErrorMessage
                message={
                  'Looks like you do not have any upcoming trips. Please visit destinations to book your next adventure!'
                }
              />
            </div>
          </React.Fragment>
        )}
        {error && <ErrorMessage message={error} />}
      </section>
    </React.Fragment>
  );
};

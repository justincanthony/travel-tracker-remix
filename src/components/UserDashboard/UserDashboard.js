import React, { useState, useEffect, useCallback } from 'react';
import './UserDashboard.css';
import Destinations from '../Destinations/Destinations';
import Navbar from '../Navbar/Navbar';
import { toast } from 'react-toastify';
import { filterData } from '../../utils';
import {
  fetchData,
  bookTrip,
  fetchTripsByID,
  deleteTrip,
} from '../../apiCalls';

import { PendingTrips } from '../Pending_trips/PendingTrips';
// import { PastTrips } from '../Past_Trips/PastTrips';

export const UserDashboard = ({ userID }) => {
  const [tripsPending, setTripsPending] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');

  const getDestinations = () => {
    fetchData()
      .then((data) => setDestinations(data.destinations))
      .catch((error) => setError(error.message));
  };

  const sendNewTrip = (newTrip, destination) => {
    toast.promise(
      bookTrip(newTrip)
        .then((data) => setNotification(data.message))
        .catch((error) => setError(error.message)),
      {
        pending: 'Please wait while we make your request',
        success: `Your trip request to ${destination} has been made`,
        error: 'Whoops! Something went wrong. Please try again',
      }
    );
  };

  const getTrips = () => {
    fetchTripsByID(userID)
      .then((data) =>
        setTripsPending(filterData.getPendingTrips(data.requestedTrips))
      )
      .catch((error) => setError(error.message));
  };

  const cancelTrip = (id) => {
    deleteTrip(id)
      .then((data) => setNotification(data.message))
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    getDestinations();
    getTrips();
  }, []);

  useEffect(() => {
    getTrips();
  }, [notification]);

  return (
    <React.Fragment>
      <Navbar />
      <Destinations
        destinations={destinations}
        userID={userID}
        sendNewTrip={sendNewTrip}
      />
      {tripsPending.length > 0 && (
        <PendingTrips tripsPending={tripsPending} cancelTrip={cancelTrip} />
      )}
      {/* <PastTrips userID={userID} /> */}
    </React.Fragment>
  );
};

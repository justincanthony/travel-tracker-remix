import React, { useState, useEffect } from 'react';
import './UserDashboard.css';
import Destinations from '../Destinations/Destinations';
import Navbar from '../Navbar/Navbar';
import { toast } from 'react-toastify';
import { filterData } from '../../utils';
import { bookTrip, fetchTripsByID, deleteTrip } from '../../apiCalls';

import { PendingTrips } from '../Pending_trips/PendingTrips';
// import { PastTrips } from '../Past_Trips/PastTrips';

export const UserDashboard = ({ userID }) => {
  const [tripsPending, setTripsPending] = useState([]);
  const [notification, setNotification] = useState('');
  const [error, setError] = useState('');

  const sendNewTrip = (newTrip, destination) => {
    toast.promise(
      bookTrip(newTrip)
        .then((data) => console.log(data.message))
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
    getTrips();
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Destinations userID={userID} sendNewTrip={sendNewTrip} />
      {/* {tripsPending && (
        <PendingTrips tripsPending={tripsPending} cancelTrip={cancelTrip} />
      )} */}
      {/* <PastTrips userID={userID} /> */}
    </React.Fragment>
  );
};

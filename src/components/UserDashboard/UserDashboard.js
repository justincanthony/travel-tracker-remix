import React, { useState, useEffect } from 'react';
import './UserDashboard.css';
import Destinations from '../Destinations/Destinations';
import Navbar from '../Navbar/Navbar';
import { toast } from 'react-toastify';
import { filterData } from '../../utils';
import { fetchData } from '../../apiCalls';
import { fetchTripsByID } from '../../apiCalls';
import { PendingTrips } from '../Pending_trips/PendingTrips';
import { PastTrips } from '../Past_Trips/PastTrips';

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
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTrip),
    };

    toast.promise(
      fetch('http://localhost:3001/api/v1/trips', requestOptions)
        .then((res) => res.json())
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
    fetch(`http://localhost:3001/api/v1/trips/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
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
      <PendingTrips tripsPending={tripsPending} cancelTrip={cancelTrip} />
      {/* <PastTrips userID={userID} /> */}
    </React.Fragment>
  );
};

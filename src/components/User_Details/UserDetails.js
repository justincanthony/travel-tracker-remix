import React, { useState, useEffect } from 'react';
import { fetchTripsByID } from '../../apiCalls';
import { filterData } from '../../utils';
import './UserDetails.css';

export const UserDetails = ({ traveler }) => {
  const { id, name, travelerType } = traveler;

  const [tripPending, setTripPending] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getTrips = () => {
      fetchTripsByID(id)
        .then((data) => {
          setTripPending(filterData.getUpcomingTrip(data.requestedTrips));
        })
        .catch((error) => setError(error.message));
    };
    getTrips();
  }, [id]);

  return (
    <section className="userDetails">
      <h3 className="userName">Welcome {name}</h3>
      <h4>Your Upcoming Trip</h4>
      <p>{tripPending.date}</p>
      <p>{tripPending.place.destination}</p>
      <p>{tripPending.duration}</p>
      <p>{tripPending.travelers}</p>

      {/* <h4 className="travelerType">Traveler Type: {travelerType}</h4> */}
    </section>
  );
};

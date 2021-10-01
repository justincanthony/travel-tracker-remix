import React, { useState, useEffect } from 'react';
import { fetchTripsByID } from '../../apiCalls';
import { filterData } from '../../utils';
import { TripCard } from '../Trip_Card/TripCard';
import './PastTrips.css';

export const PastTrips = ({ pastTrips }) => {
  const { id } = pastTrips;

  const [tripsPast, setTripsPast] = useState([]);

  const getTrips = () => {
    fetchTripsByID(id).then((data) =>
      setTripsPast(filterData.getPastTrips(data.requestedTrips))
    );
  };

  useEffect(() => {
    getTrips();
  }, []);

  const pastTripCards = tripsPast.map((trip) => {
    return <TripCard key={trip.id} trip={trip} />;
  });

  return (
    <section className="pastTripsContainer">
      <h3>Past Trips</h3>
      <section className="pastTripsCardWrapper">{pastTripCards}</section>
    </section>
  );
};

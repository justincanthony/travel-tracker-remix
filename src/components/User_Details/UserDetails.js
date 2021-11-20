import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { ErrorMessage } from '../Error_Message/ErrorMessage';
import { fetchTripsByID } from '../../apiCalls';
// import { getWeather } from '../../apiCalls';
import { filterData } from '../../utils';
import './UserDetails.css';

export const UserDetails = ({ traveler }) => {
  const { id, name, travelerType } = traveler;

  const [tripPending, setTripPending] = useState({});
  const [error, setError] = useState('');
  // const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTrips = () => {
      fetchTripsByID(id)
        // .then((data) => console.log(data))
        .then((data) => {
          setTripPending(filterData.getUpcomingTrip(data.requestedTrips));
          setIsLoading(false);
        })
        .catch((error) => setError(error.message));
    };
    getTrips();
  }, [id]);

  // useEffect(() => {
  //   const fetchWeather = () => {
  //     getWeather()
  //       .then((data) => console.log(data))
  //       .then((data) => setWeather(data))
  //       .catch((error) => setError(error.message));
  //   };
  //   fetchWeather(tripPending.place.split());
  // });

  return (
    <React.Fragment>
      {!isLoading && !error && (
        <section className="userDetails">
          <h3 className="userName">Welcome {name}</h3>
          <h4>Your Next Trip</h4>
          {tripPending.place !== undefined ? (
            <div className="upcomingTripWrapper">
              <div className="upcomingTripImageWrapper">
                <img
                  className="destinationImage"
                  src={tripPending.place.image}
                  alt={tripPending.place.alt}
                />
              </div>
              <article className="tripDetails">
                <p>{tripPending.place.destination}</p>
                <p>Departing: {dayjs(tripPending.date).format('M/D/YYYY')}</p>

                <p>Trip Duration: {tripPending.duration} Days</p>
                <p>Travelers: {tripPending.travelers}</p>
              </article>
            </div>
          ) : (
            <p>You do not have any approved upcoming trips.</p>
          )}

          {/* <h4 className="travelerType">Traveler Type: {travelerType}</h4> */}
        </section>
      )}
      {isLoading && !error && <p>Loading User Data...</p>}
      {error && <ErrorMessage message={error} />}
    </React.Fragment>
  );
};

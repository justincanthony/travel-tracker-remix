import React, { useState, useEffect } from 'react';
import { fetchData } from '../../apiCalls';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import DestinationCard from '../Destination_Card/DestinationCard';
import './Destinations.css';
import { bookTrip } from '../../apiCalls';
import { DashboardNavbar } from '../Dashboard_Navbar/DashboardNavbar';
import { ErrorMessage } from '../Error_Message/ErrorMessage';

export const Destinations = ({ userID }) => {
  const [destinations, setDestinations] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [newTrip, setNewTrip] = useState({});

  const getDestinations = () => {
    fetchData()
      .then((data) => {
        setDestinations(data.destinations);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
  };

  const sendNewTrip = (newTrip, destination) => {
    setError('');
    toast.promise(
      bookTrip(newTrip)
        .then((data) => {
          setNewTrip(data.newTrip);
        })

        .catch((error) => setError(error.message)),
      {
        pending: 'Please wait while we make your request',
        success: `Your trip request for ${newTrip.travelers} travelers to ${destination} on ${newTrip.date} for ${newTrip.duration} days has been made`,
        error: 'Whoops! Something went wrong. Please try again',
      }
    );
  };

  useEffect(() => {
    getDestinations();
  }, []);

  const destinationCards = destinations.map((destinationObj) => (
    <DestinationCard
      key={destinationObj.id}
      destinationObj={destinationObj}
      sendNewTrip={sendNewTrip}
      userID={userID}
    />
  ));

  return (
    <React.Fragment>
      <DashboardNavbar userID={userID} />

      {isLoading && <p>Loading...</p>}
      {error && <ErrorMessage message={error} />}
      {!isLoading && (
        <section className="destinationsContainer">
          <h2>Destinations</h2>
          <div className="destinationsCardWrapper">{destinationCards}</div>
        </section>
      )}
    </React.Fragment>
  );
};

export default Destinations;

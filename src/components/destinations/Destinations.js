import React, { useState, useEffect } from 'react';
import { fetchData } from '../../apiCalls';
import 'react-toastify/dist/ReactToastify.css';
import DestinationCard from '../Destination_Card/DestinationCard';
import './Destinations.css';
import { ErrorMessage } from '../Error_Message/ErrorMessage';

export const Destinations = ({ userID, sendNewTrip }) => {
  const [destinations, setDestinations] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getDestinations = () => {
    fetchData()
      .then((data) => {
        setDestinations(data.destinations);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));
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

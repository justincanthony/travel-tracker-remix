import React, { useState, useEffect } from 'react';
import { fetchdata } from '../../apiCalls';
import DestinationCard from '../Destination_Card/DestinationCard';
import './Destinations.css';

const Destinations = (params) => {
	const [destinations, setDestinations] = useState([]);
	const [error, setError] = useState('');

	const getDestinations = () => {
		fetchdata(params.destinations)
			.then((data) => setDestinations(data.destinations))
			.catch((error) => setError(error.message));
	};

	const destinationCards = destinations.map((destinationObj) => (
		<DestinationCard key={destinationObj.id} destinationObj={destinationObj} />
	));

	useEffect(() => {
		getDestinations();
	}, []);

	return (
		<section className="destiantionsContainer">
			<h2>Destinations</h2>
			<div className="destinationsCardWrapper">{destinationCards}</div>
		</section>
	);
};

export default Destinations;

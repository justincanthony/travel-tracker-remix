import React, { useState, useEffect } from 'react';
import { fetchData } from '../../apiCalls';
import DestinationCard from '../Destination_Card/DestinationCard';
import './Destinations.css';

export const Destinations = (params) => {
	const [destinations, setDestinations] = useState([]);
	const [error, setError] = useState('');
	const [notification, setNotification] = useState('');

	const getDestinations = () => {
		fetchData(params.destinations)
			.then((data) => setDestinations(data.destinations))
			.catch((error) => setError(error.message));
	};

	const sendNewTrip = (newTrip) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newTrip),
		};
		fetch('http://localhost:3001/api/v1/trips', requestOptions)
			.then((res) => res.json())
			.then((data) => setNotification(data.message))
			.catch((error) => setError(error.message));
	};

	const destinationCards = destinations.map((destinationObj) => (
		<DestinationCard
			key={destinationObj.id}
			destinationObj={destinationObj}
			sendNewTrip={sendNewTrip}
		/>
	));

	useEffect(() => {
		getDestinations();
	}, []);

	return (
		<section className="destinationsContainer">
			<h2>Destinations</h2>
			<div className="destinationsCardWrapper">{destinationCards}</div>
		</section>
	);
};

export default Destinations;

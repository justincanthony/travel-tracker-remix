import React, { useState, useEffect } from 'react';
import { fetchdata } from '../../apiCalls';
import TripCard from '../trip_cards/TripCard';
import './Destinations.css';

const Destinations = () => {
	const [destinations, setDestinations] = useState([]);
	const [error, setError] = useState('');

	const getDestinations = () => {
		fetchdata()
			.then((data) => setDestinations(data.destinations))
			.catch((error) => setError(error.message));
	};

	const destinationCards = destinations.map((destinationObj) => (
		<TripCard key={destinationObj.id} destinationObj={destinationObj} />
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

// fetch("https://xivapi.com/Action/123", {mode: 'cors'})
// .then(response => response.json())
// .then(data => console.log(data))

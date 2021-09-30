import React, { useState, useEffect } from 'react';
import { fetchdata } from '../../apiCalls';
import TripCard from '../trip_cards/TripCard';

export const PendingTrips = ({ pendingTrips }) => {
	const { pending_trips, id } = pendingTrips;

	const [tripsPending, setTripsPending] = useState([]);
	const [error, setError] = useState('');

	const getPendingTrips = () => {
		fetchdata(pending_trips, id)
			.then((data) => console.log(data))
			.catch((error) => setError(error.message));
	};

	useEffect(() => {
		getPendingTrips();
	}, []);

	const tripsPendingCards = tripsPending.map((trip) => (
		<TripCard key={trip.id} trip={trip} />
	));

	return (
		<section>
			<h2>Pending Trips</h2>
			{tripsPendingCards}
		</section>
	);
};

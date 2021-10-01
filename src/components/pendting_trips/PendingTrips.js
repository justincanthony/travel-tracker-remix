import React, { useState, useEffect } from 'react';
import { fetchTripsByID } from '../../apiCalls';
import { filterData } from '../../utils';
import TripCard from '../Destination_Card/DestinationCard';

export const PendingTrips = ({ pendingTrips }) => {
	const { id } = pendingTrips;

	const [tripsPending, setTripsPending] = useState([]);
	const [error, setError] = useState('');

	const getTrips = () => {
		fetchTripsByID(id)
			.then((data) =>
				setTripsPending(filterData.getPendingTrips(data.requestedTrips))
			)
			.catch((error) => setError(error.message));
	};

	useEffect(() => {
		getTrips();
	}, []);

	const tripsPendingCards = tripsPending.map((trip) => (
		<TripCard key={trip.id} trip={trip} />
	));

	return (
		<section>
			<h2>Pending Trips</h2>
			{/* {tripsPendingCards} */}
		</section>
	);
};

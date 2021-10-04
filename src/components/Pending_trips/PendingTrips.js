import React, { useState, useEffect } from 'react';
import './PendingTrips.css';
import { fetchTripsByID } from '../../apiCalls';
import { filterData } from '../../utils';
import { TripCard } from '../Trip_Card/TripCard';
import { ErrorMessage } from '../Error_Message/ErrorMessage';

export const PendingTrips = ({ pendingTrips }) => {
	const { id } = pendingTrips;
	const [tripsPending, setTripsPending] = useState([]);
	const [error, setError] = useState('');
	const [notification, setNotification] = useState('');

	const getTrips = () => {
		fetchTripsByID(id)
			.then((data) =>
				setTripsPending(filterData.getPendingTrips(data.requestedTrips))
			)
			.catch((error) => setError(error.message));
	};

	const cancelTrip = (id) => {
		fetch(`http://localhost:3001/api/v1/trips/${id}`, { method: 'DELETE' })
			.then((res) => res.json())
			.then((data) => setNotification(data.message))
			.catch((error) => setError(error.message));
	};

	useEffect(() => {
		getTrips();
	}, []);

	useEffect(() => {
		getTrips();
	}, [notification]);

	let tripsPendingCards;
	if (typeof tripsPending !== 'string') {
		tripsPendingCards = tripsPending.map((trip) => {
			return <TripCard key={trip.id} trip={trip} cancelTrip={cancelTrip} />;
		});
	} else {
		tripsPendingCards = <ErrorMessage message={tripsPending} />;
	}

	return (
		<section className="pendingTripsContainer">
			{!error && <div className="pendingTripsWrapper">{tripsPendingCards}</div>}
			<h2>Pending Trips</h2>
			{notification && <ErrorMessage message={notification} />}
		</section>
	);
};

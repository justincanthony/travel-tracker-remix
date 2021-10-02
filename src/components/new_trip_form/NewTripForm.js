import React, { useState } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import './NewTripForm.css';

const NewTripForm = ({ userID, destinationID }) => {
	const [travelers, setTravelers] = useState('');
	const [duration, setDuration] = useState('');
	const [date, setDate] = useState('');

	const sendNewTrip = (newTrip) => {
		const requestOptions = {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newTrip),
		};
		fetch('http://localhost3001/api/v1/trips', requestOptions)
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTrip = {
			id: Date.now(),
			userID,
			destinationID,
			travelers,
			date,
			duration,
			status: 'pending',
			suggestedActivites: [],
		};
		sendNewTrip(newTrip);
	};

	return (
		<form className="newTripForm" type="submit">
			<input
				className="date"
				type="date"
				placeholder="Date"
				value={date}
				onChange={(e) => setDate(e.target.value)}
			/>
			<input
				className="travelers"
				type="number"
				placeholder="Number of Travelers"
				value={travelers}
				onChange={(e) => setTravelers(e.target.value)}
			/>
			<input
				className="duration"
				type="number"
				placeholder="Number of Days"
				value={duration}
				onChange={(e) => setDuration(e.target.value)}
			/>
			<button className="submit" type="submit" onClick={(e) => handleSubmit(e)}>
				Book It!
			</button>
		</form>
	);
};

export default NewTripForm;

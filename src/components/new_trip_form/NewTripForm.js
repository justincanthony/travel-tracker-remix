import React, { useState } from 'react';
import dayjs from 'dayjs';
import './NewTripForm.css';

const NewTripForm = ({ userID, destinationID, sendNewTrip }) => {
	const [travelers, setTravelers] = useState('');
	const [duration, setDuration] = useState('');
	const [date, setDate] = useState('');
	const [notification, setNotification] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTrip = {
			id: Date.now(),
			userID,
			destinationID,
			travelers,
			date: dayjs(date).format('YYYY/MM/DD'),
			duration,
			status: 'pending',
			suggestedActivities: [],
		};
		sendNewTrip(newTrip);
		setDuration('');
		setTravelers('');
		setDate('');
	};

	return (
		<form className="newTripForm" type="submit">
			<input
				className="date"
				type="date"
				placeholder="Date"
				value={date}
				min={Date.now()}
				required
				onChange={(e) => setDate(e.target.value)}
			/>
			<input
				className="travelers"
				type="number"
				placeholder="Number of Travelers"
				value={travelers}
				min="1"
				required
				onChange={(e) => setTravelers(e.target.value)}
			/>
			<input
				className="duration"
				type="number"
				placeholder="Number of Days"
				min="1"
				value={duration}
				required
				onChange={(e) => setDuration(e.target.value)}
			/>
			<button className="submit" type="submit" onClick={(e) => handleSubmit(e)}>
				Book It!
			</button>
		</form>
	);
};

export default NewTripForm;

// ********* NOTES *************
// decide how to handle group size larger than 10
// add toast alert for succesful submission/POST

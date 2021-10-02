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
			duration,
			travelers,
			status: 'pending',
			suggestedActivites: [],
		};
		scryRenderedComponentsWithType();
	};

	return <form className="newTripForm" type="submit"></form>;
};

export default NewTripForm;

// const requiredProperties = [
//   'id',
//   'userID',
//   'destinationID',
//   'travelers',
//   'date',
//   'duration',
//   'status',
//   'suggestedActivities',
// ];

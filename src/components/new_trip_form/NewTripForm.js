import React, { useState } from 'react';
import './NewTripForm.css';

const NewTripForm = ({userID, destinationID, }) => {
	const [destination, setDestination] = useState('');
  const [travelers, setTravelers] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');



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
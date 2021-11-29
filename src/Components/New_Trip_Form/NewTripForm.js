import React, { useState } from 'react';
import dayjs from 'dayjs';
import './NewTripForm.css';
import { Button } from '@mui/material';
import { ErrorMessage } from '../Error_Message/ErrorMessage';

const NewTripForm = ({
  userID,
  destinationID,
  sendNewTrip,
  destination,
  close,
  lodgingCost,
  flightCost,
}) => {
  const [travelers, setTravelers] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      travelers !== '' &&
      duration !== '' &&
      date !== '' &&
      0 < travelers &&
      travelers <= 20 &&
      duration > 0 &&
      duration <= 90
    ) {
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
      sendNewTrip(newTrip, destination);
      setDuration('');
      setTravelers('');
      setDate('');
    } else {
      setError('Invalid Input');
    }
  };

  return (
    <React.Fragment>
      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <form className="newTripForm" type="submit">
          <p className="modalText">
            Please fill out the following information.
          </p>
          <label htmlFor="date" name="date">
            Date
          </label>
          <input
            id="date"
            className="date"
            type="date"
            placeholder="Date"
            value={date}
            min={dayjs().format('YYYY-MM-DD')}
            required
            onChange={(e) => setDate(e.target.value)}
          />
          <label htmlFor="travelers" name="travelers">
            Number of Travelers
          </label>
          <input
            id="travelers"
            className="travelers"
            type="number"
            placeholder="20 people max)"
            value={travelers}
            min={1}
            required
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={(e) => setTravelers(e.target.value)}
          />
          <label htmlFor="duration" name="duration">
            Duration
          </label>
          <input
            id="duration"
            className="duration"
            type="number"
            placeholder="90 days max"
            min={1}
            value={duration}
            required
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={(e) => setDuration(e.target.value)}
          />
          <p>
            Total Trip Cost: $
            {lodgingCost * duration * travelers + flightCost * travelers}
          </p>
          <Button
            variant="contained"
            className="submit"
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
              if (
                travelers !== '' &&
                duration !== '' &&
                date !== '' &&
                0 < travelers &&
                travelers <= 20 &&
                duration > 0 &&
                duration <= 90
              ) {
                close();
              }
            }}
          >
            Book It!
          </Button>
        </form>
      )}
    </React.Fragment>
  );
};

export default NewTripForm;

import dayjs from 'dayjs';
import './TripCard.css';
import { Button } from '@mui/material';

export const TripCard = ({ trip, cancelTrip }) => {
  const { id, place, travelers, date, duration } = trip;
  const {
    destination,
    estimatedFlightCostPerPerson,
    estimatedLodgingCostPerDay,
    image,
  } = place;

  const handleChange = (id, destination) => {
    cancelTrip(id, destination);
  };

  return (
    <article className="tripCard">
      <h3 className="destinationPendingTitle">{destination}</h3>
      <div className="destinationImageWrapper">
        <img className="destinationImage" src={image} alt={destination} />
      </div>
      <section className="tripDetails">
        <p>Date: {date}</p>
        <p>Duration: {duration} Days</p>
        <p>Number of Travelers: {travelers}</p>
        <p>
          Total Trip Cost: $
          {estimatedLodgingCostPerDay * duration * travelers +
            estimatedFlightCostPerPerson * travelers}
        </p>
        {dayjs(date).isAfter(dayjs()) && (
          <Button
            variant="contained"
            color="inherit"
            className="cancelSubmit"
            type="submit"
            onClick={() => handleChange(id, destination)}
          >
            Cancel Trip
          </Button>
        )}
      </section>
    </article>
  );
};

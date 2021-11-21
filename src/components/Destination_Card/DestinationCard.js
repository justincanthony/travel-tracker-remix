import MicroModal from 'react-micro-modal';
import NewTripForm from '../New_Trip_Form/NewTripForm';
import './DestinationCard.css';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import { Button } from '@mui/material';

const DestinationCard = ({ userID, destinationObj, sendNewTrip }) => {
  const {
    id,
    destination,
    estimatedLodgingCostPerDay,
    estimatedFlightCostPerPerson,
    image,
  } = destinationObj;

  return (
    <article className="destinationCard" key={id} id={id}>
      <h3 className="destinationTitle">{destination}</h3>
      <div className="destinationImageWrapper">
        <img className="destinationImage" src={image} alt={destination} />
      </div>
      <section className="destinationDetails">
        <p>Lodging Cost Per Day: ${estimatedLodgingCostPerDay}</p>
        <p>Flight Cost Per Person: ${estimatedFlightCostPerPerson}</p>
        <MicroModal
          trigger={(open) => (
            <div onClick={open}>
              <Button className="bookMeButton" variant="outlined">
                Book Me!
              </Button>
            </div>
          )}
        >
          {(close) => {
            return (
              <article className="modalContainer">
                <FlightTakeoffIcon />
                <h3 className="modalTitle">Book Your Trip to {destination}</h3>

                <NewTripForm
                  destinationID={id}
                  destination={destination}
                  userID={userID}
                  sendNewTrip={sendNewTrip}
                  lodgingCost={estimatedLodgingCostPerDay}
                  flightCost={estimatedFlightCostPerPerson}
                  close={close}
                />
                <br />
                <Button
                  variant="contained"
                  className="modalBackButton"
                  onClick={close}
                >
                  Go Back
                </Button>
              </article>
            );
          }}
        </MicroModal>
      </section>
    </article>
  );
};

export default DestinationCard;

// ********Example Trip Data***********
// {
//   "id": 1,
//   "userID": 44,
//   "destinationID": 49,
//   "travelers": 1,
//   "date": "2022/09/16",
//   "duration": 8,
//   "status": "approved",
//   "suggestedActivities": []
// }

// ********Example Destination Data***********

// "id": 1,
//   "destination": "Lima, Peru",
//   "estimatedLodgingCostPerDay": 70,
//   "estimatedFlightCostPerPerson": 400,
//   "image": "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
//   "alt": "overview of city buildings with a clear sky"
// }

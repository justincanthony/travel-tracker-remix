import React, { useState } from "react";
import './TripCard.css';

const TripCard = ({ destinationObj }) => {
 const  {id, destination, estimatedLodgingCostPerDay, estimatedFlightCostPerPerson, image} = destinationObj;

  return (
    
    <article className='tripCard' key={id} id={id}>
      <header>
        <h3 className='destination'>{destination}</h3>
      </header>
      <section className="destinationDetails">
        <div className='destinationImageWrapper'>
          <img className='destinationImage' src={image} alt={destination}/>
        </div>
        <p>Lodging Cost Per Day: {estimatedLodgingCostPerDay}</p>
        <p>Flight Cost Per Person: {estimatedFlightCostPerPerson}</p>
        {/* <p>Total Trip Cost: {{estimatedLodgingCostPerDay}+{estimatedFlightCostPerPerson}}</p> */}
        <button type="submit" className="bookTripButton">Book Me!</button>
      </section>
    </article>
  )
}

export default TripCard




// *************IDEAS******************
//add a book this trip modal onClick that auto populates the form. you can submit it if you like, or cancel. 
//import toast for error handling


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
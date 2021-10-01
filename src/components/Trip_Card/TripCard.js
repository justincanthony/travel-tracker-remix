import React, { useState } from 'react';
import MicroModal from 'react-micro-modal';
import './TripCard.css';

export const TripCard = ({ trip }) => {
	const { id, userId, place, travelers, date, duration } = trip;
	const {
		destination,
		estimatedFlightCostPerPerson,
		estimatedLodgingCostPerDay,
		image,
	} = place;
	return (
		<article className="tripCard">
			<h3 className="destinationTitle">{destination}</h3>
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
			</section>
		</article>
	);
};
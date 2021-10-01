export const filterData = {
	getPendingTrips(data) {
		const pendingTrips = data.filter(
			(trip) => trip.status === 'pending' && trip.date > Date.now()
		);
		if (!pendingTrips) {
			return 'You do not have any current trip requests. Please visit Destinations to book your next trip!';
		}
		return data.filter((trip) => trip.status === 'pending');
	},

	getApprovedTrips(data) {
		const approvedTrips = data.filter((trip) => trip.status === 'approved');
		if (!approvedTrips) {
			return 'You have no approved Trips';
		} else {
			return approvedTrips;
		}
	},

	getPastTrips(data) {
		const approvedTrips = this.getApprovedTrips(data);
		if (!approvedTrips) {
			return 'You have not taken any trips yet. Please visit Destinations to book your next adventure!';
		} else {
			return approvedTrips.filter((trip) => trip.date < Date.now());
		}
	},
};

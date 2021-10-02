import dayjs from 'dayjs';

export const filterData = {
  getPendingTrips(data) {
    const pendingTrips = data.filter((trip) => trip.status === 'pending');

    if (pendingTrips.length < 1) {
      return 'You do not have any current trip requests. Please visit Destinations to book your next trip!';
    } else {
      return pendingTrips;
    }
  },

  getApprovedTrips(data) {
    const approvedTrips = data.filter((trip) => trip.status === 'approved');
    if (approvedTrips.length < 1) {
      return 'You have no approved Trips';
    } else {
      return approvedTrips;
    }
  },

  getPastTrips(data) {
    const approvedTrips = this.getApprovedTrips(data);
    if (approvedTrips.length < 1) {
      return 'You have not taken any trips yet. Please visit Destinations to book your next adventure!';
    } else {
      return approvedTrips.filter(
        (trip) => dayjs(trip.date).isBefore(dayjs()) === true
      );
    }
  },
};

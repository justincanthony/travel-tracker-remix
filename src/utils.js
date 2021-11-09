import dayjs from 'dayjs';

export const filterData = {
  getPendingTrips(data) {
    const pendingTrips = data.filter((trip) => trip.status === 'pending');

    if (pendingTrips.length < 1) {
      throw new Error(
        'You do not have any current trip requests. Please visit Destinations to book your next trip!'
      );
    } else {
      return pendingTrips.filter(
        (trip) => dayjs(trip.date).isAfter(dayjs()) === true
      );
    }
  },

  getApprovedTrips(data) {
    const approvedTrips = data.filter((trip) => trip.status === 'approved');
    if (approvedTrips.length < 1) {
      throw new Error('You have no approved Trips');
    } else {
      return approvedTrips;
    }
  },

  getPastTrips(data) {
    const approvedTrips = this.getApprovedTrips(data);
    if (approvedTrips.length < 1) {
      throw new Error('You have not taken any trips.');
    } else {
      return approvedTrips.filter(
        (trip) => dayjs(trip.date).isBefore(dayjs()) === true
      );
    }
  },

  getFutureTrips(data) {
    const approvedTrips = this.getApprovedTrips(data);
    if (approvedTrips.length < 1) {
      throw new Error('You do not have any upcoming trips.');
    } else {
      return approvedTrips.filter(
        (trip) => dayjs(trip.date).isAfter(dayjs()) === true
      );
    }
  },
};

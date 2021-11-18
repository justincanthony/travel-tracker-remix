import React from 'react';
import './UserDashboard.css';
import Destinations from '../Destinations/Destinations';
import { DashboardNavbar } from '../Dashboard_Navbar/DashboardNavbar';
import { ErrorMessage } from '../Error_Message/ErrorMessage';
import { PendingTrips } from '../Pending_trips/PendingTrips';
import { PastTrips } from '../Past_Trips/PastTrips';

export const UserDashboard = ({ userID, type }) => {
  return (
    <React.Fragment>
      <DashboardNavbar userID={userID} />
      {type === 'pendingTrips' && <PendingTrips userID={userID} />}
      {type === 'destinations' && <Destinations userID={userID} />}
      {type === 'pastTrips' && <PastTrips userID={userID} />}
    </React.Fragment>
  );
};

import React, { useState, useEffect } from 'react';
import './UserDashboard.css';
import Destinations from '../Destinations/Destinations';
import { DashboardNavbar } from '../Dashboard_Navbar/DashboardNavbar';
import { ErrorMessage } from '../Error_Message/ErrorMessage';
import { PendingTrips } from '../Pending_trips/PendingTrips';
import { PastTrips } from '../Past_Trips/PastTrips';
import { fetchTravelerByID } from '../../apiCalls';

export const UserDashboard = ({ userID, type }) => {
  const [traveler, setTraveler] = useState({});

  useEffect(() => {
    const getTravelerByID = (userID) => {
      fetchTravelerByID(userID).then((data) => {
        console.log(data);
      });
    };
    getTravelerByID(userID);
  }, [userID]);

  return (
    <React.Fragment>
      <DashboardNavbar userID={userID} />
      {type === 'pendingTrips' && <PendingTrips userID={userID} />}
      {type === 'destinations' && <Destinations userID={userID} />}
      {type === 'pastTrips' && <PastTrips userID={userID} />}
    </React.Fragment>
  );
};

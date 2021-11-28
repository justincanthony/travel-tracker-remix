import React, { useState, useEffect } from 'react';
import './UserDashboard.css';
import { DashboardNavbar } from '../Dashboard_Navbar/DashboardNavbar';
import { UserDetails } from '../User_Details/UserDetails';
import { ErrorMessage } from '../Error_Message/ErrorMessage';
import { fetchTravelerByID } from '../../apiCalls';

export const UserDashboard = ({ userID, type }) => {
  const [traveler, setTraveler] = useState({});
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getTravelerByID = (userID) => {
      fetchTravelerByID(userID)
        .then((data) => {
          setTraveler(data);
          setIsLoading(false);
        })
        .catch((error) => setError(error));
    };
    getTravelerByID(userID);
  }, [userID]);

  return (
    <React.Fragment>
      <DashboardNavbar userID={userID} />
      {!isLoading && !error && traveler && <UserDetails traveler={traveler} />}
      {error && <ErrorMessage message={error} />}
    </React.Fragment>
  );
};

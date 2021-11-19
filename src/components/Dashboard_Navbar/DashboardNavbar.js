import React from 'react';
import './DashboardNavbar.css';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';

export const DashboardNavbar = ({ userID, traveler }) => {
  const { name } = traveler;

  return (
    <header className="dashboardNavbar">
      <div className="titleMenuWrapper">
        <div className="titleContainer">
          <h1 className="appTitle">Travel Tracker v2</h1>
        </div>
        <div className="userIconWrapper">
          <PersonIcon />
          <br />
          <p className="userName">{name}</p>
        </div>
      </div>
      <div className="linksContainer">
        <ul className="linksList">
          <li>
            <Link className="links" to={`/user_dashboard/${userID}`}>
              Dashboard
            </Link>
          </li>
          <br />
          <li>
            <Link className="links" to={`/destinations/${userID}`}>
              Destinations
            </Link>
          </li>
          <br />
          <li>
            <Link className="links" to={`/pending_trips/${userID}`}>
              Pending Trips
            </Link>
          </li>
          <br />
          <li>
            <Link className="links" to={`/past_trips/${userID}`}>
              Past Trips
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

import React from 'react';
import './DashboardNavbar.css';
import { Link } from 'react-router-dom';

export const DashboardNavbar = ({ userID }) => {
  return (
    <header className="dashboardNavbar">
      <h1 className="appTitle">Travel Tracker v2</h1>
      <div className="linksContainer">
        <ul className="linksList">
          <li>
            <Link className="links" to={`/destinations/${userID}`}>
              Destinations
            </Link>
          </li>
          <br />
          <li>
            <Link className="links" to={`/user_dashboard/${userID}`}>
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

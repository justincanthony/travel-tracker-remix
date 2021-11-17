import React from 'react';
import './DashboardNavbar.css';
import { Link } from 'react-router-dom';

export const DashboardNavbar = () => {
  return (
    <header className="dashBoardNavbar">
      <h1 className="appTitle">Travel Tracker v2</h1>
      <div className="linksContainer">
        <ul className="linksList">
          <li>
            <Link className="links" to="/destinations">
              Destinations
            </Link>
          </li>
          <br />
          <li>
            <Link className="links" to="/pending_trips/user/38">
              Pending Trips
            </Link>
          </li>
          <br />
          <li>
            <Link className="links" to="/past_trips/user/38">
              Past Trips
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

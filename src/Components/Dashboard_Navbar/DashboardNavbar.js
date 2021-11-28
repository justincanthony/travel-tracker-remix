import React, { useState, useEffect } from 'react';
import './DashboardNavbar.css';
import { Link, Redirect } from 'react-router-dom';
import { fetchTripsByID } from '../../apiCalls';
import { filterData } from '../../utils';
import { fetchTravelerByID } from '../../apiCalls';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PendingIcon from '@mui/icons-material/Pending';
import HistoryIcon from '@mui/icons-material/History';

export const DashboardNavbar = ({ userID }) => {
  const [traveler, setTraveler] = useState({});
  const [tripsPending, setTripsPending] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfile = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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

  useEffect(() => {
    const getTrips = () => {
      fetchTripsByID(userID)
        .then((data) => {
          setTripsPending(filterData.getPendingTrips(data.requestedTrips));
        })
        .catch((error) => setError(error.message));
    };
    getTrips();
  }, [userID]);

  return (
    <React.Fragment>
      {isLoggedIn ? (
        <nav className="dashboardNavbar">
          <div className="linksContainer">
            <ul className="linksList">
              <li>
                <Link className="links" to={`/user_dashboard/${userID}`}>
                  <DashboardIcon /> Dashboard
                </Link>
              </li>
              <br />
              <li>
                <Link className="links" to={`/destinations/${userID}`}>
                  <TravelExploreIcon /> Destinations
                </Link>
              </li>
              <br />
              <li>
                <Badge badgeContent={tripsPending.length} color="primary">
                  <Link className="links" to={`/pending_trips/${userID}`}>
                    <PendingIcon /> Pending Trips
                  </Link>
                </Badge>
              </li>
              <br />
              <li>
                <Link className="links" to={`/past_trips/${userID}`}>
                  <HistoryIcon /> Past Trips
                </Link>
              </li>
              <li>
                <Button
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  {' '}
                  <PersonIcon />
                  {traveler.name}
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleProfile}>
                    <Link to={`/user_dashboard/${userID}`}>Profile</Link>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <Redirect to="/" />
      )}
    </React.Fragment>
  );
};

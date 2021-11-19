import React, { useState } from 'react';
import './DashboardNavbar.css';
import { Link, Redirect } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const DashboardNavbar = ({ userID, traveler }) => {
  const { name } = traveler;

  const [isLoggedIn, setIsLoggedIn] = useState(true);
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

  return (
    <React.Fragment>
      {isLoggedIn ? (
        <header className="dashboardNavbar">
          <div className="titleMenuWrapper">
            <div className="titleContainer">
              <h1 className="appTitle">Travel Tracker v2</h1>
            </div>
            <div className="userIconWrapper">
              <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <PersonIcon />
                <br />
                <p className="userName">{name}</p>
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
      ) : (
        <Redirect to="/" />
      )}
    </React.Fragment>
  );
};

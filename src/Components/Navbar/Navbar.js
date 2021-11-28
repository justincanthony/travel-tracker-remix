import React from 'react';
import './Navbar.css';
import ExploreIcon from '@mui/icons-material/Explore';

const Navbar = () => {
  return (
    <header className="header">
      <h1 className="appTitle">
        TRAVEL <ExploreIcon></ExploreIcon> TRACKER
      </h1>
    </header>
  );
};

export default Navbar;

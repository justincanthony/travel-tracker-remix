import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<header className="header">
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
						<Link className="links" to="/pending_trips/user/44">
							Pending Trips
						</Link>
					</li>
					<br />
					<li>
						<Link className="links" to="">
							Past Trips
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;

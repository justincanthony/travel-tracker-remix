import Destinations from '../destinations/Destinations';
import Navbar from '../navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { PendingTrips } from '../Pending_trips/PendingTrips';

const App = () => {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route
					exact
					path="/:destinations"
					render={({ match }) => {
						const { params } = match;
						return <Destinations destinations={params.destinations} />;
					}}
				/>
				<Route
					exact
					path="/:pending_trips/user/:id"
					render={({ match }) => {
						const { params } = match;
						return <PendingTrips pendingTrips={params} />;
					}}
				/>
			</Switch>
		</div>
	);
};

export default App;

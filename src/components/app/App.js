import Destinations from '../destinations/Destinations';
import Navbar from '../navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import './App.css';

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
			</Switch>
		</div>
	);
};

export default App;

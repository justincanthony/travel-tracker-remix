import Destinations from '../Destinations/Destinations';
import Navbar from '../Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Login } from '../Login/Login';
import { PendingTrips } from '../Pending_trips/PendingTrips';
import { PastTrips } from '../Past_Trips/PastTrips';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Login />} />
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
          path="/pending_trips/user/:id"
          render={({ match }) => {
            const { params } = match;
            return <PendingTrips pendingTrips={params} />;
          }}
        />
        <Route
          exact
          path="/past_trips/user/:id"
          render={({ match }) => {
            const { params } = match;
            return <PastTrips pastTrips={params} />;
          }}
        />
      </Switch>
    </div>
  );
};

export default App;

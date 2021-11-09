import Destinations from '../Destinations/Destinations';
import Navbar from '../Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Login } from '../Login/Login';
import { PendingTrips } from '../Pending_trips/PendingTrips';
import { PastTrips } from '../Past_Trips/PastTrips';
import { ToastContainer } from 'react-toastify';
import { UserDashboard } from '../UserDashboard/UserDashboard';

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route
          exact
          path="/user_dashboard/:userID"
          render={({ match }) => {
            const { params } = match;
            return <UserDashboard userID={params.userID} />;
          }}
        />
        {/* <Route
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
        /> */}
        {/* <Route render={() => <ErrorPage/>}/> */}
      </Switch>
    </div>
  );
};

export default App;

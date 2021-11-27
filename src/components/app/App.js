import { Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from '../Navbar/Navbar';
import { Login } from '../Login/Login';
import { PendingTrips } from '../Pending_trips/PendingTrips';
import { ToastContainer } from 'react-toastify';
import { UserDashboard } from '../UserDashboard/UserDashboard';
import React from 'react';
import Destinations from '../Destinations/Destinations';
import { PastTrips } from '../Past_Trips/PastTrips';

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
            return (
              <UserDashboard userID={params.userID} type="userDashboard" />
            );
          }}
        />
        <Route
          exact
          path="/destinations/:userID"
          render={({ match }) => {
            const { params } = match;
            return <Destinations userID={params.userID} />;
          }}
        />
        <Route
          exact
          path="/pending_trips/:userID"
          render={({ match }) => {
            const { params } = match;
            return <PendingTrips userID={params.userID} />;
          }}
        />
        <Route
          exact
          path="/past_trips/:userID"
          render={({ match }) => {
            const { params } = match;
            return <PastTrips userID={params.userID} />;
          }}
        />
        {/* <Route render={() => <ErrorPage/>}/> */}
      </Switch>
    </div>
  );
};

export default App;

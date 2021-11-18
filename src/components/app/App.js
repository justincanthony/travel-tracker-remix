import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Login } from '../Login/Login';
import { ToastContainer } from 'react-toastify';
import { UserDashboard } from '../UserDashboard/UserDashboard';

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" render={() => <Login />} />
        <Route
          exact
          path="/user_dashboard/:userID"
          render={({ match }) => {
            const { params } = match;
            return <UserDashboard userID={params.userID} type="pendingTrips" />;
          }}
        />
        <Route
          exact
          path="/destinations/:userID"
          render={({ match }) => {
            const { params } = match;
            return <UserDashboard userID={params.userID} type="destinations" />;
          }}
        />
        <Route
          exact
          path="/past_trips/:userID"
          render={({ match }) => {
            const { params } = match;
            return <UserDashboard userID={params.userID} type="pastTrips" />;
          }}
        />
        {/* <Route render={() => <ErrorPage/>}/> */}
      </Switch>
    </div>
  );
};

export default App;

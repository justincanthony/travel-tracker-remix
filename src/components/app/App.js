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
            return <UserDashboard userID={params.userID} />;
          }}
        />
        {/* <Route render={() => <ErrorPage/>}/> */}
      </Switch>
    </div>
  );
};

export default App;

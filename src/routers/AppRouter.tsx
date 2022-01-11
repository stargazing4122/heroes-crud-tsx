import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';
import DashboardRouter from './DashboardRouter';
import PrivateRoute from './PrivateRoute';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const { userState } = useContext(UserContext);
  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={LoginScreen}
          isAuthenticated={userState.login}
        />
        <PrivateRoute
          path="/"
          component={DashboardRouter}
          isAuthenticated={userState.login}
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;

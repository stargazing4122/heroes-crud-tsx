import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';
import DashboardRouter from './DashboardRouter';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route path="/" component={DashboardRouter} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

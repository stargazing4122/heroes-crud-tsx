import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import HomeScreen from '../components/home/HomeScreen';
import NavBar from '../components/ui/NavBar';
import HeroesScreen from '../components/heroes/HeroesScreen';
import HeroScreen from '../components/hero/HeroScreen';

const DashboardRouter = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/heroes" component={HeroesScreen} />
          <Route exact path="/hero/:name" component={HeroScreen} />

          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRouter;

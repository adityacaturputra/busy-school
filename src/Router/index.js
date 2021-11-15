import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Task from '../pages/Task';
import Home from '../pages/Home';
import Schedule from '../pages/Schedule';

function Router() {
  return (
    <Switch>

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/schedule">
        <Schedule />
      </Route>

      <Route path="/task">
        <Task />
      </Route>

      {/* <Route path="/profile">
        <Profile />
      </Route> */}

    </Switch>
  );
}

export default Router;

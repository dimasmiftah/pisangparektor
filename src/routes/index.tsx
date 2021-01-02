import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Home/Home'));
const Result = lazy(() => import('./Result/Result'));

const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/result' component={Result} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';

const Home = lazy(() => import('./Home/Home'));
const Result = lazy(() => import('./Result/Result'));

const Routes = () => (
  <Router>
    <Suspense
      fallback={
        <Loader type='ThreeDots' color='#00BFFF' height={80} width={80} />
      }
    >
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/result' component={Result} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;

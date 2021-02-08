import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';

const Home = lazy(() => import('./Home/Home'));
const Result = lazy(() => import('./Result/Result'));
const About = lazy(() => import('./About/About'));

const SuspenseFallback = (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Loader type='ThreeDots' color='#00BFFF' height={80} width={80} />
  </div>
);

const Routes = () => (
  <Router>
    <Suspense fallback={SuspenseFallback}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/result' component={Result} />
        <Route path='/about' component={About} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;

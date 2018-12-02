/**
 * Application Container
 * the main container of the whole application
 */
import { Routes } from 'Components/Routes';
import * as React from 'react';
// @todo make this alias to be empty in production?
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => (
  <Router>
    <Routes />
  </Router>
);

const containerApp: React.FunctionComponent = hot(module)(App);

export { containerApp as App };

/**
 * Application Container
 * the main container of the whole application
 */
import { CssBaseline } from '@material-ui/core';
import { Routes } from 'Components/layouts/Routes';
import { ApolloClient } from 'Helpers/ApolloClient';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
// @todo make this alias to be empty in production?
import * as ReactGA from 'react-ga';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import * as WebFont from 'webfontloader';

// google analytics initialize and initial page view tracking
ReactGA.initialize(process.env.GA_TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

WebFont.load({
  google: {
    families: ['Caladea:400:latin', 'Rochester:400:latin']
  }
});

const App: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => (
  <CssBaseline>
    <ApolloProvider client={ApolloClient}>
      <Router>
        <Routes />
      </Router>
    </ApolloProvider>
  </CssBaseline>
);

const containerApp: React.FunctionComponent = hot(module)(App);

export { containerApp as App };

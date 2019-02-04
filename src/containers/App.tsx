/**
 * Application Container
 * the main container of the whole application
 */
import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import { Routes } from 'Components/layouts/Routes';
import { HideReCaptchaBadge } from 'Components/pages/rsvp/HideReCaptchaBadge';
import { StyleProvider } from 'Components/StyleProvider';
import { ConnectedRouter } from 'connected-react-router';
import { THEME } from 'Constants/THEME';
import { ApolloClient } from 'Helpers/ApolloClient';
import { history } from 'Helpers/history';
import { store } from 'Helpers/store';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import * as ReactGA from 'react-ga';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// @todo make this alias to be empty in production?
import * as WebFont from 'webfontloader';

// google analytics initialize and initial page view tracking
ReactGA.initialize(process.env.GA_TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

WebFont.load({
  google: {
    families: ['Merienda:400,700:latin', 'Rochester:400:latin']
  }
});

const App: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => (
  <React.Fragment>
    <StyleProvider>
      <MuiThemeProvider theme={THEME}>
        <ThemeProvider theme={THEME}>
          <Provider store={store}>
            <ConnectedRouter history={history}>
              <ApolloProvider client={ApolloClient}>
                <CssBaseline />
                <Routes />
              </ApolloProvider>
            </ConnectedRouter>
          </Provider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StyleProvider>
    <HideReCaptchaBadge />
  </React.Fragment>
);

const containerApp: React.FunctionComponent = hot(module)(App);

export { containerApp as App };

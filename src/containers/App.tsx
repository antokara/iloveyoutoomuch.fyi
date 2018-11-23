/**
 * Application Container
 * the main container of the whole application
 */
import { App } from 'Components/App';
import * as React from 'react';
// @todo make this alias to be empty in production?
import { hot } from 'react-hot-loader';

const containerApp: React.FunctionComponent = hot(module)(App);

export { containerApp as App };

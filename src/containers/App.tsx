/**
 * Application Container
 * the main container of the whole application
 */
import * as React from 'react';
// @todo make this alias to be empty in production?
import { hot } from 'react-hot-loader';

const app: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => <div>Hello World!</div>;

const containerApp: React.FunctionComponent = hot(module)(app);

export { containerApp as App };

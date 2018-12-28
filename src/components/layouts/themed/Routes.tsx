/**
 * themed Routes Component
 * defines which themed page component will be applied to the current route
 */
import { Contact } from 'Components/pages/Contact';
import { Home } from 'Components/pages/Home';
import { NotFound } from 'Components/pages/NotFound';
import { ROUTES } from 'Constants/ROUTES';
import * as React from 'react';
import { Route, Switch } from 'react-router';

const Routes: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => (
  <Switch>
    <Route exact={true} path={ROUTES.HOME.PATH} component={Home} />
    <Route exact={true} path={ROUTES.CONTACT.PATH} component={Contact} />
    <Route component={NotFound} />
  </Switch>
);

export { Routes };
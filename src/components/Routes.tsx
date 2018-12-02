/**
 * Application Component
 * the main component of the whole application
 */
import { Contact } from 'Components/Contact';
import { Home } from 'Components/Home';
import { NotFound } from 'Components/NotFound';
import { SaveTheDate } from 'Components/SaveTheDate';
import { ROUTES } from 'Constants/ROUTES';
import * as React from 'react';
import { Route, Switch } from 'react-router';

const Routes: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => (
  <Switch>
    <Route exact={true} path={ROUTES.HOME.PATH} component={Home} />
    <Route exact={true} path={ROUTES.CONTACT.PATH} component={Contact} />
    <Route
      exact={true}
      path={ROUTES.SAVE_THE_DATE.PATH}
      component={SaveTheDate}
    />
    <Route component={NotFound} />
  </Switch>
);

export { Routes };

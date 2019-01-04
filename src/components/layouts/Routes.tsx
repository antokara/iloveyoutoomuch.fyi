/**
 * Layouts Routes Component
 * the Routes that define which layout will be applied to the current route
 */
import { ROUTES } from 'Constants/ROUTES';
import { SaveTheDate } from 'Containers/layouts/SaveTheDate';
import { Themed } from 'Containers/layouts/themed/Themed';
import * as React from 'react';
import { Route, Switch } from 'react-router';

const Routes: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => (
  <Switch>
    <Route
      exact={true}
      path={ROUTES.SAVE_THE_DATE.PATH}
      component={SaveTheDate}
    />
    <Route component={Themed} />
  </Switch>
);

export { Routes };

/**
 * themed Routes Component
 * defines which themed page component will be applied to the current route
 */
import { Home } from 'Components/pages/Home';
import { NotFound } from 'Components/pages/NotFound';
import { ROUTES } from 'Constants/ROUTES';
import { Contact } from 'Containers/pages/Contact';
import { Gallery } from 'Containers/pages/Gallery';
import { Information } from 'Containers/pages/Information';
import { Registry } from 'Containers/pages/Registry';
import { Story } from 'Containers/pages/Story';
import * as React from 'react';
import { Route, Switch } from 'react-router';

const Routes: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => (
  <Switch>
    <Route exact={true} path={ROUTES.HOME.PATH} component={Home} />
    <Route exact={true} path={ROUTES.STORY.PATH} component={Story} />
    <Route exact={true} path={ROUTES.GALLERY.PATH} component={Gallery} />
    <Route exact={true} path={ROUTES.REGISTRY.PATH} component={Registry} />
    <Route
      exact={true}
      path={ROUTES.INFORMATION.PATH}
      component={Information}
    />
    <Route exact={true} path={ROUTES.CONTACT.PATH} component={Contact} />
    <Route component={NotFound} />
  </Switch>
);

export { Routes };

/**
 * Save The Date Container
 */
import { Themed as ThemedComponent } from 'Components/layouts/themed/Themed';
import * as getTheme from 'Gql/getTheme';
import * as React from 'react';
import { graphql } from 'react-apollo';
import * as ReactGA from 'react-ga';
import { withRouter } from 'react-router';

const ThemedContainer: React.FunctionComponent = (
  props
): React.ReactElement<React.ReactNode> => {
  // track only when loaded
  if (!props.data.loading) {
    ReactGA.event({
      category: 'Home',
      action: 'view',
      label: props.match.params.guest,
      nonInteraction: true
    });
  }

  return <ThemedComponent {...props} />;
};

const Themed: React.ComponentClass = graphql(getTheme)(
  withRouter(ThemedContainer)
);

export { Themed };

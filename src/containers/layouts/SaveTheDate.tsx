/**
 * Save The Date Container
 */
import { SaveTheDate as SaveTheDateComponent } from 'Components/layouts/saveTheDate/SaveTheDate';
import * as getSaveTheDate from 'Gql/getSaveTheDate';
import * as React from 'react';
import { graphql } from 'react-apollo';
import * as ReactGA from 'react-ga';
import { withRouter } from 'react-router';

const SaveTheDateContainer: React.FunctionComponent = (
  props
): React.ReactElement<React.ReactNode> => {
  // track only when loaded
  if (!props.data.loading) {
    ReactGA.event({
      category: 'Save The Date',
      action: 'view',
      label: props.match.params.guest,
      nonInteraction: true
    });
  }

  return <SaveTheDateComponent {...props} />;
};

const SaveTheDate: React.ComponentClass = graphql(getSaveTheDate)(
  withRouter(SaveTheDateContainer)
);

export { SaveTheDate };

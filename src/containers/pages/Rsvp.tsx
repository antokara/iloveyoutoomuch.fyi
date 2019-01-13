/**
 * RSVP Container
 * returns the Loading indicator component while the GraphQL is pending and
 * when loaded, it returns the Generic component
 */
import { Rsvp as RsvpComponent } from 'Components/pages/Rsvp';
import { Loading } from 'Components/shared/Loading';
import * as getRsvp from 'Gql/getRsvp';
import * as React from 'react';
import { graphql } from 'react-apollo';
import { reduxForm } from 'redux-form';

const RsvpContainer: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> =>
  data.loading ? <Loading /> : <RsvpComponent body={data.rsvp.body} />;

const Rsvp: React.ComponentClass = graphql(getRsvp)(
  reduxForm({
    form: 'coach/memberDetail/highlight',
    enableReinitialize: true
  })(RsvpContainer)
);

export { Rsvp };

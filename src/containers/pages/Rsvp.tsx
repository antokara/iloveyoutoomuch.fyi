/**
 * RSVP Container
 * returns the Loading indicator component while the GraphQL is pending and
 * when loaded, it returns the Generic component
 */
import { Generic } from 'Components/pages/Generic';
import { Loading } from 'Components/shared/Loading';
import * as getRsvp from 'Gql/getRsvp';
import * as React from 'react';
import { graphql } from 'react-apollo';

const RsvpContainer: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> =>
  data.loading ? <Loading /> : <Generic body={data.rsvp.body} />;

const Rsvp: React.ComponentClass = graphql(getRsvp)(RsvpContainer);

export { Rsvp };

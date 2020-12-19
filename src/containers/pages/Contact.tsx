/**
 * Contact Container
 * returns the Loading indicator component while the GraphQL is pending and
 * when loaded, it returns the Generic component
 */
import { Generic } from 'Components/pages/Generic';
import { Loading } from 'Components/shared/Loading';
import * as getContact from 'Gql/getContact';
import * as React from 'react';
import { graphql } from 'react-apollo';

const ContactContainer: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> =>
  data.loading ? <Loading /> : <Generic body={data.getContact.body} />;

const Contact: React.ComponentClass = graphql(getContact)(ContactContainer);

export { Contact };

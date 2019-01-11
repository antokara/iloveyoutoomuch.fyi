/**
 * Contact Container
 * returns the Loading indicator component while the GraphQL is pending and
 * when loaded, it returns the Contact component
 */
import { Contact as ContactComponent } from 'Components/pages/Contact';
import { Loading } from 'Components/shared/Loading';
import * as getContact from 'Gql/getContact';
import * as React from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router';

const ContactContainer: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> =>
  data.loading ? <Loading /> : <ContactComponent body={data.contact.body} />;

const Contact: React.ComponentClass = graphql(getContact)(
  withRouter(ContactContainer)
);

export { Contact };

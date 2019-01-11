/**
 * Information Container
 * returns the Loading indicator component while the GraphQL is pending and
 * when loaded, it returns the Information component
 */
import { Generic } from 'Components/pages/Generic';
import { Loading } from 'Components/shared/Loading';
import * as getInformation from 'Gql/getInformation';
import * as React from 'react';
import { graphql } from 'react-apollo';

const InformationContainer: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> =>
  data.loading ? <Loading /> : <Generic body={data.information.body} />;

const Information: React.ComponentClass = graphql(getInformation)(
  InformationContainer
);

export { Information };

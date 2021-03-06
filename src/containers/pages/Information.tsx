/**
 * Information Container
 * returns the Loading indicator component while the GraphQL is pending and
 * when loaded, it returns the Generic component
 */
import { Generic } from 'Components/pages/Generic';
import { Loading } from 'Components/shared/Loading';
import * as getInformation from 'Gql/getInformation';
import * as React from 'react';
import { graphql } from 'react-apollo';

const InformationContainer: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> =>
  data.loading ? <Loading /> : <Generic body={data.getInformation.body} />;

const Information: React.ComponentClass = graphql(getInformation)(
  InformationContainer
);

export { Information };

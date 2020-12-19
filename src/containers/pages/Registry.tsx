/**
 * Registry Container
 * returns the Loading indicator component while the GraphQL is pending and
 * when loaded, it returns the Generic component
 */
import { Generic } from 'Components/pages/Generic';
import { Loading } from 'Components/shared/Loading';
import * as getRegistry from 'Gql/getRegistry';
import * as React from 'react';
import { graphql } from 'react-apollo';

const RegistryContainer: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> =>
  data.loading ? <Loading /> : <Generic body={data.getRegistry.body} />;

const Registry: React.ComponentClass = graphql(getRegistry)(RegistryContainer);

export { Registry };

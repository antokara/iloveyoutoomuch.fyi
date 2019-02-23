/**
 * Home Container
 * returns the Loading indicator component while the GraphQL is pending and
 * when loaded, it returns the Home component
 */
import { Home as Component } from 'Components/pages/home/Home';
import { Loading } from 'Components/shared/Loading';
import * as getHome from 'Gql/getHome';
import * as React from 'react';
import { graphql } from 'react-apollo';

const HomeContainer: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> =>
  data.loading ? (
    <Loading />
  ) : (
    <Component
      hashtag1={data.home.hashtag1}
      hashtag2={data.home.hashtag2}
      eventDateTime={data.theme.eventDateTime}
    />
  );

const Home: React.ComponentClass = graphql(getHome)(HomeContainer);

export { Home };

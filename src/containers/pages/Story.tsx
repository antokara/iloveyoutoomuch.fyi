/**
 * Our Story Container
 * returns the Loading indicator component while the GraphQL is pending and
 * when loaded, it returns the Generic component
 */
import { Generic } from 'Components/pages/Generic';
import { Loading } from 'Components/shared/Loading';
import * as getStory from 'Gql/getStory';
import * as React from 'react';
import { graphql } from 'react-apollo';

const StoryContainer: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> =>
  data.loading ? <Loading /> : <Generic body={data.story.body} />;

const Story: React.ComponentClass = graphql(getStory)(StoryContainer);

export { Story };

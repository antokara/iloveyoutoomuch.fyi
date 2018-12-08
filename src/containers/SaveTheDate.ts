/**
 * Save The Date Container
 */
import { SaveTheDate as SaveTheDateComponent } from 'Components/SaveTheDate';
import * as getSaveTheDate from 'Gql/getSaveTheDate';
import { graphql } from 'react-apollo';

const SaveTheDate: React.ComponentClass = graphql(getSaveTheDate)(
  SaveTheDateComponent
);

export { SaveTheDate };

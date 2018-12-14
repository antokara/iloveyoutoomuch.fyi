/**
 * Save The Date Component
 */
import { Loaded } from 'Components/saveTheDate/Loaded';
import { Loading } from 'Components/saveTheDate/Loading';
import * as React from 'react';
import { graphql } from 'react-apollo';

const SaveTheDate: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> => (
  <React.Fragment>
    {data.loading ? <Loading /> : <Loaded data={data.saveTheDate} />}
  </React.Fragment>
);

export { SaveTheDate };

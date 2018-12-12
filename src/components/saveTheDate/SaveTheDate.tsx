/**
 * Save The Date Component
 */
import { Loaded } from 'Components/saveTheDate/Loaded';
import { Loading } from 'Components/saveTheDate/Loading';
import * as React from 'react';
import { graphql } from 'react-apollo';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  color: blue;
`;

const SaveTheDate: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> => (
  <Wrapper>
    {data.loading ? <Loading /> : <Loaded data={data.saveTheDate} />}
  </Wrapper>
);

export { SaveTheDate };

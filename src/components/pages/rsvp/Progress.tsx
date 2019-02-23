/**
 * Propress Component
 * shows the progress indicator while the RSVP api is pending
 */
import { CircularProgress } from '@material-ui/core';
import * as React from 'react';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  text-align: center;
`;

const Progress: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => (
  <Wrapper>
    <CircularProgress />
  </Wrapper>
);

export { Progress };

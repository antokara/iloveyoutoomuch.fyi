/**
 * Save The Date Loading Component
 */
import { CircularProgress } from '@material-ui/core';
import * as React from 'react';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => (
  <Wrapper>
    <CircularProgress />
  </Wrapper>
);

export { Loading };

/**
 * Save The Date Loading Component
 */
import * as React from 'react';
import { graphql } from 'react-apollo';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  color: blue;
`;

const Loading: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => <Wrapper>Loading...</Wrapper>;

export { Loading };

/**
 * Home page Component
 */
import * as React from 'react';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  color: green;
  font-family: Rochester, sans-serif;
`;

const Home: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => <Wrapper>Please check back soon!</Wrapper>;

export { Home };
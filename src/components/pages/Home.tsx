/**
 * Home page Component
 */
import { PageWrapper } from 'Components/layouts/themed/PageWrapper';
import * as React from 'react';
// import styledComponents from 'styled-components';

// const Wrapper: React.FunctionComponent = styledComponents.div`
//   color: green;
//   font-family: Rochester, sans-serif;
// `;

const Home: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => <PageWrapper>Please check back soon!</PageWrapper>;

export { Home };

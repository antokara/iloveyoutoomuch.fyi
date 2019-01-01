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

const Gallery: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => <PageWrapper>Gallery</PageWrapper>;

export { Gallery };

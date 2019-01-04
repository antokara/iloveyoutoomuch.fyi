/**
 * Not Found Component
 * for 404 http code
 */
import { PageWrapper } from 'Components/layouts/themed/PageWrapper';
import * as React from 'react';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  color: red;
  text-align: center;
`;

const NotFound: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => (
  <PageWrapper>
    <Wrapper>Please check back soon!</Wrapper>
  </PageWrapper>
);

export { NotFound };

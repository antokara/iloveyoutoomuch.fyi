/**
 * Not Found Component
 * for 404 http code
 */
import * as React from 'react';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  color: red;
`;

const NotFound: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => <Wrapper>Page Not Found!</Wrapper>;

export { NotFound };

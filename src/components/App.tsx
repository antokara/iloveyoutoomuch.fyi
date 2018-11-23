/**
 * Application Component
 * the main component of the whole application
 */
import * as React from 'react';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  color: red;
`;

const App: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => <Wrapper>Hello World plus!</Wrapper>;

export { App };

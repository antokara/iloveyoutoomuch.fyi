/**
 * Home page Component
 */
import * as React from 'react';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  color: lime;
`;

const Contact: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => <Wrapper>Contact</Wrapper>;

export { Contact };

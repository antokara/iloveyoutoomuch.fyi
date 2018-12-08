/**
 * Save The Date Component
 */
import * as React from 'react';
import { graphql } from 'react-apollo';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  color: blue;
`;

const SaveTheDate: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => <Wrapper>Save The Date</Wrapper>;

export { SaveTheDate };

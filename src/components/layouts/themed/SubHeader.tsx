import * as React from 'react';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  text-align: center;
  margin-top: 1vh;
  font-size: 1em;

  @media (min-width: 1024px) {
    font-size: 1.25em;
  }

  @media (min-width: 1440px) {
    font-size: 1.5em;
  }
`;

const Text: React.FunctionComponent = styledComponents.div`
  color: white;
  font-family: Merienda, sans-serif;
  text-shadow: 1px 1px 2px #000;
  background: rgba(0, 0, 0, 0.2);
  padding: 0.5em 1em;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  display: inline-block;
  letter-spacing: 0.25em;
`;

const SubHeader: React.FunctionComponent = ({
  children
}): React.ReactElement<React.ReactNode> => (
  <Wrapper>
    <Text>{children}</Text>
  </Wrapper>
);

export { SubHeader };

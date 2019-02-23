import { PALETTE } from 'Constants/PALETTE';
import { ROUTES } from 'Constants/ROUTES';
import * as React from 'react';
import { Link } from 'react-router-dom';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  font-family: Rochester, sans-serif;
  text-align: center;
  margin-top: 2vh;
  font-size: 2em;

  @media (min-width: 1024px) {
    margin-top: 4vh;
    font-size: 3em;
  }

  @media (min-width: 1440px) {
    margin-top: 6vh;
    font-size: 4em;
  }
`;

const Text: React.FunctionComponent = styledComponents(Link)`
  color: ${PALETTE.PINK};
  text-shadow: 1px 1px 2px #000;
  text-decoration: none;
`;

const Header: React.FunctionComponent = ({
  children
}): React.ReactElement<React.ReactNode> => (
  <Wrapper>
    <Text to={ROUTES.HOME.PATH}>{children}</Text>
  </Wrapper>
);

export { Header };

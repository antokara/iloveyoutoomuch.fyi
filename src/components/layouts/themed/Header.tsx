import { PALETTE } from 'Constants/PALETTE';
import styledComponents from 'styled-components';

const Header: React.FunctionComponent = styledComponents.div`
  color: ${PALETTE.PINK};
  font-family: Rochester, sans-serif;
  font-size: 2em;
  text-shadow: 1px 1px 2px #000;
  text-align: center;
  margin-top: 2vh;

  @media (min-width: 1024px) {
    margin-top: 4vh;
    font-size: 3em;
  }

  @media (min-width: 1440px) {
    margin-top: 6vh;
    font-size: 4em;
  }
`;

export { Header };

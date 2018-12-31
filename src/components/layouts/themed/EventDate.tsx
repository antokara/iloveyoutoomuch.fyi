import { PALETTE } from 'Constants/PALETTE';
import styledComponents from 'styled-components';

const EventDate: React.FunctionComponent = styledComponents.div`
  color: ${PALETTE.DARK_RED};
  font-family: Caladea, sans-serif;
  font-size: 1.5em;
  text-shadow: 1px 1px 20px #fff, 1px 1px 10px #fff, 1px 1px 5px #fff, 1px 1px 2px #fff;
  text-align: right;
  margin: 0.3em auto;
  width: 18em;
  text-transform: uppercase;
`;

export { EventDate };

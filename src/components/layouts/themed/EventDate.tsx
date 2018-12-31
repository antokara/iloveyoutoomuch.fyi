import { PALETTE } from 'Constants/PALETTE';
import styledComponents from 'styled-components';

const EventDate: React.FunctionComponent = styledComponents.div`
  color: ${PALETTE.DARK_RED};
  font-family: Rochester, sans-serif;
  font-size: 4em;
  text-shadow: 1px 1px 2px #000;
  text-align: center;
  margin-top: 1vh;
`;

export { EventDate };

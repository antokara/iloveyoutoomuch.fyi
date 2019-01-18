import { PALETTE } from 'Constants/PALETTE';
import { ROUTES } from 'Constants/ROUTES';
import styledComponents from 'styled-components';

/**
 * add shadow to help distinguish from them background, depending the current location.
 * in general, add it only in the home page
 *
 * @param path router location
 */
const addShadow: (path: string) => string = (path: string): string => {
  if (path === ROUTES.HOME.PATH) {
    return 'text-shadow: 1px 1px 2px #000, 0px 0px 2px #000;';
  }

  return 'text-shadow: 1px 1px 2px #000;';
};

const EventDate: React.FunctionComponent = styledComponents.div`
  transition: all 0.4s;
  color: ${PALETTE.PINK};
  font-size: 0.9em;
  font-family: Merienda, sans-serif;
  font-weight: bold;
  text-align: right;
  text-transform: uppercase;
  ${p => addShadow(p.path)};
`;

export { EventDate };

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
    return 'text-shadow: 0px 0px 20px #fff, 0px 0px 10px #fff, 0px 0px 5px #fff, 0px 0px 2px #fff;';
  }

  return '';
};

const EventDate: React.FunctionComponent = styledComponents.div`
  transition: all 0.4s;
  color: ${PALETTE.DARK_RED};
  font-family: Caladea, sans-serif;
  font-size: 0.9em;
  text-align: right;
  text-transform: uppercase;
  ${p => addShadow(p.path)};
`;

export { EventDate };

import { ROUTES } from 'Constants/ROUTES';
import styledComponents from 'styled-components';

/**
 * add filter to darken the background, depending the current location.
 * in general, add it to all pages except for the home page
 *
 * @param path router location
 */
const addFilter: (path: string) => string = (path: string): string => {
  if (path !== ROUTES.HOME.PATH) {
    return 'filter: blur(4px) grayscale(0.5);opacity: 0.4;';
  }

  return '';
};

const Background: React.FunctionComponent = styledComponents.div`
  transition: all 0.4s;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${({ img }): string => img});
  background-size: cover;
  background-position: center 60%;
  z-index: -1;
  ${p => addFilter(p.location.pathname)}
`;

export { Background };

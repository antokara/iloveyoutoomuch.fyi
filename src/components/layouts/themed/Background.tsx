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
    return 'filter: blur(4px) grayscale(0.5);opacity: 0.25;';
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


  @media (orientation: portrait) and (max-width: 340px) and (max-height: 600px) {
    background-image: url(${({ img }): string =>
      `${img}&fp-z=1.5&max-w=450&max-height=650`});
  }
  @media (orientation: portrait) and (min-width: 341px) and (max-width: 400px) and (max-height: 700px) {
    background-image: url(${({ img }): string =>
      `${img}&fp-z=1.5&max-w=500&max-height=750`});
  }
  @media (orientation: portrait) and (min-width: 341px) and (max-width: 400px) and (max-height: 1000px) {
    background-image: url(${({ img }): string =>
      `${img}&fp-z=1.5&max-w=500&max-height=1000`});
  }
  @media (orientation: portrait) and (min-width: 401px) and (max-width: 450px) and (max-height: 750px) {
    background-image: url(${({ img }): string =>
      `${img}&fp-z=1.5&max-w=550&max-height=800`});
  }
  @media (orientation: portrait) and (min-width: 401px) and (max-width: 450px) and (max-height: 850px) {
    background-image: url(${({ img }): string =>
      `${img}&fp-z=1.5&max-w=550&max-height=950`});
  }
  @media (orientation: portrait) and (min-width: 451px) and (max-width: 800px) and (max-height: 1100px) {
    background-image: url(${({ img }): string =>
      `${img}&fp-z=1.25&max-w=900&max-height=1200`});
  }
  @media (orientation: portrait) and (min-width: 801px) and (max-width: 1200px) and (max-height: 1400px) {
    background-image: url(${({ img }): string =>
      `${img}&fp-z=1.15&max-w=1300&max-height=2200`});
  }
  @media (orientation: portrait) and (min-width: 1201px) and (min-height: 2001px) {
    background-image: url(${({ img }): string =>
      `${img}&fp-z=1.15&max-w=1500&max-height=3000`});
  }


  @media (orientation: landscape) and (max-width: 600px) and (max-height: 340px) {
    background-image: url(${({ img }): string =>
      `${img}&fp-z=1&max-w=650&max-height=450`});
  }
  @media (orientation: landscape) and (max-width: 700px) and (min-height: 341px) and (max-height: 400px) {
    background-image: url(${({ img }): string =>
      `${img}&fp-z=1&max-w=750&max-height=500`});
  }
  @media (orientation: landscape) and (max-width: 750px) and (min-height: 401px) and (max-height: 450px) {
    background-image: url(${({ img }): string =>
      `${img}&fp-z=1&max-w=800&max-height=550`});
  }
  @media (orientation: landscape) and (max-width: 1000px) and (min-height: 451px) and (max-height: 400px) {
    background-image: url(${({ img }): string =>
      `${img}&fp-z=1&max-w=1000&max-height=500`});
  }
  @media (orientation: landscape) and (max-width: 850px) and (min-height: 401px) and (max-height: 450px) {
    background-image: url(${({ img }): string =>
      `${img}&fp-z=1&max-w=950&max-height=550`});
  }
  @media (orientation: landscape) and (max-width: 110px) and (min-height: 451px) and (max-height: 800px) {
    background-image: url(${({ img }): string =>
      `${img}&fp-z=1&max-w=1200&max-height=900`});
  }
  @media (orientation: landscape) and (max-width: 1400px) and (min-height: 801px) and (max-height: 1200px) {
    background-image: url(${({ img }): string =>
      `${img}&fp-z=1&max-w=1500&max-height=1300`});
  }
  @media (orientation: landscape) and (max-width: 2000px) and (min-height: 1201px) and (max-height: 1200px) {
    background-image: url(${({ img }): string =>
      `${img}&fp-z=1&max-w=2200&max-height=1500`});
  }
  @media (orientation: landscape) and (min-width: 2001px) and (min-height: 1201px) {
    background-image: url(${({ img }): string =>
      `${img}&fp-z=1&max-w=3000&max-height=2000`});
  }
`;

export { Background };

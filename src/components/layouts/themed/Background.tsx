import styledComponents from 'styled-components';

const Background: React.FunctionComponent = styledComponents.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ img }): string => img});
  background-size: cover;
  background-position: center 60%;
  z-index: -1;
`;

export { Background };

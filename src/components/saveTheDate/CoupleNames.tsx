import { slideIn } from 'Components/saveTheDate/slideIn';
import styledComponents, { keyframes } from 'styled-components';

const CoupleNames: React.FunctionComponent = styledComponents.div`
  position: absolute;
  left: 1em;
  top: 1em;
  color: #fff;
  font-family: Rochester, sans-serif;
  font-size: 4em;
  text-shadow: 1px 1px 4px #000;
  animation: ${slideIn} 1s linear forwards;

  @media (max-width: 1400px) {
    font-size: 3.5em;
  }

  @media (max-width: 1300px) {
    font-size: 3em;
  }

  @media (max-width: 500px) {
    font-size: 2em;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    font-size: 2.5em;
  }

  @media (orientation: landscape) and (max-height: 600px) and (max-width: 850px) {
    font-size: 2em;
  }
`;

export { CoupleNames };

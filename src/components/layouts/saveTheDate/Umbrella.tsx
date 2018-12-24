import { GridCell } from 'Components/saveTheDate/GridCell';
import { fadeIn } from 'Components/saveTheDate/keyframes/fadeIn';
import styledComponents from 'styled-components';

const Umbrella: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: umbrella;
  background-position-x: 50%;
  animation: ${fadeIn} 1s linear forwards;
  animation-delay: 0.3s;

  @media (orientation: landscape) and (max-width: 1420px) {
    background-image: url(${p => p.img}&h=450);
  }

  @media (orientation: landscape) and (max-height: 600px) {
    background-image: url(${p => p.img}&h=360);
  }

  @media (orientation: portrait) and (max-width: 768px) {
    background-image: url(${p => p.img}&h=450);
  }

  @media (orientation: portrait) and (max-width: 500px) {
    background-image: url(${p => p.img}&h=250);
  }
`;

export { Umbrella };

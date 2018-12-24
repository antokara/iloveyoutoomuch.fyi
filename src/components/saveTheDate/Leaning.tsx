import { GridCell } from 'Components/saveTheDate/GridCell';
import { fadeIn } from 'Components/saveTheDate/keyframes/fadeIn';
import styledComponents from 'styled-components';

const Leaning: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: leaning;
  background-position-x: 70%;
  animation: ${fadeIn} 1s linear forwards;
  animation-delay: 0.6s;

  @media (orientation: portrait) and (max-width: 1024px) {
    background-image: url(${p => p.img}&h=550);
  }

  @media (orientation: landscape) and (max-width: 1420px) {
    background-image: url(${p => p.img}&h=210);
  }

  @media (orientation: landscape) and (max-height: 600px) {
    background-image: url(${p => p.img}&h=360);
  }

  @media (orientation: portrait) and (max-width: 768px) {
    background-image: url(${p => p.img}&h=450);
  }

  @media (orientation: portrait) and (max-width: 500px) {
    background-image: url(${p => p.img}&h=200);
  }
`;

export { Leaning };

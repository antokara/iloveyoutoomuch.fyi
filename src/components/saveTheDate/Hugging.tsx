import { fadeIn } from 'Components/saveTheDate/fadeIn';
import { GridCell } from 'Components/saveTheDate/GridCell';
import styledComponents from 'styled-components';

const Hugging: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: hugging;
  background-position-x: 50%;
  background-position-y: 50%;
  animation: ${fadeIn} 1s linear forwards;
  animation-delay: 0.6s;

  @media (max-width: 1600px) {
    background-position-y: 60%;
  }

  @media (orientation: landscape) and (max-width: 1420px) {
    background-image: url(${p => p.img}&w=280);
  }

  @media (orientation: landscape) and (max-height: 600px) {
    background-image: url(${p => p.img}&h=360);
  }

  @media (orientation: portrait) and (max-width: 1024px) {
    background-image: url(${p => p.img}&h=550);
  }

  @media (orientation: portrait) and (max-width: 768px) {
    background-image: url(${p => p.img}&h=450);
  }

  @media (orientation: portrait) and (max-width: 500px) {
    background-image: url(${p => p.img}&h=250);
  }
`;

export { Hugging };

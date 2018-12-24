import { fadeIn } from 'Components/saveTheDate/fadeIn';
import { GridCell } from 'Components/saveTheDate/GridCell';
import styledComponents from 'styled-components';

const Laughing: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: laughing;
  animation: ${fadeIn} 1s linear forwards;
  animation-delay: 0.6s;

  @media (orientation: landscape) and (max-width: 1420px) {
    background-image: url(${p => p.img}&h=250);
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

export { Laughing };

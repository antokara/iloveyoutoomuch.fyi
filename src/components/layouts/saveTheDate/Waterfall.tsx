import { GridCell } from 'Components/layouts/saveTheDate/GridCell';
import { fadeIn } from 'Components/layouts/saveTheDate/keyframes/fadeIn';
import styledComponents from 'styled-components';

const Waterfall: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: waterfall;
  background-position-x: 100%;
  animation: ${fadeIn} 1s linear forwards;

  @media (orientation: landscape) and (max-width: 1420px) {
    background-image: url(${p => p.img}&h=650);
  }

  @media (orientation: landscape) and (max-width: 1024px) {
    background-image: url(${p => p.img}&w=550);
  }

  @media (orientation: landscape) and (max-width: 1024px) {
    background-image: url(${p => p.img}&h=550);
  }

  @media (orientation: portrait) and (max-width: 1024px) {
    background-image: url(${p => p.img}&w=1024);
  }

  @media (orientation: portrait) and (max-width: 768px) {
    background-image: url(${p => p.img}&w=770);
  }

  @media (orientation: portrait) and (max-width: 500px) {
    background-image: url(${p => p.img}&w=1000);
  }
`;
export { Waterfall };

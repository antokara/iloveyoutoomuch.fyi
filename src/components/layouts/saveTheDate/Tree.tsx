import { GridCell } from 'Components/layouts/saveTheDate/GridCell';
import { fadeIn } from 'Components/layouts/saveTheDate/keyframes/fadeIn';
import styledComponents from 'styled-components';

const Tree: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: tree;
  animation: ${fadeIn} 1s linear forwards;
  animation-delay: 0.6s;

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
    background-image: url(${p => p.img}&h=350);
  }
`;

export { Tree };

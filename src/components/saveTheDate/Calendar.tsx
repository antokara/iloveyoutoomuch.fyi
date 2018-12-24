import { fadeIn } from 'Components/saveTheDate/fadeIn';
import { GridCell } from 'Components/saveTheDate/GridCell';
import styledComponents from 'styled-components';

const Calendar: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: calendar;
  background: #597067;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.3em;
  animation: ${fadeIn} 1s linear forwards;
  animation-delay: 0.9s;

  @media (orientation: landscape) and (max-width: 1600px) {
    font-size: 0.8em;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    font-size: 0.65em;
  }

  @media (orientation: portrait) and (max-width: 1000px) {
    font-size: 0.9em;
  }

  @media (orientation: portrait) and (max-width: 500px) {
    font-size: 0.6em;
  }

  @media (orientation: portrait) and (max-width: 400px) {
    font-size: 0.5em;
  }
`;

export { Calendar };

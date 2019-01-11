/**
 * Mark Down Component Component
 * which styles the HTML Elements generated by the "react-markdown" component
 */
import { PALETTE } from 'Constants/PALETTE';
import styledComponents from 'styled-components';

const MarkdownWrapper: React.FunctionComponent = styledComponents.div`
  text-align: center;
  font-family: Merienda, sans-serif;
  color: #fff;
  font-size: 0.75em;

  h1 {
    font-size: 1.75em;
    border-bottom: 1px solid #ffffff5c;
    display: inline-block;
    padding: 0.1em 0.5em;
  }

  h2 {
    font-size: 1.5em;
    padding: 0.1em 0.5em;
  }

  h1,
  h2,
  h3 {
    color: ${PALETTE.LIGHT_GREEN};
  }

  a {
    color: ${PALETTE.LIGHT_RED};
    text-decoration: none;
  }

  p {
    line-height: 1.75em;
  }

  @media (min-width: 768px) {
    font-size: 0.8em;
  }

  @media (min-width: 1024px) {
    font-size: 1em;
  }
`;

export { MarkdownWrapper };
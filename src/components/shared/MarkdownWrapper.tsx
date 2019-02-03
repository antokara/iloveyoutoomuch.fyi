/**
 * Mark Down Component Component
 * which styles the HTML Elements generated by the "react-markdown" component
 */
import { PALETTE } from 'Constants/PALETTE';
import styledComponents from 'styled-components';

const MarkdownWrapper: React.FunctionComponent = styledComponents.div`
  font-family: Merienda, sans-serif;
  font-size: 0.75em;

  h1 {
    font-size: 2.9em;
    font-weight: normal;
    padding: 0;
    margin: 0;
  }

  h2 {
    font-size: 1.5em;
    padding: 0.1em 0.5em;
  }

  h3 {
    margin: 1.5em auto 0.5em auto;
  }

  h1,
  h2,
  h3 {
    font-family: Rochester, sans-serif;
    color: ${PALETTE.DARK_CYAN};
    display: block;
    text-align: right;
    float: right;
    position: relative;
    z-index: 1;

    img {
      display: block;
      border: 5px solid lightgray;
      margin: -0.25em 0 0.25em 0.25em;
      z-index: -1;
      position: relative;
    }
  }

  a {
    color: ${PALETTE.DARK_RED};
    text-decoration: none;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.25);

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    line-height: 1.75em;

    &:nth-of-type(1) {
      padding-top: 11em;
    }
  }

  @media (min-width: 768px) {
    font-size: 0.8em;
  }

  @media (min-width: 1024px) {
    font-size: 1em;
  }
`;

export { MarkdownWrapper };

import styledComponents from 'styled-components';

const PageWrapper: React.FunctionComponent = styledComponents.div`
  max-width: 30em;
  margin: 2em auto;
  padding: 0 0.5em;
  color: white;

  @media (orientation: landscape) and (min-width: 1024px) {
    max-width: 60em;
  }
`;

export { PageWrapper };

import styledComponents from 'styled-components';

const PageWrapper: React.FunctionComponent = styledComponents.div`
  max-width: 30em;
  margin: 1em auto;
  color: white;

  @media (min-width: 1024px) {
    max-width: 60em;
    margin: 2em auto;
  }
`;

export { PageWrapper };

import styledComponents from 'styled-components';

const Separator: React.FunctionComponent = styledComponents.hr`
  color: #fff;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  width: 80%;
  margin: 1em auto;
`;

export { Separator };

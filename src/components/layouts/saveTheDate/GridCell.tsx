import styledComponents from 'styled-components';

const GridCell: React.FunctionComponent = styledComponents.div`
  position: relative;
  overflow: hidden;
  background-image: url(${({ img }): string => img});
  background-size: cover;
  background-position-y: 100%;
  opacity: 0;
`;

export { GridCell };

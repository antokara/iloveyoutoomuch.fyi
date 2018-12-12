/**
 * Save The Date Component
 */
import { imgUrl } from 'Helpers/misc';
import * as React from 'react';
import { graphql } from 'react-apollo';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  color: blue;
`;

const Loaded: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> => (
  <Wrapper>
    <img
      src={imgUrl(data.photos[0].photo.path, '?fit=clip&w=900')}
      alt={data.photos[0].photo.title}
    />
    {data.coupleNames}
  </Wrapper>
);

export { Loaded };

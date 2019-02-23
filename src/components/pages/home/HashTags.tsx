/**
 * Hash Tags Component
 */
import { Grid } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  color: white;
  font-family: Merienda, sans-serif;
  font-size: 1em;
  text-align: center;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.9));
  opacity: 0.75;
`;

const HashTags: React.FunctionComponent = ({
  hashtag1,
  hashtag2
}): React.ReactElement<React.ReactNode> => (
  <Wrapper>
    <Grid container>
      <Grid item xs={12} md={6}>
        {hashtag1}
      </Grid>
      <Grid item xs={12} md={6}>
        {hashtag2}
      </Grid>
    </Grid>
  </Wrapper>
);

HashTags.propTypes = {
  hashtag1: PropTypes.string.isRequired,
  hashtag2: PropTypes.string.isRequired
};

export { HashTags };

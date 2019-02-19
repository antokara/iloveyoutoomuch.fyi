/**
 * Home page Component
 */
import { PageWrapper } from 'Components/layouts/themed/PageWrapper';
import { CountDown } from 'Components/pages/home/CountDown';
import { HashTags } from 'Components/pages/home/HashTags';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import styledComponents from 'styled-components';

const Footer: React.FunctionComponent = styledComponents.div`
  position: absolute;
  bottom: 1em;
  left: 0;
  width: 100%;
`;

const Home: React.FunctionComponent = ({
  hashtag1,
  hashtag2,
  eventDateTime
}): React.ReactElement<React.ReactNode> => (
  <React.Fragment>
    <PageWrapper />
    <Footer>
      <CountDown eventDateTime={eventDateTime} />
      <HashTags hashtag1={hashtag1} hashtag2={hashtag2} />
    </Footer>
  </React.Fragment>
);

Home.propTypes = {
  hashtag1: PropTypes.string.isRequired,
  hashtag2: PropTypes.string.isRequired,
  eventDateTime: PropTypes.string.isRequired
};

export { Home };

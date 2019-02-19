/**
 * Count Down Component
 */
import { DateTime } from 'luxon';
import { default as pluralize } from 'pluralize';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  color: white;
  font-family: Merienda, sans-serif;
  font-size: 1.5em;
  text-align: center;
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.9));
  opacity: 0.95;
  margin-bottom: 0.25em;

  @media (max-width: 400px) {
    font-size: 1em;
  }

  @media (min-width: 401px) and (max-width: 600px) {
    font-size: 1.2em;
  }
`;

const CountDown: React.FunctionComponent = ({
  eventDateTime
}): React.ReactElement<React.ReactNode> => {
  const TimeLeft = DateTime.fromISO(eventDateTime)
    .setZone('Europe/Athens')
    .diffNow(['months', 'days', 'hours'])
    .toObject();
  return (
    <Wrapper>
      {pluralize('months', TimeLeft.months, true)}
      {', '}
      {pluralize('days', Math.round(TimeLeft.days), true)}
      {', '}
      {pluralize('hours', Math.round(TimeLeft.hours), true)}
    </Wrapper>
  );
};

CountDown.propTypes = {
  eventDateTime: PropTypes.string.isRequired
};

export { CountDown };

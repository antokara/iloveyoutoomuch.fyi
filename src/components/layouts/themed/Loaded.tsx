/**
 * Themed Layout / Loaded Component
 */
import { Routes } from 'Components/layouts/themed/Routes';
import { DateTime } from 'luxon';
import * as React from 'react';

const Loaded: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> => (
  <div>
    {data.header}
    {data.subHeader}
    {DateTime.fromISO(data.eventDateTime)
      .setZone('Europe/Athens')
      .toLocaleString(DateTime.DATE_FULL)}
    <Routes />
  </div>
);

export { Loaded };

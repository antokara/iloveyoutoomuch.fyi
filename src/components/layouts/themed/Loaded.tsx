/**
 * Themed Layout / Loaded Component
 */
import { DateTime } from 'luxon';
import * as React from 'react';

const Loaded: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> => (
  <div>
    Loaded Home
    {data.header}
    {data.subHeader}
    {DateTime.fromISO(data.eventDateTime)
      .setZone('Europe/Athens')
      .toLocaleString(DateTime.DATE_FULL)}
  </div>
);

export { Loaded };

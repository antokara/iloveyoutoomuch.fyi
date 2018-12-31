/**
 * Themed Layout / Loaded Component
 */
import { Background } from 'Components/layouts/themed/Background';
import { EventDate } from 'Components/layouts/themed/EventDate';
import { Header } from 'Components/layouts/themed/Header';
import { Routes } from 'Components/layouts/themed/Routes';
import { SubHeader } from 'Components/layouts/themed/SubHeader';
import { imgUrl } from 'Helpers/misc';
import { DateTime } from 'luxon';
import * as React from 'react';

const Loaded: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> => (
  <div>
    <Background img={imgUrl(data.background.path, '?fit=max&w=1920')} />
    <Header>{data.header}</Header>
    <SubHeader>{data.subHeader}</SubHeader>
    <EventDate>
      {DateTime.fromISO(data.eventDateTime)
        .setZone('Europe/Athens')
        .toLocaleString(DateTime.DATE_FULL)}
    </EventDate>
    <Routes />
  </div>
);

export { Loaded };

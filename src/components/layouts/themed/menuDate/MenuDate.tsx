import { Grid } from '@material-ui/core';
import { EventDate } from 'Components/layouts/themed/menuDate/EventDate';
import { Menu } from 'Components/layouts/themed/menuDate/Menu';
import { DateTime } from 'luxon';
import * as React from 'react';
import styledComponents from 'styled-components';

const GridContainer: React.FunctionComponent = styledComponents(Grid)`
  font-size: 1em;
  margin: 0.3em auto;
  max-width: 18em;

  @media (orientation: landscape) and (min-width: 1024px) {
    font-size: 1.25em;
  }

  @media (orientation: landscape) and (min-width: 1440px) {
    font-size: 1.5em;
  }
`;

const MenuDate: React.FunctionComponent = ({
  eventDateTime,
  menu,
  location
}): React.ReactElement<React.ReactNode> => (
  <GridContainer container justify="space-between" alignItems="center">
    <Grid item>
      <Menu items={menu} />
    </Grid>
    <Grid item>
      <EventDate path={location.pathname}>
        {DateTime.fromISO(eventDateTime)
          .setZone('Europe/Athens')
          .toLocaleString(DateTime.DATE_FULL)}
      </EventDate>
    </Grid>
  </GridContainer>
);

export { MenuDate };

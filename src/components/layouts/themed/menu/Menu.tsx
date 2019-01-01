import { Button, Grid } from '@material-ui/core';
import { MenuRounded } from '@material-ui/icons';
import { EventDate } from 'Components/layouts/themed/menu/EventDate';
import { DateTime } from 'luxon';
import * as React from 'react';
import styledComponents from 'styled-components';

const GridContainer: React.FunctionComponent = styledComponents(Grid)`
  font-size: 1.5em;
  margin: 0.3em auto;
  max-width: 18em;
`;

const Icon: React.FunctionComponent = styledComponents(MenuRounded)`
  margin-right: ${p => p.theme.spacing.unit}px;
`;

const Label: React.FunctionComponent = styledComponents.span`
  font-weight: bold;
  font-family: Caladea, sans-serif;
  text-shadow: 1px 1px 2px #000;
`;

const Menu: React.FunctionComponent = ({
  eventDateTime
}): React.ReactElement<React.ReactNode> => (
  <GridContainer container justify="space-between" alignItems="center">
    <Grid item>
      <Button color="primary">
        <Icon />
        <Label>Menu</Label>
      </Button>
    </Grid>
    <Grid item>
      <EventDate>
        {DateTime.fromISO(eventDateTime)
          .setZone('Europe/Athens')
          .toLocaleString(DateTime.DATE_FULL)}
      </EventDate>
    </Grid>
  </GridContainer>
);

export { Menu };

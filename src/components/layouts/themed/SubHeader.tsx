import * as React from 'react';
import styledComponents from 'styled-components';
import { DateTime } from 'luxon';
import { EventDate } from 'Components/layouts/themed/EventDate';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/MenuRounded';
import Button from '@material-ui/core/Button';

const Wrapper: React.FunctionComponent = styledComponents.div`
  text-align: center;
  margin-top: 1vh;
  font-size: 1.5em;
`;

const Text: React.FunctionComponent = styledComponents.div`
  color: white;
  font-family: Caladea, sans-serif;
  text-shadow: 1px 1px 2px #000;
  background: rgba(0, 0, 0, 0.2);
  padding: 0.5em 1em;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  display: inline-block;
  letter-spacing: 0.25em;
`;

const GridContainer: React.FunctionComponent = styledComponents(Grid)`
  margin: 0.3em auto;
  max-width: 18em;
`;

const Icon: React.FunctionComponent = styledComponents(MenuIcon)`
  margin-right: ${p => p.theme.spacing.unit}px;
`;

const Label: React.FunctionComponent = styledComponents.span`
  font-weight: bold;
  font-family: Caladea, sans-serif;
`;

const SubHeader: React.FunctionComponent = ({
  children,
  eventDateTime
}): React.ReactElement<React.ReactNode> => (
  <Wrapper>
    <Text>{children}</Text>
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
  </Wrapper>
);

export { SubHeader };

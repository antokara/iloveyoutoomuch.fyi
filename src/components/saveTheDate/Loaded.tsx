/**
 * Save The Date Component
 */
import { imgUrl } from 'Helpers/misc';
import * as React from 'react';
import { graphql } from 'react-apollo';
import styledComponents from 'styled-components';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import GridListTile from '@material-ui/core/GridListTile';
import { DateTime } from 'luxon';

const Wrapper: React.FunctionComponent = styledComponents.div`
  overflow: hidden;
`;

const CoupleNames: React.FunctionComponent = styledComponents.div`
  position: absolute;
  left: 3rem;
  top: 3rem;
  color: #fff;
  font-family: Rochester, sans-serif;
  font-size: 4rem;
  text-shadow: 1px 1px 4px #000;
`;

const Calendar: React.FunctionComponent = styledComponents.div`
  background: #597067;
  color: #fff;
  height: 27vh;
  text-align: center;
  padding: 1rem;
`;

const Title: React.FunctionComponent = styledComponents.div`
  font-family: Rochester, sans-serif;
  font-size: 2.5rem;
  letter-spacing: 0.5rem;
  opacity: 0.8;
`;

const Date: React.FunctionComponent = styledComponents.div`
  font-family: Caladea, sans-serif;
  font-size: 2rem;
`;

const Location: React.FunctionComponent = styledComponents.div`
  font-family: Caladea, sans-serif;
  font-size: 2rem;
`;

const Separator: React.FunctionComponent = styledComponents.hr`
  color: #fff;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  width: 80%;
  margin: 1rem auto;
`;

const cellHeight: number = () => window.innerHeight / 5;

const Loaded: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> => (
  <Wrapper>
    <GridList cellHeight={cellHeight()} spacing={3}>
      <GridListTile key={data.photos[0]._id} cols={1.2} rows={3}>
        <img
          src={imgUrl(data.photos[0].photo.path, '?fit=clip&w=1200')}
          alt={data.photos[0].photo.title}
        />
        <CoupleNames>{data.coupleNames}</CoupleNames>
      </GridListTile>
      <GridListTile key={data.photos[1]._id} cols={0.4} rows={3}>
        <img
          src={imgUrl(data.photos[1].photo.path, '?fit=clip&h=500')}
          alt={data.photos[1].photo.title}
        />
      </GridListTile>
      <GridListTile key={data.photos[2]._id} cols={0.4} rows={3}>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <img
              src={imgUrl(data.photos[2].photo.path, '?fit=clip&h=300')}
              alt={data.photos[2].photo.title}
            />
          </Grid>
          <Grid item xs={12}>
            <Calendar>
              <Title>{data.title}</Title>
              <Separator />
              <Date>
                {DateTime.fromISO(data.dateTime).toLocaleString(
                  DateTime.DATE_FULL
                )}
              </Date>
              <Separator />
              <Location>{data.location}</Location>
            </Calendar>
          </Grid>
        </Grid>
      </GridListTile>
      <GridListTile key={data.photos[3]._id} cols={0.6} rows={2}>
        <img
          src={imgUrl(data.photos[3].photo.path, '?fit=clip&h=450')}
          alt={data.photos[3].photo.title}
        />
      </GridListTile>
      <GridListTile key={data.photos[4]._id} cols={0.6} rows={2}>
        <img
          src={imgUrl(data.photos[4].photo.path, '?fit=clip&h=450')}
          alt={data.photos[4].photo.title}
        />
      </GridListTile>
      <GridListTile key={data.photos[5]._id} cols={0.8} rows={2}>
        <img
          src={imgUrl(data.photos[5].photo.path, '?fit=clip&h=450')}
          alt={data.photos[5].photo.title}
        />
      </GridListTile>
    </GridList>
  </Wrapper>
);

export { Loaded };

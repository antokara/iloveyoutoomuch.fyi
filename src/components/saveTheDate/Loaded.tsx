/**
 * Save The Date Component
 */
import { imgUrl } from 'Helpers/misc';
import { DateTime } from 'luxon';
import * as React from 'react';
import { graphql } from 'react-apollo';
import styledComponents from 'styled-components';

const CoupleNames: React.FunctionComponent = styledComponents.div`
  position: absolute;
  left: 1em;
  top: 1em;
  color: #fff;
  font-family: Rochester, sans-serif;
  font-size: 4em;
  text-shadow: 1px 1px 4px #000;

  @media (max-width: 1400px) {
    font-size: 3.5em;
  }

  @media (max-width: 1300px) {
    font-size: 3em;
  }
`;

const Title: React.FunctionComponent = styledComponents.div`
  font-family: Rochester, sans-serif;
  font-size: 2.5em;
  opacity: 0.8;
`;

const Date: React.FunctionComponent = styledComponents.div`
  font-family: Caladea, sans-serif;
  font-size: 2em;
`;

const Location: React.FunctionComponent = styledComponents.div`
  font-family: Caladea, sans-serif;
  font-size: 2em;
`;

const Separator: React.FunctionComponent = styledComponents.hr`
  color: #fff;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  width: 80%;
  margin: 1em auto;
`;

const Grid: React.FunctionComponent = styledComponents.div`
  height: calc(100vh - 8px);
  width: 100vw;
  display: grid;
  grid-template-columns: 20% 20% 20% 1fr 10% 10%;
  grid-template-rows: 31% 31% 38%;
  grid-template-areas:
    "waterfall waterfall waterfall umbrella leaning leaning"
    "waterfall waterfall waterfall umbrella calendar calendar"
    "laughing hugging hugging tree tree tree";
  grid-gap: 4px;

  @media (max-width: 1420px) {
    grid-template-columns: 20% 20% 15% 1fr 10% 15%;
  }

  @media (max-width: 1420px) {
    grid-template-columns: 25% 15% 15% 1fr 10% 15%;
  }
`;

const GridCell: React.FunctionComponent = styledComponents.div`
  position: relative;
  overflow: hidden;
  background-image: url(${p => p.img});
  background-size: cover;
  background-position-y: 100%;
`;

const Waterfall: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: waterfall;
  background-position-x: 100%;
`;

const Umbrella: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: umbrella;
  background-position-x: 50%;
`;

const Leaning: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: leaning;
  background-position-x: 100%;
`;

const Calendar: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: calendar;
  background: #597067;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.3em;

  @media (max-width: 1600px) {
    font-size: 0.8em;
  }
`;

const Laughing: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: laughing;
`;

const Hugging: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: hugging;
  background-position-x: 50%;
  background-position-y: 50%;

  @media (max-width: 1600px) {
    background-position-y: 60%;
  }
`;

const Tree: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: tree;
`;

const Loaded: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> => (
  <Grid>
    <Waterfall img={imgUrl(data.photos[0].photo.path, '?fit=max&w=1200')}>
      <CoupleNames>{data.coupleNames}</CoupleNames>
    </Waterfall>
    <Umbrella img={imgUrl(data.photos[1].photo.path, '?fit=max&h=700')} />
    <Leaning img={imgUrl(data.photos[2].photo.path, '?fit=max&h=300')} />
    <Calendar>
      <div>
        <Title>{data.title}</Title>
        <Separator />
        <Date>
          {DateTime.fromISO(data.dateTime).toLocaleString(DateTime.DATE_FULL)}
        </Date>
        <Separator />
        <Location>{data.location}</Location>
      </div>
    </Calendar>
    <Laughing img={imgUrl(data.photos[3].photo.path, '?fit=max&h=450')} />
    <Hugging img={imgUrl(data.photos[4].photo.path, '?fit=max&h=450')} />
    <Tree img={imgUrl(data.photos[5].photo.path, '?fit=max&h=450')} />
  </Grid>
);

export { Loaded };

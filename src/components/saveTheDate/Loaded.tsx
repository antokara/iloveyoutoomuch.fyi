/**
 * Save The Date Component
 */
import { imgUrl } from 'Helpers/misc';
import { DateTime } from 'luxon';
import * as React from 'react';
import { graphql } from 'react-apollo';
import styledComponents, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateX(-25%);
    opacity: 0;
  }

  to {
    transform: rotate(360deg);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const CoupleNames: React.FunctionComponent = styledComponents.div`
  position: absolute;
  left: 1em;
  top: 1em;
  color: #fff;
  font-family: Rochester, sans-serif;
  font-size: 4em;
  text-shadow: 1px 1px 4px #000;
  animation: ${slideIn} 1s linear forwards;

  @media (max-width: 1400px) {
    font-size: 3.5em;
  }

  @media (max-width: 1300px) {
    font-size: 3em;
  }

  @media (max-width: 500px) {
    font-size: 2em;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    font-size: 2.5em;
  }

  @media (orientation: landscape) and (max-height: 600px) and (max-width: 850px) {
    font-size: 2em;
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

  @media (orientation: landscape) and (max-width: 1420px) {
    grid-template-columns: 20% 20% 15% 1fr 10% 15%;
  }

  @media (orientation: landscape) and (max-width: 1420px) {
    grid-template-columns: 25% 15% 15% 1fr 10% 15%;
  }

  @media (orientation: landscape) and (max-width: 1220px) {
    grid-template-columns: 24% 13% 13% 1fr 10% 20%;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    width: calc(100vw - 16px);
    grid-template-columns: 20% 20% 10% 20% 30%;
    grid-template-rows: 50% 40% 90% 90%;
    grid-template-areas:
      "waterfall waterfall waterfall umbrella calendar"
      "waterfall waterfall waterfall umbrella calendar"
      "leaning leaning leaning laughing laughing"
      "tree tree tree hugging hugging";
  }

  @media (orientation: portrait) {
    width: calc(100vw - 16px);
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: 50% repeat(3, 40%);
    grid-template-areas:
      "waterfall waterfall waterfall waterfall waterfall"
      "leaning leaning leaning calendar calendar"
      "umbrella umbrella tree tree tree"
      "laughing laughing laughing hugging hugging";
  }

  @media (orientation: portrait) and (max-width: 500px) {
    grid-template-rows: 40% 20% 30% 25%;
    grid-template-areas:
      "waterfall waterfall waterfall waterfall waterfall"
      "calendar calendar calendar leaning leaning"
      "umbrella umbrella tree tree tree"
      "laughing laughing laughing hugging hugging";
  }

  @media (orientation: portrait) and (max-width: 320px) {
    grid-template-rows: 40% 25% 30% 25%;
  }
`;

const GridCell: React.FunctionComponent = styledComponents.div`
  position: relative;
  overflow: hidden;
  background-image: url(${p => p.img});
  background-size: cover;
  background-position-y: 100%;
  opacity: 0;
`;

const Waterfall: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: waterfall;
  background-position-x: 100%;
  animation: ${fadeIn} 1s linear forwards;

  @media (orientation: landscape) and (max-width: 1420px) {
    background-image: url(${p => p.img}&h=650);
  }

  @media (orientation: landscape) and (max-width: 1024px) {
    background-image: url(${p => p.img}&w=550);
  }

  @media (orientation: landscape) and (max-width: 1024px) {
    background-image: url(${p => p.img}&h=550);
  }

  @media (orientation: portrait) and (max-width: 1024px) {
    background-image: url(${p => p.img}&w=1024);
  }

  @media (orientation: portrait) and (max-width: 768px) {
    background-image: url(${p => p.img}&w=770);
  }

  @media (orientation: portrait) and (max-width: 500px) {
    background-image: url(${p => p.img}&w=1000);
  }
`;

const Umbrella: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: umbrella;
  background-position-x: 50%;
  animation: ${fadeIn} 1s linear forwards;
  animation-delay: 0.3s;

  @media (orientation: landscape) and (max-width: 1420px) {
    background-image: url(${p => p.img}&h=450);
  }

  @media (orientation: landscape) and (max-height: 600px) {
    background-image: url(${p => p.img}&h=360);
  }

  @media (orientation: portrait) and (max-width: 768px) {
    background-image: url(${p => p.img}&h=450);
  }

  @media (orientation: portrait) and (max-width: 500px) {
    background-image: url(${p => p.img}&h=250);
  }
`;

const Leaning: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: leaning;
  background-position-x: 70%;
  animation: ${fadeIn} 1s linear forwards;
  animation-delay: 0.6s;

  @media (orientation: portrait) and (max-width: 1024px) {
    background-image: url(${p => p.img}&h=550);
  }

  @media (orientation: landscape) and (max-width: 1420px) {
    background-image: url(${p => p.img}&h=210);
  }

  @media (orientation: landscape) and (max-height: 600px) {
    background-image: url(${p => p.img}&h=360);
  }

  @media (orientation: portrait) and (max-width: 768px) {
    background-image: url(${p => p.img}&h=450);
  }

  @media (orientation: portrait) and (max-width: 500px) {
    background-image: url(${p => p.img}&h=200);
  }
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
  animation: ${fadeIn} 1s linear forwards;
  animation-delay: 0.9s;

  @media (orientation: landscape) and (max-width: 1600px) {
    font-size: 0.8em;
  }

  @media (orientation: landscape) and (max-height: 600px) {
    font-size: 0.65em;
  }

  @media (orientation: portrait) and (max-width: 1000px) {
    font-size: 0.9em;
  }

  @media (orientation: portrait) and (max-width: 500px) {
    font-size: 0.6em;
  }

  @media (orientation: portrait) and (max-width: 400px) {
    font-size: 0.5em;
  }
`;

const Laughing: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: laughing;
  animation: ${fadeIn} 1s linear forwards;
  animation-delay: 0.6s;

  @media (orientation: landscape) and (max-width: 1420px) {
    background-image: url(${p => p.img}&h=250);
  }

  @media (orientation: landscape) and (max-height: 600px) {
    background-image: url(${p => p.img}&h=360);
  }

  @media (orientation: portrait) and (max-width: 1024px) {
    background-image: url(${p => p.img}&h=550);
  }

  @media (orientation: portrait) and (max-width: 768px) {
    background-image: url(${p => p.img}&h=450);
  }

  @media (orientation: portrait) and (max-width: 500px) {
    background-image: url(${p => p.img}&h=250);
  }
`;

const Hugging: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: hugging;
  background-position-x: 50%;
  background-position-y: 50%;
  animation: ${fadeIn} 1s linear forwards;
  animation-delay: 0.6s;

  @media (max-width: 1600px) {
    background-position-y: 60%;
  }

  @media (orientation: landscape) and (max-width: 1420px) {
    background-image: url(${p => p.img}&w=280);
  }

  @media (orientation: landscape) and (max-height: 600px) {
    background-image: url(${p => p.img}&h=360);
  }

  @media (orientation: portrait) and (max-width: 1024px) {
    background-image: url(${p => p.img}&h=550);
  }

  @media (orientation: portrait) and (max-width: 768px) {
    background-image: url(${p => p.img}&h=450);
  }

  @media (orientation: portrait) and (max-width: 500px) {
    background-image: url(${p => p.img}&h=250);
  }
`;

const Tree: React.FunctionComponent = styledComponents(GridCell)`
  grid-area: tree;
  animation: ${fadeIn} 1s linear forwards;
  animation-delay: 0.6s;

  @media (orientation: landscape) and (max-width: 1420px) {
    background-image: url(${p => p.img}&w=280);
  }

  @media (orientation: landscape) and (max-height: 600px) {
    background-image: url(${p => p.img}&h=360);
  }

  @media (orientation: portrait) and (max-width: 1024px) {
    background-image: url(${p => p.img}&h=550);
  }

  @media (orientation: portrait) and (max-width: 768px) {
    background-image: url(${p => p.img}&h=450);
  }

  @media (orientation: portrait) and (max-width: 500px) {
    background-image: url(${p => p.img}&h=250);
  }
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
    <Hugging img={imgUrl(data.photos[4].photo.path, '?fit=max&w=770')} />
    <Tree img={imgUrl(data.photos[5].photo.path, '?fit=max&w=770')} />
  </Grid>
);

export { Loaded };

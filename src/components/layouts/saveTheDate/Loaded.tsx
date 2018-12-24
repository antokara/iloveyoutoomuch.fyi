/**
 * Save The Date Component
 */
import { Calendar } from 'Components/saveTheDate/Calendar';
import { CoupleNames } from 'Components/saveTheDate/CoupleNames';
import { Date } from 'Components/saveTheDate/Date';
import { Grid } from 'Components/saveTheDate/Grid';
import { Hugging } from 'Components/saveTheDate/Hugging';
import { Laughing } from 'Components/saveTheDate/Laughing';
import { Leaning } from 'Components/saveTheDate/Leaning';
import { Location } from 'Components/saveTheDate/Location';
import { Separator } from 'Components/saveTheDate/Separator';
import { Title } from 'Components/saveTheDate/Title';
import { Tree } from 'Components/saveTheDate/Tree';
import { Umbrella } from 'Components/saveTheDate/Umbrella';
import { Waterfall } from 'Components/saveTheDate/Waterfall';
import { imgUrl } from 'Helpers/misc';
import { DateTime } from 'luxon';
import * as React from 'react';

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
          {DateTime.fromISO(data.dateTime)
            .setZone('Europe/Athens')
            .toLocaleString(DateTime.DATE_FULL)}
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

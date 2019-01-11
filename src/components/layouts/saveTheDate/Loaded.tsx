/**
 * Save The Date Component
 */
import { Back } from 'Components/layouts/saveTheDate/Back';
import { Calendar } from 'Components/layouts/saveTheDate/Calendar';
import { CoupleNames } from 'Components/layouts/saveTheDate/CoupleNames';
import { Date } from 'Components/layouts/saveTheDate/Date';
import { Grid } from 'Components/layouts/saveTheDate/Grid';
import { Hugging } from 'Components/layouts/saveTheDate/Hugging';
import { Laughing } from 'Components/layouts/saveTheDate/Laughing';
import { Leaning } from 'Components/layouts/saveTheDate/Leaning';
import { Location } from 'Components/layouts/saveTheDate/Location';
import { Separator } from 'Components/layouts/saveTheDate/Separator';
import { Title } from 'Components/layouts/saveTheDate/Title';
import { Tree } from 'Components/layouts/saveTheDate/Tree';
import { Umbrella } from 'Components/layouts/saveTheDate/Umbrella';
import { Waterfall } from 'Components/layouts/saveTheDate/Waterfall';
import { imgUrl } from 'Helpers/imgUrl';
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
    <Back />
  </Grid>
);

export { Loaded };

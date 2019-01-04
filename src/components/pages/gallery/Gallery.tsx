/**
 * Gallery page Component
 */
import { GridList, GridListTile } from '@material-ui/core';
import { PageWrapper } from 'Components/layouts/themed/PageWrapper';
import { imgUrl } from 'Helpers/imgUrl';
import * as React from 'react';
import { default as MediaQuery } from 'react-responsive';

const GridTiles: React.FunctionComponent = (photos, widePhotos) =>
  photos.map((photo, index: number) => (
    <GridListTile
      key={photo.photo._id}
      cols={widePhotos.indexOf(index) !== -1 ? 2 : 1}
    >
      <img
        src={imgUrl(photo.photo.path, '?fit=max&w=500')}
        alt={photo.photo.title}
      />
    </GridListTile>
  ));

const Gallery: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> => (
  <PageWrapper>
    <MediaQuery maxWidth={1224}>
      <GridList cellHeight={160} cols={3}>
        {GridTiles(data.photos, [0, 3, 7, 10, 14, 17, 18])}
      </GridList>
    </MediaQuery>
    <MediaQuery minWidth={1225}>
      <GridList cellHeight={230} cols={5}>
        {GridTiles(data.photos, [0, 2, 4, 5, 6, 7, 10, 11, 14, 17, 18, 19])}
      </GridList>
    </MediaQuery>
  </PageWrapper>
);

export { Gallery };

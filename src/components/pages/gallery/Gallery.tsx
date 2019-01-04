/**
 * Gallery page Component
 */
import { GridList, GridListTile } from '@material-ui/core';
import { PageWrapper } from 'Components/layouts/themed/PageWrapper';
import { imgUrl } from 'Helpers/imgUrl';
import * as React from 'react';

const GridTiles: React.FunctionComponent = photos =>
  photos.map((photo, index: number) => (
    <GridListTile
      key={photo.photo._id}
      cols={[0, 3, 7, 10, 14, 17, 18].indexOf(index) !== -1 ? 2 : 1}
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
    <GridList cellHeight={160} cols={3}>
      {GridTiles(data.photos)}
    </GridList>
  </PageWrapper>
);

export { Gallery };

/**
 * Gallery page Component
 */
import { GridList, GridListTile } from '@material-ui/core';
import { PageWrapper } from 'Components/layouts/themed/PageWrapper';
import { imgUrl } from 'Helpers/misc';
import * as React from 'react';
// import styledComponents from 'styled-components';

// const Wrapper: React.FunctionComponent = styledComponents.div`
//   color: green;
//   font-family: Rochester, sans-serif;
// `;

const Gallery: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> => (
  <PageWrapper>
    <GridList cellHeight={160} cols={3}>
      {data.photos.map(photo => (
        <GridListTile key={photo.photo._id} cols={1}>
          <img
            src={imgUrl(photo.photo.path, '?fit=max&w=500')}
            alt={photo.photo.title}
          />
        </GridListTile>
      ))}
    </GridList>
  </PageWrapper>
);

export { Gallery };

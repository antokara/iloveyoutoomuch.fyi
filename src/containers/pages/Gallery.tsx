/**
 * Gallery Container
 * returns the Loading indicator component while the GraphQL is pending and
 * when loaded, it returns the Gallery component
 */
import { Gallery as GalleryComponent } from 'Components/pages/gallery/Gallery';
import { Loading } from 'Components/shared/Loading';
import * as getGallery from 'Gql/getGallery';
import * as React from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router';

const GalleryContainer: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> =>
  data.loading ? <Loading /> : <GalleryComponent data={data.gallery} />;

const Gallery: React.ComponentClass = graphql(getGallery)(
  withRouter(GalleryContainer)
);

export { Gallery };

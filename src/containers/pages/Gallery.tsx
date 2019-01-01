/**
 * Save The Date Container
 */
import { Gallery as GalleryComponent } from 'Components/pages/Gallery';
import * as getGallery from 'Gql/getGallery';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router';

const Gallery: React.ComponentClass = graphql(getGallery)(
  withRouter(GalleryComponent)
);

export { Gallery };

/**
 * Gallery page Component
 */
import { GridList, GridListTile } from '@material-ui/core';
import { PageWrapper } from 'Components/layouts/themed/PageWrapper';
import { imgUrl } from 'Helpers/imgUrl';
import * as React from 'react';
import { default as Lightbox } from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { default as MediaQuery } from 'react-responsive';

const GridTiles: React.FunctionComponent = (photos, widePhotos, onClick) =>
  photos.map((photo, index: number) => (
    <GridListTile
      key={photo.photo._id}
      cols={widePhotos.indexOf(index) !== -1 ? 2 : 1}
    >
      <img
        onClick={() => onClick(index)}
        src={imgUrl(photo.photo.path, '?fit=max&w=500')}
        alt={photo.photo.title}
      />
    </GridListTile>
  ));

class Gallery extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
    this.open = this.open.bind(this);
  }

  public render(): React.ReactNode {
    const { data } = this.props;
    const { photoIndex, isOpen } = this.state;
    const images = data.photos.map(photo => ({
      src: imgUrl(photo.photo.path, '?fit=max&w=500'),
      caption: photo.photo.credit
        ? `credits: ${photo.photo.credit.blocks[0].text}`
        : ''
    }));
    return (
      <React.Fragment>
        <PageWrapper>
          <MediaQuery maxWidth={1023}>
            <GridList cellHeight={160} cols={3}>
              {GridTiles(data.photos, [0, 3, 7, 10, 14, 17, 18], this.open)}
            </GridList>
          </MediaQuery>
          <MediaQuery minWidth={1024}>
            <GridList cellHeight={230} cols={5}>
              {GridTiles(
                data.photos,
                [0, 2, 4, 5, 6, 7, 10, 11, 14, 17, 18, 19],
                this.open
              )}
            </GridList>
          </MediaQuery>
        </PageWrapper>
        {isOpen && (
          <Lightbox
            enableZoom={false}
            mainSrc={images[photoIndex].src}
            nextSrc={images[(photoIndex + 1) % images.length].src}
            prevSrc={
              images[(photoIndex + images.length - 1) % images.length].src
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
            imageCaption={images[photoIndex].caption}
          />
        )}
      </React.Fragment>
    );
  }

  private open(index: number): void {
    this.setState({ photoIndex: index, isOpen: true });
  }
}

export { Gallery };

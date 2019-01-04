import { imgUrl } from 'Helpers/imgUrl';
import * as React from 'react';

const Photo: React.FunctionComponent = ({
  url
}): React.ReactElement<React.ReactNode> => (
  <div>
    <Background img={imgUrl(data.background.path, '?fit=max&w=1920')} />
    <Header>{data.header}</Header>
    <SubHeader>{data.subHeader}</SubHeader>
    <MenuDate eventDateTime={data.eventDateTime} menu={data.menu} />
    <Routes />
  </div>
);

export { Loaded };

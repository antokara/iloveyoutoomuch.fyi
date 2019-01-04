/**
 * Themed Layout / Loaded Component
 */
import { Header } from 'Components/layouts/themed/Header';
import { Routes } from 'Components/layouts/themed/Routes';
import { SubHeader } from 'Components/layouts/themed/SubHeader';
import { Background } from 'Containers/layouts/themed/Background';
import { MenuDate } from 'Containers/layouts/themed/MenuDate';
import { imgUrl } from 'Helpers/imgUrl';
import * as React from 'react';

const Loaded: React.FunctionComponent = ({
  data
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

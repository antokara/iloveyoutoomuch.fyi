/**
 * Themed Layout / Loaded Component
 */
import { Background } from 'Components/layouts/themed/Background';
import { Header } from 'Components/layouts/themed/Header';
import { MenuDate } from 'Components/layouts/themed/menuDate/MenuDate';
import { Routes } from 'Components/layouts/themed/Routes';
import { SubHeader } from 'Components/layouts/themed/SubHeader';
import { imgUrl } from 'Helpers/misc';
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

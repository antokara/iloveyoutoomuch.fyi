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
import styledComponents from 'styled-components';

const Page: React.FunctionComponent = styledComponents.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-rows: auto auto;
`;

const Upper: React.FunctionComponent = styledComponents.div`
  position: relative;
`;

const Lower: React.FunctionComponent = styledComponents.div`
  position: relative;
`;

const Loaded: React.FunctionComponent = ({
  data
}): React.ReactElement<React.ReactNode> => (
  <React.Fragment>
    <Background img={imgUrl(data.background.path, '?fit=max&w=1920')} />
    <Page>
      <Upper>
        <Header>{data.header}</Header>
        <SubHeader>{data.subHeader}</SubHeader>
        <MenuDate eventDateTime={data.eventDateTime} menu={data.menu} />
      </Upper>
      <Lower>
        <Routes />
      </Lower>
    </Page>
  </React.Fragment>
);

export { Loaded };

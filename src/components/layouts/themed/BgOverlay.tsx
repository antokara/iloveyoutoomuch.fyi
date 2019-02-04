import bgOverlaySvg from 'Assets/bgOverlay.svg';
import { PALETTE } from 'Constants/PALETTE';
import * as React from 'react';
import { default as InlineSVG } from 'react-inlinesvg';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  position: relative;
  overflow: hidden;
  min-height: 100%;
`;

const Children: React.FunctionComponent = styledComponents.div`
  position: relative;
  padding-top: 4.5em;
`;

const SVG: React.FunctionComponent = styledComponents(InlineSVG)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const BgOverlay: React.FunctionComponent = ({
  children
}): React.ReactElement<React.ReactNode> => (
  <Wrapper>
    <SVG src={bgOverlaySvg} />
    <Children>{children}</Children>
  </Wrapper>
);

export { BgOverlay };

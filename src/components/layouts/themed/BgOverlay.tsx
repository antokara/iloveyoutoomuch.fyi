import bgOverlaySvg from 'Assets/bgOverlay.svg';
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
  padding-top: 3.5em;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding-top: 2.5em;
  }

  @media (min-width: 1024px) {
    padding-top: 3em;
  }
`;

const SVG: React.FunctionComponent = styledComponents(InlineSVG)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    width: 100%;
    height: 54px;
  }
`;

const Bg: React.FunctionComponent = styledComponents.div`
  position: absolute;
  left: 0;
  top: 54px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.82);
`;

const BgOverlay: React.FunctionComponent = ({
  children
}): React.ReactElement<React.ReactNode> => (
  <Wrapper>
    <SVG src={bgOverlaySvg} />
    <Bg />
    <Children>{children}</Children>
  </Wrapper>
);

export { BgOverlay };

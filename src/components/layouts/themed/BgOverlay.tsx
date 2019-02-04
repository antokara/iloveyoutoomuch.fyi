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

  @media (min-width: 601px) and (max-width: 650px) {
    padding-top: 5em;
  }

  @media (min-width: 651px) and (max-width: 700px) {
    padding-top: 5.5em;
  }

  @media (min-width: 701px) and (max-width: 768px) {
    padding-top: 6em;
  }

  @media (min-width: 851px) and (max-width: 1000px) {
    padding-top: 5.5em;
  }

  @media (min-width: 1001px) and (max-width: 1110px) {
    padding-top: 6em;
  }

  @media (min-width: 1111px) and (max-width: 1150px) {
    padding-top: 7em;
  }
`;

const SVG: React.FunctionComponent = styledComponents(InlineSVG)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  overflow: hidden;

  svg {
    width: 175%;
    height: auto;
  }
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

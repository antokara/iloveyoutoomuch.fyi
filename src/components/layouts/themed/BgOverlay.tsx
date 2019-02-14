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

  @media (min-width: 1400px) and (max-width: 1550px) {
    padding-top: 4.5em;
  }

  @media (min-width: 1551px) and (max-width: 2000px) {
    padding-top: 5.5em;
  }

  @media (min-width: 2001px) and (max-width: 2500px) {
    padding-top: 6.5em;
  }

  @media (min-width: 2501px) and (max-width: 2750px) {
    padding-top: 7.5em;
  }

  @media (min-width: 2751px) and (max-width: 3000px) {
    padding-top: 8.5em;
  }

  @media (min-width: 3001px) and (max-width: 3250px) {
    padding-top: 9.5em;
  }

  @media (min-width: 3251px) and (max-width: 3550px) {
    padding-top: 10.5em;
  }

  @media (min-width: 3551px) {
    padding-top: 11.5em;
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
    height: 100%;
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

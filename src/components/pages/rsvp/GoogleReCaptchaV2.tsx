/**
 * Google ReCaptch v2
 */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  text-align: center;
  margin-bottom: 1em;

  > div {
    display: inline-block;
  }
`;

const GoogleReCaptchaV2: React.FunctionComponent = ({
  fRef,
  siteKey
}): React.ReactElement<React.ReactNode> => (
  <Wrapper>
    <div ref={fRef} className="g-recaptcha" data-sitekey={siteKey} />
  </Wrapper>
);

GoogleReCaptchaV2.propTypes = {
  siteKey: PropTypes.string.isRequired,
  fRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]).isRequired
};

export { GoogleReCaptchaV2 };

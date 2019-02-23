/**
 * Footer Component
 *
 * shows the reCaptha privacy policy and terms of use
 * as mandated by Google here
 * https://developers.google.com/recaptcha/docs/faq
 * and hides the original reCaptcha badge
 */
import * as React from 'react';
import styledComponents from 'styled-components';

const Wrapper: React.FunctionComponent = styledComponents.div`
  color: #5a5a5a;
  font-size: 1.1em;
  margin: 6em 0 0 0;
  opacity: 0.7;

  a {
    color: #353535;
  }
`;

const Footer: React.FunctionComponent = (): React.ReactElement<
  React.ReactNode
> => (
  <Wrapper>
    This site is protected by reCAPTCHA and the Google{' '}
    <a href="https://policies.google.com/privacy" rel="external noopener">
      Privacy Policy
    </a>{' '}
    and{' '}
    <a href="https://policies.google.com/terms" rel="external noopener">
      Terms of Service
    </a>{' '}
    apply.
  </Wrapper>
);

export { Footer };

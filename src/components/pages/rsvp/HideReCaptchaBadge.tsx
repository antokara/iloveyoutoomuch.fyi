/**
 * HideReCaptchaBadge styled Component
 *
 * and hides the original reCaptcha badge but must be used with
 * src/components/pages/rsvp/Footer.tsx
 * which shows a text with links as required by Google
 */
import { createGlobalStyle } from 'styled-components';

const HideReCaptchaBadge = createGlobalStyle`
  .grecaptcha-badge {
    display: none;
  }
`;

export { HideReCaptchaBadge };

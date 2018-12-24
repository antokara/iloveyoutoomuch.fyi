import { keyframes, Keyframes } from 'styled-components';

const slideIn: Keyframes = keyframes`
  from {
    transform: translateX(-25%);
    opacity: 0;
  }

  to {
    transform: rotate(360deg);
    opacity: 1;
  }
`;

export { slideIn };

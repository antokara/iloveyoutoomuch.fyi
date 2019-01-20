/**
 * Google ReCaptcha Component
 */
import * as PropTypes from 'prop-types';
import * as React from 'react';
import reactDisplayName from 'react-display-name';

/**
 * check if the Google reCaptcha is available in the global variable
 */
const isGoogleReCaptchaAvailable: () => boolean = (): boolean =>
  typeof window !== undefined && typeof window.grecaptcha === 'object';

/**
 * HOC
 * @param WrappedComponent
 */
const withGoogleReCaptcha = (WrappedComponent, { action, siteKey }) => {
  class GoogleReCaptcha extends React.Component {
    private isAvailableTimer: Timer;

    constructor(props) {
      super(props);
      this.state = {
        available: false,
        token: undefined
      };
      this.isAvailable = this.isAvailable.bind(this);
    }

    protected componentDidMount(): void {
      // load the google reCaptcha v3 script tag
      // we cannot dynamically import because there are no CORS headers unfortunately
      // so the FETCH fails...
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      document.body.appendChild(script);
      // check for the Google reCaptcha availability with a timer
      this.isAvailableTimer = setInterval(this.isAvailable, 500);
    }

    /**
     * checks if the Google reCaptcha is available (invoked from the timer)
     * @see componentDidMount
     *
     * if it is available, it changes the state of "googleReCaptchaAvailable" to true
     * and clears the isGoogleReCaptchaAvailableTimer.
     *
     * after that, it attempts to get the token and if successful
     * it sets it in the state "googleReCaptchaToken"
     */
    private isAvailable(): void {
      if (isGoogleReCaptchaAvailable()) {
        clearInterval(this.isAvailableTimer);
        this.isAvailableTimer = undefined;
        this.setState({ available: true });
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(siteKey, { action }).then(
            (token: string): void => {
              this.setState({
                token
              });
            }
          );
        });
      }
    }

    render() {
      // filter out unused props
      const { action, ...passThroughProps } = this.props;
      const { ready, token } = this.state;
      return (
        <WrappedComponent
          {...passThroughProps}
          googleReCaptchaReady={ready}
          googleReCaptchaToken={token}
        />
      );
    }
  }

  // @see https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
  GoogleReCaptcha.displayName = `withNotification(${reactDisplayName(
    WrappedComponent
  )})`;

  return GoogleReCaptcha;
};

export { withGoogleReCaptcha };

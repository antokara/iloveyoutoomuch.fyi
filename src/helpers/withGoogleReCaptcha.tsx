/**
 * Google ReCaptcha Component
 */
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
        available: false, // available in global
        ready: false, // ready to accept calls
        retrieving: false, // when getting the token
        token: undefined // initially undefined and when retrieving
      };
      this.isAvailable = this.isAvailable.bind(this);
      this.getToken = this.getToken.bind(this);
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
          this.setState({ ready: true });
        });
      }
    }

    private getToken(): Promise<string> {
      const { ready } = this.state;
      if (ready) {
        // reset any previous stored token
        // since we will attempt to get a new one
        this.setState({
          token: undefined,
          retrieving: true
        });

        return window.grecaptcha.execute(siteKey, { action }).then(
          (token: string): Promise<string> => {
            this.setState({
              token,
              retrieving: false
            });

            return Promise.resolve(token);
          }
        );
      }

      return Promise.reject();
    }

    render() {
      // filter out unused props
      const { action, ...passThroughProps } = this.props;
      const { available, ready, token, retrieving } = this.state;
      return (
        <WrappedComponent
          {...passThroughProps}
          googleReCaptchaAvailable={available}
          googleReCaptchaReady={ready}
          googleReCaptchaRetrieving={retrieving}
          googleReCaptchaToken={token}
          googleReCaptchaGetToken={this.getToken}
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

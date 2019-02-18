/**
 * Google ReCaptcha V3 Component
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
const withGoogleReCaptcha = (
  WrappedComponent,
  { action, siteKeyV2, siteKeyV3 }
) => {
  class GoogleReCaptcha extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        v3WidgetId: undefined,
        available: false, // available in global
        ready: false, // ready to accept calls
        retrieving: false, // when getting the token
        tokenV2: undefined, // initially undefined and when retrieving
        tokenV3: undefined // initially undefined and when retrieving
      };
      this.isAvailable = this.isAvailable.bind(this);
      this.renderV2 = this.renderV2.bind(this);
      this.getTokenV2 = this.getTokenV2.bind(this);
      this.getTokenV3 = this.getTokenV3.bind(this);
      window.GoogleReCaptchaV3_onload = () => this.isAvailable();
    }

    protected componentDidMount(): void {
      // load the google reCaptcha v3 script tag
      // we cannot dynamically import because there are no CORS headers unfortunately
      // so the FETCH fails...
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKeyV3}&onload=GoogleReCaptchaV3_onload`;
      document.body.appendChild(script);
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
        this.setState({ available: true });
        window.grecaptcha.ready(() => {
          this.setState({ ready: true });
        });
      }
    }

    private renderV2(widget): Promise<string> {
      const { v3WidgetId } = this.state;
      // do not render twice the same
      if (v3WidgetId === undefined) {
        // render and get widget id
        this.setState({
          v3WidgetId: window.grecaptcha.render(widget)
        });
      } else {
        //reset it
        window.grecaptcha.reset(v3WidgetId);
      }
    }

    private getTokenV2(widgetId) {
      const { v3WidgetId } = this.state;
      return grecaptcha.getResponse(widgetId || v3WidgetId);
    }

    private getTokenV3(): Promise<string> {
      const { ready } = this.state;
      if (ready) {
        // reset any previous stored token
        // since we will attempt to get a new one
        this.setState({
          token: undefined,
          retrieving: true
        });

        return window.grecaptcha.execute(siteKeyV3, { action }).then(
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
      const { available, ready, tokenV2, tokenV3, retrieving } = this.state;
      return (
        <WrappedComponent
          {...passThroughProps}
          googleReCaptchaAvailable={available}
          googleReCaptchaReady={ready}
          googleReCaptchaV3Retrieving={retrieving}
          googleReCaptchaV2Token={tokenV2}
          googleReCaptchaV3Token={tokenV3}
          googleReCaptchaV3GetToken={this.getTokenV3}
          googleReCaptchaV2GetToken={this.getTokenV2}
          googleReCaptchaV2Render={this.renderV2}
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

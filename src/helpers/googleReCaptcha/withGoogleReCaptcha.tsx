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
 */
const withGoogleReCaptcha = (
  WrappedComponent,
  { action, siteKeyV2, siteKeyV3 }
) => {
  class GoogleReCaptcha extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        available: false, // available in global
        ready: false, // ready to accept calls
        retrieving: false, // when getting the v3 token
        tokenV3: undefined // initially undefined and when retrieving
      };
      this.isAvailable = this.isAvailable.bind(this);
      this.getTokenV2 = this.getTokenV2.bind(this);
      this.getTokenV3 = this.getTokenV3.bind(this);
      this.addV2Widget = this.addV2Widget.bind(this);
      this.removeV2Widget = this.removeV2Widget.bind(this);
      this.renderV2Widget = this.renderV2Widget.bind(this);
      this.v2Widgets = [];
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
      delete window.GoogleReCaptchaV3_onload;
      if (isGoogleReCaptchaAvailable()) {
        this.setState({ available: true });
        window.grecaptcha.ready(() => {
          this.setState({ ready: true });
        });
      }
    }

    /**
     * add and return the functional component
     */
    private addV2Widget({ siteKey }) {
      // generate ref
      const ref = React.createRef();
      const newWidget = {
        id: this.v2Widgets.length,
        wId: undefined,
        ref,
        siteKey,
        rendered: false
      };
      this.v2Widgets.push(newWidget);
      return newWidget;
    }

    private removeV2Widget(id) {
      this.v2Widgets = this.v2Widgets.filter(w => w.id !== id);
    }

    private renderV2Widget(id) {
      const widget = this.v2Widgets.find(w => w.id === id);
      // do not render twice the same
      if (widget.wId === undefined) {
        // render and get widget id
        if (widget.ref.current) {
          widget.wId = window.grecaptcha.render(widget.ref.current);
        }
      } else {
        //reset it
        window.grecaptcha.reset(widget.wId);
      }
    }

    private getTokenV2(id) {
      return grecaptcha.getResponse(this.v2Widgets.find(w => w.id === id.wId));
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
          googleReCaptchaV2AddWidget={this.addV2Widget}
          googleReCaptchaV2RenderWidget={this.renderV2Widget}
          googleReCaptchaV2RemoveWidget={this.removeV2Widget}
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

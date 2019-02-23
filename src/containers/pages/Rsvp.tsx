/**
 * RSVP Container
 * returns the Loading indicator component while the GraphQL is pending and
 * when loaded, it returns the Generic component
 */
import { resetRsvp } from 'Actions/resetRsvp';
import { rsvp } from 'Actions/rsvp';
import { Rsvp as RsvpComponent } from 'Components/pages/rsvp/Rsvp';
import { Loading } from 'Components/shared/Loading';
import { STATUSES } from 'Constants/STATUSES';
import * as getRsvp from 'Gql/getRsvp';
import { withGoogleReCaptcha } from 'Helpers/googleReCaptcha/withGoogleReCaptcha';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm, reset } from 'redux-form';

class RsvpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.onAccept = this.onAccept.bind(this);
    this.onDecline = this.onDecline.bind(this);
    this.resetRsvp = this.resetRsvp.bind(this);
    this.state = {
      widget: undefined
    };
  }

  componentDidUpdate(prevProps) {
    const {
      googleReCaptchaV2AddWidget,
      googleReCaptchaV2RenderWidget,
      googleReCaptchaV2RemoveWidget,
      status
    } = this.props;
    const { widget } = this.state;
    if (status !== prevProps.status && status === STATUSES.CHALLENGED) {
      // just became challenged
      this.setState({
        widget: googleReCaptchaV2AddWidget({
          siteKey: process.env.RE_CAPTCHA_V2_SITE_KEY
        })
      });
    } else if (
      status !== prevProps.status &&
      prevProps.status === STATUSES.CHALLENGED
    ) {
      // was challenged but not any more
      googleReCaptchaV2RemoveWidget(widget.id);
    }
  }

  /**
   * @see onAccept()
   * @see onDecline()
   */
  private submitHandler(values: object): void {
    const {
      rsvp,
      googleReCaptchaV2GetToken,
      googleReCaptchaV3GetToken,
      status
    } = this.props;
    const { widget } = this.state;
    if (status === STATUSES.CHALLENGED) {
      rsvp({
        ...values,
        tokenV2: googleReCaptchaV2GetToken(widget.wId)
      });
    } else {
      googleReCaptchaV3GetToken().then(tokenV3 => rsvp({ ...values, tokenV3 }));
    }
  }

  private onAccept(): void {
    const { handleSubmit } = this.props;
    handleSubmit(values =>
      this.submitHandler({
        ...values,
        accepted: true
      })
    )();
  }

  private onDecline(): void {
    const { handleSubmit } = this.props;
    handleSubmit(values =>
      this.submitHandler({
        ...values,
        accepted: false
      })
    )();
  }

  private resetRsvp(): void {
    const { resetRsvp, resetForm } = this.props;
    resetForm();
    resetRsvp();
  }

  render() {
    const {
      data,
      accepted,
      status,
      googleReCaptchaReady,
      googleReCaptchaV3Retrieving,
      googleReCaptchaV2RenderWidget
    } = this.props;
    const { widget } = this.state;
    if (data.loading || !googleReCaptchaReady) {
      return <Loading />;
    }

    return (
      <RsvpComponent
        body={data.rsvp.body}
        accept={data.rsvp.accept}
        resetRsvp={this.resetRsvp}
        addGuest={data.rsvp.addGuest}
        age={data.rsvp.age}
        body={data.rsvp.body}
        decline={data.rsvp.decline}
        error={data.rsvp.error}
        captchaChallenge={data.rsvp.captchaChallenge}
        firstName={data.rsvp.firstName}
        lastName={data.rsvp.lastName}
        removeGuest={data.rsvp.removeGuest}
        successAccept={data.rsvp.successAccept}
        successDecline={data.rsvp.successDecline}
        onAccept={this.onAccept}
        onDecline={this.onDecline}
        status={status}
        accepted={accepted}
        addMoreGuests={data.rsvp.addMoreGuests}
        googleReCaptchaRetrieving={googleReCaptchaV3Retrieving}
        googleReCaptchaV2RenderWidget={googleReCaptchaV2RenderWidget}
        googleReCaptchaV2Widget={widget}
      />
    );
  }
}

RsvpContainer.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  handleSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  rsvp: PropTypes.func.isRequired,
  googleReCaptchaReady: PropTypes.bool,
  googleReCaptchaV3Retrieving: PropTypes.bool,
  googleReCaptchaV2GetToken: PropTypes.func.isRequired,
  googleReCaptchaV3GetToken: PropTypes.func.isRequired,
  googleReCaptchaV2AddWidget: PropTypes.func.isRequired,
  googleReCaptchaV2RenderWidget: PropTypes.func.isRequired,
  googleReCaptchaV2RemoveWidget: PropTypes.func.isRequired
};

RsvpContainer.defaultProps = {
  googleReCaptchaReady: false,
  googleReCaptchaV3Retrieving: false
};

const mapStateToProps = state => ({
  status: state.rsvp.status,
  accepted: state.rsvp.accepted
});

const mapDispatchToProps = dispatch => ({
  rsvp: bindActionCreators(rsvp, dispatch),
  resetRsvp: bindActionCreators(resetRsvp, dispatch),
  resetForm: (): void => dispatch(reset('rsvp'))
});

const Rsvp: React.ComponentClass = graphql(getRsvp)(
  reduxForm({
    form: 'rsvp',
    enableReinitialize: true
  })(
    withGoogleReCaptcha(
      connect(
        mapStateToProps,
        mapDispatchToProps
      )(RsvpContainer),
      {
        siteKeyV2: process.env.RE_CAPTCHA_V2_SITE_KEY,
        siteKeyV3: process.env.RE_CAPTCHA_V3_SITE_KEY,
        action: 'rsvp'
      }
    )
  )
);

export { Rsvp };

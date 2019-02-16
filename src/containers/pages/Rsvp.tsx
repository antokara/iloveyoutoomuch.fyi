/**
 * RSVP Container
 * returns the Loading indicator component while the GraphQL is pending and
 * when loaded, it returns the Generic component
 */
import { resetRsvp } from 'Actions/resetRsvp';
import { rsvp } from 'Actions/rsvp';
import { Rsvp as RsvpComponent } from 'Components/pages/rsvp/Rsvp';
import { Loading } from 'Components/shared/Loading';
import * as getRsvp from 'Gql/getRsvp';
import { withGoogleReCaptcha } from 'Helpers/withGoogleReCaptcha';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';

class RsvpContainer extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.onAccept = this.onAccept.bind(this);
    this.onDecline = this.onDecline.bind(this);
  }

  /**
   * @see onAccept()
   * @see onDecline()
   */
  private submitHandler(values: object): void {
    const { rsvp, googleReCaptchaGetToken } = this.props;
    googleReCaptchaGetToken().then(token => rsvp({ ...values, token }));
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

  render() {
    const {
      data,
      accepted,
      status,
      googleReCaptchaReady,
      resetRsvp
    } = this.props;
    if (data.loading || !googleReCaptchaReady) {
      return <Loading />;
    }

    return (
      <RsvpComponent
        body={data.rsvp.body}
        accept={data.rsvp.accept}
        resetRsvp={resetRsvp}
        addGuest={data.rsvp.addGuest}
        age={data.rsvp.age}
        body={data.rsvp.body}
        decline={data.rsvp.decline}
        error={data.rsvp.error}
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
  googleReCaptchaGetToken: PropTypes.func.isRequired
};

RsvpContainer.defaultProps = {
  googleReCaptchaReady: false
};

const mapStateToProps = state => ({
  status: state.rsvp.status,
  accepted: state.rsvp.accepted
});

const mapDispatchToProps = dispatch => ({
  rsvp: bindActionCreators(rsvp, dispatch),
  resetRsvp: bindActionCreators(resetRsvp, dispatch)
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
        siteKey: process.env.RE_CAPTCHA_SITE_KEY,
        action: 'rsvp'
      }
    )
  )
);

export { Rsvp };

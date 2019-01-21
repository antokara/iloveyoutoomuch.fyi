/**
 * RSVP Container
 * returns the Loading indicator component while the GraphQL is pending and
 * when loaded, it returns the Generic component
 */
import { rsvp } from 'Actions/rsvp';
import { Rsvp as RsvpComponent } from 'Components/pages/Rsvp';
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
    const { rsvp } = this.props;
    rsvp(values);
  }

  private onAccept(): void {
    const { handleSubmit } = this.props;
    handleSubmit(values => this.submitHandler({ ...values, accepted: true }))();
  }

  private onDecline(): void {
    const { handleSubmit } = this.props;
    handleSubmit(values =>
      this.submitHandler({ ...values, accepted: false })
    )();
  }

  render() {
    const { data, accepted, status } = this.props;
    if (data.loading) {
      return <Loading />;
    }

    return (
      <RsvpComponent
        body={data.rsvp.body}
        accept={data.rsvp.accept}
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
      />
    );
  }
}

RsvpContainer.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  handleSubmit: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  rsvp: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  status: state.rsvp.status,
  accepted: state.rsvp.accepted
});

const mapDispatchToProps = dispatch => ({
  rsvp: bindActionCreators(rsvp, dispatch)
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

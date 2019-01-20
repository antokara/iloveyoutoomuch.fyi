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
   * called from the onSubmit event of the form
   */
  private submitHandler(values: object): void {
    const { rsvp } = this.props;
    console.log('submitHandler', values);
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
    const { data } = this.props;
    if (data.loading) {
      return <Loading />;
    }

    return (
      <RsvpComponent
        body={data.rsvp.body}
        onAccept={this.onAccept}
        onDecline={this.onDecline}
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
        null,
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

/**
 * Rsvp page Component
 */
import { Button, Grid } from '@material-ui/core';
import { BgOverlay } from 'Components/layouts/themed/BgOverlay';
import { PageWrapper } from 'Components/layouts/themed/PageWrapper';
import { AddMoreGuests } from 'Components/pages/rsvp/AddMoreGuests';
import { Error } from 'Components/pages/rsvp/Error';
import { Footer } from 'Components/pages/rsvp/Footer';
import { Form } from 'Components/pages/rsvp/Form';
import { GoogleReCaptchaV2 } from 'Components/pages/rsvp/GoogleReCaptchaV2';
import { Guests } from 'Components/pages/rsvp/Guests';
import { Progress } from 'Components/pages/rsvp/Progress';
import { Success } from 'Components/pages/rsvp/Success';
import { MarkdownWrapper } from 'Components/shared/MarkdownWrapper';
import { STATUSES } from 'Constants/STATUSES';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { FieldArray } from 'redux-form';

class Rsvp extends React.Component {
  constructor(props) {
    super(props);
    this.v2Ref = React.createRef();
  }

  isInProgress() {
    const { status, googleReCaptchaRetrieving } = this.props;

    return status === STATUSES.PENDING || googleReCaptchaRetrieving;
  }

  componentDidUpdate(prevProps) {
    const { googleReCaptchaV2Render, status } = this.props;
    if (status !== prevProps.status && status === STATUSES.CHALLENGED) {
      googleReCaptchaV2Render(this.v2Ref.current);
    }
  }

  subRender() {
    const {
      status,
      error,
      successAccept,
      successDecline,
      accepted,
      addMoreGuests,
      resetRsvp
    } = this.props;

    if (this.isInProgress()) {
      return <Progress />;
    }

    switch (status) {
      default:
        return this.form();
      case STATUSES.FAILED:
        // show error message and form,
        // to allow the user to retry
        return (
          <React.Fragment>
            <Error>{error}</Error>
            {this.form()}
          </React.Fragment>
        );
      case STATUSES.SUCCEEDED:
        let message: string;
        let addMore: React.ReactNode;
        if (accepted) {
          message = successAccept;
          addMore = (
            <AddMoreGuests
              resetRsvp={resetRsvp}
              addMoreGuests={addMoreGuests}
            />
          );
        } else {
          message = successDecline;
        }

        return (
          <React.Fragment>
            <Success>{message}</Success>
            {addMore}
          </React.Fragment>
        );
    }
  }

  form() {
    const {
      accept,
      addGuest,
      age,
      decline,
      firstName,
      lastName,
      removeGuest,
      onAccept,
      onDecline,
      status,
      captchaChallenge
    } = this.props;

    return (
      <Form>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <FieldArray
              name="guests"
              component={Guests}
              props={{
                addGuest,
                age,
                firstName,
                lastName,
                removeGuest
              }}
            />
          </Grid>
          {status === STATUSES.CHALLENGED && (
            <Grid item xs={12}>
              {captchaChallenge}
              <GoogleReCaptchaV2
                siteKey={process.env.RE_CAPTCHA_V2_SITE_KEY}
                fRef={this.v2Ref}
              />
            </Grid>
          )}
          <Grid item xs={6}>
            <Button
              variant="outlined"
              color="secondary"
              type="button"
              onClick={onDecline}
            >
              {decline}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={onAccept}
            >
              {accept}
            </Button>
          </Grid>
        </Grid>
      </Form>
    );
  }

  render() {
    const { body } = this.props;
    return (
      <BgOverlay>
        <PageWrapper>
          <MarkdownWrapper>
            <ReactMarkdown source={body} />
            {this.subRender()}
            <Footer />
          </MarkdownWrapper>
        </PageWrapper>
      </BgOverlay>
    );
  }
}

Rsvp.propTypes = {
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
  resetRsvp: PropTypes.func.isRequired,
  addGuest: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  decline: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  captchaChallenge: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  removeGuest: PropTypes.string.isRequired,
  successAccept: PropTypes.string.isRequired,
  successDecline: PropTypes.string.isRequired,
  addMoreGuests: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  accepted: PropTypes.bool,
  googleReCaptchaRetrieving: PropTypes.bool,
  googleReCaptchaV2Render: PropTypes.func.isRequired
};

Rsvp.defaultProps = {
  accepted: undefined,
  googleReCaptchaRetrieving: false
};

export { Rsvp };

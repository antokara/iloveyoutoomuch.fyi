/**
 * Rsvp page Component
 */
import { Button, CircularProgress, Grid } from '@material-ui/core';
import { BgOverlay } from 'Components/layouts/themed/BgOverlay';
import { PageWrapper } from 'Components/layouts/themed/PageWrapper';
import { Error } from 'Components/pages/rsvp/Error';
import { Footer } from 'Components/pages/rsvp/Footer';
import { Form } from 'Components/pages/rsvp/Form';
import { Guests } from 'Components/pages/rsvp/Guests';
import { Success } from 'Components/pages/rsvp/Success';
import { MarkdownWrapper } from 'Components/shared/MarkdownWrapper';
import { STATUSES } from 'Constants/STATUSES';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { FieldArray } from 'redux-form';

class Rsvp extends React.Component {
  isInProgress() {
    const { status } = this.props;

    return status === STATUSES.PENDING;
  }

  subRender() {
    const {
      status,
      error,
      successAccept,
      successDecline,
      accepted
    } = this.props;

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
      case STATUSES.PENDING:
        return <CircularProgress />;
      case STATUSES.SUCCEEDED:
        let message: string;
        if (accepted) {
          message = successAccept;
        } else {
          message = successDecline;
        }

        return <Success>{message}</Success>;
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
      onDecline
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
  addGuest: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  decline: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  removeGuest: PropTypes.string.isRequired,
  successAccept: PropTypes.string.isRequired,
  successDecline: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  accepted: PropTypes.bool
};

Rsvp.defaultProps = {
  accepted: undefined
};

export { Rsvp };

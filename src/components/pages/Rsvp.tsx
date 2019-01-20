/**
 * Rsvp page Component
 */
import {
  Button,
  Grid,
  IconButton,
  MenuItem,
  TextField
} from '@material-ui/core';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import { PageWrapper } from 'Components/layouts/themed/PageWrapper';
import { MarkdownWrapper } from 'Components/shared/MarkdownWrapper';
import { validators } from 'Helpers/validators';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import { Field, FieldArray } from 'redux-form';

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    fullWidth
    label={label}
    placeholder={`Enter your ${label}`}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const renderSelectField = ({
  label,
  input,
  meta: { touched, invalid, error },
  children,
  ...custom
}) => (
  <TextField
    select
    fullWidth
    label={label}
    placeholder={`Select your ${label}`}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  >
    {children}
  </TextField>
);

const ages = [
  {
    value: '0 - 7',
    label: '0 - 7'
  },
  {
    value: '7 - 12',
    label: '7 - 12'
  },
  {
    value: '13+',
    label: '13+'
  }
];

class RenderGuests extends React.Component {
  componentWillMount() {
    const { fields } = this.props;
    if (!fields.length) {
      fields.push({});
    }
  }

  render() {
    const {
      fields,
      meta: { error, submitFailed }
    } = this.props;
    return (
      <Grid container spacing={8}>
        {fields.map((member, index) => (
          <Grid item container xs={12} key={index} spacing={16}>
            <Grid item xs={6} md={4}>
              <Field
                component={renderTextField}
                name={`${member}.firstName`}
                label="First Name *"
                type="text"
                disabled={false}
                validate={[validators.required]}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Field
                component={renderTextField}
                name={`${member}.lastName`}
                label="Last Name *"
                type="text"
                disabled={false}
                validate={[validators.required]}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <Field
                name={`${member}.age`}
                label="Age *"
                component={renderSelectField}
                validate={[validators.required]}
              >
                {ages.map(age => (
                  <MenuItem key={age.value} value={age.value}>
                    {age.label}
                  </MenuItem>
                ))}
              </Field>
            </Grid>
            {index > 0 && (
              <Grid item>
                <IconButton
                  onClick={() => fields.remove(index)}
                  aria-label="Remove Guest"
                >
                  <RemoveCircleOutline color="secondary" />
                </IconButton>
              </Grid>
            )}
          </Grid>
        ))}
        {fields.length < 8 && (
          <Grid item xs={12}>
            <Button type="button" onClick={() => fields.push({})}>
              Add Guest &nbsp; <AddCircleOutline />
            </Button>
          </Grid>
        )}
        <Grid item xs={12}>
          {submitFailed && error && <span>{error}</span>}
        </Grid>
      </Grid>
    );
  }
}

/**
 * check if the Google reCaptcha is available in the global variable
 */
const isGoogleReCaptchaAvailable: () => boolean = (): boolean =>
  typeof window !== undefined && typeof window.grecaptcha === 'object';

class Rsvp extends React.Component {
  private isGoogleReCaptchaAvailableTimer: Timer;

  constructor(props) {
    super(props);
    this.state = {
      googleReCaptchaAvailable: false,
      googleReCaptchaToken: undefined
    };
    this.isGoogleReCaptchaAvailable = this.isGoogleReCaptchaAvailable.bind(
      this
    );
  }

  protected componentDidMount(): void {
    // load the google reCaptcha v3 script tag
    // we cannot dynamically import because there are no CORS headers unfortunately
    // so the FETCH fails...
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${
      process.env.RE_CAPTCHA_SITE_KEY
    }`;
    document.body.appendChild(script);
    // check for the Google reCaptcha availability with a timer
    this.isGoogleReCaptchaAvailableTimer = setInterval(
      this.isGoogleReCaptchaAvailable,
      500
    );
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
  private isGoogleReCaptchaAvailable(): void {
    if (isGoogleReCaptchaAvailable()) {
      this.setState({ googleReCaptchaAvailable: true });
      clearInterval(this.isGoogleReCaptchaAvailableTimer);
      this.isGoogleReCaptchaAvailableTimer = undefined;
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(process.env.RE_CAPTCHA_SITE_KEY, { action: 'RSVP' })
          .then(
            (token: string): void => {
              this.setState({
                googleReCaptchaToken: token
              });
            }
          );
      });
    }
  }

  render() {
    const { body, onAccept, onDecline } = this.props;
    return (
      <PageWrapper>
        <MarkdownWrapper>
          <ReactMarkdown source={body} />
          <form>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <FieldArray name="guests" component={RenderGuests} />
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  color="secondary"
                  type="button"
                  onClick={onDecline}
                >
                  Sadly Decline
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  type="button"
                  onClick={onAccept}
                >
                  Joyfully Accept
                </Button>
              </Grid>
            </Grid>
          </form>
        </MarkdownWrapper>
      </PageWrapper>
    );
  }
}

Rsvp.propTypes = {
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired
};

export { Rsvp };

/**
 * Rsvp page Component
 */
import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  MenuItem,
  TextField
} from '@material-ui/core';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';
import { PageWrapper } from 'Components/layouts/themed/PageWrapper';
import { MarkdownWrapper } from 'Components/shared/MarkdownWrapper';
import { STATUSES } from 'Constants/STATUSES';
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
      meta: { error, submitFailed },
      addGuest,
      age,
      firstName,
      lastName,
      removeGuest
    } = this.props;
    return (
      <Grid container spacing={8}>
        {fields.map((member, index) => (
          <Grid item container xs={12} key={index} spacing={16}>
            <Grid item xs={6} md={4}>
              <Field
                component={renderTextField}
                name={`${member}.firstName`}
                label={`${firstName} *`}
                type="text"
                disabled={false}
                validate={[validators.required]}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Field
                component={renderTextField}
                name={`${member}.lastName`}
                label={`${lastName} *`}
                type="text"
                disabled={false}
                validate={[validators.required]}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <Field
                name={`${member}.age`}
                label={`${age} *`}
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
                  aria-label={removeGuest}
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
              {addGuest} &nbsp; <AddCircleOutline />
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
        return error;
      case STATUSES.PENDING:
        return <CircularProgress />;
      case STATUSES.SUCCEEDED:
        if (accepted) {
          return successAccept;
        }

        return successDecline;
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
      <form>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <FieldArray
              name="guests"
              component={RenderGuests}
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
      </form>
    );
  }

  render() {
    const { body } = this.props;
    return (
      <PageWrapper>
        <MarkdownWrapper>
          <ReactMarkdown source={body} />
          {this.subRender()}
        </MarkdownWrapper>
      </PageWrapper>
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

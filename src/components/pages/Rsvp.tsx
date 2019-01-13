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
import {
  AddCircleOutline,
  RemoveCircleOutline,
  ThumbDown,
  ThumbUp
} from '@material-ui/icons';
import { PageWrapper } from 'Components/layouts/themed/PageWrapper';
import { MarkdownWrapper } from 'Components/shared/MarkdownWrapper';
import { validators } from 'Helpers/validators';
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

const renderGuests = ({ fields, meta: { error, submitFailed } }) => (
  <React.Fragment>
    <Button type="button" onClick={() => fields.push({})}>
      Add Guest &nbsp; <AddCircleOutline />
    </Button>
    {submitFailed && error && <span>{error}</span>}
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
          <Grid item>
            <IconButton
              onClick={() => fields.remove(index)}
              aria-label="Remove Guest"
            >
              <RemoveCircleOutline color="secondary" />
            </IconButton>
          </Grid>
        </Grid>
      ))}
    </Grid>
  </React.Fragment>
);

const Rsvp: React.FunctionComponent = ({
  body,
  // provided by redux-form
  handleSubmit
}): React.ReactElement<React.ReactNode> => (
  <PageWrapper>
    <MarkdownWrapper>
      <ReactMarkdown source={body} />
      <form onSubmit={handleSubmit}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <FieldArray name="guests" component={renderGuests} />
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="secondary" type="button">
              Will not Attend &nbsp; <ThumbDown />
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" color="primary" type="button">
              Will Attend &nbsp; <ThumbUp />
            </Button>
          </Grid>
        </Grid>
      </form>
    </MarkdownWrapper>
  </PageWrapper>
);

export { Rsvp };
